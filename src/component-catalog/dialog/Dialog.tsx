import CloseIcon from '@mui/icons-material/Close';
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';

import { DIALOG_SIZES } from './Dialog.constants';
import { StyledMuiDialog } from './Dialog.styles';
import { type DialogProps } from './Dialog.types';
const Dialog = (props: DialogProps) => {
  const {
    isOpen,
    onClose,
    title,
    description,
    children,
    actions,
    showCloseButton = true,
    persistent = false,
    maxWidth = DIALOG_SIZES.SM,
  } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Corregido: se cambió 'any' por 'object' para cumplir con las reglas de Lint
  const handleMuiDialogClose = (_: object, reason: string) => {
    if (persistent && (reason === 'backdropClick' || reason === 'escapeKeyDown')) {
      return;
    }
    onClose();
  };

  return (
    <StyledMuiDialog
      data-testid="mui-dialog-container"
      open={isOpen}
      onClose={handleMuiDialogClose}
      // Corregido: se eliminó 'as any' y se usó un tipado explícito para Material UI
      maxWidth={
        maxWidth === DIALOG_SIZES.FULL_SCREEN
          ? false
          : (maxWidth as 'xs' | 'sm' | 'md' | 'lg' | 'xl')
      }
      fullWidth
      fullScreen={isMobile || maxWidth === DIALOG_SIZES.FULL_SCREEN}
      aria-labelledby="dialog-title"
    >
      {title && (
        <DialogTitle id="dialog-title" data-testid="mui-dialog-title" sx={{ m: 0, p: 2 }}>
          <Typography variant="h6" component="div" fontWeight="700">
            {title}
          </Typography>
          {showCloseButton && (
            <IconButton
              aria-label="close"
              onClick={onClose}
              sx={{ position: 'absolute', right: theme.spacing(1), top: theme.spacing(1) }}
            >
              <CloseIcon />
            </IconButton>
          )}
        </DialogTitle>
      )}

      <DialogContent dividers data-testid="mui-dialog-content" sx={{ border: 'none', p: 2 }}>
        {description && (
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {description}
          </Typography>
        )}
        {children}
      </DialogContent>

      {actions && (
        <DialogActions data-testid="mui-dialog-actions" sx={{ p: 2 }}>
          {actions}
        </DialogActions>
      )}
    </StyledMuiDialog>
  );
};

export { Dialog };
