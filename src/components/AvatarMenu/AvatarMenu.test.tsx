import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, test, vi } from 'vitest';

import { AvatarMenu } from './AvatarMenu';

import type { AvatarMenuItem } from './AvatarMenu.types';

const mockLogout = vi.fn();
const mockSettings = vi.fn();

const USER_MENU_ARIA_LABEL = 'User menu';

const mockMenuItems: AvatarMenuItem[] = [
  { label: 'Settings', onClick: mockSettings, 'data-testid': 'settings-option' },
  { label: 'Sign Out', onClick: mockLogout, 'data-testid': 'logout-option', divider: true },
];

const mockProps = {
  avatarUrl: 'https://test.com/avatar.jpg',
  username: 'Test User',
  menuItems: mockMenuItems,
  'data-testid': 'user-avatar-button',
};

describe('AvatarMenu', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const getAvatarButton = (username: string = mockProps.username) => {
    const nameRegex = new RegExp(`^${USER_MENU_ARIA_LABEL}${username ? ': ' : ''}.*`, 'i');
    return screen.getByRole('button', { name: nameRegex });
  };

  test('should render the button with avatar and name, menu closed initially', () => {
    render(<AvatarMenu {...mockProps} />);
    const avatarButton = getAvatarButton();
    expect(avatarButton).toBeInTheDocument();
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    expect(avatarButton).toHaveAttribute('aria-expanded', 'false');
  });

  test('should open and close the menu correctly on avatar click', async () => {
    render(<AvatarMenu {...mockProps} />);
    const avatarButton = getAvatarButton();
    await userEvent.click(avatarButton);
    const menu = await screen.findByRole('menu');
    expect(menu).toBeVisible();
    expect(avatarButton).toHaveAttribute('aria-expanded', 'true');
    await userEvent.click(avatarButton);
    await waitFor(() => expect(screen.queryByRole('menu')).not.toBeInTheDocument());
    expect(avatarButton).toHaveAttribute('aria-expanded', 'false');
  });

  test('should execute item callback and close menu after click', async () => {
    render(<AvatarMenu {...mockProps} />);
    const avatarButton = getAvatarButton();
    await userEvent.click(avatarButton);
    const logoutItem = await screen.findByTestId('logout-option');
    await userEvent.click(logoutItem);
    expect(mockLogout).toHaveBeenCalledTimes(1);
    expect(mockSettings).not.toHaveBeenCalled();
    await waitFor(() => expect(screen.queryByRole('menu')).not.toBeInTheDocument());
  });

  test('should use default items if menuItems are not passed', async () => {
    render(<AvatarMenu avatarUrl={mockProps.avatarUrl} username={mockProps.username} />);
    const avatarButton = getAvatarButton(mockProps.username);
    await userEvent.click(avatarButton);
    const profileItem = await screen.findByRole('menuitem', { name: 'Profile' });
    expect(profileItem).toBeInTheDocument();
  });

  test('should render correctly when avatarUrl is not passed', () => {
    render(<AvatarMenu avatarUrl="" username="Fallback User" />);
    const avatarButton = getAvatarButton('Fallback User');
    expect(avatarButton).toBeInTheDocument();
  });

  test('should handle empty menu and disabled items', async () => {
    const disabledItems: AvatarMenuItem[] = [
      {
        label: 'Disabled Option',
        onClick: () => {},
        disabled: true,
        'data-testid': 'disabled-item',
      },
    ];
    const username = 'User';
    render(
      <AvatarMenu avatarUrl={mockProps.avatarUrl} username={username} menuItems={disabledItems} />
    );
    const avatarButton = getAvatarButton(username);
    await userEvent.click(avatarButton);
    const menuItem = await screen.findByTestId('disabled-item');
    expect(menuItem).toHaveAttribute('aria-disabled', 'true');
  });

  test('should pass fullWidth to AvatarMenuRoot and AvatarContainer', () => {
    render(<AvatarMenu {...mockProps} fullWidth={true} />);
    const avatarButton = getAvatarButton();
    expect(avatarButton).toHaveAttribute('class');
    expect(avatarButton).toBeInTheDocument();
    const avatarContainer = avatarButton.querySelector('div');
    expect(avatarContainer).toBeInTheDocument();
  });
});
