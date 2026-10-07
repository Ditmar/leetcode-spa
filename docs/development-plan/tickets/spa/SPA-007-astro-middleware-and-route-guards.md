# SPA-007: Add Astro middleware to load the user and protect pages

| Field | Value |
| --- | --- |
| Repo | leetcode-spa |
| Type | Feature |
| Priority | P1 |
| Size | M |
| Phase | 2 - Connect SPA and API |
| Depends on | X-002, SPA-003, SPA-036 |

## Problem

`pages/index.astro` reads `Astro.locals.config` and `Astro.locals.user`, but there is **no `src/middleware.ts`**. So both values are always `null`. The page also expects `?authRequired=true` to open the login modal, but no code redirects to it.

There is no protection for pages that need login.

## Tasks

- [ ] Create `src/middleware.ts` with `defineMiddleware`.
- [ ] Read the session (cookie) and set `locals.user` (and `locals.config`).
- [ ] Define a list of protected routes (for example `/profile`, `/settings`, `/tests/*`, `/problems/*` submit actions).
- [ ] If the user is not logged in, redirect to `/?authRequired=true` (or `/login?redirect=...`).
- [ ] Add types for `App.Locals` in `src/env.d.ts`.
- [ ] Add tests for the middleware logic.

## Acceptance criteria

- Opening a protected URL while logged out redirects to login, and after login returns to the first URL.
- `Astro.locals.user` has the user on every request when the cookie is valid.

## Update after decision X-002 (Astro keeps the tokens in cookies)

Read the session with `getSession(cookies)` from `SPA-036`. The middleware reads the cookies and calls the API `/auth/me` (with the server-side token) to fill `Astro.locals.user`.
