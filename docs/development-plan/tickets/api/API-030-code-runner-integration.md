# API-030: Connect Piston as the code executor

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Feature |
| Priority | P1 |
| Size | M |
| Phase | 3 - Core product |
| Depends on | X-004 |

## Problem

The API cannot run user code. Programming answers in the tests module are always wrong (`SubmitTestUseCase`: `isCorrect = false`).

`X-004` decided to use **Piston** (self-hosted) to run the code, and **RabbitMQ** to send jobs to a worker (`API-043`). This ticket is only the **adapter** to Piston. It does not use the queue and it does not build the test wrappers (`API-044`).

## Tasks

- [ ] Define a `CodeRunner` interface in the domain. Input: `language`, `files` (source code), `stdin`, `limits`. Output: compile result and run result (`stdout`, `stderr`, exit code, signal, time if available).
- [ ] Write `PistonCodeRunner` in `infrastructure`. It calls `POST {PISTON_URL}/api/v2/execute` with the language, version, `files`, `stdin`, `compile_timeout`, `run_timeout` and memory limits. Check the exact fields in the docs of the version you install.
- [ ] Keep a map of our language names (`javascript`, `python`, ...) to the Piston language and version. Put it in config, not in the code.
- [ ] Check at start (`GET /api/v2/runtimes`) that every language we use is installed. Fail with a clear message if not.
- [ ] Set limits from config: compile time, run time, memory, output size, code size (64 KB, same as the SPA).
- [ ] Handle errors: connection error, timeout, `5xx`. Retry only for connection errors and `5xx` (maximum 2 times, with a short wait). Never retry when the user code fails: that is a valid result.
- [ ] Convert Piston signals (for example `SIGKILL` after a timeout) to the status `time_limit_exceeded` or `runtime_error`.
- [ ] If Piston does not return time and memory in your version, measure the wall time in the code that calls the runner. Write this in the README.
- [ ] If Piston is behind a proxy with a token, send it in a header from `PISTON_TOKEN`.
- [ ] Add a `FakeCodeRunner` for tests (no network).
- [ ] Add `PISTON_URL`, `PISTON_TOKEN` and the limits to `config-schema.ts` (`API-011`).
- [ ] Never build a shell command with user input. Send the code only as file content.
- [ ] Run the abuse tests against a real Piston (see `CD-018`): infinite loop, huge output, big memory, fork bomb, network call, read of `/etc/passwd`. Write the results in `docs/code-runner.md`.

## Acceptance criteria

- Valid code for `javascript` and `python` returns the correct output through `CodeRunner`.
- An infinite loop ends with a timeout result in the configured time.
- If Piston is down, the adapter returns a clear infrastructure error (not a user error).
- The API process stays healthy during all abuse tests.
- Unit tests pass with `FakeCodeRunner` and with a mocked HTTP server.

## Hints

Piston has no login by itself (check this in the version you install). Do not open its port to the internet. See `CD-018`.
