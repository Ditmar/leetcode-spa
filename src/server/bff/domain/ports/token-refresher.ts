import type { SessionTokens } from '../session-tokens';

/** Exchanges a refresh token for a new access token. Throws RefreshFailedError. */
export interface TokenRefresher {
  refresh(refreshToken: string): Promise<SessionTokens>;
}
