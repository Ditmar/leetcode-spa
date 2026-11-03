# SPA-023: Build the profile and settings pages

| Field | Value |
| --- | --- |
| Repo | leetcode-spa |
| Type | Feature |
| Priority | P2 |
| Size | L |
| Phase | 4 - More features |
| Depends on | SPA-015, API-032 |

## Problem

`userService` supports profile, statistics, preferences, avatar upload and delete account. No page uses it. The charts and avatar components exist in the catalog.

## Tasks

- [ ] `/profile` (own) and `/profile/[id]` (public): avatar, display name, bio, badges, solved counts by difficulty (chart), acceptance rate, streaks, heatmap of the last year, recent submissions.
- [ ] `/settings`: edit profile, preferences (language, theme, font size, tab size), avatar upload, delete account with password confirmation.
- [ ] Fix small problems in `userService`: `getPreferences(cookies: string)` has a required `cookies` argument while others are optional; the heatmap uses the local time zone on the server and on the client (dates can differ by one day). Use UTC dates from the API.
- [ ] Send the password for delete account in the request body (after `API-032`).
- [ ] Loading, empty and error states for each block.

## Acceptance criteria

- A user can change their display name, preferences and avatar and sees the change after reload.
- The heatmap shows the same days on server and client.
- Delete account asks for the password and signs the user out.
