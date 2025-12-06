import { Card, Avatar, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import {
  PROFILE_CARD_SPACING,
  PROFILE_CARD_TYPOGRAPHY,
  PROFILE_CARD_COLORS,
} from '../../style-library/theme/theme';

import { VARIANT_CONFIGS } from './ProfileCard.constants';

import type {
  StyledProfileCardProps,
  ProfileCardSize,
  ProfileCardVariant,
} from './ProfileCard.types';

// Container EXTERNO INVISIBLE (685×527px)
export const StyledOuterContainer = styled(Box, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<StyledProfileCardProps>(({ $size }) => {
  const spacingConfig = PROFILE_CARD_SPACING[$size];

  return {
    width: `${spacingConfig.outerContainerWidth}px`, // Dimensión fija en px
    height: `${spacingConfig.outerContainerHeight}px`, // Dimensión fija en px
    padding: spacingConfig.outerContainerPadding,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: `${spacingConfig.userToStatsGap}px`, // Gap exacto en px
    backgroundColor: 'transparent',
    border: 'none',
    flexShrink: 0, // No expandir ni contraer
    boxSizing: 'border-box',
    '@media (max-width: 600px)': {
      width: '100%',
      height: 'auto',
      gap: '24px',
    },
  };
});

// Card de USUARIO (282×316px) - Dimensiones FIJAS
export const StyledUserCard = styled(Card, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<StyledProfileCardProps>(({ theme, $size }) => {
  const spacingConfig = PROFILE_CARD_SPACING[$size];

  return {
    backgroundColor: PROFILE_CARD_COLORS.statCardBackground,
    width: `${spacingConfig.userCardWidth}px`, // Dimensión fija en px
    height: `${spacingConfig.userCardHeight}px`, // Dimensión fija en px
    padding: `${spacingConfig.userCardPadding}px`,
    borderRadius: `${spacingConfig.userCardBorderRadius}px`,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Shadow exacto del ticket
    transition: theme.transitions.create(['box-shadow', 'transform'], {
      duration: theme.transitions.duration.short,
    }),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexShrink: 0,
    boxSizing: 'border-box',
    '&:hover': {
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
      transform: 'translateY(-2px)',
    },
    '@media (max-width: 600px)': {
      width: '100%',
      height: 'auto',
    },
  };
});

export const StyledProfileContainer = styled(Box, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<StyledProfileCardProps>(({ $variant, $size }) => {
  const variantConfig = VARIANT_CONFIGS[$variant];
  const spacingConfig = PROFILE_CARD_SPACING[$size];

  return {
    display: 'flex',
    flexDirection: variantConfig.direction,
    alignItems: 'center',
    gap: `${spacingConfig.infoGap}px`,
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      gap: '12px',
    },
  };
});

export const StyledAvatar = styled(Avatar, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<{ $size: ProfileCardSize }>(({ theme, $size }) => {
  const spacingConfig = PROFILE_CARD_SPACING[$size];

  return {
    width: `${spacingConfig.avatarSize}px`,
    height: `${spacingConfig.avatarSize}px`,
    backgroundColor: 'blue',
    fontSize: `calc(${spacingConfig.avatarSize}px * 0.4)`,
    fontWeight: 600,
    border: `${spacingConfig.avatarBorder}px solid ${theme.palette.background.paper}`,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    flexShrink: 0,
    '@media (max-width: 600px)': {
      width: '80px',
      height: '80px',
      fontSize: '32px',
    },
  };
});

export const StyledInfoContainer = styled(Box, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<StyledProfileCardProps>(({ $variant, $size }) => {
  const variantConfig = VARIANT_CONFIGS[$variant];
  const spacingConfig = PROFILE_CARD_SPACING[$size];

  return {
    display: 'flex',
    flexDirection: 'column',
    gap: `${spacingConfig.textGap}px`, // 4px vertical texts del ticket
    textAlign: variantConfig.textAlign,
    flex: $variant === 'compact' ? 1 : 'initial',
    minWidth: 0,
    width: '100%',
    '@media (max-width: 600px)': {
      textAlign: 'center',
    },
  };
});

export const StyledName = styled(Typography, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<{ $size: ProfileCardSize }>(({ $size }) => {
  const typographyConfig = PROFILE_CARD_TYPOGRAPHY[$size];

  return {
    fontFamily: typographyConfig.nameFont, // Poppins del ticket
    fontSize: typographyConfig.nameSize, // 24px (1.5rem)
    fontWeight: typographyConfig.nameWeight, // 600 bold
    color: PROFILE_CARD_COLORS.textPrimary,
    lineHeight: 1.2, // Para alcanzar 48×24px
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    '@media (max-width: 600px)': {
      fontSize: '1.125rem',
    },
  };
});

export const StyledUsername = styled(Typography, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<{ $size: ProfileCardSize }>(({ $size }) => {
  const typographyConfig = PROFILE_CARD_TYPOGRAPHY[$size];

  return {
    fontFamily: typographyConfig.usernameFont, // Poppins
    fontSize: typographyConfig.usernameSize,
    fontWeight: typographyConfig.usernameWeight, // 400
    color: PROFILE_CARD_COLORS.textSecondary, // #666
    lineHeight: 1.2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    '@media (max-width: 600px)': {
      fontSize: '0.875rem',
    },
  };
});

export const StyledRole = styled(Typography, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<{ $size: ProfileCardSize }>(({ $size }) => {
  const typographyConfig = PROFILE_CARD_TYPOGRAPHY[$size];

  return {
    fontFamily: typographyConfig.roleFont, // Poppins
    fontSize: typographyConfig.roleSize,
    fontWeight: typographyConfig.roleWeight, // 400
    color: PROFILE_CARD_COLORS.textSecondary,
    lineHeight: 1.2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    '@media (max-width: 600px)': {
      fontSize: '0.75rem',
    },
  };
});

// Container de stats (685×166px) - Dimensión FIJA
export const StyledStatsContainer = styled(Box, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<StyledProfileCardProps>(({ $size, $variant }) => {
  const spacingConfig = PROFILE_CARD_SPACING[$size];
  const variantConfig = VARIANT_CONFIGS[$variant];

  return {
    display: 'flex',
    flexDirection: variantConfig.statsDirection,
    gap: `${spacingConfig.statsGap}px`,
    width: `${spacingConfig.statsContainerWidth}px`,
    height: `${spacingConfig.statsContainerHeight}px`,
    justifyContent: 'center',
    flexShrink: 0,
    boxSizing: 'border-box',
    '@media (max-width: 600px)': {
      flexDirection: 'row',
      width: '100%',
      height: 'auto',
      gap: '8px',
    },
  };
});

// Stat card individual (195×166px)
export const StyledStatCard = styled(Card, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<{ $variant: ProfileCardVariant; $size: ProfileCardSize }>(({ $size }) => {
  const spacingConfig = PROFILE_CARD_SPACING[$size];

  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: `${spacingConfig.statCardWidth}px`,
    height: `${spacingConfig.statCardHeight}px`,
    padding: `${spacingConfig.statPadding}px`,
    backgroundColor: PROFILE_CARD_COLORS.statCardBackground,
    border: `${spacingConfig.statCardBorderWidth}px solid ${PROFILE_CARD_COLORS.statCardBorder}`,
    borderRadius: `${spacingConfig.statCardBorderRadius}px`,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 200ms ease-in-out, transform 200ms ease-in-out',
    flexShrink: 0,
    boxSizing: 'border-box',
    '&:hover': {
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
      transform: 'translateY(-2px)',
    },
    '@media (max-width: 600px)': {
      flex: 1,
      width: 'auto',
      minWidth: '100px',
      height: '120px',
      padding: '12px',
    },
  };
});

export const StyledStatContent = styled(Box, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<{ $variant: ProfileCardVariant }>(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  textAlign: 'center',
  width: '100%',
}));

export const StyledStatValue = styled(Typography, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<{ $size: ProfileCardSize }>(({ $size }) => {
  const typographyConfig = PROFILE_CARD_TYPOGRAPHY[$size];

  return {
    fontFamily: typographyConfig.statValueFont, // Syne
    fontSize: typographyConfig.statValueSize, // 48px (3rem)
    fontWeight: typographyConfig.statValueWeight, // 600 semibold
    lineHeight: typographyConfig.statValueLineHeight, // 1.2 para 58px height
    color: PROFILE_CARD_COLORS.statValueColor, // rgba(241,243,249,1) EXACTO
    letterSpacing: '0',
    textAlign: 'center',
  };
});

// Label: 133×24px rgba(169,169,169,1) Poppins 16px 400
export const StyledStatLabel = styled(Typography, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<{ $size: ProfileCardSize }>(({ $size }) => {
  const typographyConfig = PROFILE_CARD_TYPOGRAPHY[$size];

  return {
    fontFamily: typographyConfig.statLabelFont, // Poppins
    fontSize: typographyConfig.statLabelSize, // 16px (1rem)
    fontWeight: typographyConfig.statLabelWeight, // 400 regular
    lineHeight: typographyConfig.statLabelLineHeight, // 1 (100%)
    color: PROFILE_CARD_COLORS.statLabelColor, // rgba(169,169,169,1) EXACTO
    letterSpacing: '0',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  };
});
