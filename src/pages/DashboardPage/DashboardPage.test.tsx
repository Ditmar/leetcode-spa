import { ThemeProvider } from '@mui/material';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { theme } from '../../style-library';

import DashboardPage from './DashboardPage';

// Mocks de componentes pesados
vi.mock('../../components/LeaderboardPage/LeaderboardPage', () => ({
  LeaderboardPage: () => <div>Mock Leaderboard</div>,
}));

vi.mock('../../components/AvatarMenu/AvatarMenu', () => ({
  AvatarMenu: () => <div>Mock AvatarMenu</div>,
}));

vi.mock('../../components/Logo/Logo', () => ({
  Logo: () => <div>Mock Logo</div>,
}));

vi.mock('../../components/StatsCard/StatsCard', () => ({
  StatsCard: (props: { label: string; value: string | number }) => (
    <div>
      Mock StatsCard {props.label} {props.value}
    </div>
  ),
}));

vi.mock('../../components/TestCard/TestCard', () => ({
  TestCard: (props: { title: string }) => <div>Mock TestCard {props.title}</div>,
}));

// Mock de matchMedia para useMediaQuery
const mockMatchMedia = (matches: boolean) => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }),
  });
};

describe('DashboardPage', () => {
  it('renders without crashing (desktop)', () => {
    mockMatchMedia(false); // Desktop
    render(
      <ThemeProvider theme={theme}>
        <DashboardPage />
      </ThemeProvider>
    );
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
    expect(screen.getByText(/Mock Leaderboard/i)).toBeInTheDocument();
  });

  it('renders correctly in mobile view', () => {
    mockMatchMedia(true); // Mobile
    render(
      <ThemeProvider theme={theme}>
        <DashboardPage />
      </ThemeProvider>
    );
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
    expect(screen.getByText(/Mock Leaderboard/i)).toBeInTheDocument();
  });
});
