import type { AstroCookieSetOptions } from 'astro';

/**
 * Cookie contract shared by the auth routes (SPA-036-A) and the proxy (SPA-036-B).
 * Both cookies are HttpOnly: `document.cookie` never shows them.
 */
export const AUTH_COOKIE_NAMES = {
  ACCESS: 'lc_access_token',
  REFRESH: 'lc_refresh_token',
} as const;

/** Fallback when the API does not say when the access token expires (15 minutes). */
export const ACCESS_TOKEN_DEFAULT_MAX_AGE_S = 15 * 60;
/** Same lifetime as the API refresh token (7 days). */
export const REFRESH_TOKEN_MAX_AGE_S = 7 * 24 * 60 * 60;

export const ACCESS_COOKIE_PATH = '/';
/**
 * The ticket suggests `path=/api/auth`, but the browser only sends a cookie when the
 * request path starts with the cookie path. The proxy lives at `/api/*`
 * (e.g. `/api/courses`), so with `/api/auth` it could never read the refresh token
 * to refresh on 401. `/api` keeps the cookie away from pages and still lets
 * `/api/auth/*` and the proxy use it.
 */
export const REFRESH_COOKIE_PATH = '/api';

export interface CookieSecurityContext {
  isProduction: boolean;
  /** Hostname of the current request. */
  hostname: string;
}

const LOCAL_HOSTS = new Set(['localhost', '127.0.0.1', '[::1]', '::1']);

export function shouldUseSecureFlag({ isProduction, hostname }: CookieSecurityContext): boolean {
  return isProduction && !LOCAL_HOSTS.has(hostname);
}

function baseOptions(ctx: CookieSecurityContext, path: string): AstroCookieSetOptions {
  return {
    path,
    httpOnly: true,
    sameSite: 'lax',
    secure: shouldUseSecureFlag(ctx),
  };
}

export function accessCookieOptions(
  ctx: CookieSecurityContext,
  maxAgeSeconds: number = ACCESS_TOKEN_DEFAULT_MAX_AGE_S
): AstroCookieSetOptions {
  return {
    ...baseOptions(ctx, ACCESS_COOKIE_PATH),
    maxAge: Math.max(1, Math.floor(maxAgeSeconds)),
  };
}

export function refreshCookieOptions(ctx: CookieSecurityContext): AstroCookieSetOptions {
  return { ...baseOptions(ctx, REFRESH_COOKIE_PATH), maxAge: REFRESH_TOKEN_MAX_AGE_S };
}

/** Options for `cookies.delete()`: path must match the one used in `set()`. */
export function deleteOptions(ctx: CookieSecurityContext, path: string) {
  const { httpOnly, sameSite, secure } = baseOptions(ctx, path);
  return { path, httpOnly, sameSite, secure };
}
