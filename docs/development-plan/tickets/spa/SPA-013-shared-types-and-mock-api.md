# SPA-013: Use one set of API types and add a mock API for development

| Field      | Value                                                      |
| ---------- | ---------------------------------------------------------- |
| Repo       | leetcode-spa                                               |
| Type       | Refactor                                                   |
| Priority   | P1                                                         |
| Size       | M                                                          |
| Phase      | 2 - Connect SPA and API                                    |
| Depends on | [X-003](https://github.com/Ditmar/leetcode-spa/issues/368) |

## Problem

The same idea is typed in different ways.

- `Problem` exists three times: in `problemsService.types.ts` (`examples: string[]`), in `ProblemDetail.types.ts` (`examples` are objects, plus `acceptance`), and in `ProblemList.types.ts`.
- `Submission` exists in `submissionsService.types.ts` and in `userService.types.ts` with different fields.
- Difficulty is `'Easy'` in problems, `'easy'` in contests, and `'Beginner'` in explore.

Also, SPA pages cannot be built before the API endpoints exist. Students wait for each other.

## Tasks

- [ ] Create `src/types/` with the shared domain types, or generate types from the API OpenAPI file (`openapi-typescript`) after [API-039](https://github.com/Ditmar/api-leetcode/issues/93).
- [ ] Add small mapper functions for the UI where the API format and the UI format are different.
- [ ] Add MSW (Mock Service Worker) handlers for the endpoints that the SPA needs. Use them in Storybook and tests.
- [ ] Add an env flag to run the SPA with the mock API.
- [ ] Update `ProblemDetail` and `ProblemList` to use the shared type.

## Acceptance criteria

- Each domain type is defined once.
- `yarn dev` with the mock flag shows data in all pages that already exist.
- Storybook stories use the same handlers.

## Update after decision X-003

Following [X-003](https://github.com/Ditmar/leetcode-spa/issues/368), shared SPA API types and mocks must follow the unified contract defined in `docs/decisions/ADR-003-api-contract.md`.

The implementation in this ticket must follow these rules:

- Successful API responses with a body use `{ data, meta? }`.
- Errors use `{ code, message, details? }`.
- Paginated requests use `page` and `pageSize`.
- Paginated responses use `meta` with `page`, `pageSize`, `total` and `totalPages`.
- JSON enum values from the API use lowercase.
- UUID strings are the canonical identifiers for new modules.
- Problem types must distinguish `id`, `slug` and `number`: `id` is the UUID used by `/api/problems/:id`, `slug` is the human-readable identifier and `number` is the value shown in the UI and used for ordering.
- Authentication types use `username`.
- `expiresAt` is a Unix timestamp in milliseconds.
- During the compatibility release defined by X-003, SPA mappers or API parsing may temporarily accept legacy response shapes where required. New shared types and mocks must use the X-003 format.
- Legacy compatibility must be removed after the API migration tracked by [API-042](https://github.com/Ditmar/api-leetcode/issues/96) is complete.
- The unused `/users/:id/stats` variant must be removed when the user service is aligned with the X-003 contract. `/users/me/stats` remains supported.
- Generated or shared API types must follow the OpenAPI source of truth maintained through [API-039](https://github.com/Ditmar/api-leetcode/issues/93).
- MSW handlers and Storybook mocks must represent the same X-003 response shapes as the real API.

Error parsing during the transition is tracked by [SPA-006](https://github.com/Ditmar/leetcode-spa/issues/381), and the Astro BFF and proxy behavior is tracked by [SPA-036](https://github.com/Ditmar/leetcode-spa/issues/411).
