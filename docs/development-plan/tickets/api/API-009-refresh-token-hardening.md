# API-009: Make refresh tokens safer

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Security |
| Priority | P1 |
| Size | L |
| Phase | 1 - Stabilize and secure |
| Depends on | X-002 |

## Problem

The refresh token flow works but has weak points.

1. The refresh token is saved as **plain text** in the database. If the database leaks, all tokens can be used.
2. There is **no rotation**. The same token is valid for 7 days and can be used many times. A stolen token is not detected.
3. `POST /api/auth/refresh` returns `404` when the token is unknown. It should be `401`.
4. `POST /api/auth/logout` is public and returns `404` if the token is unknown. Logout should be safe to repeat.
5. `AuthLogout.executeAll` exists but no route uses it. It also uses a dynamic `import()` inside the method for no reason.
6. `RefreshTokenRepository.deleteExpired()` is never called, so old tokens stay forever.
7. The config has `refreshTokenSecret`, but the code never uses it (refresh tokens are random UUIDs).

## Tasks

- [ ] Save only a hash (SHA-256) of the refresh token. Compare hashes.
- [ ] Rotate on every refresh: revoke the old token, create a new one, return it.
- [ ] If a revoked token is used again, revoke **all** tokens of that user (possible theft).
- [ ] Return `401` for unknown, expired and revoked tokens.
- [ ] Make logout return `204` even if the token is unknown.
- [ ] Add `POST /api/auth/logout-all` (needs login) that uses `executeAll`.
- [ ] Add a scheduled cleanup for expired tokens (simple `setInterval`, or a script run by cron).
- [ ] Remove `refreshTokenSecret` from config if it is still unused.
- [ ] Follow the cookie or body format chosen in `X-002`.

## Acceptance criteria

- The database has no readable refresh tokens.
- Using the same refresh token twice fails the second time.
- Tests cover: valid refresh, expired, revoked, reuse, logout, logout-all.

## Update after decision X-002 (Astro keeps the tokens in cookies)

The refresh token stays in the JSON body of `/auth/login` and `/auth/refresh`. The Astro server puts it in a cookie. The API does not set cookies. Rotation is still needed: Astro must save the **new** refresh token from each `/auth/refresh` response.
