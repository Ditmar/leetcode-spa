# SPA-018: Build the problem detail page

| Field | Value |
| --- | --- |
| Repo | leetcode-spa |
| Type | Feature |
| Priority | P1 |
| Size | L |
| Phase | 3 - Core product |
| Depends on | SPA-017, SPA-013 |

## Problem

There is no page for a single problem. The `ProblemDetail` component exists, but:

- it expects `examples` as objects (`input`, `output`, `explanation`), while `problemsService` types them as `string[]`;
- it shows only the first 2 tags;
- the description is plain text (a real problem uses Markdown with code blocks and images);
- there is no layout for the editor next to the description.

## Tasks

- [ ] Create the route `src/pages/problems/[id].astro` (`prerender = false`).
- [ ] Two-pane layout: description on the left (tabs: Description, Submissions), code area on the right (`SPA-019`). On mobile, use tabs.
- [ ] Render the description from Markdown **safely** (`SPA-033`).
- [ ] Show examples, constraints, tags, difficulty, and acceptance rate.
- [ ] Add `404` for unknown problems and a clear error state.
- [ ] Previous and next problem links.
- [ ] Fix the types between the service and the component (`SPA-013`).

## Acceptance criteria

- `/problems/1` shows the problem from the API.
- `/problems/99999` shows the 404 page.
- Description supports code blocks and lists.
