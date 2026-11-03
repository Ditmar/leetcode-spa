# API-043: Build the execution queue and the worker (RabbitMQ)

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Feature |
| Priority | P1 |
| Size | L |
| Phase | 3 - Core product |
| Depends on | X-004, API-030, API-031, API-044 |

## Problem

Running code takes time (compile, run many tests). The API must not wait for it inside the HTTP request. We also want to run more than one job at the same time and add more servers later. `X-004` decided to use **RabbitMQ**.

Flow:

```
API ──publish job──► RabbitMQ ──► Worker ──► Piston
 ▲                                  │
 └────────── database ◄─────────────┘   (the SPA polls GET /submissions/:id)
```

## Tasks

- [ ] Define the **message** (small, no test cases and no hidden data): `jobId`, `submissionId`, `mode` (`run` or `submit`), `attempt`, `requestedAt`. The worker loads the code and the tests from the database.
- [ ] Write the RabbitMQ adapter for the `JobQueue` interface (the interface and the in-memory fake are created in `API-031`). Use `amqplib` (or `amqp-connection-manager` for automatic reconnect).
- [ ] Queues: one for `run` (fast, high priority) and one for `submit`. All durable, messages persistent.
- [ ] Dead-letter exchange and a `dead` queue for jobs that fail too many times.
- [ ] Write the worker as a **second entry point** (`src/worker.ts`) in this repo. Same Docker image, different start command (`node dist/worker.js`). It runs as a separate service.
- [ ] Worker steps: take the job → set the submission to `running` → load code and tests → build the programs (`API-044`) → run each test with `CodeRunner` (`API-030`) → compare → save the final result → `ack`.
- [ ] `ack` only **after** the result is saved. Use `prefetch` equal to the worker concurrency (config, start with 2).
- [ ] Final status rule: `compile_error` > `runtime_error` > `time_limit_exceeded` > `wrong_answer` > `accepted`.
- [ ] Retry only infrastructure errors (Piston down, timeout of the call) with a delay (a retry queue with TTL), maximum 3 times. Then send to the dead queue and set the submission to `system_error`.
- [ ] Make the worker **idempotent**: if the submission is already finished, `ack` and do nothing. A message can arrive twice.
- [ ] Graceful stop on `SIGTERM`: finish the current job, then close the connection.
- [ ] Limit pending jobs per user (for example 3) when the API publishes.
- [ ] Log `jobId`, `submissionId`, time in queue, run time and result. Never log the user code.
- [ ] Add RabbitMQ to the local `docker-compose` (`X-005`).
- [ ] Tests: job succeeds; Piston down → retries → dead queue; duplicate message; worker killed in the middle (message comes back).
- [ ] Write `docs/code-execution.md` with the diagram and the settings.

## Acceptance criteria

- Submitting code returns quickly with `pending`. The result appears later through `GET /submissions/:id`.
- If the worker stops, jobs wait in the queue and run when it starts again.
- Two workers can run at the same time without running the same job twice (check the final result is saved once).
- A job that always fails ends in the dead queue and does not block the others.

## Hints

Where to host RabbitMQ is decided in `CD-018`.
