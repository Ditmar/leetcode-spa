import { useState, useEffect, useMemo } from 'react';

import { mockLeaderboardData } from './data/mockData';

import type { LeaderboardState, LeaderboardFilters } from './LeaderboardPage.types';

export const useLeaderboard = () => {
  const [state, setState] = useState<LeaderboardState>({
    users: [],
    filteredUsers: [],
    loading: true,
    error: null,
    filters: {
      search: '',
      sortBy: 'points',
    },
  });

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        setState((prev) => ({ ...prev, loading: true, error: null }));

        // Simula un retardo en la carga (1 segundo)
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const data = mockLeaderboardData;

        setState((prev) => ({
          ...prev,
          users: data,
          filteredUsers: data,
          loading: false,
        }));
      } catch (_error) {
        const errorMessage =
          _error instanceof Error
            ? _error.message
            : 'Error desconocido al cargar los datos de clasificación';

        setState((prev) => ({
          ...prev,
          error: `Error al cargar los datos de clasificación: ${errorMessage}`,
          loading: false,
        }));
      }
    };

    fetchLeaderboardData();
  }, []);

  const filteredAndSortedUsers = useMemo(() => {
    let result = [...state.users];

    if (state.filters.search) {
      const searchLower = state.filters.search.toLowerCase();
      result = result.filter((user) =>
        Object.values(user).some((value) => String(value).toLowerCase().includes(searchLower))
      );
    }

    return result.map((user, index) => ({
      ...user,
      rank: index + 1,
    }));
  }, [state.users, state.filters]);

  const updateFilters = (newFilters: Partial<LeaderboardFilters>) => {
    setState((prev) => ({
      ...prev,
      filters: { ...prev.filters, ...newFilters },
    }));
  };

  return {
    users: filteredAndSortedUsers,
    loading: state.loading,
    error: state.error,
    filters: state.filters,
    updateFilters,
  };
};
