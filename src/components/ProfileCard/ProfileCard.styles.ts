import { Card, Avatar, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import { PROFILE_CARD_SPACING, PROFILE_CARD_TYPOGRAPHY } from '../../style-library/theme/theme';

import { VARIANT_CONFIGS } from './ProfileCard.constants';

import type {
  StyledProfileCardProps,
  ProfileCardSize,
  ProfileCardVariant,
} from './ProfileCard.types';

export const StyledCard = styled(Card, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<StyledProfileCardProps>(({ theme, $size }) => {
  const spacingConfig = PROFILE_CARD_SPACING[$size];

  return {
    padding: theme.spacing(spacingConfig.paddingUnits),
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[2],
    transition: theme.transitions.create(['box-shadow', 'transform'], {
      duration: theme.transitions.duration.short,
    }),
    '&:hover': {
      boxShadow: theme.shadows[4],
      transform: `translateY(-${theme.spacing(0.25)})`,
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
  };
});

export const StyledProfileContainer = styled(Box, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<StyledProfileCardProps>(({ theme, $variant }) => {
  const variantConfig = VARIANT_CONFIGS[$variant];

  return {
    display: 'flex',
    flexDirection: variantConfig.direction,
    alignItems: 'center',
    gap: theme.spacing(2),
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
    width: theme.spacing(spacingConfig.avatarSpacing),
    height: theme.spacing(spacingConfig.avatarSpacing),
    backgroundColor: theme.palette.primary.main,
    fontSize: `calc(${theme.spacing(spacingConfig.avatarSpacing)} * 0.4)`,
    fontWeight: theme.typography.fontWeightBold || 600,
    border: `${theme.spacing(spacingConfig.borderWidth / 8)} solid ${theme.palette.background.paper}`,
    boxShadow: theme.shadows[2],
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(6),
      height: theme.spacing(6),
      fontSize: theme.spacing(2.4),
    },
  };
});

export const StyledInfoContainer = styled(Box, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<StyledProfileCardProps>(({ theme, $variant }) => {
  const variantConfig = VARIANT_CONFIGS[$variant];

  return {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(0.5),
    textAlign: variantConfig.textAlign,
    flex: $variant === 'compact' ? 1 : 'initial',
    minWidth: 0,
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
    lineHeight: theme.typography.body1.lineHeight,
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
    lineHeight: theme.typography.body2.lineHeight,
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
    color: theme.palette.primary.main,
    lineHeight: theme.typography.caption.lineHeight,
    marginTop: theme.spacing(0.5),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.caption.fontSize,
    },
  };
});

export const StyledStatsContainer = styled(Box, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<StyledProfileCardProps>(({ theme, $size, $variant }) => {
  const spacingConfig = PROFILE_CARD_SPACING[$size];
  const variantConfig = VARIANT_CONFIGS[$variant];

  return {
    display: 'flex',
    flexDirection: variantConfig.statsDirection,
    gap: theme.spacing(spacingConfig.statsGap),
    marginTop: theme.spacing(spacingConfig.statsPaddingTop),
    paddingTop: theme.spacing(spacingConfig.statsPaddingTop),
    borderTop: `${theme.spacing(0.125)} solid ${theme.palette.divider}`,
    justifyContent: $variant === 'expanded' ? 'space-between' : 'center',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: theme.spacing(1.5),
    },
  };
});

export const StyledStatItem = styled(Box, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<{ $variant: ProfileCardVariant }>(({ theme, $variant }) => ({
  display: 'flex',
  flexDirection: $variant === 'expanded' ? 'row' : 'column',
  alignItems: 'center',
  gap: theme.spacing(1),
  flex: $variant === 'expanded' ? '1 1 auto' : '0 0 auto',
  justifyContent: $variant === 'expanded' ? 'space-between' : 'center',
  padding: $variant === 'expanded' ? theme.spacing(1, 0) : 0,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
}));

export const StyledStatIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.main,
  '& svg': {
    fontSize: theme.spacing(2.5),
  },
}));

export const StyledStatContent = styled(Box, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<{ $variant: ProfileCardVariant }>(({ theme, $variant }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: $variant === 'expanded' ? 'flex-end' : 'center',
  gap: theme.spacing(0.25),
  [theme.breakpoints.down('sm')]: {
    alignItems: 'flex-end',
  },
}));

export const StyledStatValue = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  fontWeight: theme.typography.fontWeightBold || 600,
  color: theme.palette.text.primary,
  lineHeight: 1,
}));

export const StyledStatLabel = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.caption.fontSize,
  fontWeight: theme.typography.fontWeightRegular || 400,
  color: theme.palette.grey[500],
  lineHeight: 1,
  textTransform: 'capitalize',
}));
