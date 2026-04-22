import MuiBadge, { badgeClasses } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

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
