import { useCallback, useEffect, useRef, useState } from 'react';

//import { DEFAULT_CLOSE_DELAY, DEFAULT_OPEN_DELAY } from './HoverCard.constants';

import type { TriggerEventHandlers, UseHoverCardReturn } from './HoverCard.types';

function detectTouchDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

export interface UseHoverCardOptions {
  openDelay?: number;
  closeDelay?: number;
  controlledOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  disabled?: boolean;
}

export const useHoverCard = ({
  openDelay = 100,
  closeDelay = 100,
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
