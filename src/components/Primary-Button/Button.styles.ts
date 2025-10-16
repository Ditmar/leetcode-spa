import { Button as MuiButton, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

import { SIZE_CONFIGS, VARIANT_COLORS, SHAPE_CONFIGS } from './Button.constants';

import type { ButtonProps } from './Button.types';

export const LoadingSpinner = styled(CircularProgress)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)', 
  color: 'inherit', 
}));

export const ButtonContent = styled('span')<{ $loading: boolean }>(({ $loading }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  opacity: $loading ? 0 : 1, 
  transition: 'opacity 0.3s ease', 
}));

export const StyledButton = styled(MuiButton)<ButtonProps>(({
  theme,
  variant,
  size,
  shape,
  loading,
  fullWidth,
  disabled,
}) => {
  const colors = VARIANT_COLORS[variant || 'primary']; 
  const sizeConfig = SIZE_CONFIGS[size || 'medium']; 
  const shapeConfig = SHAPE_CONFIGS[shape || 'rounded']; 

  return {
    height: sizeConfig.height,
    minWidth: fullWidth ? '100%' : sizeConfig.minWidth,
    padding: theme.spacing(sizeConfig.paddingScale[0], sizeConfig.paddingScale[1]),
    fontSize: `${sizeConfig.fontSizeRem}rem`, 
    fontFamily: 'inherit',
    fontWeight: 500,
    borderRadius: shapeConfig, 
    background: variant === 'primary' ? colors.main : '#fff',
    color: variant === 'primary' ? '#fff' : colors.color, 
    boxShadow: theme.shadows[3],
    cursor: loading || disabled ? 'not-allowed' : 'pointer',
    border: variant === 'secondary' ? colors.border : 'none',

    '&:hover': {
      background: variant === 'primary' ? colors.hover : '#c88bd2ff',
      boxShadow: theme.shadows[4],
      transform: 'translateY(-1px)',
    },

  '&:disabled': {
      backgroundColor: '#f0f0f0',
      color: '#c7c7c7',
    },
    transition: theme.transitions.create(
      ['background-color', 'box-shadow', 'transform', 'border-color'],
      { duration: theme.transitions.duration.short }
    ),
    textTransform: 'none',
  };
});
