# API-040: Add real health checks and graceful shutdown

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Chore |
| Priority | P2 |
| Size | S |
| Phase | 2 - Connect SPA and API |
| Depends on | API-021 |

## Problem

- `/health` uses `app.use`, so it answers every HTTP method, and it never checks the database. The API can say `OK` when the database is down.
- Prisma is closed on `beforeExit`. This event does **not** run when the process gets `SIGTERM` (the signal Railway sends when it stops a container). The close handlers in `prisma.ts` are in a file nobody imports.
- The server does not stop accepting new requests and does not wait for running requests.

## Tasks

- [ ] `GET /health/live`: always `200` if the process runs.
- [ ] `GET /health/ready`: runs `SELECT 1` and returns `503` if it fails.
- [ ] On `SIGTERM` and `SIGINT`: stop the HTTP server, wait for requests (with a timeout), close Prisma, then exit.
- [ ] Use the ready route for the Docker `HEALTHCHECK` (`API-018`) and for the CD health check (`CD-004`).

## Acceptance criteria

- With the database stopped, `/health/ready` returns `503`.
- `docker stop` ends the container in less than 10 seconds with a "closed" log message.
