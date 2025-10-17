import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

import { TestCard } from './TestCard';

const defaultProps = {
  description: 'This is a test description',
  logo: 'https://example.com/image.jpg',
  title: 'Test Title',
};

describe('TestCard Component', () => {
  it('calls onSelect once when focused and Enter key is pressed', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(<TestCard {...defaultProps} onSelect={handleClick} />);

    const button = screen.getByRole('button');
    button.focus();
    expect(button).toHaveFocus();

    await user.keyboard('{Enter}');

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('calls onSelect once when focused and Space key is pressed', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(<TestCard {...defaultProps} onSelect={handleClick} />);

    const button = screen.getByRole('button');
    button.focus();
    expect(button).toHaveFocus();

    await user.keyboard(' ');

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('calls onSelect when clicked', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(<TestCard {...defaultProps} onSelect={handleClick} />);

    const button = screen.getByRole('button');
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not throw when clicked without onSelect', async () => {
    const user = userEvent.setup();
    render(<TestCard {...defaultProps} />);

    const button = screen.getByRole('button');
    await expect(user.click(button)).resolves.not.toThrow();
  });

  it('renders title and description correctly', () => {
    render(<TestCard {...defaultProps} />);

    expect(screen.getByTestId('test-card-title')).toHaveTextContent(defaultProps.title);
    expect(screen.getByTestId('test-card-description')).toHaveTextContent(defaultProps.description);
  });
});
