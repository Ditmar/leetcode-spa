
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

import '@testing-library/jest-dom';
import LoginPage from './LoginPage';
import { ERROR_MESSAGES } from './LoginPage.constants';

global.fetch = vi.fn();

let locationHref = '';

beforeEach(() => {
  Object.defineProperty(window, 'location', {
    configurable: true,
    value: {
      ...window.location,
      get href() {
        return locationHref;
      },
      set href(value: string) {
        locationHref = value;
      },
    },
  });

  locationHref = '';

  vi.mocked(global.fetch).mockClear();

  render(<LoginPage />);
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('LoginPage (Sin React-Hook-Form)', () => {
  const getEmailInput = () => screen.getByLabelText(/Email or Username/i);
  const getPasswordInput = () => screen.getByLabelText(/Password/i);
  const getLoginButton = () => screen.getByRole('button', { name: 'Login' });

  it('muestra errores de validación si los campos están vacíos al enviar', async () => {
    fireEvent.click(getLoginButton());

    expect(await screen.findByText(ERROR_MESSAGES.REQUIRED_FIELD)).toBeInTheDocument();
    expect(screen.getAllByText(ERROR_MESSAGES.REQUIRED_FIELD).length).toBe(2);
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it('muestra error de formato de email inválido', async () => {
    fireEvent.change(getEmailInput(), { target: { value: 'emailinvalido' } });
    fireEvent.change(getPasswordInput(), { target: { value: 'password123' } });
    fireEvent.click(getLoginButton());

    expect(await screen.findByText(ERROR_MESSAGES.INVALID_EMAIL)).toBeInTheDocument();
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it('deshabilita el botón y muestra spinner durante el envío', async () => {
    vi.mocked(global.fetch).mockImplementation(
      () =>
        new Promise((resolve) =>
          setTimeout(
            () =>
              resolve({
                ok: true,
                json: () => Promise.resolve({ token: 'fake-token' }),
              } as Response),
            100
          )
        )
    );

    fireEvent.change(getEmailInput(), { target: { value: 'test@user.com' } });
    fireEvent.change(getPasswordInput(), { target: { value: 'password123' } });
    fireEvent.click(getLoginButton());

    expect(getLoginButton()).toBeDisabled();
    expect(screen.getByRole('progressbar')).toBeInTheDocument();

    await waitFor(() => {
      expect(getLoginButton()).not.toBeDisabled();
    });
  });

  it('llama a la API y redirige al dashboard en un login exitoso', async () => {
    vi.mocked(global.fetch).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ token: 'fake-token' }),
    } as Response);

    fireEvent.change(getEmailInput(), { target: { value: 'test@user.com' } });
    fireEvent.change(getPasswordInput(), { target: { value: 'password123' } });
    fireEvent.click(getLoginButton());

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        '/auth/login',
        expect.objectContaining({
          method: 'POST',
        })
      );
    });

    expect(locationHref).toBe('/dashboard');
  });

  it('muestra un Alert de MUI si la API falla', async () => {
    vi.mocked(global.fetch).mockResolvedValue({
      ok: false,
      json: () => Promise.resolve({ message: 'Usuario no encontrado' }),
    } as Response);

    fireEvent.change(getEmailInput(), { target: { value: 'test@user.com' } });
    fireEvent.change(getPasswordInput(), { target: { value: 'wrongpassword' } });
    fireEvent.click(getLoginButton());

    const alert = await screen.findByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveTextContent('Usuario no encontrado');
    expect(getLoginButton()).not.toBeDisabled();
    expect(locationHref).not.toBe('/dashboard');
  });
});
