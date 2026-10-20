import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { POST as login } from '../../pages/api/auth/login';
import { POST as logout } from '../../pages/api/auth/logout';
import { GET as me } from '../../pages/api/auth/me';
import { POST as signup } from '../../pages/api/auth/signup';

import { ACCESS_COOKIE, REFRESH_COOKIE, REFRESH_PATH } from './cookies';

import type { APIContext } from 'astro';

const ORIGIN = 'http://localhost:4321';
const USER = { id: 'u1', username: 'jhon', email: 'jhon@test.com', role: 'user' };

function makeJwt(expSeconds: number): string {
  const enc = (o: object) => Buffer.from(JSON.stringify(o)).toString('base64url');
  return `${enc({ alg: 'HS256', typ: 'JWT' })}.${enc({ sub: 'u1', exp: expSeconds })}.sig`;
}

function makeCookies(initial: Record<string, string> = {}) {
  const store = new Map(Object.entries(initial));
  return {
    get: vi.fn((name: string) => (store.has(name) ? { value: store.get(name) } : undefined)),
    set: vi.fn((name: string, value: string) => void store.set(name, value)),
    delete: vi.fn((name: string) => void store.delete(name)),
  };
}

function post(path: string, body: unknown, headers: Record<string, string> = {}) {
  return new Request(`${ORIGIN}${path}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', origin: ORIGIN, ...headers },
    body: JSON.stringify(body),
  });
}

function ctx(request: Request, cookies = makeCookies()) {
  return { request, cookies } as unknown as APIContext;
}

function upstreamJson(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status });
}

const fetchMock = vi.fn();

beforeEach(() => {
  process.env.API_BASE_URL = 'http://api.test/api/v1';
  fetchMock.mockReset();
  vi.stubGlobal('fetch', fetchMock);
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('POST /api/auth/login', () => {
  const accessToken = makeJwt(Math.floor(Date.now() / 1000) + 900);

  it('sets both HttpOnly cookies and never returns tokens to the browser', async () => {
    fetchMock.mockResolvedValueOnce(
      upstreamJson({ accessToken, refreshToken: 'ref-1', user: USER })
    );
    const cookies = makeCookies();

    const res = await login(
      ctx(post('/api/auth/login', { email: 'a@b.com', password: 'x' }), cookies)
    );
    const text = await res.text();

    expect(res.status).toBe(200);
    expect(cookies.set).toHaveBeenCalledWith(
      ACCESS_COOKIE,
      accessToken,
      expect.objectContaining({ httpOnly: true, sameSite: 'lax' })
    );
    expect(cookies.set).toHaveBeenCalledWith(
      REFRESH_COOKIE,
      'ref-1',
      expect.objectContaining({ httpOnly: true, path: REFRESH_PATH })
    );
    expect(text).not.toContain(accessToken);
    expect(text).not.toContain('ref-1');
    expect(JSON.parse(text)).toMatchObject({ user: USER, expiresAt: expect.any(Number) });
  });

  it('does not forward browser cookies to the API', async () => {
    fetchMock.mockResolvedValueOnce(upstreamJson({ accessToken, refreshToken: 'r', user: USER }));
    await login(
      ctx(post('/api/auth/login', { email: 'a@b.com', password: 'x' }, { cookie: 'a=b' }))
    );

    const headers = fetchMock.mock.calls[0][1].headers as Record<string, string>;
    expect(Object.keys(headers).map((h) => h.toLowerCase())).not.toContain('cookie');
  });

  it('passes API errors through and sets no cookies', async () => {
    fetchMock.mockResolvedValueOnce(
      upstreamJson({ code: 'INVALID_CREDENTIALS', message: 'Bad login' }, 401)
    );
    const cookies = makeCookies();

    const res = await login(
      ctx(post('/api/auth/login', { email: 'a@b.com', password: 'bad' }), cookies)
    );

    expect(res.status).toBe(401);
    expect(await res.json()).toEqual({ code: 'INVALID_CREDENTIALS', message: 'Bad login' });
    expect(cookies.set).not.toHaveBeenCalled();
  });

  it('returns 400 when email or password is missing', async () => {
    const res = await login(ctx(post('/api/auth/login', { email: 'a@b.com' })));
    expect(res.status).toBe(400);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('returns 403 for a request from another origin', async () => {
    const res = await login(
      ctx(
        post('/api/auth/login', { email: 'a@b.com', password: 'x' }, { origin: 'https://evil.com' })
      )
    );
    expect(res.status).toBe(403);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('returns 403 when Sec-Fetch-Site says cross-site', async () => {
    const res = await login(
      ctx(
        post(
          '/api/auth/login',
          { email: 'a@b.com', password: 'x' },
          { 'sec-fetch-site': 'cross-site' }
        )
      )
    );
    expect(res.status).toBe(403);
  });
});

describe('POST /api/auth/signup', () => {
  const body = { username: 'jhon', email: 'a@b.com', password: 'secret123' };

  it('creates the account without setting cookies or leaking the API body', async () => {
    fetchMock.mockResolvedValueOnce(upstreamJson({ accessToken: 'leak', user: USER }, 201));
    const cookies = makeCookies();

    const res = await signup(ctx(post('/api/auth/signup', body), cookies));

    expect(res.status).toBe(201);
    expect(await res.text()).not.toContain('leak');
    expect(cookies.set).not.toHaveBeenCalled();
  });

  it('returns 403 for a request from another origin', async () => {
    const res = await signup(ctx(post('/api/auth/signup', body, { origin: 'https://evil.com' })));
    expect(res.status).toBe(403);
    expect(fetchMock).not.toHaveBeenCalled();
  });
});

describe('POST /api/auth/logout', () => {
  it('revokes the refresh token in the API and clears both cookies', async () => {
    fetchMock.mockResolvedValueOnce(new Response(null, { status: 204 }));
    const cookies = makeCookies({ [ACCESS_COOKIE]: 'acc', [REFRESH_COOKIE]: 'ref' });

    const res = await logout(ctx(post('/api/auth/logout', {}), cookies));

    expect(res.status).toBe(200);
    const [, init] = fetchMock.mock.calls[0];
    expect(JSON.parse(init.body)).toEqual({ refreshToken: 'ref' });
    expect(init.headers.Authorization).toBe('Bearer acc');
    expect(cookies.delete).toHaveBeenCalledWith(ACCESS_COOKIE, { path: '/' });
    expect(cookies.delete).toHaveBeenCalledWith(REFRESH_COOKIE, { path: REFRESH_PATH });
  });

  it('clears the cookies even when the API call fails', async () => {
    fetchMock.mockRejectedValueOnce(new Error('network down'));
    const cookies = makeCookies({ [ACCESS_COOKIE]: 'acc', [REFRESH_COOKIE]: 'ref' });
    vi.spyOn(console, 'error').mockImplementation(() => undefined);

    const res = await logout(ctx(post('/api/auth/logout', {}), cookies));

    expect(res.status).toBe(200);
    expect(cookies.delete).toHaveBeenCalledTimes(2);
  });

  it('returns 403 for a request from another origin', async () => {
    const res = await logout(ctx(post('/api/auth/logout', {}, { origin: 'https://evil.com' })));
    expect(res.status).toBe(403);
  });
});

describe('GET /api/auth/me', () => {
  const request = () => new Request(`${ORIGIN}/api/auth/me`);

  it('returns 401 without calling the API when there is no access cookie', async () => {
    const res = await me(ctx(request()));
    expect(res.status).toBe(401);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('returns the user and expiresAt, sending the cookie token as Bearer', async () => {
    const exp = Math.floor(Date.now() / 1000) + 600;
    const token = makeJwt(exp);
    fetchMock.mockResolvedValueOnce(upstreamJson({ user: USER }));
    const cookies = makeCookies({ [ACCESS_COOKIE]: token });

    const res = await me(ctx(request(), cookies));
    const json = await res.json();

    expect(res.status).toBe(200);
    expect(json).toEqual({ user: USER, expiresAt: exp * 1000 });
    expect(fetchMock.mock.calls[0][1].headers.Authorization).toBe(`Bearer ${token}`);
  });

  it('treats an expired access token as no session', async () => {
    const cookies = makeCookies({ [ACCESS_COOKIE]: makeJwt(Math.floor(Date.now() / 1000) - 10) });
    const res = await me(ctx(request(), cookies));
    expect(res.status).toBe(401);
  });
});
