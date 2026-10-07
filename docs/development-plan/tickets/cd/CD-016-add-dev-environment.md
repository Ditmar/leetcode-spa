# CD-016: Decide and create a `dev` environment

| Field | Value |
| --- | --- |
| Repo | leetcode-cd |
| Type | Feature |
| Priority | P3 |
| Size | M |
| Phase | 4 - More features |
| Depends on | CD-008, CD-006 |

## Problem

Only `ppd` and `prod` exist. Every change goes first to `ppd`, which is the "almost production" test place. Students cannot try unfinished work online without touching it. The old docs promised `dev` and `qa`.

## Tasks

- [ ] Decide with the teacher: add `dev` (recommended), add `dev` and `qa`, or keep two environments and remove the other names from all docs.
- [ ] For `dev`: create a Railway environment with its own database and variables (no production data!). Check the cost.
- [ ] Add `apps/<app>/dev.json`, a GitHub Environment `dev` (no required reviewers), and include `dev.json` in the `deploy.yml` trigger.
- [ ] Make app CI update `dev.json` after each merge (`CD-008`). Update `promote.yml` to `dev -> ppd -> prod`.
- [ ] Update the rollback workflow options and the docs.

## Acceptance criteria

- A merge to `master` in an app repo appears in `dev` within 10 minutes.
- The promotion chain in the workflow, the script and the docs is the same.
