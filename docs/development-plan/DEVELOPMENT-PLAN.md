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

Everything else (courses, company tests, explore, contests, discuss, dark mode) is **phase 4**. Ticket [X-001](tickets/cross/X-001-define-mvp-scope.md) makes this official. If the teacher chooses another scope, change the priorities.

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
| [X-001](tickets/cross/X-001-define-mvp-scope.md) | Decide the MVP scope |
| [X-002](tickets/cross/X-002-decide-auth-strategy.md) | Decide auth strategy (tokens and cookies) |
| [X-003](tickets/cross/X-003-define-api-contract.md) | Define one API contract |
| [X-004](tickets/cross/X-004-choose-code-execution-engine.md) | Choose the code execution engine |
| [X-005](tickets/cross/X-005-local-dev-environment.md) | One command to start everything locally |
| [X-006](tickets/cross/X-006-team-workflow-and-definition-of-done.md) | Team workflow and Definition of Done |
| [X-008](tickets/cross/X-008-decide-how-content-is-created.md) | Decide how content is created |

**Done when:** ADR-001 to ADR-005 are written and approved; branch protection is on; `docker compose up` starts the database, API and SPA.

### Phase 1: Stabilize and secure (weeks 1 to 4, in parallel with phase 2)

Goal: fix what is wrong. Do it in three steps.

**1A. Stop the risks (P0). Do these first, in the first 1 to 2 weeks.**

| Ticket | Title | Size |
| --- | --- | --- |
| [API-001](tickets/api/API-001-replace-fake-auth-on-test-routes.md) | Replace fake `x-user-id` auth with JWT | S |
| [API-002](tickets/api/API-002-remove-default-secrets.md) | Remove default secrets, fail fast in production | S |
| [API-003](tickets/api/API-003-global-error-handler.md) | Global error handler and async protection | M |
| [API-004](tickets/api/API-004-add-missing-course-migration.md) | Add the missing courses migration | S |
| [API-006](tickets/api/API-006-lock-down-user-routes.md) | Lock down `/api/user` routes | S |
| [CD-001](tickets/cd/CD-001-rollback-picks-the-same-image.md) | Fix rollback (it restores the same image) | M |
| [CD-002](tickets/cd/CD-002-script-injection-in-workflows.md) | Stop shell injection in workflows | M |

**1B. Make the foundations solid (P1).**

| Repo | Tickets |
| --- | --- |
| API security | [API-005](tickets/api/API-005-make-migration-history-safe.md) [API-007](tickets/api/API-007-domain-errors-to-http-status.md) [API-008](tickets/api/API-008-request-validation-with-zod.md) [API-009](tickets/api/API-009-refresh-token-hardening.md) [API-010](tickets/api/API-010-security-middleware.md) [API-011](tickets/api/API-011-config-cleanup.md) [API-016](tickets/api/API-016-hide-solutions-from-clients.md) |
| API tests module | [API-014](tickets/api/API-014-fix-test-submit-flow.md) [API-015](tickets/api/API-015-fix-multiple-choice-grading.md) |
| API courses module | [API-013](tickets/api/API-013-course-enroll-and-list-fixes.md) |
| API quality | [API-020](tickets/api/API-020-remove-duplicates-and-dead-code.md) [API-021](tickets/api/API-021-single-composition-root.md) [API-022](tickets/api/API-022-test-setup-and-auth-tests.md) |
| API deploy | [API-018](tickets/api/API-018-fix-dockerfile.md) [API-019](tickets/api/API-019-fix-ci-pipeline.md) |
| SPA | [SPA-006](tickets/spa/SPA-006-apiclient-fixes.md) [SPA-008](tickets/spa/SPA-008-fix-typescript-errors.md) [SPA-009](tickets/spa/SPA-009-dockerfile-and-runtime-config.md) [SPA-021](tickets/spa/SPA-021-fix-submissions-service-errors.md) |
| CD | [CD-004](tickets/cd/CD-004-wait-for-deployment-and-check-health.md) [CD-005](tickets/cd/CD-005-image-validation-passes-by-mistake.md) [CD-006](tickets/cd/CD-006-update-readme-and-slides.md) [CD-007](tickets/cd/CD-007-fix-environment-variable-templates.md) [CD-009](tickets/cd/CD-009-pr-validation-workflow.md) [CD-012](tickets/cd/CD-012-database-migration-strategy.md) |

**1C. Clean up (P2).**

[API-012](tickets/api/API-012-logger-fixes.md) [API-017](tickets/api/API-017-tests-list-and-detail-inconsistencies.md) [API-025](tickets/api/API-025-signup-and-password-hardening.md) [SPA-010](tickets/spa/SPA-010-ci-improvements.md) [SPA-011](tickets/spa/SPA-011-readme-and-docs.md) [SPA-012](tickets/spa/SPA-012-dependencies-hygiene.md) [SPA-014](tickets/spa/SPA-014-remove-unused-code-and-fix-pages-folder.md) [CD-003](tickets/cd/CD-003-latest-tag-guard-can-be-bypassed.md) [CD-011](tickets/cd/CD-011-rollback-and-metadata-git-writes.md) [CD-013](tickets/cd/CD-013-fix-metadata-and-version-alignment.md) [CD-017](tickets/cd/CD-017-fix-change-detection-in-deploy-workflow.md)

**Done when:** no P0 ticket is open; CI runs lint, typecheck and tests in API and SPA; `docker build` works for both apps; rollback was tested in ppd.

### Phase 2: Connect SPA and API (weeks 3 to 6)

Goal: a user can sign up, sign in and sign out in the browser, against a real API.

| Repo | Tickets |
| --- | --- |
| API | [API-026](tickets/api/API-026-add-user-roles.md) roles, [API-027](tickets/api/API-027-seed-data.md) seed, [API-028](tickets/api/API-028-auth-contract-for-spa.md) auth contract, [API-039](tickets/api/API-039-openapi-and-readme.md) OpenAPI and README, [API-040](tickets/api/API-040-health-checks-and-graceful-shutdown.md) health checks, [API-042](tickets/api/API-042-response-envelope-and-pagination.md) response format |
| SPA auth | [SPA-036](tickets/spa/SPA-036-astro-auth-routes-and-api-proxy.md) Astro auth routes and API proxy (cookies), [SPA-001](tickets/spa/SPA-001-auth-service-calls-wrong-urls.md) [SPA-002](tickets/spa/SPA-002-auth-payload-and-session-mismatch.md) [SPA-003](tickets/spa/SPA-003-single-token-store-and-refresh.md) [SPA-004](tickets/spa/SPA-004-share-auth-state-between-islands.md) [SPA-005](tickets/spa/SPA-005-authmodal-errors-and-accessibility.md) [SPA-007](tickets/spa/SPA-007-astro-middleware-and-route-guards.md) |
| SPA base | [SPA-013](tickets/spa/SPA-013-shared-types-and-mock-api.md) shared types and mock API, [SPA-015](tickets/spa/SPA-015-app-shell-navigation-and-error-pages.md) app shell, [SPA-016](tickets/spa/SPA-016-login-and-signup-pages.md) login and signup pages |
| CD | [CD-008](tickets/cd/CD-008-auto-update-ppd-from-app-repos.md) automatic ppd update |

**Done when:** full login flow works on ppd; a protected page redirects to login; the SPA can run with the mock API; OpenAPI file exists.

### Phase 3: Core product (weeks 5 to 9)

Goal: the main loop works. Find a problem, write code, run it, submit it, see the result.

| Ticket | Title | Size |
| --- | --- | --- |
| [API-029](tickets/api/API-029-problems-module.md) | Problems module | L |
| [API-030](tickets/api/API-030-code-runner-integration.md) | Code runner integration | L |
| [API-031](tickets/api/API-031-submissions-module.md) | Code submissions module | L |
| [SPA-017](tickets/spa/SPA-017-problems-list-page.md) | Problems list page | L |
| [SPA-018](tickets/spa/SPA-018-problem-detail-page.md) | Problem detail page | L |
| [SPA-019](tickets/spa/SPA-019-code-editor.md) | Code editor | L |
| [SPA-020](tickets/spa/SPA-020-run-and-submit-ui.md) | Run and submit UI | L |
| [SPA-029](tickets/spa/SPA-029-home-page-real-data.md) | Home page with real data | M |
| [SPA-030](tickets/spa/SPA-030-loading-empty-error-states.md) | Loading, empty and error components | M |
| [SPA-033](tickets/spa/SPA-033-security-sanitize-csp-cookies.md) | Sanitize content and security headers | M |

**Done when:** a new user can solve a seeded problem on ppd. Abuse tests on the code runner (infinite loop, huge output, network access) are done and written down.

### Phase 4: More features (weeks 9 to 14)

Goal: add the features that make the product richer. Order depends on [X-001](tickets/cross/X-001-define-mvp-scope.md).

| Group | Tickets |
| --- | --- |
| Profile and history | [API-032](tickets/api/API-032-user-profile-and-stats.md) [SPA-022](tickets/spa/SPA-022-submissions-history-page.md) [SPA-023](tickets/spa/SPA-023-profile-and-settings.md) |
| Courses and tests | [API-033](tickets/api/API-033-tests-module-extra-endpoints.md) [API-036](tickets/api/API-036-course-lessons-and-progress.md) [SPA-025](tickets/spa/SPA-025-courses-pages.md) [SPA-026](tickets/spa/SPA-026-company-tests-pages.md) |
| Explore | [API-035](tickets/api/API-035-explore-topics-module.md) [SPA-024](tickets/spa/SPA-024-explore-page.md) |
| Admin | [API-034](tickets/api/API-034-admin-crud.md) |
| Community | [API-037](tickets/api/API-037-contests-module.md) [API-038](tickets/api/API-038-discuss-module.md) [SPA-027](tickets/spa/SPA-027-contest-page.md) [SPA-028](tickets/spa/SPA-028-discuss-page.md) |
| Polish | [SPA-034](tickets/spa/SPA-034-theme-and-i18n.md) [CD-016](tickets/cd/CD-016-add-dev-environment.md) |

### Phase 5: Quality and launch (weeks 12 to 16)

| Group | Tickets |
| --- | --- |
| Tests | [API-023](tickets/api/API-023-unit-tests-for-use-cases.md) [API-024](tickets/api/API-024-integration-tests-for-routes.md) [SPA-032](tickets/spa/SPA-032-end-to-end-tests.md) |
| Quality | [SPA-031](tickets/spa/SPA-031-accessibility-audit.md) [SPA-035](tickets/spa/SPA-035-performance-review.md) [API-041](tickets/api/API-041-observability.md) |
| Operations | [CD-010](tickets/cd/CD-010-deployment-notifications.md) [CD-014](tickets/cd/CD-014-post-deploy-smoke-tests.md) [CD-015](tickets/cd/CD-015-runbook.md) |
| Launch | [X-007](tickets/cross/X-007-architecture-documentation.md) [X-009](tickets/cross/X-009-pre-launch-security-review.md) [X-010](tickets/cross/X-010-release-plan-v1.md) |

**Done when:** the release checklist in [X-010](tickets/cross/X-010-release-plan-v1.md) is complete and `v1.0.0` is tagged.

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
2. **Contract first.** Agree on the API shape ([X-003](tickets/cross/X-003-define-api-contract.md), [API-039](tickets/api/API-039-openapi-and-readme.md)), then the API team and the SPA team can work at the same time. The SPA uses the mock API ([SPA-013](tickets/spa/SPA-013-shared-types-and-mock-api.md)) until the real endpoint exists.

## 5. Team tracks (suggestion for 5 or 6 students)

| Track | Focus | First tickets |
| --- | --- | --- |
| **A. API security and stability** | Fix the risks in the API | [API-001](tickets/api/API-001-replace-fake-auth-on-test-routes.md) [API-002](tickets/api/API-002-remove-default-secrets.md) [API-003](tickets/api/API-003-global-error-handler.md) [API-004](tickets/api/API-004-add-missing-course-migration.md) [API-006](tickets/api/API-006-lock-down-user-routes.md) then [API-007](tickets/api/API-007-domain-errors-to-http-status.md) [API-008](tickets/api/API-008-request-validation-with-zod.md) [API-009](tickets/api/API-009-refresh-token-hardening.md) [API-010](tickets/api/API-010-security-middleware.md) |
| **B. API product** | New modules | [X-004](tickets/cross/X-004-choose-code-execution-engine.md) (proof of concept) then [API-026](tickets/api/API-026-add-user-roles.md) [API-027](tickets/api/API-027-seed-data.md) [API-029](tickets/api/API-029-problems-module.md) [API-030](tickets/api/API-030-code-runner-integration.md) [API-031](tickets/api/API-031-submissions-module.md) |
| **C. SPA auth and shell** | Make login work | [SPA-006](tickets/spa/SPA-006-apiclient-fixes.md) [SPA-008](tickets/spa/SPA-008-fix-typescript-errors.md) then [SPA-036](tickets/spa/SPA-036-astro-auth-routes-and-api-proxy.md) [SPA-001](tickets/spa/SPA-001-auth-service-calls-wrong-urls.md) [SPA-002](tickets/spa/SPA-002-auth-payload-and-session-mismatch.md) [SPA-003](tickets/spa/SPA-003-single-token-store-and-refresh.md) [SPA-004](tickets/spa/SPA-004-share-auth-state-between-islands.md) [SPA-007](tickets/spa/SPA-007-astro-middleware-and-route-guards.md) [SPA-015](tickets/spa/SPA-015-app-shell-navigation-and-error-pages.md) [SPA-016](tickets/spa/SPA-016-login-and-signup-pages.md) |
| **D. SPA product pages** | Problems and editor | [SPA-013](tickets/spa/SPA-013-shared-types-and-mock-api.md) [SPA-021](tickets/spa/SPA-021-fix-submissions-service-errors.md) then [SPA-017](tickets/spa/SPA-017-problems-list-page.md) [SPA-018](tickets/spa/SPA-018-problem-detail-page.md) [SPA-019](tickets/spa/SPA-019-code-editor.md) [SPA-020](tickets/spa/SPA-020-run-and-submit-ui.md) |
| **E. DevOps and quality** | CI, Docker, CD, local setup | [CD-001](tickets/cd/CD-001-rollback-picks-the-same-image.md) [CD-002](tickets/cd/CD-002-script-injection-in-workflows.md) [X-005](tickets/cross/X-005-local-dev-environment.md) [X-006](tickets/cross/X-006-team-workflow-and-definition-of-done.md) [API-018](tickets/api/API-018-fix-dockerfile.md) [API-019](tickets/api/API-019-fix-ci-pipeline.md) [API-022](tickets/api/API-022-test-setup-and-auth-tests.md) [SPA-009](tickets/spa/SPA-009-dockerfile-and-runtime-config.md) [SPA-010](tickets/spa/SPA-010-ci-improvements.md) [CD-004](tickets/cd/CD-004-wait-for-deployment-and-check-health.md) [CD-005](tickets/cd/CD-005-image-validation-passes-by-mistake.md) |

Tips for the team:

- Do the decision tickets **together** in one meeting. They are short and unblock everyone.
- Use pair programming for [X-002](tickets/cross/X-002-decide-auth-strategy.md) (auth), because it touches both repos.
- Rotate people between tracks every phase, so more than one person knows each part.
- Review each other's PRs. Do not wait for the teacher.

### Good first tickets (small and clear)

[API-001](tickets/api/API-001-replace-fake-auth-on-test-routes.md) [API-002](tickets/api/API-002-remove-default-secrets.md) [API-004](tickets/api/API-004-add-missing-course-migration.md) [API-006](tickets/api/API-006-lock-down-user-routes.md) [API-012](tickets/api/API-012-logger-fixes.md) [API-040](tickets/api/API-040-health-checks-and-graceful-shutdown.md) [SPA-011](tickets/spa/SPA-011-readme-and-docs.md) [SPA-012](tickets/spa/SPA-012-dependencies-hygiene.md) [CD-003](tickets/cd/CD-003-latest-tag-guard-can-be-bypassed.md) [CD-005](tickets/cd/CD-005-image-validation-passes-by-mistake.md) [CD-015](tickets/cd/CD-015-runbook.md) [X-006](tickets/cross/X-006-team-workflow-and-definition-of-done.md)

## 6. Risks

| Risk | What can happen | What we do |
| --- | --- | --- |
| **Code runner is hard or costly** | The main feature is late or insecure | Do the proof of concept in [X-004](tickets/cross/X-004-choose-code-execution-engine.md) in week 1. Never run code inside the API. Have a fallback (hosted service). |
| **Scope grows** | Contests, discuss, explore delay the MVP | Freeze scope with [X-001](tickets/cross/X-001-define-mvp-scope.md). New ideas become tickets in phase 4. |
| **Teams wait for each other** | Lost time | Contract first ([X-003](tickets/cross/X-003-define-api-contract.md), [API-039](tickets/api/API-039-openapi-and-readme.md)), mock API ([SPA-013](tickets/spa/SPA-013-shared-types-and-mock-api.md)). |
| **Auth redesign breaks both repos** | Login unstable for weeks | Decide in [X-002](tickets/cross/X-002-decide-auth-strategy.md). One pair does the change in both repos, in one sprint. |
| **Data loss from migrations** | Production data deleted | [API-005](tickets/api/API-005-make-migration-history-safe.md), [CD-012](tickets/cd/CD-012-database-migration-strategy.md). Back up before each prod deploy. Test on ppd first. |
| **Hosting limits** | The chosen code runner cannot run on Railway | Check in [X-004](tickets/cross/X-004-choose-code-execution-engine.md) before building. |
| **Secrets in git history** | Old placeholder or real secrets can be read | [API-002](tickets/api/API-002-remove-default-secrets.md), [X-009](tickets/cross/X-009-pre-launch-security-review.md). Rotate real secrets. |
| **Knowledge in one head** | A student leaves and nobody knows the part | Pair programming, rotation, docs ([X-007](tickets/cross/X-007-architecture-documentation.md), [CD-015](tickets/cd/CD-015-runbook.md)). |

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
