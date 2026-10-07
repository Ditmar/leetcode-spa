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

First we need to decide what the product is ([X-001](https://github.com/Ditmar/leetcode-spa/issues/366)), then fix the foundation, then connect the pieces, then build the features.

## 2. Feature map: what exists where

| Feature | SPA service | SPA page | API | Tickets |
| --- | --- | --- | --- | --- |
| Sign up / sign in | Yes (wrong URLs) | Modal on the home page only | Yes (`/api/auth`) | [SPA-001](https://github.com/Ditmar/leetcode-spa/issues/376) [SPA-002](https://github.com/Ditmar/leetcode-spa/issues/377) [SPA-003](https://github.com/Ditmar/leetcode-spa/issues/378) [SPA-016](https://github.com/Ditmar/leetcode-spa/issues/391) [API-028](https://github.com/Ditmar/api-leetcode/issues/82) |
| Problems list and detail | Yes | Placeholder | **No** | [API-029](https://github.com/Ditmar/api-leetcode/issues/83) [SPA-017](https://github.com/Ditmar/leetcode-spa/issues/392) [SPA-018](https://github.com/Ditmar/leetcode-spa/issues/393) |
| Code editor, run, submit | Yes (`submissionsService`) | **No editor at all** | **No** (no code runner) | [X-004](https://github.com/Ditmar/leetcode-spa/issues/369) [API-030](https://github.com/Ditmar/api-leetcode/issues/84) [API-031](https://github.com/Ditmar/api-leetcode/issues/85) [SPA-019](https://github.com/Ditmar/leetcode-spa/issues/394) [SPA-020](https://github.com/Ditmar/leetcode-spa/issues/395) [SPA-021](https://github.com/Ditmar/leetcode-spa/issues/396) |
| Submissions history | Yes | No | **No** | [SPA-022](https://github.com/Ditmar/leetcode-spa/issues/397) |
| Profile and statistics | Yes (`userService`) | No | **No** (old mock module) | [API-032](https://github.com/Ditmar/api-leetcode/issues/86) [SPA-023](https://github.com/Ditmar/leetcode-spa/issues/398) |
| Explore topics | Yes | Placeholder | **No** | [API-035](https://github.com/Ditmar/api-leetcode/issues/89) [SPA-024](https://github.com/Ditmar/leetcode-spa/issues/399) |
| Contests | Yes | Placeholder | **No** | [API-037](https://github.com/Ditmar/api-leetcode/issues/91) [SPA-027](https://github.com/Ditmar/leetcode-spa/issues/402) |
| Discuss | No | Placeholder | **No** | [API-038](https://github.com/Ditmar/api-leetcode/issues/92) [SPA-028](https://github.com/Ditmar/leetcode-spa/issues/403) |
| Courses | No | No | Yes (but no table in migrations) | [API-004](https://github.com/Ditmar/api-leetcode/issues/58) [API-013](https://github.com/Ditmar/api-leetcode/issues/67) [API-036](https://github.com/Ditmar/api-leetcode/issues/90) [SPA-025](https://github.com/Ditmar/leetcode-spa/issues/400) |
| Company tests (timed) | No | No | Yes (insecure, see below) | [API-001](https://github.com/Ditmar/api-leetcode/issues/55) [API-014](https://github.com/Ditmar/api-leetcode/issues/68) [API-033](https://github.com/Ditmar/api-leetcode/issues/87) [SPA-026](https://github.com/Ditmar/leetcode-spa/issues/401) |
| Admin (create content) | No | No | **No** (no roles, no seed) | [API-026](https://github.com/Ditmar/api-leetcode/issues/80) [API-027](https://github.com/Ditmar/api-leetcode/issues/81) [API-034](https://github.com/Ditmar/api-leetcode/issues/88) |

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
| 1 | Test routes trust the `x-user-id` header as login | Anyone can act as any user | [API-001](https://github.com/Ditmar/api-leetcode/issues/55) |
| 2 | Fake default secrets in `config/default.json` | If `JWT_SECRET` is missing, the API runs with a public secret | [API-002](https://github.com/Ditmar/api-leetcode/issues/56) |
| 3 | SPA login cannot work with the real API | Wrong URLs, wrong data shape, token never sent | [SPA-001](https://github.com/Ditmar/leetcode-spa/issues/376) [SPA-002](https://github.com/Ditmar/leetcode-spa/issues/377) [SPA-003](https://github.com/Ditmar/leetcode-spa/issues/378) |
| 4 | No migration creates `courses` and `enrollments` | Course routes fail on a new database | [API-004](https://github.com/Ditmar/api-leetcode/issues/58) |
| 5 | Errors in async routes are not handled | A bad request can stop the server | [API-003](https://github.com/Ditmar/api-leetcode/issues/57) |
| 6 | `/api/user` is a mock that any user can use to edit or delete everyone | Data leak and data loss | [API-006](https://github.com/Ditmar/api-leetcode/issues/60) |
| 7 | Expected outputs of programming questions are sent to the browser | Users can cheat | [API-016](https://github.com/Ditmar/api-leetcode/issues/70) |
| 8 | Rollback restores the same image that is running | Rollback does nothing in an incident | [CD-001](https://github.com/Ditmar/leetcode-cd/issues/22) |
| 9 | Workflow inputs are pasted into shell scripts | Shell injection | [CD-002](https://github.com/Ditmar/leetcode-cd/issues/23) |
| 10 | The platform cannot run code | The main feature is missing | [X-004](https://github.com/Ditmar/leetcode-spa/issues/369) [API-030](https://github.com/Ditmar/api-leetcode/issues/84) |

## 5. Findings by repo

### api-leetcode

| Area | Finding | Ticket |
| --- | --- | --- |
| Security | Fake auth, default secrets, no helmet/CORS/rate limit, refresh tokens in plain text and without rotation, weak password rules | [API-001](https://github.com/Ditmar/api-leetcode/issues/55) [API-002](https://github.com/Ditmar/api-leetcode/issues/56) [API-010](https://github.com/Ditmar/api-leetcode/issues/64) [API-009](https://github.com/Ditmar/api-leetcode/issues/63) [API-025](https://github.com/Ditmar/api-leetcode/issues/79) |
| Stability | No global error handler, no input validation layer, errors mapped by text matching | [API-003](https://github.com/Ditmar/api-leetcode/issues/57) [API-007](https://github.com/Ditmar/api-leetcode/issues/61) [API-008](https://github.com/Ditmar/api-leetcode/issues/62) |
| Database | Missing migration, dangerous migration history (`DROP TABLE`) | [API-004](https://github.com/Ditmar/api-leetcode/issues/58) [API-005](https://github.com/Ditmar/api-leetcode/issues/59) |
| Tests module | No transaction on submit, session never closed, wrong multiple-choice grading, solutions leaked, inconsistent list/detail | [API-014](https://github.com/Ditmar/api-leetcode/issues/68) [API-015](https://github.com/Ditmar/api-leetcode/issues/69) [API-016](https://github.com/Ditmar/api-leetcode/issues/70) [API-017](https://github.com/Ditmar/api-leetcode/issues/71) |
| Courses module | Enroll does not check the course, race condition, ignored filters | [API-013](https://github.com/Ditmar/api-leetcode/issues/67) |
| Config and logs | Wrong `.env.example`, mixed units, `ENV` vs `NODE_ENV`, wrong `logger.error` calls | [API-011](https://github.com/Ditmar/api-leetcode/issues/65) [API-012](https://github.com/Ditmar/api-leetcode/issues/66) |
| Code quality | Duplicate classes and folders, three ways to connect dependencies, no tests at all | [API-020](https://github.com/Ditmar/api-leetcode/issues/74) [API-021](https://github.com/Ditmar/api-leetcode/issues/75) [API-022](https://github.com/Ditmar/api-leetcode/issues/76) |
| DevOps | Dockerfile downloads Prisma at start and runs as root, CI overwrites tags and runs no tests | [API-018](https://github.com/Ditmar/api-leetcode/issues/72) [API-019](https://github.com/Ditmar/api-leetcode/issues/73) |
| Docs | README describes a "hello world" API | [API-039](https://github.com/Ditmar/api-leetcode/issues/93) |

### leetcode-spa

| Area | Finding | Ticket |
| --- | --- | --- |
| Auth | (Decision: Astro keeps tokens in cookies, see [SPA-036](https://github.com/Ditmar/leetcode-spa/issues/411)) Wrong URLs, wrong payloads, token in three places and never sent, no refresh, auth context not shared between islands, generic error message | [SPA-001](https://github.com/Ditmar/leetcode-spa/issues/376) [SPA-002](https://github.com/Ditmar/leetcode-spa/issues/377) [SPA-003](https://github.com/Ditmar/leetcode-spa/issues/378) [SPA-004](https://github.com/Ditmar/leetcode-spa/issues/379) [SPA-005](https://github.com/Ditmar/leetcode-spa/issues/380) |
| HTTP client | Upload sends `{}`, wrong `isApiError`, `/api` base URL has no route | [SPA-006](https://github.com/Ditmar/leetcode-spa/issues/381) |
| Submissions | Errors always become `UNKNOWN_ERROR`; code is trimmed; polling cannot be cancelled | [SPA-021](https://github.com/Ditmar/leetcode-spa/issues/396) |
| Server | No Astro middleware (`Astro.locals` always empty), no route guards | [SPA-007](https://github.com/Ditmar/leetcode-spa/issues/382) |
| Quality | More than 100 TypeScript errors that CI does not catch; CI skips typecheck and build | [SPA-008](https://github.com/Ditmar/leetcode-spa/issues/383) [SPA-010](https://github.com/Ditmar/leetcode-spa/issues/385) |
| Deploy | Starts with `astro preview`, three different ports, build-time vs runtime variables mixed up | [SPA-009](https://github.com/Ditmar/leetcode-spa/issues/384) |
| Structure | A component inside `src/pages` becomes server routes; unused files; 27 catalog components, many not needed | [SPA-014](https://github.com/Ditmar/leetcode-spa/issues/389) |
| Dependencies | An alpha package and a GitHub shortcut instead of a version | [SPA-012](https://github.com/Ditmar/leetcode-spa/issues/387) |
| Pages | All pages except home are placeholders; no editor library | [SPA-015](https://github.com/Ditmar/leetcode-spa/issues/390) to [SPA-029](https://github.com/Ditmar/leetcode-spa/issues/404) |
| Docs | README is the Astro template and describes an API that does not exist | [SPA-011](https://github.com/Ditmar/leetcode-spa/issues/386) |

### leetcode-cd

| Area | Finding | Ticket |
| --- | --- | --- |
| Rollback | Restores the same image; writes to `master` without retry or lock | [CD-001](https://github.com/Ditmar/leetcode-cd/issues/22) [CD-011](https://github.com/Ditmar/leetcode-cd/issues/32) |
| Security | Shell injection through workflow inputs; "no latest" guard can be bypassed | [CD-002](https://github.com/Ditmar/leetcode-cd/issues/23) [CD-003](https://github.com/Ditmar/leetcode-cd/issues/24) |
| Reliability | Deploy says "success" without checking the app; image check passes when it is not sure; change detection only reads the last commit | [CD-004](https://github.com/Ditmar/leetcode-cd/issues/25) [CD-005](https://github.com/Ditmar/leetcode-cd/issues/26) [CD-017](https://github.com/Ditmar/leetcode-cd/issues/38) |
| Config | Env templates do not match the apps (and the API has fake defaults) | [CD-007](https://github.com/Ditmar/leetcode-cd/issues/28) |
| Data | `commitSha` means two different things; `pending` values; image versions do not match app versions | [CD-013](https://github.com/Ditmar/leetcode-cd/issues/34) |
| Process | Docs describe `my-app`, `main`, dev and qa. Real: two apps, `master`, ppd and prod. No PR checks. No automatic ppd update. No notifications. | [CD-006](https://github.com/Ditmar/leetcode-cd/issues/27) [CD-009](https://github.com/Ditmar/leetcode-cd/issues/30) [CD-008](https://github.com/Ditmar/leetcode-cd/issues/29) [CD-010](https://github.com/Ditmar/leetcode-cd/issues/31) |
| Database | Migrations run at container start; rollback does not roll back the database | [CD-012](https://github.com/Ditmar/leetcode-cd/issues/33) |

## 6. Cross-repo problems

| Problem | Ticket |
| --- | --- |
| Nobody decided what the MVP is | [X-001](https://github.com/Ditmar/leetcode-spa/issues/366) |
| Login design is not agreed (cookies or tokens, BFF or direct) | [X-002](https://github.com/Ditmar/leetcode-spa/issues/367) |
| Different paths, response shapes, pagination names, and enum casing | [X-003](https://github.com/Ditmar/leetcode-spa/issues/368) |
| No way to run the whole system locally with one command, and ports differ | [X-005](https://github.com/Ditmar/leetcode-spa/issues/370) |
| No shared rules for branches, PRs, reviews | [X-006](https://github.com/Ditmar/leetcode-spa/issues/371) |
