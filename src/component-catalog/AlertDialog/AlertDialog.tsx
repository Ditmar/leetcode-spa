import { Box, Button, DialogContentText, Typography } from '@mui/material';
import { useId } from 'react';

import { DEFAULT_ALERT_DIALOG_SEVERITY } from './AlertDialog.constants';
import { useAlertDialog } from './AlertDialog.hook';
import {
  AlertDialogHeader,
  AlertDialogSeverityDot,
  AlertDialogTitleContent,
  StyledAlertDialog,
  StyledDialogActions,
  StyledDialogContent,
  StyledDialogTitle,
} from './AlertDialog.styles';
import type { AlertDialogProps } from './AlertDialog.types';
import { getAlertDialogIds } from './AlertDialog.utils';

const AlertDialog = ({
  open,
  onClose,
  title,
  description,
  severity = DEFAULT_ALERT_DIALOG_SEVERITY,
  confirmLabel,
  cancelLabel,
  acknowledgeLabel,
  showConfirmButton = false,
  showCancelButton = false,
  showAcknowledgeButton = false,
  onConfirm,
  onCancel,
  onAcknowledge,
  confirmButtonProps,
  cancelButtonProps,
  acknowledgeButtonProps,
  testId,
  maxWidth = 'sm',
  fullWidth = true,
  ...dialogProps
}: AlertDialogProps) => {
  const reactId = useId().replace(/:/g, '');
  const baseId = testId ?? `alert-dialog-${reactId}`;
  const { titleId, descriptionId } = getAlertDialogIds(baseId);

  const { labels, actions } = useAlertDialog({
    confirmLabel,
    cancelLabel,
    acknowledgeLabel,
    showConfirmButton,
    showCancelButton,
    showAcknowledgeButton,
  });

  const handleCancelClick = () => {
    onCancel?.();
  };

  const handleConfirmClick = () => {
    onConfirm?.();
  };

  const handleAcknowledgeClick = () => {
    onAcknowledge?.();
  };

  return (
    <StyledAlertDialog
      open={open}
      onClose={onClose}
      role="alertdialog"
      aria-labelledby={titleId}
      aria-describedby={description ? descriptionId : undefined}
      data-testid={testId}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      {...dialogProps}
    >
      <StyledDialogTitle id={titleId}>
        <AlertDialogHeader>
          <AlertDialogSeverityDot
            sx={{
              backgroundColor: (theme) => theme.palette[severity].main,
            }}
          />

          <AlertDialogTitleContent>
            {typeof title === 'string' || typeof title === 'number' ? (
              <Typography variant="h6" component="span">
                {title}
              </Typography>
            ) : (
              title
            )}
          </AlertDialogTitleContent>
        </AlertDialogHeader>
      </StyledDialogTitle>

      {description ? (
        <StyledDialogContent>
          {typeof description === 'string' || typeof description === 'number' ? (
            <DialogContentText id={descriptionId}>
              {description}
            </DialogContentText>
          ) : (
            <Box id={descriptionId}>{description}</Box>
          )}
        </StyledDialogContent>
      ) : null}

      <StyledDialogActions>
        {actions.hasConfirmCancelActions ? (
          <>
            {showCancelButton ? (
              <Button
                variant="text"
                color="inherit"
                onClick={handleCancelClick}
                {...cancelButtonProps}
              >
                {labels.cancel}
              </Button>
            ) : null}

            {showConfirmButton ? (
              <Button
                variant="contained"
                color={severity}
                onClick={handleConfirmClick}
                {...confirmButtonProps}
              >
                {labels.confirm}
              </Button>
            ) : null}
          </>
        ) : null}

        {actions.hasAcknowledgeAction ? (
          <Button
            variant="contained"
            color={severity}
            onClick={handleAcknowledgeClick}
            {...acknowledgeButtonProps}
          >
            {labels.acknowledge}
          </Button>
        ) : null}
      </StyledDialogActions>
    </StyledAlertDialog>
  );
};

export default AlertDialog;