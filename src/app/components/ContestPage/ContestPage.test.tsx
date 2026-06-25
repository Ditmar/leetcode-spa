import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import AppProvider from '../../../context/AppConfigContext';
import ContestPage from './ContestPage';

// Mock contest data for testing
const mockContest = {
  id: 1,
  title: 'Test Contest',
  status: 'active' as const,
  startTime: '2026-06-01T00:00:00Z',
  endTime: '2026-06-02T00:00:00Z',
  problems: [],
};

// Wrapper that provides required context for ContestPage
function Wrapper({ children }: { children: React.ReactNode }) {
  return <AppProvider>{children}</AppProvider>;
}

describe('ContestPage', () => {
  it('renders active contests section', () => {
    render(
      <ContestPage activeContests={[mockContest]} upcomingContests={[]} pastContests={[]} />,
      { wrapper: Wrapper }
    );
    expect(screen.getByText('Active Contests')).toBeInTheDocument();
    expect(screen.getByText('Test Contest')).toBeInTheDocument();
  });

  it('renders upcoming contests section', () => {
    render(
      <ContestPage activeContests={[]} upcomingContests={[mockContest]} pastContests={[]} />,
      { wrapper: Wrapper }
    );
    expect(screen.getByText('Upcoming Contests')).toBeInTheDocument();
  });

  it('renders past contests section', () => {
    render(
      <ContestPage activeContests={[]} upcomingContests={[]} pastContests={[mockContest]} />,
      { wrapper: Wrapper }
    );
    expect(screen.getByText('Past Contests')).toBeInTheDocument();
  });
});