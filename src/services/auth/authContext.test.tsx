import { act, render, screen, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { AuthProvider } from './authContext';
import authService from './authService';
import { AUTH_SIGN_OUT_EVENT } from './authService.constants';
import { useAuth } from './useAuth';

import type { AuthSession } from './authService.types';

vi.mock('./authService', () => ({
  default: {
    hydrateFromServer: vi.fn(),
    signIn: vi.fn(),
    signUp: vi.fn(),
    signOut: vi.fn(),
    // If AuthProvider used this, the state could disagree with the session it holds.
    isAuthenticated: vi.fn(() => {
      throw new Error('AuthProvider must not read isAuthenticated() from authService');
    }),
  },
}));

const session = {
  user: { id: 'u1', username: 'erick', email: 'erick@test.dev', role: 'user' },
  accessToken: '',
  expiresAt: Date.now() + 60_000,
} as AuthSession;

function Probe() {
  const { isAuthenticated, isLoading, user } = useAuth();
  if (isLoading) return <p>loading</p>;
  return <p>{isAuthenticated ? `signed-in:${user?.username}` : 'signed-out'}</p>;
}

function renderProvider() {
  return render(
    <AuthProvider>
      <Probe />
    </AuthProvider>
  );
}

describe('AuthProvider (SPA-003: user state in one place)', () => {
  afterEach(() => vi.clearAllMocks());

  it('is signed in when the server session (/api/auth/me) has a user', async () => {
    vi.mocked(authService.hydrateFromServer).mockResolvedValue(session);
    renderProvider();
    expect(await screen.findByText('signed-in:erick')).toBeInTheDocument();
  });

  it('is signed out when there is no server session', async () => {
    vi.mocked(authService.hydrateFromServer).mockResolvedValue(null);
    renderProvider();
    expect(await screen.findByText('signed-out')).toBeInTheDocument();
  });

  it('switches to signed out when the sign-out event fires (final 401 from the BFF)', async () => {
    vi.mocked(authService.hydrateFromServer).mockResolvedValue(session);
    renderProvider();
    await screen.findByText('signed-in:erick');

    act(() => {
      window.dispatchEvent(new CustomEvent(AUTH_SIGN_OUT_EVENT));
    });

    await waitFor(() => expect(screen.getByText('signed-out')).toBeInTheDocument());
  });

  it('stops listening to the sign-out event after unmount', async () => {
    vi.mocked(authService.hydrateFromServer).mockResolvedValue(null);
    const remove = vi.spyOn(window, 'removeEventListener');
    const { unmount } = renderProvider();
    await screen.findByText('signed-out');

    unmount();

    expect(remove).toHaveBeenCalledWith(AUTH_SIGN_OUT_EVENT, expect.any(Function));
  });
});
