# API-021: Create one place where all dependencies are connected

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Refactor |
| Priority | P1 |
| Size | M |
| Phase | 1 - Stabilize and secure |
| Depends on | API-020 |

## Problem

Dependencies are connected in three different ways.

- `share/infrastructure/services.ts` creates repositories and use cases and exports a global `services` object. Course, test and user controllers import it directly.
- `auth-routes.ts` creates its **own** repositories, use cases and controller.
- `services.auth` does not have `refresh` and `logout`.
- `src/index.ts` creates the app and starts the server in the same file. When a test imports `index.ts`, the server starts.

This makes testing hard (you cannot replace a repository) and hides coupling.

## Tasks

- [ ] Create `src/app.ts` with `createApp(deps)` that builds the Express app without listening.
- [ ] Create `src/container.ts` that creates repositories and use cases once.
- [ ] Give controllers their use cases in the constructor (like `ExpressAuthController` already does).
- [ ] Keep `src/index.ts` very small: load config, create the container, listen.
- [ ] Delete the global `services` object.

## Acceptance criteria

- Importing `createApp` in a test does not open a port.
- A test can create the app with a fake repository.
- No file imports `services` from `share/infrastructure`.
