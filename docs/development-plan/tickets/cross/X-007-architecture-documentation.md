# X-007: Write the architecture overview

| Field | Value |
| --- | --- |
| Repo | all |
| Type | Docs |
| Priority | P2 |
| Size | M |
| Phase | 5 - Quality and launch |
| Depends on | X-003 |

## Problem

New students must read a lot of code to understand how things fit. The CD README and slides explain deployment, but nothing explains the application: which repo does what, how data moves, and which folder rules we follow.

## Tasks

- [ ] Draw a system diagram: browser, SPA (Astro server), API, database, code runner, Railway, Docker Hub.
- [ ] Explain the API folder rules (hexagonal style): `domain`, `application`, `infrastructure`, and what can import what.
- [ ] Explain the SPA folders: `component-catalog`, `style-library`, `services`, `ui`, `app`, `pages`.
- [ ] Add a glossary: ADR, BFF, RBAC, sandbox, migration, island (Astro).
- [ ] Add a "where do I put new code?" table.

## Acceptance criteria

- `docs/architecture.md` exists and is linked from every README.
- A new student can find where to add a new API endpoint and a new SPA page by reading it.
