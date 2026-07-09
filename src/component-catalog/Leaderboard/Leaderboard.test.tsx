import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import { LeaderboardPage } from './Leaderboard';
import * as hook from './Leaderboard.hook';

vi.mock('./Leaderboard.hook');

const mockUsers = [
  { rank: 1, username: 'alice', score: 9840, solvedCount: 312 },
  { rank: 2, username: 'bob', score: 8750, solvedCount: 289 },
];

describe('LeaderboardPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('muestra el spinner cuando loading es true', () => {
    vi.spyOn(hook, 'useLeaderboard').mockReturnValue({
      users: [],
      loading: true,
      error: null,
    });

    render(<LeaderboardPage />);
    expect(screen.getByLabelText('Cargando leaderboard')).toBeTruthy();
  });

  it('muestra error cuando ocurre un fallo', () => {
    vi.spyOn(hook, 'useLeaderboard').mockReturnValue({
      users: [],
      loading: false,
      error: 'Error de red',
    });

    render(<LeaderboardPage />);
    expect(screen.getByRole('alert')).toBeTruthy();
    expect(screen.getByText(/Error de red/)).toBeTruthy();
  });

  it('renderiza la tabla con usuarios', () => {
    vi.spyOn(hook, 'useLeaderboard').mockReturnValue({
      users: mockUsers,
      loading: false,
      error: null,
    });

    render(<LeaderboardPage />);
    expect(screen.getByText('alice')).toBeTruthy();
    expect(screen.getByText('bob')).toBeTruthy();
    expect(screen.getByText('Leaderboard')).toBeTruthy();
  });

  it('pasa initialUsers al hook', () => {
    const spy = vi.spyOn(hook, 'useLeaderboard').mockReturnValue({
      users: mockUsers,
      loading: false,
      error: null,
    });

    render(<LeaderboardPage initialUsers={mockUsers} />);
    expect(spy).toHaveBeenCalledWith(mockUsers);
  });
});
