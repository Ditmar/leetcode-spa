import type { BadgeProps } from './Badge.types';

export const getBadgeAriaLabel = (badgeContent: BadgeProps['badgeContent']) => {
  if (badgeContent === undefined || badgeContent === null) {
    return undefined;
  }

  return `Badge content: ${String(badgeContent)}`;
};
