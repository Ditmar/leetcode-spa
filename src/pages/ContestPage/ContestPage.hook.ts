import { useState, useEffect, useMemo } from 'react';

import { TAB_STATUS_MAP } from './ContestPage.constants';

import type { Contest, UseContestPageReturn } from './ContestPage.types';

export const useContestPage = (
  initialContests: Contest[],
  forceLoading = false
): UseContestPageReturn => {
  const [tabValue, setTabValue] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (initialContests.length >= 0) {
      setLoading(false);
    }
  }, [initialContests]);
  const filteredContests = useMemo(() => {
    const currentStatus = TAB_STATUS_MAP[tabValue];
    return initialContests.filter((contest) => contest.status === currentStatus);
  }, [tabValue, initialContests]);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  const isComponentLoading = forceLoading || loading;

  return {
    tabValue,
    handleTabChange,
    filteredContests,
    loading: isComponentLoading,
  };
};
