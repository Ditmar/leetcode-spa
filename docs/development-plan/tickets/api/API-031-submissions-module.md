# API-031: Build the code submissions module

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Feature |
| Priority | P1 |
| Size | L |
| Phase | 3 - Core product |
| Depends on | API-029, API-030, API-044 |

## Problem

The SPA `submissionsService` calls `POST /submissions/run`, `POST /submissions`, `GET /submissions/:id` and `GET /submissions`. None of them exists.

Careful: the Prisma model `Submission` already exists for company tests. Use another name for the new model (for example `CodeSubmission`) to avoid confusion.

## Tasks

- [ ] Model `CodeSubmission`: user, problem, language, code, status, runtime, memory, passed/total tests, test results (JSON), `createdAt`.
- [ ] `POST /api/submissions/run`: run code on the **visible** examples. Do not save it as a submission.
- [ ] `POST /api/submissions`: run on all test cases (including hidden). Save the result. Return the final result, or a queued response `{ submissionId, status: 'pending' }` if you use a queue.
- [ ] `GET /api/submissions/:id`: only the owner can read it (`404` for others).
- [ ] `GET /api/submissions`: filters `problemId`, `language`, `status`; pagination.
- [ ] For hidden test cases, return only "passed or failed", not input or expected output.
- [ ] Rate limit run/submit per user (for example 10 per minute).
- [ ] Update `problems.status` (`solved`/`attempted`) from submissions.

## Acceptance criteria

- The SPA `submissionsService.run` and `.submit` work against the API.
- User A cannot read user B's submission.
- A user cannot send more than the limit of runs per minute.

## Update after decision X-004 (Piston + RabbitMQ)

The API does **not** run the code in the HTTP request.

- Define the `JobQueue` interface here (`publish(job)`) and an in-memory fake for tests. The RabbitMQ adapter and the worker are in `API-043`.
- `POST /submissions` and `POST /submissions/run`: validate, save the submission as `pending`, publish the job, and return `{ submissionId, status: 'pending' }` with `202`. The SPA already polls this case (`QueuedSubmissionResponse`).
- Add the status `system_error` (the worker could not run the code after retries) to the model and the OpenAPI file. The SPA must show it as "try again later".
- Limit pending jobs per user.
- The job message has no code and no tests, only IDs. The worker reads the data from the database.
