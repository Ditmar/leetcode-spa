# API-004: Add the missing migration for courses and enrollments

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Bug |
| Priority | P0 |
| Size | S |
| Phase | 1 - Stabilize and secure |
| Depends on | None |

## Problem

`prisma/schema.prisma` has the models `Course` and `Enrollment`. But no file in `prisma/migrations` creates the tables `courses` and `enrollments`. The Docker image runs `npx prisma migrate deploy` when it starts, so a **new database never gets these tables**. All `/api/courses` routes fail with a database error (`500`) on a clean database.

Maybe the tables exist in ppd or prod because someone used `prisma db push`. Then the migration history does not match the real database.

## Tasks

- [ ] On a clean local database, run `npx prisma migrate deploy` and confirm the tables are missing.
- [ ] Create the migration: `npx prisma migrate dev --name add_courses_and_enrollments`.
- [ ] Read the SQL file before you commit it.
- [ ] Check ppd and prod: do the tables exist? If yes, mark the migration as applied with `prisma migrate resolve --applied <name>` (do this together with the teacher).
- [ ] Change the npm script `prisma:migrate`: it has `--name init` fixed. Let it accept a name.

## Acceptance criteria

- A clean database + `migrate deploy` creates `courses` and `enrollments`.
- `GET /api/courses` returns `200` with an empty list.
- ppd and prod still work after the deploy.

## Hints

See also `API-005` about the migration history.
