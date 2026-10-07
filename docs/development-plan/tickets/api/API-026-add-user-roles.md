# API-026: Add user roles (USER and ADMIN)

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Feature |
| Priority | P1 |
| Size | M |
| Phase | 2 - Connect SPA and API |
| Depends on | API-004 |

## Problem

There are no roles. Every logged-in user has the same rights. The SPA type `AuthUser` already has `role: 'user' | 'admin'`. Admin features (create courses, tests, problems) need a role check.

## Tasks

- [ ] Add `enum Role { USER ADMIN }` and a `role` column to `User` (default `USER`). Create the migration.
- [ ] Put `role` in the access token payload and in the `GET /auth/me` response.
- [ ] Create `requireRole('ADMIN')` middleware (returns `403`).
- [ ] Add a script or seed step to create the first admin (see `API-027`). Do **not** allow setting the role from the signup request.
- [ ] Add tests: normal user gets `403` on an admin route.

## Acceptance criteria

- A new user always has the role `USER`.
- `requireRole('ADMIN')` blocks normal users with `403`.
- The role cannot be changed through any public endpoint.
