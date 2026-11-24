# Contributing Guidelines

This document defines the collaboration workflow for the `leetcode-spa`, `api-leetcode`, and `leetcode-cd` repositories.

All contributors must follow these guidelines to maintain code quality, consistency, and traceability.

## 1. Branch Naming Convention

Create a separate branch for each issue or task.

Use the following format:

- `leetcode-spa`: `feature/leetcode-{xxx}`
- `api-leetcode`: `feature/api-leetcode-{xxx}`
- `leetcode-cd`: The repository currently uses both issue-number-based branches (for example, `feature/leetcode-cd-23`) and ticket-ID-based branches (for example, `feature/CD-002-stop-shell-injection`). Bug-fix branches may also use the `fix/` prefix. The maintainer must confirm the standard format before it is enforced.

Replace `{xxx}` with the corresponding GitHub issue number for `leetcode-spa` and `api-leetcode`. For `leetcode-cd`, the naming convention is pending maintainer confirmation.

Examples:

- `feature/leetcode-368` for `leetcode-spa`.
- `feature/api-leetcode-60` for `api-leetcode`.
- `feature/leetcode-cd-23` for `leetcode-cd` (existing issue-number-based example; the standard is pending maintainer confirmation).

Use descriptive branch names and avoid working directly on `master`.
## 2. Commit Message Convention

Follow Conventional Commits using the Angular convention.

Format:

`type(scope): description`

Allowed common types:

- `feat`: New functionality.
- `fix`: Bug fixes.
- `docs`: Documentation changes.
- `style`: Formatting changes.
- `refactor`: Code restructuring.
- `test`: Adding or updating tests.
- `chore`: Maintenance tasks.
- `ci`: Continuous integration changes.

Examples:

`feat(auth): add user authentication`

`fix(api): handle invalid requests`

`docs(workflow): add contribution guidelines`

Keep commits focused and avoid unnecessary changes to existing code.

## 3. Pull Request Guidelines

Every Pull Request must:

1. Reference the corresponding GitHub issue or ticket in the Pull Request description. Use `Part of #<issue-number>` when the issue requires multiple Pull Requests or must remain open until all acceptance criteria are met.

2. Link the Pull Request to the corresponding issue using the **Development** section in the GitHub sidebar. Referencing an issue in the description alone is not sufficient, especially when the PR targets `next`.

3. Add the Pull Request to the **leetcode** project using the **Projects** section in the GitHub sidebar. Pull Requests that are not associated with the project will not be reviewed.
4. Explain the changes implemented.
5. Describe the tests performed.
6. Include screenshots when applicable.
7. Pass the required CI checks.
8. Receive at least one approval before merging.
9. Resolve review comments.

Keep Pull Requests small and focused on a single issue whenever possible. Split large changes into smaller Pull Requests to simplify review and testing.

Create Draft Pull Requests for work that is not yet ready for review.

Pull Requests must target the appropriate integration branch:

- `leetcode-spa`: `next`.
- `api-leetcode`: `next`.
- `leetcode-cd`: `master`.

In `leetcode-cd`, merging a Pull Request into `master` triggers a deployment through `deploy.yml`. Therefore, every merge must be reviewed and approved before proceeding.

## 4. Definition of Done (DoD)

A task is considered complete when:

- All acceptance criteria have been met.
- The implementation has been tested.
- Lint checks pass.
- Typecheck passes when the repository provides a typecheck script.
- Applicable automated tests pass.
- No new warnings are introduced.
- CI checks are successful.
- Documentation is updated when necessary.
- The Pull Request references its corresponding ticket.
- Review comments are resolved.
- At least one reviewer has approved the Pull Request.
- The changes have been merged into the appropriate branch.

## 5. Issue Workflow

All contributors must follow this workflow:

1. Select an available issue.
2. Assign the issue to yourself.
3. Move the issue to **In Progress**.
4. Create a branch following the naming convention.
5. Implement the requested changes.
6. Open a Draft Pull Request linked to the issue.
7. Run the required checks.
8. Mark the Pull Request as ready for review.
9. Request a review from the assigned reviewer.
10. Address feedback and merge after approval and successful CI checks.

## 6. Branch Protection Rules

The `master` branch must be protected with the following rules:

- Require a Pull Request before merging.
- Require at least one approval.
- Require successful CI checks.
- Prevent force pushes.

Direct changes to the protected branch are not allowed.

Repository administrators or authorized maintainers are responsible for configuring and verifying these settings.

## 7. General Collaboration Rules

- Respect the existing project architecture and conventions.
- Avoid modifying unrelated files.
- Keep documentation clear and up to date.
- Communicate blockers or important changes to the team.
- Do not merge Pull Requests with failing required checks.
- Ensure every merged Pull Request is associated with a ticket.
