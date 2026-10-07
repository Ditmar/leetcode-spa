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
- [ ] Create a cookie helper that sets and clears two cookies: access token (short life) and refresh token (longer life, `path=/api/auth`). Flags: `HttpOnly`, `SameSite=Lax`, `Secure` in production (not on `http://localhost`).
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
