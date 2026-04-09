import { AvatarSize } from './Avatar.types';

export const AVATAR_SIZES: Record<AvatarSize, { width: number; height: number; fontSize: string }> = {
  sm: { width: 32, height: 32, fontSize: '12px' },
  md: { width: 40, height: 40, fontSize: '14px' },
  lg: { width: 48, height: 48, fontSize: '16px' },
  xl: { width: 64, height: 64, fontSize: '20px' },
};

export const AVATAR_COLORS = {
  default: {
    bg: '#E5E7EB',
    text: '#111827',
  },
  primary: {
    bg: '#3B82F6',
    text: '#FFFFFF',
  },
  success: {
    bg: '#10B981',
    text: '#FFFFFF',
  },
};