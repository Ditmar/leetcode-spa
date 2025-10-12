import { styled } from '@mui/material/styles';
import {
  Table,
  TableCell,
  TableContainer,
  Paper,
  Card,
  Box,
  Typography
} from '@mui/material';

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
    backgroundColor = '#FFD700'; // Oro
    color = theme.palette.getContrastText('#FFD700');
  } else if (rank === 2) {
    backgroundColor = '#C0C0C0'; // Plata
    color = theme.palette.getContrastText('#C0C0C0');
  } else if (rank === 3) {
    backgroundColor = '#CD7F32'; // Bronce
    color = theme.palette.getContrastText('#CD7F32');
  }

  return {
    backgroundColor,
    color,
    borderRadius: '50%',
    width: 32,
    height: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '0.875rem',
  };
});

export const LoadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 400,
  padding: theme.spacing(4),
}));

export const ErrorContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 400,
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.error.main,
}));