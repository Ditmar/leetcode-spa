# X-010: Prepare the v1.0.0 release

| Field | Value |
| --- | --- |
| Repo | all |
| Type | Process |
| Priority | P2 |
| Size | M |
| Phase | 5 - Quality and launch |
| Depends on | X-009, CD-013, CD-014 |

## Problem

Versions and environments are not aligned.

- API `package.json` says `0.0.2`, but the CD repo deploys `ditmar/api-leetcode:0.1.0` to ppd and prod.
- The SPA is at `0.11.3` and uses `release-it`; the API does not.
- `commitSha` in the API deploy files is `pending`.
- Nobody wrote what "ready for production" means.

## Tasks

- [ ] Choose one versioning rule (Semantic Versioning) and use `release-it` in the API too.
- [ ] Write a release checklist: all P0/P1 tickets done, CI green, migrations tested on a copy of production data, smoke tests pass in ppd, rollback tested.
- [ ] Do a **rollback drill** in ppd: deploy a bad version on purpose and roll back (see `CD-001`).
- [ ] Write the release notes template.
- [ ] Create the tag `v1.0.0` in the three repos.

## Acceptance criteria

- The release checklist is in the CD repo and every item is checked.
- Versions in `package.json`, Docker Hub, and the CD files match.
- A release note was published.
