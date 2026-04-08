import ClickAwayListener from '@mui/material/ClickAwayListener';
import Fade from '@mui/material/Fade';
import Popper from '@mui/material/Popper';
import { cloneElement, isValidElement, type FC } from 'react';

import {
  CARD_OFFSET,
  DEFAULT_PLACEMENT,
  TRANSITION_DURATION,
  VIEWPORT_PADDING,
} from './HoverCard.constants';
import { useHoverCard } from './HoverCard.hook';
import { HoverCardPaper, TriggerWrapper } from './HoverCard.styles';
import { buildPopperModifiers } from './HoverCard.utils';

import type { HoverCardProps } from './HoverCard.types';

/**
 
 * @example
 
 */
export const HoverCard: FC<HoverCardProps> = ({
  trigger,
  children,
  openDelay = 100,
  closeDelay = 100,
  PaperProps,
  maxWidth = 280,
  placement = DEFAULT_PLACEMENT,
  open: controlledOpen,
  onOpen,
  onClose,
  disabled = false,
  ...popperProps
}) => {
  const { isOpen, anchorRef, triggerProps, close } = useHoverCard({
    openDelay,
    closeDelay,
    controlledOpen,
    onOpen,
    onClose,
    disabled,
  });

  const modifiers = buildPopperModifiers(VIEWPORT_PADDING, [0, CARD_OFFSET]);

  const triggerElement = isValidElement(trigger) ? (
    cloneElement(trigger as React.ReactElement<Record<string, unknown>>, {
      ref: anchorRef,
      ...triggerProps,
    })
  ) : (
    <TriggerWrapper ref={anchorRef} {...triggerProps}>
      {trigger}
    </TriggerWrapper>
  );

  return (
    <>
      {triggerElement}

      <Popper
        open={isOpen}
        anchorEl={anchorRef.current}
        placement={placement}
        transition
        sx={{ zIndex: 1300 }}
        modifiers={modifiers}
        {...popperProps}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={TRANSITION_DURATION}>
            {}
            <div>
              <ClickAwayListener onClickAway={close}>
                <HoverCardPaper
                  elevation={4}
                  role='tooltip'
                  {...PaperProps}
                  sx={{
                    maxWidth,
                    ...(PaperProps?.sx ?? {}),
                  }}
                >
                  {children}
                </HoverCardPaper>
              </ClickAwayListener>
            </div>
          </Fade>
        )}
      </Popper>
    </>
  );
};

HoverCard.displayName = 'HoverCard';

export default HoverCard;
