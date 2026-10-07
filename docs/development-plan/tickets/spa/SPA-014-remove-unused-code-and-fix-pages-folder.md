# SPA-014: Remove unused code and fix the `pages` folder

| Field | Value |
| --- | --- |
| Repo | leetcode-spa |
| Type | Refactor |
| Priority | P2 |
| Size | M |
| Phase | 1 - Stabilize and secure |
| Depends on | None |

## Problem

- `src/pages/ProblemList/` is a **component**, but it is inside `src/pages`. Astro treats every file in `pages` as a route. `astro build` prints warnings ("Unsupported file type ... Prefix filename with an underscore") and the `.ts` files (`ProblemList.hook.ts`, `.utils.ts`, `.constants.ts`, `.types.ts`) become server endpoints (`dist/server/pages/problemlist` exists after the build).
- The `ProblemList` component is **not used by any page**.
- `ui/components/HomePage.tsx` is not used (and starts with a hidden BOM character).
- `utils/fetchWithCache.ts` is not used anywhere.
- `src/i18n` is set up but nothing imports it (`useTranslation` is not used).
- Fonts are copied in `public/fonts` and `src/assets/fonts`. Some assets look unused (`astro.svg`, `image.gif`).
- The catalog has about 27 components (Carousel, Menubar, ContextMenu, InputOTP, Calendar, HoverCard, AspectRatio, Command, ...). Each has 7 to 9 files (stories, tests, docs). Many are not needed for a LeetCode clone.

## Tasks

- [ ] Move `pages/ProblemList` to `src/components/` (or `ui/`). Update imports and stories.
- [ ] Remove the unused files above (or use them, see other tickets).
- [ ] Keep one copy of the fonts.
- [ ] Decide with the teacher which catalog components stay. Components that we do not need can move to a branch or be removed.
- [ ] Add `knip` or `ts-prune` to find more dead code.

## Acceptance criteria

- `astro build` shows no warnings about unsupported files.
- `dist/server/pages` has only real pages.
- No unused source file remains (or each one has a ticket).
