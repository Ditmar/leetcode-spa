import React, { useId } from 'react';

import { Container, Label, GradientText, IconWrapper, HiddenInput } from './AnswerOption.styles';

import type { AnswerOptionProps } from './AnswerOption.types';

const GRADIENT_SELECTED = ['#B23DEB', '#DE8FFF'];
const BORDER_DISABLED = '#4F4F4F';
const BORDER_DEFAULT = '#B23DEB';

export function AnswerOption({
  label,
  value,
  selected,
  onChange,
  disabled = false,
  size = 'medium',
  className,
}: AnswerOptionProps) {
  const gradientId = useId();

  const renderCircle = () => {
    if (selected) {
      return (
        <svg width={64} height={64} viewBox="0 0 64 64" fill="none" aria-hidden>
          <defs>
            <linearGradient
              id={`paint0linear-${gradientId}`}
              x1="0"
              y1="0"
              x2="64"
              y2="64"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor={GRADIENT_SELECTED[0]} />
              <stop offset="100%" stopColor={GRADIENT_SELECTED[1]} />
            </linearGradient>
          </defs>
          <circle cx="32" cy="32" r="28" fill={`url(#paint0linear-${gradientId})`} />
          <path
            d="M22 34L30 42L42 26"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }
    if (disabled) {
      return (
        <svg width={64} height={64} viewBox="0 0 64 64" fill="none" aria-hidden>
          <circle cx="32" cy="32" r="28" fill="none" stroke={BORDER_DISABLED} strokeWidth="4" />
        </svg>
      );
    }
    return (
      <svg width={64} height={64} viewBox="0 0 64 64" fill="none" aria-hidden>
        <circle cx="32" cy="32" r="28" fill="none" stroke={BORDER_DEFAULT} strokeWidth="4" />
      </svg>
    );
  };

  return (
    <Container className={className}>
      <Label selected={selected} disabled={disabled} size={size}>
        <HiddenInput
          type="radio"
          checked={selected}
          onChange={() => {
            onChange(value);
          }}
          value={value}
          disabled={disabled}
          aria-label={label}
        />
        <IconWrapper>{renderCircle()}</IconWrapper>
        <GradientText selected={selected} disabled={disabled}>
          {label}
        </GradientText>
      </Label>
    </Container>
  );
}
