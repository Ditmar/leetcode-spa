# SPA-019: Add the code editor

| Field | Value |
| --- | --- |
| Repo | leetcode-spa |
| Type | Feature |
| Priority | P1 |
| Size | L |
| Phase | 3 - Core product |
| Depends on | SPA-018 |

## Problem

A coding platform needs a code editor. `package.json` has **no** editor library.

## Tasks

- [ ] Choose an editor: CodeMirror 6 (small, good on mobile) or Monaco (VS Code editor, large). Write the reason in the PR.
- [ ] Languages: `javascript`, `python`, `java`, `cpp` (from `ALLOWED_LANGUAGES`).
- [ ] Language selector. Load the starter code for the selected language.
- [ ] Use the user's preferences: font size and tab size (`UserPreferences`).
- [ ] Save the draft per problem and language in `localStorage` (wrap it in `try/catch`). Warn before the user loses code.
- [ ] "Reset code" button with a confirm dialog.
- [ ] Load the editor only in the browser and only when needed (`client:only="react"` or dynamic import) to keep the first page fast.
- [ ] Keyboard help: shortcut for run (Ctrl/Cmd + Enter), and a way to leave the editor with the Tab key (accessibility).
- [ ] Add a story and tests for the wrapper component.

## Acceptance criteria

- The user can write code in all four languages with syntax colors.
- Refreshing the page keeps the draft.
- The editor code is not in the bundle of other pages.
