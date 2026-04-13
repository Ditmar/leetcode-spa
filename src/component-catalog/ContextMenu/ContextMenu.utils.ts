import type { MenuPosition } from './ContextMenu.types';

export function clampToViewport(
  x: number,
  y: number,
  menuWidth: number,
  menuHeight: number
): MenuPosition {
  return {
    x: Math.max(0, Math.min(x, window.innerWidth - menuWidth)),
    y: Math.max(0, Math.min(y, window.innerHeight - menuHeight)),
  };
}
