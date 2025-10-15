import React from 'react';

import { DEFAULT_PROPS } from './Button.constants';
import { StyledButton, LoadingSpinner, ButtonContent } from './Button.styles';

import type { ButtonProps } from './Button.types';

/** Button con variantes, tamaños y formas (MUI base + estilos custom) */
export const Button: React.FC<ButtonProps> = ({
  variant = DEFAULT_PROPS.variant,
  size = DEFAULT_PROPS.size,
  shape = DEFAULT_PROPS.shape,
  loading = DEFAULT_PROPS.loading,
  fullWidth = DEFAULT_PROPS.fullWidth,
  disabled = DEFAULT_PROPS.disabled,
  startIcon,
  endIcon,
  children,
  onClick,
  type = 'button',
  'data-testid': dataTestId,
  ...rest
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (loading || disabled) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };

  return (
    <StyledButton
      {...rest}
      variant="contained"
      type={type}
      disabled={disabled || loading}
      onClick={handleClick}
      data-testid={dataTestId}
      $variant={variant}
      $size={size}
      $shape={shape}
      $loading={loading}
      $fullWidth={fullWidth}
    >
      {loading && <LoadingSpinner size={size === 'small' ? 16 : size === 'large' ? 24 : 20} />}
      <ButtonContent $loading={loading}>
        {startIcon && <span>{startIcon}</span>}
        {children}
        {endIcon && <span>{endIcon}</span>}
      </ButtonContent>
    </StyledButton>
  );
};

export default Button;
