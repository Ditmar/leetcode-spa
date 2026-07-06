import { ThemeProvider, createTheme } from '@mui/material/styles';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { UserProfilePage } from './UserProfilePage';

import type { UserProfile, UserStats } from '../../services/user/userService.types';

const mockProfile: UserProfile = {
  id: '1',
  username: 'testuser',
  email: 'test@example.com',
  displayName: 'Test User',
  bio: 'Bio de prueba',
  joinedAt: '2024-01-01T00:00:00Z',
  role: 'user',
  badges: [],
  stats: {
    totalSolved: 0,
    acceptanceRate: 0,
  },
};

const mockStats: UserStats = {
  totalSolved: 42,
  easySolved: 20,
  mediumSolved: 15,
  hardSolved: 7,
  acceptanceRate: 75.5,
  currentStreak: 5,
  maxStreak: 10,
  submissionHeatmap: [],
  recentSubmissions: [],
};

const theme = createTheme();

function setup(overrides: Partial<{ stats: UserStats | null }> = {}) {
  render(
    <ThemeProvider theme={theme}>
      <UserProfilePage profile={mockProfile} stats={overrides.stats ?? mockStats} />
    </ThemeProvider>
  );
}

describe('UserProfilePage', () => {
  it('renders the username and display name', () => {
    setup();
    expect(screen.getByText('Test User')).toBeInTheDocument();
    expect(screen.getByText('@testuser')).toBeInTheDocument();
  });

  it('renders the bio', () => {
    setup();
    expect(screen.getByText('Bio de prueba')).toBeInTheDocument();
  });

  it('renders solved stats', () => {
    setup();
    expect(screen.getByText('42')).toBeInTheDocument();
    expect(screen.getByText('20')).toBeInTheDocument();
    expect(screen.getByText('15')).toBeInTheDocument();
    expect(screen.getByText('7')).toBeInTheDocument();
  });

  it('renders streak and acceptance rate', () => {
    setup();
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('75.5%')).toBeInTheDocument();
  });

  it('renders without stats gracefully', () => {
    setup({ stats: null });
    expect(screen.getByText('Test User')).toBeInTheDocument();
  });
});
