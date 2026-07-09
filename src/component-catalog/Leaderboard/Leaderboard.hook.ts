import { useEffect, useState } from 'react';

import { leaderboardService } from '../../services/leaderboard/leaderboardService';

import type { LeaderboardEntry } from '../../services/leaderboard/leaderboardService.types';

const useLeaderboard = (initialUsers: LeaderboardEntry[] = []) => {
  const [users, setUsers] = useState<LeaderboardEntry[]>(initialUsers);
  const [loading, setLoading] = useState(initialUsers.length === 0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initialUsers.length > 0) return;

    const fetchUsers = async () => {
      try {
        setLoading(true);
        const data = await leaderboardService.getTopUsers();
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, loading, error };
};

export { useLeaderboard };
