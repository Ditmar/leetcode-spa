import { Popover as MuiPopover } from '@mui/material';
import { useMemo } from 'react';

import { usePopover } from './Popover.hook';
import { PopoverArrow, PopoverContent, PopoverTriggerWrapper } from './Popover.styles';
import { getArrowSide, getPopoverOrigins } from './Popover.utils';

import type { CustomPopoverProps } from './Popover.types';

export function Popover({
  trigger,
  children,
  placement,
  showArrow = false,
  onOpenChange,
  ...muiProps
}: CustomPopoverProps) {
  const { anchorEl, open, activePlacement, contentRef, handleOpen, handleClose } = usePopover({
    placement,
    onOpenChange,
  });

  const { anchorOrigin, transformOrigin } = useMemo(
    () => getPopoverOrigins(activePlacement),
    [activePlacement]
  );

  const arrowSide = useMemo(() => getArrowSide(activePlacement), [activePlacement]);

  return (
    <>
      <PopoverTriggerWrapper
        onClick={handleOpen}
        aria-haspopup="dialog"
        aria-expanded={open}
        data-testid="popover-trigger"
      >
        {trigger}
      </PopoverTriggerWrapper>

      <MuiPopover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        slotProps={{
          paper: {
            sx: (theme) => ({
              [theme.breakpoints.down('sm')]: {
                width: `calc(100vw - ${theme.spacing(4)})`,
                maxWidth: `calc(100vw - ${theme.spacing(4)})`,
                top: '50% !important',
                left: '50% !important',
                transform: 'translate(-50%, -50%) !important',
              },
            }),
          },
        }}
        {...muiProps}
      >
        <PopoverContent
          ref={contentRef}
          role="dialog"
          data-testid="popover-content"
          data-placement={activePlacement}
        >
          {showArrow && <PopoverArrow arrowSide={arrowSide} data-testid="popover-arrow" />}
          {children}
        </PopoverContent>
      </MuiPopover>
    </>
  );
}
