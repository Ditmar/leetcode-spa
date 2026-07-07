import type { AlertColor, SnackbarOrigin } from '@mui/material';

export interface ToastOptions {
  type?: AlertColor;
  duration?: number;
  position?: SnackbarOrigin;
}

type ToastListener = (message: string, options?: ToastOptions) => void;

let listener: ToastListener | null = null;

export function registerToastListener(callback: ToastListener | null) {
  listener = callback;
}

export function showGlobalToast(message: string, options?: ToastOptions) {
  listener?.(message, options);
}
