export const AUTH_ENDPOINTS = {
  SIGN_IN: '/auth/login',
  SIGN_UP: '/auth/signup',
  SIGN_OUT: '/auth/logout',
  ME: '/auth/me',
} as const;

export const AUTH_SIGN_OUT_EVENT = 'auth:signout' as const;

export const AUTH_SIGN_IN_EVENT = 'auth:signin' as const;
