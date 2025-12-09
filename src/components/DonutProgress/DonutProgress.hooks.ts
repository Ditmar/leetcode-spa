import { useMemo } from 'react';

import { AUTO_COLORS } from './DonutProgress.constants';

export const useDonutColor = (color: string | 'auto', percentage: number) => {
  return useMemo(() => {
    if (color !== 'auto') return color;
    if (percentage < 50) return AUTO_COLORS.low;
    if (percentage < 75) return AUTO_COLORS.medium;
    return AUTO_COLORS.high;
  }, [color, percentage]);
};
