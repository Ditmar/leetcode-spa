# API-019: Fix the CI pipeline

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Chore |
| Priority | P1 |
| Size | M |
| Phase | 1 - Stabilize and secure |
| Depends on | API-022 |

## Problem

`.github/workflows/ci.yml` is called "Build and Push Docker Image" and does everything in one job.

- It runs on **every push to every branch**.
- It does not run lint or tests (`npm test` is `exit 1`).
- It uses Node `20`, but `package.json` says `engines.node >= 22.20.0` and the Dockerfile uses Node 22.
- It pushes the tag `ditmar/api-leetcode:<version>` from `package.json`. Every branch push with the same version **overwrites the same tag**. The CD repo says tags must not move.
- It needs the `DATABASE_URL` secret only to run `prisma generate`. This is not needed.
- The version is changed by hand in commits ("update stable version"). The SPA uses `release-it`.
- No cache for `npm` or Docker layers.

## Tasks

- [ ] Split into jobs: `quality` (lint, typecheck, test, build) for every push and PR; `publish` only for `master`.
- [ ] Use Node 22.
- [ ] Publish `:<version>` only from `master`, and **fail if the tag already exists**. For other branches use `:<version>-<short-sha>`.
- [ ] Remove the `DATABASE_URL` secret from the build.
- [ ] Add `npm audit --omit=dev` (warning at first).
- [ ] Add `release-it` like in the SPA (optional, with the teacher).
- [ ] Use cache for `npm` and Docker.

## Acceptance criteria

- A PR with a lint error fails the pipeline.
- A push to a feature branch does not change the stable tag.
- A second publish with the same version fails with a clear message.
