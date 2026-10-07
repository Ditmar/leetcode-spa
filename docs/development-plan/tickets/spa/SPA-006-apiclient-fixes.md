# SPA-006: Fix problems in `apiClient`

| Field | Value |
| --- | --- |
| Repo | leetcode-spa |
| Type | Bug |
| Priority | P1 |
| Size | M |
| Phase | 1 - Stabilize and secure |
| Depends on | X-003 |

## Problem

- **Base URL:** on the server the base is `process.env.API_BASE_URL` (default `http://localhost:3000`, no `/api`). In the browser it is `/api`, which goes to Astro, and Astro has no such route. So all browser calls to services return `404`. (This is solved by the BFF or proxy from `X-002`, or by a real API URL + CORS.)
- **File upload:** `userService.uploadAvatar` sends a `FormData`. `request()` always sets `Content-Type: application/json` and uses `JSON.stringify(body)`, so the server receives `{}`. Upload cannot work.
- **Wrong type guard:** `isApiError` in `apiClient.utils.ts` returns `error instanceof Error`. But `apiClient` throws plain objects `{ status, code, message }`. So `isApiError(err)` is `false` for real API errors. The README example does not work. There are also private copies of `isApiError` in `authService.ts` and `exploreService.ts`.
- **Error mapping:** any `Error` becomes status `500` and `INTERNAL_SERVER_ERROR`, even a network failure.
- **Cookie parsing:** `getCookieToken` uses `split('=')[1]`. This cuts values that contain `=`.
- **Error body:** it reads only `body.message`. The API also sends `error`.
- No timeout, and no retry for safe `GET` calls.

## Tasks

- [ ] Support `FormData` (do not set `Content-Type`, do not stringify).
- [ ] Make one correct `isApiError` type guard and use it everywhere.
- [ ] Throw real `ApiError` objects. Map network errors and aborts to separate codes (`NETWORK_ERROR`, `ABORTED`).
- [ ] Add a timeout with `AbortController` (default 15 s).
- [ ] Fix cookie parsing, or remove it after `SPA-003`.
- [ ] Read the error body in the agreed format (`X-003`).
- [ ] Update `apiClient.test.ts`. Add tests for each fix.

## Acceptance criteria

- Avatar upload sends a real multipart request (check in the network tab).
- `isApiError(err)` is `true` for every error that `apiClient` throws.
- A timeout test passes.

## Update after decision X-002 (Astro keeps the tokens in cookies)

The `/api` base URL in the browser is now correct, because Astro answers it (`SPA-036`). On the server (SSR), `apiClient` can call the real API with `API_BASE_URL`, and the token comes from the cookie.
