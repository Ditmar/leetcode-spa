import React from 'react';

import { StyledAvatar } from './Avatar.styles';

import type { AvatarProps } from './Avatar.types';

export const Avatar: React.FC<AvatarProps> = ({
  size = 'md',
  variant = 'default',
  shape = 'circular',
  children,
  ...props
}) => {
  return (
    <StyledAvatar
      $size={size}
      $variant={variant}
      variant={shape}
      data-testid="avatar-component"
      data-size={size}
      data-variant={variant}
      {...props}
    >
      {children}
    </StyledAvatar>
  );
};
