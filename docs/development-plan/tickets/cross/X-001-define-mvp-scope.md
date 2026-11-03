# X-001: Decide the MVP scope

| Field | Value |
| --- | --- |
| Repo | all |
| Type | Decision |
| Priority | P0 |
| Size | S |
| Phase | 0 - Decisions and setup |
| Depends on | None |

## Problem

The three repos do not build the same product.

- The API has: auth, a mock users module, **courses**, and **company tests** (multiple-choice and programming questions, with a timer).
- The SPA has services for: **problems**, **code submissions**, **contests**, **explore topics**, and **user profile**. But all the SPA pages are empty placeholders (`<h1>Problems PAGE</h1>`).
- The API has no endpoint for problems, submissions, contests, explore or profile. The SPA has no page for courses or company tests.

If we do not decide, students will build features that do not fit together.

## Tasks

- [ ] Make a table of all features: problems, code editor, run/submit, submissions history, profile, explore, courses, company tests, contests, discuss.
- [ ] For each feature, write: "in MVP", "later" or "out".
- [ ] Decide how `Explore` (SPA) and `Courses` (API) relate. They look like the same idea.
- [ ] Decide what to do with the API `tests` module (company assessments). Keep it as a separate feature or remove it.
- [ ] Write the decision in `docs/decisions/ADR-001-mvp-scope.md` (one page).
- [ ] Update the priority of all tickets that are affected.

## Acceptance criteria

- One written decision exists and the teacher approved it.
- The decision has a clear "in MVP" list and an "out of scope" list.
- Ticket priorities match the decision.

## Notes

Suggested option (you can change it): the MVP is **Auth + Problems + Code editor + Run/Submit + Submissions history + simple Profile**. Courses, company tests, explore, contests and discuss go to phase 4.
