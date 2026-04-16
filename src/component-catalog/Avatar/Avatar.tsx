import React from 'react';

import { StyledAvatar } from './Avatar.styles';
import type  { AvatarProps } from './Avatar.types';

/**
 * Avatar component for displaying user initials or profile representations.
 */
const Avatar = ({ children, size = 'md', variant = 'default', ...props }: AvatarProps) => {
  return (
    <StyledAvatar
      $size={size}
      $variant={variant}
      data-testid="avatar-component"
      // Pasamos los valores como data-attributes para que el test pueda leerlos
      // sin depender del motor de renderizado de CSS de jsdom
      data-size={size}
      data-variant={variant}
      {...props}
    >
      {children}
    </StyledAvatar>
  );
};

export { Avatar };
