# API-032: Build the user profile and statistics endpoints

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Feature |
| Priority | P2 |
| Size | L |
| Phase | 4 - More features |
| Depends on | API-006, API-031 |

## Problem

The SPA `userService` calls many endpoints that do not exist. The old `/api/user` mock module has no real data (see `API-006`).

## Tasks

- [ ] `GET /api/users/me` and `GET /api/users/:id` (public fields only: no email for other users).
- [ ] `PUT /api/users/me`: `displayName` (max 50) and `bio` (max 256).
- [ ] `GET` and `PUT /api/users/me/preferences`: `defaultLanguage`, `theme`, `editorFontSize` (12 to 24), `editorTabSize` (2 or 4).
- [ ] `GET /api/users/me/stats`: solved by difficulty, acceptance rate, current and max streak, heatmap for the last 365 days, recent submissions.
- [ ] `POST /api/users/me/avatar`: image upload (JPEG, PNG, WEBP, max 2 MB). Decide where to store files (cloud storage or volume).
- [ ] `DELETE /api/users/me`: the password confirmation goes in the **body**, not in a header (the SPA sends `X-Confirmation-Password` today; headers can be logged).
- [ ] Badges: a simple first version (for example "first solved problem").
- [ ] Add migration for new columns (`username`, `bio`, `avatarUrl`, `preferences`).

## Acceptance criteria

- All `userService` functions work against the API.
- A user cannot read the email or private data of another user.
- Deleting an account removes the user data (check cascade rules).
