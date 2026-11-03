# API-003: Add a global error handler and protect async routes

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Bug |
| Priority | P0 |
| Size | M |
| Phase | 1 - Stabilize and secure |
| Depends on | None |

## Problem

Express 4 does not catch errors from `async` handlers. In `ExpressUserController`, the methods `getAllUsers` and `createUser` have no `try/catch`. If something throws (for example `new User(...)` with a short name), the promise is rejected and nobody handles it. On Node 22 an unhandled rejection can **stop the whole server**.

Also:

- There is no final error middleware. Express returns an HTML error page, not JSON.
- A request with broken JSON also returns HTML.
- Every controller repeats its own `try/catch` with a 500 response.

## Tasks

- [ ] Create `asyncHandler(fn)` that sends errors to `next(err)`.
- [ ] Create an error middleware that always returns JSON in the agreed format (see `X-003`).
- [ ] Handle body parse errors (`SyntaxError` from `express.json`) with `400`.
- [ ] Add `process.on('unhandledRejection')` and `uncaughtException` that log the error.
- [ ] Use the wrapper in all routes. Remove repeated `try/catch` where it is not needed.
- [ ] Never send internal error messages to the client for unexpected errors.

## Acceptance criteria

- `POST /api/user` with an invalid body returns a JSON error and the server keeps running.
- Broken JSON returns `400` with JSON.
- No route returns an HTML error page.

## Hints

Work together with `API-007`, which creates the error classes.
