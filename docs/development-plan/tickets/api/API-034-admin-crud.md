# API-034: Add admin endpoints to manage content

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Feature |
| Priority | P2 |
| Size | L |
| Phase | 4 - More features |
| Depends on | API-026, API-008 |

## Problem

Content can only be changed with SQL or the seed script (`X-008`). Teachers and admins need a safe way to create and edit content.

## Tasks

- [ ] CRUD routes under `/api/admin/...` for: courses, companies, tests, questions, problems, problem test cases, tags.
- [ ] All routes need role `ADMIN`.
- [ ] Validate all input with Zod (for example: an MCQ question needs at least 2 options and 1 correct answer).
- [ ] Use "soft delete" (`isActive = false`) for content that users already used.
- [ ] Do not allow editing questions of a test that already has submissions, or create a new version (decide and write it).
- [ ] Add tests for `401`, `403` and valid calls.

## Acceptance criteria

- An admin can create a full test with questions only with API calls.
- A normal user gets `403` on every admin route.
