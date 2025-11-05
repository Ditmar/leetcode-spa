import type { PillTagVariant } from './PillTag.constants';
import type { ChipProps } from '@mui/material/Chip';

export interface PillTagProps extends Omit<ChipProps, 'variant'> {
  label: string;
  variant?: PillTagVariant;
  'data-testid'?: string;
}
