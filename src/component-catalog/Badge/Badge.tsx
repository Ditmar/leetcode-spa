import { BADGE_DEFAULT_ANCHOR, BADGE_DEFAULT_MAX } from './Badge.constants';
import { StyledBadge } from './Badge.styles';

import type { BadgeProps } from './Badge.types';

export function Badge({
  anchorOrigin = BADGE_DEFAULT_ANCHOR,
  color = 'default',
  invisible = false,
  max = BADGE_DEFAULT_MAX,
  showZero = false,
  variant = 'standard',
  ...rest
}: BadgeProps) {
  return (
    <StyledBadge
      anchorOrigin={anchorOrigin}
      color={color}
      invisible={invisible}
      max={max}
      showZero={showZero}
      variant={variant}
      {...rest}
    />
  );
}
