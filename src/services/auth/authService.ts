import { AUTH_ENDPOINTS, AUTH_SIGN_OUT_EVENT, REFRESH_THRESHOLD_MS } from './authService.constants';

import type { AuthSession, SignInPayload, SignUpPayload } from './authService.types';
import type { ApiError } from '../api/apiClient.types';

function isApiError(err: unknown): err is ApiError {
  return (
    typeof err === 'object' &&
    err !== null &&
    'status' in err &&
    typeof (err as ApiError).status === 'number'
  );
}

let _session: AuthSession | null = null;

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(path, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers ?? {}),
    },
    ...options,
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    const error: ApiError = {
      message: body.message ?? res.statusText,
      code: body.code ?? 'UNKNOWN_ERROR',
      status: res.status,
      details: body,
    };
    throw error;
  }

  return res.json() as Promise<T>;
}

function buildAuthHeaders(accessToken: string): HeadersInit {
  return { Authorization: `Bearer ${accessToken}` };
}

const authService = {
  async signIn(payload: SignInPayload): Promise<AuthSession> {
    const session = await request<AuthSession>(AUTH_ENDPOINTS.SIGN_IN, {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    _session = session;
    return session;
  },

  async signUp(payload: SignUpPayload): Promise<AuthSession> {
    await request<void>(AUTH_ENDPOINTS.SIGN_UP, {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    return authService.signIn({ email: payload.email, password: payload.password });
  },

  async signOut(): Promise<void> {
    if (_session) {
      await request<void>(AUTH_ENDPOINTS.SIGN_OUT, {
        method: 'POST',
        headers: buildAuthHeaders(_session.accessToken),
      }).catch(() => {});
    }

    _session = null;

    window.dispatchEvent(new CustomEvent(AUTH_SIGN_OUT_EVENT));
  },

  async refreshToken(): Promise<AuthSession> {
    try {
      const session = await request<AuthSession>(AUTH_ENDPOINTS.REFRESH, {
        method: 'POST',
      });

      _session = session;
      return session;
    } catch (err) {
      if (isApiError(err) && err.status === 401) {
        await authService.signOut();
        window.location.href = '/';
      }
      throw err;
    }
  },

  getSession(): AuthSession | null {
    if (!_session) return null;

    if (_session.expiresAt <= Date.now()) {
      _session = null;
      return null;
    }

    return _session;
  },

  isAuthenticated(): boolean {
    return authService.getSession() !== null;
  },

  needsRefresh(): boolean {
    if (!_session) return false;
    return _session.expiresAt - Date.now() < REFRESH_THRESHOLD_MS;
  },

  async hydrateFromServer(): Promise<AuthSession | null> {
    try {
      const session = await request<AuthSession>(AUTH_ENDPOINTS.ME);
      _session = session;
      return session;
    } catch {
      _session = null;
      return null;
    }
  },
};

export default authService;
