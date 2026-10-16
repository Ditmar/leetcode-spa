# LeetCode SPA

Frontend for a programming practice platform, built with Astro, React, and TypeScript. Astro serves pages and renders them on the server; React provides interactive components. The repository also includes a component catalog with documentation, Storybook stories, and tests.

## Requirements

- Node.js 20.3 or later.
- Yarn Classic 1.22.21–1.22.22. CI uses Yarn 1.22.22, and `yarn.lock` pins dependency versions.

## Quick start

From the repository root:

```bash
corepack enable
corepack prepare yarn@1.22.22 --activate
yarn install --frozen-lockfile
yarn dev
```

Open <http://localhost:4321>. To build and preview the application:

```bash
yarn build
yarn preview
```

The home page can run in development without an API URL configured. Features that call the API need a server available at the corresponding URL.

## Scripts

| Command | Description |
| --- | --- |
| `yarn dev` | Starts Astro in development mode. |
| `yarn build` | Builds the application into `dist/`. |
| `yarn preview` | Previews the production build locally. |
| `yarn start` | Runs the Astro command configured by the project. |
| `yarn astro -- --help` | Shows the Astro CLI help. |
| `yarn lint` | Runs ESLint. |
| `yarn lint:fix` | Runs ESLint and attempts to fix issues automatically. |
| `yarn format` | Formats files with Prettier. |
| `yarn format:check` | Checks formatting with Prettier. |
| `yarn test` | Runs Vitest in interactive watch mode. |
| `yarn test:run` | Runs all tests once. |
| `yarn test:ui` | Opens the Vitest UI. |
| `yarn test:coverage` | Runs tests with coverage. |
| `yarn test:watch` | Runs Vitest in watch mode. |
| `yarn storybook` | Starts Storybook on port 6006. |
| `yarn build-storybook` | Builds the static Storybook into `storybook-static/`. |
| `yarn release` | Runs `release-it` to prepare a stable release. |
| `yarn release:rc` | Runs `release-it` to prepare a release candidate (RC). |

## Environment variables

`VITE_*` variables are included in browser code at build time. Do not put secrets in them. Values below are the defaults defined by the current code/configuration. You do not need a `.env` file to start the local home page.

| Variable | Purpose | Default |
| --- | --- | --- |
| `API_BASE_URL` | API base URL for requests made on the Astro server. In the browser, the API client uses `/api`. | `http://localhost:3000` on the server. |
| `PUBLIC_EXPLORE_API_PATH` | Path prefix for Explore service endpoints. It must start with `/` and contain no spaces. | `/explore`. |
| `API_CACHE_TTL` | TTL in milliseconds for the `fetchWithCache` utility. | `5000`. The utility may not be connected to active pages. |
| `VITE_POLLING_INTERVAL_MS` | Interval between submission status polls, in milliseconds. | `1500`. |
| `VITE_MAX_POLL_ATTEMPTS` | Maximum number of submission status polls. | `20`. |
| `VITE_MAX_CODE_SIZE_BYTES` | Maximum code size accepted by the submissions service, in bytes. | `65536` (64 KiB). |
| `VITE_BASE_PATH` | Application base path prefix. | Empty string. |
| `VITE_DEFAULT_CACHE_TTL` | Default application configuration TTL, in milliseconds. | `300000`. |
| `VITE_NAV_HOME_ID`, `VITE_NAV_HOME_LABEL`, `VITE_NAV_HOME_HREF` | Declared settings for the Home navigation item. | `home`, `Home`, `/`. |
| `VITE_NAV_EXPLORE_ID`, `VITE_NAV_EXPLORE_LABEL`, `VITE_NAV_EXPLORE_HREF` | Declared settings for the Explore item. | `explore`, `Explore`, `/explore`. |
| `VITE_NAV_PROBLEMS_ID`, `VITE_NAV_PROBLEMS_LABEL`, `VITE_NAV_PROBLEMS_HREF` | Declared settings for the Problems item. | `problems`, `Problems`, `/problems`. |
| `VITE_NAV_CONTEST_ID`, `VITE_NAV_CONTEST_LABEL`, `VITE_NAV_CONTEST_HREF` | Declared settings for the Contest item. | `contest`, `Contest`, `/contest`. |
| `VITE_NAV_DISCUSS_ID`, `VITE_NAV_DISCUSS_LABEL`, `VITE_NAV_DISCUSS_HREF` | Declared settings for the Discuss item. | `discuss`, `Discuss`, `/discuss`. |
| `PORT` | Astro server port. | `4321`. |
| `RAILWAY_PUBLIC_DOMAIN` | Additional host allowed by Astro on Railway. | Unset locally; the production domain is also allowed in `astro.config.mjs`. |
| `ENV` | Controls whether Astro loads `.env` during configuration. | Astro attempts to load `.env` unless this is `production`. |

The `VITE_NAV_*` variables are declared in `src/config/env.json`, but their mappings are nested and the current loader in `src/utils/config.ts` does not iterate over them individually. Use the values in `src/config/default.json`; do not rely on these overrides until the loader is fixed.

## Project structure

| Path | Contents |
| --- | --- |
| `src/pages/` | Astro routes. Each `.astro` file directly in this folder defines a page. |
| `src/pages/ProblemList/` | ProblemList component, types, utilities, story, and tests. It currently lives under `pages`; SPA-014 proposes moving it to a component folder. |
| `src/app/` | Application flow components, such as authentication. |
| `src/ui/` | Interface components used by pages. |
| `src/component-catalog/` | Reusable components with styles, types, tests, stories, and documentation. |
| `src/style-library/` | Visual library components, resources, and stories. |
| `src/services/` | API client and domain services, such as auth, problems, submissions, and explore. |
| `src/layouts/` | Shared Astro layouts. |
| `src/config/` | Default values and environment configuration mappings. |
| `src/context/` | Shared React contexts. |
| `src/test/` | Shared test configuration and utilities. |
| `public/` | Directly served resources, such as fonts and icons. |
| `.storybook/` | Storybook configuration. |

## Add a page

1. Create an `.astro` file directly in `src/pages/`; the file path determines the URL.
2. Reuse `src/layouts/BaseLayout.astro` when the page should share the general layout.
3. Import components from `src/ui/`, `src/app/`, or another appropriate folder. Use an Astro hydration directive for React components that need browser interactivity.
4. Run `yarn dev` and open the route in your browser.

Do not put helper components directly in `src/pages/`: Astro treats files in this folder as routes.

## Add a service

1. Create a domain folder under `src/services/` if one does not already exist.
2. Keep HTTP calls and integration logic in the service. Use `src/services/api/apiClient.ts` for shared requests where appropriate.
3. Define domain types alongside the service, for example in a `*.types.ts` file.
4. Add tests next to the service using the `*.test.ts` pattern and run them with `yarn test:run`.

The API client provides `get`, `post`, `put`, `patch`, and `delete` methods. Its typed response is `ApiResponse<T>`; confirm each endpoint's contract before assuming the real API returns a `{ data, meta }` envelope.

## Tests

Vitest is configured with jsdom, the React plugin, and the global setup file `src/test/setup.ts`. Tests live under `src/` and match the `*.test.*` or `*.spec.*` patterns.

```bash
yarn test:run
```

To run one test file:

```bash
yarn vitest run src/services/api/apiClient.test.ts
```

## Storybook

Start Storybook locally with:

```bash
yarn storybook
```

Open <http://localhost:6006>. To build the static site:

```bash
yarn build-storybook
```

Stories live alongside components and are discovered from `src/**/*.stories.*` and MDX files under `src/`.

## Plan de desarrollo

The shared plan for the SPA, API, and deployment is in [`docs/development-plan/`](docs/development-plan/README.md). It contains phases, review findings, and ticket specifications.
