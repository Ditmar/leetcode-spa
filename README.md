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

## Auth routes (BFF)

The browser never sees the access token or the refresh token. Astro server routes call the real API, keep the tokens in `HttpOnly` cookies, and return only the user data to the browser.

**Location:** `src/pages/api/auth/` (routes) and `src/services/auth/` (helpers)

| File                                | Purpose                                                     |
| :---------------------------------- | :---------------------------------------------------------- |
| `src/pages/api/auth/login.ts`       | `POST /api/auth/login` — logs in, sets both cookies         |
| `src/pages/api/auth/signup.ts`      | `POST /api/auth/signup` — creates the account (no cookies)  |
| `src/pages/api/auth/logout.ts`      | `POST /api/auth/logout` — revokes the refresh token, clears both cookies |
| `src/pages/api/auth/me.ts`          | `GET /api/auth/me` — returns the current user               |
| `src/services/auth/cookies.ts`      | Set / clear / read the auth cookies                         |
| `src/services/auth/session.ts`      | `getSession(cookies)` for middleware and server-side pages  |
| `src/services/auth/authBff.ts`      | API paths, `callApi`, CSRF origin check, error mapping      |

### Cookies

| Cookie          | Lifetime            | Path        | Flags                                                        |
| :-------------- | :------------------ | :---------- | :----------------------------------------------------------- |
| `access_token`  | 15 minutes          | `/`         | `HttpOnly`, `SameSite=Lax`, `Secure` in production          |
| `refresh_token` | 7 days              | `/api/auth` | `HttpOnly`, `SameSite=Lax`, `Secure` in production          |

`Secure` is off outside production so cookies work on `http://localhost`. Names, lifetimes and paths are constants in `src/services/auth/cookies.ts`.

### Environment variables

```bash
# .env — server-only, never exposed to the browser
API_BASE_URL=http://localhost:4000/api/v1
```

### Responses

`login` and `me` return `{ user, expiresAt }` (milliseconds since epoch). Tokens are never included in any response body. Errors use `{ code, message }`.

### CSRF

`POST` routes check `Sec-Fetch-Site` (or the `Origin` header when it is missing) and return `403` if the request does not come from our own site.

### Reading the session on the server

```ts
import { getSession } from '@/services/auth/session';

const session = getSession(Astro.cookies); // { accessToken, expiresAt, userId } | null
```

`getSession` only decodes the token to read `exp` and `sub`; it does not verify the signature. The API verifies every request, so use it only to decide whether to show a page or redirect.

### Tests

```sh
yarn vitest run src/services/auth/cookies.test.ts src/services/auth/authRoutes.test.ts
```

## Development plan

The shared plan for API, SPA and CD is available in [docs/development-plan](docs/development-plan/README.md). It includes the development phases, review findings, all 109 ticket specifications and [links to their GitHub issues](docs/development-plan/ISSUE-LINKS.md).
