import '@testing-library/jest-dom/vitest';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { CardSkeleton, DetailSkeleton, ListSkeleton } from './Skeletons';

describe('Skeletons', () => {
  it('renders the list skeleton', () => {
    render(<ListSkeleton count={3} />);

    expect(screen.getByRole('status', { name: 'Loading list' })).toBeInTheDocument();
  });

  it('renders the card skeleton', () => {
    render(<CardSkeleton count={2} />);

    expect(screen.getByRole('status', { name: 'Loading cards' })).toBeInTheDocument();
  });

  it('renders the detail skeleton', () => {
    render(<DetailSkeleton />);

    expect(screen.getByRole('status', { name: 'Loading details' })).toBeInTheDocument();
  });
});
