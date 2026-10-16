# X-003: Define one API contract (paths, response format, pagination)

| Field      | Value                                                      |
| ---------- | ---------------------------------------------------------- |
| Repo       | all                                                        |
| Type       | Decision                                                   |
| Priority   | P0                                                         |
| Size       | M                                                          |
| Phase      | 0 - Decisions and setup                                    |
| Depends on | [X-001](https://github.com/Ditmar/leetcode-spa/issues/366) |

## Problem

The API and the SPA use different names and formats.

| Topic        | API today                                                                            | SPA expects                                                     |
| ------------ | ------------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| Base path    | `/api/...`                                                                           | `/api` in the browser, no prefix on the server (`API_BASE_URL`) |
| Login        | `/auth/login`, `/auth/logout`                                                        | `/auth/signin`, `/auth/signout`                                 |
| Users        | `/api/user` (singular, mock)                                                         | `/users/me`, `/users/:id`                                       |
| Success body | auth: raw object. courses/tests: `{ success, data }`                                 | `{ data, meta }`                                                |
| Pagination   | `{ data, pagination: { total, page, limit, totalPages } }` and query `page`, `limit` | `meta` and query `page`, `pageSize`                             |
| Error body   | `{ error, message }` or `{ success: false, error }`                                  | `{ code, message, details }`                                    |
| Difficulty   | `EASY`, `MEDIUM`, `HARD`                                                             | `Easy` (problems), `easy` (contests)                            |
| IDs          | UUID strings                                                                         | numbers for problems, contests, topics                          |

## Tasks

- [ ] Choose: API prefix (`/api` or `/api/v1`), success envelope, error envelope, pagination fields, enum casing, ID type for new modules.
- [ ] Write the rules in `docs/decisions/ADR-003-api-contract.md`.
- [ ] Write the list of endpoints the SPA needs (start from the services in `leetcode-spa/src/services`).
- [ ] Decide the source of truth: OpenAPI file in the API repo (see [API-039](https://github.com/Ditmar/api-leetcode/issues/93)).
- [ ] Create or update tickets: [API-042](https://github.com/Ditmar/api-leetcode/issues/96) (apply envelope), [SPA-013](https://github.com/Ditmar/leetcode-spa/issues/388) (shared types).

## Acceptance criteria

- One ADR with examples of a success response, an error response and a paginated response.
- A table that maps every SPA service call to an API endpoint (or "missing").
- The teacher approved it.

## Decision (2026-10-16)

The unified API contract is defined in `docs/decisions/ADR-003-api-contract.md`.

The following decisions apply:

- The API prefix is `/api`; `/api/v1` is not introduced at this stage.
- Successful responses with a body use `{ data, meta? }`.
- Successful responses use `200 OK` by default, `201 Created` for creation operations and `204 No Content` when the operation intentionally returns no body.
- Errors use `{ code, message, details? }`.
- Error codes use `SCREAMING_SNAKE_CASE`. Modules may define specific codes such as `USER_NOT_FOUND`.
- Paginated requests use `page` and `pageSize`; paginated responses use `meta` with `page`, `pageSize`, `total` and `totalPages`.
- JSON enum values use lowercase. Conversion from domain or persistence values such as `EASY` to API values such as `easy` happens at the API transport/mapping boundary.
- UUID strings are the canonical identifiers for new modules.
- For problems, `id` is the canonical UUID, `slug` is the human-readable identifier and `number` is the value shown in the UI and used for ordering. `GET /api/problems/:id` uses the UUID.
- Authentication uses `login` and `logout`, and the shared user field is `username`.
- `expiresAt` is a Unix timestamp in milliseconds so it can be compared directly with `Date.now()` in the SPA.
- Authentication responses from the API to Astro use the same `data` envelope. Following [X-002](https://github.com/Ditmar/leetcode-spa/issues/367), Astro stores tokens in `HttpOnly` cookies and does not expose them to browser JavaScript.
- The browser calls `/api/...` on Astro. Astro forwards allowed requests to `API_BASE_URL` while preserving the `/api/...` path. `API_BASE_URL` itself does not include the `/api` prefix.
- The endpoint mapping in ADR-003 is the source for the allow-list implemented by [SPA-036](https://github.com/Ditmar/leetcode-spa/issues/411).
- `/users/me/stats` remains in the contract. `/users/:id/stats` is removed from the agreed contract because no API endpoint or implementation ticket owns it. The unused `/users/:id/stats` variant must be removed from the SPA when the user service is aligned with this contract.
- Migration uses one compatibility release: the SPA may temporarily accept legacy and X-003 response shapes while existing API endpoints are migrated. Legacy compatibility is removed after the migration is complete.
- The OpenAPI document maintained through [API-039](https://github.com/Ditmar/api-leetcode/issues/93) is the source of truth for the executable contract.

The implementation impact is tracked in [API-003](https://github.com/Ditmar/api-leetcode/issues/57), [API-007](https://github.com/Ditmar/api-leetcode/issues/61), [API-028](https://github.com/Ditmar/api-leetcode/issues/82), [API-029](https://github.com/Ditmar/api-leetcode/issues/83), [API-042](https://github.com/Ditmar/api-leetcode/issues/96), [SPA-006](https://github.com/Ditmar/leetcode-spa/issues/381), [SPA-013](https://github.com/Ditmar/leetcode-spa/issues/388) and [SPA-036](https://github.com/Ditmar/leetcode-spa/issues/411).

This decision remains **Proposed** until the teacher approves X-003.
