import { ThemeProvider } from '@mui/material/styles';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { loginTheme } from '../../style-library/theme/login-theme';

import { LoginPage } from './LoginPage';

vi.mock('../../assets/Facebook.svg', () => ({ default: 'Facebook.svg' }));
vi.mock('../../assets/Github.svg', () => ({ default: 'Github.svg' }));
vi.mock('../../assets/Google.svg', () => ({ default: 'Google.svg' }));

describe('LoginPage', () => {
  const renderComponent = (props = {}) =>
    render(
      <ThemeProvider theme={loginTheme}>
        <LoginPage {...props} />
      </ThemeProvider>
    );

  it('renders email, password fields and the login button', () => {
    renderComponent();
    expect(screen.getByPlaceholderText('Mail Id')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /LogIn/i })).toBeInTheDocument();
  });

  it('renders forgot password link and social icons', () => {
    renderComponent();
    expect(screen.getByText('Forget Password ?')).toBeInTheDocument();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
    expect(screen.getByAltText('Google')).toBeInTheDocument();
    expect(screen.getByAltText('GitHub')).toBeInTheDocument();
    expect(screen.getByAltText('Facebook')).toBeInTheDocument();
  });

  it('shows validation errors for empty input fields', async () => {
    renderComponent();
    const loginButton = screen.getByRole('button', { name: /LogIn/i });

    fireEvent.click(loginButton);

    expect(await screen.findByText('Email is required.')).toBeInTheDocument();
    expect(await screen.findByText('Password is required.')).toBeInTheDocument();
  });

  it('enables the button when form is valid and calls onSubmit', () => {
    const handleSubmit = vi.fn();
    renderComponent({ onSubmit: handleSubmit });

    const emailInput = screen.getByPlaceholderText('Mail Id');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByRole('button', { name: /LogIn/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(loginButton).not.toBeDisabled();

    fireEvent.click(loginButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      emailOrUsername: 'test@example.com',
      password: 'password123',
    });
  });

  it('disables the button when loading', () => {
    renderComponent({ loading: true });
    const loginButton = screen.getByRole('button');
    expect(loginButton).toBeDisabled();
  });
});
