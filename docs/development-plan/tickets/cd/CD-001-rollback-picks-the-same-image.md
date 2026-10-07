# CD-001: Fix the rollback: it restores the same image

| Field | Value |
| --- | --- |
| Repo | leetcode-cd |
| Type | Bug |
| Priority | P0 |
| Size | M |
| Phase | 1 - Stabilize and secure |
| Depends on | None |

## Problem

The workflow `rollback.yml`, strategy `git-history`, looks for the previous image like this:

```
git log --oneline -10 -- "$CONFIG_FILE" | awk 'NR==2{print $1}' | xargs -I{} git show {}:"$CONFIG_FILE" | jq -r '.image'
```

It takes the **second** commit that touched the file. But every deploy creates two commits on the same file:

1. The PR or merge commit that changes `image` to the new version.
2. The bot commit `chore(cd): update deploy metadata ...` (it only changes `deployedAt`, `deployedBy`, `commitSha`).

So the second newest commit has the **same image** as the current one. The rollback "restores" the image that is already running. In an incident, the team thinks it is safe, but nothing changes.

(The `manual-tag` strategy does not have this problem.)

## Tasks

- [ ] Change the logic: walk the commits of the file (newest first) and take the first image that is **different** from the current image.
- [ ] Show the chosen image and the commit in the plan before deploying.
- [ ] Fail with a clear message if there is no different image in the last N commits (use more than 10, and `fetch-depth: 0` or a larger depth).
- [ ] Make the logic a script (`scripts/find-previous-image.sh`) so you can test it locally.
- [ ] Create a test repo or fixture with fake history: A -> B -> bot commit -> C -> bot commit. Check that rollback from C gives B.
- [ ] Do a real rollback drill in ppd (see `X-010`).

## Acceptance criteria

- In the fixture test, rollback from `C` returns `B`.
- A rollback in ppd changes the running image to the previous version.
- The workflow summary shows "from X to Y".
