import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { IconButton, InputAdornment } from '@mui/material';
import React, { useState } from 'react';

import { DEFAULT_PROPS } from './FormInput.constants';
import { StyledFormInput } from './FormInput.styles';

import type { FormInputProps } from './FormInput.types';

export const FormInput: React.FC<FormInputProps> = ({
  variant = DEFAULT_PROPS.variant,
  type = DEFAULT_PROPS.type,
  size = DEFAULT_PROPS.size,
  label,
  placeholder,
  value,
  onChange,
  errorMessage,
  disabled = DEFAULT_PROPS.disabled,
  onFocus,
  onBlur,
  'data-testid': dataTestId,
  inputProps: userInputProps,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isError = !!errorMessage;
  const isPassword = type === 'password';

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onFocus) onFocus(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) onBlur(event);
  };
  // Merge user inputProps with aria-label. Extracted directly to avoid
  // unused variables and improve readability (same as review's intent).
  const mergedInputProps = {
    ...(userInputProps || {}),
    'aria-label': placeholder || 'input',
  };

  return (
    <StyledFormInput
      variant={variant}
      size={size}
      type={inputType}
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      error={isError}
      helperText={isError ? errorMessage : undefined}
      disabled={disabled}
      onFocus={handleFocus}
      onBlur={handleBlur}
      data-testid={dataTestId}
      $variant={variant}
      $size={size}
      $error={isError}
      inputProps={mergedInputProps}
      InputProps={{
        endAdornment: isPassword ? (
          <InputAdornment position="end">
            <IconButton
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              onClick={handleTogglePassword}
              edge="end"
              disabled={disabled}
              size="small"
            >
              {showPassword ? (
                <VisibilityOffOutlinedIcon
                  sx={{
                    transform: 'rotateY(180deg)',
                  }}
                />
              ) : (
                <VisibilityOutlinedIcon />
              )}
            </IconButton>
          </InputAdornment>
        ) : null,
      }}
      {...rest}
    />
  );
};
