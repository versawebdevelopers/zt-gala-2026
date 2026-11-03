# ZT Gala 2026

## Git LFS before production builds

Run `npm run build`, not `vite build` directly. npm automatically runs
`scripts/prepare-lfs.mjs` as `prebuild` before the existing Vite build.
LFS preparation is **off by default**: without the explicit build-environment
setting `SITEGROUND_LFS_PREBUILD=1`, it logs
`[prebuild:lfs] Skipping LFS preparation (opt in on SiteGround with SITEGROUND_LFS_PREBUILD=1).`
and leaves the existing build behavior unchanged. Leave this variable unset
on Vercel and other hosts; the disabled script does not invoke Git, require Git
metadata/Git LFS, or download anything. Only the exact value `1` enables it.

When enabled, the script requires Git, checks `git lfs version`, and reuses a
working installed Git LFS without another tool download. If that probe fails,
it attempts a rootless installation of **Git LFS 3.8.1**, supporting Linux x64
and arm64 only. It downloads the matching archive from the
[official pinned release](https://github.com/git-lfs/git-lfs/releases/tag/v3.8.1)
using Node's HTTPS fetch, with a 120-second timeout and a 16 MiB size cap.
Before saving/extracting the archive, it verifies SHA-256 against the pinned
official checksums from
[`sha256sums.asc`](https://github.com/git-lfs/git-lfs/releases/download/v3.8.1/sha256sums.asc):

| Archive architecture | SHA-256 |
| --- | --- |
| linux-amd64 | `e72cf723a4a660438862282e8aecf3885fc8123e88bfcad534cf6b941a354b75` |
| linux-arm64 | `67895dd77b63329796bc5efdd47b57f218e1f7b98717ebaf936a8238dbcaec0f` |

These are also published as official GitHub release asset digests. The script
uses the checked-in hashes, not a dynamically downloaded checksum to trust new
content. It does not perform runtime GPG signature verification. Updating the
tool requires explicitly reviewing/updating the version and hashes together.

The archive is roughly 5-6 MB. Only its `git-lfs` binary is extracted using
`tar` into a uniquely named `.tmp-lfs-*` directory inside this checkout.
That directory is added to PATH **only for this script's Git subprocesses**.
The installed binary must pass `git lfs version` before fetching objects.
The archive is removed after extraction; the temporary installation is removed
on success or failure (an abruptly killed build may leave it until workspace
cleanup). No root/sudo, package-manager dependency, remote shell script,
`install.sh`, Git hooks, or global Git configuration changes are involved.

The script initializes repository-local filters using
`git lfs install --local --skip-repo` before pulling, even when the binary was
already available. This writes only local repository Git configuration, not
global configuration or hooks. A binary alone is insufficient in a fresh
checkout: without these filters, LFS can return success while reporting
`Skipping object checkout, Git LFS is not installed for this repository.`
Initialization failure stops the build.
During pull/validation, a subprocess-only `core.hooksPath` override directs any
hooks auto-created by LFS's filter process into a separate temporary directory.
That directory is removed afterward; existing repository hooks and the
repository's persistent hooks-path setting are left unchanged.

The script then runs `git lfs pull` for the current
checkout (including all assets regardless of local LFS include/exclude settings),
and refuses to build if any LFS-tracked file is missing, empty, or still a pointer.

The enabled build needs Node.js 22 (the repository toolchain), Git, repository
Git metadata, and, for installation, `tar` with gzip support, a writable checkout
and permission to execute a downloaded Linux binary. Outbound HTTPS must reach
GitHub release downloads and their redirected asset CDN, as well as GitHub's
LFS service. LFS may also require credentials and available transfer allowance.
Unsupported platforms without working Git LFS fail rather than guessing a
binary. A shallow checkout can fetch the current revision's LFS objects;
full Git history is not required.

### Build disk space

The current 35 LFS objects total **901,333,870 bytes (about 860 MiB)**, with the
recap MP4 accounting for about 851 MiB. LFS object cache plus hydrated checkout
plus Vite's copied output can consume roughly **2.52 GiB** for media alone.
Download staging, dependencies, other build output, and simultaneous/previous
builds add overhead. Budget **at least 4 GiB free** as a practical starting point,
not a guaranteed upper bound, and sufficient time to download the video.
The temporary tool adds tens of MB, not another full media copy, and is cleaned up.

With `SITEGROUND_LFS_PREBUILD=1`, npm automatically runs
`scripts/cleanup-lfs.mjs` as `postbuild` **only after `npm run build` succeeds**.
It removes only this standalone checkout's `.git/lfs/objects`, potentially
releasing about 860 MiB of retained cache. Hydrated source assets, `dist`, other
Git metadata, and old builds are untouched. Peak build storage is unchanged:
the cache is still needed during prebuild/build. Later builds may need to
download the objects again, consuming bandwidth/LFS allowance.

Cleanup is disabled with an informative skip log unless the flag is exactly `1`.
It refuses Git worktrees/gitfiles, shared metadata, symlinked checkout paths,
symlinks/junctions anywhere in the cache path/tree, and unexpected file types.
It never follows Git metadata paths outside this checkout or custom LFS storage.
A missing cache is logged as a no-op; unsafe paths or deletion failures fail the
npm command explicitly, even though Vite may already have produced output.
Run only in an exclusive build checkout: concurrent processes changing paths
during cleanup are not supported. Failed/aborted builds do not run postbuild and
retain their cache; this is not a host-wide quota or old-build cleanup solution.

### SiteGround repository-import test

Keep the GitHub repository import and the existing `npm run build` command.
In the SiteGround Node.js project's environment-variable settings, add
**name** `SITEGROUND_LFS_PREBUILD` with **value** `1` and save it. It must be
available during the build, not only to the running application. Do not add a
`VITE_` prefix or set this variable on Vercel.
After these changes are reviewed and made available on the branch SiteGround
imports, trigger a rebuild from that repository. No custom shell command or SSH
deployment workflow is needed for this attempt.

SiteGround's first build lacked Git LFS; the next test successfully installed
and executed 3.8.1 but skipped object checkout because the repository was not
initialized. The script now initializes local filters before pulling.
Available disk quota and successful LFS hydration remain **unconfirmed**.
In the build log, look for the npm `prebuild` lifecycle
step, `Installing pinned Git LFS 3.8.1` if installation is needed, `git-lfs/...`,
`[prebuild:lfs] Initializing repository-local LFS filters (no hooks)...`,
`Git LFS initialized.`, and
`[prebuild:lfs] Downloading LFS assets for the current checkout...`, followed by
`[prebuild:lfs] Verified ... LFS assets; starting Vite build.`
Vite output must appear only after verification. Tool download, checksum,
extraction, execution, or LFS pull failures stop the build with an error.
Check the full error for network/CDN restrictions, missing tar, architecture,
execution permissions, credentials, transfer quota, or disk space. If the
builder prohibits tool download/execution, this approach cannot work without
host support. Once enabled, these failures are never silently skipped.
If the log instead shows the skip message, the variable is not set to `1` in
the build environment; correct that before treating the test as successful.

After a successful build, inspect the imported logos/images and play the recap
video on the resulting site. In browser DevTools Network, open their actual
asset responses: images must decode, the MP4 must play, and responses must not
contain `version https://git-lfs.github.com/spec/v1` (whether served as standalone
files or embedded data URLs). Check image/video content types and realistic
sizes rather than accepting HTTP 200 alone. Local verification cannot establish
SiteGround's Git LFS availability, authentication, or download capacity.

### Local script checks

Run `node --test scripts/prepare-lfs.test.mjs scripts/cleanup-lfs.test.mjs`.
Cleanup tests cover opt-in, unsafe paths, failures, and preserved source/output.
The prebuild checks use temporary media,
mocked downloads/extraction, and simulated Git responses to cover disabled and
enabled behavior, installation, initialization, integrity failures, and cleanup.
An integration check (when local Git LFS is available) reproduces the skipped
checkout in a fresh isolated repository, then hydrates a tiny cached object and
verifies that global configuration and hooks remain unchanged. They do not
download the large video or contact SiteGround. No new dependencies are needed;
dependency lockfiles are unchanged.
