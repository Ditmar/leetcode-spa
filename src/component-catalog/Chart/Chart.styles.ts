import { styled, Box, Skeleton } from '@mui/material';

import { chartTypeConfig } from './Chart.constants';
import type { ChartType } from './Chart.types';

/**
 * Full-width wrapper that applies per-type styles via chartTypeConfig —
 * the same pattern as StyledButton + variantStyles in Button.styles.ts.
 *
 * The `type` prop drives padding, background, border, and borderRadius
 * from the design-token map so all visual variants live in one place.
 */
export const ChartWrapper = styled(Box)<{ type?: ChartType }>(
  ({ type = 'bar' }) => ({
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    ...chartTypeConfig[type],
  }),
);

/**
 * Skeleton shown while data is loading.
 * Uses --muted (light: #ececf0 / dark: #2a2a2a) — the semantic token
 * for placeholder surfaces in the design system.
 */
export const ChartSkeleton = styled(Skeleton)({
  borderRadius: 'var(--radius)',
  transform: 'none',
  backgroundColor: 'var(--muted-foreground)',
});

/**
 * Visually hidden element that provides an accessible title and description
 * to SVG charts via aria-labelledby / aria-describedby.
 */
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