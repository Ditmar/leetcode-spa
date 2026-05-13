import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import authService from './authService';
import { AUTH_SIGN_OUT_EVENT } from './authService.constants';
//import authService from './authService.mock';

import type { ApiError } from '../api/apiClient.types';

function isApiError(err: unknown): err is ApiError {
  return typeof err === 'object' && err !== null && 'status' in err;
}

const MOCK_USER = {
  id: 'user-1',
  username: 'johndoe',
  email: 'john@example.com',
  role: 'user' as const,
};

function makeSession(overrides: Partial<{ expiresAt: number }> = {}) {
  return {
    user: MOCK_USER,
    accessToken: 'access-token-abc',
    expiresAt: Date.now() + 3_600_000,
    ...overrides,
  };
}

function mockFetchSuccess(body: unknown, status = 200) {
  global.fetch = vi.fn().mockResolvedValueOnce({
    ok: true,
    status,
    json: async () => body,
  } as Response);
}

function mockFetchFailure(body: unknown, status = 401) {
  global.fetch = vi.fn().mockResolvedValueOnce({
    ok: false,
    status,
    statusText: 'Unauthorized',
    json: async () => body,
  } as Response);
}

beforeEach(() => {
  vi.restoreAllMocks();
  global.fetch = vi
    .fn()
    .mockResolvedValue({ ok: true, status: 200, json: async () => ({}) } as Response);
});

afterEach(async () => {
  mockFetchSuccess({});
  try {
    await authService.signOut();
  } catch {
    // no-op
  }
});

describe('signIn', () => {
  it('calls POST /auth/signin and stores access token in memory', async () => {
    const session = makeSession();
    mockFetchSuccess(session);

    const result = await authService.signIn({ email: 'john@example.com', password: 'secret' });

    expect(fetch).toHaveBeenCalledWith('/auth/signin', expect.objectContaining({ method: 'POST' }));
    expect(result.accessToken).toBe(session.accessToken);
    expect(result.user.id).toBe(MOCK_USER.id);
  });

  it('returns the session so the caller can read user data', async () => {
    const session = makeSession();
    mockFetchSuccess(session);

    const result = await authService.signIn({ email: 'john@example.com', password: 'secret' });

    expect(result).toEqual(session);
  });

  it('throws ApiError on wrong credentials (401)', async () => {
    mockFetchFailure({ message: 'Invalid credentials' }, 401);

    await expect(
      authService.signIn({ email: 'john@example.com', password: 'wrong' })
    ).rejects.toSatisfy(isApiError);
  });

  it('never writes the access token to localStorage', async () => {
    const setItem = vi.spyOn(Storage.prototype, 'setItem');
    mockFetchSuccess(makeSession());

    await authService.signIn({ email: 'john@example.com', password: 'secret' });

    expect(setItem).not.toHaveBeenCalled();
  });

  it('never writes the access token to sessionStorage', async () => {
    const setItem = vi.spyOn(Storage.prototype, 'setItem');
    mockFetchSuccess(makeSession());

    await authService.signIn({ email: 'john@example.com', password: 'secret' });

    expect(setItem).not.toHaveBeenCalled();
  });
});

describe('signOut', () => {
  it('calls POST /auth/signout and clears in-memory session', async () => {
    mockFetchSuccess(makeSession());
    await authService.signIn({ email: 'john@example.com', password: 'secret' });

    mockFetchSuccess({});
    await authService.signOut();

    expect(authService.getSession()).toBeNull();
  });

  it('emits auth:signout custom event', async () => {
    mockFetchSuccess(makeSession());
    await authService.signIn({ email: 'john@example.com', password: 'secret' });

    const dispatchSpy = vi.spyOn(window, 'dispatchEvent');
    mockFetchSuccess({});
    await authService.signOut();

    expect(dispatchSpy).toHaveBeenCalledWith(
      expect.objectContaining({ type: AUTH_SIGN_OUT_EVENT })
    );
  });

  it('still clears state if the server call fails', async () => {
    mockFetchSuccess(makeSession());
    await authService.signIn({ email: 'john@example.com', password: 'secret' });

    mockFetchFailure({ message: 'Server error' }, 500);
    await authService.signOut();

    expect(authService.getSession()).toBeNull();
    expect(authService.isAuthenticated()).toBe(false);
  });
});

describe('getSession', () => {
  it('returns null when no token is stored', () => {
    expect(authService.getSession()).toBeNull();
  });

  it('returns null after signOut', async () => {
    mockFetchSuccess(makeSession());
    await authService.signIn({ email: 'john@example.com', password: 'secret' });

    mockFetchSuccess({});
    await authService.signOut();

    expect(authService.getSession()).toBeNull();
  });

  it('returns the session when authenticated', async () => {
    const session = makeSession();
    mockFetchSuccess(session);
    await authService.signIn({ email: 'john@example.com', password: 'secret' });

    const result = authService.getSession();
    expect(result?.accessToken).toBe(session.accessToken);
  });
});

describe('isAuthenticated', () => {
  it('returns false when there is no session', () => {
    expect(authService.isAuthenticated()).toBe(false);
  });

  it('returns true after a successful signIn', async () => {
    mockFetchSuccess(makeSession());
    await authService.signIn({ email: 'john@example.com', password: 'secret' });

    expect(authService.isAuthenticated()).toBe(true);
  });

  it('returns false when the token is expired', async () => {
    mockFetchSuccess(makeSession({ expiresAt: Date.now() - 1_000 }));
    await authService.signIn({ email: 'john@example.com', password: 'secret' });

    expect(authService.isAuthenticated()).toBe(false);
  });

  it('returns false after signOut', async () => {
    mockFetchSuccess(makeSession());
    await authService.signIn({ email: 'john@example.com', password: 'secret' });

    mockFetchSuccess({});
    await authService.signOut();

    expect(authService.isAuthenticated()).toBe(false);
  });
});

describe('refreshToken', () => {
  it('updates the in-memory session with the new token', async () => {
    const newSession = makeSession();
    newSession.accessToken = 'new-access-token';
    mockFetchSuccess(newSession);

    const result = await authService.refreshToken();

    expect(result.accessToken).toBe('new-access-token');
    expect(authService.getSession()?.accessToken).toBe('new-access-token');
  });

  it('calls signOut and redirects to / on 401', async () => {
    Object.defineProperty(window, 'location', {
      value: { href: '' },
      writable: true,
    });

    mockFetchFailure({ message: 'Refresh token expired' }, 401);
    const signOutSpy = vi.spyOn(authService, 'signOut').mockResolvedValueOnce(undefined);

    await expect(authService.refreshToken()).rejects.toSatisfy(isApiError);
    expect(signOutSpy).toHaveBeenCalled();
    expect(window.location.href).toBe('/');
  });
});

describe('signUp', () => {
  it('registers then automatically signs in', async () => {
    mockFetchSuccess(undefined, 201);
    const session = makeSession();
    global.fetch = vi
      .fn()
      .mockResolvedValueOnce({ ok: true, status: 201, json: async () => ({}) } as Response)
      .mockResolvedValueOnce({ ok: true, status: 200, json: async () => session } as Response);

    const result = await authService.signUp({
      username: 'johndoe',
      email: 'john@example.com',
      password: 'secret',
    });

    expect(result.user.email).toBe(MOCK_USER.email);
    expect(authService.isAuthenticated()).toBe(true);
  });
});
