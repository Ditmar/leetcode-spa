import { afterEach, describe, expect, it, vi } from 'vitest';

import { AUTH_SIGN_OUT_EVENT } from '../../../services/auth/authService.constants';

import { handleSignOut, LOGOUT_ENDPOINT } from './NavShell';

describe('handleSignOut (SPA-003: sign out through the BFF)', () => {
  afterEach(() => vi.restoreAllMocks());

  it('posts to /api/auth/logout with the same-origin cookies, then signs out and reloads', async () => {
    const order: string[] = [];
    const fetchFn = vi.fn(async () => {
      order.push('logout');
      return new Response(null, { status: 204 });
    });
    const listener = vi.fn(() => order.push('event'));
    window.addEventListener(AUTH_SIGN_OUT_EVENT, listener);
    const reloadPage = vi.fn(() => order.push('reload'));

    try {
      await handleSignOut(reloadPage, fetchFn as unknown as typeof fetch);
    } finally {
      window.removeEventListener(AUTH_SIGN_OUT_EVENT, listener);
    }

    expect(fetchFn).toHaveBeenCalledWith(LOGOUT_ENDPOINT, {
      method: 'POST',
      credentials: 'same-origin',
      headers: { Accept: 'application/json' },
    });
    expect(order).toEqual(['logout', 'event', 'reload']);
  });

  it('sends no Authorization header and no token from the browser', async () => {
    const fetchFn = vi.fn(async () => new Response(null, { status: 204 }));

    await handleSignOut(vi.fn(), fetchFn as unknown as typeof fetch);

    const [, init] = fetchFn.mock.calls[0] as unknown as [string, RequestInit];
    expect(init.headers).not.toHaveProperty('Authorization');
    expect(init.body).toBeUndefined();
  });

  it('still signs out locally and reloads when the request fails', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
    const fetchFn = vi.fn(async () => {
      throw new TypeError('network down');
    });
    const listener = vi.fn();
    window.addEventListener(AUTH_SIGN_OUT_EVENT, listener);
    const reloadPage = vi.fn();

    try {
      await handleSignOut(reloadPage, fetchFn as unknown as typeof fetch);
    } finally {
      window.removeEventListener(AUTH_SIGN_OUT_EVENT, listener);
    }

    expect(listener).toHaveBeenCalledTimes(1);
    expect(reloadPage).toHaveBeenCalledTimes(1);
  });
});
