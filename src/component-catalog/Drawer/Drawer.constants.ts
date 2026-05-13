export const DRAWER_ANCHORS = {
  LEFT: 'left',
  RIGHT: 'right',
  TOP: 'top',
  BOTTOM: 'bottom',
} as const;

export const DRAWER_VARIANTS = {
  TEMPORARY: 'temporary',
  PERSISTENT: 'persistent',
  PERMANENT: 'permanent',
} as const;

export const DRAWER_DEFAULTS = {
  DESKTOP_WIDTH: '24rem',
  MOBILE_BOTTOM_HEIGHT: '10.3125rem',
  MOBILE_DRAG_HANDLE_WIDTH: '3rem',
  MOBILE_DRAG_HANDLE_HEIGHT: '0.25rem',
  HEADER_PADDING: 2,
  CONTENT_PADDING: 2,
  HEADER_GAP: 0.75,
  FORM_GAP: 2,
} as const;