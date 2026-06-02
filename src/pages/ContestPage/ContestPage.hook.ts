import { useState, useEffect, useMemo } from 'react';
import { MOCK_CONTESTS, TAB_STATUS_MAP } from './ContestPage.constants';
import type { Contest } from './ContestPage.types';

export const useContestPage = (initialContests: Contest[] = MOCK_CONTESTS) => {
  const [tabValue, setTabValue] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const filteredContests = useMemo(() => {
    const currentStatus = TAB_STATUS_MAP[tabValue];
    return initialContests.filter((contest) => contest.status === currentStatus);
  }, [tabValue, initialContests]);

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