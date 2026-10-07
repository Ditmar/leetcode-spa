# Tickets index

Total tickets: **109**

| Repo | P0 | P1 | P2 | P3 | Total |
| --- | --- | --- | --- | --- | --- |
| cross-repo (X) | 3 | 5 | 2 | 0 | 10 |
| api-leetcode (API) | 6 | 22 | 12 | 5 | 45 |
| leetcode-spa (SPA) | 4 | 15 | 13 | 4 | 36 |
| leetcode-cd (CD) | 2 | 8 | 6 | 2 | 18 |
| **All** | 15 | 50 | 33 | 11 | 109 |

Priority: **P0** = fix now (security, crash, blocker). **P1** = needed for the MVP. **P2** = should do. **P3** = nice to have.  
Size: **S** = under 1 day. **M** = 1 to 3 days. **L** = 3 to 5 days. (For one student.)

## Phase 0 - Decisions and setup

| ID | Title | Type | Priority | Size | Depends on |
| --- | --- | --- | --- | --- | --- |
| [X-001](https://github.com/Ditmar/leetcode-spa/issues/366) | Decide the MVP scope | Decision | P0 | S | None |
| [X-002](https://github.com/Ditmar/leetcode-spa/issues/367) | Decide how login and tokens work between SPA and API | Decision | P0 | S | None |
| [X-003](https://github.com/Ditmar/leetcode-spa/issues/368) | Define one API contract (paths, response format, pagination) | Decision | P0 | M | X-001 |
| [X-004](https://github.com/Ditmar/leetcode-spa/issues/369) | Choose how to run user code safely | Decision | P1 | M | X-001 |
| [X-005](https://github.com/Ditmar/leetcode-spa/issues/370) | Make one command start the whole system locally | Chore | P1 | M | None |
| [X-006](https://github.com/Ditmar/leetcode-spa/issues/371) | Agree on the team workflow (branches, PRs, Definition of Done) | Process | P1 | S | None |
| [X-008](https://github.com/Ditmar/leetcode-spa/issues/373) | Decide how courses, tests and problems are created | Decision | P1 | S | X-001 |

## Phase 1 - Stabilize and secure

| ID | Title | Type | Priority | Size | Depends on |
| --- | --- | --- | --- | --- | --- |
| [API-001](https://github.com/Ditmar/api-leetcode/issues/55) | Replace the fake `x-user-id` login on test routes with JWT | Security | P0 | S | None |
| [API-002](https://github.com/Ditmar/api-leetcode/issues/56) | Remove default secrets from the config files | Security | P0 | S | None |
| [API-003](https://github.com/Ditmar/api-leetcode/issues/57) | Add a global error handler and protect async routes | Bug | P0 | M | None |
| [API-004](https://github.com/Ditmar/api-leetcode/issues/58) | Add the missing migration for courses and enrollments | Bug | P0 | S | None |
| [API-006](https://github.com/Ditmar/api-leetcode/issues/60) | Lock down the `/api/user` routes | Security | P0 | S | None |
| [CD-001](https://github.com/Ditmar/leetcode-cd/issues/22) | Fix the rollback: it restores the same image | Bug | P0 | M | None |
| [CD-002](https://github.com/Ditmar/leetcode-cd/issues/23) | Stop shell injection in the workflows | Security | P0 | M | None |
| [API-005](https://github.com/Ditmar/api-leetcode/issues/59) | Make the migration history safe | Risk | P1 | M | API-004 |
| [API-007](https://github.com/Ditmar/api-leetcode/issues/61) | Use error classes instead of text matching for HTTP status codes | Refactor | P1 | M | API-003 |
| [API-008](https://github.com/Ditmar/api-leetcode/issues/62) | Validate all requests with one shared Zod middleware | Feature | P1 | M | API-007 |
| [API-009](https://github.com/Ditmar/api-leetcode/issues/63) | Make refresh tokens safer | Security | P1 | L | X-002 |
| [API-010](https://github.com/Ditmar/api-leetcode/issues/64) | Add helmet, CORS, rate limit and request limits | Security | P1 | M | X-002 |
| [API-011](https://github.com/Ditmar/api-leetcode/issues/65) | Fix the configuration and `.env.example` | Bug | P1 | M | API-002 |
| [API-013](https://github.com/Ditmar/api-leetcode/issues/67) | Fix course enrollment and course list bugs | Bug | P1 | M | API-004, API-008 |
| [API-014](https://github.com/Ditmar/api-leetcode/issues/68) | Fix the "submit test" flow (transaction, session, duplicates) | Bug | P1 | L | API-001, API-007 |
| [API-015](https://github.com/Ditmar/api-leetcode/issues/69) | Fix grading of multiple-choice questions | Bug | P1 | M | API-014 |
| [API-016](https://github.com/Ditmar/api-leetcode/issues/70) | Do not send expected outputs and hidden test cases to the client | Security | P1 | M | None |
| [API-018](https://github.com/Ditmar/api-leetcode/issues/72) | Fix the API Dockerfile | Chore | P1 | M | None |
| [API-019](https://github.com/Ditmar/api-leetcode/issues/73) | Fix the CI pipeline | Chore | P1 | M | API-022 |
| [API-020](https://github.com/Ditmar/api-leetcode/issues/74) | Remove duplicate and dead code | Refactor | P1 | M | API-001, API-006 |
| [API-021](https://github.com/Ditmar/api-leetcode/issues/75) | Create one place where all dependencies are connected | Refactor | P1 | M | API-020 |
| [API-022](https://github.com/Ditmar/api-leetcode/issues/76) | Set up automated tests and write the first auth tests | Test | P1 | M | API-021 |
| [CD-004](https://github.com/Ditmar/leetcode-cd/issues/25) | Wait for the Railway deployment and check that the app is healthy | Feature | P1 | L | None |
| [CD-005](https://github.com/Ditmar/leetcode-cd/issues/26) | Make the image validation fail when it cannot be sure | Bug | P1 | S | None |
| [CD-006](https://github.com/Ditmar/leetcode-cd/issues/27) | Make README and slides match the real system | Docs | P1 | M | None |
| [CD-007](https://github.com/Ditmar/leetcode-cd/issues/28) | Make the environment variable templates match the apps | Bug | P1 | M | API-011, SPA-009 |
| [CD-009](https://github.com/Ditmar/leetcode-cd/issues/30) | Add automatic checks for pull requests | Chore | P1 | M | None |
| [CD-012](https://github.com/Ditmar/leetcode-cd/issues/33) | Define how database migrations are deployed | Process | P1 | M | API-018 |
| [SPA-006](https://github.com/Ditmar/leetcode-spa/issues/381) | Fix problems in `apiClient` | Bug | P1 | M | X-003 |
| [SPA-008](https://github.com/Ditmar/leetcode-spa/issues/383) | Fix the TypeScript errors and add a typecheck to CI | Chore | P1 | M | None |
| [SPA-009](https://github.com/Ditmar/leetcode-spa/issues/384) | Run the SPA in production the right way and fix runtime config | Chore | P1 | M | None |
| [SPA-021](https://github.com/Ditmar/leetcode-spa/issues/396) | Fix error handling and polling in `submissionsService` | Bug | P1 | M | SPA-006 |
| [API-012](https://github.com/Ditmar/api-leetcode/issues/66) | Fix wrong logging calls and add request logs | Bug | P2 | S | API-011 |
| [API-017](https://github.com/Ditmar/api-leetcode/issues/71) | Fix inconsistent data in the tests list and detail | Bug | P2 | M | API-008 |
| [API-025](https://github.com/Ditmar/api-leetcode/issues/79) | Improve signup, password rules and email handling | Security | P2 | M | API-007 |
| [CD-003](https://github.com/Ditmar/leetcode-cd/issues/24) | Make the "no latest in prod" rule strong | Bug | P2 | S | None |
| [CD-011](https://github.com/Ditmar/leetcode-cd/issues/32) | Make git writes safe (rollback, metadata, concurrency) | Risk | P2 | M | None |
| [CD-013](https://github.com/Ditmar/leetcode-cd/issues/34) | Fix the deploy metadata and the version numbers | Bug | P2 | M | CD-005 |
| [CD-017](https://github.com/Ditmar/leetcode-cd/issues/38) | Fix how `deploy.yml` finds changed files | Bug | P2 | S | CD-002 |
| [SPA-010](https://github.com/Ditmar/leetcode-spa/issues/385) | Improve the CI workflow | Chore | P2 | M | SPA-008 |
| [SPA-011](https://github.com/Ditmar/leetcode-spa/issues/386) | Rewrite the README and fix the docs | Docs | P2 | S | X-005 |
| [SPA-012](https://github.com/Ditmar/leetcode-spa/issues/387) | Clean the dependencies | Chore | P2 | S | None |
| [SPA-014](https://github.com/Ditmar/leetcode-spa/issues/389) | Remove unused code and fix the `pages` folder | Refactor | P2 | M | None |

## Phase 2 - Connect SPA and API

| ID | Title | Type | Priority | Size | Depends on |
| --- | --- | --- | --- | --- | --- |
| [API-028](https://github.com/Ditmar/api-leetcode/issues/82) | Make the auth responses match the SPA contract | Feature | P0 | M | X-002, X-003 |
| [SPA-001](https://github.com/Ditmar/leetcode-spa/issues/376) | Fix the URLs used by `authService` | Bug | P0 | M | X-002, X-003, SPA-036 |
| [SPA-002](https://github.com/Ditmar/leetcode-spa/issues/377) | Match the auth payloads with the API | Bug | P0 | M | X-002, API-028 |
| [SPA-003](https://github.com/Ditmar/leetcode-spa/issues/378) | Keep the token in one place and refresh it automatically | Bug | P0 | M | X-002, SPA-001, SPA-036 |
| [SPA-036](https://github.com/Ditmar/leetcode-spa/issues/411) | Build the Astro auth routes and API proxy (BFF) | Feature | P0 | L | X-002, X-003 |
| [API-026](https://github.com/Ditmar/api-leetcode/issues/80) | Add user roles (USER and ADMIN) | Feature | P1 | M | API-004 |
| [API-027](https://github.com/Ditmar/api-leetcode/issues/81) | Add a seed script with example data | Feature | P1 | M | API-004, API-026 |
| [CD-008](https://github.com/Ditmar/leetcode-cd/issues/29) | Update `ppd.json` automatically when an app publishes an image | Feature | P1 | L | API-019, CD-009 |
| [SPA-004](https://github.com/Ditmar/leetcode-spa/issues/379) | Share the auth state between all pages and islands | Bug | P1 | M | SPA-003 |
| [SPA-005](https://github.com/Ditmar/leetcode-spa/issues/380) | Show real errors in the auth modal and make it accessible | Bug | P1 | M | SPA-001 |
| [SPA-007](https://github.com/Ditmar/leetcode-spa/issues/382) | Add Astro middleware to load the user and protect pages | Feature | P1 | M | X-002, SPA-003, SPA-036 |
| [SPA-013](https://github.com/Ditmar/leetcode-spa/issues/388) | Use one set of API types and add a mock API for development | Refactor | P1 | M | X-003 |
| [SPA-015](https://github.com/Ditmar/leetcode-spa/issues/390) | Build one app shell with navigation, user menu and error pages | Feature | P1 | M | SPA-004 |
| [SPA-016](https://github.com/Ditmar/leetcode-spa/issues/391) | Create dedicated login and signup pages | Feature | P1 | M | SPA-001, SPA-005, SPA-015 |
| [API-039](https://github.com/Ditmar/api-leetcode/issues/93) | Write the OpenAPI document and a real README | Docs | P2 | M | X-003 |
| [API-040](https://github.com/Ditmar/api-leetcode/issues/94) | Add real health checks and graceful shutdown | Chore | P2 | S | API-021 |
| [API-042](https://github.com/Ditmar/api-leetcode/issues/96) | Use one response format and one pagination format everywhere | Refactor | P2 | M | X-003, API-007 |

## Phase 3 - Core product

| ID | Title | Type | Priority | Size | Depends on |
| --- | --- | --- | --- | --- | --- |
| [API-029](https://github.com/Ditmar/api-leetcode/issues/83) | Build the problems module | Feature | P1 | L | X-001, X-003, API-027 |
| [API-030](https://github.com/Ditmar/api-leetcode/issues/84) | Connect Piston as the code executor | Feature | P1 | M | X-004 |
| [API-031](https://github.com/Ditmar/api-leetcode/issues/85) | Build the code submissions module | Feature | P1 | L | API-029, API-030, API-044 |
| [API-043](https://github.com/Ditmar/api-leetcode/issues/97) | Build the execution queue and the worker (RabbitMQ) | Feature | P1 | L | X-004, API-030, API-031, API-044 |
| [API-044](https://github.com/Ditmar/api-leetcode/issues/98) | Build the test harness and the output comparison | Feature | P1 | L | X-004, API-029 |
| [CD-018](https://github.com/Ditmar/leetcode-cd/issues/39) | Deploy Piston, RabbitMQ and the worker | Feature | P1 | L | X-004, API-043 |
| [SPA-017](https://github.com/Ditmar/leetcode-spa/issues/392) | Build the problems list page | Feature | P1 | L | SPA-013, SPA-015, API-029 |
| [SPA-018](https://github.com/Ditmar/leetcode-spa/issues/393) | Build the problem detail page | Feature | P1 | L | SPA-017, SPA-013 |
| [SPA-019](https://github.com/Ditmar/leetcode-spa/issues/394) | Add the code editor | Feature | P1 | L | SPA-018 |
| [SPA-020](https://github.com/Ditmar/leetcode-spa/issues/395) | Build the Run and Submit buttons and the results panel | Feature | P1 | L | SPA-019, SPA-021, API-031, API-043 |
| [SPA-033](https://github.com/Ditmar/leetcode-spa/issues/408) | Sanitize user content and add security headers | Security | P1 | M | SPA-018 |
| [SPA-029](https://github.com/Ditmar/leetcode-spa/issues/404) | Improve the home page and connect it to real data | Feature | P2 | M | API-029, SPA-015 |
| [SPA-030](https://github.com/Ditmar/leetcode-spa/issues/405) | Create shared loading, empty and error components | Feature | P2 | M | None |

## Phase 4 - More features

| ID | Title | Type | Priority | Size | Depends on |
| --- | --- | --- | --- | --- | --- |
| [API-032](https://github.com/Ditmar/api-leetcode/issues/86) | Build the user profile and statistics endpoints | Feature | P2 | L | API-006, API-031 |
| [API-033](https://github.com/Ditmar/api-leetcode/issues/87) | Add missing endpoints to the company tests module | Feature | P2 | M | API-014, API-001 |
| [API-034](https://github.com/Ditmar/api-leetcode/issues/88) | Add admin endpoints to manage content | Feature | P2 | L | API-026, API-008 |
| [API-035](https://github.com/Ditmar/api-leetcode/issues/89) | Build the explore topics module | Feature | P2 | M | X-001, API-029 |
| [SPA-022](https://github.com/Ditmar/leetcode-spa/issues/397) | Build the submissions history | Feature | P2 | M | SPA-020 |
| [SPA-023](https://github.com/Ditmar/leetcode-spa/issues/398) | Build the profile and settings pages | Feature | P2 | L | SPA-015, API-032 |
| [SPA-024](https://github.com/Ditmar/leetcode-spa/issues/399) | Build the explore page | Feature | P2 | M | X-001, SPA-015, API-035 |
| [SPA-025](https://github.com/Ditmar/leetcode-spa/issues/400) | Build the courses pages | Feature | P2 | M | X-001, SPA-015, API-013 |
| [SPA-026](https://github.com/Ditmar/leetcode-spa/issues/401) | Build the company tests pages (timed tests) | Feature | P2 | L | X-001, SPA-019, API-033 |
| [API-036](https://github.com/Ditmar/api-leetcode/issues/90) | Add lessons and progress to courses | Feature | P3 | L | API-013, X-001 |
| [API-037](https://github.com/Ditmar/api-leetcode/issues/91) | Build the contests module | Feature | P3 | L | API-031 |
| [API-038](https://github.com/Ditmar/api-leetcode/issues/92) | Build the discuss module | Feature | P3 | L | API-026, API-029 |
| [API-045](https://github.com/Ditmar/api-leetcode/issues/99) | Build our own Docker executor (advanced, optional) | Feature | P3 | L | API-043 |
| [CD-016](https://github.com/Ditmar/leetcode-cd/issues/37) | Decide and create a `dev` environment | Feature | P3 | M | CD-008, CD-006 |
| [SPA-027](https://github.com/Ditmar/leetcode-spa/issues/402) | Build the contest pages | Feature | P3 | L | X-001, SPA-020, API-037 |
| [SPA-028](https://github.com/Ditmar/leetcode-spa/issues/403) | Build the discuss page | Feature | P3 | L | SPA-033, API-038 |
| [SPA-034](https://github.com/Ditmar/leetcode-spa/issues/409) | Use the theme preference and decide about i18n | Feature | P3 | M | SPA-023 |

## Phase 5 - Quality and launch

| ID | Title | Type | Priority | Size | Depends on |
| --- | --- | --- | --- | --- | --- |
| [X-009](https://github.com/Ditmar/leetcode-spa/issues/374) | Do a security review before the first public release | Security | P1 | M | API-001, API-002, API-009, API-010, SPA-033, CD-002 |
| [API-023](https://github.com/Ditmar/api-leetcode/issues/77) | Write unit tests for use cases and domain objects | Test | P2 | M | API-022, API-014, API-015 |
| [API-024](https://github.com/Ditmar/api-leetcode/issues/78) | Write integration tests for all routes | Test | P2 | L | API-022, API-027 |
| [CD-010](https://github.com/Ditmar/leetcode-cd/issues/31) | Send real notifications for deploys, failures and rollbacks | Feature | P2 | S | CD-004 |
| [CD-014](https://github.com/Ditmar/leetcode-cd/issues/35) | Run smoke tests after each deploy and before promotion | Feature | P2 | M | CD-004, API-027 |
| [SPA-031](https://github.com/Ditmar/leetcode-spa/issues/406) | Run an accessibility audit and fix the problems | Quality | P2 | M | SPA-020 |
| [SPA-032](https://github.com/Ditmar/leetcode-spa/issues/407) | Add end-to-end tests with Playwright | Test | P2 | L | SPA-020, X-005 |
| [X-007](https://github.com/Ditmar/leetcode-spa/issues/372) | Write the architecture overview | Docs | P2 | M | X-003 |
| [X-010](https://github.com/Ditmar/leetcode-spa/issues/375) | Prepare the v1.0.0 release | Process | P2 | M | X-009, CD-013, CD-014 |
| [API-041](https://github.com/Ditmar/api-leetcode/issues/95) | Add basic monitoring and error tracking | Chore | P3 | M | API-012 |
| [CD-015](https://github.com/Ditmar/leetcode-cd/issues/36) | Write a runbook for deploys and incidents | Docs | P3 | S | CD-001, CD-012 |
| [SPA-035](https://github.com/Ditmar/leetcode-spa/issues/410) | Check performance and loading behavior | Quality | P3 | M | SPA-020 |

