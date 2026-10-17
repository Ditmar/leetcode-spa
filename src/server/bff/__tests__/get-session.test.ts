// @vitest-environment node
import { describe, expect, it, vi } from 'vitest';

import { GetSession } from '../application/auth/get-session';
import { RefreshFailedError } from '../domain/errors';

import type { AuthUser } from '../domain/auth-user';
import type { AuthApi } from '../domain/ports/auth-api';
import type { TokenRefresher } from '../domain/ports/token-refresher';
import type { TokenStore } from '../domain/ports/token-store';
import type { SessionTokens } from '../domain/session-tokens';

const user: AuthUser = { id: '1', username: 'erick', email: 'e@test.dev', role: 'user' };

/** In-memory TokenStore (Liskov: any TokenStore works). */
function memoryStore(initial: { access?: string; refresh?: string } = {}) {
  const state = { ...initial, cleared: false };
  const store: TokenStore = {
    readAccessToken: () => state.access,
    readRefreshToken: () => state.refresh,
    save: (t: SessionTokens) => {
      state.access = t.accessToken;
      if (t.refreshToken) state.refresh = t.refreshToken;
    },
    clear: () => {
      state.access = undefined;
      state.refresh = undefined;
      state.cleared = true;
    },
  };
  return { store, state };
}

function api(me: AuthApi['me']): AuthApi {
  return { login: vi.fn(), signup: vi.fn(), logout: vi.fn(), me: vi.fn(me) };
}

describe('GetSession (getSession for middleware / pages)', () => {
  const refresher = (fn: TokenRefresher['refresh']): TokenRefresher => ({ refresh: vi.fn(fn) });

  it('returns null without cookies and does not call the API', async () => {
    const authApi = api(async () => user);
    const { store } = memoryStore();
    await expect(new GetSession(authApi, refresher(vi.fn())).execute(store)).resolves.toBeNull();
    expect(authApi.me).not.toHaveBeenCalled();
  });

  it('returns the user when the access token is valid', async () => {
    const { store } = memoryStore({ access: 'at', refresh: 'rt' });
    const session = await new GetSession(
      api(async () => user),
      refresher(vi.fn())
    ).execute(store);
    expect(session?.user).toEqual(user);
  });

  it('refreshes when the access cookie is missing, then saves it', async () => {
    const { store, state } = memoryStore({ refresh: 'rt' });
    const authApi = api(async (token) => (token === 'at-new' ? user : null));
    const session = await new GetSession(
      authApi,
      refresher(async () => ({ accessToken: 'at-new' }))
    ).execute(store);
    expect(session?.user).toEqual(user);
    expect(state.access).toBe('at-new');
  });

  it('refresh rejected → clears cookies and returns null', async () => {
    const { store, state } = memoryStore({ access: 'old', refresh: 'rt' });
    const session = await new GetSession(
      api(async () => null),
      refresher(async () => {
        throw new RefreshFailedError(401);
      })
    ).execute(store);
    expect(session).toBeNull();
    expect(state.cleared).toBe(true);
  });

  it('invalid access token and no refresh token → clears and returns null', async () => {
    const { store, state } = memoryStore({ access: 'old' });
    const session = await new GetSession(
      api(async () => null),
      refresher(vi.fn())
    ).execute(store);
    expect(session).toBeNull();
    expect(state.cleared).toBe(true);
  });
});
