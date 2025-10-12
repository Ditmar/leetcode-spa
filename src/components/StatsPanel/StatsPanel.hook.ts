import { useMemo } from "react";
import { TEST_STATS } from "./StatsPanel.constants";
import type { StatItemData, StatsPanelProps } from "./StatsPanel.types";
export const useStatsPanel = ({ totalTests, passed, failed, waiting }: StatsPanelProps): StatItemData[] =>
    useMemo(
        () => [
            { ...TEST_STATS.total, value: totalTests },
            { ...TEST_STATS.passed, value: passed },
            { ...TEST_STATS.failed, value: failed },
            { ...TEST_STATS.waiting, value: waiting },
        ],
        [totalTests, passed, failed, waiting]
    );
