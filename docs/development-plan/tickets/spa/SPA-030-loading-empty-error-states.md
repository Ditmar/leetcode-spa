# SPA-030: Create shared loading, empty and error components

| Field | Value |
| --- | --- |
| Repo | leetcode-spa |
| Type | Feature |
| Priority | P2 |
| Size | M |
| Phase | 3 - Core product |
| Depends on | None |

## Problem

Each component makes its own empty state (for example `ProblemDetail` has "No problem data available."). There is no shared loading skeleton and no standard error box with a "Try again" button. Pages will look different from each other.

## Tasks

- [ ] Create `Skeleton` wrappers for list, card and detail.
- [ ] Create `EmptyState` (icon, title, text, optional action).
- [ ] Create `ErrorState` (message from `ApiError`, request ID if present, retry button).
- [ ] Create a hook `useAsync` or use TanStack Query. Choose one, write why.
- [ ] Use them in the problems list as the first example.
- [ ] Add stories and tests.

## Acceptance criteria

- The same components are used in at least 3 pages.
- Errors always show a way to retry.
