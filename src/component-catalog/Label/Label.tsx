import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Tooltip from '@mui/material/Tooltip';
import React from 'react';

import { OPTIONAL_INDICATOR, TOOLTIP_ICON_ARIA_LABEL } from './Label.constants';
import { useLabelTooltip } from './Label.hook';
import {
  StyledInputLabel,
  RequiredIndicator,
  OptionalHint,
  TooltipIconWrapper,
  TooltipIconButton,
  TooltipInfoIcon,
} from './Label.styles';
import { resolveRequiredOptional } from './Label.utils';

import type { LabelComponentProps } from './Label.types';

const Label = React.forwardRef<HTMLLabelElement, LabelComponentProps>(
  ({ htmlFor, children, required, optional, error, disabled, tooltip, ...rest }, ref) => {
    const { showRequired, showOptional } = resolveRequiredOptional(required, optional);

    const { open, handleOpen, handleClose, handleToggle } = useLabelTooltip();

    const normalizedTooltip = typeof tooltip === 'string' ? tooltip.trim() : '';

    return (
      <StyledInputLabel
        ref={ref}
        htmlFor={htmlFor}
        error={error}
        disabled={disabled}
        aria-required={showRequired ? true : undefined}
        {...rest}
      >
        {children}

        {showRequired && <RequiredIndicator aria-hidden="true">*</RequiredIndicator>}

        {showOptional && (
          <OptionalHint component="span" variant="caption">
            &nbsp;
            {OPTIONAL_INDICATOR}
          </OptionalHint>
        )}

        {normalizedTooltip && (
          <TooltipIconWrapper>
            <Tooltip
              title={normalizedTooltip}
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              arrow
              enterTouchDelay={0}
              leaveTouchDelay={3000}
            >
              <TooltipIconButton
                size="small"
                aria-label={TOOLTIP_ICON_ARIA_LABEL}
                onClick={handleToggle}
                type="button"
                tabIndex={0}
                disabled={disabled}
              >
                <TooltipInfoIcon as={InfoOutlinedIcon} fontSize="inherit" />
              </TooltipIconButton>
            </Tooltip>
          </TooltipIconWrapper>
        )}
      </StyledInputLabel>
    );
  }
);

Label.displayName = 'Label';

export default Label;
