// src/components/StatsCard/StatsCard.tsx
import React from 'react';
import { Box } from '@mui/material';

import { StyledCard, IconWrapper, ContentWrapper, ValueText, LabelText } from './StatsCard.styles';
import type { StatsCardProps, StatsCardVariant, StatsCardSize } from './StatsCard.types';
import { StatsCardVariant as VariantEnum, StatsCardSize as SizeEnum } from './StatsCard.types';
import { useTheme } from '@mui/material/styles';

export const StatsCard: React.FC<StatsCardProps> = ({
  icon,
  value,
  label,
  variant = VariantEnum.PRIMARY,
  size = SizeEnum.MEDIUM,
  iconColor,
  animated = true,
  sx,
  ...rest
}) => {
  const theme = useTheme();

  const variantColorMap: Record<StatsCardVariant, string> = {
    [VariantEnum.PRIMARY]: theme.palette.primary.main,
    [VariantEnum.SECONDARY]: theme.palette.grey[700],
    [VariantEnum.SUCCESS]: theme.palette.success.main,
    [VariantEnum.WARNING]: theme.palette.warning.main,
    [VariantEnum.ERROR]: theme.palette.error.main,
  };

  const resolvedIconColor = iconColor ?? variantColorMap[variant];

  return (
    <StyledCard
      $animated={animated}
      $size={size}
      sx={sx}
      elevation={0}
      role="group"
      aria-label={`${label} statistic`}
      {...rest}
    >
      <IconWrapper
        $iconColor={resolvedIconColor}
        aria-label={`${label} icon`}
        data-testid="icon-wrapper"
      >
        {/* The icon passed in is typically an MUI SvgIcon — don't mutate it */}
        <Box component="span" aria-hidden="true">
          {icon}
        </Box>
      </IconWrapper>

      <ContentWrapper>
        <ValueText variant="h6" aria-label="stat-value">
          {value}
        </ValueText>
        <LabelText variant="body2" aria-label="stat-label">
          {label}
        </LabelText>
      </ContentWrapper>
    </StyledCard>
  );
};
