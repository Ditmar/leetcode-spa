# API-008: Validate all requests with one shared Zod middleware

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Feature |
| Priority | P1 |
| Size | M |
| Phase | 1 - Stabilize and secure |
| Depends on | API-007 |

## Problem

Input validation is written by hand in each controller and has holes.

- The same UUID regex is copied in `TestController` and `ExpressCourseController`.
- `GET /api/tests?page=abc` gives `NaN`. `GetTestsUseCase` does not fix `NaN` (`NaN < 1` is false). Prisma gets `skip: NaN` and the request ends with `500`.
- `GET /api/courses?orderBy=foo` is not validated.
- `limit` and `page` rules are repeated in different use cases.
- Zod is already a dependency (used for config), but not for requests.

## Tasks

- [ ] Create `validate({ params, query, body })` middleware that uses Zod and returns `400` with a list of field errors.
- [ ] Write schemas for auth, courses and tests routes.
- [ ] For pagination, use one schema: `page` (default 1, min 1), `limit` (default 10, min 1, max 100).
- [ ] Create one `uuidSchema` and remove the copied regex.
- [ ] Remove the manual checks from controllers.

## Acceptance criteria

- `GET /api/tests?page=abc` returns `400`, not `500`.
- `GET /api/courses?orderBy=foo` returns `400`.
- Error response lists each invalid field.
- Controllers have no manual validation code left.
