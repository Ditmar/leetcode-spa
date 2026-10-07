# API-042: Use one response format and one pagination format everywhere

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Refactor |
| Priority | P2 |
| Size | M |
| Phase | 2 - Connect SPA and API |
| Depends on | X-003, API-007 |

## Problem

Today:

- Auth routes return raw objects.
- Course and test routes return `{ success: true, data, pagination }`.
- Errors are `{ error, message }` in auth and `{ success: false, error }` in other routes.
- Pagination uses `page` and `limit` in the API and `page` and `pageSize` in the SPA.

## Tasks

- [ ] Follow the rules from `X-003`.
- [ ] Create helpers: `sendData(res, data, meta?)` and the error middleware format.
- [ ] Change all existing routes to the new format in small PRs (auth, courses, tests).
- [ ] Update the SPA at the same time (`SPA-013`), or keep both formats for one release.
- [ ] Update tests and OpenAPI.

## Acceptance criteria

- All endpoints have the same success and error shape.
- Query parameters for pagination have the same names in all lists.
- No tests or SPA calls break.
