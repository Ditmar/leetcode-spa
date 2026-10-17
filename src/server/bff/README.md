# BFF (Backend for Frontend) — SPA-036 (A + B)

Decision `X-002`: the **Astro server keeps the tokens in HttpOnly cookies**. The browser
only talks to Astro (same origin) and never sees a token. The API (`api-leetcode`)
still owns login: it checks passwords and creates, refreshes and revokes tokens.

```
Browser ──/api/*──▶ Astro BFF ──Authorization: Bearer──▶ api-leetcode
         (cookies)              (no browser cookies)
```

## Structure (SOLID, ports & adapters)

Same layers as `api-leetcode` (`domain` → `application` → `infrastructure`).
Inner layers never import outer layers.

```
src/server/bff/
├── domain/                         # pure types and contracts, no Astro, no fetch
│   ├── session-tokens.ts
│   ├── auth-user.ts                # AuthUser / SessionView (what the browser sees) + mapper
│   ├── access-token-expiry.ts      # reads JWT `exp` for the cookie lifetime
│   ├── errors.ts                   # RefreshFailed, BodyTooLarge, UpstreamTimeout, UpstreamUnavailable
│   └── ports/                      # interfaces (Dependency Inversion)
│       ├── auth-api.ts             # login / signup / logout / me in the API
│       ├── token-store.ts          # read/save/clear tokens
│       ├── token-refresher.ts      # refresh token → new access token
│       ├── upstream-client.ts      # send one request to the API
│       ├── route-policy.ts         # allow-list
│       ├── request-guard.ts        # CSRF and future checks
│       └── body-reader.ts          # body with size limit
├── application/                    # use cases, only depend on ports
│   ├── auth/                       # Login, Signup, Logout, GetSession (SPA-036-A)
│   ├── proxy-api-request.ts        # guards → allow-list → body → send → refresh once → retry
│   ├── single-flight-token-refresher.ts   # decorator: parallel requests share one refresh
│   └── proxy-responses.ts          # JSON errors { code, message } + safe response headers
├── infrastructure/                 # adapters (Astro, fetch, env)
│   ├── auth/                       # FetchAuthApi, zod body schemas, getSession(cookies)
│   ├── config/bff-config.ts        # reads env variables
│   ├── cookies/                    # cookie contract + AstroCookieTokenStore
│   ├── http/                       # FetchUpstreamClient, ApiTokenRefresher, LimitedBodyReader
│   ├── routing/                    # API_ALLOW_LIST (data) + AllowListRoutePolicy (logic)
│   ├── security/origin-csrf-guard.ts
│   └── composition/                # composition root (the only `new`s)
│       ├── bff-container.ts        # wires everything; proxy and auth share ONE refresher
│       ├── create-api-proxy-route.ts
│       └── create-auth-routes.ts
├── __tests__/                      # unit tests with mocked fetch
└── index.ts                        # public exports for auth routes (SPA-036-A) and middleware (SPA-007)
```

How SOLID shows up:

| Principle                 | Where                                                                                                                                                                                            |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **S**ingle responsibility | Each class does one thing: `OriginCsrfGuard` only checks origin, `LimitedBodyReader` only reads the body, `AllowListRoutePolicy` only matches paths.                                             |
| **O**pen/closed           | New check (e.g. rate limit) = new `RequestGuard` added to the `guards` array. New endpoint = one line in `api-allow-list.ts`. Single-flight is a decorator; `ApiTokenRefresher` was not changed. |
| **L**iskov                | Any `TokenStore` (cookies or the in-memory fake used in tests) works in `ProxyApiRequest`.                                                                                                       |
| **I**nterface segregation | Small ports. `AstroCookieTokenStore` needs only `CookieJar` (`get/set/delete`), not all of `AstroCookies`.                                                                                       |
| **D**ependency inversion  | `ProxyApiRequest` depends on interfaces; concrete classes are wired only in `create-api-proxy-route.ts`.                                                                                         |

## Auth routes `src/pages/api/auth/*` (SPA-036-A)

| Route                   | Body                            | Success                                                          | Errors                                  |
| ----------------------- | ------------------------------- | ---------------------------------------------------------------- | --------------------------------------- |
| `POST /api/auth/login`  | `{ email, password }`           | `200 { user, expiresAt }` + both cookies                         | `400`, `401 INVALID_CREDENTIALS`, `403` |
| `POST /api/auth/signup` | `{ username, email, password }` | `201 { user, expiresAt }` + both cookies (logs in)               | `400`, `409 USER_ALREADY_EXISTS`, `403` |
| `POST /api/auth/logout` | –                               | `204`, revokes the refresh token in the API, clears both cookies | `403`                                   |
| `GET /api/auth/me`      | –                               | `200 { user, expiresAt }` (refreshes if needed)                  | `401`                                   |

- Responses **never** include `accessToken` or `refreshToken`.
- `user` has the SPA shape `{ id, username, email, avatarUrl?, role }`. The API today sends
  `name` and no `role`, so the BFF maps `name → username` and `role → "user"` (see `domain/auth-user.ts`).
- Login, signup and logout use the same CSRF guard as the proxy.
- Logout clears the cookies even if the API call fails.

### `getSession(cookies)` for the middleware (SPA-007) and pages

```ts
import { getSession } from '../server/bff';

// src/middleware.ts
const session = await getSession(context.cookies, { hostname: context.url.hostname });
context.locals.user = session?.user ?? null;
```

It refreshes an expired access token by itself, returns `null` when there is no valid
session, and never throws (if the API is down it logs and returns `null`).

## Proxy `src/pages/api/[...path].ts` (SPA-036-B)

1. **CSRF** – `POST/PUT/PATCH/DELETE` must have `Origin` = our site (or one in
   `BFF_ALLOWED_ORIGINS`); without `Origin`, `Sec-Fetch-Site` must be `same-origin`. Otherwise **403**.
2. **Allow-list** – path + method must be in `infrastructure/routing/api-allow-list.ts`, otherwise **404**.
   Encoded characters, `..` and `//` are always rejected. `/auth/*` is not proxied.
3. **Body limit** – bigger than `BFF_MAX_BODY_BYTES` → **413**.
4. **Forward** – `{API_BASE_URL}{path}{query}` with `Authorization: Bearer <lc_access_token>`.
   Only `Accept`, `Accept-Language`, `Content-Type`, `If-None-Match` and `X-Request-Id` are
   forwarded. **The browser `Cookie` header is never sent to the API.** `Set-Cookie` from the
   API is never sent to the browser.
5. **Refresh once** – on **401** (or when the access cookie is missing but the refresh cookie
   exists) the BFF calls `POST {API_BASE_URL}/auth/refresh`, saves the new cookie and repeats
   the request **one time**. Parallel requests with the same refresh token share one refresh
   (`SingleFlightTokenRefresher`).
6. **Refresh fails** (API answers 4xx) → both cookies are cleared → **401** `{ code: "UNAUTHORIZED" }`.
   If the API is down (5xx / network) the cookies are kept and the proxy answers **502**.
7. **Timeout** – `BFF_UPSTREAM_TIMEOUT_MS` → **504**. API unreachable → **502**.
8. **X-Request-Id** – forwarded if the browser sends a valid one, otherwise generated; always
   returned in the response.

### Add a new endpoint

Add one line to `API_ALLOW_LIST` and one case to `__tests__/allow-list-route-policy.test.ts`.

## Using the cookie helper elsewhere

```ts
import { AstroCookieTokenStore, OriginCsrfGuard, loadBffConfig } from '../../../server/bff';

const config = loadBffConfig();
const tokens = new AstroCookieTokenStore(cookies, {
  isProduction: config.isProduction,
  hostname: url.hostname,
});
tokens.save({ accessToken, refreshToken }); // after login
tokens.clear(); // after logout

const csrf = new OriginCsrfGuard(config.allowedOrigins).check(request);
if (!csrf.allowed) return jsonError(csrf.status, csrf.code, csrf.message);
```
