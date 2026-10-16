# Testing

This project uses Vitest and React Testing Library for unit and component tests.

## Commands

Run from the repository root:

```bash
# Run tests in watch mode
yarn test

# Run all tests once
yarn test:run

# Open the Vitest UI
yarn test:ui

# Run tests with coverage
yarn test:coverage

# Run Vitest explicitly in watch mode
yarn test:watch
```

To run one test file:

```bash
yarn vitest run src/services/api/apiClient.test.ts
```

## Test locations

Tests live next to the code they cover and use the `.test.*` or `.spec.*` filename pattern. Examples in this repository include:

```text
src/
├── component-catalog/
│   └── Alert/
│       ├── Alert.tsx
│       └── Alert.test.tsx
├── services/
│   ├── api/
│   │   ├── apiClient.ts
│   │   └── apiClient.test.ts
│   └── auth/
│       ├── authService.ts
│       └── authService.test.ts
├── style-library/
│   └── stories/
│       ├── SimpleMuiExample.test.tsx
│       └── SimpleMuiExample.userEvent.test.tsx
└── test/
    ├── setup.ts
    └── test-utils.tsx
```

Vitest's main configuration includes test files under `src/` matching `*.test.*` or `*.spec.*` and excludes Storybook story files.

## Configuration

The main Vitest configuration is `vitest.config.ts`:

- Uses the jsdom environment.
- Enables Vitest globals such as `describe`, `it`, and `expect`.
- Loads `src/test/setup.ts` before tests.
- Uses the React plugin for JSX.

`src/test/setup.ts` loads the jest-dom matchers and provides mocks for `ResizeObserver`, `window.matchMedia`, and `window.getComputedStyle`.

`src/test/test-utils.tsx` provides a custom `render` helper that wraps React components with a Material UI `ThemeProvider` and `CssBaseline`. Use it for components that require the project test theme:

```tsx
import { render, screen } from '../../test/test-utils';
import { describe, expect, it } from 'vitest';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders its content', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
```

For components that do not need the Material UI wrapper, import `render` from `@testing-library/react`.

## User interactions

Use `@testing-library/user-event` for interactions that represent user behavior:

```tsx
import { render, screen } from '../../test/test-utils';
import userEvent from '@testing-library/user-event';
import { expect, it } from 'vitest';
import MyComponent from './MyComponent';

it('responds to a user action', async () => {
  const user = userEvent.setup();
  render(<MyComponent />);

  await user.click(screen.getByRole('button', { name: 'Save' }));

  expect(screen.getByText('Saved')).toBeInTheDocument();
});
```

Import `render` in the example above from `../../test/test-utils` or `@testing-library/react`, depending on whether the component needs the Material UI wrapper.

## Storybook

Start Storybook with `yarn storybook`. `vitest.config.ts` also exports a separate configuration for browser-based Storybook testing with Playwright. The default Vitest configuration excludes story files from the regular unit-test run.

## Coverage

Generate a coverage report with:

```bash
yarn test:coverage
```

Vitest writes the report to `coverage/`.

## Guidelines

- Prefer queries based on accessible roles and labels, such as `getByRole`, over test IDs.
- Test observable behavior rather than implementation details.
- Use `userEvent` for realistic interactions and `await` its actions.
- Give tests descriptive names that explain the behavior being checked.
