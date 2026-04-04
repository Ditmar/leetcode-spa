import {
  BADGE_DEFAULT_ANCHOR,
  BADGE_DEFAULT_DISPLAY,
  BADGE_DEFAULT_MAX,
  BADGE_DEFAULT_TONE,
} from './Badge.constants';
import { formatStandaloneBadgeContent, shouldRenderStandaloneBadge } from './Badge.utils';
import type { BadgeProps } from './Badge.types';

type UseBadgeParams = Pick<
  BadgeProps,
  | 'anchorOrigin'
  | 'badgeContent'
  | 'display'
  | 'invisible'
  | 'max'
  | 'showZero'
  | 'tone'
  | 'variant'
>;

export const useBadge = ({
  anchorOrigin = BADGE_DEFAULT_ANCHOR,
  badgeContent,
  display = BADGE_DEFAULT_DISPLAY,
  invisible = false,
  max = BADGE_DEFAULT_MAX,
  showZero = false,
  tone = BADGE_DEFAULT_TONE,
  variant = 'standard',
}: UseBadgeParams) => {
  const resolvedContent =
    display === 'standalone'
      ? formatStandaloneBadgeContent(badgeContent, max, variant)
      : badgeContent;

  const shouldRenderStandalone =
    display === 'standalone'
      ? shouldRenderStandaloneBadge(badgeContent, showZero, invisible, variant)
      : false;

  return {
    resolvedAnchorOrigin: anchorOrigin,
    resolvedContent,
    resolvedTone: tone,
    shouldRenderStandalone,
  };
};
