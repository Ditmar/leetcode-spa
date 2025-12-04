import { useTheme, useMediaQuery } from '@mui/material';
import React from 'react';

import editIcon from './assets/icons/edit-icon.svg?url';
import percentIcon from './assets/icons/percent-icon.svg?url'; // ← Nueva importación
import { DEFAULT_VALUE, DEFAULT_LABEL } from './StatsCard.constants';
import {
  StyledCard,
  IconBackground,
  IconWrapper,
  ContentWrapper,
  ValueText,
  LabelText,
  IconImage,
} from './StatsCard.styles';

import type { StatsCardProps } from './StatsCard.types';

export const StatsCard: React.FC<StatsCardProps> = (props) => {
  const { icon, value = DEFAULT_VALUE, label = DEFAULT_LABEL, sx, ...rest } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const valueId = React.useId();
  const labelId = React.useId();

  // Determina qué icono usar basado en el label o value
  const getDefaultIcon = () => {
    if (label.toLowerCase().includes('average') || value.toString().includes('%')) {
      return <IconImage src={percentIcon} alt={`${label} icon`} />;
    }
    return <IconImage src={editIcon} alt={`${label} icon`} />;
  };

  const iconToUse = icon || getDefaultIcon();

  return (
    <StyledCard
      {...rest}
      sx={sx}
      elevation={0}
      role="group"
      aria-label={`${label} statistic`}
      aria-labelledby={`${labelId} ${valueId}`}
    >
      <IconBackground aria-hidden="true" data-mobile={isMobile}>
        <IconWrapper aria-hidden="true">{iconToUse}</IconWrapper>
      </IconBackground>

      <ContentWrapper data-mobile={isMobile}>
        <ValueText id={valueId} variant="h4" as="div">
          {value}
        </ValueText>
        <LabelText id={labelId} variant="body2" as="div">
          {label}
        </LabelText>
      </ContentWrapper>
    </StyledCard>
  );
};
