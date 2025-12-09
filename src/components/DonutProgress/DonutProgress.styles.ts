import { styled } from '@mui/material/styles';

import { TYPOGRAPHY } from './DonutProgress.constants';

export const DonutContainer = styled('div')<{ size: number }>(({ size }) => ({
  position: 'relative',
  width: `${size}px`,
  height: `${size}px`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const DonutText = styled('div')<{ size: number }>(({ size }) => ({
  fontFamily: TYPOGRAPHY.fontFamily,
  position: 'absolute',
  fontWeight: TYPOGRAPHY.fontWeight,
  fontSize: `${size * TYPOGRAPHY.fontSizeScale}px`,
  lineHeight: 1,
  color: TYPOGRAPHY.color,
  userSelect: 'none',
}));
