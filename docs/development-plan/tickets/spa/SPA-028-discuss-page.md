# SPA-028: Build the discuss page

| Field | Value |
| --- | --- |
| Repo | leetcode-spa |
| Type | Feature |
| Priority | P3 |
| Size | L |
| Phase | 4 - More features |
| Depends on | SPA-033, API-038 |

## Problem

`/discuss` shows `<h1>Discuss PAGE</h1>` and there is no service.

## Tasks

- [ ] Create `discussService`.
- [ ] Posts list with sort and pagination. Post detail with comments and votes.
- [ ] Create, edit and delete own posts and comments.
- [ ] Markdown input with preview. Always sanitize (`SPA-033`).
- [ ] Add a "Discuss" tab in the problem page.

## Acceptance criteria

- A user can write a post and a comment.
- Posts with HTML or script tags are shown as plain text.
