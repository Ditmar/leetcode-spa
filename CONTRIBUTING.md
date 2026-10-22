# Contributing Guidelines

This document defines the collaboration workflow for the `leetcode-spa`, `api-leetcode`, and `leetcode-cd` repositories.

All contributors must follow these guidelines to maintain code quality, consistency, and traceability.

## 1. Branch Naming Convention

Create a separate branch for each issue or task.

Use the following format:

`type/TICKET-ID-short-description`

Examples:

- `feature/API-012-user-authentication`
- `fix/API-010-request-timeout`
- `docs/X-006-team-workflow`

Use descriptive names and avoid working directly on `master`.

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

1. Explicitly link the corresponding GitHub issue or ticket in the Pull Request description.
2. Explain the changes implemented.
3. Describe the tests performed.
4. Include screenshots when applicable.
5. Pass the required CI checks.
6. Receive at least one approval before merging.
7. Resolve review comments.

Keep Pull Requests small and focused on a single issue whenever possible. Split large changes into smaller Pull Requests to simplify review and testing.

Create Draft Pull Requests for work that is not yet ready for review.

All Pull Requests must target the `next` integration branch. If a repository does not have a `next` branch, confirm the integration strategy with the repository maintainer before opening a Pull Request.

## 4. Definition of Done (DoD)

A task is considered complete when:

- All acceptance criteria have been met.
- The implementation has been tested.
- Applicable linting and automated tests pass.
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
