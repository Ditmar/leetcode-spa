import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';

export const StyledCard = styled(MuiCard)(({ theme }) => ({
  width: '100%',
  borderRadius: 'var(--radius-lg)',
  border: '1px solid var(--border)',
  backgroundColor: 'var(--card)',
  boxShadow: 'none',

  [theme.breakpoints.up('md')]: {
    display: 'flex',
    flexDirection: 'row',
  },
}));

export const VerticalCard = styled(MuiCard)(() => ({
  width: '100%',
  borderRadius: 'var(--radius-lg)',
  border: '1px solid var(--border)',
  backgroundColor: 'var(--card)',
  boxShadow: 'none',
}));

export const HighlightedCard = styled(MuiCard)(() => ({
  width: '100%',

  backgroundColor: 'var(--accent)', 
  border: '1px solid var(--border)',

  '& .MuiCardHeader-title': {
    color: 'var(--primary)', 
    fontWeight: 'var(--font-weight-medium)',
  },

  '& .MuiCardHeader-subheader': {
    color: 'var(--muted-foreground)', 
  },

  '& .MuiCardContent-root': {
    color: 'var(--foreground)',
  },
}));
