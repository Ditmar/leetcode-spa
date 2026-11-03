# X-002: Decide how login and tokens work between SPA and API

| Field | Value |
| --- | --- |
| Repo | all |
| Type | Decision |
| Priority | P0 |
| Size | S |
| Phase | 0 - Decisions and setup |
| Depends on | None |

## Problem

The SPA and the API expect different login flows.

- **API:** `POST /api/auth/login` returns `{ accessToken, refreshToken, user }` in the JSON body. The access token is a JWT. The refresh token is a random UUID saved in the database. There are no cookies.
- **SPA:** `authService` expects a **cookie session**. It uses `credentials: 'include'` and calls `GET /auth/me` to get `{ user, accessToken, expiresAt }`. `apiClient` also tries to read a token from `localStorage` or a cookie, but nobody saves it there.
- The browser and the API run on different Railway domains. Without a plan we will have CORS and cookie problems.

## Options

1. **BFF in Astro (recommended).** Astro server routes (`/api/auth/*`) call the real API. They save the tokens in `HttpOnly`, `Secure`, `SameSite=Lax` cookies. The browser JavaScript never sees the tokens. The SPA already runs with the Node adapter, so this is possible.
2. **Direct calls from the browser.** Access token in memory, refresh token in an `HttpOnly` cookie set by the API. Needs CORS with credentials and the same site, or a shared parent domain.
3. **Tokens in `localStorage`.** Simple, but any XSS bug can steal them. Not recommended.

## Tasks

- [ ] Choose one option and write `docs/decisions/ADR-002-auth.md`.
- [ ] Define: cookie names and flags, token lifetimes, refresh flow, logout flow, what `GET /auth/me` returns.
- [ ] Define who sets `expiresAt` and how the SPA knows when to refresh.
- [ ] List the tickets that must change (see "Depends on" in `API-028`, `SPA-001`, `SPA-002`, `SPA-003`, `SPA-007`).

## Acceptance criteria

- The ADR has a sequence diagram for login, refresh and logout.
- The teacher approved it.
- Related tickets are updated with the final names of endpoints and cookies.

## Decision (2026-10-06)

**Option 1 was chosen: the Astro server keeps the tokens in cookies (BFF).**

- The API stays the owner of authentication. It checks passwords, creates tokens, refreshes them and revokes them. The API does **not** set cookies. It returns tokens in the JSON body, as today.
- The browser only talks to the Astro server (same origin). It never calls the API directly and never sees a token.
- Astro saves two cookies: access token and refresh token. Flags: `HttpOnly`, `SameSite=Lax`, `Secure` in production.
- Astro calls the API from the server and adds `Authorization: Bearer ...`. Astro also refreshes the token when it expires.
- CSRF: `SameSite=Lax` plus a check of the `Origin` header on every request that changes data.
- Because the browser does not call the API, **CORS is not needed** for the browser.
- The work in Astro is in `SPA-036`.

Still to write in the ADR: exact cookie names, token lifetimes (suggested: access 15 minutes, refresh 7 days), and the sequence diagram.
