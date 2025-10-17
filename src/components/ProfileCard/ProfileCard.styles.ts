import { Card, Avatar, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import { greyScale } from '../../style-library/types/theme.helpers';
import { SIZE_CONFIGS, VARIANT_CONFIGS } from './ProfileCard.constants';

import type {
  StyledProfileCardProps,
  ProfileCardSize,
  ProfileCardVariant,
} from './ProfileCard.types';

export const StyledCard = styled(Card, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<StyledProfileCardProps>(({ theme, $size }) => {
  const sizeConfig = SIZE_CONFIGS[$size];

  return {
    padding: theme.spacing(sizeConfig.padding / 8),
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
      padding: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(sizeConfig.padding / 8),
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
    [theme.breakpoints.up('md')]: {
      flexDirection: variantConfig.direction,
    },
  };
});

export const StyledAvatar = styled(Avatar, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})<{ $size: ProfileCardSize }>(({ theme, $size }) => {
  const sizeConfig = SIZE_CONFIGS[$size];

  return {
    width: sizeConfig.avatarSize,
    height: sizeConfig.avatarSize,
    backgroundColor: theme.palette.primary.main,
    fontSize: sizeConfig.avatarSize * 0.4,
    fontWeight: theme.typography.fontWeightBold || 600,
    border: `${theme.spacing(0.375)} solid ${theme.palette.background.paper}`,
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
  const sizeConfig = SIZE_CONFIGS[$size];

  return {
    fontSize: sizeConfig.nameFontSize,
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
  const sizeConfig = SIZE_CONFIGS[$size];

  return {
    fontSize: sizeConfig.usernameFontSize,
    fontWeight: theme.typography.fontWeightRegular || 400,
    color: greyScale[600],
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
  const sizeConfig = SIZE_CONFIGS[$size];

  return {
    fontSize: sizeConfig.roleFontSize,
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
  const sizeConfig = SIZE_CONFIGS[$size];
  const variantConfig = VARIANT_CONFIGS[$variant];

  return {
    display: 'flex',
    flexDirection: variantConfig.statsDirection,
    gap: theme.spacing(sizeConfig.statsGap / 8),
    marginTop: theme.spacing(2),
    paddingTop: theme.spacing(2),
    borderTop: `${theme.spacing(0.125)} solid ${greyScale[200]}`,
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

export const StyledStatIcon = styled(Box, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})(({ theme }) => ({
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

export const StyledStatValue = styled(Typography, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  fontWeight: theme.typography.fontWeightBold || 600,
  color: theme.palette.text.primary,
  lineHeight: 1,
}));

export const StyledStatLabel = styled(Typography, {
  shouldForwardProp: (prop) => prop.toString().indexOf('$') !== 0,
})(({ theme }) => ({
  fontSize: theme.typography.caption.fontSize,
  fontWeight: theme.typography.fontWeightRegular || 400,
  color: greyScale[500],
  lineHeight: 1,
  textTransform: 'capitalize',
}));
