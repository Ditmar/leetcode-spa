import type { ButtonProps, DialogProps } from '@mui/material';
import type { ReactNode } from 'react';

export type AlertDialogSeverity = 'info' | 'warning' | 'error' | 'success';

export type AlertDialogActionType = 'confirm' | 'cancel' | 'acknowledge';

export type AlertDialogProps = Omit<DialogProps, 'children'> & {
  title: ReactNode;
  description?: ReactNode;
  severity?: AlertDialogSeverity;

  confirmLabel?: string;
  cancelLabel?: string;
  acknowledgeLabel?: string;

  showConfirmButton?: boolean;
  showCancelButton?: boolean;
  showAcknowledgeButton?: boolean;

  onConfirm?: () => void;
  onCancel?: () => void;
  onAcknowledge?: () => void;

  confirmButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  acknowledgeButtonProps?: ButtonProps;

  testId?: string;
};