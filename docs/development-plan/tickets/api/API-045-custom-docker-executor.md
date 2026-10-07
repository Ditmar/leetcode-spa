# API-045: Build our own Docker executor (advanced, optional)

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Feature |
| Priority | P3 |
| Size | L |
| Phase | 4 - More features |
| Depends on | API-043 |

## Problem

The MVP uses Piston (`X-004`). Some students want to learn how a code executor works by building one. This is a good learning project, but it is dangerous to use in production without strong isolation. Do it **after** the MVP, and only replace Piston if it is as safe.

## Tasks

- [ ] Write a second adapter `DockerCodeRunner` that implements the same `CodeRunner` interface (`API-030`). The worker chooses the adapter with a config value.
- [ ] One small image per language (non-root user, no compilers or tools that are not needed).
- [ ] Run each job in a new container with at least: `--network none`, `--memory`, `--cpus`, `--pids-limit`, `--read-only` with a small `tmpfs` for `/tmp`, `--cap-drop ALL`, `--security-opt no-new-privileges`, a seccomp profile, and a hard timeout that kills the container.
- [ ] Always remove the container (also after a crash). Add a cleanup job for old containers.
- [ ] Consider stronger isolation (gVisor `runsc` or Firecracker). Write what you learn.
- [ ] Do **not** mount the Docker socket in a container that runs user code. Run the worker on a dedicated machine.
- [ ] Run the same abuse tests as in `API-030`, and the same tests as `API-044`.
- [ ] Compare with Piston: speed, memory use, safety, work to maintain. Write the result in `docs/code-runner.md`.

## Acceptance criteria

- The same test suite passes with Piston and with `DockerCodeRunner`.
- All abuse tests are stopped without damage to the host.
- The team decides, in writing, if the custom executor can replace Piston.

## Hints

Docker alone is **not** a strong sandbox against attacks on the kernel. Ask the teacher before you use this in production.
