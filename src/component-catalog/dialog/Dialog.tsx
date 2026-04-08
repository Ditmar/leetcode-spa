import {
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { StyledDialog } from './Dialog.styles';
import { type CustomDialogProps } from './Dialog.types';

const Dialog = (props: CustomDialogProps) => {
  const {
    open = true, // 👈 SIEMPRE ABIERTO (lo que te pidieron)
    onClose,
    title,
    description,
    children,
    actions,
    persistent = false,
    ...rest
  } = props;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClose = (
    event: object,
    reason: 'backdropClick' | 'escapeKeyDown'
  ) => {
    if (persistent && (reason === 'backdropClick' || reason === 'escapeKeyDown')) {
      return;
    }
    onClose?.(event, reason);
  };

  return (
    <StyledDialog
      data-testid="dialog"
      open={open}
      onClose={handleClose}
      fullScreen={fullScreen}
      fullWidth
      maxWidth="sm"
      {...rest}
    >
      {title && (
        <DialogTitle>
          {title}
          {!persistent && (
            <IconButton
              onClick={(e) => onClose?.(e, 'escapeKeyDown')}
              sx={{ position: 'absolute', right: 8, top: 8 }}
            >
              <CloseIcon />
            </IconButton>
          )}
        </DialogTitle>
      )}

      <DialogContent>
        {description && <p>{description}</p>}
        {children}
      </DialogContent>

      {actions && <DialogActions>{actions}</DialogActions>}
    </StyledDialog>
  );
};

export { Dialog };