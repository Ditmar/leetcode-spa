# SPA-034: Use the theme preference and decide about i18n

| Field | Value |
| --- | --- |
| Repo | leetcode-spa |
| Type | Feature |
| Priority | P3 |
| Size | M |
| Phase | 4 - More features |
| Depends on | SPA-023 |

## Problem

- User preferences have `theme: 'light' | 'dark' | 'system'`, and the theme files exist, but the layout forces a white background (`background-color: #ffffff`). There is no theme switch.
- `src/i18n` is configured (i18next) but nothing uses it. Pages have hard-coded English text. Only `landing.json` exists.

## Tasks

- [ ] Add dark mode to MUI theme and CSS variables. Respect `prefers-color-scheme`.
- [ ] Add a theme toggle in the user menu. Save the choice (profile when logged in, cookie when not) and avoid a flash of the wrong theme.
- [ ] Decide: use i18n for all UI text (English and Spanish), or remove `i18next`, `react-i18next` and `src/i18n`.
- [ ] If you keep i18n, move texts from pages to translation files and add a language switch.

## Acceptance criteria

- Dark mode works on all pages with good contrast.
- The decision about i18n is written in the PR. No unused i18n code stays.
