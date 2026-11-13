# SPA-036: Build the Astro auth routes and API proxy (BFF)

| Field | Value |
| --- | --- |
| Repo | leetcode-spa |
| Type | Feature |
| Priority | P0 |
| Size | L |
| Phase | 2 - Connect SPA and API |
| Depends on | X-002, X-003 |

## Problem

`X-002` decided that the **Astro server keeps the tokens in cookies**. The browser JavaScript must never see the access token or the refresh token. The API stays the owner of the login (it checks passwords and creates tokens).

Today this does not exist:

- Astro has no server routes. The browser `apiClient` calls `/api/...` on the Astro host and gets `404`.
- Nothing saves the tokens in cookies.
- Nothing adds the `Authorization` header for the browser.

## Tasks

- [ ] Create server routes in `src/pages/api/auth/`: `login.ts`, `signup.ts`, `logout.ts`, `me.ts`. They call the real API (`API_BASE_URL`, server-only variable).
- [ ] Create a cookie helper that sets and clears two cookies: access token (short life) and refresh token (longer life, `path=/api`, see the update below). Flags: `HttpOnly`, `SameSite=Lax`, `Secure` in production (not on `http://localhost`).
- [ ] Create a proxy route `src/pages/api/[...path].ts` for all other API calls. It:
  - only allows paths from a list (allow-list), and returns `404` for the rest;
  - reads the access token from the cookie and sends `Authorization: Bearer ...` to the API;
  - on `401`, refreshes the token **once** (parallel requests share one refresh), saves the new cookies, and repeats the request;
  - if refresh fails, clears the cookies and returns `401`;
  - never sends the browser cookies to the API;
  - sets a timeout and a body size limit, and forwards `X-Request-Id`.
- [ ] Protect against CSRF: for `POST`, `PUT`, `PATCH` and `DELETE`, check the `Origin` header (or `Sec-Fetch-Site`) and return `403` if it is not our site.
- [ ] Create `getSession(cookies)` for the Astro middleware (`SPA-007`) and for server-side page code.
- [ ] Write unit tests with a mocked `fetch`: login sets cookies, refresh on `401`, refresh fails, blocked path, wrong origin.
- [ ] Document the cookie names, lifetimes and variables in the README.

## Acceptance criteria

- After login, `document.cookie` and `localStorage` have **no** tokens (check in the browser tools).
- Both cookies are `HttpOnly`.
- An expired access token is refreshed without the user noticing.
- Logout clears both cookies and revokes the refresh token in the API.
- A `POST` from another origin returns `403`.
- A path that is not in the allow-list returns `404`.

## Hints

Astro gives you `Astro.cookies` in pages and `cookies` in API routes (`APIContext`). Read the Astro docs for "endpoints" and "cookies".

## Update after decision X-003

Following [X-003](https://github.com/Ditmar/leetcode-spa/issues/368), the Astro BFF must follow the unified API contract.

- The browser calls Astro routes under `/api/...`, not the external API directly.
- `API_BASE_URL` contains only the API origin. Astro preserves the `/api/...` path when forwarding requests.
- Browser-facing authentication routes are `/api/auth/login`, `/api/auth/signup`, `/api/auth/logout` and `/api/auth/me`.
- `/api/auth/refresh` is an internal API operation handled by Astro, not a browser-facing route.
- Successful responses with a body use `{ data, meta? }`.
- Error responses use `{ code, message, details? }`.
- Browser-facing session responses must contain only non-sensitive user information and `expiresAt` as a Unix timestamp in milliseconds.
- Access tokens and refresh tokens must never be included in browser-facing JSON responses.
- The proxy allow-list must follow the endpoint mapping defined in ADR-003.

## Update after the review of PR #444

- The refresh token cookie uses `path=/api`, not `path=/api/auth`. The browser only sends a cookie when the request path starts with the cookie path, and the proxy (`/api/problems`, `/api/submissions`...) must read the refresh token to refresh the session after a `401`. The cookie is still `HttpOnly` and is never sent to pages outside `/api`.
- The proxy allow-list contains only the endpoints of the ADR-003 mapping table. `/courses/*` and `/tests/*` are not exposed until the team decides to add them to the ADR.
- A `408` or `429` from `POST /api/auth/refresh` is a temporary error: the session is kept and the proxy answers `502`. Only `400`, `401`, `403` and `404` end the session.
