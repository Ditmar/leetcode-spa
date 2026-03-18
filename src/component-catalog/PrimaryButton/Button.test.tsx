import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';

import { PrimaryButton } from './Button';

test('disables while loading', async () => {
  render(<PrimaryButton loading>Create Account</PrimaryButton>);
  const btn = screen.getByRole('button', { name: /create account/i });
  expect(btn).toBeDisabled();
});
