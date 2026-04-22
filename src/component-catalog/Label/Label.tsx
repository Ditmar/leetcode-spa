import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Tooltip, IconButton } from '@mui/material';
import React from 'react';

import { LABEL_SIZES } from './Label.constants';
import { useLabel } from './Label.hook';
import { StyledInputLabel, OptionalText, LabelWrapper } from './Label.styles';

import type { LabelProps } from './Label.types';

export function Label({
  children,
  required,
  optional,
  tooltip,
  error,
  disabled,
  htmlFor,
  ...props
}: LabelProps) {
  const { showOptional, accessibilityProps, labels } = useLabel({
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

        {showOptional && <OptionalText aria-hidden="true">{labels.optionalIndicator}</OptionalText>}

        {tooltip && (
          <Tooltip title={tooltip} arrow placement="top">
            <IconButton
              size="small"
              sx={{ ml: 0.5, p: 0.25 }}
              aria-label={labels.helpAction}
              disabled={disabled}
            >
              <HelpOutlineIcon sx={{ fontSize: LABEL_SIZES.TOOLTIP_ICON_FONT_SIZE }} />
            </IconButton>
          </Tooltip>
        )}
      </LabelWrapper>
    </StyledInputLabel>
  );
}
