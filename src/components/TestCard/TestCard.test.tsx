import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';
import { TestCard } from './TestCard';
import userEvent from '@testing-library/user-event';

describe('TestCard Component', () => {
  const baseProps = {
    title: 'Test Card Title',
    description: 'This is a test description.',
    onSelect: vi.fn(),
  };

  it('calls onSelect when clicked', async () => {
    const handleClick = vi.fn();
    render(
      <TestCard {...baseProps} logo="https://via.placeholder.com/64" onSelect={handleClick} />
    );
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('calls onSelect when focused and Enter key is pressed', async () => {
    const handleClick = vi.fn();
    render(<TestCard {...baseProps} onSelect={handleClick} />);
    const button = screen.getByRole('button');
    button.focus();
    expect(button).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('calls onSelect when focused and Space key is pressed', async () => {
    const handleClick = vi.fn();
    render(<TestCard {...baseProps} onSelect={handleClick} />);
    const button = screen.getByRole('button');
    button.focus();
    expect(button).toHaveFocus();
    await userEvent.keyboard(' ');
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('handles long title without breaking layout', () => {
    const longTitle =
      'This is a very long title to test overflow handling in the TestCard component.';
    render(<TestCard {...baseProps} logo="https://via.placeholder.com/64" title={longTitle} />);
    expect(screen.getByTestId('test-card-title')).toHaveTextContent(longTitle);
  });

  it('renders logo as image', () => {
    render(<TestCard {...baseProps} logo="https://via.placeholder.com/64" />);
    const logo = screen.getByRole('img', { name: baseProps.title }) as HTMLImageElement;
    expect(logo).toBeInTheDocument();
    expect(logo.src).toContain('placeholder.com');
  });

  it('renders logo as React node', () => {
    render(
      <TestCard
        {...baseProps}
        logo={<div data-testid="custom-logo" style={{ width: 64, height: 64 }} />}
      />
    );
    expect(screen.getByTestId('custom-logo')).toBeInTheDocument();
  });

  it('renders horizontal layout correctly', () => {
    render(<TestCard {...baseProps} logo="https://via.placeholder.com/64" layout="horizontal" />);
    const layoutBox = screen.getByTestId('test-card-layout');
    expect(layoutBox).toHaveStyle({ display: 'flex', flexDirection: 'row' });
  });

  it('renders vertical layout correctly', () => {
    render(<TestCard {...baseProps} logo="https://via.placeholder.com/64" layout="vertical" />);
    const layoutBox = screen.getByTestId('test-card-layout');
    expect(layoutBox).toHaveStyle({ display: 'flex', flexDirection: 'column' });
  });
});
