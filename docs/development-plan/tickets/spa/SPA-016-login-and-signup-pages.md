# SPA-016: Create dedicated login and signup pages

| Field | Value |
| --- | --- |
| Repo | leetcode-spa |
| Type | Feature |
| Priority | P1 |
| Size | M |
| Phase | 2 - Connect SPA and API |
| Depends on | SPA-001, SPA-005, SPA-015 |

## Problem

The only way to sign in is a modal on the home page. People cannot open a login URL, share it, or be redirected to it. The project has login and signup themes (`login-theme.ts`, `signup-theme.ts`) and a form component, but no pages use them.

## Tasks

- [ ] Add `/login` and `/signup` pages with the existing themes and `Form` (React Hook Form + Zod).
- [ ] Validate: email format, password rule (same as the API, `API-025`), username length (minimum 3).
- [ ] Show server errors by field.
- [ ] Support `?redirect=/some/path` (only allow paths that start with `/`, to avoid open redirect).
- [ ] If the user is already logged in, redirect away.
- [ ] Add links between login and signup. Add "Forgot password" as a disabled link or a ticket for later.
- [ ] Keep `AuthModal` only for the "login required" case.

## Acceptance criteria

- A user can sign up, is signed in, and goes to the redirect URL.
- `?redirect=https://evil.com` is ignored.
- Forms work with the keyboard and screen reader labels are correct.
