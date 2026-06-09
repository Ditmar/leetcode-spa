import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';

import { AuthModal } from './AuthModal';

describe('AuthModal Component', () => {
  const mockOnClose = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders sign in mode by default', () => {
    render(<AuthModal isOpen={true} onClose={mockOnClose} />);
    expect(screen.getByText('Welcome Back')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Sign In' })).toBeInTheDocument();
  });

  it('toggles to sign up mode', () => {
    render(<AuthModal isOpen={true} onClose={mockOnClose} />);
    const toggleButton = screen.getByText('Sign Up');
    fireEvent.click(toggleButton);
    expect(screen.getByText('Create Account')).toBeInTheDocument();
  });

  it('calls onClose when close icon is clicked', () => {
    render(<AuthModal isOpen={true} onClose={mockOnClose} />);
    const closeBtn = screen.getByRole('button', { name: /close modal/i });
    fireEvent.click(closeBtn);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('displays validation errors on empty submit', async () => {
    render(<AuthModal isOpen={true} onClose={mockOnClose} />);
    const submitBtn = screen.getByRole('button', { name: 'Sign In' });

    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText('Email is required')).toBeInTheDocument();
    });
    expect(screen.getByText('Password must be at least 8 characters')).toBeInTheDocument();
  });

  it('handles submit flow and shows loading state', async () => {
    render(<AuthModal isOpen={true} onClose={mockOnClose} />);

    const emailInput = screen.getByLabelText(/Email/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    const submitBtn = screen.getByRole('button', { name: 'Sign In' });

    fireEvent.change(emailInput, { target: { value: 'dev@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'ValidPassword123!' } });

    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(submitBtn).toBeDisabled();
    });
  });
});
