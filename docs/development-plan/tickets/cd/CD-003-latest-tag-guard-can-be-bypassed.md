# CD-003: Make the "no latest in prod" rule strong

| Field | Value |
| --- | --- |
| Repo | leetcode-cd |
| Type | Bug |
| Priority | P2 |
| Size | S |
| Phase | 1 - Stabilize and secure |
| Depends on | None |

## Problem

`validate-image.sh` blocks the tag `latest` only when `RAILWAY_ENVIRONMENT` is `prod` or `ppd`.

But `deploy-railway.sh` runs this line before it calls the validator: `export RAILWAY_ENVIRONMENT`. At this point the variable has the value from the JSON file (`railwayEnvironment`). For prod this value is `production`, not `prod`. So when you run `deploy-railway.sh` directly (on your computer or from another workflow), the guard does **not** run for prod, and `latest` is allowed.

The `deploy.yml` workflow has an earlier validation step with the right value, so it is safe today. The risk is in manual runs and future workflows.

Also, nobody checks the tag format. The README says prod uses `MAJOR.MINOR.PATCH`, but a tag like `0.9.0-beta.1` would pass.

## Tasks

- [ ] Use a separate variable for the guard (for example `TARGET_ENV` with the value of `environment` from the JSON: `ppd` or `prod`).
- [ ] Do not overwrite `RAILWAY_ENVIRONMENT` that is used by other things.
- [ ] Add tag rules per environment: prod = `X.Y.Z` only; ppd = `X.Y.Z` or `X.Y.Z-rc.N`.
- [ ] Add tests (a small `bats` or shell test) for: `latest`, no tag, bad tag, good tag.

## Acceptance criteria

- `./scripts/deploy-railway.sh apps/api-leetcode/prod.json` with a `latest` image fails before any API call.
- Tests cover all rules.
