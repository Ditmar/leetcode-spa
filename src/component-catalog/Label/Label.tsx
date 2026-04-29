import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import React from 'react';

import { OPTIONAL_INDICATOR, TOOLTIP_ICON_ARIA_LABEL } from './Label.constants';
import { useLabelTooltip } from './Label.hook';
import {
  StyledInputLabel,
  RequiredIndicator,
  OptionalHint,
  TooltipIconWrapper,
} from './Label.styles';
import { resolveRequiredOptional } from './Label.utils';

import type { LabelProps } from './Label.types';

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ htmlFor, children, required, optional, error, disabled, tooltip, ...rest }, ref) => {
    const { showRequired, showOptional } = resolveRequiredOptional(required, optional);
    const { open, handleOpen, handleClose, handleToggle } = useLabelTooltip();

    return (
      <StyledInputLabel
        ref={ref}
        htmlFor={htmlFor}
        error={error}
        disabled={disabled}
        aria-required={showRequired ? true : undefined}
        required={false}
        {...rest}
      >
        {children}

        {showRequired && <RequiredIndicator aria-hidden="true"> *</RequiredIndicator>}

        {showOptional && (
          <OptionalHint component="span" variant="caption">
            &nbsp;{OPTIONAL_INDICATOR}
          </OptionalHint>
        )}

        {tooltip && (
          <TooltipIconWrapper>
            <Tooltip
              title={tooltip}
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              arrow
              enterTouchDelay={0}
              leaveTouchDelay={3000}
            >
              <IconButton
                size="small"
                aria-label={TOOLTIP_ICON_ARIA_LABEL}
                onClick={handleToggle}
                type="button"
                tabIndex={0}
                sx={{ p: 0.25 }}
                disabled={false}
              >
                <InfoOutlinedIcon fontSize="inherit" sx={{ fontSize: '1rem' }} />
              </IconButton>
            </Tooltip>
          </TooltipIconWrapper>
        )}
      </StyledInputLabel>
    );
  }
);

Label.displayName = 'Label';

export default Label;
