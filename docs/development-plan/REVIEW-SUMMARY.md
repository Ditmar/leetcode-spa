# Review summary

Review date: 2026-10-06. Repos: `api-leetcode` (`74e9e4c`), `leetcode-spa` (`26715742`), `leetcode-cd` (`f7798b9`).

**How we reviewed:** we read the code of all three repos. In `leetcode-spa` we also ran the tests, the linter, the TypeScript check and the build. We did **not** run `api-leetcode` or `leetcode-cd` (no dependencies installed, no access to Railway or Docker Hub). Some findings about them come from reading the code. We say "check" when you must confirm something in the real environment.

## 1. The big picture

The three repos are well organized and use good tools. But the project is **not connected yet**:

- The **SPA** was built against a backend that does not exist. Its services call `/problems`, `/submissions`, `/contests`, `/explore` and `/users/me`. The API has none of these.
- The **API** has features that the SPA does not know: `courses` and company `tests` (timed tests with questions).
- The SPA **pages are placeholders** (`<h1>Problems PAGE</h1>`). Only the home page is finished.
- Nobody can **run user code**. This is the core of a LeetCode clone.
- The SPA **login cannot reach the API** (wrong URLs, different data format, token never sent).

First we need to decide what the product is ([X-001](tickets/cross/X-001-define-mvp-scope.md)), then fix the foundation, then connect the pieces, then build the features.

## 2. Feature map: what exists where

| Feature | SPA service | SPA page | API | Tickets |
| --- | --- | --- | --- | --- |
| Sign up / sign in | Yes (wrong URLs) | Modal on the home page only | Yes (`/api/auth`) | [SPA-001](tickets/spa/SPA-001-auth-service-calls-wrong-urls.md) [SPA-002](tickets/spa/SPA-002-auth-payload-and-session-mismatch.md) [SPA-003](tickets/spa/SPA-003-single-token-store-and-refresh.md) [SPA-016](tickets/spa/SPA-016-login-and-signup-pages.md) [API-028](tickets/api/API-028-auth-contract-for-spa.md) |
| Problems list and detail | Yes | Placeholder | **No** | [API-029](tickets/api/API-029-problems-module.md) [SPA-017](tickets/spa/SPA-017-problems-list-page.md) [SPA-018](tickets/spa/SPA-018-problem-detail-page.md) |
| Code editor, run, submit | Yes (`submissionsService`) | **No editor at all** | **No** (no code runner) | [X-004](tickets/cross/X-004-choose-code-execution-engine.md) [API-030](tickets/api/API-030-code-runner-integration.md) [API-031](tickets/api/API-031-submissions-module.md) [SPA-019](tickets/spa/SPA-019-code-editor.md) [SPA-020](tickets/spa/SPA-020-run-and-submit-ui.md) [SPA-021](tickets/spa/SPA-021-fix-submissions-service-errors.md) |
| Submissions history | Yes | No | **No** | [SPA-022](tickets/spa/SPA-022-submissions-history-page.md) |
| Profile and statistics | Yes (`userService`) | No | **No** (old mock module) | [API-032](tickets/api/API-032-user-profile-and-stats.md) [SPA-023](tickets/spa/SPA-023-profile-and-settings.md) |
| Explore topics | Yes | Placeholder | **No** | [API-035](tickets/api/API-035-explore-topics-module.md) [SPA-024](tickets/spa/SPA-024-explore-page.md) |
| Contests | Yes | Placeholder | **No** | [API-037](tickets/api/API-037-contests-module.md) [SPA-027](tickets/spa/SPA-027-contest-page.md) |
| Discuss | No | Placeholder | **No** | [API-038](tickets/api/API-038-discuss-module.md) [SPA-028](tickets/spa/SPA-028-discuss-page.md) |
| Courses | No | No | Yes (but no table in migrations) | [API-004](tickets/api/API-004-add-missing-course-migration.md) [API-013](tickets/api/API-013-course-enroll-and-list-fixes.md) [API-036](tickets/api/API-036-course-lessons-and-progress.md) [SPA-025](tickets/spa/SPA-025-courses-pages.md) |
| Company tests (timed) | No | No | Yes (insecure, see below) | [API-001](tickets/api/API-001-replace-fake-auth-on-test-routes.md) [API-014](tickets/api/API-014-fix-test-submit-flow.md) [API-033](tickets/api/API-033-tests-module-extra-endpoints.md) [SPA-026](tickets/spa/SPA-026-company-tests-pages.md) |
| Admin (create content) | No | No | **No** (no roles, no seed) | [API-026](tickets/api/API-026-add-user-roles.md) [API-027](tickets/api/API-027-seed-data.md) [API-034](tickets/api/API-034-admin-crud.md) |

## 3. What is good (keep it)

**API**

- Clear hexagonal layout (`domain`, `application`, `infrastructure`) and value objects for validation.
- Passwords use bcrypt. JWT algorithm is fixed to `HS256` when it signs and when it verifies.
- Configuration is checked with Zod when the app starts.
- Prisma schema has foreign keys, indexes and `onDelete` rules.
- Refresh tokens are saved in the database and can be revoked.
- ESLint, Prettier, Husky and a multi-stage Dockerfile.

**SPA**

- All **318 unit tests pass** (39 test files). ESLint passes. `astro build` passes.
- Good component catalog with Storybook stories, docs and tests.
- Services have types and tests. Useful helpers: `apiClient`, polling, validation.
- Release automation with `release-it` and a changelog.
- Helpful PR bots (unresolved comments, stale PRs).

**CD**

- Good idea: GitOps. The state of each environment is a JSON file in git, and every change has a history.
- Image check before deploy, no `latest` rule, environment approvals, concurrency lock, retry on push.
- Workflows are split by purpose (deploy, promote, rollback).

## 4. The 10 most important problems

| # | Problem | Why it matters | Ticket |
| --- | --- | --- | --- |
| 1 | Test routes trust the `x-user-id` header as login | Anyone can act as any user | [API-001](tickets/api/API-001-replace-fake-auth-on-test-routes.md) |
| 2 | Fake default secrets in `config/default.json` | If `JWT_SECRET` is missing, the API runs with a public secret | [API-002](tickets/api/API-002-remove-default-secrets.md) |
| 3 | SPA login cannot work with the real API | Wrong URLs, wrong data shape, token never sent | [SPA-001](tickets/spa/SPA-001-auth-service-calls-wrong-urls.md) [SPA-002](tickets/spa/SPA-002-auth-payload-and-session-mismatch.md) [SPA-003](tickets/spa/SPA-003-single-token-store-and-refresh.md) |
| 4 | No migration creates `courses` and `enrollments` | Course routes fail on a new database | [API-004](tickets/api/API-004-add-missing-course-migration.md) |
| 5 | Errors in async routes are not handled | A bad request can stop the server | [API-003](tickets/api/API-003-global-error-handler.md) |
| 6 | `/api/user` is a mock that any user can use to edit or delete everyone | Data leak and data loss | [API-006](tickets/api/API-006-lock-down-user-routes.md) |
| 7 | Expected outputs of programming questions are sent to the browser | Users can cheat | [API-016](tickets/api/API-016-hide-solutions-from-clients.md) |
| 8 | Rollback restores the same image that is running | Rollback does nothing in an incident | [CD-001](tickets/cd/CD-001-rollback-picks-the-same-image.md) |
| 9 | Workflow inputs are pasted into shell scripts | Shell injection | [CD-002](tickets/cd/CD-002-script-injection-in-workflows.md) |
| 10 | The platform cannot run code | The main feature is missing | [X-004](tickets/cross/X-004-choose-code-execution-engine.md) [API-030](tickets/api/API-030-code-runner-integration.md) |

## 5. Findings by repo

### api-leetcode

| Area | Finding | Ticket |
| --- | --- | --- |
| Security | Fake auth, default secrets, no helmet/CORS/rate limit, refresh tokens in plain text and without rotation, weak password rules | [API-001](tickets/api/API-001-replace-fake-auth-on-test-routes.md) [API-002](tickets/api/API-002-remove-default-secrets.md) [API-010](tickets/api/API-010-security-middleware.md) [API-009](tickets/api/API-009-refresh-token-hardening.md) [API-025](tickets/api/API-025-signup-and-password-hardening.md) |
| Stability | No global error handler, no input validation layer, errors mapped by text matching | [API-003](tickets/api/API-003-global-error-handler.md) [API-007](tickets/api/API-007-domain-errors-to-http-status.md) [API-008](tickets/api/API-008-request-validation-with-zod.md) |
| Database | Missing migration, dangerous migration history (`DROP TABLE`) | [API-004](tickets/api/API-004-add-missing-course-migration.md) [API-005](tickets/api/API-005-make-migration-history-safe.md) |
| Tests module | No transaction on submit, session never closed, wrong multiple-choice grading, solutions leaked, inconsistent list/detail | [API-014](tickets/api/API-014-fix-test-submit-flow.md) [API-015](tickets/api/API-015-fix-multiple-choice-grading.md) [API-016](tickets/api/API-016-hide-solutions-from-clients.md) [API-017](tickets/api/API-017-tests-list-and-detail-inconsistencies.md) |
| Courses module | Enroll does not check the course, race condition, ignored filters | [API-013](tickets/api/API-013-course-enroll-and-list-fixes.md) |
| Config and logs | Wrong `.env.example`, mixed units, `ENV` vs `NODE_ENV`, wrong `logger.error` calls | [API-011](tickets/api/API-011-config-cleanup.md) [API-012](tickets/api/API-012-logger-fixes.md) |
| Code quality | Duplicate classes and folders, three ways to connect dependencies, no tests at all | [API-020](tickets/api/API-020-remove-duplicates-and-dead-code.md) [API-021](tickets/api/API-021-single-composition-root.md) [API-022](tickets/api/API-022-test-setup-and-auth-tests.md) |
| DevOps | Dockerfile downloads Prisma at start and runs as root, CI overwrites tags and runs no tests | [API-018](tickets/api/API-018-fix-dockerfile.md) [API-019](tickets/api/API-019-fix-ci-pipeline.md) |
| Docs | README describes a "hello world" API | [API-039](tickets/api/API-039-openapi-and-readme.md) |

### leetcode-spa

| Area | Finding | Ticket |
| --- | --- | --- |
| Auth | (Decision: Astro keeps tokens in cookies, see [SPA-036](tickets/spa/SPA-036-astro-auth-routes-and-api-proxy.md)) Wrong URLs, wrong payloads, token in three places and never sent, no refresh, auth context not shared between islands, generic error message | [SPA-001](tickets/spa/SPA-001-auth-service-calls-wrong-urls.md) [SPA-002](tickets/spa/SPA-002-auth-payload-and-session-mismatch.md) [SPA-003](tickets/spa/SPA-003-single-token-store-and-refresh.md) [SPA-004](tickets/spa/SPA-004-share-auth-state-between-islands.md) [SPA-005](tickets/spa/SPA-005-authmodal-errors-and-accessibility.md) |
| HTTP client | Upload sends `{}`, wrong `isApiError`, `/api` base URL has no route | [SPA-006](tickets/spa/SPA-006-apiclient-fixes.md) |
| Submissions | Errors always become `UNKNOWN_ERROR`; code is trimmed; polling cannot be cancelled | [SPA-021](tickets/spa/SPA-021-fix-submissions-service-errors.md) |
| Server | No Astro middleware (`Astro.locals` always empty), no route guards | [SPA-007](tickets/spa/SPA-007-astro-middleware-and-route-guards.md) |
| Quality | More than 100 TypeScript errors that CI does not catch; CI skips typecheck and build | [SPA-008](tickets/spa/SPA-008-fix-typescript-errors.md) [SPA-010](tickets/spa/SPA-010-ci-improvements.md) |
| Deploy | Starts with `astro preview`, three different ports, build-time vs runtime variables mixed up | [SPA-009](tickets/spa/SPA-009-dockerfile-and-runtime-config.md) |
| Structure | A component inside `src/pages` becomes server routes; unused files; 27 catalog components, many not needed | [SPA-014](tickets/spa/SPA-014-remove-unused-code-and-fix-pages-folder.md) |
| Dependencies | An alpha package and a GitHub shortcut instead of a version | [SPA-012](tickets/spa/SPA-012-dependencies-hygiene.md) |
| Pages | All pages except home are placeholders; no editor library | [SPA-015](tickets/spa/SPA-015-app-shell-navigation-and-error-pages.md) to [SPA-029](tickets/spa/SPA-029-home-page-real-data.md) |
| Docs | README is the Astro template and describes an API that does not exist | [SPA-011](tickets/spa/SPA-011-readme-and-docs.md) |

### leetcode-cd

| Area | Finding | Ticket |
| --- | --- | --- |
| Rollback | Restores the same image; writes to `master` without retry or lock | [CD-001](tickets/cd/CD-001-rollback-picks-the-same-image.md) [CD-011](tickets/cd/CD-011-rollback-and-metadata-git-writes.md) |
| Security | Shell injection through workflow inputs; "no latest" guard can be bypassed | [CD-002](tickets/cd/CD-002-script-injection-in-workflows.md) [CD-003](tickets/cd/CD-003-latest-tag-guard-can-be-bypassed.md) |
| Reliability | Deploy says "success" without checking the app; image check passes when it is not sure; change detection only reads the last commit | [CD-004](tickets/cd/CD-004-wait-for-deployment-and-check-health.md) [CD-005](tickets/cd/CD-005-image-validation-passes-by-mistake.md) [CD-017](tickets/cd/CD-017-fix-change-detection-in-deploy-workflow.md) |
| Config | Env templates do not match the apps (and the API has fake defaults) | [CD-007](tickets/cd/CD-007-fix-environment-variable-templates.md) |
| Data | `commitSha` means two different things; `pending` values; image versions do not match app versions | [CD-013](tickets/cd/CD-013-fix-metadata-and-version-alignment.md) |
| Process | Docs describe `my-app`, `main`, dev and qa. Real: two apps, `master`, ppd and prod. No PR checks. No automatic ppd update. No notifications. | [CD-006](tickets/cd/CD-006-update-readme-and-slides.md) [CD-009](tickets/cd/CD-009-pr-validation-workflow.md) [CD-008](tickets/cd/CD-008-auto-update-ppd-from-app-repos.md) [CD-010](tickets/cd/CD-010-deployment-notifications.md) |
| Database | Migrations run at container start; rollback does not roll back the database | [CD-012](tickets/cd/CD-012-database-migration-strategy.md) |

## 6. Cross-repo problems

| Problem | Ticket |
| --- | --- |
| Nobody decided what the MVP is | [X-001](tickets/cross/X-001-define-mvp-scope.md) |
| Login design is not agreed (cookies or tokens, BFF or direct) | [X-002](tickets/cross/X-002-decide-auth-strategy.md) |
| Different paths, response shapes, pagination names, and enum casing | [X-003](tickets/cross/X-003-define-api-contract.md) |
| No way to run the whole system locally with one command, and ports differ | [X-005](tickets/cross/X-005-local-dev-environment.md) |
| No shared rules for branches, PRs, reviews | [X-006](tickets/cross/X-006-team-workflow-and-definition-of-done.md) |
