# CD-013: Fix the deploy metadata and the version numbers

| Field | Value |
| --- | --- |
| Repo | leetcode-cd |
| Type | Bug |
| Priority | P2 |
| Size | M |
| Phase | 1 - Stabilize and secure |
| Depends on | CD-005 |

## Problem

The metadata in the JSON files is not reliable.

- `commitSha` has two meanings. `deploy-railway.sh` writes `GITHUB_SHA` of **this CD repo**. `promote.yml` copies the `commitSha` of the source file. Nobody writes the commit of the **application**.
- `apps/api-leetcode/*.json` has `"commitSha": "pending"`.
- The API files use `ditmar/api-leetcode:0.1.0`, but the API `package.json` is `0.0.2` and its CI publishes tags from that number. Check that the tag `0.1.0` exists on Docker Hub.
- The SPA files use `0.11.0`, but the SPA repo is at `0.11.3`.
- In the SPA files, prod `deployedAt` (2026-06-09) is older than ppd (2026-06-17) with the same image. Prod `notes` mention an approval from 2026-05-20, which is old.
- A tag is mutable on Docker Hub. The files do not save the image **digest**.

## Tasks

- [ ] Verify with the team that all images in the files exist and are the ones running (check Railway).
- [ ] Add the OCI label `org.opencontainers.image.revision` (app commit) and `org.opencontainers.image.version` in the app Dockerfiles or CI.
- [ ] In the deploy script, read this label from the image (or the digest from the manifest) and write `commitSha` (app commit) and `imageDigest`. Rename the CD commit to `cdCommitSha` if you still want it.
- [ ] Deploy by digest if possible (`image@sha256:...`) so a tag cannot change under you.
- [ ] Fix the old values and notes.
- [ ] Update the JSON schema from `CD-009`.

## Acceptance criteria

- Each JSON file shows the real app commit and digest of what runs.
- `package.json` version, Docker tag and JSON image are the same for the same release.
