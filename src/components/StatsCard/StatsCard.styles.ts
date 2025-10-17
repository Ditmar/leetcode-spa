import { styled, Card, Box, Typography } from '@mui/material';

export const StyledCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== '$animated' && prop !== '$size',
})<{ $animated?: boolean; $size?: 'small' | 'medium' | 'large' }>(({ theme, $animated, $size }) => {
  const padding =
    $size === 'small'
      ? theme.spacing(1.5)
      : $size === 'large'
        ? theme.spacing(3)
        : theme.spacing(2);

  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    maxWidth: theme.spacing(30),
    padding,
    boxShadow: theme.shadows[2],
    borderRadius: theme.shape.borderRadius,
    transition: $animated ? 'transform 0.18s ease, box-shadow 0.18s ease' : undefined,
    '&:hover': $animated
      ? {
        transform: 'translateY(-6px)',
        boxShadow: theme.shadows[6],
      }
      : undefined,
  };
});

export const IconWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== '$iconColor' && prop !== 'aria-label',
})<{ $iconColor?: string }>(({ theme, $iconColor }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: $iconColor ?? theme.palette.primary.light,
  color: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
  width: theme.spacing(6),
  height: theme.spacing(6),
  marginRight: theme.spacing(2),
  flexShrink: 0,
}));

export const ContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const ValueText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  ...theme.typography.h6,
  lineHeight: 1,
  color: theme.palette.text.primary,
}));

export const LabelText = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  marginTop: theme.spacing(0.25),
}));
