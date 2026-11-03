# SPA-017: Build the problems list page

| Field | Value |
| --- | --- |
| Repo | leetcode-spa |
| Type | Feature |
| Priority | P1 |
| Size | L |
| Phase | 3 - Core product |
| Depends on | SPA-013, SPA-015, API-029 |

## Problem

`/problems` shows only `<h1>Problems PAGE</h1>`. The pieces exist but are not connected: the `ProblemList` component, the `Pagination`, `Input`, `Badge` components and `problemsService.getProblems`.

## Tasks

- [ ] Replace the placeholder in `ui/components/Problems.tsx` with the real page.
- [ ] Filters: search (with debounce), difficulty, status (logged-in users only), tag.
- [ ] Table or list: number, title (link to detail), difficulty chip, tags, status icon.
- [ ] Pagination with the `Pagination` component.
- [ ] Keep filters and page in the URL query (`?difficulty=Easy&page=2`) so users can share links and use the back button.
- [ ] Load the first page on the server (SSR) so it is fast and works without JavaScript for the first view.
- [ ] Use loading, empty and error states (`SPA-030`).
- [ ] Update the existing tests and stories.

## Acceptance criteria

- The list shows real data from the API (or the mock API).
- Changing a filter updates the URL and the list.
- Opening the URL with filters shows the same result.
