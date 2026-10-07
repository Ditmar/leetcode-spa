# API-037: Build the contests module

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Feature |
| Priority | P3 |
| Size | L |
| Phase | 4 - More features |
| Depends on | API-031 |

## Problem

The SPA `contestsService` expects: `GET /contests` (filters `status`, `page`, `pageSize`), `GET /contests/:id`, `GET /contests/:id/leaderboard`, `POST /contests/:id/register`, `DELETE /contests/:id/register`. None exists.

The SPA also does a "check then act" on the client: before register it calls `GET /contests/:id` to see if the status is `upcoming`. The server must check this too. Never trust the client.

## Tasks

- [ ] Model: `Contest` (title, start, end), `ContestProblem` (score), `ContestRegistration`.
- [ ] `status` (`upcoming`, `active`, `past`) is calculated from dates on the server.
- [ ] Register and unregister only while `upcoming` (`409` otherwise).
- [ ] Only registered users can submit during an active contest. Submissions are linked to the contest.
- [ ] Leaderboard: score, penalty time, rank, pagination.
- [ ] Do not show problems of an upcoming contest before the start.

## Acceptance criteria

- A user cannot register in a past contest by calling the API directly.
- The leaderboard is correct for a test contest with 3 users.
