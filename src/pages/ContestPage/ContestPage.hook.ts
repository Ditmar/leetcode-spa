import { useState, useMemo } from 'react';

import { TAB_STATUS_MAP } from './ContestPage.constants';

import type { Contest, UseContestPageReturn } from './ContestPage.types';

export const useContestPage = (initialContests: Contest[]): UseContestPageReturn => {
  const [tabValue, setTabValue] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const filteredContests = useMemo(() => {
    if (initialContests.length > 0 && loading) {
      setLoading(false);
    }
    const currentStatus = TAB_STATUS_MAP[tabValue];
    return initialContests.filter((contest) => contest.status === currentStatus);
  }, [tabValue, initialContests, loading]);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return {
    tabValue,
    handleTabChange,
    filteredContests,
    loading,
  };
};
