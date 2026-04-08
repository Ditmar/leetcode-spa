import type { PopperProps } from "@mui/material/Popper";
import type { PaperProps } from "@mui/material/Paper";
import type { ReactNode, RefObject } from "react";

// ---------------------------------------------------------------------------
// Public component props
// ---------------------------------------------------------------------------

/**
 * Props for the HoverCard component.
 * Extends MUI PopperProps so all Popper configuration options are available.
 */
export interface HoverCardProps
  extends Omit<PopperProps, "open" | "anchorEl" | "children" | "ref"> {
  /**
   * The element that activates the card.
   * HoverCard clones it to attach event handlers and a ref.
   */
  trigger: ReactNode;

  /**
   * Content rendered inside the floating card.
   */
  children: ReactNode;

  /**
   * Delay (ms) before the card opens after the trigger receives hover/focus.
   * @default 200
   */
  openDelay?: number;

  /**
   * Delay (ms) before the card closes after the trigger loses hover/focus.
   * @default 300
   */
  closeDelay?: number;

  /**
   * Props forwarded to the inner MUI Paper element.
   */
  PaperProps?: PaperProps;

  /**
   * Maximum width of the card.
   * Accepts a theme spacing multiplier (number) or any CSS string.
   * @default 320
   */
  maxWidth?: number | string;

  /**
   * Controlled open state.
   * When provided, the component behaves as controlled.
   */
  open?: boolean;

  /**
   * Callback fired when the card requests to open.
   */
  onOpen?: () => void;

  /**
   * Callback fired when the card requests to close.
   */
  onClose?: () => void;

  /**
   * When true the card will never open.
   * @default false
   */
  disabled?: boolean;
}

// ---------------------------------------------------------------------------
// Hook types
// ---------------------------------------------------------------------------

export interface UseHoverCardReturn {
  isOpen: boolean;
  anchorRef: RefObject<HTMLElement | null>;
  triggerProps: TriggerEventHandlers;
  open: () => void;
  close: () => void;
}

export interface TriggerEventHandlers {
  onMouseEnter: React.MouseEventHandler;
  onMouseLeave: React.MouseEventHandler;
  onFocus: React.FocusEventHandler;
  onBlur: React.FocusEventHandler;
  onClick: React.MouseEventHandler;
}