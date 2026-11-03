# API-006: Lock down the `/api/user` routes

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Security |
| Priority | P0 |
| Size | S |
| Phase | 1 - Stabilize and secure |
| Depends on | None |

## Problem

The `/api/user` module is a demo that is connected to production routes.

- `services.ts` uses `UserMockRepository`: users are saved in an in-memory array. They are lost on restart and have no link to the `users` table.
- Any logged-in user can list all users, edit any user, and delete any user. There are no roles.
- `POST /api/user` takes the `id` from the request body.
- `updateUser` sends the raw request body to `edit`. But `setEmail` and `setName` expect value objects, so plain strings are saved without validation.
- Error responses build the message with `'User not found' + err`, which can show internal text.
- The SPA does not use these routes. It expects `/users/me` (see `API-032`).

## Tasks

- [ ] Remove `app.use('/api/user', ...)` from `src/index.ts` for now.
- [ ] Keep the code in git history; plan to replace it with `API-032`.
- [ ] If you must keep a list-users route, make it admin-only after `API-026`.
- [ ] Remove `UserMockRepository` from `services.ts`.

## Acceptance criteria

- `GET /api/user` returns `404` in all environments.
- No route can read or change other users.
- The build and lint pass.
