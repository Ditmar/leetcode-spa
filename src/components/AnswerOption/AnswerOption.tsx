import { useTheme, useMediaQuery, Skeleton } from '@mui/material';
import React, { useId } from 'react';

import { DEFAULT_VARIANT, DEFAULT_SIZE, ICON_SIZES } from './AnswerOption.constants';
import { Container, VisuallyHiddenInput, LabelText, IconWrapper } from './AnswerOption.styles';
import { CircleIcon } from './assets/icons/CircleIcon';

import type { AnswerOptionProps } from './types/AnswerOption.types';

export const AnswerOption: React.FC<AnswerOptionProps> = ({
  label,
  value,
  selected,
  onChange,
  disabled = false,
  variant: variantProp = DEFAULT_VARIANT,
  size = DEFAULT_SIZE,
  isLoading = false,
  className,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const uniqueId = useId();
  const inputId = `answer-input-${uniqueId}`;

  const variant = isMobile ? 'vertical' : variantProp;

  const iconSizeRem = ICON_SIZES[size];
  const iconSizePx = parseFloat(iconSizeRem) * 16;

  if (isLoading) {
    // [C7] CORRECCIÓN: Se añade selected={false} para corregir el error de tipado en el estado isLoading
    return (
      <Container as="div" variant={variant} disabled={true} selected={false} size={size}>
        <Skeleton variant="circular" width={iconSizeRem} height={iconSizeRem} />
        <Skeleton variant="text" width="60%" height={32} />
      </Container>
    );
  }

  return (
    <Container
      selected={selected}
      disabled={disabled}
      variant={variant}
      size={size}
      className={className}
      htmlFor={inputId}
      data-testid={`answer-option-container-${value}`}
    >
      <VisuallyHiddenInput
        id={inputId}
        type="radio"
        name="answer-option-group"
        value={value}
        checked={selected}
        disabled={disabled}
        onChange={() => !disabled && onChange(value)}
        aria-label={label}
        tabIndex={0}
      />

      <IconWrapper size={iconSizeRem}>
        <CircleIcon size={iconSizePx} id={uniqueId} selected={selected} />
      </IconWrapper>

      <LabelText selected={selected} disabled={disabled} size={size}>
        {label}
      </LabelText>
    </Container>
  );
};
