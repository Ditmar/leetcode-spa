# API-007: Use error classes instead of text matching for HTTP status codes

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Refactor |
| Priority | P1 |
| Size | M |
| Phase | 1 - Stabilize and secure |
| Depends on | API-003 |

## Problem

Controllers decide the status code by reading the **text** of the error message.

- `TestController`: `errorMessage.includes('not found')`, `'Unauthorized'`, `'expired'`, and `includes('session')`.
- `ExpressAuthController`: `error.message.includes('cannot be empty')`, `'must be at least'`.
- The tests use cases throw plain `new Error('Test not found')`.

If someone changes a message, the status code changes without warning. Any message that contains the word "session" returns `400`.

Domain value objects (`AuthUserEmail`, `CourseTitle`, ...) also throw plain `Error`, so a bad value can become a `500`.

## Tasks

- [ ] Create `AppError` with `statusCode` and `code` (`src/share/domain/errors`).
- [ ] Create subclasses: `ValidationError` (400), `UnauthorizedError` (401), `ForbiddenError` (403), `NotFoundError` (404), `ConflictError` (409).
- [ ] Make all value objects throw `ValidationError`.
- [ ] Replace the plain `Error` in tests use cases with the right class.
- [ ] Let the error middleware (`API-003`) map `AppError` to the response.
- [ ] Remove all `error.message.includes(...)` from controllers.

## Acceptance criteria

- `grep -r "message.includes" src` finds nothing in controllers.
- Each error class has a unit test for its status code.
- Existing endpoints return the same status codes as before (or better).
