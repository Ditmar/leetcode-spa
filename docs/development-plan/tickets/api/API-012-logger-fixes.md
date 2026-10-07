# API-012: Fix wrong logging calls and add request logs

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Bug |
| Priority | P2 |
| Size | S |
| Phase | 1 - Stabilize and secure |
| Depends on | API-011 |

## Problem

- `auth-middleware.ts` calls `logger.error('Unexpected error validating token', undefined, String(error))`. Pino uses `(object, message)`, so this prints wrong output.
- `ExpressCourseController` logs `logger.error('Error in getCourseById')` without the error. The real error is lost.
- `TestController` does not log at all, and it sends the raw `error.message` to the client for unexpected errors (can leak internal details).
- Some files use `console.log` (`prisma.ts`, `print()` methods in entities).
- There is no log for each request, no request ID.

## Tasks

- [ ] Fix all `logger.error` calls to `logger.error({ err }, 'message')`.
- [ ] Add `pino-http` with a request ID (also send it in the `X-Request-Id` header).
- [ ] Redact `authorization`, `password`, `refreshToken` and cookies in logs.
- [ ] Replace `console.log` with the logger.
- [ ] Log unexpected errors in the error middleware (`API-003`) once.

## Acceptance criteria

- Each request has one log line with method, path, status, time and request ID.
- No password or token appears in the logs (test it).
- `grep -r "console\." src` finds nothing.
