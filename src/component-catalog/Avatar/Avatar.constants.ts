export type AvatarSizes = 'sm' | 'md' | 'lg' | 'xl';
export type AvatarVariants = 'default' | 'primary' | 'success';

export const AVATAR_SIZES: Record<AvatarSizes, number> = {
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64,
};

export const AVATAR_VARIANTS = {
  default: {
    bg: 'var(--avatar-default-bg, #EAECEF)',
    color: 'var(--avatar-default-text, #1A1D20)',
  },
  primary: {
    bg: 'var(--avatar-primary-bg, #2D7AF1)',
    color: 'var(--avatar-text-light, #FFFFFF)',
  },
  success: {
    bg: 'var(--avatar-success-bg, #10C955)',
    color: 'var(--avatar-text-light, #FFFFFF)',
  },
} as const;
