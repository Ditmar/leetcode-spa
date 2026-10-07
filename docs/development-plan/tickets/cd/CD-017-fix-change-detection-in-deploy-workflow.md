# CD-017: Fix how `deploy.yml` finds changed files

| Field | Value |
| --- | --- |
| Repo | leetcode-cd |
| Type | Bug |
| Priority | P2 |
| Size | S |
| Phase | 1 - Stabilize and secure |
| Depends on | CD-002 |

## Problem

The job `detect-changes` uses `fetch-depth: 2` and `git diff --name-only HEAD~1 HEAD`. It only compares the **last commit**. If one push has many commits (for example a "rebase and merge" of a PR with 2 commits, or a direct push), changes in earlier commits are not deployed. Nobody notices.

Other cases are not handled:

- A deleted file creates a matrix entry that fails later.
- On a new branch or first push, `HEAD~1` may not exist (the code has a fallback with `HEAD^`, which fails the same way).
- The matrix is built by a `while read` loop with many `jq` calls. It is hard to read.

## Tasks

- [ ] Use the range `${{ github.event.before }}..${{ github.sha }}` (with `fetch-depth: 0`). Handle the all-zero `before` value.
- [ ] Ignore deleted files (`--diff-filter=AM`).
- [ ] Build the matrix in one `jq` command.
- [ ] Add a test that runs the logic on a fixture repo with: one commit, many commits, deleted file, two apps in one push.

## Acceptance criteria

- A push with 3 commits that change `ppd.json` in the first commit still deploys.
- Deleting a file does not break the workflow.
