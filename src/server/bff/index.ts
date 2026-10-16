/**
 * Public surface of the BFF module for the rest of the app
 * (auth routes from SPA-036-A, middleware from SPA-007).
 */
export { OriginCsrfGuard } from './infrastructure/security/origin-csrf-guard';
export { AstroCookieTokenStore } from './infrastructure/cookies/astro-cookie-token-store';
export {
  AUTH_COOKIE_NAMES,
  ACCESS_TOKEN_DEFAULT_MAX_AGE_S,
  REFRESH_TOKEN_MAX_AGE_S,
  ACCESS_COOKIE_PATH,
  REFRESH_COOKIE_PATH,
  accessCookieOptions,
  refreshCookieOptions,
} from './infrastructure/cookies/auth-cookie-options';
export { loadBffConfig } from './infrastructure/config/bff-config';
export { jsonError } from './application/proxy-responses';
export type { BffConfig } from './infrastructure/config/bff-config';
export type { SessionTokens } from './domain/session-tokens';
export type { TokenStore } from './domain/ports/token-store';
