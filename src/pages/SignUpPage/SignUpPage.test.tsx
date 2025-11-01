import { ThemeProvider } from '@mui/material/styles';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import theme from '../../style-library/theme/theme';

import { SignUpPage } from './SignUpPage';

describe('SignUpPage', () => {
  it('renders all input fields and the button', () => {
    render(
      <ThemeProvider theme={theme}>
        <SignUpPage />
      </ThemeProvider>
    );

    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument();
  });

  it('renders login link and social icons', () => {
    render(
      <ThemeProvider theme={theme}>
        <SignUpPage />
      </ThemeProvider>
    );

    expect(screen.getByText('Log In')).toBeInTheDocument();
    expect(screen.getByAltText('Google')).toBeInTheDocument();
    expect(screen.getByAltText('GitHub')).toBeInTheDocument();
    expect(screen.getByAltText('Facebook')).toBeInTheDocument();
  });
});
