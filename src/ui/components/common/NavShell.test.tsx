import { act, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import authService from '../../../services/auth/authService.active';
import {
  AUTH_SIGN_IN_EVENT,
  AUTH_SIGN_OUT_EVENT,
} from '../../../services/auth/authService.constants';

import NavShell, { handleSignOut } from './NavShell';

vi.mock('../../../services/auth/authService.active', () => ({
  default: { hydrateFromServer: vi.fn(), signOut: vi.fn() },
}));

describe('handleSignOut', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('completes logout before refreshing the page', async () => {
    const order: string[] = [];
    const reloadPage = vi.fn(() => order.push('reload'));
    vi.mocked(authService.signOut).mockImplementation(async () => {
      order.push('signOut');
    });

    await handleSignOut(reloadPage);

    expect(order).toEqual(['signOut', 'reload']);
  });
});

describe('NavShell session', () => {
  const user = {
    id: 'test-user',
    username: 'Learner',
    email: 'learner@example.test',
    role: 'user' as const,
  };

  it('restores a session when the server did not pass a user', async () => {
    vi.mocked(authService.hydrateFromServer).mockResolvedValue({ user });
    render(<NavShell />);
    expect(await screen.findByRole('button', { name: 'Open user menu' })).toBeInTheDocument();
  });

  it('updates when a separate page component signs in or out', async () => {
    vi.mocked(authService.hydrateFromServer).mockResolvedValue(null);
    render(<NavShell />);
    await act(async () => {});
    expect(screen.getByRole('link', { name: 'Sign in' })).toBeInTheDocument();

    act(() => {
      window.dispatchEvent(new CustomEvent(AUTH_SIGN_IN_EVENT, { detail: user }));
    });
    expect(screen.getByRole('button', { name: 'Open user menu' })).toBeInTheDocument();

    act(() => {
      window.dispatchEvent(new CustomEvent(AUTH_SIGN_OUT_EVENT));
    });
    expect(screen.getByRole('link', { name: 'Sign in' })).toBeInTheDocument();
  });
});
