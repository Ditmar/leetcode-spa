import { styled, Box, Skeleton } from '@mui/material';

import { chartTypeConfig } from './Chart.constants';
import type { ChartType } from './Chart.types';


export const ChartWrapper = styled(Box)<{ type?: ChartType }>(
  ({ type = 'bar' }) => ({
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    ...chartTypeConfig[type],
  }),
);


export const ChartSkeleton = styled(Skeleton)({
  borderRadius: 'var(--radius)',
  transform: 'none',
  backgroundColor: 'var(--muted-foreground)',
});


export const VisuallyHidden = styled('span')({
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  clip: 'rect(0,0,0,0)',
  whiteSpace: 'nowrap',
  borderWidth: 0,
});