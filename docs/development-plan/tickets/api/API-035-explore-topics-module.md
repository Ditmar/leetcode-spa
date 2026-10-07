# API-035: Build the explore topics module

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Feature |
| Priority | P2 |
| Size | M |
| Phase | 4 - More features |
| Depends on | X-001, API-029 |

## Problem

The SPA `exploreService` calls endpoints that do not exist: `GET /explore/topics`, `GET /explore/topics/:id`, `GET /explore/metadata` and `PATCH /explore/topics/:topicId/problems/:problemId`.

`X-001` decides if "Explore" and "Courses" are the same feature. Read it before you start.

## Tasks

- [ ] Model: `Topic` (title, description, category, difficulty, icon), `TopicProblem`, and per-user progress.
- [ ] `GET /api/explore/topics?category&difficulty` with `totalProblems` and the user's `progress`.
- [ ] `GET /api/explore/topics/:id` with the list of problems and `completed`.
- [ ] `GET /api/explore/metadata`: categories and difficulties for the filters.
- [ ] `PATCH .../problems/:problemId` with `{ completed }`: save progress and return the new percentage.
- [ ] If `X-001` says Explore = Courses, reuse the `Course` model instead.

## Acceptance criteria

- The SPA `exploreService` works with no change in its types, or the types are updated in the same PR.
- Progress is saved per user.
