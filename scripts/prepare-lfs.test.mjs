import assert from 'node:assert/strict'
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import test from 'node:test'
import { prepareLfs } from './prepare-lfs.mjs'

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

test('skips without explicit opt-in, even on Vercel without Git or repository metadata', () => {
  for (const flag of [undefined, '', '0', 'true']) {
    prepareLfs({
      cwd: path.join(os.tmpdir(), 'nonexistent-gala-checkout'),
      env: { VERCEL: '1', SITEGROUND_LFS_PREBUILD: flag },
      run() {
        assert.fail('Disabled prebuild must not invoke Git')
      },
    })
  }
})

test('pulls all current assets and verifies filenames containing spaces', (t) => {
  const options = fixture(t)
  prepareLfs(options)
  assert.deepEqual(options.calls.map(({ args }) => args), [
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

test('fails clearly when Git LFS is unavailable', (t) => {
  const options = fixture(t)
  options.run = () => ({ status: 1 })
  assert.throws(() => prepareLfs(options), /Git LFS is required on the build host/)
})

test('fails clearly when Git itself cannot be launched', (t) => {
  const options = fixture(t)
  options.run = () => ({ error: new Error('spawn git ENOENT'), status: null })
  assert.throws(() => prepareLfs(options), /Git LFS is required.*spawn git ENOENT/)
})

test('stops after a failed download instead of allowing Vite to build', (t) => {
  const options = fixture(t)
  const run = options.run
  options.run = (...args) => args[1][1] === 'pull' ? { status: 1 } : run(...args)
  assert.throws(() => prepareLfs(options), /Git LFS pull failed/)
})

test('rejects remaining pointers even if git lfs pull exits successfully', (t) => {
  const options = fixture(t, 'version https://git-lfs.github.com/spec/v1\noid sha256:abc\nsize 100\n')
  assert.throws(() => prepareLfs(options), /LFS pointer remains in media with spaces.png/)
})

test('rejects missing and empty assets', (t) => {
  const options = fixture(t, '')
  assert.throws(() => prepareLfs(options), /LFS asset is empty/)
  rmSync(path.join(options.cwd, options.name))
  assert.throws(() => prepareLfs(options), /ENOENT/)
})

test('rejects an empty or malformed LFS inventory', (t) => {
  const options = fixture(t)
  for (const stdout of ['{"files":[]}', '{}', 'not json']) {
    options.run = () => ({ status: 0, stdout })
    assert.throws(() => prepareLfs(options))
  }
})
