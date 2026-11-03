import { spawnSync } from 'node:child_process'
import { closeSync, openSync, readSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptPath = fileURLToPath(import.meta.url)
const repositoryRoot = path.resolve(path.dirname(scriptPath), '..')

export function prepareLfs({ cwd = repositoryRoot, run = spawnSync, env = process.env } = {}) {
  if (env.SITEGROUND_LFS_PREBUILD !== '1') {
    console.log('[prebuild:lfs] Skipping LFS preparation (opt in on SiteGround with SITEGROUND_LFS_PREBUILD=1).')
    return
  }

  function git(args, message, capture = false) {
    const result = run('git', args, {
      cwd,
      encoding: 'utf8',
      stdio: capture ? ['ignore', 'pipe', 'inherit'] : 'inherit',
      env: { ...env, GIT_TERMINAL_PROMPT: '0' },
    })
    if (result.error || result.status !== 0) {
      throw new Error(`${message}${result.error ? `: ${result.error.message}` : ''}`)
    }
    return result.stdout
  }

  git(['lfs', 'version'], 'Git LFS is required on the build host. Install/enable git-lfs before building.')
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
}

if (process.argv[1] && path.resolve(process.argv[1]) === scriptPath) {
  try {
    prepareLfs()
  } catch (error) {
    console.error(`[prebuild:lfs] ${error.message}`)
    process.exitCode = 1
  }
}
