# API-033: Add missing endpoints to the company tests module

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Feature |
| Priority | P2 |
| Size | M |
| Phase | 4 - More features |
| Depends on | API-014, API-001 |

## Problem

A user can start and submit a test, but cannot do the most basic follow-up actions.

- If the user refreshes the page during a test, there is no way to get the active session back.
- Answers are only sent at the end. If the browser closes, all work is lost.
- After the submit, there is no endpoint to read the result again or to see the history.
- No way to review which answers were correct.

## Tasks

- [ ] `GET /api/tests/:id/session`: return the active session (if any) with remaining time.
- [ ] `PUT /api/tests/:id/answers`: save answers while the user works (auto-save). Only while the session is active.
- [ ] `GET /api/tests/results/:submissionId`: the result (owner only).
- [ ] `GET /api/tests/me/history`: list of the user's attempts with score and date.
- [ ] After submit, allow a review that shows the correct answers (not before the submit).
- [ ] Add tests for access control.

## Acceptance criteria

- A user can refresh the browser and continue the same test with the saved answers and the correct remaining time.
- Another user cannot read my result.
