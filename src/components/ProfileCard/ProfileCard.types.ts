import type { ReactNode } from 'react';
import type { CardProps } from '@mui/material/Card';

export interface ProfileStatsProps {
  /** Number of courses enrolled */
  courses: number;
  /** Total points earned */
  points: number;
  /** Current ranking position */
  ranking: number;
}

export interface ProfileCardProps extends Omit<CardProps, 'children' | 'variant'> {
  /** User's avatar URL */
  avatarUrl?: string;
  /** User's full name */
  name: string;
  /** User's username/handle */
  username: string;
  /** User's role or title */
  role?: string;
  /** User statistics */
  stats?: ProfileStatsProps;
  /** Size variant of the card */
  size?: ProfileCardSize;
  /** Layout variant */
  variant?: ProfileCardVariant;
  /** Whether to show the stats section */
  showStats?: boolean;
  /** Locale for number formatting (defaults to user's browser locale) */
  locale?: string;
  /** Custom className */
  className?: string;
  /** Test id for testing purposes */
  'data-testid'?: string;
}

export type ProfileCardSize = 'small' | 'medium' | 'large';
export type ProfileCardVariant = 'default' | 'compact' | 'expanded';

export interface StyledProfileCardProps {
  $size: ProfileCardSize;
  $variant: ProfileCardVariant;
}

export interface StatsItemProps {
  icon: ReactNode;
  label: string;
  value: number | string;
  $variant: ProfileCardVariant;
  locale?: string;
  'data-testid'?: string;
}

// Alias for backward compatibility
export type ProfileStats = ProfileStatsProps;
