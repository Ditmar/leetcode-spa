# SPA-032: Add end-to-end tests with Playwright

| Field | Value |
| --- | --- |
| Repo | leetcode-spa |
| Type | Test |
| Priority | P2 |
| Size | L |
| Phase | 5 - Quality and launch |
| Depends on | SPA-020, X-005 |

## Problem

There are 39 unit test files and 318 passing tests (we ran them on 2026-10-06), but they test components and services separately. No test checks that pages, API and database work together. Problems like wrong URLs (`SPA-001`) are not found by unit tests.

Playwright is installed only for Storybook.

## Tasks

- [ ] Add a Playwright test project (`e2e/`).
- [ ] Run against the local stack (`X-005`) with seed data.
- [ ] Tests: sign up, sign in, sign out; list and filter problems; open a problem, write code, run, submit; protected page redirects; 404 page.
- [ ] Add a CI job (on `master` and PRs) that starts the stack with Docker Compose and runs the tests.
- [ ] Save traces and screenshots on failure.

## Acceptance criteria

- E2E tests pass in CI.
- A broken login flow makes CI fail.
