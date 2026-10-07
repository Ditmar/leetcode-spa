# SPA-015: Build one app shell with navigation, user menu and error pages

| Field | Value |
| --- | --- |
| Repo | leetcode-spa |
| Type | Feature |
| Priority | P1 |
| Size | M |
| Phase | 2 - Connect SPA and API |
| Depends on | SPA-004 |

## Problem

- Each page repeats the same layout code and the same title: `"LeetCode SPA"` (bad for SEO and browser tabs).
- `NavShell` wraps the content in `ClientOnlyMuiProvider`, and each page component also wraps with `ClientOnlyMuiProvider` (two providers).
- The navigation has no user area: no "Sign in" button, no avatar, no "Sign out".
- The active link comes from `window.location` in the browser, so the server HTML can be wrong.
- No 404 page and no 500 page. No footer.

## Tasks

- [ ] Create one `AppLayout.astro` with title, description and the navigation island. Each page passes its own title.
- [ ] Remove duplicate providers.
- [ ] Add the user menu: if logged out, "Sign in" and "Sign up"; if logged in, avatar with a dropdown (Profile, My submissions, Sign out).
- [ ] Use `Astro.url.pathname` for the active link on the server.
- [ ] Make the navigation responsive (mobile menu).
- [ ] Add `404.astro` and `500.astro`.
- [ ] Add a simple footer.

## Acceptance criteria

- Every page has its own `<title>`.
- Sign out from the menu works and updates the page.
- Unknown URL shows the 404 page.
- Navigation works on a 360 px wide screen.
