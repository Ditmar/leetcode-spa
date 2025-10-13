import { styled } from '@mui/material/styles';
import { Card, Avatar, Typography, Box } from '@mui/material';
import type { ProfileCardSize, ProfileCardVariant, StyledProfileCardProps } from './ProfileCard.types';
import { SIZE_CONFIGS, VARIANT_CONFIGS } from './ProfileCard.constants';
import { greyScale } from '../../style-library/types/theme.helpers';

export const StyledCard = styled(Card, {
  shouldForwardProp: (prop) => !prop.toString().startsWith('$'),
})<StyledProfileCardProps>(({ theme, $size, $variant }) => {
  const sizeConfig = SIZE_CONFIGS[$size];
  const variantConfig = VARIANT_CONFIGS[$variant];

  return {
    padding: sizeConfig.padding,
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[2],
    transition: theme.transitions.create(['box-shadow', 'transform'], {
      duration: theme.transitions.duration.short,
    }),
    '&:hover': {
      boxShadow: theme.shadows[4],
      transform: 'translateY(-2px)',
    },
  };
});

export const StyledProfileContainer = styled(Box, {
  shouldForwardProp: (prop) => !prop.toString().startsWith('$'),
})<StyledProfileCardProps>(({ theme, $size, $variant }) => {
  const variantConfig = VARIANT_CONFIGS[$variant];

  return {
    display: 'flex',
    flexDirection: variantConfig.direction,
    alignItems: 'center',
    gap: theme.spacing(2),
    width: '100%',
  };
});

export const StyledAvatar = styled(Avatar, {
  shouldForwardProp: (prop) => !prop.toString().startsWith('$'),
})<{ $size: ProfileCardSize }>(({ theme, $size }) => {
  const sizeConfig = SIZE_CONFIGS[$size];

  return {
    width: sizeConfig.avatarSize,
    height: sizeConfig.avatarSize,
    backgroundColor: theme.palette.primary.main,
    fontSize: sizeConfig.avatarSize * 0.4,
    fontWeight: 600,
    border: `3px solid ${theme.palette.background.paper}`,
    boxShadow: theme.shadows[2],
  };
});

export const StyledInfoContainer = styled(Box, {
  shouldForwardProp: (prop) => !prop.toString().startsWith('$'),
})<StyledProfileCardProps>(({ theme, $variant }) => {
  const variantConfig = VARIANT_CONFIGS[$variant];

  return {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(0.5),
    textAlign: variantConfig.textAlign,
    flex: $variant === 'compact' ? 1 : 'initial',
    minWidth: 0, // Enable text truncation
  };
});

export const StyledName = styled(Typography, {
  shouldForwardProp: (prop) => !prop.toString().startsWith('$'),
})<{ $size: ProfileCardSize }>(({ theme, $size }) => {
  const sizeConfig = SIZE_CONFIGS[$size];

  return {
    fontSize: sizeConfig.nameFontSize,
    fontWeight: 600,
    color: theme.palette.text.primary,
    lineHeight: 1.2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  };
});

export const StyledUsername = styled(Typography, {
  shouldForwardProp: (prop) => !prop.toString().startsWith('$'),
})<{ $size: ProfileCardSize }>(({ theme, $size }) => {
  const sizeConfig = SIZE_CONFIGS[$size];

  return {
    fontSize: sizeConfig.usernameFontSize,
    fontWeight: 400,
    color: greyScale[600],
    lineHeight: 1.2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  };
});

export const StyledRole = styled(Typography, {
  shouldForwardProp: (prop) => !prop.toString().startsWith('$'),
})<{ $size: ProfileCardSize }>(({ theme, $size }) => {
  const sizeConfig = SIZE_CONFIGS[$size];

  return {
    fontSize: sizeConfig.roleFontSize,
    fontWeight: 500,
    color: theme.palette.primary.main,
    lineHeight: 1.2,
    marginTop: theme.spacing(0.5),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  };
});

export const StyledStatsContainer = styled(Box, {
  shouldForwardProp: (prop) => !prop.toString().startsWith('$'),
})<StyledProfileCardProps>(({ theme, $size, $variant }) => {
  const sizeConfig = SIZE_CONFIGS[$size];
  const variantConfig = VARIANT_CONFIGS[$variant];

  return {
    display: 'flex',
    flexDirection: variantConfig.statsDirection,
    gap: sizeConfig.statsGap,
    marginTop: theme.spacing(2),
    paddingTop: theme.spacing(2),
    borderTop: `1px solid ${greyScale[200]}`,
    justifyContent: $variant === 'expanded' ? 'space-between' : 'center',
    flexWrap: 'wrap',
  };
});

export const StyledStatItem = styled(Box, {
  shouldForwardProp: (prop) => !prop.toString().startsWith('$'),
})<{ $variant: ProfileCardVariant }>(({ theme, $variant }) => ({
  display: 'flex',
  flexDirection: $variant === 'expanded' ? 'row' : 'column',
  alignItems: 'center',
  gap: theme.spacing(1),
  flex: $variant === 'expanded' ? '1 1 auto' : '0 0 auto',
  justifyContent: $variant === 'expanded' ? 'space-between' : 'center',
  padding: $variant === 'expanded' ? theme.spacing(1, 0) : 0,
}));

export const StyledStatIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.main,
  '& svg': {
    fontSize: '1.25rem',
  },
}));

export const StyledStatContent = styled(Box, {
  shouldForwardProp: (prop) => !prop.toString().startsWith('$'),
})<{ $variant: ProfileCardVariant }>(({ $variant }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: $variant === 'expanded' ? 'flex-end' : 'center',
  gap: 2,
}));

export const StyledStatValue = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 600,
  color: theme.palette.text.primary,
  lineHeight: 1,
}));

export const StyledStatLabel = styled(Typography)(({ theme }) => ({
  fontSize: '0.75rem',
  fontWeight: 400,
  color: greyScale[500],
  lineHeight: 1,
  textTransform: 'capitalize',
}));