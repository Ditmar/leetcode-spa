import ClickAwayListener from "@mui/material/ClickAwayListener";
import Fade from "@mui/material/Fade";
import Popper from "@mui/material/Popper";
import { cloneElement, isValidElement, type FC } from "react";

import {
  CARD_OFFSET,
  DEFAULT_CLOSE_DELAY,
  DEFAULT_OPEN_DELAY,
  DEFAULT_PLACEMENT,
  TRANSITION_DURATION,
  VIEWPORT_PADDING,
} from "./HoverCard.constants";
import { useHoverCard } from "./HoverCard.hook";
import { HoverCardPaper, TriggerWrapper } from "./HoverCard.styles";
import type { HoverCardProps } from "./HoverCard.types";
import { buildPopperModifiers } from "./HoverCard.utils";

/**
 * HoverCard
 *
 * Displays a rich floating preview card anchored to a trigger element.
 * Matches the Figma "Tooltips & Hover Cards" design spec.
 *
 * Desktop / mouse  → opens on mouseenter / focus; closes on mouseleave / blur
 * Touch / mobile   → opens on tap (click); closes on second tap or tap outside
 *
 * @example
 * ```tsx
 * <HoverCard trigger={<Button variant="outlined">Hover for Card</Button>}>
 *   <Typography variant="subtitle2">Jane Doe</Typography>
 *   <Typography variant="body2" color="text.secondary">
 *     Senior Product Designer
 *   </Typography>
 * </HoverCard>
 * ```
 */
export const HoverCard: FC<HoverCardProps> = ({
  trigger,
  children,
  openDelay = DEFAULT_OPEN_DELAY,
  closeDelay = DEFAULT_CLOSE_DELAY,
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

  // Prefer cloneElement to keep the trigger's original DOM node and ref.
  // Fall back to a span wrapper for plain strings / numbers / fragments.
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
            {/*
             * Wrapping div is required: Fade needs a single child that
             * accepts a ref. ClickAwayListener must be inside so that a
             * trigger click does not immediately fire a click-away event.
             */}
            <div>
              <ClickAwayListener onClickAway={close}>
                <HoverCardPaper
                  elevation={4}
                  role="tooltip"
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

HoverCard.displayName = "HoverCard";

export default HoverCard;