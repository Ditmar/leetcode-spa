# ADR-005: How content is created

## Status

**Proposed — pending teacher approval.**

## Context

Today nobody can create content in the system. "Content" means the data that users read and solve: courses, companies, company tests, questions, problems, tags and problem test cases.

The current code was verified in `api-leetcode`:

- **Read only:** the API exposes `GET` routes for courses and tests. There is no route to create, edit or delete courses, companies, tests or questions.
- **No seed:** the `prisma/` folder has only `schema.prisma` and `migrations/`. There is no seed script, so a new database starts empty.
- **No roles:** the `User` model has no role field, so the API cannot tell an admin from a normal user ([API-026](https://github.com/Ditmar/api-leetcode/issues/80) adds roles).
- **Unused code:** `CourseRepository.create` exists, but no use case or route calls it.
- **No problems module yet:** problems, tags and problem test cases arrive with [API-029](https://github.com/Ditmar/api-leetcode/issues/83).

Because of this, the courses and tests features have no data, and the SPA pages that depend on them can only be shown with mock data (for example, the problems list page in SPA-017).

This decision depends on the MVP scope ([X-001](https://github.com/Ditmar/leetcode-spa/issues/366)). The scope suggested there puts problems, the code editor, run/submit, submissions and a simple profile in the MVP, and moves courses, company tests, explore, contests and discuss to phase 4.

## Options

| Option                     | How content is created                                                                                    | Effort      | Main risk                                                                           |
| -------------------------- | --------------------------------------------------------------------------------------------------------- | ----------- | ----------------------------------------------------------------------------------- |
| **1. Seed script only**    | Content lives in files in the repository. `npm run db:seed` loads it into the database.                   | Low         | Every change needs a commit and a new seed run. Non-developers cannot edit content. |
| **2. Admin API**           | REST endpoints under `/api/admin/...` that need role `ADMIN`. Content is created with Postman or scripts. | Medium–high | Needs roles, validation and authorization tests before it is safe.                  |
| **3. Admin UI in the SPA** | Forms in the SPA that call the admin API.                                                                 | High        | Needs option 2 first, plus new pages, forms and tests.                              |

## Decision

Content is created **in stages**. Each stage is only built when the previous one works.

1. **MVP: seed script** ([API-027](https://github.com/Ditmar/api-leetcode/issues/81)).
   - All MVP content is defined in versioned files in `api-leetcode` and loaded with `npm run db:seed`.
   - The seed is **idempotent**: running it twice gives the same data (fixed IDs or unique keys with `upsert`).
   - The seed **refuses to run in production** unless an explicit flag is set.
   - The seed also creates the first admin user, so the admin API can be used later without editing the database by hand (see API-026).
2. **Later: admin API** ([API-034](https://github.com/Ditmar/api-leetcode/issues/88)).
   - CRUD routes under `/api/admin/...` for courses, companies, tests, questions, problems, problem test cases and tags.
   - Every route requires role `ADMIN` and validates input.
   - Responses follow the API contract in [ADR-003](ADR-003-api-contract.md).
3. **Only if there is time: admin UI** in the SPA, built on top of the admin API. No ticket is created for it now.

### Content ownership

The teacher **owns and approves** the content. The students who work on API-027 write the seed files, and changes to the content are reviewed in pull requests like any other code.

Problem statements are written by the team in their own words. Statements, examples and test cases must not be copied from LeetCode or other sites.

_Pending teacher confirmation: who writes the problems and test cases (one assigned group, or each student adds a few), and how many problems the MVP needs._

## Rationale

- **The seed unblocks the most work for the least effort.** API-029, API-024 (integration tests), CD-014 (smoke tests) and the SPA pages all need data. The seed gives them data without waiting for roles and admin routes.
- **Content in files is reviewable.** Every change to the content goes through a pull request, with the same review and history as code.
- **The admin API is not safe without roles.** Building it before API-026 would expose routes that anyone could call.
- **An admin UI is the most expensive option and is not needed to demo the MVP.**

## Consequences

- API-027 is the **first** way to create content. It must also load problems, tags and test cases once API-029 exists.
- New content means: edit the seed files, open a pull request and run `npm run db:seed` in each environment. Nobody edits the database by hand.
- Until API-034 is done, teachers and admins cannot change content without a developer.
- The admin API must not change content that users already used: it uses soft delete (`isActive = false`), which the `Course`, `Test` and `Question` models already support.

### Ticket priorities

The current priorities already match this decision, so no change is needed:

| Ticket                                                                  | Priority | Phase                   | Why                                                               |
| ----------------------------------------------------------------------- | -------- | ----------------------- | ----------------------------------------------------------------- |
| [API-027](https://github.com/Ditmar/api-leetcode/issues/81) seed script | **P1**   | 2 - Connect SPA and API | MVP way to create content. It blocks API-029, API-024 and CD-014. |
| [API-034](https://github.com/Ditmar/api-leetcode/issues/88) admin API   | **P2**   | 4 - More features       | Built after roles (API-026) and the MVP.                          |

## Related issues

- [X-001 — Decide the MVP scope](https://github.com/Ditmar/leetcode-spa/issues/366)
- [X-003 — Define one API contract](https://github.com/Ditmar/leetcode-spa/issues/368)
- [X-008 — Decide how courses, tests and problems are created](https://github.com/Ditmar/leetcode-spa/issues/373)
- [API-026 — Add user roles](https://github.com/Ditmar/api-leetcode/issues/80)
- [API-027 — Add a seed script with example data](https://github.com/Ditmar/api-leetcode/issues/81)
- [API-029 — Build the problems module](https://github.com/Ditmar/api-leetcode/issues/83)
- [API-034 — Add admin endpoints to manage content](https://github.com/Ditmar/api-leetcode/issues/88)

## Approval

This ADR requires teacher approval before it can be considered accepted.

After approval, the status must change from **Proposed** to **Accepted**.
