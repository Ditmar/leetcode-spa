import { styled, Pagination, PaginationItem, Box } from '@mui/material';

export const PaginationContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  boxSizing: 'border-box',
  padding: theme.spacing(2, 3),
}));

export const StyledPagination = styled(Pagination)(({ theme }) => ({
  '& .MuiPagination-ul': {
    gap: theme.spacing(0.5),
    flexWrap: 'wrap',
  },
}));

export const StyledPaginationItem = styled(PaginationItem)(({ theme }) => ({
  height: '36px',
  minWidth: '36px',
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: '0.875rem',
  color: theme.palette.text.primary,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(0, 1.5),
  margin: 0,

  '&.Mui-selected': {
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },

  '&.MuiPaginationItem-previousNext': {
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    '& .button-text': {
      display: 'inline',
    },
    [theme.breakpoints.down('md')]: {
      padding: 0,
      minWidth: '44px',
      height: '44px',
      justifyContent: 'center',
      '& .button-text': {
        display: 'none',
      },
    },
  },
}));
