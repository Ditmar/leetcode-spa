import type { PaperProps } from '@mui/material/Paper';
import type { PopperProps } from '@mui/material/Popper';
import type { ReactNode, RefObject } from 'react';

export interface HoverCardProps
  extends Omit<PopperProps, 'open' | 'anchorEl' | 'children' | 'ref'> {
  trigger: ReactNode;

  children: ReactNode;

  /**
   * @default 200
   */
  openDelay?: number;

  /**
   * @default 300
   */
  closeDelay?: number;

  PaperProps?: PaperProps;

  /**
   * @default 320
   */
  maxWidth?: number | string;

  open?: boolean;

  onOpen?: () => void;

  onClose?: () => void;

  /**
   * @default false
   */
  disabled?: boolean;
}

export interface UseHoverCardReturn {
  isOpen: boolean;
  anchorRef: RefObject<HTMLElement | null>;
  triggerProps: TriggerEventHandlers;
  open: () => void;
  close: () => void;
}

export interface TriggerEventHandlers {
  onMouseEnter: React.MouseEventHandler;
  onMouseLeave: React.MouseEventHandler;
  onFocus: React.FocusEventHandler;
  onBlur: React.FocusEventHandler;
  onClick: React.MouseEventHandler;
}
