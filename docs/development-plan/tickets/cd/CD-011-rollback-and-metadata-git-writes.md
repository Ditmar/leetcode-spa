# CD-011: Make git writes safe (rollback, metadata, concurrency)

| Field | Value |
| --- | --- |
| Repo | leetcode-cd |
| Type | Risk |
| Priority | P2 |
| Size | M |
| Phase | 1 - Stabilize and secure |
| Depends on | None |

## Problem

Several workflows write directly to `master`.

- `deploy.yml` commits metadata with `git push` to `master` (with retry and rebase).
- `rollback.yml` deploys first and then runs a plain `git push` to `master`. No retry, no rebase. The step is named "Commit rollback state to main".
- `deploy.yml` uses the `concurrency` group `railway-cd-git-write`, but `rollback.yml` and `promote.yml` do not. They can write at the same time as a deploy and one of them fails.
- If branch protection requires PRs (as `X-006` asks), these direct pushes fail unless the bot is allowed to bypass. A bypass for the bot also means anyone who can edit the workflow can write to `master`.
- The README says rollback is done through a PR. The "quick" workflow does not do that.

## Tasks

- [ ] Put all workflows that write to git in the same `concurrency` group.
- [ ] Reuse the retry and rebase code from `deploy.yml` in `rollback.yml` (put it in a shared script).
- [ ] Decide how to keep state: (a) a ruleset that lets only the bot push metadata commits, (b) a separate `state` branch for metadata, or (c) a PR for every change. Write the decision.
- [ ] Update the README to describe what rollback does.

## Acceptance criteria

- Running a deploy and a rollback at the same time does not fail on `git push`.
- Branch protection can stay on without breaking the workflows.
