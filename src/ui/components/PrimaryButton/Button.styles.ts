import { styled, type CSSObject } from '@mui/material/styles';

import { SIZE_CONFIGS, SHAPE_CONFIGS } from './Button.constants';

import type { ButtonShape, ButtonSize, ButtonVariant } from './Button.types';

// escala el borderRadius aunque venga como '0.5rem'
const scaleLength = (len: number | string, factor: number): number | string => {
  if (typeof len === 'number') return len * factor;
  const m = /^(\d*\.?\d+)\s*([a-z%]*)$/i.exec(len.trim());
  if (!m) return len;
  const [, num, unit] = m;
  const value = parseFloat(num) * factor;
  return unit ? `${value}${unit}` : value;
};

type ButtonGradients = {
  primary?: string;
  primaryHover?: string;
};

// helper para leer theme.gradients SIN usar any
const getGradients = (t: unknown): ButtonGradients => {
  if (typeof t === 'object' && t !== null && 'gradients' in t) {
    const maybe = (t as { gradients?: ButtonGradients }).gradients;
    return maybe ?? {};
  }
  return {};
};

export const StyledButton = styled('button')<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $shape: ButtonShape;
  $loading?: boolean;
}>(({ theme, $variant, $size, $shape, $loading }) => {
  const s = SIZE_CONFIGS[$size];
  const radius = scaleLength(theme.shape.borderRadius, SHAPE_CONFIGS[$shape]);

  const gradients = getGradients(theme);
  const gradient = gradients.primary ?? 'linear-gradient(60deg, #B33DEB 13.4%, #DE8FFF 86.6%)';
  const gradientHover = gradients.primaryHover ?? gradient;

  // 👇 en vez de Record<string, any> usamos CSSObject
  const base: CSSObject = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(1),
    height: theme.spacing(s.height),
    minWidth: theme.spacing(s.minWidth),
    padding: `${theme.spacing(s.paddingScale[0])} ${theme.spacing(s.paddingScale[1])}`,
    fontSize: `${s.fontSizeRem}rem`,
    fontWeight: 600,
    borderRadius: radius,
    border: 'none',
    cursor: $loading ? 'default' : 'pointer',
    transition: theme.transitions.create(['transform', 'background', 'box-shadow'], {
      duration: theme.transitions.duration.shortest,
    }),
    outline: 'none',
    '&:disabled': {
      cursor: 'not-allowed',
    },
  };

  if ($variant === 'primary') {
    // botón lleno
    Object.assign<CSSObject, CSSObject>(base, {
      backgroundImage: gradient,
      color: theme.palette.common.white,
      boxShadow: '0 16px 40px rgba(179, 61, 235, 0.25)',
      '&:hover': $loading
        ? {}
        : {
            backgroundImage: gradientHover,
            transform: 'translateY(-1px)',
          },
      '&:disabled': {
        backgroundImage: gradient,
        opacity: 0.35,
        boxShadow: 'none',
        color: 'rgba(255,255,255,0.4)',
      },
    });
  } else {
    // outline
    const bg = theme.palette.background?.default ?? '#ffffff';

    Object.assign<CSSObject, CSSObject>(base, {
      backgroundImage: `linear-gradient(${bg}, ${bg}), ${gradient}`,
      backgroundOrigin: 'border-box',
      backgroundClip: 'padding-box, border-box',
      border: '2px solid transparent',
      color: 'transparent',

      '& .btn-label': {
        backgroundImage: gradient,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },

      '&:hover': $loading
        ? {}
        : {
            backgroundImage: `linear-gradient(${bg}, ${bg}), ${gradientHover}`,
            transform: 'translateY(-1px)',
            '& .btn-label': {
              backgroundImage: gradientHover,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            },
          },

      '&:disabled': {
        opacity: 0.35,
        '& .btn-label': {
          backgroundImage: gradient,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          opacity: 0.5,
        },
      },
    });
  }

  return base;
});

export const LoadingSpinner = styled('span')(({ theme }) => ({
  position: 'absolute',
  insetInlineEnd: theme.spacing(1.5),
  width: theme.spacing(2),
  height: theme.spacing(2),
  borderRadius: '50%',
  border: `${theme.spacing(0.25)} solid rgba(255,255,255,0.7)`,
  borderTopColor: 'transparent',
  animation: 'spin 750ms linear infinite',
  '@keyframes spin': { to: { transform: 'rotate(360deg)' } },
}));
