import type { SessionTokens } from '../session-tokens';

/**
 * Where the session tokens live between requests (cookies in production,
 * memory in tests). The proxy depends on this port, not on Astro cookies.
 */
export interface TokenStore {
  readAccessToken(): string | undefined;
  readRefreshToken(): string | undefined;
  save(tokens: SessionTokens): void;
  /** Removes both tokens (logout, or the API rejected the refresh token). */
  clear(): void;
  /**
   * Removes only the access token. Used when the refresh token is not part of this
   * request (page requests: the refresh cookie has `path=/api`), so a refresh token
   * that may still be valid is not deleted.
   */
  clearAccessToken(): void;
}
