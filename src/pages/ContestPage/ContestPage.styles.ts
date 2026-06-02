import { Box, Paper, Card } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PageContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.default, // Reemplaza '#f8f9fa' para soportar temas dinámicos
  minHeight: '100vh',
  width: '100%',
  boxSizing: 'border-box',
}));

export const StatsCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,

  '& .icon-container': {
    display: 'flex',
    padding: theme.spacing(1),
    borderRadius: '50%',
    backgroundColor: theme.palette.action.hover,
  },
}));

export const StyledContestCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(2.5),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  backgroundColor: theme.palette.background.paper,
  height: '100%',
  boxSizing: 'border-box',
}));
