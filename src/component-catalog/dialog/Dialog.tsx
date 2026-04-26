import { 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  Typography,
  IconButton,
  useMediaQuery,
  useTheme
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
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
    maxWidth = 'sm',
    fullScreen = false,
  } = props;

  // Hook para detectar si la pantalla es menor a 600px (sm)
  const theme = useTheme();
  

  const handleMuiDialogClose = (_: any, reason: string) => {
    // Si es persistente, no cerramos por click afuera ni por la tecla Escape
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
      maxWidth={maxWidth}
      fullWidth
      fullScreen={false}
    >
      {title && (
        <DialogTitle data-testid="mui-dialog-title" sx={{ m: 0, p: 2 }}>
          <Typography variant="h6" component="div" fontWeight="700">
            {title}
          </Typography>
          {showCloseButton && (
            <IconButton
              aria-label="close-dialog"
              onClick={onClose}
              sx={{ position: 'absolute', right: 8, top: 8 }}
            >
              <CloseIcon />
            </IconButton>
          )}
        </DialogTitle>
      )}

      <DialogContent 
        data-testid="mui-dialog-content" 
        dividers 
        sx={{ border: 'none' }}
      >
        {description && (
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {description}
          </Typography>
        )}
        {children}
      </DialogContent>

      {actions && (
        <DialogActions 
          data-testid="mui-dialog-actions" 
          sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1 }}
        >
          {actions}
        </DialogActions>
      )}
    </StyledMuiDialog>
  );
};

export { Dialog };