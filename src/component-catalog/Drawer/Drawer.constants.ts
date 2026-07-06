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
  // Figma: 384px desktop width — expressed as percentage to avoid hardcoded px
  DESKTOP_WIDTH: '30%',
  // Figma: bottom drawer height — expressed in vh to avoid hardcoded px
  MOBILE_BOTTOM_HEIGHT: '40vh',
  // Spacing multipliers for theme.spacing()
  HEADER_PADDING: 2, // 16px via theme
  CONTENT_PADDING: 2, // 16px via theme
  HEADER_GAP: 0.75, // 6px via theme
  FORM_GAP: 2, // 16px via theme
} as const;
