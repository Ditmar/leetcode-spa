# SPA-021: Fix error handling and polling in `submissionsService`

| Field | Value |
| --- | --- |
| Repo | leetcode-spa |
| Type | Bug |
| Priority | P1 |
| Size | M |
| Phase | 1 - Stabilize and secure |
| Depends on | SPA-006 |

## Problem

- `handleSubmissionError` looks for `error.response.status` and `error.response.data` (an Axios style). But `apiClient` throws `{ status, code, message }`. There is no `response` key. So **every** API error becomes `UNKNOWN_ERROR` with status `500` and the message "An unexpected error occurred". The user never sees the real reason (not logged in, too many requests, invalid language).
- `sanitizeCode` calls `code.trim()`. This **changes the user's code** (for example, a Python snippet with a leading indent). It also writes validation errors with `console.error`.
- `pollSubmission` cannot be cancelled. It ignores `AbortSignal`.
- The poll loop waits 1.5 s up to 20 times (30 s total) with fixed delay. There is no backoff.
- `submissionsService.types.ts` and `userService.types.ts` both define a `Submission` with different fields (see `SPA-013`).

## Tasks

- [ ] Map `ApiError` objects (`status`, `code`, `message`) to `SubmissionServiceError`.
- [ ] Do not change the code. Only check if it is empty (`trim()` for the check) and check the byte size of the original.
- [ ] Remove `console.error` for expected validation errors.
- [ ] Accept an `AbortSignal` in `run`, `submit` and `pollSubmission`.
- [ ] Use a growing delay (for example 1 s, 1.5 s, 2 s ...).
- [ ] Update tests: 401, 429, validation, abort, timeout.

## Acceptance criteria

- A `401` from the API gives a `SubmissionServiceError` with status `401`.
- Code with leading spaces is sent exactly as typed.
- Aborting stops polling at once.
