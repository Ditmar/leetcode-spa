export type AvatarSizeType = 'sm' | 'md' | 'lg' | 'xl';
export type AvatarColorType = 'default' | 'primary' | 'success';

export const AVATAR_SIZES: Record<
  AvatarSizeType,
  { width: number; height: number; fontSize: number }
> = {
  sm: { width: 32, height: 32, fontSize: 11 },
  md: { width: 40, height: 40, fontSize: 13 },
  lg: { width: 48, height: 48, fontSize: 14 },
  xl: { width: 64, height: 64, fontSize: 16 },
};
