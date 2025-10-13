import React from 'react';
import type { StatsCardProps } from './StatsCard.types';
import { StyledCard, IconWrapper, ContentWrapper, ValueText, LabelText } from './StatsCard.styles';
import { useTheme } from '@mui/material/styles';

const StatsCard: React.FC<StatsCardProps> = ({
  icon,
  value,
  label,
  variant = 'default',
  size = 'medium',
  iconColor,
  animated = false,
  ...rest
}) => {
  const theme = useTheme();

  const getVariantColor = () => {
    switch (variant) {
      case 'primary': return theme.palette.primary.main;
      case 'success': return theme.palette.success.main;
      case 'warning': return theme.palette.warning.main;
      case 'error': return theme.palette.error.main;
      case 'secondary': return theme.palette.secondary.main;
      default: return theme.palette.grey[500];
    }
  };

  return (
    <StyledCard
      sx={{
        ...(animated && { '&:hover': { transform: 'scale(1.03)' } }),
        ...(size === 'small' && { padding: theme.spacing(1.5) }),
        ...(size === 'large' && { padding: theme.spacing(3) }),
      }}
      {...rest}
    >
      <IconWrapper color={iconColor || getVariantColor()}>
        {icon}
      </IconWrapper>
      <ContentWrapper>
        <ValueText variant="h6">{value}</ValueText>
        <LabelText variant="body2">{label}</LabelText>
      </ContentWrapper>
    </StyledCard>
  );
};

export default StatsCard;
