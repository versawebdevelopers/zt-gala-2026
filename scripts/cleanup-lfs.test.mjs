import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, rmSync, symlinkSync, writeFileSync } from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import test from 'node:test'
import { cleanupLfs } from './cleanup-lfs.mjs'

function fixture(t) {
  const cwd = realpathSync(mkdtempSync(path.join(os.tmpdir(), 'gala-lfs-cleanup-')))
  t.after(() => rmSync(cwd, { recursive: true, force: true }))
  const objects = path.join(cwd, '.git', 'lfs', 'objects')
  mkdirSync(path.join(objects, 'ab', 'cd'), { recursive: true })
  writeFileSync(path.join(objects, 'ab', 'cd', 'cached-object'), 'cached media')
  for (const name of ['src', 'dist', 'old-build', '.git/hooks', '.git/objects', '.git/lfs/logs']) {
    const directory = path.join(cwd, ...name.split('/'))
    mkdirSync(directory, { recursive: true })
    writeFileSync(path.join(directory, 'keep'), 'preserved')
  }
  writeFileSync(path.join(cwd, '.git', 'config'), 'preserved config')
  return { cwd, objects, env: { SITEGROUND_LFS_PREBUILD: '1' } }
}

test('npm postbuild invokes cleanup after the unchanged Vite build', () => {
  const { scripts } = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'))
  assert.equal(scripts.build, 'vite build')
  assert.equal(scripts.postbuild, 'node scripts/cleanup-lfs.mjs')
})

test('disabled cleanup never accesses filesystem or removes cache', (t) => {
  const options = fixture(t)
  for (const flag of [undefined, '', '0', 'true']) {
    cleanupLfs({ cwd: options.cwd, env: { SITEGROUND_LFS_PREBUILD: flag }, remove: () => assert.fail('Unexpected deletion') })
    cleanupLfs({ cwd: path.join(options.cwd, 'nonexistent'), env: {} })
    assert.ok(existsSync(options.objects))
  }
})

test('enabled cleanup removes only cache and preserves source, output, old builds and other Git metadata', (t) => {
  const options = fixture(t)
  cleanupLfs(options)
  assert.equal(existsSync(options.objects), false)
  for (const name of ['src', 'dist', 'old-build', '.git/hooks', '.git/objects', '.git/lfs/logs']) {
    assert.equal(readFileSync(path.join(options.cwd, ...name.split('/'), 'keep'), 'utf8'), 'preserved')
  }
  assert.equal(readFileSync(path.join(options.cwd, '.git', 'config'), 'utf8'), 'preserved config')
  cleanupLfs(options)
})

test('missing LFS directory is an explicit no-op', (t) => {
  const options = fixture(t)
  rmSync(path.join(options.cwd, '.git', 'lfs'), { recursive: true })
  cleanupLfs(options)
})

test('rejects gitfiles, shared storage, missing metadata and non-directory cache paths', (t) => {
  for (const mode of ['gitfile', 'shared', 'linked-worktrees', 'missing', 'lfs-file', 'objects-file']) {
    const options = fixture(t)
    const git = path.join(options.cwd, '.git')
    if (mode === 'gitfile' || mode === 'missing') {
      rmSync(git, { recursive: true })
      if (mode === 'gitfile') writeFileSync(git, 'gitdir: outside-checkout')
    } else if (mode === 'shared') {
      writeFileSync(path.join(git, 'commondir'), '..')
    } else if (mode === 'linked-worktrees') {
      mkdirSync(path.join(git, 'worktrees'))
    } else {
      const target = mode === 'lfs-file' ? path.join(git, 'lfs') : options.objects
      rmSync(target, { recursive: true })
      writeFileSync(target, 'not a directory')
    }
    assert.throws(() => cleanupLfs(options), /Refusing/)
  }
})

test('rejects symlinked checkout, metadata, cache parents, cache and nested entries without deletion', (t) => {
  for (const mode of ['checkout', '.git', 'lfs', 'objects', 'nested']) {
    const options = fixture(t)
    const outside = fixture(t)
    let target
    if (mode === 'checkout') target = path.join(options.cwd, 'linked-checkout')
    else if (mode === '.git') target = path.join(options.cwd, '.git')
    else if (mode === 'lfs') target = path.join(options.cwd, '.git', 'lfs')
    else if (mode === 'objects') target = options.objects
    else target = path.join(options.objects, 'nested-link')
    if (existsSync(target)) rmSync(target, { recursive: true })
    symlinkSync(outside.cwd, target, process.platform === 'win32' ? 'junction' : 'dir')
    assert.throws(() => cleanupLfs({ ...options, cwd: mode === 'checkout' ? target : options.cwd }), /Refusing/)
    assert.ok(existsSync(outside.objects))
    assert.equal(readFileSync(path.join(outside.cwd, 'src', 'keep'), 'utf8'), 'preserved')
  }
})

test('cleanup failures propagate rather than reporting success', (t) => {
  const options = fixture(t)
  assert.throws(() => cleanupLfs({
    ...options,
    remove(target, settings) {
      assert.equal(target, options.objects)
      assert.deepEqual(settings, { recursive: true, force: false })
      throw new Error('Permission denied')
    },
  }), /Permission denied/)
  assert.ok(existsSync(options.objects))
})

test('npm runs postbuild on success but retains cache when build fails', (t) => {
  for (const fail of [false, true]) {
    const options = fixture(t)
    writeFileSync(path.join(options.cwd, 'package.json'), JSON.stringify({
      private: true,
      type: 'module',
      scripts: { build: 'node build.mjs', postbuild: 'node cleanup.mjs' },
    }))
    writeFileSync(path.join(options.cwd, 'build.mjs'), `process.exitCode = ${fail ? 1 : 0}\n`)
    writeFileSync(path.join(options.cwd, 'cleanup.mjs'),
      `import { cleanupLfs } from ${JSON.stringify(new URL('./cleanup-lfs.mjs', import.meta.url).href)}\ncleanupLfs({ cwd: process.cwd() })\n`)
    const command = process.platform === 'win32' ? process.env.ComSpec : 'npm'
    const args = process.platform === 'win32' ? ['/d', '/s', '/c', 'npm run build'] : ['run', 'build']
    const result = spawnSync(command, args, {
      cwd: options.cwd,
      env: { ...process.env, ...options.env },
      encoding: 'utf8',
    })
    assert.equal(result.status, fail ? 1 : 0, result.stdout + result.stderr)
    assert.equal(existsSync(options.objects), fail)
    assert.equal(readFileSync(path.join(options.cwd, 'src', 'keep'), 'utf8'), 'preserved')
    assert.equal(readFileSync(path.join(options.cwd, 'dist', 'keep'), 'utf8'), 'preserved')
  }
})
