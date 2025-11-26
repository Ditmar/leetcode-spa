import { styled, type CSSObject } from '@mui/material/styles';

import type { ButtonShape, ButtonSize, ButtonVariant } from './Button.types';

type ButtonGradients = {
  primary?: string;
  primaryHover?: string;
};

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
  const gradients = getGradients(theme);
  const gradient = gradients.primary ?? 'linear-gradient(60deg, #B33DEB 13.4%, #DE8FFF 86.6%)';
  const gradientHover = gradients.primaryHover ?? gradient;

  const base: CSSObject = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(1.25),

    // default desktop size
    height: 76,
    minWidth: 289,
    padding: '20px 40px',

    // default shape
    borderRadius: 50,

    fontFamily: "'Syne', sans-serif",
    fontWeight: 400,
    fontSize: 30,
    lineHeight: '36px',
    textTransform: 'capitalize',

    border: 'none',
    cursor: $loading ? 'default' : 'pointer',
    transition: theme.transitions.create(['transform', 'background', 'box-shadow'], {
      duration: theme.transitions.duration.shortest,
    }),
    outline: 'none',

    '&:disabled': {
      cursor: 'not-allowed',
    },

    // visible focus for accessibility
    '&:focus-visible': {
      outline: `2px solid ${theme.palette.primary.light}`,
      outlineOffset: 3,
      boxShadow: '0 0 0 2px rgba(255,255,255,0.3)',
    },

    // tablet
    [theme.breakpoints.down('md')]: {
      height: 64,
      minWidth: 240,
      padding: '16px 32px',
      fontSize: 24,
    },

    // mobile
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      maxWidth: 320,
      minWidth: 'auto',
      height: 56,
      padding: '12px 24px',
      fontSize: 18,
    },
  };

  // size overrides
  const sizeStyles: Partial<Record<ButtonSize, CSSObject>> = {
    small: {
      height: 48,
      minWidth: 160,
      padding: '12px 24px',
      fontSize: 18,
    },
    medium: {
      height: 60,
      minWidth: 220,
      padding: '16px 32px',
      fontSize: 22,
    },
    large: {
      height: 76,
      minWidth: 289,
      padding: '20px 40px',
      fontSize: 30,
    },
  };

  Object.assign(base, sizeStyles[$size]);

  // shape
  if ($shape === 'rounded') {
    base.borderRadius = 16;
  } else if ($shape === 'pill') {
    base.borderRadius = 50;
  }

  // variants
  if ($variant === 'primary') {
    Object.assign<CSSObject, CSSObject>(base, {
      backgroundImage: gradient,
      color: theme.palette.common.white,
      boxShadow: '0 16px 40px rgba(179, 61, 235, 0.25)',

      // hover = lighter + lift
      '&:hover': $loading
        ? {}
        : {
            backgroundImage: gradientHover,
            transform: 'translateY(-1px)',
          },

      // active = slightly darker / less lift
      '&:active': $loading
        ? {}
        : {
            transform: 'translateY(0)',
            boxShadow: '0 8px 24px rgba(179, 61, 235, 0.35)',
          },

      // disabled = dimmed
      '&:disabled': {
        backgroundImage: gradient,
        opacity: 0.35,
        boxShadow: 'none',
        color: 'rgba(255,255,255,0.4)',
      },
    });
  } else {
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

      '&:active': $loading
        ? {}
        : {
            transform: 'translateY(0)',
            opacity: 0.9,
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
  '@keyframes spin': {
    to: { transform: 'rotate(360deg)' },
  },
}));
