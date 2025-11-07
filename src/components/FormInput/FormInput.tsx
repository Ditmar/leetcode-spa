import React from 'react';

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
  const isError = !!errorMessage;

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
      type={type}
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
      {...rest}
    />
  );
};
