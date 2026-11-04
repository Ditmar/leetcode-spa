import '@testing-library/jest-dom/vitest';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import EmptyState from './EmptyState';

describe('EmptyState', () => {
  it('renders the title', () => {
    render(<EmptyState title="No problems found" />);

    expect(screen.getByRole('heading', { name: 'No problems found' })).toBeInTheDocument();
  });

  it('renders the description when provided', () => {
    render(
      <EmptyState title="No problems found" description="Try changing your search filters." />
    );

    expect(screen.getByText('Try changing your search filters.')).toBeInTheDocument();
  });

  it('renders an optional action', () => {
    render(
      <EmptyState title="No problems found" action={<button type="button">Clear filters</button>} />
    );

    expect(screen.getByRole('button', { name: 'Clear filters' })).toBeInTheDocument();
  });
});
