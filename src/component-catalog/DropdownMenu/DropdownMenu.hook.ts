import { useState, type MouseEvent as ReactMouseEvent } from 'react';

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
  handleOpenMenu: (event: ReactMouseEvent<HTMLElement>) => void;
  handleCloseMenu: () => void;
  handleOpenSubmenu: (event: ReactMouseEvent<HTMLElement>, item: DropdownItem) => void;
  handleCloseSubmenu: () => void;
}

const SUBMENU_ESTIMATED_WIDTH = 320;
const VIEWPORT_SAFE_MARGIN = 16;

export const useDropdownMenu = (disabled = false): UseDropdownMenuReturn => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [submenuAnchorEl, setSubmenuAnchorEl] = useState<HTMLElement | null>(null);
  const [activeSubmenuItems, setActiveSubmenuItems] = useState<DropdownItem[]>([]);
  const [activeSubmenuParentId, setActiveSubmenuParentId] = useState<string | null>(null);
  const [submenuDirection, setSubmenuDirection] = useState<SubmenuDirection>('right');

  const open = Boolean(anchorEl);
  const submenuOpen = Boolean(submenuAnchorEl) && activeSubmenuItems.length > 0;

  const handleOpenMenu = (event: ReactMouseEvent<HTMLElement>) => {
    if (disabled) return;
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setSubmenuAnchorEl(null);
    setActiveSubmenuItems([]);
    setActiveSubmenuParentId(null);
    setSubmenuDirection('right');
  };

  const handleOpenSubmenu = (event: ReactMouseEvent<HTMLElement>, item: DropdownItem) => {
    if (item.disabled || !item.children?.length) return;

    const triggerRect = event.currentTarget.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const availableRightSpace = viewportWidth - triggerRect.right;
    const shouldOpenLeft = availableRightSpace < SUBMENU_ESTIMATED_WIDTH + VIEWPORT_SAFE_MARGIN;

    setSubmenuDirection(shouldOpenLeft ? 'left' : 'right');
    setSubmenuAnchorEl(event.currentTarget);
    setActiveSubmenuItems(item.children);
    setActiveSubmenuParentId(item.id);
  };

  const handleCloseSubmenu = () => {
    setSubmenuAnchorEl(null);
    setActiveSubmenuItems([]);
    setActiveSubmenuParentId(null);
    setSubmenuDirection('right');
  };

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
