import { useState, useEffect, useMemo } from 'react';

import { mockLeaderboardData } from './data/mockData';

import type { LeaderboardState, LeaderboardFilters } from './LeaderboardPage.types';

const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
};

const simulateLatency = (ms: number = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchLeaderboardData = async (options: { useMockDelay?: boolean } = {}) => {
  const { useMockDelay = true } = options;

  if (useMockDelay) {
    await simulateLatency(1000);
  }

  return mockLeaderboardData;
};

export const useLeaderboard = (options: { skipMockDelay?: boolean } = {}) => {
  const { skipMockDelay = false } = options;

  const [state, setState] = useState<LeaderboardState>({
    users: [],
    loading: true,
    error: null,
    filters: {
      search: '',
      sortBy: 'points',
    },
  });

  const refetch = async () => {
    try {
      setState((prev) => ({ ...prev, loading: true, error: null }));

      const data = await fetchLeaderboardData({ useMockDelay: !skipMockDelay });

      setState((prev) => ({
        ...prev,
        users: data,
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

  useEffect(() => {
    refetch();
  }, []);

  const filteredAndSortedUsers = useMemo(() => {
    let result = [...state.users];

    if (state.filters.search) {
      const normalizedQuery = normalizeText(state.filters.search);

      result = result.filter((user) => {
        const fullName = normalizeText(user.fullName || '');
        const username = normalizeText(user.username || '');

        return fullName.includes(normalizedQuery) || username.includes(normalizedQuery);
      });
    }

    const sortBy = state.filters.sortBy;
    result.sort((a, b) => {
      if (!sortBy) return 0;

      if (sortBy === 'points') {
        const pa = Number(a.points ?? 0);
        const pb = Number(b.points ?? 0);
        return pb - pa;
      }

      if (sortBy === 'testsPassed') {
        const na = String(a.fullName ?? '').toLowerCase();
        const nb = String(b.username ?? '').toLowerCase();
        return na < nb ? -1 : na > nb ? 1 : 0;
      }

      return 0;
    });

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
    refetch,
  };
};
