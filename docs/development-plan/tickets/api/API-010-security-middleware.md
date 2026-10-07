# API-010: Add helmet, CORS, rate limit and request limits

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Security |
| Priority | P1 |
| Size | M |
| Phase | 1 - Stabilize and secure |
| Depends on | X-002 |

## Problem

`src/index.ts` only uses `express.json()` and `express.urlencoded()`.

- No `helmet` (security headers).
- No CORS rules. A browser on another domain cannot call the API (or we will open it too much by mistake).
- No rate limit. `/api/auth/login` can be attacked with unlimited password guesses.
- No `trust proxy` setting. Behind Railway, the client IP will be wrong.
- No request timeout.
- The CD template `leetcode-cd/apps/api-leetcode/variables.example.env` already lists `CORS_ORIGIN`, `RATE_LIMIT_MAX`, `RATE_LIMIT_WINDOW_MS` and `REQUEST_TIMEOUT_MS`, but the API does not read them.
- `TestController.submitTest` allows 100 answers with up to 50,000 characters of code each. That is about 5 MB. The default JSON limit (100 KB) would reject it. Choose a clear limit.

## Tasks

- [ ] Add `helmet`.
- [ ] Add `cors` with allowed origins from `CORS_ORIGIN` (comma list). `credentials` depends on `X-002`.
- [ ] Add `express-rate-limit`: global limit and a strict limit on `/auth/login`, `/auth/signup`, `/auth/refresh`.
- [ ] Set `app.set('trust proxy', 1)`.
- [ ] Set `express.json({ limit })` and document the value.
- [ ] Add the new variables to `config-schema.ts` and `.env.example`.
- [ ] Add a request timeout middleware.

## Acceptance criteria

- Response headers include the helmet headers.
- A request from a non-allowed origin has no CORS headers.
- The 11th login in one minute from the same IP returns `429` (use your chosen limit).
- Variables are documented.

## Update after decision X-002 (Astro keeps the tokens in cookies)

The browser does not call the API directly, so **CORS can stay closed** (or allow only the Astro server and local tools). Keep `helmet` and the rate limits. Behind the Astro server, all users can look like one IP. Forward the real client IP in a header (for example `X-Forwarded-For`) from the Astro proxy, and make the API trust it only from the Astro server. Otherwise the login rate limit blocks everyone at once.
