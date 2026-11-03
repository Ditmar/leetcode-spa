# Changes after the first version of the tickets

Use this list to update the GitHub issues. The first version had **104 tickets**. Now there are **109**.

The ticket files in `tickets/` are the source of truth. If an issue is older than a file, copy the changes from the file.

"Before" values are the ones after the first consistency check of priorities and dependencies. If your issue says something different, trust the ticket file.

## 1. New tickets (create an issue for each)

| Ticket | Title | Priority | Size | Phase | Depends on | Issue |
| --- | --- | --- | --- | --- | --- | --- |
| `SPA-036` | Build the Astro auth routes and API proxy (BFF) | P0 | L | 2 | X-002, X-003 | [Issue #411](https://github.com/Ditmar/leetcode-spa/issues/411) |
| `API-043` | Build the execution queue and the worker (RabbitMQ) | P1 | L | 3 | X-004, API-030, API-031, API-044 | [Issue #97](https://github.com/Ditmar/api-leetcode/issues/97) |
| `API-044` | Build the test harness and the output comparison | P1 | L | 3 | X-004, API-029 | [Issue #98](https://github.com/Ditmar/api-leetcode/issues/98) |
| `API-045` | Build our own Docker executor (advanced, optional) | P3 | L | 4 | API-043 | [Issue #99](https://github.com/Ditmar/api-leetcode/issues/99) |
| `CD-018` | Deploy Piston, RabbitMQ and the worker | P1 | L | 3 | X-004, API-043 | [Issue #39](https://github.com/Ditmar/leetcode-cd/issues/39) |

Files: `tickets/spa/SPA-036-...`, `tickets/api/API-043-...`, `tickets/api/API-044-...`, `tickets/api/API-045-...`, `tickets/cd/CD-018-...`.
Suggested repo for the issue: `SPA-036` in `leetcode-spa`; `API-043`, `API-044`, `API-045` in `api-leetcode`; `CD-018` in `leetcode-cd`.

## 2. Ticket rewritten

| Ticket | What changed |
| --- | --- |
| `API-030` | **Replaced.** Old: "Connect the code runner (safe execution)", size L. New: "Connect Piston as the code executor", size **M**. It is now only the Piston adapter (`CodeRunner` interface). The queue is in `API-043` and the test programs are in `API-044`. Copy the whole file into the issue. |

## 3. Priority, size or dependency changed

Update the table at the top of the issue (and the labels).

| Ticket | Field | Before | Now |
| --- | --- | --- | --- |
| `API-020` | Priority | P2 | **P1** |
| `API-021` | Priority | P2 | **P1** |
| `API-028` | Priority | P1 | **P0** |
| `API-028` | Depends on | X-002, X-003, API-026 | **X-002, X-003** |
| `CD-009` | Priority | P2 | **P1** |
| `SPA-013` | Priority | P2 | **P1** |
| `CD-014` | Priority | P3 | **P2** |
| `CD-008` | Depends on | API-019, SPA-010, CD-009 | **API-019, CD-009** |
| `CD-004` | Depends on | API-040 | **None** |
| `SPA-001` | Depends on | X-002, X-003 | **X-002, X-003, SPA-036** |
| `SPA-003` | Depends on | X-002, SPA-001 | **X-002, SPA-001, SPA-036** |
| `SPA-007` | Depends on | X-002, SPA-003 | **X-002, SPA-003, SPA-036** |
| `API-031` | Depends on | API-029, API-030 | **API-029, API-030, API-044** |
| `SPA-020` | Depends on | SPA-019, SPA-021, API-031 | **SPA-019, SPA-021, API-031, API-043** |

## 4. Text changed inside the ticket

| Ticket | Change |
| --- | --- |
| `CD-004` | New first task: "Use the existing `/health` route first. When `API-040` is done, switch to `/health/ready`." |
| `API-028` | The task about `role` now says: the real `role` comes from `API-026`; until then return `"USER"`. |
| `SPA-014` | "about 28 components" is now "about 27 components". |

## 5. Note added at the end of the ticket

These tickets got a new section at the end of the file. Copy that section into the issue as a comment or at the end of the description. The section title tells you which decision it comes from.

**Decision: the Astro server keeps the tokens in cookies (`X-002`)**

| Ticket | Section title |
| --- | --- |
| `X-002` | `## Decision (2026-10-06)` (the decision itself) |
| `SPA-001` | Update after decision X-002 |
| `SPA-002` | Update after decision X-002 |
| `SPA-003` | Update after decision X-002. **Important:** no token store in the browser any more |
| `SPA-006` | Update after decision X-002 |
| `SPA-007` | Update after decision X-002 |
| `SPA-033` | Update after decision X-002 |
| `API-009` | Update after decision X-002 |
| `API-010` | Update after decision X-002. **Important:** forward the real client IP, and CORS can stay closed |
| `API-028` | Update after decision X-002 |

**Decision: Piston (executor) + RabbitMQ (queue) (`X-004`)**

| Ticket | Section title |
| --- | --- |
| `X-004` | `## Decision (2026-10-06)` (the decision itself) |
| `API-031` | Update after decision X-004. **Important:** returns `202` with `pending`, defines the `JobQueue` interface, new status `system_error` |
| `SPA-020` | Update after decision X-004. Show "In queue" and "Running", handle `system_error` |
| `API-029` | Update after decision X-004. New fields: `functionName`, JSON test inputs and outputs |
| `API-016` | Update after decision X-004 |
| `X-005` | Update after decision X-004. Add RabbitMQ and Piston to docker-compose |
| `CD-007` | Update after decision X-004. New variables: `RABBITMQ_URL`, `PISTON_URL`, `PISTON_TOKEN` |

## 6. Other documents changed

- `DEVELOPMENT-PLAN.md`: new "Decisions already made" section, new tickets in phase 3 and 4, new critical path, totals.
- `REVIEW-SUMMARY.md`: the feature map row for the code editor lists the new tickets.
- `README.md`: ticket count.
- `TICKETS-INDEX.md`: rebuilt (109 tickets).

## 7. New totals

| | Before | Now |
| --- | --- | --- |
| Tickets | 104 | 109 |
| Person-days | 226.5 | 244.5 |
| P0 + P1 tickets | 61 | 65 |
| P0 + P1 person-days | 130.5 | 144.5 |
