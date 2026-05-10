import type { PaginationProps as MuiPaginationProps } from '@mui/material';

export interface PaginationProps
  extends Omit<MuiPaginationProps, 'variant' | 'shape' | 'renderItem'> {
  count?: number;

  page?: number;

  onChange?: (event: React.ChangeEvent<unknown>, page: number) => void;
}
