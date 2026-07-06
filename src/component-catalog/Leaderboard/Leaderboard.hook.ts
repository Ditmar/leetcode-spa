import { useEffect, useState } from 'react';

import type { LeaderboardUser } from './Leaderboard.types';

const MOCK_USERS: LeaderboardUser[] = [
  { rank: 1, username: 'alice', score: 9840, solvedCount: 312 },
  { rank: 2, username: 'bob', score: 9210, solvedCount: 289 },
  { rank: 3, username: 'carlos', score: 8750, solvedCount: 274 },
  { rank: 4, username: 'diana', score: 8100, solvedCount: 251 },
  { rank: 5, username: 'edward', score: 7430, solvedCount: 238 },
];

const useLeaderboard = () => {
  const [users, setUsers] = useState<LeaderboardUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        await new Promise((res) => setTimeout(res, 400));
        setUsers(MOCK_USERS);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  return { users, loading, error };
};

export { useLeaderboard };
