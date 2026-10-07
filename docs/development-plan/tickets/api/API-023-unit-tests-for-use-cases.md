# API-023: Write unit tests for use cases and domain objects

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Test |
| Priority | P2 |
| Size | M |
| Phase | 5 - Quality and launch |
| Depends on | API-022, API-014, API-015 |

## Problem

The business rules (grading, session rules, enrollment) have no tests. They are easy to test because they use repository interfaces.

## Tasks

- [ ] Write tests with in-memory fake repositories for: `SubmitTestUseCase` (expired, wrong owner, wrong test, grading, double submit), `StartTestUseCase`, `CourseEnroll`, `CourseGetAll` limits, `AuthRefreshToken` rules.
- [ ] Test the value objects: valid and invalid values (email, name, password, course title).
- [ ] Reach at least 80% coverage in `application` and `domain` folders.

## Acceptance criteria

- Coverage report shows 80% or more for `application` and `domain`.
- Tests run in less than 10 seconds and do not need a database.
