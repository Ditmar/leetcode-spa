import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { PrimaryButton } from './Button';

describe('PrimaryButton', () => {
  it('renders the button with text', () => {
    render(<PrimaryButton>Click me</PrimaryButton>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  render(<PrimaryButton disabled>Disabled Button</PrimaryButton>);
    const button = screen.getByRole('button', { name: /Disabled Button/i });
    expect(button).toBeDisabled();
  
});
