import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import Counter from './Counter';

describe('Counter Component', () => {
  it('renders with initial count of 1', () => {
    render(<Counter />);
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });

  it('increments count when button is clicked', () => {
    render(<Counter />);

    const button = screen.getByRole('button', { name: 'Increment' });
    fireEvent.click(button);

    expect(screen.getByText('Count: 2')).toBeInTheDocument();
  });

  it('increments count multiple times', () => {
    render(<Counter />);

    const button = screen.getByRole('button', { name: 'Increment' });

    // Click 3 times
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(screen.getByText('Count: 4')).toBeInTheDocument();
  });
});
