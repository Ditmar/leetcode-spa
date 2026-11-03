# X-009: Do a security review before the first public release

| Field | Value |
| --- | --- |
| Repo | all |
| Type | Security |
| Priority | P1 |
| Size | M |
| Phase | 5 - Quality and launch |
| Depends on | API-001, API-002, API-009, API-010, SPA-033, CD-002 |

## Problem

This project handles passwords, tokens and user code. A mistake can be costly. We need a final check before real users arrive.

## Tasks

- [ ] Use the OWASP Top 10 as a checklist. For each item write: "OK", "fixed in ticket X" or "risk accepted".
- [ ] Check: broken access control (can user A read user B's data?), injection, secrets in git history, vulnerable dependencies (`npm audit`, `yarn audit`), security headers, rate limits, logging of sensitive data.
- [ ] Run a dependency scan in CI for all repos (for example Dependabot).
- [ ] Check git history for old secrets (`config/default.json` in the API had placeholder secrets). Rotate any real secret that was ever committed.
- [ ] Try to break the code runner (infinite loop, fork bomb, big output, network access, file read).
- [ ] Write `docs/security-review.md` with the results.

## Acceptance criteria

- All P0 and P1 security findings are fixed or accepted in writing.
- Dependabot (or similar) is on in the three repos.
- Production secrets are different from any value in git.
