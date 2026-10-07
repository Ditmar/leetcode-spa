# Tickets index

Total tickets: **105**

| Repo | P0 | P1 | P2 | P3 | Total |
| --- | --- | --- | --- | --- | --- |
| cross-repo (X) | 3 | 5 | 2 | 0 | 10 |
| api-leetcode (API) | 6 | 20 | 12 | 4 | 42 |
| leetcode-spa (SPA) | 4 | 15 | 13 | 4 | 36 |
| leetcode-cd (CD) | 2 | 7 | 6 | 2 | 17 |
| **All** | 15 | 47 | 33 | 10 | 105 |

Priority: **P0** = fix now (security, crash, blocker). **P1** = needed for the MVP. **P2** = should do. **P3** = nice to have.  
Size: **S** = under 1 day. **M** = 1 to 3 days. **L** = 3 to 5 days. (For one student.)

## Phase 0 - Decisions and setup

| ID | Title | Type | Priority | Size | Depends on |
| --- | --- | --- | --- | --- | --- |
| [X-001](tickets/cross/X-001-define-mvp-scope.md) | Decide the MVP scope | Decision | P0 | S | None |
| [X-002](tickets/cross/X-002-decide-auth-strategy.md) | Decide how login and tokens work between SPA and API | Decision | P0 | S | None |
| [X-003](tickets/cross/X-003-define-api-contract.md) | Define one API contract (paths, response format, pagination) | Decision | P0 | M | X-001 |
| [X-004](tickets/cross/X-004-choose-code-execution-engine.md) | Choose how to run user code safely | Decision | P1 | M | X-001 |
| [X-005](tickets/cross/X-005-local-dev-environment.md) | Make one command start the whole system locally | Chore | P1 | M | None |
| [X-006](tickets/cross/X-006-team-workflow-and-definition-of-done.md) | Agree on the team workflow (branches, PRs, Definition of Done) | Process | P1 | S | None |
| [X-008](tickets/cross/X-008-decide-how-content-is-created.md) | Decide how courses, tests and problems are created | Decision | P1 | S | X-001 |

## Phase 1 - Stabilize and secure

| ID | Title | Type | Priority | Size | Depends on |
| --- | --- | --- | --- | --- | --- |
| [API-001](tickets/api/API-001-replace-fake-auth-on-test-routes.md) | Replace the fake `x-user-id` login on test routes with JWT | Security | P0 | S | None |
| [API-002](tickets/api/API-002-remove-default-secrets.md) | Remove default secrets from the config files | Security | P0 | S | None |
| [API-003](tickets/api/API-003-global-error-handler.md) | Add a global error handler and protect async routes | Bug | P0 | M | None |
| [API-004](tickets/api/API-004-add-missing-course-migration.md) | Add the missing migration for courses and enrollments | Bug | P0 | S | None |
| [API-006](tickets/api/API-006-lock-down-user-routes.md) | Lock down the `/api/user` routes | Security | P0 | S | None |
| [CD-001](tickets/cd/CD-001-rollback-picks-the-same-image.md) | Fix the rollback: it restores the same image | Bug | P0 | M | None |
| [CD-002](tickets/cd/CD-002-script-injection-in-workflows.md) | Stop shell injection in the workflows | Security | P0 | M | None |
| [API-005](tickets/api/API-005-make-migration-history-safe.md) | Make the migration history safe | Risk | P1 | M | API-004 |
| [API-007](tickets/api/API-007-domain-errors-to-http-status.md) | Use error classes instead of text matching for HTTP status codes | Refactor | P1 | M | API-003 |
| [API-008](tickets/api/API-008-request-validation-with-zod.md) | Validate all requests with one shared Zod middleware | Feature | P1 | M | API-007 |
| [API-009](tickets/api/API-009-refresh-token-hardening.md) | Make refresh tokens safer | Security | P1 | L | X-002 |
| [API-010](tickets/api/API-010-security-middleware.md) | Add helmet, CORS, rate limit and request limits | Security | P1 | M | X-002 |
| [API-011](tickets/api/API-011-config-cleanup.md) | Fix the configuration and `.env.example` | Bug | P1 | M | API-002 |
| [API-013](tickets/api/API-013-course-enroll-and-list-fixes.md) | Fix course enrollment and course list bugs | Bug | P1 | M | API-004, API-008 |
| [API-014](tickets/api/API-014-fix-test-submit-flow.md) | Fix the "submit test" flow (transaction, session, duplicates) | Bug | P1 | L | API-001, API-007 |
| [API-015](tickets/api/API-015-fix-multiple-choice-grading.md) | Fix grading of multiple-choice questions | Bug | P1 | M | API-014 |
| [API-016](tickets/api/API-016-hide-solutions-from-clients.md) | Do not send expected outputs and hidden test cases to the client | Security | P1 | M | None |
| [API-018](tickets/api/API-018-fix-dockerfile.md) | Fix the API Dockerfile | Chore | P1 | M | None |
| [API-019](tickets/api/API-019-fix-ci-pipeline.md) | Fix the CI pipeline | Chore | P1 | M | API-022 |
| [API-020](tickets/api/API-020-remove-duplicates-and-dead-code.md) | Remove duplicate and dead code | Refactor | P1 | M | API-001, API-006 |
| [API-021](tickets/api/API-021-single-composition-root.md) | Create one place where all dependencies are connected | Refactor | P1 | M | API-020 |
| [API-022](tickets/api/API-022-test-setup-and-auth-tests.md) | Set up automated tests and write the first auth tests | Test | P1 | M | API-021 |
| [CD-004](tickets/cd/CD-004-wait-for-deployment-and-check-health.md) | Wait for the Railway deployment and check that the app is healthy | Feature | P1 | L | None |
| [CD-005](tickets/cd/CD-005-image-validation-passes-by-mistake.md) | Make the image validation fail when it cannot be sure | Bug | P1 | S | None |
| [CD-006](tickets/cd/CD-006-update-readme-and-slides.md) | Make README and slides match the real system | Docs | P1 | M | None |
| [CD-007](tickets/cd/CD-007-fix-environment-variable-templates.md) | Make the environment variable templates match the apps | Bug | P1 | M | API-011, SPA-009 |
| [CD-009](tickets/cd/CD-009-pr-validation-workflow.md) | Add automatic checks for pull requests | Chore | P1 | M | None |
| [CD-012](tickets/cd/CD-012-database-migration-strategy.md) | Define how database migrations are deployed | Process | P1 | M | API-018 |
| [SPA-006](tickets/spa/SPA-006-apiclient-fixes.md) | Fix problems in `apiClient` | Bug | P1 | M | X-003 |
| [SPA-008](tickets/spa/SPA-008-fix-typescript-errors.md) | Fix the TypeScript errors and add a typecheck to CI | Chore | P1 | M | None |
| [SPA-009](tickets/spa/SPA-009-dockerfile-and-runtime-config.md) | Run the SPA in production the right way and fix runtime config | Chore | P1 | M | None |
| [SPA-021](tickets/spa/SPA-021-fix-submissions-service-errors.md) | Fix error handling and polling in `submissionsService` | Bug | P1 | M | SPA-006 |
| [API-012](tickets/api/API-012-logger-fixes.md) | Fix wrong logging calls and add request logs | Bug | P2 | S | API-011 |
| [API-017](tickets/api/API-017-tests-list-and-detail-inconsistencies.md) | Fix inconsistent data in the tests list and detail | Bug | P2 | M | API-008 |
| [API-025](tickets/api/API-025-signup-and-password-hardening.md) | Improve signup, password rules and email handling | Security | P2 | M | API-007 |
| [CD-003](tickets/cd/CD-003-latest-tag-guard-can-be-bypassed.md) | Make the "no latest in prod" rule strong | Bug | P2 | S | None |
| [CD-011](tickets/cd/CD-011-rollback-and-metadata-git-writes.md) | Make git writes safe (rollback, metadata, concurrency) | Risk | P2 | M | None |
| [CD-013](tickets/cd/CD-013-fix-metadata-and-version-alignment.md) | Fix the deploy metadata and the version numbers | Bug | P2 | M | CD-005 |
| [CD-017](tickets/cd/CD-017-fix-change-detection-in-deploy-workflow.md) | Fix how `deploy.yml` finds changed files | Bug | P2 | S | CD-002 |
| [SPA-010](tickets/spa/SPA-010-ci-improvements.md) | Improve the CI workflow | Chore | P2 | M | SPA-008 |
| [SPA-011](tickets/spa/SPA-011-readme-and-docs.md) | Rewrite the README and fix the docs | Docs | P2 | S | X-005 |
| [SPA-012](tickets/spa/SPA-012-dependencies-hygiene.md) | Clean the dependencies | Chore | P2 | S | None |
| [SPA-014](tickets/spa/SPA-014-remove-unused-code-and-fix-pages-folder.md) | Remove unused code and fix the `pages` folder | Refactor | P2 | M | None |

## Phase 2 - Connect SPA and API

| ID | Title | Type | Priority | Size | Depends on |
| --- | --- | --- | --- | --- | --- |
| [API-028](tickets/api/API-028-auth-contract-for-spa.md) | Make the auth responses match the SPA contract | Feature | P0 | M | X-002, X-003 |
| [SPA-001](tickets/spa/SPA-001-auth-service-calls-wrong-urls.md) | Fix the URLs used by `authService` | Bug | P0 | M | X-002, X-003, SPA-036 |
| [SPA-002](tickets/spa/SPA-002-auth-payload-and-session-mismatch.md) | Match the auth payloads with the API | Bug | P0 | M | X-002, API-028 |
| [SPA-003](tickets/spa/SPA-003-single-token-store-and-refresh.md) | Keep the token in one place and refresh it automatically | Bug | P0 | M | X-002, SPA-001, SPA-036 |
| [SPA-036](tickets/spa/SPA-036-astro-auth-routes-and-api-proxy.md) | Build the Astro auth routes and API proxy (BFF) | Feature | P0 | L | X-002, X-003 |
| [API-026](tickets/api/API-026-add-user-roles.md) | Add user roles (USER and ADMIN) | Feature | P1 | M | API-004 |
| [API-027](tickets/api/API-027-seed-data.md) | Add a seed script with example data | Feature | P1 | M | API-004, API-026 |
| [CD-008](tickets/cd/CD-008-auto-update-ppd-from-app-repos.md) | Update `ppd.json` automatically when an app publishes an image | Feature | P1 | L | API-019, CD-009 |
| [SPA-004](tickets/spa/SPA-004-share-auth-state-between-islands.md) | Share the auth state between all pages and islands | Bug | P1 | M | SPA-003 |
| [SPA-005](tickets/spa/SPA-005-authmodal-errors-and-accessibility.md) | Show real errors in the auth modal and make it accessible | Bug | P1 | M | SPA-001 |
| [SPA-007](tickets/spa/SPA-007-astro-middleware-and-route-guards.md) | Add Astro middleware to load the user and protect pages | Feature | P1 | M | X-002, SPA-003, SPA-036 |
| [SPA-013](tickets/spa/SPA-013-shared-types-and-mock-api.md) | Use one set of API types and add a mock API for development | Refactor | P1 | M | X-003 |
| [SPA-015](tickets/spa/SPA-015-app-shell-navigation-and-error-pages.md) | Build one app shell with navigation, user menu and error pages | Feature | P1 | M | SPA-004 |
| [SPA-016](tickets/spa/SPA-016-login-and-signup-pages.md) | Create dedicated login and signup pages | Feature | P1 | M | SPA-001, SPA-005, SPA-015 |
| [API-039](tickets/api/API-039-openapi-and-readme.md) | Write the OpenAPI document and a real README | Docs | P2 | M | X-003 |
| [API-040](tickets/api/API-040-health-checks-and-graceful-shutdown.md) | Add real health checks and graceful shutdown | Chore | P2 | S | API-021 |
| [API-042](tickets/api/API-042-response-envelope-and-pagination.md) | Use one response format and one pagination format everywhere | Refactor | P2 | M | X-003, API-007 |

## Phase 3 - Core product

| ID | Title | Type | Priority | Size | Depends on |
| --- | --- | --- | --- | --- | --- |
| [API-029](tickets/api/API-029-problems-module.md) | Build the problems module | Feature | P1 | L | X-001, X-003, API-027 |
| [API-030](tickets/api/API-030-code-runner-integration.md) | Connect the code runner (safe execution) | Feature | P1 | L | X-004 |
| [API-031](tickets/api/API-031-submissions-module.md) | Build the code submissions module | Feature | P1 | L | API-029, API-030 |
| [SPA-017](tickets/spa/SPA-017-problems-list-page.md) | Build the problems list page | Feature | P1 | L | SPA-013, SPA-015, API-029 |
| [SPA-018](tickets/spa/SPA-018-problem-detail-page.md) | Build the problem detail page | Feature | P1 | L | SPA-017, SPA-013 |
| [SPA-019](tickets/spa/SPA-019-code-editor.md) | Add the code editor | Feature | P1 | L | SPA-018 |
| [SPA-020](tickets/spa/SPA-020-run-and-submit-ui.md) | Build the Run and Submit buttons and the results panel | Feature | P1 | L | SPA-019, SPA-021, API-031 |
| [SPA-033](tickets/spa/SPA-033-security-sanitize-csp-cookies.md) | Sanitize user content and add security headers | Security | P1 | M | SPA-018 |
| [SPA-029](tickets/spa/SPA-029-home-page-real-data.md) | Improve the home page and connect it to real data | Feature | P2 | M | API-029, SPA-015 |
| [SPA-030](tickets/spa/SPA-030-loading-empty-error-states.md) | Create shared loading, empty and error components | Feature | P2 | M | None |

## Phase 4 - More features

| ID | Title | Type | Priority | Size | Depends on |
| --- | --- | --- | --- | --- | --- |
| [API-032](tickets/api/API-032-user-profile-and-stats.md) | Build the user profile and statistics endpoints | Feature | P2 | L | API-006, API-031 |
| [API-033](tickets/api/API-033-tests-module-extra-endpoints.md) | Add missing endpoints to the company tests module | Feature | P2 | M | API-014, API-001 |
| [API-034](tickets/api/API-034-admin-crud.md) | Add admin endpoints to manage content | Feature | P2 | L | API-026, API-008 |
| [API-035](tickets/api/API-035-explore-topics-module.md) | Build the explore topics module | Feature | P2 | M | X-001, API-029 |
| [SPA-022](tickets/spa/SPA-022-submissions-history-page.md) | Build the submissions history | Feature | P2 | M | SPA-020 |
| [SPA-023](tickets/spa/SPA-023-profile-and-settings.md) | Build the profile and settings pages | Feature | P2 | L | SPA-015, API-032 |
| [SPA-024](tickets/spa/SPA-024-explore-page.md) | Build the explore page | Feature | P2 | M | X-001, SPA-015, API-035 |
| [SPA-025](tickets/spa/SPA-025-courses-pages.md) | Build the courses pages | Feature | P2 | M | X-001, SPA-015, API-013 |
| [SPA-026](tickets/spa/SPA-026-company-tests-pages.md) | Build the company tests pages (timed tests) | Feature | P2 | L | X-001, SPA-019, API-033 |
| [API-036](tickets/api/API-036-course-lessons-and-progress.md) | Add lessons and progress to courses | Feature | P3 | L | API-013, X-001 |
| [API-037](tickets/api/API-037-contests-module.md) | Build the contests module | Feature | P3 | L | API-031 |
| [API-038](tickets/api/API-038-discuss-module.md) | Build the discuss module | Feature | P3 | L | API-026, API-029 |
| [CD-016](tickets/cd/CD-016-add-dev-environment.md) | Decide and create a `dev` environment | Feature | P3 | M | CD-008, CD-006 |
| [SPA-027](tickets/spa/SPA-027-contest-page.md) | Build the contest pages | Feature | P3 | L | X-001, SPA-020, API-037 |
| [SPA-028](tickets/spa/SPA-028-discuss-page.md) | Build the discuss page | Feature | P3 | L | SPA-033, API-038 |
| [SPA-034](tickets/spa/SPA-034-theme-and-i18n.md) | Use the theme preference and decide about i18n | Feature | P3 | M | SPA-023 |

## Phase 5 - Quality and launch

| ID | Title | Type | Priority | Size | Depends on |
| --- | --- | --- | --- | --- | --- |
| [X-009](tickets/cross/X-009-pre-launch-security-review.md) | Do a security review before the first public release | Security | P1 | M | API-001, API-002, API-009, API-010, SPA-033, CD-002 |
| [API-023](tickets/api/API-023-unit-tests-for-use-cases.md) | Write unit tests for use cases and domain objects | Test | P2 | M | API-022, API-014, API-015 |
| [API-024](tickets/api/API-024-integration-tests-for-routes.md) | Write integration tests for all routes | Test | P2 | L | API-022, API-027 |
| [CD-010](tickets/cd/CD-010-deployment-notifications.md) | Send real notifications for deploys, failures and rollbacks | Feature | P2 | S | CD-004 |
| [CD-014](tickets/cd/CD-014-post-deploy-smoke-tests.md) | Run smoke tests after each deploy and before promotion | Feature | P2 | M | CD-004, API-027 |
| [SPA-031](tickets/spa/SPA-031-accessibility-audit.md) | Run an accessibility audit and fix the problems | Quality | P2 | M | SPA-020 |
| [SPA-032](tickets/spa/SPA-032-end-to-end-tests.md) | Add end-to-end tests with Playwright | Test | P2 | L | SPA-020, X-005 |
| [X-007](tickets/cross/X-007-architecture-documentation.md) | Write the architecture overview | Docs | P2 | M | X-003 |
| [X-010](tickets/cross/X-010-release-plan-v1.md) | Prepare the v1.0.0 release | Process | P2 | M | X-009, CD-013, CD-014 |
| [API-041](tickets/api/API-041-observability.md) | Add basic monitoring and error tracking | Chore | P3 | M | API-012 |
| [CD-015](tickets/cd/CD-015-runbook.md) | Write a runbook for deploys and incidents | Docs | P3 | S | CD-001, CD-012 |
| [SPA-035](tickets/spa/SPA-035-performance-review.md) | Check performance and loading behavior | Quality | P3 | M | SPA-020 |

