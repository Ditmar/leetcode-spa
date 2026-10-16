# API-042: Use one response format and one pagination format everywhere

| Field      | Value                                                                                                                   |
| ---------- | ----------------------------------------------------------------------------------------------------------------------- |
| Repo       | api-leetcode                                                                                                            |
| Type       | Refactor                                                                                                                |
| Priority   | P2                                                                                                                      |
| Size       | M                                                                                                                       |
| Phase      | 2 - Connect SPA and API                                                                                                 |
| Depends on | [X-003](https://github.com/Ditmar/leetcode-spa/issues/368), [API-007](https://github.com/Ditmar/api-leetcode/issues/61) |

## Problem

Today:

- Auth routes return raw objects.
- Course and test routes return `{ success: true, data, pagination }`.
- Errors are `{ error, message }` in auth and `{ success: false, error }` in other routes.
- Pagination uses `page` and `limit` in the API and `page` and `pageSize` in the SPA.

## Tasks

- [ ] Follow the rules from [X-003](https://github.com/Ditmar/leetcode-spa/issues/368).
- [ ] Create helpers: `sendData(res, data, meta?)` and the error middleware format.
- [ ] Change all existing routes to the new format in small PRs (auth, courses, tests).
- [ ] Update the SPA at the same time ([SPA-013](https://github.com/Ditmar/leetcode-spa/issues/388)), or keep both formats for one release.
- [ ] Update tests and OpenAPI.

## Acceptance criteria

- All endpoints have the same success and error shape.
- Query parameters for pagination have the same names in all lists.
- No tests or SPA calls break.

## Update after decision X-003

Following [X-003](https://github.com/Ditmar/leetcode-spa/issues/368), API responses must use the unified contract defined in `docs/decisions/ADR-003-api-contract.md`.

The implementation in this ticket must follow these rules:

- Successful responses with a body use `{ data, meta? }`.
- Successful operations use `200 OK` by default, `201 Created` for creation operations and `204 No Content` when no response body is returned.
- Errors use `{ code, message, details? }`.
- Error codes use `SCREAMING_SNAKE_CASE`. Modules may define specific codes such as `USER_NOT_FOUND` as long as they are documented in OpenAPI.
- Paginated requests use `page` and `pageSize`.
- Paginated responses use `meta` with `page`, `pageSize`, `total` and `totalPages`.
- Existing API endpoints must be migrated progressively to the X-003 contract.
- During one compatibility release, the SPA may temporarily accept both legacy and X-003 response shapes while existing endpoints are migrated.
- New or migrated API endpoints must emit the X-003 format directly.
- After the migration is complete, legacy-format compatibility must be removed from the SPA.
- OpenAPI is the source of truth for the executable contract, as tracked in [API-039](https://github.com/Ditmar/api-leetcode/issues/93).

The SPA compatibility work is tracked in [SPA-013](https://github.com/Ditmar/leetcode-spa/issues/388), and error parsing during the migration is tracked in [SPA-006](https://github.com/Ditmar/leetcode-spa/issues/381).
