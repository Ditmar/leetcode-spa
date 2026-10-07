# Development plan: LeetCode clone

This folder has the plan to finish the project. It was made after a code review of the three repos on **2026-10-06**.

| Repo | Code | Commit reviewed |
| --- | --- | --- |
| `api-leetcode` | `API` | `74e9e4c` |
| `leetcode-spa` | `SPA` | `26715742` |
| `leetcode-cd` | `CD` | `f7798b9` |
| All repos | `X` | - |

## What is in this folder

| File | What it is |
| --- | --- |
| [DEVELOPMENT-PLAN.md](DEVELOPMENT-PLAN.md) | The plan: phases, order of work, MVP, team tracks, risks. **Start here.** |
| [REVIEW-SUMMARY.md](REVIEW-SUMMARY.md) | What we found in the review: what is good and what is wrong. Each problem links to a ticket. |
| [TICKETS-INDEX.md](TICKETS-INDEX.md) | A table with all 109 tickets, by phase. |
| [CHANGES-AFTER-FIRST-VERSION.md](CHANGES-AFTER-FIRST-VERSION.md) | What changed after the first 104 tickets. Use it to update the GitHub issues. |
| `tickets/cross/` | `X-` tickets: decisions and work for all repos |
| `tickets/api/` | `API-` tickets for `api-leetcode` |
| `tickets/spa/` | `SPA-` tickets for `leetcode-spa` |
| `tickets/cd/` | `CD-` tickets for `leetcode-cd` |

## How to read a ticket

Every ticket has the same parts.

- **Table at the top:** repo, type, priority, size, phase, and which tickets must be done first.
- **Problem:** what is wrong or missing. It names the files, so you can find the code.
- **Tasks:** a checklist. Tick the boxes as you work.
- **Acceptance criteria:** how we know the ticket is done. Check all of them before you open the PR.
- **Hints / Notes:** extra help (some tickets only).

### Priority

| Priority | Meaning |
| --- | --- |
| **P0** | Do it now. Security problem, crash, or something that blocks the team. |
| **P1** | Needed for the MVP (first usable version). |
| **P2** | Should do. Makes the product better and safer. |
| **P3** | Nice to have. Do it if there is time. |

### Size (for one student)

| Size | Time |
| --- | --- |
| **S** | Less than 1 day |
| **M** | 1 to 3 days |
| **L** | 3 to 5 days. If it is bigger than you thought, split it into smaller tickets. |

### Type

`Bug`, `Security`, `Risk`, `Feature`, `Refactor`, `Chore`, `Test`, `Docs`, `Decision`, `Process`, `Quality`.

A **Decision** ticket does not need code. The result is a short written document (an ADR) in `docs/decisions/`.

## How to work on a ticket

The full rules are in ticket [X-006](https://github.com/Ditmar/leetcode-spa/issues/371). The short version:

1. Choose a ticket whose "Depends on" tickets are done. Take P0 first, then P1.
2. Assign it to yourself. Tell the team.
3. Create a branch: `feature/API-012-short-name` (use `fix/` for bugs).
4. Open a **draft PR** early. Put the ticket ID in the title.
5. Do the tasks. Add tests. Update the docs.
6. Check every acceptance criterion. Ask for a review.
7. If the ticket is too big, split it. Write the new tickets in the same format.

## Glossary

| Word | Simple meaning |
| --- | --- |
| **ADR** | Architecture Decision Record. A short document that says what we decided and why. |
| **BFF** | Backend For Frontend. A small server that sits next to the web app and talks to the API for it. |
| **CORS** | Browser rule that says which websites can call an API. |
| **Envelope** | The fixed shape of every API response, for example `{ "data": ..., "meta": ... }`. |
| **Fail fast** | Stop the program at start with a clear error, if something important is wrong (for example a missing secret). |
| **Idempotent** | You can run it many times and the result is the same as running it once. |
| **JWT** | A signed token that proves who the user is. The API gives it after login. |
| **Race condition** | A bug that happens when two requests run at the same time and both pass a check. |
| **Rate limit** | A rule that limits how many requests one client can send in a period of time. |
| **Supply chain risk** | The risk that a package or tool we download is changed or has bad code. |
| **XSS** | Cross-Site Scripting. An attacker puts JavaScript in a page that other users open. |
| **Hexagonal architecture** | A way to organize code in layers (`domain`, `application`, `infrastructure`) so business rules do not depend on frameworks. The API uses it. |
| **Island** | In Astro, one interactive React component on a page. Islands do not share React state. |
| **Migration** | A file that changes the database structure. |
| **MVP** | Minimum Viable Product. The smallest version that real users can use. |
| **Rotation** | Giving a new refresh token each time the old one is used. |
| **RBAC** | Role-Based Access Control. What you can do depends on your role (user or admin). |
| **Sandbox** | A closed place where we run unknown code, so it cannot hurt the server. |
| **Seed** | A script that puts example data in the database. |
| **Smoke test** | A fast test that checks the most important things still work. |

## Keeping this folder up to date

- **Status** (to do, in progress, done) is not saved in these files. Use the existing GitHub issues linked in [ISSUE-LINKS.md](ISSUE-LINKS.md) and the project board. Close the issue when the acceptance criteria are all true.
- If you find a new problem, write a new ticket with the next free number. Use the same format (the table at the top is required).
- Keep `TICKETS-INDEX.md` and `ISSUE-LINKS.md` in sync with the ticket files and GitHub issues after changing a priority, size, phase, dependency, or ticket.

## GitHub tracking

All **109 tickets** have corresponding GitHub issues. See [the issue index](ISSUE-LINKS.md) and [the project Backlog](https://github.com/users/Ditmar/projects/7/views/1).
