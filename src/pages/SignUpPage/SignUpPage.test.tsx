import { ThemeProvider } from '@mui/material/styles';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

// Mocking SVGs for Vitest
vi.mock('./assets/Facebook.svg', () => ({ default: 'Facebook.svg' }));
vi.mock('./assets/Github.svg', () => ({ default: 'Github.svg' }));
vi.mock('./assets/Google.svg', () => ({ default: 'Google.svg' }));
vi.mock('./assets/Facebook.svg?url', () => ({ default: 'Facebook.svg' }));
vi.mock('./assets/Github.svg?url', () => ({ default: 'Github.svg' }));
vi.mock('./assets/Google.svg?url', () => ({ default: 'Google.svg' }));

import signupTheme from '../../style-library/theme/signup-theme';

import { SignUpPage } from './SignUpPage';

describe('SignUpPage', () => {
  const renderComponent = () =>
    render(
      <ThemeProvider theme={signupTheme}>
        <SignUpPage />
      </ThemeProvider>
    );

  it('renders all input fields and the button', () => {
    renderComponent();
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument();
  });

  it('renders login link and social icons', () => {
    renderComponent();
    expect(screen.getByText('Log In')).toBeInTheDocument();
    expect(screen.getByAltText('Google')).toBeInTheDocument();
    expect(screen.getByAltText('GitHub')).toBeInTheDocument();
    expect(screen.getByAltText('Facebook')).toBeInTheDocument();
  });

  it('shows validation errors for invalid input', async () => {
    renderComponent();
    const registerButton = screen.getByRole('button', { name: /register/i });

    fireEvent.click(registerButton);

    expect(await screen.findByText('Please enter a valid email address.')).toBeInTheDocument();
    expect(await screen.findByText('Username is required.')).toBeInTheDocument();
    expect(await screen.findByText(/Password must be at least/)).toBeInTheDocument();
  });

  it('enables the button when form is valid and calls onSubmit', () => {
    const handleSubmit = vi.fn();
    render(
      <ThemeProvider theme={signupTheme}>
        <SignUpPage onSubmit={handleSubmit} />
      </ThemeProvider>
    );

    const emailInput = screen.getByPlaceholderText('Enter your email');
    const usernameInput = screen.getByPlaceholderText('Enter your username');
    const passwordInput = screen.getByPlaceholderText('Enter your password');
    const registerButton = screen.getByRole('button', { name: /register/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(registerButton).not.toBeDisabled();

    fireEvent.click(registerButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      username: 'testuser',
      password: 'password123',
    });
  });

  it('disables the button when loading', () => {
    render(
      <ThemeProvider theme={signupTheme}>
        <SignUpPage loading={true} />
      </ThemeProvider>
    );
    const registerButton = screen.getByRole('button');
    expect(registerButton).toBeDisabled();
  });
});
