import { styled } from '@mui/material/styles';
import { Box, Paper, Card } from '@mui/material';

export const PageContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#f8f9fa', 
  minHeight: '100vh',
  width: '100%',
  boxSizing: 'border-box',
}));

export const StatsCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  borderRadius: '8px', 
  boxShadow: '0px 1px 3px rgba(0,0,0,0.02)',
  border: '1px solid #eef2f6',
  backgroundColor: '#ffffff',
  '& .icon-container': {
    display: 'flex',
    padding: theme.spacing(1),
    borderRadius: '50%',
    backgroundColor: theme.palette.action.hover,
  }
}));

export const StyledContestCard = styled(Card)(({ theme }) => ({
  borderRadius: '8px', 
  boxShadow: '0px 2px 8px rgba(0,0,0,0.04)',
  border: '1px solid #eef2f6',
  padding: theme.spacing(2.5),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  backgroundColor: '#ffffff',
  height: '100%',
  boxSizing: 'border-box',
}));