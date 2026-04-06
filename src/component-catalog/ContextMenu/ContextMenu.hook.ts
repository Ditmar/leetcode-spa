import { useState, useRef, useCallback } from 'react';

import { LONG_PRESS_DURATION_MS } from './ContextMenu.constants';
import { clampToViewport } from './ContextMenu.utils';

import type { MenuPosition } from './ContextMenu.types';

export function useContextMenu() {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<MenuPosition>({ x: 0, y: 0 });
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openAt = useCallback((rawX: number, rawY: number) => {
    setPosition(clampToViewport(rawX, rawY));
    setOpen(true);
  }, []);

  const handleContextMenu = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      openAt(event.clientX, event.clientY);
    },
    [openAt]
  );

  const handlePointerDown = useCallback(
    (event: React.PointerEvent) => {
      if (event.pointerType === 'mouse') return;
      const { clientX, clientY } = event;
      longPressTimer.current = setTimeout(() => {
        openAt(clientX, clientY);
      }, LONG_PRESS_DURATION_MS);
    },
    [openAt]
  );

  const handlePointerUp = useCallback(() => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
  }, []);

  const handleClose = useCallback(() => setOpen(false), []);

  return {
    open,
    position,
    handleContextMenu,
    handlePointerDown,
    handlePointerUp,
    handleClose,
  };
}
