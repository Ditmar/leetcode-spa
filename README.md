# LeetCode SPA — Local development with Docker

This guide explains how to start the LeetCode SPA local environment with Docker Compose, including PostgreSQL, the Express API, the Astro/React SPA, RabbitMQ, Piston and a test worker.

## Prerequisites

- Git.
- Docker Desktop with Docker Compose.
- Node.js and npm to run the start command.
- Available ports: 3000, 4321, 5432, 5672, 15672 and 2000.
- Internet connection to download the images and dependencies.

## Setup in 5 steps

### 1. Clone the repositories

The repositories must be in sibling folders:

```text
ticket-x/
├── leetcode-spa/
└── api-leetcode/
```

In PowerShell:

```powershell
mkdir ticket-x
cd ticket-x

git clone https://github.com/Ditmar/leetcode-spa.git
git clone https://github.com/Ditmar/api-leetcode.git

cd leetcode-spa
```

The `api-leetcode` folder is required because Docker Compose mounts the API code from `../api-leetcode`.

### 2. Prepare the environment variables

From the `leetcode-spa` folder:

```powershell
Copy-Item .env.example .env
```

The `.env.example` file contains sample values for local development. Do not use its secrets in production.

### 3. Start Docker Desktop

Open Docker Desktop and check that the Docker engine is running:

```powershell
docker compose version
docker compose config --quiet
```

### 4. Start the full environment

Run:

```powershell
npm run dev:all
```

This command uses Docker Compose to build the worker and start the services.

Piston uses `privileged: true` only for local development, because its isolation mechanism requires those permissions. Do not use this configuration in production. All ports published by Docker Compose are bound to `127.0.0.1`, so they are only reachable from the local machine.

Piston may need extra Docker permissions on some systems. Docker Desktop on Windows or macOS works with the WSL2 or the virtual machine backend. If the `piston` container does not start, check the [Piston documentation](https://github.com/engineer-man/piston).

The Piston image is pinned by digest to reproduce the same version, instead of relying on `latest`. The digest can be found in the [official Piston package](https://github.com/engineer-man/piston/pkgs/container/piston).

During startup:

- PostgreSQL starts the database.
- The API installs dependencies and runs `prisma generate` and `prisma migrate deploy`.
- The SPA starts the Astro development server.
- RabbitMQ starts the queue system.
- Piston starts the code execution service.
- `piston-init` checks and installs JavaScript 20.11.1 and Python 3.12.0.
- The worker waits for RabbitMQ and for `piston-init` to finish successfully.

On a fresh install, downloading the dependencies and installing the languages can take about 3 to 5 minutes.

### 5. Verify the services

Open another terminal and run:

```powershell
docker compose ps -a
```

Local addresses:

| Service             | Address                               |
| ------------------- | ------------------------------------- |
| SPA                 | http://localhost:4321                 |
| API                 | http://localhost:3000/health          |
| RabbitMQ Management | http://localhost:15672                |
| Piston              | http://localhost:2000/api/v2/runtimes |
| PostgreSQL          | localhost:5432                        |

The `piston-init` service must finish with status `Exited (0)`. This status means that its initialization completed successfully.

Additional checks:

```powershell
docker compose logs piston-init
docker compose logs worker
```

## Useful commands

Start the environment in the background:

```powershell
docker compose up -d --build
```

Stop the containers without removing the volumes:

```powershell
docker compose down
```

View the logs:

```powershell
docker compose logs --tail 50
```

Check the Prisma migrations:

```powershell
docker compose exec api npx prisma migrate status
```

**Warning:** `docker compose down -v` also removes the persistent volumes, including the local PostgreSQL and RabbitMQ data and the languages installed in Piston.

## Running the tests

| Command                 | What it does                   |
| ----------------------- | ------------------------------ |
| `npm run test:run`      | Run all Vitest tests once      |
| `npm test`              | Run Vitest in watch mode       |
| `npm run test:coverage` | Run the tests with coverage    |
| `npm run lint`          | Run ESLint                     |
| `npm run format:check`  | Check formatting with Prettier |

See [TESTING.md](TESTING.md) for the test setup.

## Common problems

**A port is already in use.** Docker Compose publishes ports 3000, 4321, 5432, 5672, 15672 and 2000 on `127.0.0.1`. If another program or container already uses one of them, the service that needs that port does not start. Check which process uses the port with `netstat -ano | findstr :3000` (change the port as needed), stop it, and run `docker compose up -d --build` again.

**The `api-leetcode` folder is missing.** Docker Compose mounts `../api-leetcode` into the `api` container and runs `npm ci`, `prisma generate`, `prisma migrate deploy` and `npm run dev` there. Without that folder, the `api` container has no code to install or run, and the SPA cannot reach the API. Clone `api-leetcode` next to `leetcode-spa` (see step 1) and start the environment again.

**`.env` is missing.** The `db` and `api` services read `POSTGRES_*` and `JWT_*` from `.env`. Without it, those values are empty: PostgreSQL gets no user or password, and the API gets an incomplete `DATABASE_URL` and no JWT secrets. Run `Copy-Item .env.example .env` (step 2).

**`piston-init` does not finish with `Exited (0)`.** The worker starts only after `piston-init` finishes successfully, so it does not start either. Check the logs with `docker compose logs piston-init piston`. `local-piston/init-piston.js` exits with code 1 when Piston does not answer after 60 attempts (about 5 minutes) or when a language is not ready within 20 minutes. Run it again with `docker compose up piston-init`, then `docker compose up -d worker`. Languages that are already installed are skipped. `docker compose down -v` removes the installed languages, so the next start installs them again.

## Current limitations and dependencies

- The API depends on the sibling `api-leetcode` repository.
- The six existing migrations apply correctly, but the current Prisma schema includes `Course` and `Enrollment`, whose tables do not yet exist in the database created by those migrations.
- The API repository checked does not currently include a seed file or command. Initial data setup is pending the corresponding API integration.
- The included worker is a local RabbitMQ → Piston integration test. It is not connected to the real exam grading process and does not save results in PostgreSQL.
- Piston initialization has been verified with the languages already installed; the full process with a new volume and a from-scratch install still needs to be validated.

---

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
# Server-only (Astro SSR / API routes). API origin only, without /api (ADR-003).
# Docker Compose sets API_BASE_URL=http://api:3000 for the spa service.
API_BASE_URL=http://localhost:3000

# Submissions polling and execution (optional overrides)
VITE_POLLING_INTERVAL_MS=1000
VITE_POLLING_BACKOFF_STEP_MS=500
VITE_MAX_POLLING_INTERVAL_MS=5000
VITE_MAX_POLL_ATTEMPTS=20
VITE_MAX_CODE_SIZE_BYTES=65536
```

ADR-003 (proposed) defines `API_BASE_URL` as the API origin only, without the `/api` prefix. The browser calls `/api/...` on Astro, and the BFF described in [Auth cookies and API proxy (BFF)](#auth-cookies-and-api-proxy-bff--spa-036) forwards those requests to the API.

#### Submissions Polling & Execution variables

| Variable                       | Description                                         | Default         |
| :----------------------------- | :-------------------------------------------------- | :-------------- |
| `VITE_POLLING_INTERVAL_MS`     | Initial polling delay in ms                         | `1000`          |
| `VITE_POLLING_BACKOFF_STEP_MS` | Step added to delay on each subsequent poll attempt | `500`           |
| `VITE_MAX_POLLING_INTERVAL_MS` | Upper cap for polling delay in ms                   | `5000`          |
| `VITE_MAX_POLL_ATTEMPTS`       | Maximum number of poll attempts before timeout      | `20`            |
| `VITE_MAX_CODE_SIZE_BYTES`     | Maximum allowed code size in bytes                  | `65536` (64 KB) |

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

### Running the apiClient tests

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

### Auth routes

| Route                   | What it does                                                                                         |
| :---------------------- | :--------------------------------------------------------------------------------------------------- |
| `POST /api/auth/login`  | `{ email, password }` → sets both cookies, returns `{ data: { user, expiresAt } }` (no tokens)       |
| `POST /api/auth/signup` | `{ username, email, password }` → creates the user, logs in, returns `{ data: { user, expiresAt } }` |
| `POST /api/auth/logout` | revokes the refresh token in the API and clears both cookies (`204`)                                 |
| `GET /api/auth/me`      | current `{ data: { user, expiresAt } }` or `401`                                                     |
| `/api/*` (proxy)        | any other allowed API call, with `Authorization: Bearer` added by the server                         |

Server-side code (middleware, `.astro` pages) uses `getSession(cookies)` from `src/server/bff`.

### Cookies

| Cookie             | Content                | Path   | Lifetime                                                             | Flags                                              |
| :----------------- | :--------------------- | :----- | :------------------------------------------------------------------- | :------------------------------------------------- |
| `lc_access_token`  | API access token (JWT) | `/`    | until the JWT `exp` (or `expiresAt` from the API); 15 min if unknown | `HttpOnly`, `SameSite=Lax`, `Secure` in production |
| `lc_refresh_token` | API refresh token      | `/api` | 7 days                                                               | `HttpOnly`, `SameSite=Lax`, `Secure` in production |

`Secure` is not set on `localhost` / `127.0.0.1`, so login works on `http://localhost:4321`.

> The refresh cookie uses `path=/api` (not `/api/auth`): the browser only sends a cookie when
> the request path starts with the cookie path, and the proxy (`/api/problems`, `/api/submissions`...)
> must read it to refresh the session after a `401`.

### Environment variables (server only — never `PUBLIC_`)

| Variable                  | Required | Default   | Description                                                                                                                      |
| :------------------------ | :------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `API_BASE_URL`            | yes      | –         | API **origin** without `/api` (ADR-003), e.g. `http://localhost:3000`. The BFF adds `/api`. A value ending in `/api` also works  |
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
