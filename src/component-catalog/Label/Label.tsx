import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Tooltip, IconButton } from '@mui/material';
import React from 'react';

import { LABEL_TEXT } from './Label.constants';
import { useLabel } from './Label.hook';
import { StyledInputLabel, OptionalText, LabelWrapper } from './Label.styles';

import type { LabelProps } from './Label.types';

export function Label({
  children,
  required,
  optional,
  htmlFor,
  tooltip,
  error,
  disabled,
  ...props
}: LabelProps) {
  const { showOptional, accessibilityProps, i18n } = useLabel({
    required,
    optional,
    htmlFor,
    tooltip,
    error,
    disabled,
  });

  return (
    <StyledInputLabel
      {...props}
      {...accessibilityProps}
      htmlFor={htmlFor}
      required={required}
      error={error}
      disabled={disabled}
      shrink={false}
    >
      <LabelWrapper>
        {children}

        {showOptional && <OptionalText>{i18n.optionalLabel}</OptionalText>}

        {tooltip && (
          <Tooltip title={tooltip} arrow placement="top">
            <IconButton
              size="small"
              sx={{ ml: 0.5, p: 0.25 }}
              aria-label={i18n.tooltipActionLabel}
              disabled={disabled}
            >
              <HelpOutlineIcon sx={{ fontSize: LABEL_TEXT.TOOLTIP_ICON_FONT_SIZE }} />
            </IconButton>
          </Tooltip>
        )}
        </LabelWrapper>
      </StyledInputLabel>
    );
  }