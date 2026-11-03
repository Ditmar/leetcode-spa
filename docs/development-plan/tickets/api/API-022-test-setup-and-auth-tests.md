# API-022: Set up automated tests and write the first auth tests

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Test |
| Priority | P1 |
| Size | M |
| Phase | 1 - Stabilize and secure |
| Depends on | API-021 |

## Problem

`npm test` prints "Error: no test specified" and fails. The API has **no tests**. We changed security code in many tickets and need tests to protect it.

## Tasks

- [ ] Add Vitest and Supertest.
- [ ] Create a test database (docker compose service or Testcontainers). Run migrations before the tests.
- [ ] Add scripts: `test`, `test:watch`, `test:coverage`.
- [ ] Write tests for: signup (ok, duplicate email, short password), login (ok, wrong password, unknown user), `me` (with and without token), refresh, logout.
- [ ] Run the tests in CI (see `API-019`).
- [ ] Add a short "How to test" section to the README.

## Acceptance criteria

- `npm test` passes on a clean machine with Docker.
- At least 10 tests for auth.
- CI runs the tests.
