import React from 'react';
import type { ProfileCardProps, StatsItemProps } from './ProfileCard.types';
import {
  StyledCard,
  StyledProfileContainer,
  StyledAvatar,
  StyledInfoContainer,
  StyledName,
  StyledUsername,
  StyledRole,
  StyledStatsContainer,
  StyledStatItem,
  StyledStatIcon,
  StyledStatContent,
  StyledStatValue,
  StyledStatLabel,
} from './ProfileCard.styles';
import {
  DEFAULT_PROPS,
  STATS_ICONS,
  STATS_LABELS,
  DEFAULT_AVATAR_ICON,
  FALLBACK_INITIALS,
} from './ProfileCard.constants';

/* Stats item component for rendering individual statistics */
const StatsItem: React.FC<StatsItemProps> = ({
  icon,
  label,
  value,
  'data-testid': dataTestId,
}) => {
  const formattedValue = typeof value === 'number' 
    ? value.toLocaleString('en-US') 
    : value;

  return (
    <StyledStatItem $variant={DEFAULT_PROPS.variant} data-testid={dataTestId}>
      <StyledStatIcon>{icon}</StyledStatIcon>
      <StyledStatContent $variant={DEFAULT_PROPS.variant}>
        <StyledStatValue>{formattedValue}</StyledStatValue>
        <StyledStatLabel>{label}</StyledStatLabel>
      </StyledStatContent>
    </StyledStatItem>
  );
};

/* Profile card component for displaying user information and statistics */
export const ProfileCard: React.FC<ProfileCardProps> = ({
  avatarUrl,
  name,
  username,
  role,
  stats = DEFAULT_PROPS.stats,
  size = DEFAULT_PROPS.size,
  variant = DEFAULT_PROPS.variant,
  showStats = DEFAULT_PROPS.showStats,
  className,
  'data-testid': dataTestId = 'profile-card',
  ...rest
}) => {
  // Validate required props
  if (!name || !username) {
    console.warn('ProfileCard: name and username are required props');
  }

  const DefaultIcon = DEFAULT_AVATAR_ICON;
  const initials = FALLBACK_INITIALS(name);

  const formatRanking = (rank: number): string => {
    if (rank === 0) return '-';
    
    const lastDigit = rank % 10;
    const lastTwoDigits = rank % 100;
    
    // Special cases for 11, 12, 13 (always 'th')
    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
      return `${rank}th`;
    }
    
    // Regular cases based on last digit
    if (lastDigit === 1) return `${rank}st`;
    if (lastDigit === 2) return `${rank}nd`;
    if (lastDigit === 3) return `${rank}rd`;
    
    return `${rank}th`;
  };

  return (
    <StyledCard
      {...rest}
      className={className}
      data-testid={dataTestId}
      $size={size}
      $variant={variant}
      role="article"
      aria-label={`Profile card for ${name}`}
    >
      <StyledProfileContainer $size={size} $variant={variant}>
        <StyledAvatar
          src={avatarUrl}
          alt={`${name}'s avatar`}
          $size={size}
          data-testid={`${dataTestId}-avatar`}
        >
          {!avatarUrl && initials}
          {!avatarUrl && !initials && <DefaultIcon />}
        </StyledAvatar>

        <StyledInfoContainer $size={size} $variant={variant}>
          <StyledName
            variant="h6"
            $size={size}
            title={name}
            data-testid={`${dataTestId}-name`}
          >
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

      {showStats && stats && (
        <StyledStatsContainer 
          $size={size} 
          $variant={variant} 
          data-testid={`${dataTestId}-stats`}
          role="region"
          aria-label="User statistics"
        >
          <StatsItem
            icon={<STATS_ICONS.courses />}
            label={STATS_LABELS.courses}
            value={stats.courses}
            data-testid={`${dataTestId}-stat-courses`}
          />
          <StatsItem
            icon={<STATS_ICONS.points />}
            label={STATS_LABELS.points}
            value={stats.points}
            data-testid={`${dataTestId}-stat-points`}
          />
          <StatsItem
            icon={<STATS_ICONS.ranking />}
            label={STATS_LABELS.ranking}
            value={formatRanking(stats.ranking)}
            data-testid={`${dataTestId}-stat-ranking`}
          />
        </StyledStatsContainer>
      )}
    </StyledCard>
  );
};