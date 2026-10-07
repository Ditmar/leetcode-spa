# SPA-020: Build the Run and Submit buttons and the results panel

| Field | Value |
| --- | --- |
| Repo | leetcode-spa |
| Type | Feature |
| Priority | P1 |
| Size | L |
| Phase | 3 - Core product |
| Depends on | SPA-019, SPA-021, API-031 |

## Problem

`submissionsService` has `run`, `submit`, polling and validation. But there is no UI that uses it.

## Tasks

- [ ] Add "Run" (visible examples) and "Submit" (all tests) buttons. Disable them while running.
- [ ] Show a results panel with: status badge (Accepted, Wrong Answer, Time Limit Exceeded, Runtime Error, Compile Error), runtime, memory.
- [ ] Show test case tabs with input, expected output, actual output, passed or failed. For hidden tests show only passed or failed.
- [ ] Show `stderr` and compile errors in a code block.
- [ ] Show progress while polling (`pending`, `running`) and a Cancel button.
- [ ] If the user is not logged in, open the auth modal and continue after login.
- [ ] Handle `429` (too many requests) with a friendly message.
- [ ] Announce the result with `aria-live` for screen readers.
- [ ] Update the problem status icon after a successful submit.

## Acceptance criteria

- A user can write code, run it, see the output, and submit it.
- Errors and timeouts show a clear message and the buttons work again.
- Cancel stops the polling.
