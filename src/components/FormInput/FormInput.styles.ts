import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';
import type { StyledFormInputProps } from './FormInput.types';
import { SIZE_CONFIGS, COLOR_CONFIGS } from './FormInput.constants';

export const StyledFormInput = styled(TextField, {
  shouldForwardProp: (prop) => !prop.toString().startsWith('$'),
})<StyledFormInputProps>(({ theme, $variant, $size, $error }) => {
  const sizeConfig = $size ? SIZE_CONFIGS[$size] : SIZE_CONFIGS['small'];
  const colors = COLOR_CONFIGS;

  return {
    width: '287px',
    '& .MuiInputBase-root': {
      height: sizeConfig.height,
      padding: theme.spacing(0),
      '& .MuiInputBase-input': {
        padding: sizeConfig.padding,
        fontSize: sizeConfig.fontSize,
        '&::placeholder': {
          color: $error ? colors.borderError : colors.borderNormal,
          opacity: 1,
        },
      },
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: $error ? colors.borderError : colors.borderNormal,
        borderRadius: '9px',
        borderWidth: '1px',
      },
      '&:hover fieldset': {
        borderColor: $error ? colors.borderError : colors.borderFocus,
        borderWidth: '1px',
      },
      '&.Mui-focused fieldset': {
        borderColor: colors.borderFocus,
        borderWidth: '1px',
      },
      ...(($variant === 'filled') && {
        '& fieldset': {
          border: 'none',
          backgroundColor: colors.backgroundFilled,
        },
      }),
    },
    '& .MuiFormHelperText-root': {
      color: $error ? colors.borderError : theme.palette.text.secondary,
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
