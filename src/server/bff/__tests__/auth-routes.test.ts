// @vitest-environment node
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { createAuthRoutes } from '../infrastructure/composition/create-auth-routes';
import { AUTH_COOKIE_NAMES } from '../infrastructure/cookies/auth-cookie-options';

import { FakeAstroCookies } from './support/fake-astro-cookies';
import { fakeJwt } from './support/jwt';

import type { BffConfig } from '../infrastructure/config/bff-config';
import type { APIContext, APIRoute } from 'astro';

const { ACCESS, REFRESH } = AUTH_COOKIE_NAMES;
const SITE = 'http://localhost:4321';
const API = 'http://api.test/api';

const config: BffConfig = {
  apiBaseUrl: API,
  upstreamTimeoutMs: 200,
  maxBodyBytes: 1024,
  allowedOrigins: [],
  isProduction: false,
};

const apiUser = { id: 'u1', name: 'erick', email: 'erick@test.dev', createdAt: '2026-10-01' };
const sessionUser = { id: 'u1', username: 'erick', email: 'erick@test.dev', role: 'user' };

type FetchMock = ReturnType<typeof vi.fn<typeof fetch>>;

function json(status: number, body: unknown) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

async function call(
  handler: APIRoute,
  path: string,
  init: RequestInit = {},
  cookies = new FakeAstroCookies()
) {
  const request = new Request(`${SITE}${path}`, init);
  const ctx = { request, cookies, url: new URL(request.url) } as unknown as APIContext;
  const response = (await handler(ctx)) as Response;
  return { response, cookies };
}

function post(body: unknown, origin = SITE): RequestInit {
  return {
    method: 'POST',
    headers: { Origin: origin, 'Content-Type': 'application/json' },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  };
}

function apiCalls(fetchMock: FetchMock) {
  return fetchMock.mock.calls.map(([input, init]) => ({
    url: String(input),
    method: init?.method,
    headers: new Headers(init?.headers),
    body: init?.body ? JSON.parse(String(init.body)) : undefined,
  }));
}

describe('BFF auth routes /api/auth/*', () => {
  let fetchMock: FetchMock;
  let routes: ReturnType<typeof createAuthRoutes>;

  beforeEach(() => {
    fetchMock = vi.fn<typeof fetch>();
    routes = createAuthRoutes({ config, fetchFn: fetchMock });
  });

  describe('POST /api/auth/login', () => {
    it('sets both HttpOnly cookies and returns the user WITHOUT tokens', async () => {
      const exp = Math.floor(Date.now() / 1000) + 900;
      const accessToken = fakeJwt(exp);
      fetchMock.mockResolvedValueOnce(
        json(200, { accessToken, refreshToken: 'rt-1', user: apiUser })
      );

      const { response, cookies } = await call(
        routes.login,
        '/api/auth/login',
        post({ email: 'erick@test.dev', password: 'secret' })
      );

      expect(response.status).toBe(200);
      const body = await response.json();
      expect(body).toEqual({ user: sessionUser, expiresAt: exp * 1000 });
      expect(JSON.stringify(body)).not.toContain(accessToken);
      expect(JSON.stringify(body)).not.toContain('rt-1');

      expect(cookies.lastWrite(ACCESS)).toMatchObject({
        value: accessToken,
        options: { httpOnly: true, sameSite: 'lax', path: '/' },
      });
      expect(cookies.lastWrite(REFRESH)).toMatchObject({
        value: 'rt-1',
        options: { httpOnly: true, sameSite: 'lax', path: '/api' },
      });

      const [sent] = apiCalls(fetchMock);
      expect(sent.url).toBe(`${API}/auth/login`);
      expect(sent.body).toEqual({ email: 'erick@test.dev', password: 'secret' });
    });

    it('wrong password → 401 and no cookies', async () => {
      fetchMock.mockResolvedValueOnce(
        json(401, { error: 'Invalid credentials', message: 'Invalid email or password' })
      );
      const { response, cookies } = await call(
        routes.login,
        '/api/auth/login',
        post({ email: 'erick@test.dev', password: 'bad' })
      );
      expect(response.status).toBe(401);
      expect(await response.json()).toEqual({
        code: 'INVALID_CREDENTIALS',
        message: 'Invalid email or password',
      });
      expect(cookies.writes).toHaveLength(0);
    });

    it('invalid body → 400 (API is not called)', async () => {
      const bad = await call(routes.login, '/api/auth/login', post({ email: 'nope' }));
      const notJson = await call(routes.login, '/api/auth/login', post('{oops'));
      expect(bad.response.status).toBe(400);
      expect(notJson.response.status).toBe(400);
      expect(fetchMock).not.toHaveBeenCalled();
    });

    it('login from another origin → 403 (API is not called)', async () => {
      const { response } = await call(
        routes.login,
        '/api/auth/login',
        post({ email: 'erick@test.dev', password: 'x' }, 'https://evil.example')
      );
      expect(response.status).toBe(403);
      expect(fetchMock).not.toHaveBeenCalled();
    });

    it('API down → 502', async () => {
      fetchMock.mockRejectedValueOnce(new TypeError('fetch failed'));
      const { response } = await call(
        routes.login,
        '/api/auth/login',
        post({ email: 'erick@test.dev', password: 'x' })
      );
      expect(response.status).toBe(502);
    });
  });

  describe('POST /api/auth/signup', () => {
    it('creates the user (username → name) and logs in', async () => {
      fetchMock
        .mockResolvedValueOnce(json(201, { message: 'ok', user: apiUser }))
        .mockResolvedValueOnce(json(200, { accessToken: 'at', refreshToken: 'rt', user: apiUser }));

      const { response, cookies } = await call(
        routes.signup,
        '/api/auth/signup',
        post({ username: 'erick', email: 'erick@test.dev', password: 'secret123' })
      );

      expect(response.status).toBe(201);
      expect((await response.json()).user).toEqual(sessionUser);
      const [signup, login] = apiCalls(fetchMock);
      expect(signup.url).toBe(`${API}/auth/signup`);
      expect(signup.body).toMatchObject({ name: 'erick', email: 'erick@test.dev' });
      expect(login.url).toBe(`${API}/auth/login`);
      expect(cookies.get(ACCESS)?.value).toBe('at');
      expect(cookies.get(REFRESH)?.value).toBe('rt');
    });

    it('user already exists → 409 and no cookies', async () => {
      fetchMock.mockResolvedValueOnce(json(409, { error: 'User already exists', message: 'dup' }));
      const { response, cookies } = await call(
        routes.signup,
        '/api/auth/signup',
        post({ username: 'erick', email: 'erick@test.dev', password: 'secret123' })
      );
      expect(response.status).toBe(409);
      expect((await response.json()).code).toBe('USER_ALREADY_EXISTS');
      expect(cookies.writes).toHaveLength(0);
    });
  });

  describe('POST /api/auth/logout', () => {
    it('revokes the refresh token in the API and clears both cookies', async () => {
      fetchMock.mockResolvedValueOnce(json(200, { message: 'Logged out successfully' }));
      const cookies = new FakeAstroCookies({ [ACCESS]: 'at', [REFRESH]: 'rt-1' });

      const { response } = await call(routes.logout, '/api/auth/logout', post({}), cookies);

      expect(response.status).toBe(204);
      const [sent] = apiCalls(fetchMock);
      expect(sent.url).toBe(`${API}/auth/logout`);
      expect(sent.body).toEqual({ refreshToken: 'rt-1' });
      expect(cookies.lastWrite(ACCESS)).toMatchObject({ deleted: true, options: { path: '/' } });
      expect(cookies.lastWrite(REFRESH)).toMatchObject({
        deleted: true,
        options: { path: '/api' },
      });
    });

    it('clears the cookies even if the API fails', async () => {
      fetchMock.mockResolvedValueOnce(json(500, {}));
      const cookies = new FakeAstroCookies({ [ACCESS]: 'at', [REFRESH]: 'rt-1' });
      const { response } = await call(routes.logout, '/api/auth/logout', post({}), cookies);
      expect(response.status).toBe(204);
      expect(cookies.get(ACCESS)).toBeUndefined();
      expect(cookies.get(REFRESH)).toBeUndefined();
    });

    it('logout from another origin → 403 and cookies are kept', async () => {
      const cookies = new FakeAstroCookies({ [ACCESS]: 'at', [REFRESH]: 'rt-1' });
      const { response } = await call(
        routes.logout,
        '/api/auth/logout',
        post({}, 'https://evil.example'),
        cookies
      );
      expect(response.status).toBe(403);
      expect(cookies.writes).toHaveLength(0);
    });
  });

  describe('GET /api/auth/me', () => {
    it('returns the user using the access cookie', async () => {
      fetchMock.mockResolvedValueOnce(json(200, apiUser));
      const cookies = new FakeAstroCookies({ [ACCESS]: 'at', [REFRESH]: 'rt' });

      const { response } = await call(routes.me, '/api/auth/me', {}, cookies);

      expect(response.status).toBe(200);
      expect((await response.json()).user).toEqual(sessionUser);
      expect(apiCalls(fetchMock)[0].headers.get('authorization')).toBe('Bearer at');
    });

    it('without cookies → 401 (API is not called)', async () => {
      const { response } = await call(routes.me, '/api/auth/me');
      expect(response.status).toBe(401);
      expect(fetchMock).not.toHaveBeenCalled();
    });

    it('expired access token → refreshes silently and returns the user', async () => {
      fetchMock
        .mockResolvedValueOnce(json(401, {}))
        .mockResolvedValueOnce(json(200, { accessToken: 'at-new' }))
        .mockResolvedValueOnce(json(200, { user: apiUser }));
      const cookies = new FakeAstroCookies({ [ACCESS]: 'at-old', [REFRESH]: 'rt' });

      const { response } = await call(routes.me, '/api/auth/me', {}, cookies);

      expect(response.status).toBe(200);
      expect(cookies.get(ACCESS)?.value).toBe('at-new');
      expect(apiCalls(fetchMock)[2].headers.get('authorization')).toBe('Bearer at-new');
    });

    it('refresh fails → clears cookies and 401', async () => {
      fetchMock.mockResolvedValueOnce(json(401, {})).mockResolvedValueOnce(json(401, {}));
      const cookies = new FakeAstroCookies({ [ACCESS]: 'at-old', [REFRESH]: 'rt-dead' });

      const { response } = await call(routes.me, '/api/auth/me', {}, cookies);

      expect(response.status).toBe(401);
      expect(cookies.get(ACCESS)).toBeUndefined();
      expect(cookies.get(REFRESH)).toBeUndefined();
    });
  });
});
