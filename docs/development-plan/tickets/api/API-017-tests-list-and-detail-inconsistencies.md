# API-017: Fix inconsistent data in the tests list and detail

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Bug |
| Priority | P2 |
| Size | M |
| Phase | 1 - Stabilize and secure |
| Depends on | API-008 |

## Problem

- `GET /api/tests` only shows active tests, but `GET /api/tests/:id` also shows **inactive** tests.
- The list returns `questionsByType: { mcq, programming }` (lowercase). The detail returns `{ MCQ, PROGRAMMING }` (uppercase).
- `orderBy=difficulty` sorts the text, so the order is `EASY, HARD, MEDIUM`.
- `difficulty` and `type` are free text in the database. A typo like `Easy` or `MCQ ` is accepted.
- When a test has no company, the list invents `{ id: '', name: 'Unknown' }`, but the detail returns `null`.
- The list loads all question rows only to count them.
- `GetTestsUseCase` changes the object it receives (`params.page = 1`).
- `getSessionById` always loads the full `test` and `user`, and the use cases do not use them.

## Tasks

- [ ] Hide inactive tests in the detail route (unless the user is admin).
- [ ] Use the same key names in list and detail.
- [ ] Use Prisma `enum` for `difficulty` and `type` (needs a migration; keep the old values).
- [ ] Sort difficulty by rank (`EASY < MEDIUM < HARD`).
- [ ] Return `company: null` in both routes.
- [ ] Use `_count` or `groupBy` for counts.
- [ ] Do not change input objects.
- [ ] Load only what the use case needs in `getSessionById`.

## Acceptance criteria

- Inactive test: `404` in detail for normal users.
- Same JSON shape in list and detail.
- A test with a wrong `difficulty` value cannot be saved.
