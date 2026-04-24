export type AvatarVariantType = 'sm' | 'md' | 'lg' | 'xl';
export type AvatarColorType = 'default' | 'primary' | 'success';

export const AVATAR_SIZES: Record<
  AvatarVariantType,
  { width: number; height: number; fontSize: number }
> = {
  sm: { width: 32, height: 32, fontSize: 12 },
  md: { width: 40, height: 40, fontSize: 14 },
  lg: { width: 48, height: 48, fontSize: 16 },
  xl: { width: 64, height: 64, fontSize: 20 },
};
export const AVATAR_VARIANTS: Record<AvatarColorType, { bg: string; color: string }> = {
  default: {
    bg: 'var(--avatar-default-bg)',
    color: 'var(--avatar-default-text)',
  },
  primary: {
    bg: 'var(--avatar-primary-bg)',
    color: 'var(--avatar-text-light)',
  },
  success: {
    bg: 'var(--avatar-success-bg)',
    color: 'var(--avatar-text-light)',
  },
};
