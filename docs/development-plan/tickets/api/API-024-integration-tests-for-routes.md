# API-024: Write integration tests for all routes

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Test |
| Priority | P2 |
| Size | L |
| Phase | 5 - Quality and launch |
| Depends on | API-022, API-027 |

## Problem

We need tests that call the real routes with a real database. They find problems such as a missing migration (`API-004`) or a wrong status code.

## Tasks

- [ ] Courses: list, filters, detail, enroll, enroll twice, my courses, unenroll.
- [ ] Tests: list, detail, start, questions, submit, submit twice, expired session, other user's session.
- [ ] Problems, submissions and profile when they exist.
- [ ] Access control: a user cannot read or change another user's data.
- [ ] Use seed data or factories to create the data.

## Acceptance criteria

- Every route has at least one success test and one failure test.
- A test fails if a route returns the wrong status code or response shape.
