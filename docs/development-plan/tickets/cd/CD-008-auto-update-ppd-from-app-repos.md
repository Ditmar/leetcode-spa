# CD-008: Update `ppd.json` automatically when an app publishes an image

| Field | Value |
| --- | --- |
| Repo | leetcode-cd |
| Type | Feature |
| Priority | P1 |
| Size | L |
| Phase | 2 - Connect SPA and API |
| Depends on | API-019, CD-009 |

## Problem

Today a person must edit `ppd.json` by hand and open a PR after each new image. The README shows an idea ("Option B": the app CI updates the CD repo) but no app repo does it. Humans forget, copy a wrong tag, or deploy late.

## Tasks

- [ ] After an app repo publishes an image from `master`, its CI opens a PR in `leetcode-cd` that changes `apps/<app>/ppd.json` (`image` and `notes` only).
- [ ] Use a GitHub App or a fine-grained token (`CD_REPO_TOKEN`) with the smallest rights: write on the CD repo only. Store it as a secret in the app repos.
- [ ] Alternative: `repository_dispatch` event that starts a workflow in the CD repo that opens the PR.
- [ ] The PR checks (`CD-009`) validate the tag and the image.
- [ ] Merge needs one review (and a GitHub Environment approval for ppd if wanted).
- [ ] Keep prod manual: only `promote.yml` changes `prod.json`.
- [ ] Write the steps in the README.

## Acceptance criteria

- Merging to `master` in `api-leetcode` or `leetcode-spa` creates a PR in `leetcode-cd`, with no manual edit.
- The token has no rights on other repos.
- If a PR for the same app is open, it is updated and not duplicated.
