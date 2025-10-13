import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import type { ProfileCardSize, ProfileCardVariant, ProfileStats } from './ProfileCard.types';

export const PROFILE_CARD_SIZES: Record<ProfileCardSize, ProfileCardSize> = {
  small: 'small',
  medium: 'medium',
  large: 'large',
} as const;

export const PROFILE_CARD_VARIANTS: Record<ProfileCardVariant, ProfileCardVariant> = {
  default: 'default',
  compact: 'compact',
  expanded: 'expanded',
} as const;

export const SIZE_CONFIGS = {
  small: {
    avatarSize: 48,
    padding: 16,
    nameFontSize: '1rem',
    usernameFontSize: '0.875rem',
    roleFontSize: '0.75rem',
    statsGap: 12,
  },
  medium: {
    avatarSize: 64,
    padding: 20,
    nameFontSize: '1.125rem',
    usernameFontSize: '0.875rem',
    roleFontSize: '0.8125rem',
    statsGap: 16,
  },
  large: {
    avatarSize: 80,
    padding: 24,
    nameFontSize: '1.25rem',
    usernameFontSize: '1rem',
    roleFontSize: '0.875rem',
    statsGap: 20,
  },
} as const;

export const VARIANT_CONFIGS = {
  default: {
    direction: 'column' as const,
    textAlign: 'center' as const,
    statsDirection: 'row' as const,
  },
  compact: {
    direction: 'row' as const,
    textAlign: 'left' as const,
    statsDirection: 'row' as const,
  },
  expanded: {
    direction: 'column' as const,
    textAlign: 'center' as const,
    statsDirection: 'column' as const,
  },
} as const;

export const DEFAULT_PROPS = {
  size: 'medium' as ProfileCardSize,
  variant: 'default' as ProfileCardVariant,
  showStats: true,
  stats: {
    courses: 0,
    points: 0,
    ranking: 0,
  } as ProfileStats,
} as const;

export const STATS_ICONS = {
  courses: SchoolIcon,
  points: StarIcon,
  ranking: EmojiEventsIcon,
} as const;

export const STATS_LABELS = {
  courses: 'Courses',
  points: 'Points',
  ranking: 'Ranking',
} as const;

export const DEFAULT_AVATAR_ICON = PersonIcon;

export const FALLBACK_INITIALS = (name: string): string => {
  if (!name) return '?';
  const words = name.trim().split(/\s+/);
  if (words.length === 1) {
    return words[0].charAt(0).toUpperCase();
  }
  return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase();
};