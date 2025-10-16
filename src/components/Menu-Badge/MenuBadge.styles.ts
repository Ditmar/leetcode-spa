type SxProps = Record<string, string | number>;

import { COLOR } from './MenuBadge.constraints';

export const MenuBadgeSx = (): SxProps => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  background: 'transparent',
  padding: '6px 12px',
  borderRadius: '1px',
  cursor: 'pointer',
});

export const MenuBadgeTextSx = (variant: 'default' | 'color'): SxProps => ({
  fontWeight: 500,
  fontSize: '18px',
  ...(variant === 'color'
    ? {
        background: COLOR.primary,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }
    : {
        color: COLOR.default,
      }),
});
