import type { ErrorInfo, ReactNode } from 'react';

export type ErrorFallbackRender = (
  error: Error,
  errorInfo: ErrorInfo | null,
  resetErrorBoundary: () => void
) => ReactNode;

export interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode | ErrorFallbackRender;
  onError?: (error: Error, info: ErrorInfo) => void;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export interface ErrorFallbackProps {
  error: Error | null;
  errorInfo: ErrorInfo | null;
  onReload: () => void;
}
