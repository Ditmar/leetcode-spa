# API-002: Remove default secrets from the config files

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Security |
| Priority | P0 |
| Size | S |
| Phase | 1 - Stabilize and secure |
| Depends on | None |

## Problem

`config/default.json` is in git and contains:

- `"secret": "your_jwt_secret_key"`
- `"refreshTokenSecret": "your_refresh_token_secret_key"`
- a database URL with `your_username:your_password`

The config schema (`src/config/config-schema.ts`) only checks that the secret has at least 10 characters. These placeholders pass this check. If `JWT_SECRET` is missing in Railway, the API **starts normally with a public secret**. Then anyone can create valid tokens for any user.

## Tasks

- [ ] Remove all secrets from `config/default.json`. Keep only safe defaults (port, log level).
- [ ] In production (`NODE_ENV=production`), make these variables required: `JWT_SECRET`, `DATABASE_URL`.
- [ ] Require `JWT_SECRET` to have at least 32 characters. Reject known placeholder values.
- [ ] If the config is invalid, stop the process with a clear error message (no stack trace with secrets).
- [ ] Keep `config/test.json` only with clearly fake test values.
- [ ] Check the real Railway variables for ppd and prod. Make sure the secret there is strong and not the placeholder.
- [ ] Update `.env.example` (see `API-011`).

## Acceptance criteria

- Starting the API in production without `JWT_SECRET` fails with a clear message.
- Starting with `JWT_SECRET=your_jwt_secret_key` also fails.
- `git grep your_jwt_secret_key` finds nothing in `config/`.

## Hints

The placeholder values stay in git history. If a real secret was ever the same, change it now.
