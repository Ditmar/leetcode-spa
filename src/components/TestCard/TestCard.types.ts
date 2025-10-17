import React from 'react';

import type { CardProps } from '@mui/material';

export interface TestCardProps extends CardProps {
  description: string;
  layout?: 'horizontal' | 'vertical';
  logo?: string | React.ReactNode;
  onSelect?: (
    event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>
  ) => void;
  title: string;
}
