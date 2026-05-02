import { useCallback, useEffect, useRef, useState } from 'react';

import { DEFAULT_POPOVER_PLACEMENT } from './Popover.constants';
import { getAutoFlippedPlacement } from './Popover.utils';

import type { PopoverPlacement } from './Popover.types';

interface UsePopoverParams {
  placement?: PopoverPlacement;
  onOpenChange?: (open: boolean) => void;
}

export function usePopover({
  placement = DEFAULT_POPOVER_PLACEMENT,
  onOpenChange,
}: UsePopoverParams) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [activePlacement, setActivePlacement] = useState<PopoverPlacement>(placement);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const open = Boolean(anchorEl);

  const handleOpen = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
      onOpenChange?.(true);
    },
    [onOpenChange]
  );

  const handleClose = useCallback(() => {
    setAnchorEl(null);
    onOpenChange?.(false);
  }, [onOpenChange]);

  useEffect(() => {
    setActivePlacement(placement);
  }, [placement]);

  useEffect(() => {
    if (!anchorEl || !open) return;

    const animationFrameId = window.requestAnimationFrame(() => {
      const anchorRect = anchorEl.getBoundingClientRect();
      const popoverRect = contentRef.current?.getBoundingClientRect();

      const nextPlacement = getAutoFlippedPlacement({
        placement,
        anchorRect,
        popoverWidth: popoverRect?.width ?? 0,
        popoverHeight: popoverRect?.height ?? 0,
        viewportWidth: window.innerWidth,
        viewportHeight: window.innerHeight,
      });

      setActivePlacement(nextPlacement);
    });

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [anchorEl, open, placement]);

  return {
    anchorEl,
    open,
    activePlacement,
    contentRef,
    handleOpen,
    handleClose,
  };
}
