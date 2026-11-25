export const REFRESH_THRESHOLD_MS = 60_000;

export const AUTH_ENDPOINTS = {
  SIGN_IN: '/auth/signin',
  SIGN_UP: '/auth/signup',
  SIGN_OUT: '/auth/signout',
  REFRESH: '/auth/refresh',
  ME: '/auth/me',
} as const;

/**
 * Fired on `window` when the session ends: sign-out, or a final `401` from the BFF
 * (the server already tried to refresh once). `AuthProvider` listens to it.
 */
export const AUTH_SIGN_OUT_EVENT = 'auth:signout' as const;
