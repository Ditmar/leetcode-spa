# API-029: Build the problems module

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Feature |
| Priority | P1 |
| Size | L |
| Phase | 3 - Core product |
| Depends on | X-001, X-003, API-027 |

## Problem

The product is a LeetCode clone, but the API has **no problems**. The SPA `problemsService` calls `GET /problems`, `/problems/:id`, `/problems/tags` and `/problems/stats`. They do not exist, so the home page statistics are always `--`.

## Tasks

- [ ] Design the tables: `Problem` (slug, title, description in Markdown, difficulty, constraints, examples, `isPublished`), `Tag`, `ProblemTag`, `ProblemStarterCode` (one per language), `ProblemTestCase` (input, expected output, `isHidden`, order).
- [ ] Create the migration and the hexagonal folders (`domain`, `application`, `infrastructure`).
- [ ] `GET /api/problems`: filters `search`, `difficulty`, `status`, `tag`; pagination; sorted by number.
- [ ] `GET /api/problems/:id`: full detail with visible examples and starter code. **No hidden test cases** (see `API-016`).
- [ ] `GET /api/problems/tags`.
- [ ] `GET /api/problems/stats`: total problems, and solved/attempted for the logged-in user (public total only when anonymous).
- [ ] The `status` field per user (`solved`, `attempted`, `unsolved`) comes from submissions (`API-031`). Return `unsolved` until that exists.
- [ ] Add seed data (`API-027`) and tests.

## Acceptance criteria

- The SPA `problemsService` works against the real API with real data.
- Anonymous users can read the list and details.
- Response JSON never has hidden test cases.

## Update after decision X-004 (Piston + RabbitMQ)

The test harness (`API-044`) needs more data in the model:

- On `Problem`: `functionName` (the function the student must write) and starter code for each language.
- On `ProblemTestCase`: `input` as a JSON list of arguments and `expectedOutput` as JSON (not plain text).
- Optional per problem: number tolerance and an "order does not matter" flag.
