import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import { PrimaryButton } from './Button';

test('render PrimaryButton with text', () => {
  render(<PrimaryButton>Click me</PrimaryButton>);
  const button = screen.getByText(/Click me/i);
  expect(button).toBeInTheDocument();
});

test('PrimaryButton should be disabled', () => {
  render(<PrimaryButton disabled>Click me</PrimaryButton>);
  const button = screen.getByRole('button', { name: /Click me/i });
  expect(button).toBeDisabled();
});

