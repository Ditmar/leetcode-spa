# API-041: Add basic monitoring and error tracking

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Chore |
| Priority | P3 |
| Size | M |
| Phase | 5 - Quality and launch |
| Depends on | API-012 |

## Problem

When production fails, we only have console logs on Railway. We cannot see error rates or slow requests, and we do not get an alert.

## Tasks

- [ ] Add error tracking (for example Sentry, free plan) with the request ID.
- [ ] Log slow requests (for example over 1 second) and slow database queries.
- [ ] Add a small metrics endpoint (optional): request count, errors, latency.
- [ ] Define 3 simple alerts: API down, error rate high, database not ready.
- [ ] Do not send passwords, tokens or code from users to external services.

## Acceptance criteria

- A test error appears in the error tracker with request ID and no sensitive data.
- The team knows where to look when production fails (write it in the runbook, `CD-015`).
