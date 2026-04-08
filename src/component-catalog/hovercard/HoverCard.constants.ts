/**
 * Default delay (ms) before the HoverCard opens after the trigger is
 * hovered or focused.
 */
export const DEFAULT_OPEN_DELAY = 200;

/**
 * Default delay (ms) before the HoverCard closes after the trigger loses
 * hover or focus.
 */
export const DEFAULT_CLOSE_DELAY = 300;

/**
 * Duration (ms) of the MUI Fade transition.
 */
export const TRANSITION_DURATION = 200;

/**
 * Default Poppers placement relative to the trigger element.
 * Matches the Figma design: card appears below-start of the trigger.
 */
export const DEFAULT_PLACEMENT = "bottom-start" as const;

/**
 * Minimum distance (px) the card keeps from the viewport edges via the
 * Popper preventOverflow modifier.
 */
export const VIEWPORT_PADDING = 8;

/**
 * Vertical offset (px) between the trigger bottom edge and the card top edge.
 */
export const CARD_OFFSET = 8;