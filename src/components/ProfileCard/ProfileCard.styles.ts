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
    width: '100%',
    maxWidth: `${spacingConfig.outerContainerWidth}px`,
    height: `${spacingConfig.outerContainerHeight}px`, // Dimensión fija en px
    padding: spacingConfig.outerContainerPadding,
    display: 'flex',
    margin: '0 auto',
    flexDirection: 'column',
    alignItems: 'center',
    gap: `${spacingConfig.userToStatsGap}px`, // Gap exacto en px
    backgroundColor: 'transparent',
    border: 'none',
    flexShrink: 0, // No expandir ni contraer
    boxSizing: 'border-box',
    // MOBILE: < 768px
    [`@media (max-width: ${spacingConfig.mobileBreakpoint - 1}px)`]: {
      width: '100%',
      maxWidth: '100%',
      height: 'auto',
      gap: '24px',
    },
    // TABLET: 768px - 1023px
    [`@media (min-width: ${spacingConfig.mobileBreakpoint}px) and (max-width: ${spacingConfig.tabletBreakpoint - 1}px)`]:
      {
        maxWidth: '90%',
        height: 'auto',
        gap: '32px',
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
    width: '100%',
    maxWidth: `${spacingConfig.userCardWidth}px`, // Dimensión fija en px
    height: `${spacingConfig.userCardHeight}px`, // Dimensión fija en px
    padding: `${spacingConfig.userCardPadding}px`,
    borderRadius: `${spacingConfig.userCardBorderRadius}px`,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Shadow exacto del ticket
    transition: theme.transitions.create(['box-shadow', 'transform'], {
      duration: theme.transitions.duration.short,
    }),
    display: 'block',
    flexDirection: 'column',
    alignItems: 'center',
    textOverflow: 'ellipsis',
    flexShrink: 0,
    boxSizing: 'border-box',
    '&:hover': {
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
      transform: 'translateY(-2px)',
    },
    // MOBILE: < 768px
    [`@media (max-width: ${spacingConfig.mobileBreakpoint - 1}px)`]: {
      width: '100%',
      maxWidth: '100%',
      height: 'auto',
      padding: '16px',
    },
    // TABLET: 768px - 1023px
    [`@media (min-width: ${spacingConfig.mobileBreakpoint}px) and (max-width: ${spacingConfig.tabletBreakpoint - 1}px)`]:
      {
        maxWidth: '95%',
        height: 'auto',
        minHeight: '280px',
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
    // MOBILE: < 768px
    ...($variant === 'compact' && {
      [`@media (max-width: ${spacingConfig.mobileBreakpoint - 1}px)`]: {
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      },
    }),
    // TABLET: 768px - 1023px
    [`@media (min-width: ${spacingConfig.mobileBreakpoint}px) and (max-width: ${spacingConfig.tabletBreakpoint - 1}px)`]:
      {
        gap: `${Math.floor(spacingConfig.infoGap * 0.8)}px`,
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
    // MOBILE: < 768px
    [`@media (max-width: ${spacingConfig.mobileBreakpoint - 1}px)`]: {
      width: '80px',
      height: '80px',
      fontSize: '32px',
    },
    // TABLET: 768px - 1023px
    [`@media (min-width: ${spacingConfig.mobileBreakpoint}px) and (max-width: ${spacingConfig.tabletBreakpoint - 1}px)`]:
      {
        width: `${Math.floor(spacingConfig.avatarSize * 0.9)}px`,
        height: `${Math.floor(spacingConfig.avatarSize * 0.9)}px`,
        fontSize: `calc(${Math.floor(spacingConfig.avatarSize * 0.9)}px * 0.4)`,
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
    // MOBILE: < 768px
    [`@media (max-width: ${spacingConfig.mobileBreakpoint - 1}px)`]: {
      textAlign: 'center',
    },
    // TABLET: 768px - 1023px
    [`@media (min-width: ${spacingConfig.mobileBreakpoint}px) and (max-width: ${spacingConfig.tabletBreakpoint - 1}px)`]:
      {
        textAlign: 'center',
      },
  };
});

export const StyledName = styled(Typography, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<{ $size: ProfileCardSize }>(({ $size }) => {
  const typographyConfig = PROFILE_CARD_TYPOGRAPHY[$size];
  const spacingConfig = PROFILE_CARD_SPACING[$size];

  return {
    fontFamily: typographyConfig.nameFont, // Poppins del ticket
    fontSize: typographyConfig.nameSize, // 24px (1.5rem)
    fontWeight: typographyConfig.nameWeight, // 600 bold
    color: PROFILE_CARD_COLORS.textPrimary,
    lineHeight: 1.2, // Para alcanzar 48×24px
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    display: 'block',
    // MOBILE: < 768px
    [`@media (max-width: ${spacingConfig.mobileBreakpoint - 1}px)`]: {
      fontSize: '1.125rem',
    },
    // TABLET: 768px - 1023px
    [`@media (min-width: ${spacingConfig.mobileBreakpoint}px) and (max-width: ${spacingConfig.tabletBreakpoint - 1}px)`]:
      {
        fontSize: '1.25rem',
      },
  };
});

export const StyledUsername = styled(Typography, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<{ $size: ProfileCardSize }>(({ $size }) => {
  const typographyConfig = PROFILE_CARD_TYPOGRAPHY[$size];
  const spacingConfig = PROFILE_CARD_SPACING[$size];

  return {
    fontFamily: typographyConfig.usernameFont, // Poppins
    fontSize: typographyConfig.usernameSize,
    fontWeight: typographyConfig.usernameWeight, // 400
    color: PROFILE_CARD_COLORS.textSecondary, // #666
    lineHeight: 1.2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    display: 'block',
    // MOBILE: < 768px
    [`@media (max-width: ${spacingConfig.mobileBreakpoint - 1}px)`]: {
      fontSize: '0.875rem',
    },
    // TABLET: 768px - 1023px
    [`@media (min-width: ${spacingConfig.mobileBreakpoint}px) and (max-width: ${spacingConfig.tabletBreakpoint - 1}px)`]:
      {
        fontSize: '0.9rem',
      },
  };
});

export const StyledRole = styled(Typography, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<{ $size: ProfileCardSize }>(({ $size }) => {
  const typographyConfig = PROFILE_CARD_TYPOGRAPHY[$size];
  const spacingConfig = PROFILE_CARD_SPACING[$size];

  return {
    fontFamily: typographyConfig.roleFont, // Poppins
    fontSize: typographyConfig.roleSize,
    fontWeight: typographyConfig.roleWeight, // 400
    color: PROFILE_CARD_COLORS.textSecondary,
    lineHeight: 1.2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    display: 'block',
    // MOBILE: < 768px
    [`@media (max-width: ${spacingConfig.mobileBreakpoint - 1}px)`]: {
      fontSize: '0.75rem',
    },
    // TABLET: 768px - 1023px
    [`@media (min-width: ${spacingConfig.mobileBreakpoint}px) and (max-width: ${spacingConfig.tabletBreakpoint - 1}px)`]:
      {
        fontSize: '0.8rem',
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
    width: '100%',
    maxWidth: `${spacingConfig.statsContainerWidth}px`,
    height: `${spacingConfig.statsContainerHeight}px`,
    justifyContent: 'center',
    flexShrink: 0,
    boxSizing: 'border-box',
    // MOBILE: < 768px
    [`@media (max-width: ${spacingConfig.mobileBreakpoint - 1}px)`]: {
      flexDirection: 'row',
      width: '100%',
      maxWidth: '100%',
      height: 'auto',
      gap: '8px',
      flexWrap: 'wrap',
    },
    // TABLET: 768px - 1023px
    [`@media (min-width: ${spacingConfig.mobileBreakpoint}px) and (max-width: ${spacingConfig.tabletBreakpoint - 1}px)`]:
      {
        maxWidth: '95%',
        gap: `${Math.floor(spacingConfig.statsGap * 0.7)}px`,
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
    // MOBILE: < 768px
    [`@media (max-width: ${spacingConfig.mobileBreakpoint - 1}px)`]: {
      flex: '1 1 calc(33.333% - 8px)', // ← 3 columnas con gap
      width: 'auto',
      minWidth: '90px',
      maxWidth: '120px',
      height: '120px',
      padding: '12px',
    },
    // TABLET: 768px - 1023px
    [`@media (min-width: ${spacingConfig.mobileBreakpoint}px) and (max-width: ${spacingConfig.tabletBreakpoint - 1}px)`]:
      {
        width: `${Math.floor(spacingConfig.statCardWidth * 0.85)}px`,
        height: `${Math.floor(spacingConfig.statCardHeight * 0.85)}px`,
        padding: `${Math.floor(spacingConfig.statPadding * 0.8)}px`,
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
  const spacingConfig = PROFILE_CARD_SPACING[$size];

  return {
    fontFamily: typographyConfig.statValueFont, // Syne
    fontSize: typographyConfig.statValueSize, // 48px (3rem)
    fontWeight: typographyConfig.statValueWeight, // 600 semibold
    lineHeight: typographyConfig.statValueLineHeight, // 1.2 para 58px height
    color: PROFILE_CARD_COLORS.statValueColor,
    letterSpacing: '0',
    textAlign: 'center',
    // MOBILE: < 768px
    [`@media (max-width: ${spacingConfig.mobileBreakpoint - 1}px)`]: {
      fontSize: '1.5rem',
    },
    // TABLET: 768px - 1023px
    [`@media (min-width: ${spacingConfig.mobileBreakpoint}px) and (max-width: ${spacingConfig.tabletBreakpoint - 1}px)`]:
      {
        fontSize: '2.25rem',
      },
  };
});

// Label: 133×24px rgba(169,169,169,1) Poppins 16px 400
export const StyledStatLabel = styled(Typography, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<{ $size: ProfileCardSize }>(({ $size }) => {
  const typographyConfig = PROFILE_CARD_TYPOGRAPHY[$size];
  const spacingConfig = PROFILE_CARD_SPACING[$size];

  return {
    fontFamily: typographyConfig.statLabelFont, // Poppins
    fontSize: typographyConfig.statLabelSize, // 16px (1rem)
    fontWeight: typographyConfig.statLabelWeight, // 400 regular
    padding: typographyConfig.statLabelPadding,
    lineHeight: typographyConfig.statLabelLineHeight, // 1 (100%)
    color: PROFILE_CARD_COLORS.statLabelColor, // rgba(169,169,169,1) EXACTO
    letterSpacing: '0',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    // MOBILE: < 768px
    [`@media (max-width: ${spacingConfig.mobileBreakpoint - 1}px)`]: {
      fontSize: '0.75rem',
    },
    // TABLET: 768px - 1023px
    [`@media (min-width: ${spacingConfig.mobileBreakpoint}px) and (max-width: ${spacingConfig.tabletBreakpoint - 1}px)`]:
      {
        fontSize: '0.875rem',
      },
  };
});
