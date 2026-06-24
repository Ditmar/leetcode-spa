import { beforeEach, describe, expect, it, vi } from 'vitest';

import { apiClient } from '../services/api/apiClient';
import { AUTH_ENDPOINTS } from '../services/auth/authService.constants';

import { authMiddleware, validateSessionCookie } from './auth.middleware';

import type { AuthSession } from '../services/auth/authService.types';
import type { APIContext, MiddlewareNext } from 'astro';

vi.mock('../services/api/apiClient', () => ({
  apiClient: {
    get: vi.fn(),
  },
  isApiError: (error: unknown) =>
    typeof error === 'object' &&
    error !== null &&
    'status' in error &&
    typeof (error as { status?: unknown }).status === 'number',
}));

const mockSession: AuthSession = {
  accessToken: 'access-token',
  expiresAt: Date.now() + 60_000,
  user: {
    id: 'user-1',
    username: 'ada',
    email: 'ada@example.com',
    role: 'user',
  },
};

function createContext(pathname: string, cookie = ''): APIContext {
  const request = new Request(`http://localhost${pathname}`, {
    headers: cookie ? { cookie } : undefined,
  });

  return {
    request,
    url: new URL(request.url),
    locals: {},
    redirect: vi.fn(
      (path: string) => new Response(null, { status: 302, headers: { location: path } })
    ),
  } as unknown as APIContext;
}

describe('validateSessionCookie', () => {
  beforeEach(() => {
    vi.mocked(apiClient.get).mockReset();
  });

  it('calls /auth/me with the incoming cookie header', async () => {
    vi.mocked(apiClient.get).mockResolvedValue({ data: mockSession });

    const session = await validateSessionCookie('auth_token=test-token');

    expect(apiClient.get).toHaveBeenCalledWith(AUTH_ENDPOINTS.ME, {
      headers: { cookie: 'auth_token=test-token' },
    });
    expect(session).toEqual(mockSession);
  });

  it('returns null when validation fails', async () => {
    vi.mocked(apiClient.get).mockRejectedValue({
      code: 'UNAUTHORIZED',
      message: 'Unauthorized',
      status: 401,
    });

    await expect(validateSessionCookie('auth_token=expired')).resolves.toBeNull();
  });

  it('handles unexpected validation errors without rejecting', async () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
    vi.mocked(apiClient.get).mockRejectedValue(new Error('Network unavailable'));

    await expect(validateSessionCookie('auth_token=test-token')).resolves.toBeNull();

    expect(warnSpy).toHaveBeenCalledWith(
      '[authMiddleware] Session validation failed; continuing unauthenticated.',
      expect.any(Error)
    );
    warnSpy.mockRestore();
  });
});

describe('authMiddleware', () => {
  beforeEach(() => {
    vi.mocked(apiClient.get).mockReset();
  });

  it('sets an authenticated user in locals and continues', async () => {
    vi.mocked(apiClient.get).mockResolvedValue({ data: mockSession });
    const ctx = createContext('/problems', 'auth_token=test-token');
    const next = vi.fn(() => new Response('ok')) as unknown as MiddlewareNext;

    await authMiddleware(ctx, next);

    expect(ctx.locals.user).toEqual(mockSession.user);
    expect(ctx.locals.isAuthenticated).toBe(true);
    expect(next).toHaveBeenCalledOnce();
  });

  it('sets null user locals for unauthenticated requests', async () => {
    const ctx = createContext('/problems');
    const next = vi.fn(() => new Response('ok')) as unknown as MiddlewareNext;

    await authMiddleware(ctx, next);

    expect(ctx.locals.user).toBeNull();
    expect(ctx.locals.isAuthenticated).toBe(false);
    expect(next).toHaveBeenCalledOnce();
  });

  it('redirects unauthenticated protected paths', async () => {
    const ctx = createContext('/profile/settings');
    const next = vi.fn(() => new Response('ok')) as unknown as MiddlewareNext;

    const response = await authMiddleware(ctx, next);

    expect(response).toBeInstanceOf(Response);
    expect((response as Response).headers.get('location')).toBe('/?authRequired=true');
    expect(next).not.toHaveBeenCalled();
  });

  it('redirects additional configured protected route prefixes', async () => {
    const ctx = createContext('/settings/security');
    const next = vi.fn(() => new Response('ok')) as unknown as MiddlewareNext;

    const response = await authMiddleware(ctx, next);

    expect(response).toBeInstanceOf(Response);
    expect((response as Response).headers.get('location')).toBe('/?authRequired=true');
    expect(next).not.toHaveBeenCalled();
  });
});
