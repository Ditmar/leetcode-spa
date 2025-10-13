import type { CardProps } from '@mui/material/Card';

export interface ProfileStats {
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
  stats?: ProfileStats;
  /** Size variant of the card */
  size?: ProfileCardSize;
  /** Layout variant */
  variant?: ProfileCardVariant;
  /** Whether to show the stats section */
  showStats?: boolean;
  /** Custom className */
  className?: string;
  /** Test id */
  'data-testid'?: string;
}

export type ProfileCardSize = 'small' | 'medium' | 'large';
export type ProfileCardVariant = 'default' | 'compact' | 'expanded';

export interface StyledProfileCardProps {
  $size: ProfileCardSize;
  $variant: ProfileCardVariant;
}

export interface StatsItemProps {
  icon: React.ReactNode;
  label: string;
  value: number | string;
  'data-testid'?: string;
}