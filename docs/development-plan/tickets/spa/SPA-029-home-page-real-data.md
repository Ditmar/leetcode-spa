# SPA-029: Improve the home page and connect it to real data

| Field | Value |
| --- | --- |
| Repo | leetcode-spa |
| Type | Feature |
| Priority | P2 |
| Size | M |
| Phase | 3 - Core product |
| Depends on | API-029, SPA-015 |

## Problem

`index.astro` is the only finished page, but:

- It calls `problemsService.getStats`, which has no API endpoint. So the numbers are always `--`.
- The panel title says "Today" and "Problems solved by the platform community", but the code uses `stats.solved` (the solved count of the current user). The variable is named `solvedToday`. The text and the data do not match.
- The quick links use text icons (`[]`, `<>`, `{}`).
- The page has about 230 lines of its own CSS. The page also does not use the `landing.json` texts or i18n.
- `getStats` hides every error with a generic message, and the page hides it again with `.catch(() => null)`.
- A logged-out user and a logged-in user see the same page.

## Tasks

- [ ] Show real public numbers for everyone (total problems) and personal numbers for logged-in users.
- [ ] Fix the labels so they match the data.
- [ ] Use proper icons (MUI icons are already installed).
- [ ] Logged out: show "Sign up" call to action. Logged in: show "Continue where you stopped" (last problem).
- [ ] Show a small message when stats fail, not only `--`.
- [ ] Move the CSS to shared styles or components.

## Acceptance criteria

- Numbers are real and labels are correct.
- The page looks different for logged-in and logged-out users.
- The API being down does not break the page.
