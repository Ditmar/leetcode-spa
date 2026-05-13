import { DRAWER_ANCHORS } from './Drawer.constants';

import type { DrawerProps } from '@mui/material';

export const isBottomDrawer = (
  anchor: DrawerProps['anchor']
) => {
  return (
    anchor ===
    DRAWER_ANCHORS.BOTTOM
  );
};

export const isHorizontalDrawer = (
  anchor: DrawerProps['anchor']
) => {
  return (
    anchor ===
      DRAWER_ANCHORS.LEFT ||
    anchor ===
      DRAWER_ANCHORS.RIGHT
  );
};