# CD-007: Make the environment variable templates match the apps

| Field | Value |
| --- | --- |
| Repo | leetcode-cd |
| Type | Bug |
| Priority | P1 |
| Size | M |
| Phase | 1 - Stabilize and secure |
| Depends on | API-011, SPA-009 |

## Problem

The `variables.example.env` files do not match what the apps read.

**API** (`config/custom-environment-variables.json`) reads: `PORT`, `ENV`, `LOG_LEVEL`, `DATABASE_URL`, `JWT_SECRET`, `JWT_EXPIRES_IN`, `JWT_SALT_ROUNDS`, `JWT_REFRESH_TOKEN_SECRET`, `JWT_REFRESH_TOKEN_EXPIRES_IN`.

The template lists: `NODE_ENV`, `PORT`, `CORS_ORIGIN`, `JWT_SECRET`, `JWT_EXPIRES_IN`, `DATABASE_URL`, `RATE_LIMIT_MAX`, `RATE_LIMIT_WINDOW_MS`, `REQUEST_TIMEOUT_MS`.

- Missing in the template: `ENV`, `LOG_LEVEL`, `JWT_SALT_ROUNDS`, `JWT_REFRESH_TOKEN_*`.
- In the template but not read by the API today: `CORS_ORIGIN`, `RATE_LIMIT_*`, `REQUEST_TIMEOUT_MS` (see `API-010`).
- Danger: the API has **fake default values** in `config/default.json`. If a variable is missing in Railway, the API starts with a public secret (see `API-002`).

**SPA** template:

- The title says `my-app`.
- `NODE_ENV=prod` (normal value is `production`).
- Lists `VITE_*` values as runtime variables, but they are fixed at build time (see `SPA-009`).
- Does not list `API_BASE_URL`, which the SPA server needs to find the API.

## Tasks

- [ ] After `API-011` and `SPA-009`, rewrite both templates.
- [ ] For each variable write: required or optional, secret or not, example value, who uses it.
- [ ] Write a script `scripts/check-env.sh <app> <env>` that uses the Railway API to list the variable **names** (never values) of a service and compares them with the template.
- [ ] Run this check in `deploy.yml` before a deploy and fail if a required variable is missing.
- [ ] Add the variables that connect the services (`API_BASE_URL` for the SPA, `CORS_ORIGIN` for the API).

## Acceptance criteria

- A deploy to ppd fails with a clear message if `JWT_SECRET` is not set in Railway.
- Templates and app configuration list the same variable names (verified by the script).

## Update after decision X-004 (Piston + RabbitMQ)

Add the variables of the code execution system for the API and the worker: `RABBITMQ_URL`, `PISTON_URL`, `PISTON_TOKEN`, execution limits, and worker concurrency. Create a template for the worker too (`CD-018`).
