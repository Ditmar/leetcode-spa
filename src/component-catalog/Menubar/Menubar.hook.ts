import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from 'react';

import type { MouseEvent, KeyboardEvent } from 'react';

/**
 * Custom hook to manage Menubar state and interactions
 */
export const useMenubar = () => {
  const theme = useTheme();

  /**
   * Responsive detection (SSR safe)
   */
  const isMobile = useMediaQuery(theme.breakpoints.down('md'), {
    noSsr: false,
  });

  // =========================
  // Desktop state
  // =========================

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);

  // =========================
  // Mobile state
  // =========================

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [expandedItemIndex, setExpandedItemIndex] = useState<number | null>(null);

  // =========================
  // Derived state
  // =========================

  const isMenuOpen = Boolean(anchorEl);

  // =========================
  // Desktop handlers
  // =========================

  /**
   * Open menu on click
   */
  const handleMenuOpen = (event: MouseEvent<HTMLElement>, index: number) => {
    setAnchorEl(event.currentTarget);
    setActiveMenuIndex(index);
  };

  /**
   * Close menu
   */
  const handleMenuClose = () => {
    setAnchorEl(null);
    setActiveMenuIndex(null);
  };

  /**
   * Keyboard navigation
   */
  const handleKeyDown = (
    event: KeyboardEvent<HTMLElement>,
    currentIndex: number,
    totalItems: number
  ) => {
    switch (event.key) {
      case 'ArrowRight': {
        event.preventDefault();
        const nextIndex = (currentIndex + 1) % totalItems;
        setActiveMenuIndex(nextIndex);
        break;
      }

      case 'ArrowLeft': {
        event.preventDefault();
        const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
        setActiveMenuIndex(prevIndex);
        break;
      }

      case 'ArrowDown': {
        event.preventDefault();
        setActiveMenuIndex(currentIndex);
        break;
      }

      case 'Escape': {
        handleMenuClose();
        break;
      }

      default:
        break;
    }
  };

  // =========================
  // Mobile handlers
  // =========================

  /**
   * Toggle Drawer
   */
  const handleDrawerToggle = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  /**
   * Close Drawer
   */
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
    setExpandedItemIndex(null);
  };

  /**
   * Expand / collapse submenu in mobile
   */
  const handleExpandItem = (index: number) => {
    setExpandedItemIndex((prev) => (prev === index ? null : index));
  };

  // =========================
  // General handler
  // =========================

  /**
   * Handle item click (both desktop and mobile)
   */
  const handleItemClick = () => {
    handleMenuClose();
    handleDrawerClose();
  };

  return {
    // Responsive
    isMobile,

    // Desktop state
    anchorEl,
    activeMenuIndex,
    isMenuOpen,

    // Mobile state
    isDrawerOpen,
    expandedItemIndex,

    // Desktop handlers
    handleMenuOpen,
    handleMenuClose,
    handleKeyDown,

    // Mobile handlers
    handleDrawerToggle,
    handleDrawerClose,
    handleExpandItem,

    // General
    handleItemClick,
  };
};
