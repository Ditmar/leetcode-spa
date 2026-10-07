# SPA-003: Keep the token in one place and refresh it automatically

| Field | Value |
| --- | --- |
| Repo | leetcode-spa |
| Type | Bug |
| Priority | P0 |
| Size | M |
| Phase | 2 - Connect SPA and API |
| Depends on | X-002, SPA-001, SPA-036 |

## Problem

The login state lives in **three places** that do not talk to each other.

1. `authService.ts` keeps `_session` in a module variable.
2. `apiClient.ts` keeps `_authToken`. Its `setAuthToken()` is **never called** by the app (the README says `authService` calls it). It also reads `localStorage['auth_token']` and a cookie `auth_token`, but nothing writes them. `authService.constants.ts` has another key (`auth_access_token`) that nothing uses.
3. `AuthContext` keeps its own `session` state.

Result: after a successful login, `apiClient` sends **no** `Authorization` header, and every protected API call fails with `401`.

More problems:

- `needsRefresh()` and `refreshToken()` exist but nobody calls them. There is no automatic refresh.
- `AuthContext` computes `isAuthenticated` inside `useMemo`. It does not change when the token expires.
- `contestsService` and `userService` send a `Cookie` header by hand on the server. The API does not read cookies today.

## Tasks

- [ ] Create one token store (module with `get`, `set`, `clear`, `subscribe`).
- [ ] `apiClient` reads the token only from this store.
- [ ] On a `401`, try to refresh **once**, then repeat the request. If refresh fails, clear the session and fire the sign-out event.
- [ ] Add a timer that refreshes before expiry (use `REFRESH_THRESHOLD_MS`). Avoid two refresh calls at the same time (share one promise).
- [ ] Remove unused keys and code paths.
- [ ] Remove or fix the manual `Cookie` header code after `X-002` is done.
- [ ] Write tests: token used in header, refresh on 401, parallel requests refresh once, refresh failure signs out.

## Acceptance criteria

- After login, a protected call (for example `GET /problems/stats`) sends the token.
- If the access token is expired, the user does not notice (silent refresh).
- If refresh fails, the UI shows the signed-out state.

## Update after decision X-002 (Astro keeps the tokens in cookies)

The browser does **not** keep any token now. So:

- Do not build a token store in the browser. Remove `setAuthToken`, the `localStorage` code and the `auth_token` cookie code from `apiClient`.
- The browser state is only "who is the user" (from `/api/auth/me`) and "is the session alive".
- Token refresh happens on the server, in the proxy from `SPA-036`. In the browser, keep only: handle a final `401` (fire the sign-out event) and keep the user state in one place.
- The task "add a timer that refreshes before expiry" is not needed in the browser.
