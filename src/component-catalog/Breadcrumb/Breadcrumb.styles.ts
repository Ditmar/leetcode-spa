import Breadcrumbs from '@mui/material/Breadcrumbs';
import { styled } from '@mui/material/styles';

export const StyledBreadcrumbContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  padding: theme.spacing(3),
  borderRadius: (theme.shape.borderRadius as number) * 2,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxSizing: 'border-box',
}));

export const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',

  '& .MuiBreadcrumbs-ol': {
    alignItems: 'center',
    flexWrap: 'nowrap',
    overflow: 'hidden',
  },

  '& .MuiBreadcrumbs-separator': {
    margin: theme.spacing(0, 1),
    color: theme.palette.text.secondary,
  },

  '& a': {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(0.5),
    textDecoration: 'none',
    color: theme.palette.text.secondary,
    fontSize: theme.typography.body2.fontSize,
    fontWeight: theme.typography.fontWeightRegular,
  },

  '& p': {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(0.5),
    fontSize: theme.typography.body2.fontSize,
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightMedium,
  },

  [theme.breakpoints.down('sm')]: {
    '& .MuiBreadcrumbs-ol': {
      overflow: 'hidden',
    },
  },
}));

export const ResponsiveIcon = styled('img')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    width: theme.spacing(1.5),
    height: theme.spacing(1.6),
    top: theme.spacing(0.15),
    left: theme.spacing(0.25),
  },
}));
