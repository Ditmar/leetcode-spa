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
