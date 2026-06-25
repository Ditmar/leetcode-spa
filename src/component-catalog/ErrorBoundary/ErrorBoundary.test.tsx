import '@testing-library/jest-dom/vitest';

import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import ErrorBoundary from './ErrorBoundary';

const BrokenComponent = () => {
  throw new Error('Test render error');
};

describe('ErrorBoundary', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <p>Safe content</p>
      </ErrorBoundary>
    );

    expect(screen.getByText('Safe content')).toBeInTheDocument();
  });

  it('renders fallback UI when a child throws', () => {
    vi.spyOn(console, 'error').mockImplementation(() => undefined);

    render(
      <ErrorBoundary>
        <BrokenComponent />
      </ErrorBoundary>
    );

    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });

  it('calls onError callback when a child throws', () => {
    const onError = vi.fn();

    vi.spyOn(console, 'error').mockImplementation(() => undefined);

    render(
      <ErrorBoundary onError={onError}>
        <BrokenComponent />
      </ErrorBoundary>
    );

    expect(onError).toHaveBeenCalledTimes(1);
    expect(onError.mock.calls[0][0]).toBeInstanceOf(Error);
    expect(onError.mock.calls[0][0].message).toBe('Test render error');
    expect(onError.mock.calls[0][1]).toHaveProperty('componentStack');
  });

  it('renders a custom fallback node when provided', () => {
    vi.spyOn(console, 'error').mockImplementation(() => undefined);

    render(
      <ErrorBoundary fallback={<p>Custom fallback</p>}>
        <BrokenComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText('Custom fallback')).toBeInTheDocument();
  });

  it('renders a custom fallback render function when provided', () => {
    vi.spyOn(console, 'error').mockImplementation(() => undefined);

    render(
      <ErrorBoundary fallback={(error) => <p>Custom fallback render: {error.message}</p>}>
        <BrokenComponent />
      </ErrorBoundary>
    );

    expect(
      screen.getByText('Custom fallback render: Test render error')
    ).toBeInTheDocument();
  });
});
