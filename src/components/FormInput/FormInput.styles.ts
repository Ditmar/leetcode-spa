import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

import { SIZE_CONFIGS } from './FormInput.constants';

import type { StyledFormInputProps } from './FormInput.types';

export const StyledFormInput = styled(TextField, {
  shouldForwardProp: (prop) => (typeof prop === 'string' ? !prop.startsWith('$') : true),
})<StyledFormInputProps>(({ theme, $variant, $size, $error }) => {
  const sizeConfig = $size ? SIZE_CONFIGS[$size] : SIZE_CONFIGS['medium'];

  return {
    width: '100%',
    '& .MuiInputBase-root': {
      height: theme.spacing(Number(sizeConfig.height.replace('rem', '')) * 2),
      padding: theme.spacing(0),
      '& .MuiInputBase-input': {
        padding: theme.spacing(
          Number(sizeConfig.padding.split(' ')[0].replace('rem', '')) * 2,
          Number(sizeConfig.padding.split(' ')[1].replace('rem', '')) * 2
        ),
        fontSize: sizeConfig.fontSize,
        '&::placeholder': {
          color: $error ? theme.palette.error.main : theme.palette.divider,
          opacity: 1,
        },
      },
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: $error ? theme.palette.error.main : theme.palette.divider,
        borderRadius: theme.shape.borderRadius,
        borderWidth: '1px',
      },
      '&:hover fieldset': {
        borderColor: $error ? theme.palette.error.main : theme.palette.custom?.focus,
        borderWidth: '1px',
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.custom?.focus,
        borderWidth: '1px',
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
    },
    '& .Mui-disabled': {
      backgroundColor: theme.palette.action.disabledBackground,
      '& fieldset': {
        borderColor: theme.palette.action.disabled,
      },
      '& .MuiInputBase-input': {
        backgroundColor: theme.palette.action.disabledBackground,
        '-webkit-text-fill-color': theme.palette.text.disabled,
      },
      '&:hover fieldset': {
        borderColor: theme.palette.action.disabled,
      },
      pointerEvents: 'none',
    },
  };
});
