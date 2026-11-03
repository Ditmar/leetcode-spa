# CD-005: Make the image validation fail when it cannot be sure

| Field | Value |
| --- | --- |
| Repo | leetcode-cd |
| Type | Bug |
| Priority | P1 |
| Size | S |
| Phase | 1 - Stabilize and secure |
| Depends on | None |

## Problem

`validate-image.sh` has several "fail open" paths. The image is treated as valid when the script is **not** sure.

- If Docker Hub returns anything other than `200` or `404` (for example `401`, `429` rate limit, `500`), the script prints a warning and returns success: "Assuming the image exists".
- If the token request fails, `token` is empty or `null`. The script sends `Bearer null`, gets `401`, and then assumes the image exists.
- If `curl` or `jq` is missing, it sets `VALIDATED=true` and continues.
- `docker manifest inspect` is used only when Docker is running.

So the safety check can pass for a tag that does not exist, and then Railway fails to pull the image.

## Tasks

- [ ] Fail when the status is not `200` (after 3 retries with a short wait for `429` and `5xx`).
- [ ] Fail if the token is empty or `null`.
- [ ] Fail if `curl` or `jq` is missing (in CI they exist).
- [ ] Read the image digest from the manifest and print it. Save it in the JSON (`imageDigest`) so a tag cannot change silently later (see `CD-013`).
- [ ] Use the Docker Hub credentials when they are available (private repos and better rate limits).
- [ ] Test with: existing image, missing tag, missing repo, no network.

## Acceptance criteria

- A missing tag stops the deploy with a clear message.
- A Docker Hub outage stops the deploy (and is not ignored).
