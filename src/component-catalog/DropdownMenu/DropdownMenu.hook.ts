import { useCallback, useEffect, useState } from 'react';

import { DROPDOWN_DEFAULTS } from './DropdownMenu.constants';

import type { DropdownItem } from './DropdownMenu.types';

type SubmenuDirection = 'right' | 'left';

interface UseDropdownMenuReturn {
  anchorEl: HTMLElement | null;
  submenuAnchorEl: HTMLElement | null;
  activeSubmenuItems: DropdownItem[];
  activeSubmenuParentId: string | null;
  submenuDirection: SubmenuDirection;
  open: boolean;
  submenuOpen: boolean;
  handleOpenMenu: (anchorElement: HTMLElement) => void;
  handleCloseMenu: () => void;
  handleOpenSubmenu: (anchorElement: HTMLElement, item: DropdownItem) => void;
  handleCloseSubmenu: () => void;
}

export const useDropdownMenu = (disabled = false): UseDropdownMenuReturn => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [submenuAnchorEl, setSubmenuAnchorEl] = useState<HTMLElement | null>(null);
  const [activeSubmenuItems, setActiveSubmenuItems] = useState<DropdownItem[]>([]);
  const [activeSubmenuParentId, setActiveSubmenuParentId] = useState<string | null>(null);
  const [submenuDirection, setSubmenuDirection] = useState<SubmenuDirection>('right');

  const open = Boolean(anchorEl);
  const submenuOpen = Boolean(submenuAnchorEl) && activeSubmenuItems.length > 0;

  const handleCloseMenu = useCallback(() => {
    setAnchorEl(null);
    setSubmenuAnchorEl(null);
    setActiveSubmenuItems([]);
    setActiveSubmenuParentId(null);
    setSubmenuDirection('right');
  }, []);

  useEffect(() => {
    if (disabled) {
      handleCloseMenu();
    }
  }, [disabled, handleCloseMenu]);

  const handleOpenMenu = useCallback(
    (anchorElement: HTMLElement) => {
      if (disabled) return;
      setAnchorEl(anchorElement);
    },
    [disabled]
  );

  const handleOpenSubmenu = useCallback(
    (anchorElement: HTMLElement, item: DropdownItem) => {
      if (disabled || item.disabled || !item.children?.length) return;

      const triggerRect = anchorElement.getBoundingClientRect();
      const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : triggerRect.right;
      const submenuWidth = anchorElement.offsetWidth;
      const availableRightSpace = viewportWidth - triggerRect.right;
      const shouldOpenLeft =
        availableRightSpace < submenuWidth + DROPDOWN_DEFAULTS.VIEWPORT_SAFE_MARGIN;

      setSubmenuDirection(shouldOpenLeft ? 'left' : 'right');
      setSubmenuAnchorEl(anchorElement);
      setActiveSubmenuItems(item.children);
      setActiveSubmenuParentId(item.id);
    },
    [disabled]
  );

  const handleCloseSubmenu = useCallback(() => {
    setSubmenuAnchorEl(null);
    setActiveSubmenuItems([]);
    setActiveSubmenuParentId(null);
    setSubmenuDirection('right');
  }, []);

  return {
    anchorEl,
    submenuAnchorEl,
    activeSubmenuItems,
    activeSubmenuParentId,
    submenuDirection,
    open,
    submenuOpen,
    handleOpenMenu,
    handleCloseMenu,
    handleOpenSubmenu,
    handleCloseSubmenu,
  };
};

export default useDropdownMenu;
