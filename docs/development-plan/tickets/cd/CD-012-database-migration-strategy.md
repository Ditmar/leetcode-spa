# CD-012: Define how database migrations are deployed

| Field | Value |
| --- | --- |
| Repo | leetcode-cd |
| Type | Process |
| Priority | P1 |
| Size | M |
| Phase | 1 - Stabilize and secure |
| Depends on | API-018 |

## Problem

The API container runs `prisma migrate deploy` every time it starts. This causes risks:

- A failed migration makes the container crash and restart again and again.
- Two containers can run migrations at the same time.
- A rollback of the **image** does not roll back the **database**. Migrations only go forward. If version 1.2 removed a column and you roll back to 1.1, the old code fails.
- Nobody takes a backup before a deploy to prod.
- The API migration history has one migration that drops tables (see `API-005`).

## Tasks

- [ ] Write the rule "expand then contract": a migration must work with the old and the new code (add columns first, remove them in a later release).
- [ ] Decide how migrations run: a separate pre-deploy step (Railway pre-deploy command or a workflow step), not at container start. Coordinate with `API-018`.
- [ ] Turn on automatic backups for the databases and write how to restore.
- [ ] Add a checklist item "Migration tested on a copy of production data" to the PR template and release checklist.
- [ ] Always deploy to ppd first and run the migration there.
- [ ] Add to the runbook (`CD-015`): what to do if a migration fails.

## Acceptance criteria

- A migration failure in ppd does not take the API down (the old container keeps running) or is fixed in 5 minutes with a written guide.
- A restore from backup was tested once.
