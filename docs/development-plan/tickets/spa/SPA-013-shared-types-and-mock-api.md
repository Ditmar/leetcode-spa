# SPA-013: Use one set of API types and add a mock API for development

| Field | Value |
| --- | --- |
| Repo | leetcode-spa |
| Type | Refactor |
| Priority | P1 |
| Size | M |
| Phase | 2 - Connect SPA and API |
| Depends on | X-003 |

## Problem

The same idea is typed in different ways.

- `Problem` exists three times: in `problemsService.types.ts` (`examples: string[]`), in `ProblemDetail.types.ts` (`examples` are objects, plus `acceptance`), and in `ProblemList.types.ts`.
- `Submission` exists in `submissionsService.types.ts` and in `userService.types.ts` with different fields.
- Difficulty is `'Easy'` in problems, `'easy'` in contests, and `'Beginner'` in explore.

Also, SPA pages cannot be built before the API endpoints exist. Students wait for each other.

## Tasks

- [ ] Create `src/types/` with the shared domain types, or generate types from the API OpenAPI file (`openapi-typescript`) after `API-039`.
- [ ] Add small mapper functions for the UI where the API format and the UI format are different.
- [ ] Add MSW (Mock Service Worker) handlers for the endpoints that the SPA needs. Use them in Storybook and tests.
- [ ] Add an env flag to run the SPA with the mock API.
- [ ] Update `ProblemDetail` and `ProblemList` to use the shared type.

## Acceptance criteria

- Each domain type is defined once.
- `yarn dev` with the mock flag shows data in all pages that already exist.
- Storybook stories use the same handlers.
