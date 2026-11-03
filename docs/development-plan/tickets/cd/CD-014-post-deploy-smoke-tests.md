# CD-014: Run smoke tests after each deploy and before promotion

| Field | Value |
| --- | --- |
| Repo | leetcode-cd |
| Type | Feature |
| Priority | P2 |
| Size | M |
| Phase | 5 - Quality and launch |
| Depends on | CD-004, API-027 |

## Problem

The README says "smoke tests in ppd" must pass before prod, but no smoke test exists. Promotion to prod depends on a person saying "I checked".

## Tasks

- [ ] Add `baseUrl` to each JSON file.
- [ ] Write a smoke test script: API `/health/ready`, `GET /api/courses`, sign up and log in with a test user, `GET /api/problems`; SPA `/`, `/problems`, and `/sysinfo` shows the expected version.
- [ ] Run it after each deploy in `deploy.yml` (ppd and prod).
- [ ] Save the result of the last ppd smoke run (for example as a commit status or a file) and make `promote.yml` stop if the last run failed or is for another image.
- [ ] Use a special test user and clean up after the test.

## Acceptance criteria

- A broken ppd deploy blocks the promotion to prod.
- The smoke test finishes in less than 2 minutes.
