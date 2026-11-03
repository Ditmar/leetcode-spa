import { describe, expect, it, vi } from 'vitest';

import {
  ACCESS_COOKIE,
  ACCESS_MAX_AGE,
  REFRESH_COOKIE,
  REFRESH_MAX_AGE,
  REFRESH_PATH,
  clearAuthCookies,
  setAuthCookies,
} from './cookies';

import type { AstroCookies } from 'astro';

function makeCookies() {
  return { set: vi.fn(), delete: vi.fn(), get: vi.fn() };
}

describe('auth cookies helper', () => {
  it('sets access and refresh cookies as HttpOnly + SameSite=Lax', () => {
    const cookies = makeCookies();
    setAuthCookies(cookies as unknown as AstroCookies, {
      accessToken: 'access-abc',
      refreshToken: 'refresh-xyz',
    });

    expect(cookies.set).toHaveBeenCalledWith(
      ACCESS_COOKIE,
      'access-abc',
      expect.objectContaining({
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        maxAge: ACCESS_MAX_AGE,
      })
    );
    expect(cookies.set).toHaveBeenCalledWith(
      REFRESH_COOKIE,
      'refresh-xyz',
      expect.objectContaining({
        httpOnly: true,
        sameSite: 'lax',
        path: REFRESH_PATH,
        maxAge: REFRESH_MAX_AGE,
      })
    );
  });

  it('is not Secure outside production (http://localhost)', () => {
    const cookies = makeCookies();
    setAuthCookies(cookies as unknown as AstroCookies, { accessToken: 'a', refreshToken: 'r' });

    // vitest runs with import.meta.env.PROD === false
    expect(cookies.set.mock.calls[0][2]).toMatchObject({ secure: false });
  });

  it('clears both cookies using the same paths they were set with', () => {
    const cookies = makeCookies();
    clearAuthCookies(cookies as unknown as AstroCookies);

    expect(cookies.delete).toHaveBeenCalledWith(ACCESS_COOKIE, { path: '/' });
    expect(cookies.delete).toHaveBeenCalledWith(REFRESH_COOKIE, { path: REFRESH_PATH });
  });
});
