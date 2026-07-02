import { Component } from 'react';

import ErrorFallback from './ErrorFallback';

import type { ErrorBoundaryProps, ErrorBoundaryState } from './ErrorBoundary.types';
import type { ErrorInfo, ReactNode } from 'react';

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Always log React errors for debugging and monitoring purposes.
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught an error:', error, info);

    this.setState({
      errorInfo: info,
    });

    // Allow consumers to forward the error to external monitoring services.
    this.props.onError?.(error, info);
  }

  private readonly handleReload = () => {
    window.location.reload();
  };

  render(): ReactNode {
    const { children, fallback } = this.props;
    const { hasError, error, errorInfo } = this.state;

    if (!hasError || !error) {
      return children;
    }

    if (typeof fallback === 'function') {
      return fallback(error, errorInfo, this.handleReload);
    }

    if (fallback) {
      return fallback;
    }

    return <ErrorFallback error={error} errorInfo={errorInfo} onReload={this.handleReload} />;
  }
}
