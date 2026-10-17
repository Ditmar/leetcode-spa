import type { SessionTokens } from '../session-tokens';

/**
 * Where the session tokens live between requests (cookies in production,
 * memory in tests). The proxy depends on this port, not on Astro cookies.
 */
export interface TokenStore {
  readAccessToken(): string | undefined;
  readRefreshToken(): string | undefined;
  save(tokens: SessionTokens): void;
  clear(): void;
}
