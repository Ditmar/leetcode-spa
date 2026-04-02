import { useId, useState, type ChangeEvent } from 'react';
import {
  Box,
  IconButton,
  InputAdornment,
  Typography,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { inputModeByType } from './Input.constants';
import { usePasswordToggle } from './Input.hook';
import { StyledInput } from './Input.styles';
import type { InputProps } from './Input.types';
import { getCharacterCount } from './Input.utils';

export function Input(props: InputProps) {
  const {
    type = 'text',
    variant = 'outlined',
    startAdornment,
    endAdornment,
    maxLength,
    showCharacterCount = false,
    helperText,
    value,
    defaultValue,
    onChange,
    inputProps,
    InputProps,
    readOnly,
    id,
    ...rest
  } = props;

  const generatedId = useId();
  const inputId = id ?? `input-${generatedId}`;
  const helperTextId = `${inputId}-helper-text`;

  const { showPassword, togglePassword } = usePasswordToggle();

  const [count, setCount] = useState(
    getCharacterCount((value ?? defaultValue) as string),
  );

  const resolvedType =
    type === 'password' ? (showPassword ? 'text' : 'password') : type;

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setCount(event.target.value.length);
    onChange?.(event);
  };

  const hasHelper = Boolean(helperText || showCharacterCount || maxLength);

  const helper = hasHelper ? (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <Typography variant="caption">{helperText}</Typography>

      {(showCharacterCount || maxLength) && (
        <Typography variant="caption">
          {maxLength ? `${count}/${maxLength}` : count}
        </Typography>
      )}
    </Box>
  ) : null;

  return (
    <StyledInput
      {...rest}
      id={inputId}
      type={resolvedType}
      variant={variant}
      onChange={handleChange}
      value={value}
      defaultValue={defaultValue}
      helperText={helper}
      FormHelperTextProps={{
        id: helperTextId,
      }}
      InputProps={{
        ...InputProps,
        readOnly,
        startAdornment: startAdornment ? (
          <InputAdornment position="start">{startAdornment}</InputAdornment>
        ) : undefined,
        endAdornment:
          endAdornment || type === 'password' ? (
            <InputAdornment position="end">
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {endAdornment}
                {type === 'password' && (
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={togglePassword}
                    onMouseDown={(event) => event.preventDefault()}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                )}
              </Box>
            </InputAdornment>
          ) : undefined,
      }}
      slotProps={{
        htmlInput: {
          ...inputProps,
          maxLength,
          inputMode: inputModeByType[type],
          'aria-invalid': rest.error || undefined,
          'aria-describedby': hasHelper ? helperTextId : undefined,
        },
      }}
    />
  );
}