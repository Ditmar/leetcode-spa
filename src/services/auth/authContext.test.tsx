import { fireEvent, render, screen } from '@testing-library/react';
import { useContext } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

const { hydrateFromServer, signIn, signOut, isAuthenticated } = vi.hoisted(() => ({
  hydrateFromServer: vi.fn(),
  signIn: vi.fn(),
  signOut: vi.fn(),
  isAuthenticated: vi.fn(() => false),
}));

vi.mock('./authService', () => ({
  default: {
    hydrateFromServer,
    signIn,
    signUp: vi.fn(),
    signOut,
    isAuthenticated,
  },
}));

import { AuthContext, AuthProvider } from './authContext';

describe('AuthProvider', () => {
  beforeEach(() => {
    hydrateFromServer.mockReset();
    signIn.mockReset();
    signOut.mockReset();
    isAuthenticated.mockReset();
    hydrateFromServer.mockResolvedValue(null);
    signIn.mockResolvedValue({
      user: {
        id: 'user-1',
        username: 'demo',
        email: 'demo@example.com',
        role: 'user' as const,
      },
      accessToken: 'token',
      expiresAt: Date.now() + 60_000,
    });
    signOut.mockResolvedValue(undefined);
    isAuthenticated.mockImplementation(() => false);
    window.localStorage.clear();
  });

  it('skips hydration when there is no stored session', async () => {
    render(
      <AuthProvider>
        <div>ready</div>
      </AuthProvider>
    );

    expect(await screen.findByText('ready')).toBeInTheDocument();
    expect(hydrateFromServer).not.toHaveBeenCalled();
  });

  it('hydrates auth state from the real auth service', async () => {
    // Simulate a stored session token so the provider triggers hydration
    window.localStorage.setItem('auth_token', 'dummy-token');

    render(
      <AuthProvider>
        <div>ready</div>
      </AuthProvider>
    );

    expect(await screen.findByText('ready')).toBeInTheDocument();
    expect(hydrateFromServer).toHaveBeenCalledTimes(1);
  });

  it('updates auth state when signIn and signOut are invoked through the context', async () => {
    let authenticated = false;

    isAuthenticated.mockImplementation(() => authenticated);
    signIn.mockImplementation(async () => {
      authenticated = true;
      return {
        user: {
          id: 'user-1',
          username: 'demo',
          email: 'demo@example.com',
          role: 'user' as const,
        },
        accessToken: 'token',
        expiresAt: Date.now() + 60_000,
      };
    });
    signOut.mockImplementation(async () => {
      authenticated = false;
    });

    function AuthConsumer() {
      const context = useContext(AuthContext);

      if (!context) {
        return <div>missing-context</div>;
      }

      return (
        <div>
          <div>{context.isAuthenticated ? 'authenticated' : 'guest'}</div>
          <button
            onClick={() => {
              void context.signIn({ email: 'demo@example.com', password: 'secret' });
            }}
          >
            sign-in
          </button>
          <button
            onClick={() => {
              void context.signOut();
            }}
          >
            sign-out
          </button>
        </div>
      );
    }

    render(
      <AuthProvider>
        <AuthConsumer />
      </AuthProvider>
    );

    fireEvent.click(screen.getByRole('button', { name: /sign-in/i }));

    expect(await screen.findByText('authenticated')).toBeInTheDocument();
    expect(signIn).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByRole('button', { name: /sign-out/i }));

    expect(await screen.findByText('guest')).toBeInTheDocument();
    expect(signOut).toHaveBeenCalledTimes(1);
  });
});
