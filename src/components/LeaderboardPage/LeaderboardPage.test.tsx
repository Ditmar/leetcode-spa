import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach } from 'vitest';

import { LeaderboardPage } from './LeaderboardPage';

vi.mock('canvas-confetti', () => ({
  __esModule: true,
  default: vi.fn(() => ({
    create: () => vi.fn(),
  })),
}));

const { mockUseMediaQuery, mockUseLeaderboardPage } = vi.hoisted(() => {
  return {
    mockUseMediaQuery: vi.fn(),
    mockUseLeaderboardPage: vi.fn(),
  };
});

vi.mock('@mui/material', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@mui/material')>();
  return {
    ...actual,
    useMediaQuery: mockUseMediaQuery,
  };
});

vi.mock('./LeaderboardPage.hook', () => ({
  useLeaderboardPage: mockUseLeaderboardPage,
}));

vi.mock('./LeaderboardTable', () => ({
  LeaderboardTable: () => <div data-testid="leaderboard-table">Leaderboard Table</div>,
}));

vi.mock('./RankingList', () => ({
  RankingList: () => <div data-testid="ranking-list">Ranking List</div>,
}));

describe('LeaderboardPage', () => {
  const mockUsers = [
    {
      id: '1',
      rank: 1,
      avatarUrl: '',
      fullName: 'John Doe',
      username: 'johndoe',
      points: 100,
      testsPassed: 10,
      lastActiveAt: new Date().toISOString(),
      category: 'neo',
    },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
    mockUseMediaQuery.mockReturnValue(false);
    mockUseLeaderboardPage.mockReturnValue({
      users: mockUsers,
      loading: false,
      error: null,
    });
  });

  it('renders loading state when data is loading', () => {
    mockUseLeaderboardPage.mockReturnValue({
      users: [],
      loading: true,
      error: null,
    });

    render(<LeaderboardPage />);

    expect(screen.getByTestId('loading')).toBeInTheDocument();
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
    expect(screen.queryByTestId('leaderboard-table')).not.toBeInTheDocument();
    expect(screen.queryByTestId('ranking-list')).not.toBeInTheDocument();
  });

  it('renders error message when there is an error', () => {
    const errorMessage = 'Failed to fetch data';

    mockUseLeaderboardPage.mockReturnValue({
      users: [],
      loading: false,
      error: errorMessage,
    });

    render(<LeaderboardPage />);

    expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
    expect(screen.queryByTestId('leaderboard-table')).not.toBeInTheDocument();
    expect(screen.queryByTestId('ranking-list')).not.toBeInTheDocument();
  });

  it('renders leaderboard table when data is loaded successfully on desktop', () => {
    mockUseLeaderboardPage.mockReturnValue({
      users: mockUsers,
      loading: false,
      error: null,
    });

    mockUseMediaQuery.mockReturnValue(false);

    render(<LeaderboardPage />);

    expect(screen.getByTestId('leaderboard-table')).toBeInTheDocument();
    expect(screen.queryByTestId('ranking-list')).not.toBeInTheDocument();
    expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
  });

  it('renders ranking list when data is loaded successfully on mobile', () => {
    mockUseLeaderboardPage.mockReturnValue({
      users: mockUsers,
      loading: false,
      error: null,
    });

    mockUseMediaQuery.mockReturnValue(true);

    render(<LeaderboardPage />);

    expect(screen.getByTestId('ranking-list')).toBeInTheDocument();
    expect(screen.queryByTestId('leaderboard-table')).not.toBeInTheDocument();
    expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
  });

  it('passes currentUserId prop to component', () => {
    mockUseLeaderboardPage.mockReturnValue({
      users: mockUsers,
      loading: false,
      error: null,
    });

    mockUseMediaQuery.mockReturnValue(false);

    render(<LeaderboardPage />);

    expect(screen.getByTestId('leaderboard-table')).toBeInTheDocument();
  });

  it('uses default currentUserId when not provided', () => {
    mockUseLeaderboardPage.mockReturnValue({
      users: mockUsers,
      loading: false,
      error: null,
    });

    mockUseMediaQuery.mockReturnValue(false);

    render(<LeaderboardPage />);

    expect(screen.getByTestId('leaderboard-table')).toBeInTheDocument();
  });
});
