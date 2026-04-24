import MuiBadge, { badgeClasses } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

import type { BadgeTone } from './Badge.types';

const getStandaloneToneStyles = (tone: BadgeTone) => {
  switch (tone) {
    case 'secondary':
      return {
        backgroundColor: 'var(--secondaryy)',
        color: 'var(--secondaryy-foreground)',
        border: '1px solid var(--secondaryy)',
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
        backgroundColor: 'var(--success)',
        color: 'var(--success-foreground)',
        border: '1px solid var(--success)',
      };

    case 'info':
      return {
        backgroundColor: 'var(--info)',
        color: 'var(--info-foreground)',
        border: '1px solid var(--info)',
      };

    case 'warning':
      return {
        backgroundColor: 'var(--warning)',
        color: 'var(--warning-foreground)',
        border: '1px solid var(--warning)',
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
  display: 'inline-flex',
  maxWidth: '100%',
  verticalAlign: 'middle',
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
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '100%',
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
      maxWidth: theme.spacing(8),
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
  maxWidth: '100%',
  paddingInline: theme.spacing(2),
  borderRadius: 'var(--radius-lg)',
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.pxToRem(16),
  fontWeight: 600,
  lineHeight: 1.2,
  letterSpacing: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  ...getStandaloneToneStyles(tone),
  [theme.breakpoints.down('sm')]: {
    minHeight: theme.spacing(3.5),
    maxWidth: '100%',
    paddingInline: theme.spacing(1.5),
    borderRadius: 'var(--radius-md)',
    fontSize: theme.typography.pxToRem(14),
  },
}));
