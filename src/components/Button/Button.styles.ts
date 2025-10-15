import { styled } from '@mui/material/styles';
import { Button as MuiButton, CircularProgress } from '@mui/material';
import type { StyledButtonProps } from './Button.types';
import { SIZE_CONFIGS, SHAPE_CONFIGS } from './Button.constants';
import { blueScale, redScale, greenScale, greyScale } from '../../style-library/types/theme.helpers';

// Map variant → palette
const VARIANT_COLORS = {
  primary: { main: blueScale[600], light: blueScale[50], hover: blueScale[700], active: blueScale[800] },
  secondary: { main: greyScale[600], light: greyScale[50], hover: greyScale[700], active: greyScale[800] },
  success: { main: greenScale[600], light: greenScale[50], hover: greenScale[700], active: greenScale[800] },
  error: { main: redScale[600], light: redScale[50], hover: redScale[700], active: redScale[800] },
} as const;

export const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => !prop.toString().startsWith('$'),
})<StyledButtonProps>(({ theme, $variant, $size, $shape, $loading, $fullWidth }) => {
  const colors = VARIANT_COLORS[$variant];
  const size = SIZE_CONFIGS[$size];
  const shape = SHAPE_CONFIGS[$shape];

  return {
    height: size.height,
    minWidth: $fullWidth ? '100%' : size.minWidth,
    padding: size.padding,
    fontSize: size.fontSize,
    fontWeight: 500,
    textTransform: 'none',
    borderRadius: shape.borderRadius,
    border: 'none',
    position: 'relative',
    overflow: 'hidden',

    // contained
    backgroundColor: colors.main,
    color: '#fff',
    boxShadow: theme.shadows[2],
    cursor: $loading ? 'default' : 'pointer',

    '&:hover': {
      backgroundColor: colors.hover,
      boxShadow: theme.shadows[4],
      transform: 'translateY(-1px)',
    },
    '&:focus': {
      outline: 'none',
      boxShadow: `${theme.shadows[4]}, 0 0 0 3px ${colors.light}`,
    },
    '&:active': {
      backgroundColor: colors.active,
      transform: 'translateY(0)',
      boxShadow: theme.shadows[1],
    },

    '&:disabled': {
      backgroundColor: greyScale[300],
      color: greyScale[500],
      cursor: 'not-allowed',
      boxShadow: 'none',
      transform: 'none',
      '&:hover': { backgroundColor: greyScale[300], transform: 'none', boxShadow: 'none' },
    },

    ...($loading && {
      '&:hover': { backgroundColor: colors.main, transform: 'none' },
    }),

    ...($fullWidth && { width: '100%' }),

    transition: theme.transitions.create(
      ['background-color', 'box-shadow', 'transform', 'border-color'],
      { duration: theme.transitions.duration.short }
    ),

    // ripple decorativo
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(circle, transparent 1%, rgba(255,255,255,0.1) 1%)',
      backgroundSize: '15000%',
      transition: 'background-size 0.3s',
      pointerEvents: 'none',
    },
    '&:active::before': { backgroundSize: '100%', transition: 'background-size 0s' },
  };
});

export const LoadingSpinner = styled(CircularProgress)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'inherit',
});

export const ButtonContent = styled('span')<{ $loading: boolean }>(({ $loading }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  opacity: $loading ? 0 : 1,
  transition: 'opacity 0.2s ease',
}));
