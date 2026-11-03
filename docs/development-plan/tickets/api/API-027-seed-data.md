# API-027: Add a seed script with example data

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Feature |
| Priority | P1 |
| Size | M |
| Phase | 2 - Connect SPA and API |
| Depends on | API-004, API-026 |

## Problem

The database starts empty and there is no way to add courses, companies, tests or questions (no create endpoint, no seed). So most of the API cannot be used or shown in a demo.

## Tasks

- [ ] Create `prisma/seed.ts` and configure it (`prisma.config.ts` or `package.json`).
- [ ] Seed: one admin user and one normal user (passwords from env or printed once), 3 companies, 5 courses, 3 tests with MCQ and programming questions.
- [ ] Add problems, tags and test cases after `API-029`.
- [ ] Make it **idempotent**: running it twice does not create duplicates (use `upsert` with fixed IDs or unique keys).
- [ ] Add `npm run db:seed`. Never run it automatically in production.
- [ ] Add a note in the README.

## Acceptance criteria

- On a clean database: `migrate deploy` + `db:seed` gives a usable system.
- Running the seed twice gives the same data.
- The seed refuses to run when `NODE_ENV=production` (unless a flag is set).
