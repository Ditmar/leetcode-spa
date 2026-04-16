import React from 'react';

import { StyledAvatar } from './Avatar.styles';
import type { AvatarProps } from './Avatar.types';

const Avatar = ({
  children,
  size = 'md',
  variant = 'default',
  ...props
}: AvatarProps) => {
  return (
    <StyledAvatar
      $size={size}
      $variant={variant}
      data-testid="avatar-component"
      data-size={size}
      data-variant={variant}
      {...props}
    >
      {children}
    </StyledAvatar>
  );
};

export { Avatar };