# API-038: Build the discuss module

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Feature |
| Priority | P3 |
| Size | L |
| Phase | 4 - More features |
| Depends on | API-026, API-029 |

## Problem

The SPA has a `/discuss` page (empty) and a link in the navigation. The API has nothing for it.

## Tasks

- [ ] Model: `Post` (title, body, author, optional problem), `Comment`, `Vote`.
- [ ] Endpoints: list posts (filters, sort by new/top), create, edit and delete own post, comments, vote.
- [ ] Limit the size of text. Escape or sanitize Markdown output (the SPA must do it too, see `SPA-033`).
- [ ] Rate limit post creation.
- [ ] Admin can hide or delete any post.

## Acceptance criteria

- A user can create a post and comment.
- A user cannot edit or delete the post of another user (`403`).
