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

When enabled, the script requires Git and Git LFS, runs `git lfs pull` for the current
checkout (including all assets regardless of local LFS include/exclude settings),
and refuses to build if any LFS-tracked file is missing, empty, or still a pointer.
It does not install Git LFS or change Git configuration.

The enabled build needs repository Git metadata, network access to GitHub's LFS service,
and any required download credentials and LFS allowance. The recap MP4 alone is
about 851 MiB, so allow sufficient download time and disk space for the LFS cache,
checkout, and build output. A shallow checkout can fetch the current revision's
LFS objects; full Git history is not required.

### SiteGround repository-import test

Keep the GitHub repository import and the existing `npm run build` command.
In the SiteGround Node.js project's environment-variable settings, add
**name** `SITEGROUND_LFS_PREBUILD` with **value** `1` and save it. It must be
available during the build, not only to the running application. Do not add a
`VITE_` prefix or set this variable on Vercel.
After these changes are reviewed and made available on the branch SiteGround
imports, trigger a rebuild from that repository. No custom shell command or SSH
deployment workflow is needed for this attempt.

Git LFS availability on SiteGround's build image is **not confirmed**. In the
build log, look for the npm `prebuild` lifecycle step, `git-lfs/...`, and
`[prebuild:lfs] Downloading LFS assets for the current checkout...`, followed by
`[prebuild:lfs] Verified ... LFS assets; starting Vite build.`
Vite output must appear only after verification. If Git LFS is unavailable,
the build must stop with `Git LFS is required on the build host`; this approach
cannot work until SiteGround supplies/enables it. A download failure instead
requires checking credentials, network access, quota, storage, and the full Git
LFS error in the log. Once enabled, these failures are never silently skipped.
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

Run `node --test scripts/prepare-lfs.test.mjs`. These checks use temporary media
and simulated Git responses to cover disabled and enabled behavior; they do not download the large video or contact
SiteGround. Dependency manifests/lockfiles do not need regeneration for an npm
script-only change.
