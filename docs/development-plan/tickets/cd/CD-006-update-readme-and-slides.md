# CD-006: Make README and slides match the real system

| Field | Value |
| --- | --- |
| Repo | leetcode-cd |
| Type | Docs |
| Priority | P1 |
| Size | M |
| Phase | 1 - Stabilize and secure |
| Depends on | None |

## Problem

`README.md` and `SLIDES.md` describe another system.

| Docs say | Reality |
| --- | --- |
| Repo `railway-cd` | Repo `leetcode-cd` |
| App `my-app` | Apps `api-leetcode` and `leetcode-spa` |
| Branch `main` | Branch `master` (the workflows use `master`) |
| Four environments: dev, qa, ppd, prod | Only `ppd` and `prod` exist |
| `dev` auto-deploys when you merge | `deploy.yml` only reacts to `ppd.json` and `prod.json` |
| Promotion `dev -> qa -> ppd -> prod` | `promote.yml` and `promote.sh` allow only `ppd -> prod` |
| "Option A: edit `dev.json`" | `dev.json` does not exist |
| "Option B": app CI updates the CD repo | Not implemented in any app repo (see `CD-008`) |
| Rollback "creates a PR" in one place | The workflow deploys and pushes directly to `master` (see `CD-011`) |

Also: the README starts without a title or intro, it is in Spanish while the code and tickets are in English, and the `.github/workflows/deploy.yml` comments say `main`.

## Tasks

- [ ] Choose the language for docs (English suggested) and use it everywhere.
- [ ] Rewrite the README for the real setup: repos, environments, files, secrets, flow, commands.
- [ ] Update `SLIDES.md` (or delete it if nobody uses it).
- [ ] Add a diagram of the real flow (app CI -> Docker Hub -> PR in CD -> deploy -> Railway).
- [ ] Add a "How do I deploy a new version?" page with real file names and examples.
- [ ] Fix comments in the workflows.

## Acceptance criteria

- Every file, branch, and command in the docs exists.
- A student can follow the guide and deploy to ppd without help.
