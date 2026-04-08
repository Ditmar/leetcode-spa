import { useCallback, useEffect, useRef, useState } from "react";

import { DEFAULT_CLOSE_DELAY, DEFAULT_OPEN_DELAY } from "./HoverCard.constants";
import type { TriggerEventHandlers, UseHoverCardReturn } from "./HoverCard.types";

// ---------------------------------------------------------------------------
// Touch detection
// ---------------------------------------------------------------------------

/**
 * Returns true when the primary input device is a touch screen.
 * Uses ontouchstart and navigator.maxTouchPoints as specified in the task.
 * Falls back to false in SSR environments.
 */
function detectTouchDevice(): boolean {
  if (typeof window === "undefined") return false;
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

// ---------------------------------------------------------------------------
// Hook options
// ---------------------------------------------------------------------------

export interface UseHoverCardOptions {
  openDelay?: number;
  closeDelay?: number;
  /** Pass the open prop value here when using the component in controlled mode. */
  controlledOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  disabled?: boolean;
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

/**
 * Manages open/close state for the HoverCard with configurable enter/leave
 * delays.
 *
 * Desktop (non-touch): opens on mouseenter/focus, closes on mouseleave/blur.
 * Touch devices: opens on click (tap), ClickAwayListener handles outside tap.
 *
 * Supports both uncontrolled and controlled modes.
 */
export const useHoverCard = ({
  openDelay = DEFAULT_OPEN_DELAY,
  closeDelay = DEFAULT_CLOSE_DELAY,
  controlledOpen,
  onOpen,
  onClose,
  disabled = false,
}: UseHoverCardOptions = {}): UseHoverCardReturn => {
  const isControlled = controlledOpen !== undefined;

  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = isControlled ? (controlledOpen as boolean) : internalOpen;

  const anchorRef = useRef<HTMLElement | null>(null);
  const openTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isTouchRef = useRef(detectTouchDevice());

  // -------------------------------------------------------------------------
  // Timer helpers
  // -------------------------------------------------------------------------

  const clearTimers = useCallback(() => {
    if (openTimerRef.current !== null) {
      clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }
    if (closeTimerRef.current !== null) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const openCard = useCallback(() => {
    if (disabled) return;
    clearTimers();
    if (!isControlled) setInternalOpen(true);
    onOpen?.();
  }, [clearTimers, disabled, isControlled, onOpen]);

  const closeCard = useCallback(() => {
    clearTimers();
    if (!isControlled) setInternalOpen(false);
    onClose?.();
  }, [clearTimers, isControlled, onClose]);

  const scheduleOpen = useCallback(() => {
    if (disabled) return;
    clearTimers();
    openTimerRef.current = setTimeout(openCard, openDelay);
  }, [clearTimers, disabled, openCard, openDelay]);

  const scheduleClose = useCallback(() => {
    clearTimers();
    closeTimerRef.current = setTimeout(closeCard, closeDelay);
  }, [clearTimers, closeCard, closeDelay]);

  useEffect(() => () => clearTimers(), [clearTimers]);

  // -------------------------------------------------------------------------
  // Event handlers
  // -------------------------------------------------------------------------

  const triggerProps: TriggerEventHandlers = {
    onMouseEnter: () => {
      if (!isTouchRef.current) scheduleOpen();
    },
    onMouseLeave: () => {
      if (!isTouchRef.current) scheduleClose();
    },
    onFocus: () => {
      if (!isTouchRef.current) scheduleOpen();
    },
    onBlur: () => {
      if (!isTouchRef.current) scheduleClose();
    },
    onClick: () => {
      if (isTouchRef.current) {
        if (isOpen) {
          closeCard();
        } else {
          openCard();
        }
      }
    },
  };

  return {
    isOpen,
    anchorRef,
    triggerProps,
    open: openCard,
    close: closeCard,
  };
};