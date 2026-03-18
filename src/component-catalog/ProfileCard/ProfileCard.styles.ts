import { Card, Avatar, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import {
  PROFILE_CARD_SPACING,
  PROFILE_CARD_TYPOGRAPHY,
  PROFILE_CARD_COLORS,
  PROFILE_CARD_SHADOWS,
  PROFILE_CARD_TRANSITIONS,
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
    height: `${spacingConfig.outerContainerHeight}px`,
    padding: spacingConfig.outerContainerPadding,
    display: 'flex',
    margin: '0 auto',
    flexDirection: 'column',
    alignItems: 'center',
    gap: `${spacingConfig.userToStatsGap}px`,
    backgroundColor: 'transparent',
    border: 'none',
    flexShrink: 0,
    boxSizing: 'border-box',
    // MOBILE
    [`@media (max-width: ${spacingConfig.mobileBreakpoint - 1}px)`]: {
      width: `${spacingConfig.mobile.outerContainerWidth}px`, // ← Valor fijo 350px
      maxWidth: `${spacingConfig.mobile.outerContainerWidth}px`,
      height: 'auto',
      margin: '0 auto', // ← Centrado
      padding: 0,
      gap: `${spacingConfig.mobile.gap}px`,
    },
    // TABLET - Valores FIJOS (mantener desktop)
    [`@media (min-width: ${spacingConfig.mobileBreakpoint}px) and (max-width: ${spacingConfig.tabletBreakpoint - 1}px)`]:
      {
        width: `${spacingConfig.tablet.outerContainerWidth}px`, // ← Valor fijo 685px
        maxWidth: `${spacingConfig.tablet.outerContainerWidth}px`,
        height: `${spacingConfig.outerContainerHeight}px`,
        gap: `${spacingConfig.tablet.gap}px`,
      },
  };
});

// Card de USUARIO (282×316px)
export const StyledUserCard = styled(Card, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<StyledProfileCardProps>(({ theme, $size }) => {
  const spacingConfig = PROFILE_CARD_SPACING[$size];
  const shadowConfig = PROFILE_CARD_SHADOWS;
  const transitionConfig = PROFILE_CARD_TRANSITIONS;

  return {
    backgroundColor: PROFILE_CARD_COLORS.userCardBackground,
    width: '100%',
    maxWidth: `${spacingConfig.userCardWidth}px`,
    height: `${spacingConfig.userCardHeight}px`,
    padding: `${spacingConfig.userCardPadding}px`,
    borderRadius: `${spacingConfig.userCardBorderRadius}px`,
    boxShadow: shadowConfig.card.default,
    transition: theme.transitions.create([...transitionConfig.properties], {
      duration: transitionConfig.duration,
      easing: transitionConfig.easing,
    }),
    display: 'block',
    flexDirection: 'column',
    alignItems: 'center',
    textOverflow: 'ellipsis',
    flexShrink: 0,
    boxSizing: 'border-box',
    '&:hover': {
      boxShadow: shadowConfig.card.hover,
      transform: `translateY(${transitionConfig.hover.translateY})`,
    },
    // MOBILE
    [`@media (max-width: ${spacingConfig.mobileBreakpoint - 1}px)`]: {
      width: `${spacingConfig.mobile.userCardWidth}px`, // ← Valor fijo 320px
      maxWidth: `${spacingConfig.mobile.userCardWidth}px`,
      height: `${spacingConfig.mobile.userCardHeight}px`, // ← Valor fijo 280px
      padding: `${spacingConfig.mobile.userCardPadding}px`,
    },
    // TABLET - Valores FIJOS (mantener desktop)
    [`@media (min-width: ${spacingConfig.mobileBreakpoint}px) and (max-width: ${spacingConfig.tabletBreakpoint - 1}px)`]:
      {
        width: `${spacingConfig.tablet.userCardWidth}px`, // ← Valor fijo 282px
        maxWidth: `${spacingConfig.tablet.userCardWidth}px`,
        height: `${spacingConfig.tablet.userCardHeight}px`, // ← Valor fijo 316px
        padding: `${spacingConfig.tablet.userCardPadding}px`,
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
    width: '100%',
    // Compact variant responsive
    ...($variant === 'compact' && {
      [`@media (max-width: ${spacingConfig.mobileBreakpoint - 1}px)`]: {
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      },
    }),
    // TABLET
    [`@media (min-width: ${spacingConfig.mobileBreakpoint}px) and (max-width: ${spacingConfig.tabletBreakpoint - 1}px)`]:
      {
        gap: `${spacingConfig.tablet.gap}px`,
      },
  };
});

export const StyledAvatar = styled(Avatar, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<{ $size: ProfileCardSize }>(({ $size }) => {
  const spacingConfig = PROFILE_CARD_SPACING[$size];
  const shadowConfig = PROFILE_CARD_SHADOWS;

  return {
    width: `${spacingConfig.avatarSize}px`,
    height: `${spacingConfig.avatarSize}px`,
    backgroundColor: PROFILE_CARD_COLORS.avatarBackground,
    fontSize: `calc(${spacingConfig.avatarSize}px * 0.4)`,
    fontWeight: 600,
    border: `${spacingConfig.avatarBorder}px solid #FFFFFF`,
    boxShadow: shadowConfig.avatar,
    flexShrink: 0,
    // MOBILE
    [`@media (max-width: ${spacingConfig.mobileBreakpoint - 1}px)`]: {
      width: `${spacingConfig.mobile.avatarSize}px`, // ← Valor fijo 80px
      height: `${spacingConfig.mobile.avatarSize}px`,
      fontSize: `calc(${spacingConfig.mobile.avatarSize}px * 0.4)`,
    },
    // TABLET - Valor FIJO
    [`@media (min-width: ${spacingConfig.mobileBreakpoint}px) and (max-width: ${spacingConfig.tabletBreakpoint - 1}px)`]:
      {
        width: `${spacingConfig.tablet.avatarSize}px`, // ← Valor fijo según size
        height: `${spacingConfig.tablet.avatarSize}px`,
        fontSize: `calc(${spacingConfig.tablet.avatarSize}px * 0.4)`,
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
    gap: `${spacingConfig.textGap}px`,
    textAlign: variantConfig.textAlign,
    flex: $variant === 'compact' ? 1 : 'initial',
    minWidth: 0,
    width: '100%',
    // MOBILE & TABLET
    [`@media (max-width: ${spacingConfig.tabletBreakpoint - 1}px)`]: {
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
    fontFamily: typographyConfig.nameFont,
    fontSize: typographyConfig.nameSize,
    fontWeight: typographyConfig.nameWeight,
    color: PROFILE_CARD_COLORS.textPrimary,
    lineHeight: 1.2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    display: 'block',
    // MOBILE
    [`@media (max-width: ${spacingConfig.mobileBreakpoint - 1}px)`]: {
      fontSize: typographyConfig.mobile.nameSize,
    },
    // TABLET
    [`@media (min-width: ${spacingConfig.mobileBreakpoint}px) and (max-width: ${spacingConfig.tabletBreakpoint - 1}px)`]:
      {
        fontSize: typographyConfig.tablet.nameSize,
      },
  };
});

export const StyledUsername = styled(Typography, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<{ $size: ProfileCardSize }>(({ $size }) => {
  const typographyConfig = PROFILE_CARD_TYPOGRAPHY[$size];
  const spacingConfig = PROFILE_CARD_SPACING[$size];

  return {
    fontFamily: typographyConfig.usernameFont,
    fontSize: typographyConfig.usernameSize,
    fontWeight: typographyConfig.usernameWeight,
    color: PROFILE_CARD_COLORS.textSecondary,
    lineHeight: 1.2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    display: 'block',
    // MOBILE
    [`@media (max-width: ${spacingConfig.mobileBreakpoint - 1}px)`]: {
      fontSize: typographyConfig.mobile.usernameSize,
    },
    // TABLET
    [`@media (min-width: ${spacingConfig.mobileBreakpoint}px) and (max-width: ${spacingConfig.tabletBreakpoint - 1}px)`]:
      {
        fontSize: typographyConfig.tablet.usernameSize,
      },
  };
});

export const StyledRole = styled(Typography, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<{ $size: ProfileCardSize }>(({ $size }) => {
  const typographyConfig = PROFILE_CARD_TYPOGRAPHY[$size];
  const spacingConfig = PROFILE_CARD_SPACING[$size];

  return {
    fontFamily: typographyConfig.roleFont,
    fontSize: typographyConfig.roleSize,
    fontWeight: typographyConfig.roleWeight,
    color: PROFILE_CARD_COLORS.textSecondary,
    lineHeight: 1.2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    display: 'block',
    // MOBILE
    [`@media (max-width: ${spacingConfig.mobileBreakpoint - 1}px)`]: {
      fontSize: typographyConfig.mobile.roleSize,
    },
    // TABLET
    [`@media (min-width: ${spacingConfig.mobileBreakpoint}px) and (max-width: ${spacingConfig.tabletBreakpoint - 1}px)`]:
      {
        fontSize: typographyConfig.tablet.roleSize,
      },
  };
});

// Container de stats (685×166px)
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
    // MOBILE
    [`@media (max-width: ${spacingConfig.mobileBreakpoint - 1}px)`]: {
      flexDirection: 'row',
      width: `${spacingConfig.mobile.statsContainerWidth}px`, // ← Valor fijo 350px
      height: 'auto',
      gap: `${spacingConfig.mobile.statsGap}px`,
      flexWrap: 'wrap',
    },
    // TABLET - Valores FIJOS (mantener desktop)
    [`@media (min-width: ${spacingConfig.mobileBreakpoint}px) and (max-width: ${spacingConfig.tabletBreakpoint - 1}px)`]:
      {
        width: `${spacingConfig.tablet.statsContainerWidth}px`, // ← Valor fijo 685px
        height: `${spacingConfig.tablet.statsContainerHeight}px`, // ← Valor fijo 166px
        gap: `${spacingConfig.tablet.statsGap}px`,
      },
  };
});

// Stat card individual (195×166px)
export const StyledStatCard = styled(Card, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<{ $variant: ProfileCardVariant; $size: ProfileCardSize }>(({ $size }) => {
  const spacingConfig = PROFILE_CARD_SPACING[$size];
  const shadowConfig = PROFILE_CARD_SHADOWS;
  const transitionConfig = PROFILE_CARD_TRANSITIONS;

  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: `${spacingConfig.statCardWidth}px`,
    height: `${spacingConfig.statCardHeight}px`,
    padding: `${spacingConfig.statPadding}px`,
    backgroundColor: PROFILE_CARD_COLORS.statCardBackground,
    border: PROFILE_CARD_COLORS.statCardBorder,
    borderRadius: `${spacingConfig.statCardBorderRadius}px`,
    boxShadow: shadowConfig.card.default,
    transition: `box-shadow ${transitionConfig.duration} ${transitionConfig.easing}, transform ${transitionConfig.duration} ${transitionConfig.easing}`,
    flexShrink: 0,
    boxSizing: 'border-box',
    '&:hover': {
      boxShadow: shadowConfig.card.hover,
      transform: `translateY(${transitionConfig.hover.translateY})`,
    },
    // MOBILE
    [`@media (max-width: ${spacingConfig.mobileBreakpoint - 1}px)`]: {
      flex: '1 1 calc(33.333% - 8px)',
      width: 'auto',
      minWidth: `${spacingConfig.mobile.statMinWidth}px`, // ← Valor fijo 100px
      maxWidth: `${spacingConfig.mobile.statMaxWidth}px`, // ← Valor fijo 110px
      height: `${spacingConfig.mobile.statHeight}px`, // ← Valor fijo 110px
      padding: `${spacingConfig.mobile.statPadding}px`,
    },
    // TABLET - Valores FIJOS (mantener desktop)
    [`@media (min-width: ${spacingConfig.mobileBreakpoint}px) and (max-width: ${spacingConfig.tabletBreakpoint - 1}px)`]:
      {
        width: `${spacingConfig.tablet.statCardWidth}px`, // ← Valor fijo 195px
        height: `${spacingConfig.tablet.statCardHeight}px`, // ← Valor fijo 166px
        padding: `${spacingConfig.tablet.statPadding}px`,
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
    fontFamily: typographyConfig.statValueFont,
    fontSize: typographyConfig.statValueSize,
    fontWeight: typographyConfig.statValueWeight,
    lineHeight: typographyConfig.statValueLineHeight,
    color: PROFILE_CARD_COLORS.statValueColor,
    letterSpacing: '0',
    textAlign: 'center',
    // MOBILE
    [`@media (max-width: ${spacingConfig.mobileBreakpoint - 1}px)`]: {
      fontSize: typographyConfig.mobile.statValueSize,
    },
    // TABLET
    [`@media (min-width: ${spacingConfig.mobileBreakpoint}px) and (max-width: ${spacingConfig.tabletBreakpoint - 1}px)`]:
      {
        fontSize: typographyConfig.tablet.statValueSize,
      },
  };
});

export const StyledStatLabel = styled(Typography, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<{ $size: ProfileCardSize }>(({ $size }) => {
  const typographyConfig = PROFILE_CARD_TYPOGRAPHY[$size];
  const spacingConfig = PROFILE_CARD_SPACING[$size];

  return {
    fontFamily: typographyConfig.statLabelFont,
    fontSize: typographyConfig.statLabelSize,
    fontWeight: typographyConfig.statLabelWeight,
    padding: typographyConfig.statLabelPadding,
    lineHeight: typographyConfig.statLabelLineHeight,
    color: PROFILE_CARD_COLORS.statLabelColor,
    letterSpacing: '0',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    // MOBILE
    [`@media (max-width: ${spacingConfig.mobileBreakpoint - 1}px)`]: {
      fontSize: typographyConfig.mobile.statLabelSize,
    },
    // TABLET
    [`@media (min-width: ${spacingConfig.mobileBreakpoint}px) and (max-width: ${spacingConfig.tabletBreakpoint - 1}px)`]:
      {
        fontSize: typographyConfig.tablet.statLabelSize,
      },
  };
});
