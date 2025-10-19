import { useTheme } from '@mui/material/styles';
import { useMemo } from 'react';

import { AUTO_COLORS } from './DonutProgress.constants';

import type { DonutProgressProps } from './DonutProgress.types';
export const useDonutColor = (color: DonutProgressProps['color'], percentage: number): string => {
  const theme = useTheme();

  return useMemo(() => {
    if (color !== 'auto') {
      if (color === 'primary') return theme.palette.primary.main;
      if (color === 'success') return theme.palette.success.main;
      if (color === 'error') return theme.palette.error.main;
      if (color === 'warning') return theme.palette.warning.main;
      return String(color);
    }
    if (percentage < 50) {
      return AUTO_COLORS.low;
    }
    if (percentage < 75) {
      return AUTO_COLORS.medium;
    }
    return AUTO_COLORS.high;
  }, [color, percentage, theme.palette]);
};
