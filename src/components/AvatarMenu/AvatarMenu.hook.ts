import {
  useState,
  useCallback,
  type MouseEvent,
  useId,
  type KeyboardEvent,
  useEffect,
  useRef,
} from 'react';

type AnchorEvent = MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>;

export const useAvatarMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const zoomLevelRef = useRef(1);
  const idBase = useId();
  const triggerId = `${idBase}-avatar-trigger`;
  const menuId = `${idBase}-avatar-menu`;

  const open = Boolean(anchorEl);
  const isOpen = open;

  const handleOpen = useCallback((event?: AnchorEvent) => {
    if (event?.currentTarget) {
      setAnchorEl(event.currentTarget);
      setFocusedIndex(0);
      if (typeof window !== 'undefined') {
        zoomLevelRef.current = window.outerWidth / window.innerWidth;
      }
    }
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
    setFocusedIndex(-1);
  }, []);

  const handleToggle = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (anchorEl) {
        handleClose();
      } else {
        handleOpen(event);
      }
    },
    [anchorEl, handleClose, handleOpen]
  );

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        const newZoom = window.outerWidth / window.innerWidth;
        if (Math.abs(newZoom - zoomLevelRef.current) > 0.01 && open) {
          zoomLevelRef.current = newZoom;
          handleClose();
        }
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [open, handleClose]);

  const handleMenuKeyDown = useCallback(
    (event: KeyboardEvent<HTMLUListElement>, menuItemsCount: number) => {
      const { key } = event;

      switch (key) {
        case 'Escape':
          event.preventDefault();
          handleClose();
          break;

        case 'ArrowDown':
          event.preventDefault();
          setFocusedIndex((prev) => (prev < menuItemsCount - 1 ? prev + 1 : 0));
          break;

        case 'ArrowUp':
          event.preventDefault();
          setFocusedIndex((prev) => (prev > 0 ? prev - 1 : menuItemsCount - 1));
          break;

        default:
          break;
      }
    },
    [handleClose]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLElement>) => {
      const { key } = event;

      if (key === 'Escape' && open) {
        handleClose();
        return;
      }

      if ((key === 'Enter' || key === ' ') && !open) {
        event.preventDefault();
        handleOpen(event);
      }
    },
    [open, handleClose, handleOpen]
  );

  const getTriggerProps = useCallback(
    (extraProps?: Record<string, unknown>) => ({
      id: triggerId,
      'aria-controls': open ? menuId : undefined,
      'aria-haspopup': 'menu',
      'aria-expanded': String(open) as 'true' | 'false',
      onClick: handleToggle,
      onKeyDown: handleKeyDown,
      ...extraProps,
    }),
    [triggerId, menuId, open, handleToggle, handleKeyDown]
  );

  const getMenuProps = useCallback(
    (extraProps?: Record<string, unknown>) => ({
      id: menuId,
      anchorEl,
      open,
      onClose: handleClose,
      'aria-labelledby': triggerId,
      ...extraProps,
    }),
    [menuId, anchorEl, open, handleClose, triggerId]
  );

  return {
    open,
    isOpen,
    anchorEl,
    triggerId,
    menuId,
    focusedIndex,
    handleOpen,
    handleClose,
    handleToggle,
    handleKeyDown,
    handleMenuKeyDown,
    setFocusedIndex,
    getTriggerProps,
    getMenuProps,
  } as const;
};

export type UseAvatarMenuReturn = ReturnType<typeof useAvatarMenu>;
