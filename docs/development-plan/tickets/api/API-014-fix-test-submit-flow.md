# API-014: Fix the "submit test" flow (transaction, session, duplicates)

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Bug |
| Priority | P1 |
| Size | L |
| Phase | 1 - Stabilize and secure |
| Depends on | API-001, API-007 |

## Problem

`SubmitTestUseCase` has several problems.

- It saves each answer one by one and then creates the submission. There is **no transaction**. If an error happens in the middle, you keep half of the data.
- If a user submits twice, `saveAnswer` fails first with a unique-key error (`sessionId + questionId`). This error is not mapped, so the user gets `500` instead of `409`. The message `Submission already exists` only exists in `createSubmission`.
- The session stays `isActive = true` after the submit. Only the unique rule on `Submission.sessionId` stops a second submit.
- The columns `answers.is_correct` and `answers.points` are never filled.
- `breakdown` is saved as an array with one object. The Prisma comment says it is an object.
- If `maxScore` is `0`, `percentage` is `NaN`.
- If the answer list has the same `questionId` twice, the first one wins and nothing tells the user. Unknown question IDs are ignored.
- `StartTestUseCase` lets the same user start unlimited sessions for the same test, and it allows a test with no questions.
- The pass mark `0.7` is hard-coded.

## Tasks

- [ ] Wrap "save answers + create submission + close session" in `prisma.$transaction`.
- [ ] Check first if a submission exists for the session. Return `409`.
- [ ] Set the session `isActive = false` when the test is submitted.
- [ ] Save `isCorrect` and `points` for each answer.
- [ ] Save `breakdown` as one object with `correct`, `incorrect`, `total`, `details`.
- [ ] Reject unknown or duplicate `questionId` values with `400`.
- [ ] Avoid division by zero.
- [ ] On start: reuse the active session, or return `409` (choose one and document it). Do not start a test with no questions.
- [ ] Move the pass mark to the test (`passScore` column) or to config.

## Acceptance criteria

- A second submit returns `409`.
- If saving fails in the middle, no answer and no submission is saved (test this).
- After submit, the session is closed and `questions` returns an error for it.
