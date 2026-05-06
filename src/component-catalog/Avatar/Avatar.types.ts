import type { AvatarSizeType, AvatarColorType } from './Avatar.constants';
import type { AvatarProps as MuiAvatarProps } from '@mui/material';

export interface AvatarProps extends Omit<MuiAvatarProps, 'variant'> {
  size?: AvatarSizeType;
  variant?: AvatarColorType;
  shape?: 'circular' | 'rounded' | 'square';
}

export interface AvatarStylesProps {
  $size?: AvatarSizeType;
  $variant?: AvatarColorType;
}
