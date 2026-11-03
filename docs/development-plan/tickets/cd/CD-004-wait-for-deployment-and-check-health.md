# CD-004: Wait for the Railway deployment and check that the app is healthy

| Field | Value |
| --- | --- |
| Repo | leetcode-cd |
| Type | Feature |
| Priority | P1 |
| Size | L |
| Phase | 1 - Stabilize and secure |
| Depends on | None |

## Problem

`deploy-railway.sh` calls two Railway GraphQL mutations (`serviceInstanceUpdate` and `serviceInstanceDeploy`). When Railway accepts them, the script prints "DESPLIEGUE COMPLETADO" and the workflow says "Deployed ... successfully". Then the bot commits `deployedAt`.

Nobody checks if the new container **builds, starts and answers**. If the new image crashes at start (for example, a bad migration or a missing env variable), the pipeline is green but production is down. The JSON files then say the new version is deployed.

Also `curl -s` hides HTTP errors; there is no timeout and no retry.

## Tasks

- [ ] Use the existing `/health` route first. When `API-040` is done, switch to `/health/ready`.
- [ ] After the deploy mutation, poll the deployment status in Railway (`deployments` query) until `SUCCESS`, `FAILED` or `CRASHED`. Use a timeout (for example 10 minutes).
- [ ] Add `healthUrl` to each JSON file. After the status is `SUCCESS`, call it with `curl --fail --max-time 10 --retry 5`.
- [ ] If anything fails, make the job fail and do **not** commit the new metadata.
- [ ] Optional: on failure in `prod`, deploy the previous image automatically and send an alert (`CD-010`).
- [ ] Use `curl --fail-with-body --max-time` for the Railway API calls.
- [ ] Add `DRY_RUN` tests for the script.

## Acceptance criteria

- Deploying an image that crashes at start makes the workflow fail.
- The JSON metadata only changes after a healthy deploy.
- The workflow summary shows the Railway deployment ID and the health result.
