import { BADGE_DEFAULT_ANCHOR, BADGE_DEFAULT_MAX } from './Badge.constants';

import type { BadgeProps } from './Badge.types';

type UseBadgeParams = Pick<BadgeProps, 'anchorOrigin' | 'max'>;

export const useBadge = ({
  anchorOrigin = BADGE_DEFAULT_ANCHOR,
  max = BADGE_DEFAULT_MAX,
}: UseBadgeParams = {}) => ({
  resolvedAnchorOrigin: anchorOrigin,
  resolvedMax: max,
});
