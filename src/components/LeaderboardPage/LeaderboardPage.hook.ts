import { useEffect, useState } from 'react';

import { fetchLeaderboard } from './data/mockData';

import type { LeaderboardUser } from './LeaderboardPage.types';

export const useLeaderboardPage = () => {
  const [users, setUsers] = useState<LeaderboardUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchLeaderboard()
      .then((data) => {
        if (!mounted) return;
        setUsers(data);
        setLoading(false);
      })
      .catch((e) => {
        if (!mounted) return;
        setError(String(e));
        setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  return {
    users,
    loading,
    error,
  } as const;
};
