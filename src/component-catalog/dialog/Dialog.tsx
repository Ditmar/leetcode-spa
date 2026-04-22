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
import React, { useId } from 'react';

import { DIALOG_SIZES } from './Dialog.constants';
import { StyledMuiDialog } from './Dialog.styles';
import { type DialogProps } from './Dialog.types';

const Dialog = (props: DialogProps) => {
  const {
    open,
    onClose,
    title,
    description,
    children,
    actions,
    showCloseButton = true,
    persistent = false,
    maxWidth = DIALOG_SIZES.SM,
    fullScreen = false, // ✅ IMPORTANTE (fix PR)
  } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const titleId = useId();
  const descriptionId = useId();

  const handleMuiDialogClose = (event: object, reason: 'backdropClick' | 'escapeKeyDown') => {
    if (persistent && (reason === 'backdropClick' || reason === 'escapeKeyDown')) {
      return;
    }

    onClose?.(event, reason);
  };
  const isFullScreen = fullScreen || isMobile;

  return (
    <StyledMuiDialog
      open={open}
      onClose={handleMuiDialogClose}
      maxWidth={isFullScreen ? false : maxWidth}
      fullWidth
      fullScreen={isFullScreen}
      aria-labelledby={title ? titleId : undefined}
      aria-describedby={description ? descriptionId : undefined}
    >
      {title && (
        <DialogTitle id={titleId} sx={{ m: 0, p: 2 }}>
          <Typography variant="h6" component="div" fontWeight="700">
            {title}
          </Typography>

          {showCloseButton && (
            <IconButton
              aria-label="close dialog"
              onClick={(e) => onClose?.(e, 'escapeKeyDown')}
              sx={{
                position: 'absolute',
                right: theme.spacing(1),
                top: theme.spacing(1),
                color: 'text.secondary',
              }}
            >
              <CloseIcon />
            </IconButton>
          )}
        </DialogTitle>
      )}

      <DialogContent dividers sx={{ border: 'none', p: 2 }}>
        {description && (
          <Typography id={descriptionId} variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {description}
          </Typography>
        )}

        {children}
      </DialogContent>

      {actions && <DialogActions sx={{ p: 2 }}>{actions}</DialogActions>}
    </StyledMuiDialog>
  );
};

export { Dialog };
