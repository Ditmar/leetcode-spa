# SPA-026: Build the company tests pages (timed tests)

| Field | Value |
| --- | --- |
| Repo | leetcode-spa |
| Type | Feature |
| Priority | P2 |
| Size | L |
| Phase | 4 - More features |
| Depends on | X-001, SPA-019, API-033 |

## Problem

The API has a full "test" flow: list tests, start a timed session, get questions, submit. The SPA has no service and no page for it.

## Tasks

- [ ] Create `testsService`.
- [ ] Page `/tests`: list with filters (company, difficulty, search) and pagination.
- [ ] Page `/tests/[id]`: description, duration, question counts, "Start" button.
- [ ] Test runner page: countdown timer based on `expiresAt` from the server (not only a local clock), question navigation, MCQ options (single and multiple), code editor for programming questions, auto-save, "Submit" with a confirm dialog.
- [ ] When the time is over, submit automatically.
- [ ] If the user refreshes, resume the same session (`API-033`).
- [ ] Result page: score, percentage, passed or not, breakdown.
- [ ] Warn before the user leaves the page.

## Acceptance criteria

- A user can finish a test from start to result.
- Refreshing the page keeps answers and the right remaining time.
- The timer ends the test at the right time even if the computer clock is wrong.
