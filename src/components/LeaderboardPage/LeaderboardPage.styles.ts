import { Table, TableCell, TableContainer, Card, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  overflow: 'hidden',
  boxShadow: theme.shadows[1],
  '& .MuiTableRow-root:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

export const StyledTable = styled(Table)(({ theme }) => ({
  minWidth: 650,
  [theme.breakpoints.down('md')]: {
    minWidth: 'auto',
  },
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const UserCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  '&.current-user': {
    backgroundColor: theme.palette.action.selected,
    borderColor: theme.palette.primary.main,
  },
}));

export const RankBadge = styled(Box)<{ rank: number }>(({ theme, rank }) => {
  let backgroundColor = theme.palette.grey[300];
  let color = theme.palette.text.primary;

  if (rank === 1) {
    backgroundColor = '#FFD700';
    color = theme.palette.getContrastText('#FFD700');
  } else if (rank === 2) {
    backgroundColor = '#C0C0C0';
    color = theme.palette.getContrastText('#C0C0C0');
  } else if (rank === 3) {
    backgroundColor = '#CD7F32';
    color = theme.palette.getContrastText('#CD7F32');
  }

  return {
    backgroundColor,
    color,
    borderRadius: '50%',
    width: theme.spacing(4),
    height: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: theme.typography.body2.fontSize,
    lineHeight: 1,
  };
});

export const LoadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: theme.spacing(50),
  padding: theme.spacing(4),
}));

export const ErrorContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: theme.spacing(50),
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.error.main,
}));
