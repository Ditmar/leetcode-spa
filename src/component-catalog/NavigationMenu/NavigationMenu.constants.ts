const DEFAULT_ARIA_LABEL = 'Main navigation' as const;

const TOUCH_TARGET_MIN = 44;

const ANIMATION_DURATIONS = {
  SHORT: 120,
  STANDARD: 225,
} as const;

const ANIMATION_EASING = 'cubic-bezier(0.4, 0, 0.2, 1)' as const;

const Z_INDEX_STACK = {
  DRAWER: 1200,
  APPBAR: 1100,
  POPPER_FLYOUT: 1300,
} as const;

const NAV_COLORS = {
  BACKGROUND: '#101828',
  BORDER: '#1E2939',
} as const;

export {
  DEFAULT_ARIA_LABEL,
  TOUCH_TARGET_MIN,
  ANIMATION_DURATIONS,
  ANIMATION_EASING,
  Z_INDEX_STACK,
  NAV_COLORS,
};
