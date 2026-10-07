# SPA-010: Improve the CI workflow

| Field | Value |
| --- | --- |
| Repo | leetcode-spa |
| Type | Chore |
| Priority | P2 |
| Size | M |
| Phase | 1 - Stabilize and secure |
| Depends on | SPA-008 |

## Problem

`.github/workflows/ci.yml` is named "Deploy docker hub", but it also runs quality checks, publishes Storybook, makes releases and builds images.

- `quality-checks` runs only `lint` and `test`. No `typecheck`, no `format:check`, no `build`.
- Old action versions: `actions/checkout@v3`, `actions/setup-node@v3`, `docker/login-action@v1`.
- Node versions are inconsistent: `>=20.3.0`, `>=22.22.2 <=22.22.2`, and `22-alpine` in the Dockerfile.
- The workflow runs `yarn build` before `docker build`, but the Dockerfile builds again.
- `--build-arg WEB_APP=...` is passed, but the Dockerfile has no such `ARG`.
- Storybook for every branch is added to `gh-pages` with `keep_files: true` and never removed.
- Permissions (`pages: write`, `id-token: write`, `contents: write`) are given to all jobs.
- No concurrency control. Old runs on the same branch are not cancelled.

## Tasks

- [ ] Add `typecheck`, `format:check` and `build` to the quality job.
- [ ] Update all actions to current major versions.
- [ ] Use one Node version from a `.nvmrc` or `engines`.
- [ ] Remove the extra `yarn build` step and the unused build arg.
- [ ] Add `concurrency` with `cancel-in-progress` for branches.
- [ ] Set permissions per job (least privilege).
- [ ] Add a cleanup job that removes Storybook folders of deleted branches.
- [ ] Split the file into `ci.yml` (quality), `storybook.yml`, `release.yml` (optional).

## Acceptance criteria

- A PR with a type error or a formatting error fails.
- Workflow files have no deprecation warnings.
- `gh-pages` does not grow forever.
