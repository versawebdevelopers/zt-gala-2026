import { spawnSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { chmodSync, closeSync, mkdtempSync, openSync, readSync, rmSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptPath = fileURLToPath(import.meta.url)
const repositoryRoot = path.resolve(path.dirname(scriptPath), '..')

const lfsVersion = '3.8.1'
// Official v3.8.1 sha256sums.asc, also published as GitHub release asset digests.
const releases = {
  x64: { architecture: 'amd64', checksum: 'e72cf723a4a660438862282e8aecf3885fc8123e88bfcad534cf6b941a354b75' },
  arm64: { architecture: 'arm64', checksum: '67895dd77b63329796bc5efdd47b57f218e1f7b98717ebaf936a8238dbcaec0f' },
}

export async function downloadArchive(url, checksum, destination, fetchUrl = fetch) {
  const response = await fetchUrl(url, { signal: AbortSignal.timeout(120_000) })
  if (!response.ok) {
    throw new Error(`Git LFS download failed: HTTP ${response.status}`)
  }
  const chunks = []
  let length = 0
  for await (const chunk of response.body) {
    length += chunk.length
    if (length > 16 * 1024 * 1024) {
      throw new Error('Git LFS archive exceeds the 16 MiB download limit.')
    }
    chunks.push(chunk)
  }
  const archive = Buffer.concat(chunks)
  if (createHash('sha256').update(archive).digest('hex') !== checksum) {
    throw new Error('Git LFS archive checksum mismatch; refusing to extract or execute it.')
  }
  writeFileSync(destination, archive, { flag: 'wx' })
}

export async function installLfs({
  cwd,
  env,
  run = spawnSync,
  download = downloadArchive,
  platform = process.platform,
  arch = process.arch,
}) {
  const release = releases[arch]
  if (platform !== 'linux' || !release) {
    throw new Error(`Automatic Git LFS installation supports Linux x64/arm64 only (found ${platform}/${arch}).`)
  }
  const directory = mkdtempSync(path.join(cwd, '.tmp-lfs-'))
  const cleanup = () => rmSync(directory, { recursive: true, force: true })
  try {
    const archive = path.join(directory, 'git-lfs.tar.gz')
    const url = `https://github.com/git-lfs/git-lfs/releases/download/v${lfsVersion}/git-lfs-linux-${release.architecture}-v${lfsVersion}.tar.gz`
    console.log(`[prebuild:lfs] Installing pinned Git LFS ${lfsVersion} in a temporary build directory...`)
    await download(url, release.checksum, archive)
    const result = run('tar', [
      '-xzf', archive, '-C', directory, `git-lfs-${lfsVersion}/git-lfs`,
    ], { cwd, env, stdio: 'inherit' })
    if (result.error || result.status !== 0) {
      throw new Error(`Unable to extract Git LFS; the build host needs tar with gzip support${result.error ? `: ${result.error.message}` : '.'}`)
    }
    const binDirectory = path.join(directory, `git-lfs-${lfsVersion}`)
    chmodSync(path.join(binDirectory, 'git-lfs'), 0o755)
    rmSync(archive)
    return { binDirectory, cleanup }
  } catch (error) {
    cleanup()
    throw new Error(`Git LFS installation failed: ${error.message}`, { cause: error })
  }
}

export async function prepareLfs({
  cwd = repositoryRoot,
  run = spawnSync,
  env = process.env,
  install = installLfs,
} = {}) {
  if (env.SITEGROUND_LFS_PREBUILD !== '1') {
    console.log('[prebuild:lfs] Skipping LFS preparation (opt in on SiteGround with SITEGROUND_LFS_PREBUILD=1).')
    return
  }

  let buildEnv = { ...env, GIT_TERMINAL_PROMPT: '0' }
  function git(args, message, capture = false) {
    const result = run('git', args, {
      cwd,
      encoding: 'utf8',
      stdio: capture ? ['ignore', 'pipe', 'inherit'] : 'inherit',
      env: buildEnv,
    })
    if (result.error || result.status !== 0) {
      throw new Error(`${message}${result.error ? `: ${result.error.message}` : ''}`)
    }
    return result.stdout
  }

  git(['--version'], 'Git is required on the build host; automatic LFS installation cannot supply Git.')
  const probe = run('git', ['lfs', 'version'], {
    cwd, env: buildEnv, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'],
  })
  let installation
  let temporaryHooks
  try {
    if (probe.error || probe.status !== 0) {
      installation = await install({ cwd, env: buildEnv, run })
      buildEnv = { ...buildEnv, PATH: `${installation.binDirectory}${path.delimiter}${buildEnv.PATH || ''}` }
      git(['lfs', 'version'], 'Installed Git LFS cannot execute. Check build-host permissions and architecture.')
    } else {
      console.log(probe.stdout.trim())
    }
    console.log('[prebuild:lfs] Initializing repository-local LFS filters (no hooks)...')
    git(
      ['lfs', 'install', '--local', '--skip-repo'],
      'Unable to initialize repository-local Git LFS filters; check repository Git metadata and config write permissions.',
    )
    // LFS filter-process can auto-install hooks during checkout despite --skip-repo.
    temporaryHooks = mkdtempSync(path.join(cwd, '.tmp-lfs-hooks-'))
    const configIndex = Number(buildEnv.GIT_CONFIG_COUNT || '0')
    buildEnv = {
      ...buildEnv,
      GIT_CONFIG_COUNT: String(configIndex + 1),
      [`GIT_CONFIG_KEY_${configIndex}`]: 'core.hooksPath',
      [`GIT_CONFIG_VALUE_${configIndex}`]: temporaryHooks,
    }
    console.log('[prebuild:lfs] Downloading LFS assets for the current checkout...')
    git(
      ['lfs', 'pull', '--include=', '--exclude='],
      'Git LFS pull failed. Check the build host GitHub credentials, network access, and LFS quota/storage.',
    )

    const { files } = JSON.parse(
      git(['lfs', 'ls-files', '--json'], 'Unable to list Git LFS assets.', true),
    )
    if (!Array.isArray(files) || files.length === 0) {
      throw new Error('No Git LFS assets found; check that the build contains the repository Git metadata.')
    }
    for (const { name } of files) {
      const descriptor = openSync(path.resolve(cwd, name), 'r')
      try {
        const buffer = Buffer.alloc(128)
        const length = readSync(descriptor, buffer, 0, buffer.length, 0)
        if (buffer.subarray(0, length).toString('utf8').startsWith('version https://git-lfs.github.com/spec/v1')) {
          throw new Error(`LFS pointer remains in ${name}; refusing to build placeholder assets.`)
        }
        if (length === 0) {
          throw new Error(`LFS asset is empty: ${name}`)
        }
      } finally {
        closeSync(descriptor)
      }
    }
    console.log(`[prebuild:lfs] Verified ${files.length} LFS assets; starting Vite build.`)
  } finally {
    try {
      if (temporaryHooks) rmSync(temporaryHooks, { recursive: true, force: true })
    } finally {
      installation?.cleanup()
    }
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === scriptPath) {
  try {
    await prepareLfs()
  } catch (error) {
    console.error(`[prebuild:lfs] ${error.message}`)
    process.exitCode = 1
  }
}
