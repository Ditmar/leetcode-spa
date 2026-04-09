import { useMediaQuery, useScrollTrigger } from '@mui/material';
import { useState, useCallback, useMemo } from 'react';

import { useTheme } from '../../style-library';

import type { NavItem, NavSection } from './NavigationMenu.types';

interface UseNavigationMenuStateProps {
  navSections: NavSection[];
  currentPath?: string;
  onItemClick?: (item: NavItem) => void;
  useScrollHide?: boolean;
  onMobileMenuToggle?: (isOpen: boolean) => void;
}

interface UseNavigationMenuStateReturn {
  activePanelId: string | null;
  openPanel: (panelId: string) => void;
  closePanel: () => void;
  isMobileDrawerOpen: boolean;
  toggleMobileDrawer: () => void;
  closeMobileDrawer: () => void;
  activeItemId: string | null;
  isItemActive: (item: NavItem) => boolean;
  isMobile: boolean;
  isDesktop: boolean;
  handleItemClick: (item: NavItem) => void;
  handleEscapeKey: () => void;
  handleKeyDown: (event: React.KeyboardEvent) => void;
  isScrollHidden: boolean;
}

export function useNavigationMenuState(
  props: UseNavigationMenuStateProps
): UseNavigationMenuStateReturn {
  const {
    navSections,
    currentPath = '',
    onItemClick,
    useScrollHide = false,
    onMobileMenuToggle,
  } = props;

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = !isMobile;

  const isScrollHidden = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const toggleMobileDrawer = useCallback(() => {
    setIsMobileDrawerOpen((prev) => {
      const newState = !prev;
      if (onMobileMenuToggle) {
        onMobileMenuToggle(newState);
      }
      return newState;
    });
  }, [onMobileMenuToggle]);

  const closeMobileDrawer = useCallback(() => {
    setIsMobileDrawerOpen(false);
    if (onMobileMenuToggle) {
      onMobileMenuToggle(false);
    }
  }, [onMobileMenuToggle]);

  const [activePanelId, setActivePanelId] = useState<string | null>(null);

  const openPanel = useCallback((panelId: string) => {
    setActivePanelId(panelId);
  }, []);

  const closePanel = useCallback(() => {
    setActivePanelId(null);
  }, []);

  const activeItemId = useMemo(() => {
    for (const section of navSections) {
      for (const item of section.items) {
        if (item.href === currentPath) {
          return item.id;
        }

        if (item.children) {
          for (const child of item.children) {
            if (child.href === currentPath) {
              return child.id;
            }
          }
        }
      }
    }
    return null;
  }, [navSections, currentPath]);

  const isItemActive = useCallback(
    (item: NavItem): boolean => {
      return item.id === activeItemId;
    },
    [activeItemId]
  );

  const handleItemClick = useCallback(
    (item: NavItem) => {
      if (isMobile) {
        closeMobileDrawer();
      }

      if (isDesktop) {
        closePanel();
      }

      if (onItemClick) {
        onItemClick(item);
      }
    },
    [isMobile, isDesktop, closeMobileDrawer, closePanel, onItemClick]
  );

  const handleEscapeKey = useCallback(() => {
    closeMobileDrawer();
    closePanel();
  }, [closeMobileDrawer, closePanel]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleEscapeKey();
      }
    },
    [handleEscapeKey]
  );

  return {
    activePanelId,
    openPanel,
    closePanel,
    isMobileDrawerOpen,
    toggleMobileDrawer,
    closeMobileDrawer,
    activeItemId,
    isItemActive,
    isMobile,
    isDesktop,
    handleItemClick,
    handleEscapeKey,
    handleKeyDown,
    isScrollHidden: useScrollHide ? isScrollHidden : false,
  };
}

export type { UseNavigationMenuStateReturn };
