export const TOKEN_KEY = 'auth_access_token' as const;
export const REFRESH_KEY = 'auth_refresh_token' as const;

export const REFRESH_THRESHOLD_MS = 60_000;

export const AUTH_ENDPOINTS = {
  SIGN_IN: '/auth/signin',
  SIGN_UP: '/auth/signup',
  SIGN_OUT: '/auth/signout',
  REFRESH: '/auth/refresh',
  ME: '/auth/me',
} as const;

export const AUTH_SIGN_OUT_EVENT = 'auth:signout' as const;
