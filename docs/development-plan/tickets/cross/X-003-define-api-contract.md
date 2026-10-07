# X-003: Define one API contract (paths, response format, pagination)

| Field | Value |
| --- | --- |
| Repo | all |
| Type | Decision |
| Priority | P0 |
| Size | M |
| Phase | 0 - Decisions and setup |
| Depends on | X-001 |

## Problem

The API and the SPA use different names and formats.

| Topic | API today | SPA expects |
| --- | --- | --- |
| Base path | `/api/...` | `/api` in the browser, no prefix on the server (`API_BASE_URL`) |
| Login | `/auth/login`, `/auth/logout` | `/auth/signin`, `/auth/signout` |
| Users | `/api/user` (singular, mock) | `/users/me`, `/users/:id` |
| Success body | auth: raw object. courses/tests: `{ success, data }` | `{ data, meta }` |
| Pagination | `{ data, pagination: { total, page, limit, totalPages } }` and query `page`, `limit` | `meta` and query `page`, `pageSize` |
| Error body | `{ error, message }` or `{ success: false, error }` | `{ code, message, details }` |
| Difficulty | `EASY`, `MEDIUM`, `HARD` | `Easy` (problems), `easy` (contests) |
| IDs | UUID strings | numbers for problems, contests, topics |

## Tasks

- [ ] Choose: API prefix (`/api` or `/api/v1`), success envelope, error envelope, pagination fields, enum casing, ID type for new modules.
- [ ] Write the rules in `docs/decisions/ADR-003-api-contract.md`.
- [ ] Write the list of endpoints the SPA needs (start from the services in `leetcode-spa/src/services`).
- [ ] Decide the source of truth: OpenAPI file in the API repo (see `API-039`).
- [ ] Create or update tickets: `API-042` (apply envelope), `SPA-013` (shared types).

## Acceptance criteria

- One ADR with examples of a success response, an error response and a paginated response.
- A table that maps every SPA service call to an API endpoint (or "missing").
- The teacher approved it.
