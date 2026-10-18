import '@testing-library/jest-dom/vitest';

import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import ErrorState from './ErrorState';

import type { ApiError } from '../../services/api/apiClient.types';

const mockError: ApiError = {
  message: 'Failed to load problems',
  code: 'INTERNAL_ERROR',
  status: 500,
};

describe('ErrorState', () => {
  it('renders the error message', () => {
    render(<ErrorState error={mockError} onRetry={() => {}} />);

    expect(screen.getByText('Failed to load problems')).toBeInTheDocument();
  });

  it('renders the request ID when provided', () => {
    render(<ErrorState error={mockError} onRetry={() => {}} requestId="req-123" />);

    expect(screen.getByText('Request ID: req-123')).toBeInTheDocument();
  });

  it('calls onRetry when the retry button is clicked', () => {
    const onRetry = vi.fn();

    render(<ErrorState error={mockError} onRetry={onRetry} />);

    fireEvent.click(screen.getByRole('button', { name: 'Retry' }));

    expect(onRetry).toHaveBeenCalledOnce();
  });
});
