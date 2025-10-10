import type { ChipProps } from '@mui/material/Chip';
import type { PillTagVariant } from './PillTag.constants';

export interface PillTagProps extends Omit<ChipProps, 'variant'> {
    label: string;
    variant?: PillTagVariant;
    'data-testid'?: string;
}