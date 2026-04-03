import { useMediaQuery } from '@mui/material';
import { useState, useCallback, useMemo } from 'react';

import { useTheme } from '../../style-library';

import type { NavItem, NavSection } from './NavigationMenu.types';

interface UseNavigationMenuStateProps {
  navSections: NavSection[];
  currentPath?: string;
  onItemClick?: (item: NavItem) => void;
  useScrollHide?: boolean;
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
}

export function useNavigationMenuState(
  props: UseNavigationMenuStateProps
): UseNavigationMenuStateReturn {
  const { navSections, currentPath = '', onItemClick } = props;

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = !isMobile;

  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const toggleMobileDrawer = useCallback(() => {
    setIsMobileDrawerOpen((prev) => !prev);
  }, []);

  const closeMobileDrawer = useCallback(() => {
    setIsMobileDrawerOpen(false);
  }, []);

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
  };
}

export type { UseNavigationMenuStateReturn };
