# CD-002: Stop shell injection in the workflows

| Field | Value |
| --- | --- |
| Repo | leetcode-cd |
| Type | Security |
| Priority | P0 |
| Size | M |
| Phase | 1 - Stabilize and secure |
| Depends on | None |

## Problem

The workflows put user inputs **directly inside shell scripts** with `${{ ... }}`. GitHub replaces the text before the shell runs. Examples:

- `rollback.yml`: `--arg note "ROLLBACK ... Razón: ${{ inputs.reason }}"` and the commit message with `${{ inputs.reason }}`; `TARGET_IMAGE="${IMAGE_BASE}:${{ inputs.target_tag }}"`; `CONFIG_FILE="apps/${{ inputs.app }}/..."`.
- `promote.yml`: `${{ inputs.notes }}`, `${{ inputs.app }}`.
- `deploy.yml`: `APP="${{ inputs.app }}"`.

If a value has a quote or `"; command; "`, the shell runs it. The job has `contents: write` and (in rollback and deploy) the `RAILWAY_API_TOKEN` secret. Only people with write access can start these workflows, but a mistake (a quote in the reason text) can break the job too.

Also, `app` is not checked. A value like `../x` can point to another path (`apps/../x/prod.json`).

## Tasks

- [ ] Pass all inputs through `env:` and use them as `"$VAR"` in the script. Never write `${{ inputs.* }}` inside `run:`.
- [ ] Validate `app` with a pattern (`^[a-z0-9-]+$`) and check that the folder `apps/<app>` exists.
- [ ] Validate `target_tag` (`^[0-9]+\.[0-9]+\.[0-9]+(-[A-Za-z0-9.]+)?$`).
- [ ] Build commit messages and PR bodies from environment variables, not from the template.
- [ ] Add `actionlint` to the PR checks (`CD-009`). It finds this problem.
- [ ] Test with a reason like `x"; echo HACKED #`. The text must stay text.

## Acceptance criteria

- `grep -n '\${{ *inputs' .github/workflows/*.yml` finds no match inside `run:` blocks.
- A rollback with special characters in the reason works and the reason is saved as plain text.
- `app=../x` is rejected.
