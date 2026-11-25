// @vitest-environment node
import { describe, expect, it } from 'vitest';

import { getServerAuthConfig } from '../infrastructure/auth/server-auth-config';
import { AUTH_COOKIE_NAMES } from '../infrastructure/cookies/auth-cookie-options';

import { FakeAstroCookies } from './support/fake-astro-cookies';

describe('getServerAuthConfig (SPA-003: server calls send Bearer, not Cookie)', () => {
  it('builds Authorization from the access cookie', () => {
    const cookies = new FakeAstroCookies({ [AUTH_COOKIE_NAMES.ACCESS]: 'at-1' });
    expect(getServerAuthConfig(cookies)).toEqual({ headers: { Authorization: 'Bearer at-1' } });
  });

  it('returns undefined when there is no access cookie', () => {
    expect(getServerAuthConfig(new FakeAstroCookies())).toBeUndefined();
  });

  it('never forwards the refresh token or the raw Cookie header', () => {
    const cookies = new FakeAstroCookies({
      [AUTH_COOKIE_NAMES.ACCESS]: 'at-1',
      [AUTH_COOKIE_NAMES.REFRESH]: 'rt-1',
    });
    const config = getServerAuthConfig(cookies);
    expect(JSON.stringify(config)).not.toContain('rt-1');
    expect(config?.headers).not.toHaveProperty('Cookie');
  });

  it('keeps other options and headers from the base config', () => {
    const cookies = new FakeAstroCookies({ [AUTH_COOKIE_NAMES.ACCESS]: 'at-1' });
    const config = getServerAuthConfig(cookies, {
      timeoutMs: 5000,
      headers: { 'X-Request-Id': 'abc' },
    });
    expect(config).toEqual({
      timeoutMs: 5000,
      headers: { 'X-Request-Id': 'abc', Authorization: 'Bearer at-1' },
    });
  });
});
