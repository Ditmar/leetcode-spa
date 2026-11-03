# API-015: Fix grading of multiple-choice questions

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Bug |
| Priority | P1 |
| Size | M |
| Phase | 1 - Stabilize and secure |
| Depends on | API-014 |

## Problem

The `Question.correctAnswer` field is an array (for example `["A", "C"]`). The Prisma comment says it is for questions with more than one correct answer.

But the grading code does this: `correctAnswers.includes(answer.selectedOption)`. The user sends **one** string in `selectedOption`. So:

- If the correct answer is `["A", "C"]`, choosing only `"A"` gives full points.
- A user cannot send `A` and `C` together.

## Tasks

- [ ] Decide: single choice only, or multiple choice too. Write it in the question model (`selectionMode`: `SINGLE` or `MULTIPLE`).
- [ ] Change the answer to `selectedOptions: string[]` (database column and validation).
- [ ] Grade as sets: the answer is correct only if the set is **equal** to the correct set (optional: partial points).
- [ ] Ignore case and spaces in option IDs, or reject them.
- [ ] Write unit tests: single, multiple, wrong, empty, duplicate options.
- [ ] Update the docs and OpenAPI.

## Acceptance criteria

- Choosing only `A` when `["A","C"]` is correct gives `0` points.
- Choosing `A` and `C` gives full points.
- A migration is included and tested on a copy of the data.
