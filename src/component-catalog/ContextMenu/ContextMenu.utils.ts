import { FALLBACK_MENU_HEIGHT_PX, FALLBACK_MENU_WIDTH_PX } from './ContextMenu.constants';

import type { MenuPosition } from './ContextMenu.types';

export function clampToViewport(
  x: number,
  y: number,
  menuWidth: number = FALLBACK_MENU_WIDTH_PX,
  menuHeight: number = FALLBACK_MENU_HEIGHT_PX
): MenuPosition {
  return {
    x: Math.max(0, Math.min(x, window.innerWidth - menuWidth)),
    y: Math.max(0, Math.min(y, window.innerHeight - menuHeight)),
  };
}
