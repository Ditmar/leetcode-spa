# API-036: Add lessons and progress to courses

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Feature |
| Priority | P3 |
| Size | L |
| Phase | 4 - More features |
| Depends on | API-013, X-001 |

## Problem

A course only has a title, a description and `numberOfLessons` (a number). There are no real lessons. A student can "enroll" but has nothing to study and no progress.

## Tasks

- [ ] Add `Lesson` (course, title, content in Markdown, order, optional link to a problem).
- [ ] Replace `numberOfLessons` with a computed value (count of lessons).
- [ ] `GET /api/courses/:id/lessons` (enrolled users, or the first lesson is free).
- [ ] `POST /api/courses/:id/lessons/:lessonId/complete`.
- [ ] Return the progress percentage in "my courses".
- [ ] Add migration and seed data.

## Acceptance criteria

- A user can finish lessons and see progress in "my courses".
- The `numberOfLessons` value always matches the real number of lessons.
