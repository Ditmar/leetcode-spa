# SPA-001: Fix the URLs used by `authService`

| Field | Value |
| --- | --- |
| Repo | leetcode-spa |
| Type | Bug |
| Priority | P0 |
| Size | M |
| Phase | 2 - Connect SPA and API |
| Depends on | X-002, X-003, SPA-036 |

## Problem

`src/services/auth/authService.ts` calls `fetch('/auth/signin')`, `fetch('/auth/signup')`, `fetch('/auth/signout')`, `fetch('/auth/refresh')` and `fetch('/auth/me')`.

These are **relative URLs**. They go to the SPA server (Astro), not to the API. Astro has no such routes (the only pages are `index`, `problems`, `explore`, `contest`, `discuss`, `sysinfo`). The real API paths are `/api/auth/login`, `/api/auth/logout`, `/api/auth/signup`, `/api/auth/refresh` and `/api/auth/me`.

So **login can never work with the real API**. It only works with `authService.mock.ts`. To switch to the mock, a developer must comment and uncomment an import in `authContext.tsx`.

Also: the error text `'Invalif response format'` has a typo.

## Tasks

- [ ] Follow `X-002` (BFF or direct calls) and `X-003` (paths).
- [ ] Use one HTTP client (`apiClient` or the BFF routes) for all auth calls. Remove the private `request` function in `authService.ts`.
- [ ] Fix endpoint names in `authService.constants.ts`.
- [ ] Replace the "comment the import" trick with an environment variable (for example `PUBLIC_USE_MOCK_AUTH=true`).
- [ ] Fix the typo.
- [ ] Update the unit tests (`authService.test.ts`).

## Acceptance criteria

- With a local API, sign up, sign in, `me` and sign out work in the browser.
- Mock mode is controlled by one env variable and is documented in the README.
- Tests pass.

## Update after decision X-002 (Astro keeps the tokens in cookies)

The browser must call the **Astro routes** (`/api/auth/login`, `/api/auth/signup`, `/api/auth/logout`, `/api/auth/me`), not the real API. Those routes are built in `SPA-036`. Use the same names in `authService.constants.ts`.
