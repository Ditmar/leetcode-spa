import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';
import { TestCard } from './TestCard';

describe('TestCard Component', () => {
  const baseProps = {
    title: 'Test Card Title',
    description: 'This is a test description.',
    onSelect: vi.fn(),
  };

  it('calls onSelect when clicked', () => {
    const handleClick = vi.fn();
    render(
      <TestCard
        {...baseProps}
        logo="https://via.placeholder.com/64"
        onSelect={handleClick}
      />
    );

    fireEvent.click(screen.getByTestId('test-card'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('handles long title without breaking layout', () => {
    const longTitle =
      'This is a very long title to test overflow handling in the TestCard component.';
    render(
      <TestCard
        {...baseProps}
        logo="https://via.placeholder.com/64"
        title={longTitle}
      />
    );

    expect(screen.getByTestId('test-card-title')).toHaveTextContent(longTitle);
  });

  it('renders logo as image and text content', () => {
    render(
      <TestCard
        {...baseProps}
        logo="https://via.placeholder.com/64"
        layout="horizontal"
      />
    );

    const logo = screen.getByRole('img', { name: baseProps.title }) as HTMLImageElement;
    expect(logo).toBeInTheDocument();
    expect(logo.src).toContain('placeholder.com');

    expect(screen.getByTestId('test-card-title')).toHaveTextContent(baseProps.title);
    expect(screen.getByTestId('test-card-description')).toHaveTextContent(baseProps.description);
  });

  it('renders logo as React node', () => {
    render(
      <TestCard
        {...baseProps}
        logo={<div data-testid="custom-logo" style={{ width: 64, height: 64 }} />}
        layout="horizontal"
      />
    );

    expect(screen.getByTestId('custom-logo')).toBeInTheDocument();
  });

  it('renders vertical layout correctly', () => {
    render(
      <TestCard
        {...baseProps}
        logo="https://via.placeholder.com/64"
        layout="vertical"
      />
    );

    const card = screen.getByTestId('test-card');
    expect(card).toBeInTheDocument();
  });
});

