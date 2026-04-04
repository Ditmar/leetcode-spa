import type { BadgeDisplay, BadgeProps, BadgeTone } from './Badge.types';

export const BADGE_DEFAULT_MAX = 99;

export const BADGE_DEFAULT_ANCHOR: NonNullable<BadgeProps['anchorOrigin']> = {
  vertical: 'top',
  horizontal: 'right',
};

export const BADGE_DEFAULT_TONE: BadgeTone = 'default';

export const BADGE_DEFAULT_DISPLAY: BadgeDisplay = 'standalone';
