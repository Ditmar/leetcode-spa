import type { AvatarSizes, AvatarVariants } from './Avatar.constants';
import type { BoxProps } from '@mui/material';

export interface AvatarStylesProps {
  $size?: AvatarSizes;
  $variant?: AvatarVariants;
}

export interface AvatarProps extends BoxProps {
  /**
   * The content to be displayed inside the avatar (initials)
   */
  children: React.ReactNode;
  /**
   * Defines the size of the component
   * @default 'md'
   */
  size?: AvatarSizes;
  /**
   * Defines the color variant
   * @default 'default'
   */
  variant?: AvatarVariants;
}