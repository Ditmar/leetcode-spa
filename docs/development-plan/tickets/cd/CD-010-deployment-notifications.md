# CD-010: Send real notifications for deploys, failures and rollbacks

| Field | Value |
| --- | --- |
| Repo | leetcode-cd |
| Type | Feature |
| Priority | P2 |
| Size | S |
| Phase | 5 - Quality and launch |
| Depends on | CD-004 |

## Problem

The workflow steps "Notify deployment success" and "Notify deployment failure" only print text. The code has a comment: "here you could add a Slack notification". The README lists the secret `SLACK_WEBHOOK` as optional, but nothing uses it. Nobody knows about a failed prod deploy unless they look at GitHub Actions.

## Tasks

- [ ] Choose a channel (Slack, Discord, Teams, or email) with the teacher.
- [ ] Send a message on success, failure and rollback: app, environment, old and new image, who started it, link to the run.
- [ ] Put the same information in the GitHub job summary (`$GITHUB_STEP_SUMMARY`).
- [ ] Keep the webhook in a secret. Never print it.
- [ ] Do not fail the deploy if the notification fails.

## Acceptance criteria

- A failed deploy sends a message within 1 minute.
- The message has a link to the workflow run.
