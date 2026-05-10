import { styled, Pagination, PaginationItem, Box } from '@mui/material';

export const PaginationContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '1216px',
  height: '86px',
  background: '#FFFFFF',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  borderRadius: '14px',
  boxSizing: 'border-box',
  padding: theme.spacing(0, 2),
}));

export const StyledPagination = styled(Pagination)({
  '& .MuiPagination-ul': {
    gap: '4px',
    flexWrap: 'nowrap',
  },
});

export const StyledPaginationItem = styled(PaginationItem)(({ theme }) => ({
  height: '36px',
  minWidth: '36px',
  fontFamily: "'Inter', sans-serif",
  fontWeight: 500,
  fontSize: '14px',
  color: '#0A0A0A',
  borderRadius: '8px',
  padding: '0 12px',
  margin: 0,

  '&.Mui-selected': {
    backgroundColor: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
  },

  '&.MuiPaginationItem-previousNext': {
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    '& .button-text': {
      display: 'inline',
    },
    [theme.breakpoints.down('md')]: {
      padding: 0,
      minWidth: '36px',
      justifyContent: 'center',
      '& .button-text': {
        display: 'none',
      },
    },
  },
}));
