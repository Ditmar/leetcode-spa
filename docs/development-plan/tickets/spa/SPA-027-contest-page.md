# SPA-027: Build the contest pages

| Field | Value |
| --- | --- |
| Repo | leetcode-spa |
| Type | Feature |
| Priority | P3 |
| Size | L |
| Phase | 4 - More features |
| Depends on | X-001, SPA-020, API-037 |

## Problem

`/contest` shows `<h1>Contest PAGE</h1>`. `contestsService` exists with list, detail, leaderboard, join and leave.

## Tasks

- [ ] Contest list with tabs (active, upcoming, past) and pagination.
- [ ] Contest detail: description, times (with the user's time zone), countdown, problems, register and unregister.
- [ ] Contest problem page that reuses the problem detail and editor.
- [ ] Leaderboard with pagination and the user's rank.
- [ ] In `contestsService.joinContest` and `leaveContest`, the client does an extra `GET` to check the status. Keep it only for fast feedback. The server decides (see `API-037`).

## Acceptance criteria

- A user can register for an upcoming contest and see the leaderboard of a past contest.
- Buttons are hidden or disabled when the action is not allowed.
