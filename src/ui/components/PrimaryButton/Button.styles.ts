import { styled, type CSSObject } from '@mui/material/styles';

import type { ButtonShape, ButtonSize, ButtonVariant } from './Button.types';

type ButtonGradients = {
  primary?: string;
  primaryHover?: string;
};

const getGradients = (theme: unknown): ButtonGradients => {
  if (typeof theme === 'object' && theme !== null && 'gradients' in theme) {
    const maybe = (theme as { gradients?: ButtonGradients }).gradients;
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
  const gradient = gradients.primary ?? 'linear-gradient(60deg, #B23DEB 13.4%, #DE8FFF 86.6%)';
  const gradientHover = gradients.primaryHover ?? gradient;

  // Base styles
  const base: CSSObject = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(1.25),
    height: 36,
    width: 289,
    padding: '20px 40px',
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

    '& .btn-label': {
      display: 'inline-block',
      width: 209,
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },

    '&:disabled': {
      cursor: 'not-allowed',
    },

    '&:focus-visible': {
      outline: `2px solid ${theme.palette.primary.light}`,
      outlineOffset: 3,
      boxShadow: '0 0 0 2px rgba(255,255,255,0.3)',
    },

    // tablet
    [theme.breakpoints.down('md')]: {
      height: 64,
      width: 'auto',
      padding: '16px 32px',
      fontSize: 24,
    },

    // mobile
    [theme.breakpoints.down('sm')]: {
      width: 173.07,
      height: 56,
      padding: '12px 24px',
      fontSize: 16,
      borderRadius: 30,
      gap: theme.spacing(1),
    },
  };

  // Size overrides
  const sizeStyles: Partial<Record<ButtonSize, CSSObject>> = {
    small: {
      height: 48,
      width: 'auto',
      padding: '12px 24px',
      fontSize: 18,
    },
    medium: {
      height: 60,
      width: 'auto',
      padding: '16px 32px',
      fontSize: 22,
    },
    large: {
      height: 76,
      width: 289,
      padding: '20px 40px',
      fontSize: 30,
    },
  };

  Object.assign(base, sizeStyles[$size]);

  // Shape styles
  if ($shape === 'rounded') {
    base.borderRadius = 16;
  } else if ($shape === 'pill') {
    base.borderRadius = 50;
  }

  // Variant styles for primary button
  if ($variant === 'primary') {
    Object.assign(base, {
      backgroundImage: gradient,
      color: theme.palette.common.white,

      '&:hover': $loading
        ? {}
        : {
            backgroundImage: gradientHover,
            transform: 'translateY(-1px)',
          },

      '&:active': $loading
        ? {}
        : {
            transform: 'translateY(0)',
            boxShadow: '0 8px 24px rgba(179, 61, 235, 0.35)',
          },

      '&:disabled': {
        backgroundImage: gradient,
        opacity: 0.2,
        boxShadow: 'none',
        color: 'rgba(255,255,255,0.4)',
      },
    });
  } else {
    Object.assign<CSSObject, CSSObject>(base, {
      backgroundColor: 'transparent',
      backgroundOrigin: 'border-box',
      backgroundClip: 'padding-box, border-box',
      border: '1.5px solid  #B23DEB',
      borderImageSlice: 1,
      width: 'auto',

      '& .btn-label': {
        backgroundImage: gradient,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        width: 209,
      },

      '&:hover': $loading
        ? {}
        : {
            backgroundImage: `linear-gradient(${gradientHover})`,
            boxShadow: `0 0 0 2px ${gradientHover}`,
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
        opacity: 0.2,
        '& .btn-label': {
          backgroundImage: gradient,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          opacity: 0.2,
        },
      },
    });
  }

  return base;
});

// Loading spinner style
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
