import MuiBadge, { badgeClasses } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

import type { BadgeTone } from './Badge.types';

const getStandaloneToneStyles = (tone: BadgeTone) => {
  switch (tone) {
    case 'secondary':
      return {
        backgroundColor: 'var(--secondary)',
        color: 'var(--secondary-foreground)',
        border: '1px solid var(--secondary)',
      };

    case 'outline':
      return {
        backgroundColor: 'var(--background)',
        color: 'var(--primary)',
        border: '1px solid var(--border)',
      };

    case 'destructive':
      return {
        backgroundColor: 'var(--destructive)',
        color: 'var(--destructive-foreground)',
        border: '1px solid var(--destructive)',
      };

    case 'success':
      return {
        backgroundColor: 'var(--accent)',
        color: 'var(--chart-3)',
        border: '1px solid var(--accent)',
      };

    case 'info':
      return {
        backgroundColor: 'var(--accent)',
        color: 'var(--chart-3)',
        border: '1px solid var(--accent)',
      };

    case 'warning':
      return {
        backgroundColor: 'var(--secondary)',
        color: 'var(--chart-3)',
        border: '1px solid var(--secondary)',
      };

    case 'default':
    default:
      return {
        backgroundColor: 'var(--primary)',
        color: 'var(--primary-foreground)',
        border: '1px solid var(--primary)',
      };
  }
};

export const StyledBadge = styled(MuiBadge)(({ theme }) => ({
  [`& .${badgeClasses.badge}`]: {
    minWidth: theme.spacing(2.25),
    height: theme.spacing(2.25),
    paddingInline: theme.spacing(0.75),
    borderRadius: theme.spacing(1.125),
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(11),
    fontWeight: 600,
    lineHeight: 1,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
  },
  [`& .${badgeClasses.dot}`]: {
    minWidth: theme.spacing(1),
    height: theme.spacing(1),
    borderRadius: '50%',
    padding: 0,
  },
  [theme.breakpoints.down('sm')]: {
    [`& .${badgeClasses.badge}`]: {
      minWidth: theme.spacing(2),
      height: theme.spacing(2),
      paddingInline: theme.spacing(0.5),
      fontSize: theme.typography.pxToRem(10),
    },
  },
}));

export const StandaloneBadgeLabel = styled('span', {
  shouldForwardProp: (prop) => prop !== 'tone',
})<{ tone: BadgeTone }>(({ theme, tone }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: theme.spacing(4),
  paddingInline: theme.spacing(2),
  borderRadius: 'var(--radius-lg)',
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.pxToRem(16),
  fontWeight: 600,
  lineHeight: 1.2,
  letterSpacing: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...getStandaloneToneStyles(tone),
  [theme.breakpoints.down('sm')]: {
    minHeight: theme.spacing(3.5),
    paddingInline: theme.spacing(1.5),
    borderRadius: 'var(--radius-md)',
    fontSize: theme.typography.pxToRem(14),
  },
}));
