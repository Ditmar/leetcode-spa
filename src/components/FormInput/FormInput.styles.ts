import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

import { formInputTokens } from '../../style-library/theme/theme';

import { SIZE_CONFIGS } from './FormInput.constants';

import type { StyledFormInputProps } from './FormInput.types';

export const StyledFormInput = styled(TextField, {
  shouldForwardProp: (prop) => (typeof prop === 'string' ? !prop.startsWith('$') : true),
})<StyledFormInputProps>(({ theme, $variant, $error }) => {
  // Returns size-dependent styles (width, height, font, padding, border radius)
  // for a given size config. Used to avoid duplication across breakpoints.
  const getSizeStyles = (config: typeof SIZE_CONFIGS.small) => ({
    width: `${config.width}px`,
    '& .MuiInputBase-root': {
      height: `${config.height}px`,
      fontSize: `${config.fontSize}px`,
      '& .MuiInputBase-input': {
        padding: `${config.padding[0]}px ${config.padding[1]}px`,
      },
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: `${config.borderRadius}px`,
        borderWidth: 1,
      },
    },
    '& .MuiFilledInput-root': {
      borderRadius: `${config.borderRadius}px`,
      backgroundColor: theme.palette.action.selected,
      '&:before, &:after': {
        display: 'none',
      },
    },
  });

  // Function for eye icon sizes
  const getIconStyles = (size: 'small' | 'medium' | 'large') => ({
    '& .MuiIconButton-root': {
      width: `${formInputTokens.eye.size[size].width}px !important`,
      height: `${formInputTokens.eye.size[size].height}px !important`,
      padding: `${formInputTokens.eye.padding[size]}px !important`,
      '& .MuiSvgIcon-root': {
        width: `${formInputTokens.eye.size[size].width}px !important`,
        height: `${formInputTokens.eye.size[size].height}px !important`,
      },
    },
  });

  return {
    // Base style for input: medium
    ...getSizeStyles(SIZE_CONFIGS.medium),
    // Base styles for eye icon: medium
    ...getIconStyles('medium'),
    // For Mobile
    [theme.breakpoints.down('sm')]: {
      ...getSizeStyles(SIZE_CONFIGS.small),
      ...getIconStyles('small'),
    },
    // For tablet
    [theme.breakpoints.between('sm', 'md')]: {
      ...getSizeStyles(SIZE_CONFIGS.medium),
      ...getIconStyles('medium'),
    },
    // For desktop
    [theme.breakpoints.up('md')]: {
      ...getSizeStyles(SIZE_CONFIGS.large),
      ...getIconStyles('large'),
    },

    '& .MuiInputBase-root, & .MuiInputLabel-root, & .MuiInputBase-input, & .MuiFormHelperText-root':
      {
        fontFamily: formInputTokens.typography.fontFamily,
        fontWeight: formInputTokens.typography.fontWeight,
        lineHeight: formInputTokens.typography.lineHeight,
        letterSpacing: formInputTokens.typography.letterSpacing,
      },

    '& .MuiInputLabel-root': {
      position: 'absolute',
      top: '50%',
      left: `${SIZE_CONFIGS.medium.padding[1]}px`,
      transform: 'translateY(-50%)',
      color: $error ? theme.palette.error.main : formInputTokens.colors.label,
      [theme.breakpoints.down('sm')]: {
        left: `${SIZE_CONFIGS.small.padding[1]}px`,
        fontSize: `${SIZE_CONFIGS.small.fontSize}px`,
      },
      [theme.breakpoints.up('md')]: {
        left: `${SIZE_CONFIGS.large.padding[1]}px`,
        fontSize: `${SIZE_CONFIGS.large.fontSize}px`,
      },
      '&.Mui-focused, &.MuiFormLabel-filled': {
        opacity: 0,
        visibility: 'hidden',
      },
    },

    '& .MuiOutlinedInput-notchedOutline legend': {
      display: 'none !important',
      width: 0,
    },

    '& .MuiInputBase-input': {
      padding: `${SIZE_CONFIGS.medium.padding[0]}px ${SIZE_CONFIGS.medium.padding[1]}px !important`,
      position: 'relative',
      zIndex: 0,
    },

    '& .MuiInputBase-input::placeholder': {
      color: $error ? theme.palette.error.main : formInputTokens.colors.placeholder,
      opacity: 1,
    },

    '& .MuiInputBase-root': {
      padding: 0,
    },

    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: $error ? theme.palette.error.main : formInputTokens.colors.defaultBorder,
      },
      '&:hover fieldset': {
        borderColor: $error ? theme.palette.error.main : formInputTokens.colors.defaultBorder,
      },
      '&.Mui-focused fieldset': {
        borderColor: formInputTokens.colors.focusBorder,
        borderWidth: 2,
      },
      ...($variant === 'filled' && {
        '& fieldset': {
          border: 'none',
          backgroundColor: theme.palette.action.selected,
        },
      }),
    },

    '& .MuiFormHelperText-root': {
      color: $error ? theme.palette.error.main : theme.palette.text.secondary,
      marginLeft: 0,
    },

    '& .Mui-disabled': {
      backgroundColor: 'transparent',
      pointerEvents: 'none',
      '& .MuiInputBase-input': {
        WebkitTextFillColor: theme.palette.text.disabled,
      },
      '& fieldset': {
        borderColor: `${formInputTokens.colors.defaultBorder} !important`,
        tabIndex: -1,
      },
    },

    // Cofig for eye icon
    '& .MuiInputAdornment-root': {
      marginRight: theme.spacing(2),
    },

    '& .MuiIconButton-root': {
      backgroundColor: 'transparent',
      borderRadius: '50%',
      color: formInputTokens.colors.eye.icon,

      '&:hover': {
        backgroundColor: 'transparent',
        color: formInputTokens.colors.eye.hover,
      },

      '&.Mui-disabled': {
        backgroundColor: 'transparent',
        color: formInputTokens.colors.eye.disabled,
        opacity: 0.6,
      },
    },
  };
});
