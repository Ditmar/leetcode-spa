# SPA-035: Check performance and loading behavior

| Field | Value |
| --- | --- |
| Repo | leetcode-spa |
| Type | Quality |
| Priority | P3 |
| Size | M |
| Phase | 5 - Quality and launch |
| Depends on | SPA-020 |

## Problem

The build shows `NavShell` as a 196 kB JavaScript file (about 59 kB gzipped) and a 175 kB client chunk, for pages that only show a heading. After the editor and charts are added, it can become heavy. All islands use `client:load` (hydrate at once).

Also: `utils/fetchWithCache.ts` has a simple in-memory cache without size limit. It is not used now. If it is used for per-user pages, one user can see another user's cached data.

## Tasks

- [ ] Measure with Lighthouse and `astro build` output. Set a budget (for example JavaScript per page).
- [ ] Use `client:visible` or `client:idle` where possible. Load the editor and charts lazily.
- [ ] Import MUI components by path, check that the bundle does not include unused icons.
- [ ] Preload only needed fonts (the page has about 10 font files, some unused).
- [ ] Decide about `fetchWithCache`: delete it, or use it **only** for public data with a size limit.
- [ ] Add a bundle size check in CI.

## Acceptance criteria

- Lighthouse performance score of 80 or more on the problems list (mobile).
- The CI shows the bundle size and fails above the budget.
