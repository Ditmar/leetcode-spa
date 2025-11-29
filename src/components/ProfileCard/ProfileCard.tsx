import * as React from 'react';

import {
  DEFAULT_PROPS,
  STATS_LABELS_FALLBACK,
  DEFAULT_AVATAR_ICON,
  FALLBACK_INITIALS,
} from './ProfileCard.constants';
import {
  StyledOuterContainer,
  StyledUserCard,
  StyledProfileContainer,
  StyledAvatar,
  StyledInfoContainer,
  StyledName,
  StyledUsername,
  StyledRole,
  StyledStatsContainer,
  StyledStatCard,
  StyledStatContent,
  StyledStatValue,
  StyledStatLabel,
} from './ProfileCard.styles';

import type { ProfileCardProps, StatsItemProps } from './ProfileCard.types';

const StatsItem: React.FC<StatsItemProps> = ({
  label,
  value,
  $variant,
  $size,
  locale,
  'data-testid': dataTestId,
}) => {
  const formattedValue = typeof value === 'number' ? value.toLocaleString(locale) : value;

  return (
    <StyledStatCard $variant={$variant} $size={$size} data-testid={dataTestId}>
      <StyledStatContent $variant={$variant}>
        <StyledStatValue $size={$size}>{formattedValue}</StyledStatValue>
        <StyledStatLabel $size={$size}>{label}</StyledStatLabel>
      </StyledStatContent>
    </StyledStatCard>
  );
};

/**
 * Profile card component for displaying user information and statistics
 *
 * @component
 * @example
 * ```tsx
 * import { ProfileCard } from './ProfileCard';
 *
 * <ProfileCard
 *   name="John Doe"
 *   username="johndoe"
 *   role="Developer"
 *   stats={{ courses: 10, points: 2500, ranking: 15 }}
 * />
 * ```
 */
export const ProfileCard: React.FC<ProfileCardProps> = ({
  avatarUrl,
  name,
  username,
  role,
  stats = DEFAULT_PROPS.stats,
  size = DEFAULT_PROPS.size,
  variant = DEFAULT_PROPS.variant,
  showStats = DEFAULT_PROPS.showStats,
  locale,
  className,
  'data-testid': dataTestId = 'profile-card',
  ...cardProps
}) => {
  if (!name || !username) {
    throw new Error('ProfileCard: "name" and "username" are required props and cannot be empty.');
  }

  const DefaultIcon = DEFAULT_AVATAR_ICON;
  const initials = FALLBACK_INITIALS(name);

  const userLocale = locale || (typeof navigator !== 'undefined' ? navigator.language : undefined);

  const formatRanking = (rank: number): string => {
    if (rank === 0) return '-';

    const lastDigit = rank % 10;
    const lastTwoDigits = rank % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
      return `${rank}th`;
    }

    if (lastDigit === 1) return `${rank}st`;
    if (lastDigit === 2) return `${rank}nd`;
    if (lastDigit === 3) return `${rank}rd`;

    return `${rank}th`;
  };

  return (
    <StyledOuterContainer
      className={className}
      data-testid={dataTestId}
      $size={size}
      $variant={variant}
      role="article"
      aria-label={`Profile card for ${name}`}
      {...cardProps}
    >
      {/* Card de Usuario (282×316px con borde) */}
      <StyledUserCard $size={size} $variant={variant}>
        <StyledProfileContainer $size={size} $variant={variant}>
          <StyledAvatar
            src={avatarUrl}
            alt={`${name}'s avatar`}
            $size={size}
            data-testid={`${dataTestId}-avatar`}
          >
            {!avatarUrl && initials && initials}
            {!avatarUrl && !initials && <DefaultIcon />}
          </StyledAvatar>

          <StyledInfoContainer $size={size} $variant={variant}>
            <StyledName variant="h6" $size={size} title={name} data-testid={`${dataTestId}-name`}>
              {name}
            </StyledName>
            <StyledUsername
              variant="body2"
              $size={size}
              title={username}
              data-testid={`${dataTestId}-username`}
            >
              @{username}
            </StyledUsername>
            {role && (
              <StyledRole
                variant="body2"
                $size={size}
                title={role}
                data-testid={`${dataTestId}-role`}
              >
                {role}
              </StyledRole>
            )}
          </StyledInfoContainer>
        </StyledProfileContainer>
      </StyledUserCard>

      {/* Stats Container (685×166px) - SIN ICONOS */}
      {showStats && (
        <StyledStatsContainer
          $size={size}
          $variant={variant}
          data-testid={`${dataTestId}-stats`}
          role="region"
          aria-label="User statistics"
        >
          <StatsItem
            label={STATS_LABELS_FALLBACK.courses}
            value={stats.courses}
            $variant={variant}
            $size={size}
            locale={userLocale}
            data-testid={`${dataTestId}-stat-courses`}
          />
          <StatsItem
            label={STATS_LABELS_FALLBACK.points}
            value={stats.points}
            $variant={variant}
            $size={size}
            locale={userLocale}
            data-testid={`${dataTestId}-stat-points`}
          />
          <StatsItem
            label={STATS_LABELS_FALLBACK.ranking}
            value={formatRanking(stats.ranking)}
            $variant={variant}
            $size={size}
            locale={userLocale}
            data-testid={`${dataTestId}-stat-ranking`}
          />
        </StyledStatsContainer>
      )}
    </StyledOuterContainer>
  );
};
