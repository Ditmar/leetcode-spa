# CD-009: Add automatic checks for pull requests

| Field | Value |
| --- | --- |
| Repo | leetcode-cd |
| Type | Chore |
| Priority | P1 |
| Size | M |
| Phase | 1 - Stabilize and secure |
| Depends on | None |

## Problem

No workflow runs on pull requests in this repo. A wrong JSON file or a wrong image tag is found only after the merge, when `deploy.yml` fails (or worse, deploys the wrong thing). The README says "only change `image` and `notes` in deploy PRs", but nothing checks it.

Also:

- `promote.yml` and `rollback.yml` run `sudo apt-get install -y jq` without `apt-get update`. (`jq` is already on GitHub runners, so remove the install.)
- Actions are not pinned and `ubuntu-latest` can change.

## Tasks

- [ ] Add `.github/workflows/pr-checks.yml`.
- [ ] JSON schema check for `apps/*/*.json`: required fields, `environment` equals the file name, valid UUIDs for Railway IDs.
- [ ] Image rules: format `owner/name:X.Y.Z`, no `latest`, prod has no pre-release tag, the image exists (use `validate-image.sh`).
- [ ] In deploy PRs, only `image`, `notes` and metadata fields can change (compare with `master` using `jq`).
- [ ] Run `shellcheck` on `scripts/*.sh` and `actionlint` on workflows.
- [ ] Make this check required in the branch protection rules.

## Acceptance criteria

- A PR with `"image": "ditmar/api-leetcode:latest"` fails.
- A PR that changes `railwayServiceId` fails.
- Checks are required before merge.
