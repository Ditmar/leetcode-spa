# X-005: Make one command start the whole system locally

| Field | Value |
| --- | --- |
| Repo | all |
| Type | Chore |
| Priority | P1 |
| Size | M |
| Phase | 0 - Decisions and setup |
| Depends on | None |

## Problem

A new student cannot start the project easily.

- The API has `npm run db:up` with a database that uses a fixed user and password in `local-database/database.yaml`.
- The API default port is `3000`, the API README says `3001`, and the SPA README says `http://localhost:4000/api/v1`.
- `.env.example` in the API has all lines commented and wrong variable names (see `API-011`).
- The SPA needs `API_BASE_URL` (server) but this is not in any example file.
- There is no root README that explains how the three repos work together.

## Tasks

- [ ] Create a workspace repo or folder (for example `leetcode-dev`) with a `docker-compose.yml`: PostgreSQL, API, SPA.
- [ ] Add `.env.example` for each service with working local values.
- [ ] Use the same ports everywhere. Suggested: API `3000`, SPA `4321`, DB `5432`.
- [ ] Add one script: `make up` or `npm run dev:all`.
- [ ] Write `README.md`: prerequisites, 5 setup steps, how to run tests, common errors.
- [ ] Ask one student who did not write the setup to follow it from zero and fix problems.

## Acceptance criteria

- On a clean machine: clone, copy `.env`, run one command, open the SPA and see the home page.
- The API connects to the database and runs migrations and seed (see `API-027`).
- All READMEs show the same ports.
