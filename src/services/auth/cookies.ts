import type { AstroCookies } from 'astro';

/**
 * Cookie helper for the BFF auth flow (SPA-036-A).
 *
 * Names and lifetimes follow the suggestion in X-002.
 * Agree the final names with whoever does SPA-036-B (proxy) before merging.
 */
export const ACCESS_COOKIE = 'access_token';
export const REFRESH_COOKIE = 'refresh_token';

export const ACCESS_MAX_AGE = 60 * 15; // 15 minutes (seconds)
export const REFRESH_MAX_AGE = 60 * 60 * 24 * 7; // 7 days (seconds)

export const ACCESS_PATH = '/';
export const REFRESH_PATH = '/api/auth';

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

function baseOptions(path: string, maxAge: number) {
  return {
    httpOnly: true,
    sameSite: 'lax' as const,
    // Secure in production only: browsers drop Secure cookies on http://localhost in dev.
    secure: import.meta.env.PROD,
    path,
    maxAge,
  };
}

export function setAuthCookies(cookies: AstroCookies, tokens: AuthTokens): void {
  cookies.set(ACCESS_COOKIE, tokens.accessToken, baseOptions(ACCESS_PATH, ACCESS_MAX_AGE));
  cookies.set(REFRESH_COOKIE, tokens.refreshToken, baseOptions(REFRESH_PATH, REFRESH_MAX_AGE));
}

export function clearAuthCookies(cookies: AstroCookies): void {
  // delete() must use the same path the cookie was set with.
  cookies.delete(ACCESS_COOKIE, { path: ACCESS_PATH });
  cookies.delete(REFRESH_COOKIE, { path: REFRESH_PATH });
}

export function getAccessToken(cookies: AstroCookies): string | null {
  return cookies.get(ACCESS_COOKIE)?.value ?? null;
}

export function getRefreshToken(cookies: AstroCookies): string | null {
  return cookies.get(REFRESH_COOKIE)?.value ?? null;
}
