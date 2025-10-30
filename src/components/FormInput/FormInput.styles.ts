import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

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
  });

  return {
    // Base style: medium
    ...getSizeStyles(SIZE_CONFIGS.medium),
    // For Mobile
    [theme.breakpoints.down('sm')]: {
      ...getSizeStyles(SIZE_CONFIGS.small),
    },
    // For tablet
    [theme.breakpoints.between('sm', 'md')]: {
      ...getSizeStyles(SIZE_CONFIGS.medium),
    },
    // For desktop
    [theme.breakpoints.up('md')]: {
      ...getSizeStyles(SIZE_CONFIGS.large),
    },

    '& .MuiInputBase-root, & .MuiInputLabel-root, & .MuiInputBase-input, & .MuiFormHelperText-root':
      {
        fontFamily: theme.typography.option.fontFamily,
        fontWeight: theme.typography.option.fontWeight,
      },

    '& .MuiInputLabel-root': {
      position: 'absolute',
      top: '50%',
      left: `${SIZE_CONFIGS.medium.padding[1]}px`,
      transform: 'translateY(-50%)',
      color: theme.palette.divider,
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
      color: $error ? theme.palette.error.main : theme.palette.divider,
      opacity: 1,
    },

    '& .MuiInputBase-root': {
      padding: 0,
    },

    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: $error ? theme.palette.error.main : theme.palette.text.disabled,
      },
      '&:hover fieldset': {
        borderColor: $error ? theme.palette.error.main : theme.palette.primary.main,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primary.main,
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
        borderColor: theme.palette.text.disabled,
        tabIndex: -1,
      },
    },
  };
});
