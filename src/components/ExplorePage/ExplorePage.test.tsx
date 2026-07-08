import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { exploreService } from '../../services/explore/exploreService';

import { ExplorePage } from './ExplorePage';

import type { ExploreTopic } from '../../services/explore/exploreService.types';

vi.mock('../../services/explore/exploreService', () => ({
  exploreService: {
    getTopics: vi.fn(),
  },
}));

const exploreTopicsMock: ExploreTopic[] = [
  {
    id: 1,
    icon: 'arrays',
    title: 'Arrays 101',
    description: 'Learn the basics of array manipulation, traversal, and common patterns.',
    category: 'Data Structures',
    difficulty: 'Beginner',
    progress: 8,
    totalProblems: 12,
  },
  {
    id: 2,
    icon: 'linkedList',
    title: 'Linked List',
    description: 'Master linked list operations including insertion, deletion, and reversal.',
    category: 'Data Structures',
    difficulty: 'Intermediate',
    progress: 3,
    totalProblems: 10,
  },
  {
    id: 3,
    icon: 'search',
    title: 'Binary Search',
    description: 'Understand binary search and its applications in various scenarios.',
    category: 'Algorithms',
    difficulty: 'Intermediate',
    progress: 0,
    totalProblems: 15,
  },
  {
    id: 4,
    icon: 'hash',
    title: 'Hash Table',
    description: 'Learn to use hash tables for efficient lookups and data organization.',
    category: 'Data Structures',
    difficulty: 'Beginner',
    progress: 5,
    totalProblems: 8,
  },
  {
    id: 5,
    icon: 'recursion',
    title: 'Recursion',
    description: 'Master recursive thinking and solve problems using recursive approaches.',
    category: 'Algorithms',
    difficulty: 'Intermediate',
    progress: 2,
    totalProblems: 12,
  },
  {
    id: 6,
    icon: 'dp',
    title: 'Dynamic Programming',
    description: 'Learn DP patterns and solve optimization problems efficiently.',
    category: 'Algorithms',
    difficulty: 'Advanced',
    progress: 0,
    totalProblems: 20,
  },
];

describe('ExplorePage', () => {
  beforeEach(() => {
    window.history.replaceState(null, '', '/explore');

    vi.mocked(exploreService.getTopics).mockImplementation(async (filters = {}) =>
      exploreTopicsMock.filter((topic) => {
        const matchesCategory = !filters.category || topic.category === filters.category;

        const matchesDifficulty = !filters.difficulty || topic.difficulty === filters.difficulty;

        return matchesCategory && matchesDifficulty;
      })
    );
  });

  it('renders page title and subtitle', async () => {
    render(<ExplorePage />);

    expect(
      screen.getByRole('heading', {
        name: 'Explore',
      })
    ).toBeInTheDocument();

    expect(screen.getByText('Master coding interview questions by topic')).toBeInTheDocument();

    await screen.findByText('Arrays 101');
  });

  it('renders stats section', async () => {
    render(<ExplorePage />);

    expect(screen.getByText('Topics Available')).toBeInTheDocument();

    expect(screen.getByText('Problems Solved')).toBeInTheDocument();

    expect(screen.getByText('Overall Progress')).toBeInTheDocument();

    await screen.findByText('Arrays 101');
  });

  it('filters topics by category', async () => {
    render(<ExplorePage />);

    await screen.findByText('Arrays 101');

    await userEvent.click(
      screen.getByRole('button', {
        name: 'Algorithms',
      })
    );

    await waitFor(() => {
      expect(screen.getByText('Binary Search')).toBeInTheDocument();
    });

    expect(screen.getByText('Recursion')).toBeInTheDocument();

    expect(screen.queryByText('Arrays 101')).not.toBeInTheDocument();
  });

  it('filters topics by difficulty', async () => {
    render(<ExplorePage />);

    await screen.findByText('Arrays 101');

    await userEvent.click(
      screen.getByRole('button', {
        name: 'Advanced',
      })
    );

    await waitFor(() => {
      expect(screen.getByText('Dynamic Programming')).toBeInTheDocument();
    });

    expect(screen.queryByText('Arrays 101')).not.toBeInTheDocument();
  });

  it('shows start learning when progress is zero', async () => {
    render(<ExplorePage />);

    await screen.findByText('Arrays 101');

    expect(
      screen.getAllByRole('button', {
        name: /start learning/i,
      }).length
    ).toBeGreaterThan(0);
  });

  it('shows continue learning when progress is greater than zero', async () => {
    render(<ExplorePage />);

    await screen.findByText('Arrays 101');

    expect(
      screen.getAllByRole('button', {
        name: /continue learning/i,
      }).length
    ).toBeGreaterThan(0);
  });
});
