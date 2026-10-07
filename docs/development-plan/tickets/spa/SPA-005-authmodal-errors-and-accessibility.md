# SPA-005: Show real errors in the auth modal and make it accessible

| Field | Value |
| --- | --- |
| Repo | leetcode-spa |
| Type | Bug |
| Priority | P1 |
| Size | M |
| Phase | 2 - Connect SPA and API |
| Depends on | SPA-001 |

## Problem

In `AuthModal.tsx` the error is shown with `err instanceof Error ? err.message : 'Authentication failed'`. But `authService` throws **plain objects** (`{ message, code, status }`), not `Error` objects. So the user **always** sees "Authentication failed". They never see "Invalid email or password" or "User already exists".

Other problems:

- No field validation messages (email format, password length, username length).
- The modal has `role="dialog"` but no focus trap, no focus on the first field, and no focus return when it closes.
- The modal is built by hand. The project already has `Dialog`, `Input`, `Button` and `Form` components in the catalog.
- Sign up needs a clear password rule (see `API-025`).

## Tasks

- [ ] Show the server message and map error codes to friendly text (`409` = account exists, `401` = wrong credentials, `429` = too many tries).
- [ ] Use the catalog components (`Dialog`, `Form` with Zod, `Input`, `Button`).
- [ ] Add field errors with `aria-describedby`.
- [ ] Add focus management (focus first input, trap focus, return focus).
- [ ] Add tests with `user-event`: wrong password, existing email, success.

## Acceptance criteria

- Wrong password shows "Invalid email or password".
- The modal can be used only with the keyboard.
- No accessibility errors in the Storybook a11y panel.
