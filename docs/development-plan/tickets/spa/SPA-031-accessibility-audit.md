# SPA-031: Run an accessibility audit and fix the problems

| Field | Value |
| --- | --- |
| Repo | leetcode-spa |
| Type | Quality |
| Priority | P2 |
| Size | M |
| Phase | 5 - Quality and launch |
| Depends on | SPA-020 |

## Problem

The project has the Storybook a11y add-on, but nobody checks full pages. Code editors, modals, tabs and timers are hard to use with a keyboard or a screen reader.

## Tasks

- [ ] Run axe (browser extension or `@axe-core/playwright`) on every page.
- [ ] Check: keyboard-only use of the full flow (login, find a problem, run code, submit), focus order, visible focus, color contrast in both themes, labels for inputs and icon buttons, `aria-live` for results and timers.
- [ ] Add `axe` checks to the e2e tests (`SPA-032`).
- [ ] Write `docs/accessibility.md` with the rules for new components.

## Acceptance criteria

- No serious or critical axe issues on any page.
- The main flow works with the keyboard only.
