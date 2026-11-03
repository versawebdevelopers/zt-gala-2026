import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import test from 'node:test'
import { downloadArchive, installLfs, prepareLfs } from './prepare-lfs.mjs'

function fixture(t, contents = 'real media bytes') {
  const cwd = mkdtempSync(path.join(os.tmpdir(), 'gala-lfs-'))
  t.after(() => rmSync(cwd, { recursive: true, force: true }))
  const name = 'media with spaces.png'
  writeFileSync(path.join(cwd, name), contents)
  const calls = []
  const run = (command, args, options) => {
    calls.push({ command, args, options })
    return { status: 0, stdout: JSON.stringify({ files: [{ name }] }) }
  }
  return { cwd, run, calls, name, env: { SITEGROUND_LFS_PREBUILD: '1' } }
}

test('npm build keeps Vite and runs the LFS lifecycle script first', () => {
  const { scripts } = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'))
  assert.equal(scripts.prebuild, 'node scripts/prepare-lfs.mjs')
  assert.equal(scripts.build, 'vite build')
})

test('skips without explicit opt-in, even on Vercel without Git or repository metadata', async () => {
  for (const flag of [undefined, '', '0', 'true']) {
    await prepareLfs({
      cwd: path.join(os.tmpdir(), 'nonexistent-gala-checkout'),
      env: { VERCEL: '1', SITEGROUND_LFS_PREBUILD: flag },
      run() {
        assert.fail('Disabled prebuild must not invoke Git')
      },
      install() {
        assert.fail('Disabled prebuild must not download or install anything')
      },
    })
  }
})

test('uses existing Git LFS without installation and verifies filenames containing spaces', async (t) => {
  const options = fixture(t)
  options.install = () => assert.fail('Existing Git LFS must not trigger installation')
  await prepareLfs(options)
  assert.deepEqual(options.calls.map(({ args }) => args), [
    ['--version'],
    ['lfs', 'version'],
    ['lfs', 'pull', '--include=', '--exclude='],
    ['lfs', 'ls-files', '--json'],
  ])
  for (const call of options.calls) {
    assert.equal(call.command, 'git')
    assert.equal(call.options.cwd, options.cwd)
    assert.equal(call.options.env.GIT_TERMINAL_PROMPT, '0')
  }
})

test('fails clearly when Git itself cannot be launched without attempting installation', async (t) => {
  const options = fixture(t)
  options.run = () => ({ error: new Error('spawn git ENOENT'), status: null })
  options.install = () => assert.fail('Missing Git must not trigger a download')
  await assert.rejects(prepareLfs(options), /Git is required.*spawn git ENOENT/)
})

test('installs missing Git LFS and exposes it only to child Git commands, then cleans up', async (t) => {
  const options = fixture(t)
  const run = options.run
  let probes = 0
  let cleaned = false
  const originalPath = process.env.PATH
  options.env.PATH = 'original-path'
  options.run = (...args) => {
    if (args[1][1] === 'version' && probes++ === 0) return { status: 1 }
    return run(...args)
  }
  options.install = async () => ({
    binDirectory: 'private-lfs',
    cleanup() { cleaned = true },
  })
  await prepareLfs(options)
  const pull = options.calls.find(({ args }) => args[1] === 'pull')
  assert.equal(pull.options.env.PATH, `private-lfs${path.delimiter}original-path`)
  assert.equal(process.env.PATH, originalPath)
  assert.equal(cleaned, true)
})

test('stops after a failed LFS object download instead of allowing Vite to build', async (t) => {
  const options = fixture(t)
  const run = options.run
  options.run = (...args) => args[1][1] === 'pull' ? { status: 1 } : run(...args)
  await assert.rejects(prepareLfs(options), /Git LFS pull failed/)
})

test('rejects remaining pointers even if git lfs pull exits successfully', async (t) => {
  const options = fixture(t, 'version https://git-lfs.github.com/spec/v1\noid sha256:abc\nsize 100\n')
  await assert.rejects(prepareLfs(options), /LFS pointer remains in media with spaces.png/)
})

test('rejects missing and empty assets', async (t) => {
  const options = fixture(t, '')
  await assert.rejects(prepareLfs(options), /LFS asset is empty/)
  rmSync(path.join(options.cwd, options.name))
  await assert.rejects(prepareLfs(options), /ENOENT/)
})

test('rejects an empty or malformed LFS inventory', async (t) => {
  const options = fixture(t)
  for (const stdout of ['{"files":[]}', '{}', 'not json']) {
    options.run = () => ({ status: 0, stdout })
    await assert.rejects(prepareLfs(options))
  }
})

test('propagates installer errors without pulling LFS objects', async (t) => {
  const options = fixture(t)
  const run = options.run
  options.run = (...args) => args[1][1] === 'version' ? { status: 1 } : run(...args)
  options.install = async () => { throw new Error('download denied') }
  await assert.rejects(prepareLfs(options), /download denied/)
  assert.equal(options.calls.some(({ args }) => args[1] === 'pull'), false)
})

test('cleans up an installed binary if the build host cannot execute it', async (t) => {
  const options = fixture(t)
  const run = options.run
  let cleaned = false
  options.run = (...args) => args[1][1] === 'version' ? { status: 1 } : run(...args)
  options.install = async () => ({
    binDirectory: 'private-lfs',
    cleanup() { cleaned = true },
  })
  await assert.rejects(prepareLfs(options), /Installed Git LFS cannot execute/)
  assert.equal(cleaned, true)
  assert.equal(options.calls.some(({ args }) => args[1] === 'pull'), false)
})

test('cleans up an installed binary when LFS authentication or object download fails', async (t) => {
  const options = fixture(t)
  const run = options.run
  let probes = 0
  let cleaned = false
  options.run = (...args) => {
    if (args[1][1] === 'version' && probes++ === 0) return { status: 1 }
    if (args[1][1] === 'pull') return { status: 1 }
    return run(...args)
  }
  options.install = async () => ({
    binDirectory: 'private-lfs',
    cleanup() { cleaned = true },
  })
  await assert.rejects(prepareLfs(options), /Git LFS pull failed/)
  assert.equal(cleaned, true)
})

test('download verifies checksum before saving archive, with a bounded timeout', async (t) => {
  const { cwd } = fixture(t)
  const bytes = Buffer.from('mock archive')
  const checksum = createHash('sha256').update(bytes).digest('hex')
  const destination = path.join(cwd, 'archive.tar.gz')
  await downloadArchive('https://example.invalid/archive', checksum, destination, async (url, options) => {
    assert.ok(options.signal instanceof AbortSignal)
    return new Response(bytes)
  })
  assert.deepEqual(readFileSync(destination), bytes)
})

test('download rejects HTTP, network, timeout, size and integrity errors', async (t) => {
  const { cwd } = fixture(t)
  const destination = path.join(cwd, 'archive.tar.gz')
  for (const fetchUrl of [
    async () => new Response(null, { status: 403 }),
    async () => { throw new Error('network blocked') },
    async () => { throw new Error('download timed out') },
    async () => new Response(Buffer.alloc(16 * 1024 * 1024 + 1)),
    async () => new Response('corrupt archive'),
  ]) {
    await assert.rejects(downloadArchive('https://example.invalid/archive', 'bad-hash', destination, fetchUrl))
    assert.equal(existsSync(destination), false)
  }
})

test('installer uses pinned Linux archives and official checksums, extracts only binary, and cleans up', async (t) => {
  const { cwd, env } = fixture(t)
  for (const [arch, target, checksum] of [
    ['x64', 'amd64', 'e72cf723a4a660438862282e8aecf3885fc8123e88bfcad534cf6b941a354b75'],
    ['arm64', 'arm64', '67895dd77b63329796bc5efdd47b57f218e1f7b98717ebaf936a8238dbcaec0f'],
  ]) {
    const installed = await installLfs({
      cwd, env, platform: 'linux', arch,
      download: async (url, expected, destination) => {
        assert.equal(url, `https://github.com/git-lfs/git-lfs/releases/download/v3.8.1/git-lfs-linux-${target}-v3.8.1.tar.gz`)
        assert.equal(expected, checksum)
        writeFileSync(destination, 'mock verified archive')
      },
      run(command, args) {
        assert.equal(command, 'tar')
        assert.equal(args.at(-1), 'git-lfs-3.8.1/git-lfs')
        const directory = path.join(args[3], 'git-lfs-3.8.1')
        mkdirSync(directory)
        writeFileSync(path.join(directory, 'git-lfs'), 'mock executable')
        return { status: 0 }
      },
    })
    assert.ok(existsSync(path.join(installed.binDirectory, 'git-lfs')))
    installed.cleanup()
    assert.equal(existsSync(installed.binDirectory), false)
  }
})

test('installer rejects unsupported platforms before download', async (t) => {
  const { cwd, env } = fixture(t)
  for (const [platform, arch] of [['win32', 'x64'], ['linux', 'ia32']]) {
    await assert.rejects(installLfs({
      cwd, env, platform, arch,
      download: () => assert.fail('Unsupported hosts must not download'),
    }), /Linux x64\/arm64 only/)
  }
})

test('installer cleans temporary directory on download, integrity, extraction and filesystem failures', async (t) => {
  const { cwd, env } = fixture(t)
  for (const mode of ['download', 'integrity', 'tar', 'missing-tar', 'missing-binary']) {
    await assert.rejects(installLfs({
      cwd, env, platform: 'linux', arch: 'x64',
      download: async (url, checksum, destination) => {
        if (mode === 'download') throw new Error('download denied')
        if (mode === 'integrity') {
          await downloadArchive(url, checksum, destination, async () => new Response('corrupt'))
        }
        writeFileSync(destination, 'mock archive')
      },
      run: () => {
        assert.notEqual(mode, 'integrity', 'Unverified archive must never be extracted')
        if (mode === 'missing-tar') return { error: new Error('spawn tar ENOENT') }
        return { status: mode === 'tar' ? 1 : 0 }
      },
    }), /Git LFS installation failed/)
    assert.deepEqual(readdirSync(cwd).filter((name) => name.startsWith('.tmp-lfs-')), [])
  }
})
