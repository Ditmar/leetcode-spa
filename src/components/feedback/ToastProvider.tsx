import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';

import { registerToastListener } from './toastService';

import type { AlertColor, SnackbarOrigin } from '@mui/material';
import type { ReactNode } from 'react';

interface ToastOptions {
  type?: AlertColor;
  duration?: number;
  position?: SnackbarOrigin;
}

interface ToastContextValue {
  showToast: (message: string, options?: ToastOptions) => void;
}

const defaultPosition: SnackbarOrigin = {
  vertical: 'bottom',
  horizontal: 'right',
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState<AlertColor>('info');
  const [duration, setDuration] = useState(3000);
  const [position, setPosition] = useState<SnackbarOrigin>(defaultPosition);

  const showToast = useCallback((message: string, options?: ToastOptions) => {
    setMessage(message);
    setType(options?.type ?? 'info');
    setDuration(options?.duration ?? 3000);
    setPosition(options?.position ?? defaultPosition);
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    registerToastListener(showToast);

    return () => {
      registerToastListener(null);
    };
  }, [showToast]);
  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <Snackbar
        open={open}
        autoHideDuration={duration}
        onClose={handleClose}
        anchorOrigin={position}
      >
        <Alert onClose={handleClose} severity={type} variant="filled">
          {message}
        </Alert>
      </Snackbar>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used inside ToastProvider');
  }

  return context;
}
