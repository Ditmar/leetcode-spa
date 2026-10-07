# SPA-004: Share the auth state between all pages and islands

| Field | Value |
| --- | --- |
| Repo | leetcode-spa |
| Type | Bug |
| Priority | P1 |
| Size | M |
| Phase | 2 - Connect SPA and API |
| Depends on | SPA-003 |

## Problem

`AuthProvider` is only mounted inside `HomeAuthGate`, which exists only on `index.astro`. In Astro, every `client:load` component is a **separate React root**. A React context does not cross these roots.

So on `/problems`, `/explore`, `/contest` and `/discuss`, `useAuth()` would throw "must be used within an AuthProvider". Also `AppProvider` mixes two jobs (config and auth).

## Tasks

- [ ] Choose a way to share state between islands: a small store (nanostores, Zustand, or `useSyncExternalStore` on the token store from `SPA-003`).
- [ ] Make `useAuth()` work in any island without a provider.
- [ ] Read the first user value from the server (`Astro.locals.user`, see `SPA-007`) to avoid a flash of "signed out".
- [ ] Split config and auth. Remove `AppProvider` or make it only about config.
- [ ] Add tests: sign in in one island updates another island.

## Acceptance criteria

- `useAuth()` works on all pages.
- After sign in on one island, the navigation bar (another island) updates with no page reload.
