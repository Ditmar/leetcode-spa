# API-020: Remove duplicate and dead code

| Field | Value |
| --- | --- |
| Repo | api-leetcode |
| Type | Refactor |
| Priority | P1 |
| Size | M |
| Phase | 1 - Stabilize and secure |
| Depends on | API-001, API-006 |

## Problem

The code has many copies and unused files.

- **Two Prisma clients:** `share/infrastructure/prisma.ts` (`getPrismaClient`, with SIGTERM handlers) is never used. `prisma-client.ts` is used.
- **Two auth middlewares:** a fake one (`auth.middleware.ts`, see `API-001`) and the JWT one.
- **Two `ValidationError` classes:** in `auth-errors.ts` and in `validation-error.ts`.
- **Course errors in four files:** `CourseErrors.ts` (has `UserAlreadyEnrolledError`, never used), `already-enrolled-error.ts`, `course-not-found-error.ts`, `index.ts`.
- `AuthMockRepository` is never used.
- **Two "user" domains** (`user/` and `auth/`) for the same database table.
- **Names:** the folder `tests/infraestructure` has a typo; the folder `user/application/user-delete.ts/` is named like a file; `share` (should be `shared`); `tests` module uses PascalCase file names, the others use kebab-case.
- `print()` methods with `console.log` inside domain entities.
- `tsconfig.json` has the path `@prisma` to `./src/generated/client`, which does not exist. `.gitignore` has `/src/generated/prisma`.
- `package.json` has `"prepare": "npx husky install"`, which is deprecated in Husky 9.

## Tasks

- [ ] Delete the unused files and keep one copy of each class.
- [ ] Rename folders and files to one style. Update imports.
- [ ] Remove `print()` and `console.log`.
- [ ] Clean `tsconfig.json` paths and `.gitignore`.
- [ ] Update Husky setup to the current way (`"prepare": "husky"`).
- [ ] Make sure `npm run build` and `npm run lint` pass.

## Acceptance criteria

- No file is unused (check with `ts-prune` or `knip`).
- Each error class exists once.
- Build and lint pass.

## Hints

Good ticket to split in 3 small PRs: (1) unused files, (2) errors, (3) renames.
