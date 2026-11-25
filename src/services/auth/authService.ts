import { apiClient, isApiError } from '../api/apiClient';

import { AUTH_ENDPOINTS, AUTH_SIGN_OUT_EVENT } from './authService.constants';

import type { AuthSession, SignInPayload, SignUpPayload } from './authService.types';

let session: AuthSession | null = null;
const authRequest = { attachToken: false };

const authService = {
  async signIn(payload: SignInPayload): Promise<AuthSession> {
    const { data } = await apiClient.post<AuthSession>(
      AUTH_ENDPOINTS.SIGN_IN,
      payload,
      authRequest
    );
    session = data;
    return data;
  },

  async signUp(payload: SignUpPayload): Promise<AuthSession> {
    const { data } = await apiClient.post<AuthSession>(
      AUTH_ENDPOINTS.SIGN_UP,
      payload,
      authRequest
    );
    session = data;
    return data;
  },

  async signOut(): Promise<void> {
    await apiClient.post<void>(AUTH_ENDPOINTS.SIGN_OUT, undefined, authRequest).catch((error) => {
      // eslint-disable-next-line no-console
      console.error('[authService] Logout request failed:', error);
    });

    session = null;
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent(AUTH_SIGN_OUT_EVENT));
    }
  },

  getSession(): AuthSession | null {
    if (session?.expiresAt !== undefined && session.expiresAt <= Date.now()) return null;
    return session;
  },

  isAuthenticated(): boolean {
    return authService.getSession() !== null;
  },

  async hydrateFromServer(): Promise<AuthSession | null> {
    try {
      const { data } = await apiClient.get<AuthSession>(AUTH_ENDPOINTS.ME, authRequest);
      session = data;
      return data;
    } catch (error) {
      session = null;
      if (isApiError(error) && error.status === 401) return null;
      throw error;
    }
  },
};

export default authService;
