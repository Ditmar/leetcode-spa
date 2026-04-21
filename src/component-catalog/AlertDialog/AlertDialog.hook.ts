import { useCallback } from 'react';

import {
  DEFAULT_ACKNOWLEDGE_LABEL,
  DEFAULT_CANCEL_LABEL,
  DEFAULT_CONFIRM_LABEL,
} from './AlertDialog.constants';

import type { AlertDialogProps } from './AlertDialog.types';

type UseAlertDialogParams = Pick<
  AlertDialogProps,
  | 'confirmLabel'
  | 'cancelLabel'
  | 'acknowledgeLabel'
  | 'showConfirmButton'
  | 'showCancelButton'
  | 'showAcknowledgeButton'
  | 'onConfirm'
  | 'onCancel'
  | 'onAcknowledge'
>;

type UseAlertDialogResult = {
  labels: {
    confirm: string;
    cancel: string;
    acknowledge: string;
  };
  actions: {
    hasAcknowledgeAction: boolean;
    hasConfirmCancelActions: boolean;
  };
  handlers: {
    handleConfirmClick: () => void;
    handleCancelClick: () => void;
    handleAcknowledgeClick: () => void;
  };
};

export const useAlertDialog = ({
  confirmLabel,
  cancelLabel,
  acknowledgeLabel,
  showConfirmButton = false,
  showCancelButton = false,
  showAcknowledgeButton = false,
  onConfirm,
  onCancel,
  onAcknowledge,
}: UseAlertDialogParams): UseAlertDialogResult => {
  const resolvedConfirmLabel = confirmLabel ?? DEFAULT_CONFIRM_LABEL;
  const resolvedCancelLabel = cancelLabel ?? DEFAULT_CANCEL_LABEL;
  const resolvedAcknowledgeLabel = acknowledgeLabel ?? DEFAULT_ACKNOWLEDGE_LABEL;

  const hasAcknowledgeAction = showAcknowledgeButton;
  const hasConfirmCancelActions = showConfirmButton || showCancelButton;

  const handleConfirmClick = useCallback((): void => {
    onConfirm?.();
  }, [onConfirm]);

  const handleCancelClick = useCallback((): void => {
    onCancel?.();
  }, [onCancel]);

  const handleAcknowledgeClick = useCallback((): void => {
    onAcknowledge?.();
  }, [onAcknowledge]);

  return {
    labels: {
      confirm: resolvedConfirmLabel,
      cancel: resolvedCancelLabel,
      acknowledge: resolvedAcknowledgeLabel,
    },
    actions: {
      hasAcknowledgeAction,
      hasConfirmCancelActions,
    },
    handlers: {
      handleConfirmClick,
      handleCancelClick,
      handleAcknowledgeClick,
    },
  };
};
