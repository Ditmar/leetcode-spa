# API-039: Write the OpenAPI document and a real README

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Docs |
| Priority | P2 |
| Size | M |
| Phase | 2 - Connect SPA and API |
| Depends on | X-003 |

## Problem

The README still describes a "basic Express hello world": it shows only `GET /` and `GET /health`, a `hex/` folder tree that does not exist, and port `3001`. It does not list the real endpoints (auth, courses, tests), the environment variables, or the architecture.

There is no API documentation. The SPA team has to read controllers to know the request and response shapes. This is why the contracts do not match.

## Tasks

- [ ] Create an OpenAPI 3 file (`openapi.yaml`). You can generate it from Zod schemas (`zod-to-openapi`) or write it by hand.
- [ ] Serve it with Swagger UI at `/docs` (not in production, or protected).
- [ ] Rewrite the README: what it is, requirements, setup, env variables table, scripts, folder rules, how to add a module, how to run tests, how to deploy.
- [ ] Add a Postman or Bruno collection (optional).
- [ ] Add a CI check that the OpenAPI file is valid.

## Acceptance criteria

- Every endpoint is in the OpenAPI file with request and response examples.
- A student can run the API from the README alone.
- The SPA team can generate TypeScript types from the file (see `SPA-013`).
