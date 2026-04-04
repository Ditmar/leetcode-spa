import type { BadgeProps } from './Badge.types';

export const formatStandaloneBadgeContent = (
  badgeContent: BadgeProps['badgeContent'],
  max: number,
  variant: BadgeProps['variant']
) => {
  if (variant === 'dot') {
    return undefined;
  }

  if (typeof badgeContent === 'number' && badgeContent > max) {
    return `${max}+`;
  }

  return badgeContent;
};

export const shouldRenderStandaloneBadge = (
  badgeContent: BadgeProps['badgeContent'],
  showZero: boolean,
  invisible: boolean,
  variant: BadgeProps['variant']
) => {
  if (invisible) {
    return false;
  }

  if (variant === 'dot') {
    return true;
  }

  if (badgeContent === 0 && !showZero) {
    return false;
  }

  if (badgeContent === undefined || badgeContent === null || badgeContent === '') {
    return false;
  }

  return true;
};
