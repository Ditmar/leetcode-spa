import { useEffect, useState } from 'react';

import type { LeaderboardUser } from './Leaderboard.types';

const useLeaderboard = (initialUsers: LeaderboardUser[] = []) => {
  const [users, setUsers] = useState<LeaderboardUser[]>(initialUsers);
  const [loading, setLoading] = useState(initialUsers.length === 0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initialUsers.length > 0) return;

    const fetchUsers = async () => {
      try {
        setLoading(true);
        await new Promise((res) => setTimeout(res, 400));
        setUsers([
          { rank: 1, username: 'alice', score: 9840, solvedCount: 312 },
          { rank: 2, username: 'bob', score: 9210, solvedCount: 289 },
          { rank: 3, username: 'carlos', score: 8750, solvedCount: 274 },
          { rank: 4, username: 'diana', score: 8100, solvedCount: 251 },
          { rank: 5, username: 'edward', score: 7430, solvedCount: 238 },
        ]);
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
