# API-028: Make the auth responses match the SPA contract

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Feature |
| Priority | P0 |
| Size | M |
| Phase | 2 - Connect SPA and API |
| Depends on | X-002, X-003 |

## Problem

The SPA expects a session like this:

```
{ user: { id, username, email, avatarUrl?, role }, accessToken, expiresAt }
```

The API returns:

- Login: `{ accessToken, refreshToken, user: { id, name, email, createdAt } }` (no `expiresAt`, no `role`, `name` instead of `username`).
- `GET /auth/me`: only the user object (no session wrapper).
- Refresh: `{ accessToken }` and needs `refreshToken` in the body.
- Signup needs `name`. The SPA sends `username`.
- The SPA calls `/auth/signin` and `/auth/signout`. The API has `/auth/login` and `/auth/logout`.

## Tasks

- [ ] Follow the decisions in `X-002` and `X-003`.
- [ ] Return `role` and `expiresAt` (ISO date or Unix time; choose one) in login and refresh responses. The real `role` comes from `API-026`; until then, return `"USER"`.
- [ ] Decide if the field is called `name` or `username`. Use the same name in API and SPA. If you keep both, document it.
- [ ] Make `GET /auth/me` return the format that the SPA needs.
- [ ] Do not rename old routes without a plan. Update the SPA in `SPA-001`.
- [ ] Update the OpenAPI document (`API-039`) and tests.

## Acceptance criteria

- The SPA can sign up, sign in, call `me`, refresh and sign out against a local API with no adapter code, or with a very small one.
- All responses are in the OpenAPI document.

## Update after decision X-002 (Astro keeps the tokens in cookies)

The API keeps returning tokens in the JSON body. The Astro server (`SPA-036`) turns them into cookies. Return `expiresAt` so Astro can set the cookie lifetime.
