import { useState, useEffect } from 'react';

import { MOCK_CONTESTS } from './ContestPage.constants';

import type { Contest } from './ContestPage.types';

export const useContestPage = (initialContests: Contest[] = MOCK_CONTESTS) => {
  const [tabValue, setTabValue] = useState<number>(0);
  const [filteredContests, setFilteredContests] = useState<Contest[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const statuses: ('active' | 'upcoming' | 'past')[] = ['active', 'upcoming', 'past'];
      const currentStatus = statuses[tabValue];

      const filtered = initialContests.filter((contest) => contest.status === currentStatus);
      setFilteredContests(filtered);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [tabValue, initialContests]);

  return {
    tabValue,
    handleTabChange,
    filteredContests,
    loading,
  };
};
