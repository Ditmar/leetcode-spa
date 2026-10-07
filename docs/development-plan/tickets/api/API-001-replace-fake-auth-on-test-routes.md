# API-001: Replace the fake `x-user-id` login on test routes with JWT

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Security |
| Priority | P0 |
| Size | S |
| Phase | 1 - Stabilize and secure |
| Depends on | None |

## Problem

The routes `POST /api/tests/:id/start`, `GET /api/tests/:id/questions` and `POST /api/tests/:id/submit` use `authMiddleware` from `src/share/infrastructure/middleware/auth.middleware.ts`.

This middleware reads the header `x-user-id` and trusts it. It does not check any token. Anyone can send `x-user-id: <any user id>` and start a test, read questions, or submit answers **as another user**. The email is also hard-coded as `user@example.com`.

The real JWT middleware already exists: `AuthMiddleware.validateToken` in `src/auth/infrastructure/middleware/auth-middleware.ts`. It is used by `/api/user` and the course routes.

## Tasks

- [ ] In `test-routes.ts`, use `AuthMiddleware.validateToken` for `start`, `questions` and `submit`.
- [ ] In `TestController`, read the user id from `req.userId` (not from `req.user`).
- [ ] Delete `auth.middleware.ts` and the `AuthRequest` type.
- [ ] Check that no other file imports the old middleware (`grep authMiddleware`).
- [ ] Add a test: a request with only `x-user-id` returns `401`.

## Acceptance criteria

- A request with only the `x-user-id` header returns `401`.
- A request with a valid `Authorization: Bearer <token>` works as before.
- The old middleware file does not exist.

## Hints

You can test with: login first, copy `accessToken`, then call the route with `Authorization: Bearer ...`.
