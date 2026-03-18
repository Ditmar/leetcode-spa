import { styled, Button } from '@mui/material';

import { variantStyles, type variants } from './Button.constants';

export const ButtonStyles = styled(Button)(({ variant = 'contained' }) => ({
  borderRadius: 'var(--radius)',
  fontFamily: 'Inter',
  textTransform: 'capitalize' as const,
  ...variantStyles[variant as variants],
}));
