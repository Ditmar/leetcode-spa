import { styled, Card, Box, Typography } from '@mui/material';

export const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: theme.spacing(2),
  boxShadow: theme.shadows[2],
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[6],
  },
}));

export const IconWrapper = styled(Box)<{ color?: string }>(({ theme, color }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: color || theme.palette.primary.light,
  color: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
  width: 48,
  height: 48,
  marginRight: theme.spacing(2),
}));

export const ContentWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

export const ValueText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.5rem',
  color: theme.palette.text.primary,
}));

export const LabelText = styled(Typography)(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
}));
