import React from 'react';

import { DEFAULT_PROPS, SIZE_CONFIGS } from './Button.constants';
import { StyledButton, ButtonContent, LoadingSpinner } from './Button.styles';

import type { ButtonProps } from './Button.types';

export const PrimaryButton: React.FC<ButtonProps> = ({
  variant = DEFAULT_PROPS.variant, // variant tiene tipo ButtonVariant
  size = DEFAULT_PROPS.size,
  shape = DEFAULT_PROPS.shape,
  loading = DEFAULT_PROPS.loading,
  fullWidth = DEFAULT_PROPS.fullWidth,
  disabled = DEFAULT_PROPS.disabled,
  children,
  onClick = () => {},
  type = 'button',
  'data-testid': dataTestId,
  ...rest
}) => {
  // Asegúrate de que size sea un valor válido de 'small', 'medium', 'large'
  const getSpinnerSize = () => {
    switch (size) {
      case 'small':
        return 16; // Tamaño para 'small'
      case 'large':
        return 24; // Tamaño para 'large'
      case 'medium':
      default:
        return SIZE_CONFIGS[size].fontSizeRem * 16; // Usar fontSizeRem para 'medium'
    }
  };

  return (
    <StyledButton
      {...rest}
      variant={variant} // variant es pasado correctamente aquí
      size={size}
      shape={shape}
      loading={loading}
      fullWidth={fullWidth}
      disabled={disabled}
      onClick={onClick}
      type={type}
      data-testid={dataTestId}
    >
      {loading && <LoadingSpinner size={getSpinnerSize()} />}
      <ButtonContent $loading={loading}>{children}</ButtonContent>
    </StyledButton>
  );
};
