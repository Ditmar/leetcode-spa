# SPA-022: Build the submissions history

| Field | Value |
| --- | --- |
| Repo | leetcode-spa |
| Type | Feature |
| Priority | P2 |
| Size | M |
| Phase | 4 - More features |
| Depends on | SPA-020 |

## Problem

`submissionsService.getHistory` and `getById` exist, but users cannot see their past submissions.

## Tasks

- [ ] "Submissions" tab in the problem page: the user's submissions for this problem.
- [ ] Page `/submissions` with filters (problem, language, status) and pagination.
- [ ] A detail view with the code (read-only editor) and the result.
- [ ] Button "Open in editor" to reuse old code.
- [ ] Dates are shown in the user's local time zone.

## Acceptance criteria

- A logged-in user sees only their own submissions.
- The filters work and are saved in the URL.
