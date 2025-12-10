import { ThemeProvider } from '@mui/material';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest';

import { theme } from '../../style-library';

import DashboardPage from './DashboardPage';

// Mocks de componentes
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
  StatsCard: ({ label, value }: { label: string; value: string | number }) => (
    <div>
      Mock StatsCard {label} {value}
    </div>
  ),
}));

vi.mock('../../components/TestCard/TestCard', () => ({
  TestCard: ({ title }: { title: string }) => <div>Mock TestCard {title}</div>,
}));

// Guardar original para restaurar
let originalMatchMedia: typeof window.matchMedia;

beforeAll(() => {
  originalMatchMedia = window.matchMedia;
});

// Mock global de useMediaQuery
const mockUseMediaQuery = (matches: boolean) => {
  window.matchMedia = vi.fn().mockImplementation(() => ({
    matches,
    media: '',
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
};

afterAll(() => {
  window.matchMedia = originalMatchMedia;
});

// Render de DashboardPage con ThemeProvider
const renderDashboard = (isMobile: boolean) => {
  mockUseMediaQuery(isMobile);
  return render(
    <ThemeProvider theme={theme}>
      <DashboardPage />
    </ThemeProvider>
  );
};

describe('DashboardPage', () => {
  it('renders correctly on desktop', () => {
    renderDashboard(false);

    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
    expect(screen.getByText(/Mock Leaderboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Mock AvatarMenu/i)).toBeInTheDocument();
    expect(screen.getByText(/Mock Logo/i)).toBeInTheDocument();

    expect(screen.getAllByText(/Mock StatsCard/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Mock TestCard/i).length).toBeGreaterThan(0);
  });

  it('renders correctly on mobile', () => {
    renderDashboard(true);

    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
    expect(screen.getByText(/Mock Leaderboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Mock AvatarMenu/i)).toBeInTheDocument();
    expect(screen.getByText(/Mock Logo/i)).toBeInTheDocument();

    expect(screen.getAllByText(/Mock StatsCard/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Mock TestCard/i).length).toBeGreaterThan(0);
  });
});
