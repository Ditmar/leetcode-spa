import type { DrawerProps as MuiDrawerProps } from '@mui/material';
import type { ReactNode } from 'react';

export interface CustomDrawerProps extends Omit<MuiDrawerProps, 'title'> {
  title?: ReactNode;
  description?: ReactNode;
  showCloseButton?: boolean;
  showDragHandle?: boolean;
  drawerSize?: string;
  swipeable?: boolean;
  drawerAriaLabel?: string;
}
