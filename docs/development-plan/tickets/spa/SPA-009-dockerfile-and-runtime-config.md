# SPA-009: Run the SPA in production the right way and fix runtime config

| Field | Value |
| --- | --- |
| Repo | leetcode-spa |
| Type | Chore |
| Priority | P1 |
| Size | M |
| Phase | 1 - Stabilize and secure |
| Depends on | None |

## Problem

- The Dockerfile starts with `astro preview`. This command is made to check a build on your computer. For the Node adapter in `standalone` mode, the normal command is `node ./dist/server/entry.mjs`.
- `EXPOSE 8080`, but the app listens on `PORT` or `4321`. The `preview` script in `package.json` uses port `8080`. These are three different ports.
- `VITE_*` variables are **read at build time** (the Dockerfile sets them with `ARG`). But the CD template `leetcode-cd/apps/leetcode-spa/variables.example.env` lists them as **runtime** variables for Railway. If someone changes them in Railway, nothing changes until a new image is built.
- The server variable `API_BASE_URL` (used by `apiClient`) is not in the CD template.
- `astro.config.mjs` has a hard-coded host: `leetcode-spa-production.up.railway.app`.
- The container runs as `root`.

## Tasks

- [ ] Change `CMD` to `node ./dist/server/entry.mjs` and set `HOST` and `PORT`.
- [ ] Use one port everywhere (`PORT` from the platform, default `4321`).
- [ ] Decide which settings are build-time and which are runtime. Move runtime settings to non-`VITE_` variables read on the server (for example from `process.env`) and pass them to the page.
- [ ] Remove the hard-coded host and use env variables.
- [ ] Add `USER node` and a `HEALTHCHECK`.
- [ ] Add a `/health` route to the SPA.
- [ ] Update the CD template (`CD-007`).

## Acceptance criteria

- The container starts with the Node entry file and answers `/health`.
- Changing an env variable in Railway changes the behavior without a rebuild (for runtime settings).
- Image runs as a non-root user.
