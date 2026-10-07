# SPA-025: Build the courses pages

| Field | Value |
| --- | --- |
| Repo | leetcode-spa |
| Type | Feature |
| Priority | P2 |
| Size | M |
| Phase | 4 - More features |
| Depends on | X-001, SPA-015, API-013 |

## Problem

The API has courses (list, detail, enroll, my courses). The SPA has **no service and no page** for them.

## Tasks

- [ ] Create `coursesService` with types for the API responses.
- [ ] Page `/courses`: list with search, sort and pagination.
- [ ] Page `/courses/[id]`: detail and an "Enroll" button (login required).
- [ ] Page `/courses/mine` or a section in the profile: my courses.
- [ ] Handle `409` (already enrolled) and `404`.
- [ ] Add the link in the navigation (config `navShell`).
- [ ] Add tests and stories.

## Acceptance criteria

- A logged-in user can enroll and sees the course in "my courses".
- A logged-out user who clicks "Enroll" sees the login modal and can finish after login.
