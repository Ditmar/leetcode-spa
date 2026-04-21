import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';

import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders label', () => {
    render(<Checkbox label="Test label" />);
    expect(screen.getByText('Test label')).toBeInTheDocument();
  });

  it('toggles checked state', async () => {
    const user = userEvent.setup();

    render(<Checkbox label="Check" />);
    const checkbox = screen.getByRole('checkbox', { name: 'Check' });

    await user.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it('supports indeterminate state', () => {
    render(<Checkbox label="Indeterminate" indeterminate />);
    const checkbox = screen.getByRole('checkbox', {
      name: 'Indeterminate',
    });

    expect(checkbox).toHaveAttribute('aria-checked', 'mixed');
  });

  it('handles disabled state', () => {
    render(<Checkbox label="Disabled" disabled />);
    const checkbox = screen.getByRole('checkbox', { name: 'Disabled' });

    expect(checkbox).toBeDisabled();
  });

  it('calls onChange', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(<Checkbox label="Click me" onChange={handleChange} />);
    const checkbox = screen.getByRole('checkbox', {
      name: 'Click me',
    });

    await user.click(checkbox);

    expect(handleChange).toHaveBeenCalled();
  });
});
