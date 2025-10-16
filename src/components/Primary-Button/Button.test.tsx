import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { PrimaryButton } from './Button';

describe('PrimaryButton', () => {
  it('renders the button with text', () => {
    render(<PrimaryButton>Click me</PrimaryButton>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  render(<PrimaryButton disabled>Disabled Button</PrimaryButton>);
<<<<<<< HEAD
    const button = screen.getByRole('button', { name: /Disabled Button/i });
    expect(button).toBeDisabled();
  
=======
  const element = screen.getByRole('button', { name: 'Disabled Button' });
  expect(element).toBeDisabled();

>>>>>>> 2647a95 (Save changes before rebase)
});
