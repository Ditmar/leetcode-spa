import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { ExplorePage } from './ExplorePage';

describe('ExplorePage', () => {
  it('renders page title and subtitle', () => {
    render(<ExplorePage />);

    expect(
      screen.getByRole('heading', {
        name: 'Explore',
      })
    ).toBeInTheDocument();

    expect(screen.getByText('Master coding interview questions by topic')).toBeInTheDocument();
  });

  it('renders stats section', () => {
    render(<ExplorePage />);

    expect(screen.getByText('Topics Available')).toBeInTheDocument();

    expect(screen.getByText('Problems Solved')).toBeInTheDocument();

    expect(screen.getByText('Overall Progress')).toBeInTheDocument();
  });

  it('filters topics by category', async () => {
    render(<ExplorePage />);

    await userEvent.click(
      screen.getByRole('button', {
        name: 'Algorithms',
      })
    );

    expect(screen.getByText('Binary Search')).toBeInTheDocument();

    expect(screen.getByText('Recursion')).toBeInTheDocument();

    expect(screen.queryByText('Arrays 101')).not.toBeInTheDocument();
  });

  it('filters topics by difficulty', async () => {
    render(<ExplorePage />);

    await userEvent.click(
      screen.getByRole('button', {
        name: 'Advanced',
      })
    );

    expect(screen.getByText('Dynamic Programming')).toBeInTheDocument();

    expect(screen.queryByText('Arrays 101')).not.toBeInTheDocument();
  });

  it('shows start learning when progress is zero', () => {
    render(<ExplorePage />);

    expect(
      screen.getAllByRole('button', {
        name: 'Start Learning',
      }).length
    ).toBeGreaterThan(0);
  });

  it('shows continue learning when progress is greater than zero', () => {
    render(<ExplorePage />);

    expect(
      screen.getAllByRole('button', {
        name: 'Continue Learning',
      }).length
    ).toBeGreaterThan(0);
  });
});
