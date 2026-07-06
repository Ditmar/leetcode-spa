import type { DrawerProps as MuiDrawerProps } from '@mui/material';
import type { ReactNode } from 'react';

export interface CustomDrawerProps extends Omit<MuiDrawerProps, 'title'> {
  title?: ReactNode;
  description?: ReactNode;
  showCloseButton?: boolean;
  showDragHandle?: boolean;
  /**
   * Controls the width (left/right anchors) or height (top/bottom anchors) of the drawer.
   * Must use relative units only — no px or rem allowed.
   * Accepted values: percentage (e.g. '30%'), viewport height (e.g. '40vh'), viewport width (e.g. '50vw').
   */
  drawerSize?: `${number}%` | `${number}vh` | `${number}vw`;
  swipeable?: boolean;
  drawerAriaLabel?: string;
  /**
   * Callback fired when the drawer is opened via swipe gesture (SwipeableDrawer on mobile).
   * Required internally by MUI SwipeableDrawer.
   */
  onOpen?: () => void;
}
