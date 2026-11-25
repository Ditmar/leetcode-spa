import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import authService from './authService';
import { AUTH_SIGN_OUT_EVENT } from './authService.constants';

const user = { id: 'user-1', username: 'johndoe', email: 'john@example.com', role: 'user' };
const credentials = { email: user.email, password: 'test-password' };
const session = { user };
const fetchMock = vi.fn();

beforeEach(() => {
  fetchMock.mockReset();
  vi.stubGlobal('fetch', fetchMock);
});

afterEach(async () => {
  fetchMock.mockResolvedValueOnce(new Response(null, { status: 204 }));
  await authService.signOut();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe('authService', () => {
  it('logs in through Astro with cookies and no bearer authorization', async () => {
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue('obsolete-token');
    fetchMock.mockResolvedValueOnce(Response.json({ data: session }));

    await expect(authService.signIn(credentials)).resolves.toEqual(session);
    expect(fetchMock).toHaveBeenCalledWith(
      '/api/auth/login',
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify(credentials),
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      })
    );
    expect(authService.isAuthenticated()).toBe(true);
  });

  it('uses the session returned by signup without a second login', async () => {
    const payload = { ...credentials, username: user.username };
    fetchMock.mockResolvedValueOnce(Response.json({ data: session }, { status: 201 }));

    await expect(authService.signUp(payload)).resolves.toEqual(session);
    expect(fetchMock).toHaveBeenCalledExactlyOnceWith(
      '/api/auth/signup',
      expect.objectContaining({ method: 'POST', body: JSON.stringify(payload) })
    );
    expect(authService.getSession()).toEqual(session);
  });

  it('preserves errors returned by Astro', async () => {
    const error = { code: 'INVALID_CREDENTIALS', message: 'Invalid credentials' };
    fetchMock.mockResolvedValueOnce(Response.json(error, { status: 401 }));

    await expect(authService.signIn(credentials)).rejects.toMatchObject({ ...error, status: 401 });
  });

  it('reports invalid JSON through the shared client', async () => {
    fetchMock.mockResolvedValueOnce(new Response('not JSON'));

    await expect(authService.signIn(credentials)).rejects.toMatchObject({ code: 'PARSE_ERROR' });
  });

  it('restores the session from Astro and clears it upon a 401', async () => {
    fetchMock
      .mockResolvedValueOnce(Response.json({ data: session }))
      .mockResolvedValueOnce(Response.json({ code: 'UNAUTHORIZED' }, { status: 401 }));

    await expect(authService.hydrateFromServer()).resolves.toEqual(session);
    expect(fetchMock).toHaveBeenCalledWith(
      '/api/auth/me',
      expect.objectContaining({ method: 'GET', credentials: 'include' })
    );
    await expect(authService.hydrateFromServer()).resolves.toBeNull();
    expect(authService.getSession()).toBeNull();
  });

  it('treats a session with an elapsed expiry as expired', async () => {
    fetchMock.mockResolvedValueOnce(
      Response.json({ data: { ...session, expiresAt: Date.now() - 1000 } })
    );

    await authService.signIn(credentials);
    expect(authService.isAuthenticated()).toBe(false);
  });

  it('logs out through Astro even without an in-memory session', async () => {
    const dispatch = vi.spyOn(window, 'dispatchEvent');
    fetchMock.mockResolvedValueOnce(new Response(null, { status: 204 }));

    await authService.signOut();

    expect(fetchMock).toHaveBeenCalledWith(
      '/api/auth/logout',
      expect.objectContaining({ method: 'POST', credentials: 'include' })
    );
    expect(authService.getSession()).toBeNull();
    expect(dispatch).toHaveBeenCalledWith(expect.objectContaining({ type: AUTH_SIGN_OUT_EVENT }));
  });
});
