# X-006: Agree on the team workflow (branches, PRs, Definition of Done)

| Field | Value |
| --- | --- |
| Repo | all |
| Type | Process |
| Priority | P1 |
| Size | S |
| Phase | 0 - Decisions and setup |
| Depends on | None |

## Problem

The repos use different habits.

- The SPA uses `release-it` with the Angular commit convention. Commit messages must follow it. It also has PR labels and a stale PR bot.
- The API uses `feat:` for almost every commit (even for pipeline fixes and version bumps).
- There is no PR template, no CODEOWNERS file, and no written rule for reviews.
- We do not know if the `master` branch is protected in each repo.

## Tasks

- [ ] Write `CONTRIBUTING.md` (one copy for all repos): branch names (`feature/API-012-short-name`), commit format (`type(scope): message`), PR size, review rules.
- [ ] Add a PR template with: ticket link, what changed, how to test, screenshots, checklist.
- [ ] Write the **Definition of Done**: code reviewed, tests added, lint and typecheck pass, docs updated, no new warnings.
- [ ] Turn on branch protection for `master` in the three repos: PR required, 1 approval, CI must pass, no force push.
- [ ] Add issue templates (bug, feature, task).
- [ ] Explain how to take a ticket: assign yourself, move to "In progress", open a draft PR early.

## Acceptance criteria

- The same `CONTRIBUTING.md` and PR template exist in the three repos.
- Branch protection is on (show a screenshot in the PR).
- Every merged PR after this one links to a ticket.
