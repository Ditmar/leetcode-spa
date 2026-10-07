# API-016: Do not send expected outputs and hidden test cases to the client

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Security |
| Priority | P1 |
| Size | M |
| Phase | 1 - Stabilize and secure |
| Depends on | None |

## Problem

`GetQuestionsUseCase` returns `programmingData` exactly as it is in the database. The schema comment says this JSON holds `{ starterCode, testCases, expectedOutput }`. So the browser receives **all test cases and the expected outputs**. A user can read the answers in the network tab.

`correctAnswer` is correctly hidden, but this is only because the code builds the response by hand. There is no rule or test that protects this.

## Tasks

- [ ] Split the data: public part (`starterCode`, examples) and private part (hidden test cases, expected output).
- [ ] Build response DTOs with a white list of fields.
- [ ] Add a test that checks that the response JSON does **not** contain `correctAnswer`, `expectedOutput` or hidden test cases.
- [ ] Use the same rule in the future problems module (`API-029`).

## Acceptance criteria

- `GET /api/tests/:id/questions` has no `expectedOutput` and no hidden test cases.
- The automatic test fails if someone adds these fields again.
