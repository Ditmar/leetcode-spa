declare let describe: (name: string, fn: () => void) => void;
declare let it: (name: string, fn: () => void) => void;
declare let expect: (actual: unknown) => {
  toBeInTheDocument: () => void;
  toHaveBeenCalledTimes: (times: number) => void;
};
declare let beforeEach: (fn: () => void) => void;
declare let vi: {
  fn: () => () => void;
  clearAllMocks: () => void;
};

import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

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
});
