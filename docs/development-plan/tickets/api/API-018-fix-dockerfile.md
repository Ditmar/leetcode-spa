# API-018: Fix the API Dockerfile

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Chore |
| Priority | P1 |
| Size | M |
| Phase | 1 - Stabilize and secure |
| Depends on | None |

## Problem

- The final image installs with `npm ci --omit=dev`. But the start command is `npx prisma migrate deploy && node dist/index.js`. The `prisma` CLI is a **dev dependency**, so `npx` downloads the **latest** version when the container starts. A new major version may use different config rules and may not accept this schema. It also makes every start slower and needs the internet.
- `prisma.config.ts` is not copied to the final image.
- The container runs as `root`.
- No `HEALTHCHECK`.
- No `.dockerignore` in the API repo.
- Migrations run at every container start. With two replicas, they can run at the same time.
- The version of Node is `22-alpine` (not pinned).

## Tasks

- [ ] Put `prisma` in `dependencies` (or copy the exact CLI from the build stage).
- [ ] Copy `prisma.config.ts` if it is needed.
- [ ] Add `USER node`.
- [ ] Add a `HEALTHCHECK` that calls `/health`.
- [ ] Add `.dockerignore` (`node_modules`, `.git`, `.env`, `dist`).
- [ ] Pin the Node image (for example `node:22.20-alpine`).
- [ ] Discuss moving migrations to a release step (`CD-012`).
- [ ] Build and run the image against a local database. Write the commands in the README.

## Acceptance criteria

- `docker build` + `docker run` starts the API with no download of `prisma` at runtime.
- `docker exec <container> whoami` is not `root`.
- The image size is not bigger than before (check with `docker images`).
