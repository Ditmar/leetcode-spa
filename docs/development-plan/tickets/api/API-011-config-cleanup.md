# API-011: Fix the configuration and `.env.example`

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Bug |
| Priority | P1 |
| Size | M |
| Phase | 1 - Stabilize and secure |
| Depends on | API-002 |

## Problem

The configuration is confusing and some examples are wrong.

- `.env.example` says `BCRYPT_SALT_ROUNDS`, but the config reads `JWT_SALT_ROUNDS`.
- `.env.example` says `JWT_EXPIRES_IN=7d`, but the schema uses `z.coerce.number()`. The value `7d` becomes `NaN` and the API will not start.
- Units are mixed. `expiresIn: 30000` is given to `jsonwebtoken` as a number, which means **seconds** (about 8 hours). `refreshTokenExpiresIn: 604800000` is in **milliseconds**.
- The variable `ENV` (not `NODE_ENV`) controls `config.app.nodeEnv`. The logger checks for `'prod'` and Prisma checks for `'dev'`. The default is `development`. In production, the CD template sets `NODE_ENV` but not `ENV`, so production uses the pretty (slow) logger.
- `config/test.json` is almost a copy of `default.json`.
- `.env.example` has every line commented.
- `README.md` says port `3001`; the default port is `3000`.

## Tasks

- [ ] Use `NODE_ENV` (`development`, `test`, `production`) as the only environment name.
- [ ] Put the unit in the name: `JWT_ACCESS_TTL_SECONDS`, `JWT_REFRESH_TTL_SECONDS` (or parse strings like `15m`).
- [ ] Choose a short access token life (for example 15 minutes) and write why.
- [ ] Make `.env.example` a real working example for local development.
- [ ] Remove unused settings.
- [ ] Update the README and the CD template (`CD-007`).

## Acceptance criteria

- Copying `.env.example` to `.env` is enough to start the API locally.
- In production the logger uses JSON output.
- Every variable is documented in one table in the README.
