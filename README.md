# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

---

## API Client (`apiClient`)

Base HTTP client used by all service modules. Works isomorphically in Astro SSR, API routes, and React browser islands.

**Location:** `src/services/api/`

| File                 | Purpose                                                            |
| :------------------- | :----------------------------------------------------------------- |
| `apiClient.ts`       | Client factory — `get / post / put / patch / delete`               |
| `apiClient.types.ts` | `ApiResponse<T>`, `ApiError`, `RequestConfig` interfaces           |
| `apiClient.utils.ts` | `buildUrl`, `normalizeError`, `isApiError`, `statusToCode` helpers |
| `apiClient.test.ts`  | 30 unit tests (Vitest)                                             |

### Environment variables

```bash
# .env — server-only (Astro SSR / API routes)
API_BASE_URL=http://localhost:4000/api/v1

# .env — public, exposed to the browser
PUBLIC_API_BASE_URL=http://localhost:4000/api/v1
```

### Basic usage

```ts
import { apiClient } from '@/services/api/apiClient';

// GET — fully typed response
const { data } = await apiClient.get<Problem[]>('/problems');

// POST with a body
const { data: created } = await apiClient.post<Problem>('/problems', {
  title: 'Two Sum',
  difficulty: 'Easy',
});

// PUT / PATCH / DELETE
await apiClient.put('/problems/1', { difficulty: 'Medium' });
await apiClient.patch('/problems/1', { title: 'Updated' });
await apiClient.delete('/problems/1');
```

### Per-request options (`RequestConfig`)

```ts
const controller = new AbortController();

await apiClient.get('/problems', {
  headers: { 'X-Trace-Id': 'abc-123' }, // extra / override headers
  signal: controller.signal, // cancellation
  credentials: 'same-origin', // override fetch credentials mode
});

controller.abort(); // cancel in-flight request
```

### Authentication

Token resolution order (browser only — server depends on `setAuthToken`):

1. **`setAuthToken(token)`** — injected by `authService` (SVC-002)
2. **`localStorage.auth_token`** — persisted session fallback
3. **`auth_token` cookie** — SSR-set / legacy fallback
4. No `Authorization` header sent if no token is found

```ts
import { setAuthToken } from '@/services/api/apiClient';

// Called by authService after login
setAuthToken('eyJhbGciOiJIUzI1NiJ9...');

// Called on logout
setAuthToken(null);
```

### Error handling

All non-2xx responses, network failures, and JSON parse errors throw a normalised `ApiError`:

```ts
import { apiClient, isApiError } from '@/services/api/apiClient';

try {
  const { data } = await apiClient.get<Problem>('/problems/999');
} catch (err) {
  if (isApiError(err)) {
    console.error(err.status); // e.g. 404
    console.error(err.code); // e.g. "NOT_FOUND"
    console.error(err.message); // e.g. "Problem not found"
  }
}
```

| Scenario                      | `status`         | `code`                                 |
| :---------------------------- | :--------------- | :------------------------------------- |
| Non-2xx HTTP response         | HTTP status code | From body or `statusToCode()` fallback |
| Network failure (no response) | `500`            | `INTERNAL_SERVER_ERROR`                |
| Request aborted               | `0`              | `UNKNOWN_ERROR`                        |
| Valid 2xx but invalid JSON    | `500`            | `PARSE_ERROR`                          |

### Response envelope

Every endpoint is expected to return the standard envelope:

```ts
interface ApiResponse<T> {
  data: T;
  meta?: {
    totalCount?: number;
    pageCount?: number;
    currentPage?: number;
    perPage?: number;
  };
}
```

### Running the tests

```sh
npx vitest run src/services/api/apiClient.test.ts
```

## Development plan

The shared plan for API, SPA and CD is available in [docs/development-plan](docs/development-plan/README.md). It includes the development phases, review findings, all 109 ticket specifications and [links to their GitHub issues](docs/development-plan/ISSUE-LINKS.md).

---

## Auth cookies and API proxy (BFF) — SPA-036

The Astro server keeps the tokens in **HttpOnly** cookies (decision `X-002`). Browser
JavaScript never sees them: `document.cookie` and `localStorage` have no tokens.
The browser calls `/api/...` on the Astro host; Astro adds `Authorization: Bearer ...`
and calls the real API. Details and architecture: [`src/server/bff/README.md`](src/server/bff/README.md).

### Cookies

| Cookie             | Content                | Path   | Lifetime                                                             | Flags                                              |
| :----------------- | :--------------------- | :----- | :------------------------------------------------------------------- | :------------------------------------------------- |
| `lc_access_token`  | API access token (JWT) | `/`    | until the JWT `exp` (or `expiresAt` from the API); 15 min if unknown | `HttpOnly`, `SameSite=Lax`, `Secure` in production |
| `lc_refresh_token` | API refresh token      | `/api` | 7 days                                                               | `HttpOnly`, `SameSite=Lax`, `Secure` in production |

`Secure` is not set on `localhost` / `127.0.0.1`, so login works on `http://localhost:4321`.

> The refresh cookie uses `path=/api` (not `/api/auth`): the browser only sends a cookie when
> the request path starts with the cookie path, and the proxy (`/api/courses`, `/api/problems`...)
> must read it to refresh the session after a `401`.

### Environment variables (server only — never `PUBLIC_`)

| Variable                  | Required | Default   | Description                                                                                                                      |
| :------------------------ | :------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `API_BASE_URL`            | yes      | –         | Real API including its prefix, e.g. `http://localhost:3000/api`                                                                  |
| `BFF_UPSTREAM_TIMEOUT_MS` | no       | `10000`   | Timeout for each call to the API (→ `504`)                                                                                       |
| `BFF_MAX_BODY_BYTES`      | no       | `1048576` | Max request body size (→ `413`)                                                                                                  |
| `BFF_ALLOWED_ORIGINS`     | no       | –         | Extra origins (comma separated) allowed to send `POST/PUT/PATCH/DELETE`. `https://$RAILWAY_PUBLIC_DOMAIN` is added automatically |
| `NODE_ENV` / `ENV`        | no       | –         | `production` turns on the `Secure` cookie flag                                                                                   |

### Proxy responses

| Case                                                 | Status | Body `code`            |
| :--------------------------------------------------- | :----- | :--------------------- |
| `POST/PUT/PATCH/DELETE` from another origin          | `403`  | `FORBIDDEN`            |
| Path or method not in the allow-list                 | `404`  | `NOT_FOUND`            |
| Body too large                                       | `413`  | `PAYLOAD_TOO_LARGE`    |
| Session expired and refresh failed (cookies cleared) | `401`  | `UNAUTHORIZED`         |
| API down                                             | `502`  | `UPSTREAM_UNAVAILABLE` |
| API timeout                                          | `504`  | `UPSTREAM_TIMEOUT`     |
