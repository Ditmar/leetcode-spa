# SPA-008: Fix the TypeScript errors and add a typecheck to CI

| Field | Value |
| --- | --- |
| Repo | leetcode-spa |
| Type | Chore |
| Priority | P1 |
| Size | M |
| Phase | 1 - Stabilize and secure |
| Depends on | None |

## Problem

`npx tsc --noEmit` shows **more than 100 errors** (we ran it on 2026-10-06). CI does not catch them because CI only runs lint and tests.

Main groups:

- Test files (`Popover.test.tsx`, `InputOTP.test.tsx`, `Carousel.test.tsx`): `Cannot find name 'describe'`, `'it'`, `'expect'`. The tsconfig does not include the Vitest global types.
- `form/Form.hook.ts` and `form/Form.tsx`: generic types do not fit Zod 4 and `@hookform/resolvers`.
- `utils/config.ts`, `submissionsService.constants.ts`: `import.meta.env` types are missing (no `astro/client` reference).
- `style-library/theme/*` (several errors), `Progress.tsx`, `NavigationMenu.*`, `fetchWithCache.ts`, `HoverCard.hook.ts`, `vitest.config.ts`.
- `npx astro check` asks to install `@astrojs/check`.

## Tasks

- [ ] Add `src/env.d.ts` with `/// <reference types="astro/client" />` and `App.Locals` types.
- [ ] Add `"types": ["vitest/globals", "@testing-library/jest-dom"]` for tests (or a separate `tsconfig.test.json`).
- [ ] Fix the remaining errors by group. One PR per group.
- [ ] Install `@astrojs/check`.
- [ ] Add scripts `typecheck` (`astro check` + `tsc --noEmit`).
- [ ] Add the script to the CI quality job (see `SPA-010`).

## Acceptance criteria

- `yarn typecheck` finishes with 0 errors.
- A PR with a type error fails CI.
