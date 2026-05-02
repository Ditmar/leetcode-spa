import type { PopoverProps as MuiPopoverProps } from '@mui/material/Popover';
import type { ReactNode } from 'react';

export type PopoverPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end';

export interface CustomPopoverProps
  extends Omit<
    MuiPopoverProps,
    'open' | 'anchorEl' | 'onClose' | 'anchorOrigin' | 'transformOrigin' | 'children'
  > {
  trigger: ReactNode;
  children: ReactNode;
  placement?: PopoverPlacement;
  showArrow?: boolean;
  showCloseButton?: boolean;
  onOpenChange?: (open: boolean) => void;
}
