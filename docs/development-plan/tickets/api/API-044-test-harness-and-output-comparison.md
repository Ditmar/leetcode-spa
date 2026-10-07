# API-044: Build the test harness and the output comparison

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Feature |
| Priority | P1 |
| Size | L |
| Phase | 3 - Core product |
| Depends on | X-004, API-029 |

## Problem

A LeetCode problem asks the student to write a **function** (for example `twoSum(nums, target)`). Piston only runs a **program** that reads from `stdin`. Piston does not call the student's function or compare results. We must build this part ourselves.

## Tasks

- [ ] Write a short decision note (`docs/decisions/ADR-006-harness.md`):
  - **Option A:** students write a full program that reads `stdin` and prints the answer. Simple, works for every language, but it is not like LeetCode.
  - **Option B (suggested):** a **wrapper** program per language reads the test input as JSON, calls the student's function, and prints the result as JSON. It matches the starter code shown in the SPA. Start with JavaScript and Python. Use option A for other languages if needed.
- [ ] Add to the problem model (`API-029`): `functionName`, and per test case an `input` (JSON list of arguments) and an `expectedOutput` (JSON).
- [ ] Write the wrapper templates for JavaScript and Python. Keep them in the repo with their own tests.
- [ ] Build the final source: student code + wrapper. Print the result between two **random markers** created for each run, so student `print` calls do not mix with the result. Keep the student `stdout` (limited in size) to show it in the SPA.
- [ ] Compare in the **worker**, not in the sandbox. The expected output never goes into the program that runs the student's code.
- [ ] Comparison rules: JSON deep equality; optional number tolerance (for example `1e-6`); optional "order does not matter" flag per problem. Document the rules.
- [ ] Limit the size of output and of student prints.
- [ ] Return per test: input, expected output, actual output, passed or not, and the student's `stdout`. For hidden tests, return only passed or not (`API-016`).
- [ ] Tests: correct solution passes; wrong answer is detected; student prints do not break the result; student prints a fake result marker (must not be accepted); exception in the student code gives `runtime_error`; syntax error gives `compile_error` (or the language equivalent).

## Acceptance criteria

- JavaScript and Python solutions for 3 seeded problems pass all tests.
- A wrong solution is marked `wrong_answer` and shows which test failed.
- Student prints and exceptions do not change the verdict logic.
- The expected output is not present in the source that is sent to Piston.

## Hints

A student who prints a fake marker can only fake the **actual output**. The verdict is decided outside the sandbox by comparing with the real expected output, which the student does not know.
