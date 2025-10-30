// src/pages/SignUpPage/SignUpPage.test.tsx

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest'; // Asegúrate de importar 'vi' si no está importado

// Mocks de los SVGs (Necesarios para Vitest)
// Mock both plain imports and `?url` virtual imports used by Vite.
vi.mock('./assets/google.svg', () => ({ default: 'google.svg' }));
vi.mock('./assets/github.svg', () => ({ default: 'github.svg' }));
vi.mock('./assets/facebook.svg', () => ({ default: 'facebook.svg' }));
// Mocks for Vite `?url` imports that may be used in the component.
vi.mock('./assets/google.svg?url', () => ({ default: 'google.svg' }));
vi.mock('./assets/github.svg?url', () => ({ default: 'github.svg' }));
vi.mock('./assets/facebook.svg?url', () => ({ default: 'facebook.svg' }));
vi.mock('../../components/Logo/Logo', () => ({ Logo: () => <div data-testid="logo-mock" /> }));

// Mocks para componentes que no están presentes en el workspace (evitan resolver imports)
vi.mock('../../components/FormInput/FormInput', () => ({
  FormInput: (props: React.ComponentProps<'input'>) => (
    <input
      data-testid={`form-input-mock-${props.placeholder ?? 'input'}`}
      placeholder={props.placeholder}
      value={props.value as string | number | readonly string[] | undefined}
      onChange={props.onChange as unknown as (e: React.ChangeEvent<HTMLInputElement>) => void}
      type={props.type}
    />
  ),
}));

vi.mock('../../components/PrimaryButton/PrimaryButton', () => ({
  PrimaryButton: (props: React.ComponentProps<'button'> & { loading?: boolean }) => (
    // Simulamos un button que acepta children, onClick, disabled y aria-busy
    <button
      data-testid="primary-button-mock"
      onClick={props.onClick}
      disabled={props.disabled}
      aria-busy={props.loading}
    >
      {props.children}
    </button>
  ),
}));

// Importar el componente después de registrar los mocks para que las
// llamadas a vi.mock intercepten los imports durante la carga.
import { SignUpPage } from './SignUpPage';

const theme = createTheme();
const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe('SignUpPage', () => {
  it('renders all input fields and the button', () => {
    renderWithTheme(<SignUpPage />);

    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument();
  });

  it('renders login link and social icons', () => {
    renderWithTheme(<SignUpPage />);

    // Links de navegación y legales
    expect(screen.getByText('Log In')).toBeInTheDocument();
    expect(screen.getByText(/Privacy Policy/)).toBeInTheDocument();
    expect(screen.getByText(/Terms of Service/)).toBeInTheDocument();

    // Iconos sociales por su alt text
    expect(screen.getByAltText('Google')).toBeInTheDocument();
  });
});
