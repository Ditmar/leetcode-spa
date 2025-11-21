import { useMemo } from 'react';

import { TEST_STATS } from './StatsPanel.constants';

import type { StatItemData, StatsPanelProps } from './StatsPanel.types';

export const useStatsPanel = ({
  totalTests = 0,
  passed = 0,
  failed = 0,
  waiting = 0,
}: StatsPanelProps): StatItemData[] =>
  useMemo(
    () => [
      { ...TEST_STATS.total, value: totalTests },
      { ...TEST_STATS.passed, value: passed },
      { ...TEST_STATS.failed, value: failed },
      { ...TEST_STATS.waiting, value: waiting },
    ],
    [totalTests, passed, failed, waiting]
  );
