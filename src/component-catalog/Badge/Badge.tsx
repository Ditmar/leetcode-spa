import {
  BADGE_DEFAULT_ANCHOR,
  BADGE_DEFAULT_DISPLAY,
  BADGE_DEFAULT_MAX,
  BADGE_DEFAULT_TONE,
} from './Badge.constants';
import { useBadge } from './Badge.hook';
import { StandaloneBadgeLabel, StyledBadge } from './Badge.styles';
import type { BadgeProps } from './Badge.types';

export function Badge({
  badgeContent,
  children,
  color = 'default',
  display = BADGE_DEFAULT_DISPLAY,
  max = BADGE_DEFAULT_MAX,
  showZero = false,
  invisible = false,
  variant = 'standard',
  tone = BADGE_DEFAULT_TONE,
  anchorOrigin = BADGE_DEFAULT_ANCHOR,
  ...rest
}: BadgeProps) {
  const { resolvedAnchorOrigin, resolvedContent, resolvedTone, shouldRenderStandalone } = useBadge({
    anchorOrigin,
    badgeContent,
    display,
    invisible,
    max,
    showZero,
    tone,
    variant,
  });

  if (display === 'standalone') {
    if (!shouldRenderStandalone) {
      return null;
    }

    return <StandaloneBadgeLabel tone={resolvedTone}>{resolvedContent}</StandaloneBadgeLabel>;
  }

  return (
    <StyledBadge
      badgeContent={badgeContent}
      color={color}
      max={max}
      showZero={showZero}
      invisible={invisible}
      variant={variant}
      anchorOrigin={resolvedAnchorOrigin}
      {...rest}
    >
      {children}
    </StyledBadge>
  );
}
