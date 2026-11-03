# CD-015: Write a runbook for deploys and incidents

| Field | Value |
| --- | --- |
| Repo | leetcode-cd |
| Type | Docs |
| Priority | P3 |
| Size | S |
| Phase | 5 - Quality and launch |
| Depends on | CD-001, CD-012 |

## Problem

When production fails, people will not remember the steps. The README has a lot of text but no short guide for "what do I do now?".

## Tasks

- [ ] Write `docs/runbook.md` in simple English.
- [ ] Sections: how to deploy, how to roll back (one page with commands), how to read logs in Railway, how to rotate a secret, what to do if a migration fails, what to do if the database is down, who approves prod, who to call.
- [ ] Add an incident template (what happened, impact, timeline, cause, fix, next steps).
- [ ] Do a "game day": the teacher breaks ppd on purpose and the students use the runbook.

## Acceptance criteria

- The game day is finished in less than 30 minutes using only the runbook.
- The runbook is linked in the README.
