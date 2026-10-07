# Development plan

Goal: finish the LeetCode clone and run it in production.

Read first: [REVIEW-SUMMARY.md](REVIEW-SUMMARY.md) (what we found) and [TICKETS-INDEX.md](TICKETS-INDEX.md) (all tickets).

## 1. What "finished" means (suggested MVP)

A user can:

1. Sign up, sign in and sign out.
2. See a list of problems and filter it.
3. Open a problem, write code in a code editor (JavaScript, Python, Java or C++).
4. **Run** the code on the examples and **Submit** it against all tests, and see the result.
5. See their past submissions and a simple profile.

And the team can:

- Start the whole system on a laptop with one command.
- Deploy to `ppd`, check it, promote to `prod`, and **roll back** if something is wrong.
- Trust the system: no known P0 or P1 security problem is open.

Everything else (courses, company tests, explore, contests, discuss, dark mode) is **phase 4**. Ticket [X-001](https://github.com/Ditmar/leetcode-spa/issues/366) makes this official. If the teacher chooses another scope, change the priorities.

## 2. Where we are today

| Area | Status |
| --- | --- |
| API: auth | Works, but has security gaps (refresh tokens, config, no rate limit) |
| API: courses and company tests | Code exists; courses have no migration; tests have serious security and logic bugs |
| API: problems, code runner, submissions, profile, explore, contests | **Do not exist** |
| SPA: services (problems, submissions, contests, explore, user) | Exist and have unit tests, but call endpoints that do not exist |
| SPA: auth | Does not work with the real API |
| SPA: pages | Only the home page is real. The others are placeholders. |
| SPA: code editor | **Does not exist** |
| CD: ppd and prod deploy | Work, but rollback is wrong and there are no health checks |
| Tests | SPA: 318 unit tests pass. API: none. E2E: none. |

## 3. Phases

Effort is a rough guess in **person-days** (S = 0.5, M = 2, L = 4). Change it after the first sprint, when you know your real speed.

| Phase | Name | Tickets | Effort |
| --- | --- | --- | --- |
| 0 | Decisions and setup | 7 | 8 |
| 1 | Stabilize and secure | 43 | 77 |
| 2 | Connect SPA and API | 17 | 36.5 |
| 3 | Core product | 10 | 34 |
| 4 | More features | 16 | 50 |
| 5 | Quality and launch | 12 | 25 |
| | **Total** | **105** | **230.5** |

The **P0 + P1** tickets (the MVP and the safety work) are 62 tickets and about **135 person-days**. If 5 students can give about 2 to 3 days a week each (10 to 15 person-days per week), the MVP takes about **9 to 13 weeks**. Plan reviews every 2 weeks.

### Phase 0: Decisions and setup (week 1)

Goal: agree on what we build and how we work, before we write more code.

| Ticket | Title |
| --- | --- |
| [X-001](https://github.com/Ditmar/leetcode-spa/issues/366) | Decide the MVP scope |
| [X-002](https://github.com/Ditmar/leetcode-spa/issues/367) | Decide auth strategy (tokens and cookies) |
| [X-003](https://github.com/Ditmar/leetcode-spa/issues/368) | Define one API contract |
| [X-004](https://github.com/Ditmar/leetcode-spa/issues/369) | Choose the code execution engine |
| [X-005](https://github.com/Ditmar/leetcode-spa/issues/370) | One command to start everything locally |
| [X-006](https://github.com/Ditmar/leetcode-spa/issues/371) | Team workflow and Definition of Done |
| [X-008](https://github.com/Ditmar/leetcode-spa/issues/373) | Decide how content is created |

**Done when:** ADR-001 to ADR-005 are written and approved; branch protection is on; `docker compose up` starts the database, API and SPA.

### Phase 1: Stabilize and secure (weeks 1 to 4, in parallel with phase 2)

Goal: fix what is wrong. Do it in three steps.

**1A. Stop the risks (P0). Do these first, in the first 1 to 2 weeks.**

| Ticket | Title | Size |
| --- | --- | --- |
| [API-001](https://github.com/Ditmar/api-leetcode/issues/55) | Replace fake `x-user-id` auth with JWT | S |
| [API-002](https://github.com/Ditmar/api-leetcode/issues/56) | Remove default secrets, fail fast in production | S |
| [API-003](https://github.com/Ditmar/api-leetcode/issues/57) | Global error handler and async protection | M |
| [API-004](https://github.com/Ditmar/api-leetcode/issues/58) | Add the missing courses migration | S |
| [API-006](https://github.com/Ditmar/api-leetcode/issues/60) | Lock down `/api/user` routes | S |
| [CD-001](https://github.com/Ditmar/leetcode-cd/issues/22) | Fix rollback (it restores the same image) | M |
| [CD-002](https://github.com/Ditmar/leetcode-cd/issues/23) | Stop shell injection in workflows | M |

**1B. Make the foundations solid (P1).**

| Repo | Tickets |
| --- | --- |
| API security | [API-005](https://github.com/Ditmar/api-leetcode/issues/59) [API-007](https://github.com/Ditmar/api-leetcode/issues/61) [API-008](https://github.com/Ditmar/api-leetcode/issues/62) [API-009](https://github.com/Ditmar/api-leetcode/issues/63) [API-010](https://github.com/Ditmar/api-leetcode/issues/64) [API-011](https://github.com/Ditmar/api-leetcode/issues/65) [API-016](https://github.com/Ditmar/api-leetcode/issues/70) |
| API tests module | [API-014](https://github.com/Ditmar/api-leetcode/issues/68) [API-015](https://github.com/Ditmar/api-leetcode/issues/69) |
| API courses module | [API-013](https://github.com/Ditmar/api-leetcode/issues/67) |
| API quality | [API-020](https://github.com/Ditmar/api-leetcode/issues/74) [API-021](https://github.com/Ditmar/api-leetcode/issues/75) [API-022](https://github.com/Ditmar/api-leetcode/issues/76) |
| API deploy | [API-018](https://github.com/Ditmar/api-leetcode/issues/72) [API-019](https://github.com/Ditmar/api-leetcode/issues/73) |
| SPA | [SPA-006](https://github.com/Ditmar/leetcode-spa/issues/381) [SPA-008](https://github.com/Ditmar/leetcode-spa/issues/383) [SPA-009](https://github.com/Ditmar/leetcode-spa/issues/384) [SPA-021](https://github.com/Ditmar/leetcode-spa/issues/396) |
| CD | [CD-004](https://github.com/Ditmar/leetcode-cd/issues/25) [CD-005](https://github.com/Ditmar/leetcode-cd/issues/26) [CD-006](https://github.com/Ditmar/leetcode-cd/issues/27) [CD-007](https://github.com/Ditmar/leetcode-cd/issues/28) [CD-009](https://github.com/Ditmar/leetcode-cd/issues/30) [CD-012](https://github.com/Ditmar/leetcode-cd/issues/33) |

**1C. Clean up (P2).**

[API-012](https://github.com/Ditmar/api-leetcode/issues/66) [API-017](https://github.com/Ditmar/api-leetcode/issues/71) [API-025](https://github.com/Ditmar/api-leetcode/issues/79) [SPA-010](https://github.com/Ditmar/leetcode-spa/issues/385) [SPA-011](https://github.com/Ditmar/leetcode-spa/issues/386) [SPA-012](https://github.com/Ditmar/leetcode-spa/issues/387) [SPA-014](https://github.com/Ditmar/leetcode-spa/issues/389) [CD-003](https://github.com/Ditmar/leetcode-cd/issues/24) [CD-011](https://github.com/Ditmar/leetcode-cd/issues/32) [CD-013](https://github.com/Ditmar/leetcode-cd/issues/34) [CD-017](https://github.com/Ditmar/leetcode-cd/issues/38)

**Done when:** no P0 ticket is open; CI runs lint, typecheck and tests in API and SPA; `docker build` works for both apps; rollback was tested in ppd.

### Phase 2: Connect SPA and API (weeks 3 to 6)

Goal: a user can sign up, sign in and sign out in the browser, against a real API.

| Repo | Tickets |
| --- | --- |
| API | [API-026](https://github.com/Ditmar/api-leetcode/issues/80) roles, [API-027](https://github.com/Ditmar/api-leetcode/issues/81) seed, [API-028](https://github.com/Ditmar/api-leetcode/issues/82) auth contract, [API-039](https://github.com/Ditmar/api-leetcode/issues/93) OpenAPI and README, [API-040](https://github.com/Ditmar/api-leetcode/issues/94) health checks, [API-042](https://github.com/Ditmar/api-leetcode/issues/96) response format |
| SPA auth | [SPA-036](https://github.com/Ditmar/leetcode-spa/issues/411) Astro auth routes and API proxy (cookies), [SPA-001](https://github.com/Ditmar/leetcode-spa/issues/376) [SPA-002](https://github.com/Ditmar/leetcode-spa/issues/377) [SPA-003](https://github.com/Ditmar/leetcode-spa/issues/378) [SPA-004](https://github.com/Ditmar/leetcode-spa/issues/379) [SPA-005](https://github.com/Ditmar/leetcode-spa/issues/380) [SPA-007](https://github.com/Ditmar/leetcode-spa/issues/382) |
| SPA base | [SPA-013](https://github.com/Ditmar/leetcode-spa/issues/388) shared types and mock API, [SPA-015](https://github.com/Ditmar/leetcode-spa/issues/390) app shell, [SPA-016](https://github.com/Ditmar/leetcode-spa/issues/391) login and signup pages |
| CD | [CD-008](https://github.com/Ditmar/leetcode-cd/issues/29) automatic ppd update |

**Done when:** full login flow works on ppd; a protected page redirects to login; the SPA can run with the mock API; OpenAPI file exists.

### Phase 3: Core product (weeks 5 to 9)

Goal: the main loop works. Find a problem, write code, run it, submit it, see the result.

| Ticket | Title | Size |
| --- | --- | --- |
| [API-029](https://github.com/Ditmar/api-leetcode/issues/83) | Problems module | L |
| [API-030](https://github.com/Ditmar/api-leetcode/issues/84) | Code runner integration | L |
| [API-031](https://github.com/Ditmar/api-leetcode/issues/85) | Code submissions module | L |
| [SPA-017](https://github.com/Ditmar/leetcode-spa/issues/392) | Problems list page | L |
| [SPA-018](https://github.com/Ditmar/leetcode-spa/issues/393) | Problem detail page | L |
| [SPA-019](https://github.com/Ditmar/leetcode-spa/issues/394) | Code editor | L |
| [SPA-020](https://github.com/Ditmar/leetcode-spa/issues/395) | Run and submit UI | L |
| [SPA-029](https://github.com/Ditmar/leetcode-spa/issues/404) | Home page with real data | M |
| [SPA-030](https://github.com/Ditmar/leetcode-spa/issues/405) | Loading, empty and error components | M |
| [SPA-033](https://github.com/Ditmar/leetcode-spa/issues/408) | Sanitize content and security headers | M |

**Done when:** a new user can solve a seeded problem on ppd. Abuse tests on the code runner (infinite loop, huge output, network access) are done and written down.

### Phase 4: More features (weeks 9 to 14)

Goal: add the features that make the product richer. Order depends on [X-001](https://github.com/Ditmar/leetcode-spa/issues/366).

| Group | Tickets |
| --- | --- |
| Profile and history | [API-032](https://github.com/Ditmar/api-leetcode/issues/86) [SPA-022](https://github.com/Ditmar/leetcode-spa/issues/397) [SPA-023](https://github.com/Ditmar/leetcode-spa/issues/398) |
| Courses and tests | [API-033](https://github.com/Ditmar/api-leetcode/issues/87) [API-036](https://github.com/Ditmar/api-leetcode/issues/90) [SPA-025](https://github.com/Ditmar/leetcode-spa/issues/400) [SPA-026](https://github.com/Ditmar/leetcode-spa/issues/401) |
| Explore | [API-035](https://github.com/Ditmar/api-leetcode/issues/89) [SPA-024](https://github.com/Ditmar/leetcode-spa/issues/399) |
| Admin | [API-034](https://github.com/Ditmar/api-leetcode/issues/88) |
| Community | [API-037](https://github.com/Ditmar/api-leetcode/issues/91) [API-038](https://github.com/Ditmar/api-leetcode/issues/92) [SPA-027](https://github.com/Ditmar/leetcode-spa/issues/402) [SPA-028](https://github.com/Ditmar/leetcode-spa/issues/403) |
| Polish | [SPA-034](https://github.com/Ditmar/leetcode-spa/issues/409) [CD-016](https://github.com/Ditmar/leetcode-cd/issues/37) |

### Phase 5: Quality and launch (weeks 12 to 16)

| Group | Tickets |
| --- | --- |
| Tests | [API-023](https://github.com/Ditmar/api-leetcode/issues/77) [API-024](https://github.com/Ditmar/api-leetcode/issues/78) [SPA-032](https://github.com/Ditmar/leetcode-spa/issues/407) |
| Quality | [SPA-031](https://github.com/Ditmar/leetcode-spa/issues/406) [SPA-035](https://github.com/Ditmar/leetcode-spa/issues/410) [API-041](https://github.com/Ditmar/api-leetcode/issues/95) |
| Operations | [CD-010](https://github.com/Ditmar/leetcode-cd/issues/31) [CD-014](https://github.com/Ditmar/leetcode-cd/issues/35) [CD-015](https://github.com/Ditmar/leetcode-cd/issues/36) |
| Launch | [X-007](https://github.com/Ditmar/leetcode-spa/issues/372) [X-009](https://github.com/Ditmar/leetcode-spa/issues/374) [X-010](https://github.com/Ditmar/leetcode-spa/issues/375) |

**Done when:** the release checklist in [X-010](https://github.com/Ditmar/leetcode-spa/issues/375) is complete and `v1.0.0` is tagged.

## 4. Order of work (critical path)

These chains decide how fast we finish. Start them early.

```
Decisions                 API                         SPA
---------                 ---                         ---
X-001 ─► X-003 ─────────► API-039 OpenAPI ──────────► SPA-013 types + mock API
X-002 ─► ───────────────► API-028 auth contract ────► SPA-001, 002, 003 ─► SPA-004, 007 ─► SPA-015, 016
X-004 ─► ───────────────► API-030 code runner ─┐
X-008 ─► API-027 seed ──► API-029 problems ────┼────► API-031 submissions ─► SPA-020 run/submit
                                               │
                          SPA-013 ─► SPA-017 list ─► SPA-018 detail ─► SPA-019 editor ─┘
```

Two rules:

1. **Do not start a ticket before the tickets in "Depends on" are done** (or agree on a fake/mock).
2. **Contract first.** Agree on the API shape ([X-003](https://github.com/Ditmar/leetcode-spa/issues/368), [API-039](https://github.com/Ditmar/api-leetcode/issues/93)), then the API team and the SPA team can work at the same time. The SPA uses the mock API ([SPA-013](https://github.com/Ditmar/leetcode-spa/issues/388)) until the real endpoint exists.

## 5. Team tracks (suggestion for 5 or 6 students)

| Track | Focus | First tickets |
| --- | --- | --- |
| **A. API security and stability** | Fix the risks in the API | [API-001](https://github.com/Ditmar/api-leetcode/issues/55) [API-002](https://github.com/Ditmar/api-leetcode/issues/56) [API-003](https://github.com/Ditmar/api-leetcode/issues/57) [API-004](https://github.com/Ditmar/api-leetcode/issues/58) [API-006](https://github.com/Ditmar/api-leetcode/issues/60) then [API-007](https://github.com/Ditmar/api-leetcode/issues/61) [API-008](https://github.com/Ditmar/api-leetcode/issues/62) [API-009](https://github.com/Ditmar/api-leetcode/issues/63) [API-010](https://github.com/Ditmar/api-leetcode/issues/64) |
| **B. API product** | New modules | [X-004](https://github.com/Ditmar/leetcode-spa/issues/369) (proof of concept) then [API-026](https://github.com/Ditmar/api-leetcode/issues/80) [API-027](https://github.com/Ditmar/api-leetcode/issues/81) [API-029](https://github.com/Ditmar/api-leetcode/issues/83) [API-030](https://github.com/Ditmar/api-leetcode/issues/84) [API-031](https://github.com/Ditmar/api-leetcode/issues/85) |
| **C. SPA auth and shell** | Make login work | [SPA-006](https://github.com/Ditmar/leetcode-spa/issues/381) [SPA-008](https://github.com/Ditmar/leetcode-spa/issues/383) then [SPA-036](https://github.com/Ditmar/leetcode-spa/issues/411) [SPA-001](https://github.com/Ditmar/leetcode-spa/issues/376) [SPA-002](https://github.com/Ditmar/leetcode-spa/issues/377) [SPA-003](https://github.com/Ditmar/leetcode-spa/issues/378) [SPA-004](https://github.com/Ditmar/leetcode-spa/issues/379) [SPA-007](https://github.com/Ditmar/leetcode-spa/issues/382) [SPA-015](https://github.com/Ditmar/leetcode-spa/issues/390) [SPA-016](https://github.com/Ditmar/leetcode-spa/issues/391) |
| **D. SPA product pages** | Problems and editor | [SPA-013](https://github.com/Ditmar/leetcode-spa/issues/388) [SPA-021](https://github.com/Ditmar/leetcode-spa/issues/396) then [SPA-017](https://github.com/Ditmar/leetcode-spa/issues/392) [SPA-018](https://github.com/Ditmar/leetcode-spa/issues/393) [SPA-019](https://github.com/Ditmar/leetcode-spa/issues/394) [SPA-020](https://github.com/Ditmar/leetcode-spa/issues/395) |
| **E. DevOps and quality** | CI, Docker, CD, local setup | [CD-001](https://github.com/Ditmar/leetcode-cd/issues/22) [CD-002](https://github.com/Ditmar/leetcode-cd/issues/23) [X-005](https://github.com/Ditmar/leetcode-spa/issues/370) [X-006](https://github.com/Ditmar/leetcode-spa/issues/371) [API-018](https://github.com/Ditmar/api-leetcode/issues/72) [API-019](https://github.com/Ditmar/api-leetcode/issues/73) [API-022](https://github.com/Ditmar/api-leetcode/issues/76) [SPA-009](https://github.com/Ditmar/leetcode-spa/issues/384) [SPA-010](https://github.com/Ditmar/leetcode-spa/issues/385) [CD-004](https://github.com/Ditmar/leetcode-cd/issues/25) [CD-005](https://github.com/Ditmar/leetcode-cd/issues/26) |

Tips for the team:

- Do the decision tickets **together** in one meeting. They are short and unblock everyone.
- Use pair programming for [X-002](https://github.com/Ditmar/leetcode-spa/issues/367) (auth), because it touches both repos.
- Rotate people between tracks every phase, so more than one person knows each part.
- Review each other's PRs. Do not wait for the teacher.

### Good first tickets (small and clear)

[API-001](https://github.com/Ditmar/api-leetcode/issues/55) [API-002](https://github.com/Ditmar/api-leetcode/issues/56) [API-004](https://github.com/Ditmar/api-leetcode/issues/58) [API-006](https://github.com/Ditmar/api-leetcode/issues/60) [API-012](https://github.com/Ditmar/api-leetcode/issues/66) [API-040](https://github.com/Ditmar/api-leetcode/issues/94) [SPA-011](https://github.com/Ditmar/leetcode-spa/issues/386) [SPA-012](https://github.com/Ditmar/leetcode-spa/issues/387) [CD-003](https://github.com/Ditmar/leetcode-cd/issues/24) [CD-005](https://github.com/Ditmar/leetcode-cd/issues/26) [CD-015](https://github.com/Ditmar/leetcode-cd/issues/36) [X-006](https://github.com/Ditmar/leetcode-spa/issues/371)

## 6. Risks

| Risk | What can happen | What we do |
| --- | --- | --- |
| **Code runner is hard or costly** | The main feature is late or insecure | Do the proof of concept in [X-004](https://github.com/Ditmar/leetcode-spa/issues/369) in week 1. Never run code inside the API. Have a fallback (hosted service). |
| **Scope grows** | Contests, discuss, explore delay the MVP | Freeze scope with [X-001](https://github.com/Ditmar/leetcode-spa/issues/366). New ideas become tickets in phase 4. |
| **Teams wait for each other** | Lost time | Contract first ([X-003](https://github.com/Ditmar/leetcode-spa/issues/368), [API-039](https://github.com/Ditmar/api-leetcode/issues/93)), mock API ([SPA-013](https://github.com/Ditmar/leetcode-spa/issues/388)). |
| **Auth redesign breaks both repos** | Login unstable for weeks | Decide in [X-002](https://github.com/Ditmar/leetcode-spa/issues/367). One pair does the change in both repos, in one sprint. |
| **Data loss from migrations** | Production data deleted | [API-005](https://github.com/Ditmar/api-leetcode/issues/59), [CD-012](https://github.com/Ditmar/leetcode-cd/issues/33). Back up before each prod deploy. Test on ppd first. |
| **Hosting limits** | The chosen code runner cannot run on Railway | Check in [X-004](https://github.com/Ditmar/leetcode-spa/issues/369) before building. |
| **Secrets in git history** | Old placeholder or real secrets can be read | [API-002](https://github.com/Ditmar/api-leetcode/issues/56), [X-009](https://github.com/Ditmar/leetcode-spa/issues/374). Rotate real secrets. |
| **Knowledge in one head** | A student leaves and nobody knows the part | Pair programming, rotation, docs ([X-007](https://github.com/Ditmar/leetcode-spa/issues/372), [CD-015](https://github.com/Ditmar/leetcode-cd/issues/36)). |

## 7. Not in the plan (ideas for later)

- Forgot password and email verification (needs an email service).
- Login with GitHub or Google.
- Premium plans, payments.
- Live contests with real-time scoreboard (WebSockets).
- Mobile app.
- More programming languages.

## 8. How to keep the plan alive

- Every 2 weeks, check the phase goals. Move tickets if the scope changes.
- Write down real speed (tickets done per week) and update the estimates.
- Every new problem becomes a ticket. Every ticket has acceptance criteria.
- Rebuild the index after any change: `node tools/build-index.mjs .`
