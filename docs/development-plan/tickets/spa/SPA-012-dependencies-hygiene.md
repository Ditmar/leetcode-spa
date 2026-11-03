# SPA-012: Clean the dependencies

| Field | Value |
| --- | --- |
| Repo | leetcode-spa |
| Type | Chore |
| Priority | P2 |
| Size | S |
| Phase | 1 - Stabilize and secure |
| Depends on | None |

## Problem

- `@storybook/blocks` is `9.0.0-alpha.17` (an alpha) while the other Storybook packages are `9.1.10`.
- `@release-it/conventional-changelog` is `release-it/conventional-changelog`. This is a GitHub shortcut, **not a version**. Builds are not repeatable, and a change in that repo changes our release tool (supply chain risk).
- Two date libraries: `dayjs` and `date-fns`.
- Two UI libraries: MUI and `@radix-ui/*`.
- `yaml` looks unused.
- `@types/react-i18next` is an old stub package (react-i18next has its own types).
- No automatic dependency updates or audit.

## Tasks

- [ ] Run `npx depcheck` and remove unused packages.
- [ ] Use a normal npm version for `@release-it/conventional-changelog`.
- [ ] Remove or update the alpha Storybook package.
- [ ] Keep only one date library.
- [ ] Run `yarn audit` and fix or note high issues.
- [ ] Add Dependabot or Renovate.

## Acceptance criteria

- No dependency uses a GitHub shortcut or an alpha version (unless there is a written reason).
- `yarn install --frozen-lockfile`, build, lint, test and Storybook still work.
