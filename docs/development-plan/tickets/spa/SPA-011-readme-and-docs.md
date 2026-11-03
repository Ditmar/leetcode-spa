# SPA-011: Rewrite the README and fix the docs

| Field | Value |
| --- | --- |
| Repo | leetcode-spa |
| Type | Docs |
| Priority | P2 |
| Size | S |
| Phase | 1 - Stabilize and secure |
| Depends on | X-005 |

## Problem

- The README is still the "Astro Starter Kit". After that it has an `apiClient` section that says the API is `http://localhost:4000/api/v1` and returns `{ data, meta }`. The real API does not do this.
- `package.json` says `"name": "magazine"`.
- `TESTING.md` mentions `Counter.tsx` and `Counter.test.tsx`, which do not exist. It is in Spanish while the code and other docs are in English.
- No list of environment variables: `API_BASE_URL`, `VITE_*`, `PUBLIC_EXPLORE_API_PATH`, `API_CACHE_TTL`, `VITE_POLLING_INTERVAL_MS`, `VITE_MAX_POLL_ATTEMPTS`, `VITE_MAX_CODE_SIZE_BYTES`.
- No explanation of the folders: `component-catalog`, `style-library`, `ui`, `app`, and `pages/ProblemList`.

## Tasks

- [ ] Rename the package (`leetcode-spa`).
- [ ] Write a new README: what it is, requirements, setup, scripts, env variables table, folder guide, how to add a page, how to add a service, how to test, Storybook.
- [ ] Update `TESTING.md` to match the real files and use one language (English).
- [ ] Remove or move the Astro template text.

## Acceptance criteria

- A new student can run the SPA with only the README.
- All env variables in the code appear in the README table (check with `grep`).
