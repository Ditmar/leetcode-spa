import { styled, Button } from '@mui/material';

import { variantStyles, type variants } from './Button.constants';

export const StyledButton = styled(Button)(({ variant = 'contained' }) => ({
  borderRadius: 'var(--radius)',
  textTransform: 'capitalize',
  ...variantStyles[variant as variants],
}));
