# X-004: Choose how to run user code safely

| Field | Value |
| --- | --- |
| Repo | all |
| Type | Decision |
| Priority | P1 |
| Size | M |
| Phase | 0 - Decisions and setup |
| Depends on | X-001 |

## Problem

A LeetCode clone must run code from users. Today the API does **not** run code at all. In the tests module, programming answers are always marked wrong (`SubmitTestUseCase`: `isCorrect = false`).

Running unknown code is dangerous. It can read files, use all memory, or attack other servers. **We must never run user code inside the API process.**

## Options to compare

| Option | Good | Bad |
| --- | --- | --- |
| Judge0 (self-hosted) | Many languages, queue, time/memory limits | Needs privileged containers; hard to host on some platforms |
| Piston (self-hosted) | Simple HTTP API, many languages | Also needs strong isolation; you manage it |
| Hosted service (Judge0 cloud, etc.) | No server to manage | Cost, limits, data leaves our system |
| Custom Docker runner | Full control | Highest security risk and work |

The SPA already expects these languages: `javascript`, `python`, `java`, `cpp`.

## Tasks

- [ ] Check if our hosting (Railway) can run the options above. Write what you find.
- [ ] Build a small proof of concept: run `print("hi")` in Python through the chosen engine.
- [ ] Measure: time to run, cost, limits.
- [ ] Write `docs/decisions/ADR-004-code-runner.md` with the choice and the reasons.
- [ ] Define the limits: time, memory, output size, code size (64 KB in the SPA), network off.

## Acceptance criteria

- The ADR names one engine and says why.
- The proof of concept works for all 4 languages.
- `API-030` can start with clear instructions.

## Decision (2026-10-06)

**Piston (self-hosted) runs the code. RabbitMQ carries the jobs to a worker.**

- Piston is free (MIT license). The public Piston API needs a token since 2026-02-15, so we host our own. The only cost is the machine.
- The code runs on a **dedicated VM with Docker**, not inside the API and not on Railway.
- The API saves the submission as `pending` and publishes a job to RabbitMQ. A worker takes the job, builds the test programs, calls Piston, compares the results and saves them. The SPA polls `GET /submissions/:id`.
- Judge0 was not chosen: it adds its own queue and database, and we already plan RabbitMQ.
- A custom Docker executor is a later learning project (`API-045`).

Tickets: `API-030` (Piston adapter), `API-044` (test harness), `API-031` (submissions), `API-043` (queue and worker), `CD-018` (deploy).

What is still open in this ticket: the proof of concept (run `print("hi")` in Python and JavaScript through Piston), the VM provider and monthly cost, and how to install and update languages.
