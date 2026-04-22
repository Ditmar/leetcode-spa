import { ThemeProvider, createTheme } from '@mui/material';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { Label } from './Label';

const theme = createTheme();

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe('Label Component', () => {
  it('renders children correctly', () => {
    renderWithTheme(<Label>Nombre</Label>);
    expect(screen.getByText(/Nombre/i)).toBeInTheDocument();
  });

  it('shows asterisk when required is true', () => {
    renderWithTheme(<Label required>Email</Label>);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('shows optional text when optional is true', () => {
    renderWithTheme(<Label optional>Teléfono</Label>);
    expect(screen.getByText('(opcional)')).toBeInTheDocument();
  });

  it('applies error styles when error prop is true', () => {
    renderWithTheme(<Label error>Error Label</Label>);
    const label = screen.getByText('Error Label').closest('label');
    expect(label).toHaveClass('Mui-error');
  });

  it('has the correct htmlFor attribute', () => {
    renderWithTheme(<Label htmlFor="input-id">Username</Label>);
    const labelElement = screen.getByText(/Username/i).closest('label');
    expect(labelElement).toHaveAttribute('for', 'input-id');
  });
});
