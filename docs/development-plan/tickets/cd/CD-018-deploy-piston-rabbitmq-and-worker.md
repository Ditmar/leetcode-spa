# CD-018: Deploy Piston, RabbitMQ and the worker

| Field | Value |
| --- | --- |
| Repo | leetcode-cd |
| Type | Feature |
| Priority | P1 |
| Size | L |
| Phase | 3 - Core product |
| Depends on | X-004, API-043 |

## Problem

The CD repo only deploys two apps (`api-leetcode` and `leetcode-spa`) to Railway. The code execution system needs three more parts:

1. **Piston**: needs a machine where we control Docker and security. We plan a small VM.
2. **RabbitMQ**: a queue server.
3. **Worker**: the second entry point of the API image (`API-043`), as its own service.

## Tasks

- [ ] **Piston VM**
  - Choose the VM (provider and size). Check the cost with the teacher.
  - Write the setup as files in the repo (`infra/piston/docker-compose.yml` and a short setup script), not as manual steps.
  - Install Piston and the runtimes we need (JavaScript and Python first). Write the commands to add or update a language.
  - Firewall: only the worker (and the admin) can reach the Piston port. It must **not** be open to the internet. If the worker is on Railway, use a private network or a reverse proxy with a token and an IP allow list.
  - Keep the system updated. Turn on automatic security updates.
- [ ] **RabbitMQ**
  - Choose where it runs: on the same VM, as a Railway service, or as a managed service with a free plan (check the current limits).
  - Set a strong password, close the management port to the internet, and turn on persistent storage.
- [ ] **Worker service**
  - Create a new Railway service that uses the same API image with the start command `node dist/worker.js`.
  - Add a `worker` entry for ppd and prod in `apps/` (new JSON files) and make the deploy and promote workflows work for it. The worker version must be the same as the API version.
  - Add its variables to the env template (`CD-007`): `RABBITMQ_URL`, `PISTON_URL`, `PISTON_TOKEN` and the limits.
- [ ] **Checks**
  - Add a check that the worker is alive (for example a small health port, or the age of the last processed job).
  - Add an alert when the queue has more than N waiting jobs for more than M minutes.
- [ ] Write a section in the runbook (`CD-015`): Piston is down, queue is full, worker is stuck, how to restart.
- [ ] Do the abuse tests from `API-030` against the real Piston on the VM.

## Acceptance criteria

- From ppd, a submitted solution is run by Piston on the VM and the result appears in the SPA.
- The Piston port is not reachable from the public internet (test with a port scan from outside).
- Stopping the worker does not lose jobs.
- Everything on the VM can be created again from the files in the repo.
- Cost per month is written in the README.
