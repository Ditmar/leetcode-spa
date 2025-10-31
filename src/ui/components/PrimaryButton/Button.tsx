import { forwardRef } from 'react';

import { StyledButton, LoadingSpinner } from './Button.styles';

import type { PrimaryButtonProps } from './Button.types';

export const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  (
    {
      children,
      loading = false,
      disabled,
      variant = 'primary',
      size = 'medium',
      shape = 'pill',
      ...rest
    },
    ref
  ) => (
    <StyledButton
      ref={ref}
      $variant={variant}
      $size={size}
      $shape={shape}
      $loading={loading}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...rest}
    >
      <span className="btn-label">{children}</span>
      {loading && <LoadingSpinner aria-hidden="true" />}
    </StyledButton>
  )
);

PrimaryButton.displayName = 'PrimaryButton';
