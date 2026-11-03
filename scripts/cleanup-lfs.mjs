import { lstatSync, readdirSync, realpathSync, rmSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptPath = fileURLToPath(import.meta.url)
const repositoryRoot = path.resolve(path.dirname(scriptPath), '..')

function inspect(target) {
  try {
    return lstatSync(target)
  } catch (error) {
    if (error.code === 'ENOENT') return null
    throw error
  }
}

function requireDirectory(target, stat) {
  if (!stat || stat.isSymbolicLink() || !stat.isDirectory()) {
    throw new Error(`Refusing unsafe LFS cleanup path (expected a real directory): ${target}`)
  }
}

function rejectLinks(directory) {
  for (const name of readdirSync(directory)) {
    const target = path.join(directory, name)
    const stat = lstatSync(target)
    if (stat.isSymbolicLink() || (!stat.isDirectory() && !stat.isFile())) {
      throw new Error(`Refusing unsafe entry in LFS object cache: ${target}`)
    }
    if (stat.isDirectory()) rejectLinks(target)
  }
}

export function cleanupLfs({ cwd = repositoryRoot, env = process.env, remove = rmSync } = {}) {
  if (env.SITEGROUND_LFS_PREBUILD !== '1') {
    console.log('[postbuild:lfs] Skipping cache cleanup (SITEGROUND_LFS_PREBUILD is not 1).')
    return
  }

  const root = path.resolve(cwd)
  if (root !== realpathSync(root)) {
    throw new Error('Refusing LFS cleanup through a symlinked checkout path.')
  }
  const gitDirectory = path.join(root, '.git')
  // A .git file can point to shared storage outside this checkout.
  requireDirectory(gitDirectory, inspect(gitDirectory))
  if (inspect(path.join(gitDirectory, 'commondir')) || inspect(path.join(gitDirectory, 'worktrees'))) {
    throw new Error('Refusing LFS cleanup of shared Git storage.')
  }
  const lfsDirectory = path.join(gitDirectory, 'lfs')
  const objects = path.join(lfsDirectory, 'objects')
  for (const directory of [lfsDirectory, objects]) {
    const stat = inspect(directory)
    if (!stat) {
      console.log('[postbuild:lfs] No checkout-local LFS object cache to remove.')
      return
    }
    requireDirectory(directory, stat)
  }
  rejectLinks(objects)
  remove(objects, { recursive: true, force: false })
  console.log('[postbuild:lfs] Removed checkout-local .git/lfs/objects; source assets and build output retained.')
}

if (process.argv[1] && path.resolve(process.argv[1]) === scriptPath) {
  try {
    cleanupLfs()
  } catch (error) {
    console.error(`[postbuild:lfs] ${error.message}`)
    process.exitCode = 1
  }
}
