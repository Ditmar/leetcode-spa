# API-013: Fix course enrollment and course list bugs

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Bug |
| Priority | P1 |
| Size | M |
| Phase | 1 - Stabilize and secure |
| Depends on | API-004, API-008 |

## Problem

- `CourseEnroll` never checks that the course exists or is active. A wrong course ID causes a database foreign-key error and a `500`. The controller handles `CourseNotFoundError`, but no code throws it.
- Enrollment does "check, then create". Two requests at the same time can both pass the check. The database has a unique rule, so one request ends with `500` instead of `409`.
- `CoursePrismaRepository.getAll` always uses `isActive: true`. The `isActive` query is accepted but ignored.
- `orderBy=createdAt` is not in the `switch`, so it uses the default. Any other value is accepted without an error.
- The route `GET /api/courses/me/courses` is an odd name. It also works only because it is defined next to `/:id`.
- There is no way to leave a course, and no way to create or edit a course (`CourseRepository.create` has no use case).

## Tasks

- [ ] In `CourseEnroll`, load the course first. Throw `NotFoundError` if it is missing or inactive.
- [ ] Catch the unique-constraint error (`P2002`) and return `409`.
- [ ] Use the `isActive` filter correctly (public list: only active; admin: all).
- [ ] Validate `orderBy` with the schema from `API-008`.
- [ ] Rename `/me/courses` to a clear route (for example `GET /api/users/me/courses`) and document it.
- [ ] Add `DELETE /api/courses/:id/enroll` (unenroll).

## Acceptance criteria

- Enroll in a missing course: `404`. In an inactive course: `404`. Twice: `409`.
- Two parallel enroll requests give one `201` and one `409`.
- Tests exist for all cases above.
