# SPA-002: Match the auth payloads with the API

| Field | Value |
| --- | --- |
| Repo | leetcode-spa |
| Type | Bug |
| Priority | P0 |
| Size | M |
| Phase | 2 - Connect SPA and API |
| Depends on | X-002, API-028 |

## Problem

The SPA types and the API responses are different.

| Item | SPA (`authService.types.ts`) | API |
| --- | --- | --- |
| Name field | `username` | `name` |
| Login response | `AuthSession { user, accessToken, expiresAt }` | `{ accessToken, refreshToken, user: { id, name, email, createdAt } }` |
| `GET /auth/me` | session | user only |
| Refresh | no body, bearer token | body `{ refreshToken }`, response `{ accessToken }` |
| Role | `role: 'user' \| 'admin'` | not returned |
| Expiry | `expiresAt` number | inside the JWT (`exp`) |

## Tasks

- [ ] After `API-028`, update `AuthUser` and `AuthSession` types.
- [ ] If the API still differs, write a small mapper function (`toAuthSession(apiResponse)`) with tests. Do not spread mapping code across components.
- [ ] Compute `expiresAt` from the JWT `exp` if the API does not send it (decode only, do not verify in the browser).
- [ ] Send `name` in signup (or change the form label only).
- [ ] Keep the refresh token out of JavaScript if `X-002` says so.

## Acceptance criteria

- The AuthModal and the user menu show the real user name and email from the API.
- Mapper tests cover: normal response, missing field, old token.

## Update after decision X-002 (Astro keeps the tokens in cookies)

The Astro routes from `SPA-036` can return the session in the shape the SPA already expects (`user`, `expiresAt`) **without the tokens**. Do the mapping on the server, so the browser gets a small and safe object. The browser should not have `accessToken` or `refreshToken` in its types any more.
