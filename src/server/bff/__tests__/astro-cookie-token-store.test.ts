// @vitest-environment node
import { describe, expect, it } from 'vitest';

import { AstroCookieTokenStore } from '../infrastructure/cookies/astro-cookie-token-store';
import { AUTH_COOKIE_NAMES } from '../infrastructure/cookies/auth-cookie-options';

import { FakeAstroCookies } from './support/fake-astro-cookies';
import { fakeJwt } from './support/jwt';

const { ACCESS, REFRESH } = AUTH_COOKIE_NAMES;

describe('AstroCookieTokenStore', () => {
  it('writes both cookies as HttpOnly + SameSite=Lax with the right paths', () => {
    const cookies = new FakeAstroCookies();
    const store = new AstroCookieTokenStore(cookies, {
      isProduction: false,
      hostname: 'localhost',
    });

    store.save({ accessToken: 'at', refreshToken: 'rt' });

    expect(cookies.lastWrite(ACCESS)?.options).toMatchObject({
      httpOnly: true,
      sameSite: 'lax',
      secure: false,
      path: '/',
      maxAge: 15 * 60,
    });
    expect(cookies.lastWrite(REFRESH)?.options).toMatchObject({
      httpOnly: true,
      sameSite: 'lax',
      secure: false,
      path: '/api',
      maxAge: 7 * 24 * 60 * 60,
    });
  });

  it('sets Secure in production but not on localhost', () => {
    const prod = new FakeAstroCookies();
    new AstroCookieTokenStore(prod, { isProduction: true, hostname: 'app.example.com' }).save({
      accessToken: 'at',
    });
    expect(prod.lastWrite(ACCESS)?.options.secure).toBe(true);

    const local = new FakeAstroCookies();
    new AstroCookieTokenStore(local, { isProduction: true, hostname: 'localhost' }).save({
      accessToken: 'at',
    });
    expect(local.lastWrite(ACCESS)?.options.secure).toBe(false);
  });

  it('uses the JWT exp claim for the access cookie lifetime', () => {
    const cookies = new FakeAstroCookies();
    const exp = Math.floor(Date.now() / 1000) + 300;
    new AstroCookieTokenStore(cookies, { isProduction: false, hostname: 'localhost' }).save({
      accessToken: fakeJwt(exp),
    });
    const maxAge = cookies.lastWrite(ACCESS)?.options.maxAge ?? 0;
    expect(maxAge).toBeGreaterThan(295);
    expect(maxAge).toBeLessThanOrEqual(300);
  });

  it('keeps the old refresh cookie when the API does not rotate it', () => {
    const cookies = new FakeAstroCookies({ [REFRESH]: 'rt' });
    new AstroCookieTokenStore(cookies, { isProduction: false, hostname: 'localhost' }).save({
      accessToken: 'new',
    });
    expect(cookies.lastWrite(REFRESH)).toBeUndefined();
    expect(cookies.get(REFRESH)?.value).toBe('rt');
  });

  it('clear() deletes both cookies with the same paths', () => {
    const cookies = new FakeAstroCookies({ [ACCESS]: 'at', [REFRESH]: 'rt' });
    new AstroCookieTokenStore(cookies, { isProduction: false, hostname: 'localhost' }).clear();
    expect(cookies.lastWrite(ACCESS)).toMatchObject({ deleted: true, options: { path: '/' } });
    expect(cookies.lastWrite(REFRESH)).toMatchObject({ deleted: true, options: { path: '/api' } });
  });
});
