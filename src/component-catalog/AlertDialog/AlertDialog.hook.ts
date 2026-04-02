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
>;

export const useAlertDialog = ({
  confirmLabel,
  cancelLabel,
  acknowledgeLabel,
  showConfirmButton = false,
  showCancelButton = false,
  showAcknowledgeButton = false,
}: UseAlertDialogParams) => {
  const resolvedConfirmLabel = confirmLabel ?? DEFAULT_CONFIRM_LABEL;
  const resolvedCancelLabel = cancelLabel ?? DEFAULT_CANCEL_LABEL;
  const resolvedAcknowledgeLabel =
    acknowledgeLabel ?? DEFAULT_ACKNOWLEDGE_LABEL;

  const hasAcknowledgeAction = showAcknowledgeButton;
  const hasConfirmCancelActions = showConfirmButton || showCancelButton;

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
  };
};