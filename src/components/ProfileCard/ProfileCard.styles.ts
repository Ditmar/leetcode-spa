import { Card, Avatar, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import { PROFILE_CARD_SPACING, PROFILE_CARD_TYPOGRAPHY } from '../../style-library/theme/theme';

import { VARIANT_CONFIGS } from './ProfileCard.constants';

import type {
  StyledProfileCardProps,
  ProfileCardSize,
  ProfileCardVariant,
} from './ProfileCard.types';

// Container EXTERNO INVISIBLE (685×527px) - sin borde
export const StyledOuterContainer = styled(Box, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<StyledProfileCardProps>(({ theme, $size }) => {
  const spacingConfig = PROFILE_CARD_SPACING[$size];

  return {
    width: spacingConfig.outerContainerWidth,
    height: spacingConfig.outerContainerHeight,
    padding: spacingConfig.outerContainerPadding,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(spacingConfig.userToStatsGap / 8),
    backgroundColor: 'transparent',
    border: 'none',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto',
      gap: theme.spacing(3),
    },
  };
});

// Card de USUARIO (282×316px) - CON borde y sombra
export const StyledUserCard = styled(Card, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<StyledProfileCardProps>(({ theme, $size }) => {
  const spacingConfig = PROFILE_CARD_SPACING[$size];

  return {
    width: spacingConfig.userCardWidth,
    height: spacingConfig.userCardHeight,
    padding: theme.spacing(spacingConfig.userCardPadding),
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[2],
    transition: theme.transitions.create(['box-shadow', 'transform'], {
      duration: theme.transitions.duration.short,
    }),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '&:hover': {
      boxShadow: theme.shadows[4],
      transform: `translateY(-${theme.spacing(0.25)})`,
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto',
    },
  };
});

export const StyledProfileContainer = styled(Box, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<StyledProfileCardProps>(({ theme, $variant, $size }) => {
  const variantConfig = VARIANT_CONFIGS[$variant];
  const spacingConfig = PROFILE_CARD_SPACING[$size];

  return {
    display: 'flex',
    flexDirection: variantConfig.direction,
    alignItems: 'center',
    gap: theme.spacing(spacingConfig.infoGap),
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: theme.spacing(1.5),
    },
  };
});

export const StyledAvatar = styled(Avatar, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<{ $size: ProfileCardSize }>(({ theme, $size }) => {
  const spacingConfig = PROFILE_CARD_SPACING[$size];

  return {
    width: spacingConfig.avatarSize,
    height: spacingConfig.avatarSize,
    backgroundColor: theme.palette.primary.main,
    fontSize: `calc(${spacingConfig.avatarSize}px * 0.4)`,
    fontWeight: theme.typography.fontWeightBold || 600,
    border: `${spacingConfig.avatarBorder}px solid ${theme.palette.background.paper}`,
    boxShadow: theme.shadows[2],
    [theme.breakpoints.down('sm')]: {
      width: 80,
      height: 80,
      fontSize: 32,
    },
  };
});

export const StyledInfoContainer = styled(Box, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<StyledProfileCardProps>(({ theme, $variant, $size }) => {
  const variantConfig = VARIANT_CONFIGS[$variant];
  const spacingConfig = PROFILE_CARD_SPACING[$size];

  return {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(spacingConfig.textGap),
    textAlign: variantConfig.textAlign,
    flex: $variant === 'compact' ? 1 : 'initial',
    minWidth: 0,
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  };
});

export const StyledName = styled(Typography, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<{ $size: ProfileCardSize }>(({ theme, $size }) => {
  const typographyConfig = PROFILE_CARD_TYPOGRAPHY[$size];

  return {
    fontSize: typographyConfig.nameSize,
    fontWeight: theme.typography.fontWeightBold || 600,
    color: theme.palette.text.primary,
    lineHeight: 1.2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.body1.fontSize,
    },
  };
});

export const StyledUsername = styled(Typography, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<{ $size: ProfileCardSize }>(({ theme, $size }) => {
  const typographyConfig = PROFILE_CARD_TYPOGRAPHY[$size];

  return {
    fontSize: typographyConfig.usernameSize,
    fontWeight: theme.typography.fontWeightRegular || 400,
    color: theme.palette.grey[600],
    lineHeight: 1.2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.body2.fontSize,
    },
  };
});

export const StyledRole = styled(Typography, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<{ $size: ProfileCardSize }>(({ theme, $size }) => {
  const typographyConfig = PROFILE_CARD_TYPOGRAPHY[$size];

  return {
    fontSize: typographyConfig.roleSize,
    fontWeight: theme.typography.fontWeightMedium || 500,
    color: theme.palette.grey[600],
    lineHeight: 1.2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.caption.fontSize,
    },
  };
});

// Container de stats (685×166px)
export const StyledStatsContainer = styled(Box, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<StyledProfileCardProps>(({ theme, $size, $variant }) => {
  const spacingConfig = PROFILE_CARD_SPACING[$size];
  const variantConfig = VARIANT_CONFIGS[$variant];

  return {
    display: 'flex',
    flexDirection: variantConfig.statsDirection, // Siempre 'row' ahora
    gap: theme.spacing(spacingConfig.statsGap / 8),
    width: spacingConfig.statsContainerWidth,
    height: spacingConfig.statsContainerHeight,
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
      width: '100%',
      height: 'auto',
      gap: theme.spacing(1),
    },
  };
});

// Cada stat card individual (195×166px)
export const StyledStatCard = styled(Card, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<{ $variant: ProfileCardVariant; $size: ProfileCardSize }>(({ theme, $size }) => {
  const spacingConfig = PROFILE_CARD_SPACING[$size];

  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: spacingConfig.statCardWidth,
    height: spacingConfig.statCardHeight,
    padding: theme.spacing(spacingConfig.statPadding),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[2],
    transition: theme.transitions.create(['box-shadow', 'transform'], {
      duration: theme.transitions.duration.short,
    }),
    '&:hover': {
      boxShadow: theme.shadows[4],
      transform: 'translateY(-2px)',
    },
    [theme.breakpoints.down('sm')]: {
      flex: 1,
      width: 'auto',
      minWidth: 100,
      height: 120,
      padding: theme.spacing(1.5),
    },
  };
});

// Contenedor del contenido de stat (sin icono)
export const StyledStatContent = styled(Box, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<{ $variant: ProfileCardVariant }>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(1),
  textAlign: 'center',
  width: '100%',
}));

// Valor numérico: Syne SemiBold 48px
export const StyledStatValue = styled(Typography, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<{ $size: ProfileCardSize }>(({ theme, $size }) => {
  const typographyConfig = PROFILE_CARD_TYPOGRAPHY[$size];

  return {
    fontFamily: typographyConfig.statValueFont,
    fontSize: typographyConfig.statValueSize,
    fontWeight: typographyConfig.statValueWeight,
    lineHeight: typographyConfig.statValueLineHeight,
    color: theme.palette.text.primary,
    letterSpacing: '0',
    textAlign: 'center',
  };
});

// Label: Poppins Regular 16px
export const StyledStatLabel = styled(Typography, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<{ $size: ProfileCardSize }>(({ theme, $size }) => {
  const typographyConfig = PROFILE_CARD_TYPOGRAPHY[$size];

  return {
    fontFamily: typographyConfig.statLabelFont,
    fontSize: typographyConfig.statLabelSize,
    fontWeight: typographyConfig.statLabelWeight,
    lineHeight: typographyConfig.statLabelLineHeight,
    color: theme.palette.grey[600],
    letterSpacing: '0',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  };
});
