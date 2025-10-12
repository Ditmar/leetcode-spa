import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AvatarMenu } from './AvatarMenu';
import type { AvatarMenuItem } from './AvatarMenu.types';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

const mockLogout = vi.fn();
const mockSettings = vi.fn();

const mockMenuItems: AvatarMenuItem[] = [
  { label: 'Configuración', onClick: mockSettings, 'data-testid': 'settings-option' },
  { label: 'Cerrar Sesión', onClick: mockLogout, 'data-testid': 'logout-option', divider: true },
];

const mockProps = {
  avatarUrl: 'https://images.unsplash.com/photo-1749989402507-1d8a8e98bb14?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcmZpbCUyMGRlJTIwaG9tYnJlfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000',
  username: 'Test User',
  menuItems: mockMenuItems,
  'data-testid': 'user-avatar-button',
};

describe('AvatarMenu', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('debe renderizar el botón con avatar y nombre, menú cerrado inicialmente', () => {
    render(<AvatarMenu {...mockProps} />);
    const avatarButton = screen.getByTestId('user-avatar-button');
    expect(avatarButton).toBeInTheDocument();
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    expect(avatarButton).toHaveAttribute('aria-expanded', 'false');
  });

  test('debe abrir y cerrar el menú correctamente al hacer clic en el avatar', async () => {
    render(<AvatarMenu {...mockProps} />);
    const avatarButton = screen.getByTestId('user-avatar-button');

    await userEvent.click(avatarButton);
    const menu = await screen.findByRole('menu');
    expect(menu).toBeVisible();
    expect(screen.getByText('Configuración')).toBeInTheDocument();
    expect(avatarButton).toHaveAttribute('aria-expanded', 'true');

    await userEvent.click(avatarButton);
    await waitFor(() => expect(screen.queryByRole('menu')).not.toBeInTheDocument());
    expect(avatarButton).toHaveAttribute('aria-expanded', 'false');
  });

  test('debe ejecutar callback del ítem y cerrar menu despues del clic', async () => {
    render(<AvatarMenu {...mockProps} />);
    const avatarButton = screen.getByTestId('user-avatar-button');

    await userEvent.click(avatarButton);
    const logoutItem = await screen.findByTestId('logout-option');
    await userEvent.click(logoutItem);

    expect(mockLogout).toHaveBeenCalledTimes(1);
    expect(mockSettings).not.toHaveBeenCalled();

    await waitFor(() => expect(screen.queryByRole('menu')).not.toBeInTheDocument());
  });

  test('debe usar los ítems por defecto si no se pasan menuItems', async () => {
    render(<AvatarMenu avatarUrl={mockProps.avatarUrl} username={mockProps.username} />);
    const avatarButton = screen.getByTestId('avatar-menu');
    await userEvent.click(avatarButton);

    const profileItem = await screen.findByText('Mi Perfil');
    expect(profileItem).toBeInTheDocument();
  });

  test('debe renderizar correctamente cuando no se pasa avatarUrl', () => {
    render(<AvatarMenu avatarUrl="" username="Usuario Fallback" />);
    expect(screen.getByTestId('PersonIcon')).toBeInTheDocument();
  });

  test('debe manejar menú vacío y items deshabilitados', async () => {
    const disabledItems: AvatarMenuItem[] = [
      { label: 'Opción Deshabilitada', onClick: () => { }, disabled: true, 'data-testid': 'disabled-item' },
    ];
    render(<AvatarMenu avatarUrl={mockProps.avatarUrl} username="Usuario" menuItems={disabledItems} />);
    const avatarButton = screen.getByRole('button');
    await userEvent.click(avatarButton);
    const menuItem = await screen.findByTestId('disabled-item');
    expect(menuItem).toHaveAttribute('aria-disabled', 'true');
  });

  test('debe pasar fullWidth a AvatarMenuRoot y AvatarContainer', () => {
    render(<AvatarMenu {...mockProps} fullWidth={true} />);
    const avatarButton = screen.getByTestId('user-avatar-button');

    expect(avatarButton).toHaveAttribute('class');
    expect(avatarButton).toBeInTheDocument();

    const avatarContainer = avatarButton.querySelector('div');
    expect(avatarContainer).toBeInTheDocument();
  });
});