# API-005: Make the migration history safe

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Risk |
| Priority | P1 |
| Size | M |
| Phase | 1 - Stabilize and secure |
| Depends on | API-004 |

## Problem

The migration history was changed by hand.

- There are three migrations named `init` with different dates.
- `20251128214047_init_complete` starts with `DROP TABLE IF EXISTS` for `users`, `tests`, `questions`, `answers`, `submissions`, `companies` and more. If it runs on a database that has real data, **all this data is deleted**.
- Earlier migrations create tables with other names (`User`) and later ones drop them.

Today `migrate deploy` only runs migrations that are not applied yet, so existing databases are safe. But a new environment, a database reset, or a half-migrated database can lose data.

## Tasks

- [ ] For local, ppd and prod, list the applied migrations (`SELECT migration_name FROM _prisma_migrations`).
- [ ] Take a backup of ppd and prod before any change.
- [ ] Decide with the teacher: keep the history and add a big warning, or create one clean **baseline** migration from the current schema.
- [ ] If you make a baseline: `prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script`. Then use `migrate resolve --applied` on the existing databases.
- [ ] Write `docs/database.md`: how to change the schema, how to name migrations, "never edit a migration that was applied".

## Acceptance criteria

- A clean database gets the full schema with `migrate deploy`.
- No migration drops tables that contain data.
- ppd and prod keep all their data (check row counts before and after).
- The doc exists.
