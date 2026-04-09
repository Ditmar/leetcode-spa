/* Updated import path to resolve Storybook/Vite export issues */
import { AvatarProps as MUIAvatarProps } from '@mui/material/Avatar';

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';
export type AvatarVariant = 'default' | 'primary' | 'success';

export interface AvatarProps extends Omit<MUIAvatarProps, 'variant'> {
  /**
   * Sets the size of the avatar based on pre-defined constants
   * @default 'md'
   */
  size?: AvatarSize;
  /**
   * Custom color variants identified in design
   * @default 'default'
   */
  customVariant?: AvatarVariant;
  /**
   * Initials or text to display inside the avatar
   */
  children?: React.ReactNode;
}