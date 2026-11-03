# X-008: Decide how courses, tests and problems are created

| Field | Value |
| --- | --- |
| Repo | all |
| Type | Decision |
| Priority | P1 |
| Size | S |
| Phase | 0 - Decisions and setup |
| Depends on | X-001 |

## Problem

Today nobody can create content. The API can only **read** courses, tests and questions. There is no create endpoint, no seed script, and no admin role. The `CourseRepository.create` method exists but no use case or route uses it. So the courses and tests features have no data.

## Options

1. **Seed script only** (fast). Content lives in files in the repo.
2. **Admin API** (REST endpoints with role `ADMIN`). Content is made with Postman or scripts.
3. **Admin UI** in the SPA. Most work.

## Tasks

- [ ] Choose for the MVP. Suggested: seed script first (`API-027`), admin API later (`API-034`), admin UI only if there is time.
- [ ] Write the decision in `docs/decisions/ADR-005-content.md`.
- [ ] Decide who owns the content (who writes the problems and test cases).

## Acceptance criteria

- One short ADR exists.
- `API-027` and `API-034` have the right priority.
