# API-030: Connect the code runner (safe execution)

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Feature |
| Priority | P1 |
| Size | L |
| Phase | 3 - Core product |
| Depends on | X-004 |

## Problem

The API cannot run user code. Programming answers in the tests module are always wrong. We need a safe way to run code with time and memory limits.

## Tasks

- [ ] Define a `CodeRunner` interface in the domain: `run({ language, code, testCases[] }) -> results`.
- [ ] Write an adapter for the engine chosen in `X-004`.
- [ ] Support `javascript`, `python`, `java`, `cpp`.
- [ ] Set limits from config: time per test, memory, output size, max code size (64 KB), max test cases.
- [ ] Return: status (`accepted`, `wrong_answer`, `time_limit_exceeded`, `runtime_error`, `compile_error`), runtime, memory, `stdout`, `stderr` and a result per test case.
- [ ] Compare outputs in a clear way (trim end of lines; document the rule).
- [ ] Handle runner timeouts, errors and restarts. Retry only safe calls.
- [ ] Never run user code in the API process. Never pass user input to a shell.
- [ ] Add a fake runner for tests (no external service).
- [ ] Try to break it: infinite loop, huge output, big memory, network call, file read. Write the results.

## Acceptance criteria

- Valid code for each language returns correct results.
- An infinite loop ends with `time_limit_exceeded` in the configured time.
- The API process stays healthy during all abuse tests.
