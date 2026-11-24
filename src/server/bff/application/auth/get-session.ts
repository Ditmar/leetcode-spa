import { readJwtExpiry } from '../../domain/access-token-expiry';
import { RefreshFailedError } from '../../domain/errors';

import type { SessionView } from '../../domain/auth-user';
import type { AuthApi } from '../../domain/ports/auth-api';
import type { TokenRefresher } from '../../domain/ports/token-refresher';
import type { TokenStore } from '../../domain/ports/token-store';

/**
 * Use case: who is logged in? Used by GET /api/auth/me, the Astro middleware (SPA-007)
 * and server-side page code.
 *
 * - No cookies → null.
 * - Access token expired / rejected → refresh once (shared with the proxy), save, ask again.
 * - Refresh rejected → clear both cookies → null.
 *
 * Page requests (SPA-007 middleware, `.astro` pages) never receive the refresh cookie,
 * because it has `path=/api`. There a rejected access token is NOT a reason to delete
 * the refresh cookie: only the access cookie is cleared and `null` is returned. The
 * client then recovers the session with `GET /api/auth/me`, which does get the refresh
 * cookie and refreshes silently.
 */
export class GetSession {
  constructor(
    private readonly authApi: AuthApi,
    private readonly refresher: TokenRefresher
  ) {}

  async execute(tokens: TokenStore): Promise<SessionView | null> {
    let accessToken = tokens.readAccessToken();
    const refreshToken = tokens.readRefreshToken();
    if (!accessToken && !refreshToken) return null;

    if (accessToken) {
      const user = await this.authApi.me(accessToken);
      if (user) return { user, expiresAt: readJwtExpiry(accessToken) };
      if (!refreshToken) {
        // The refresh token may still be valid but is not sent to this path: keep it.
        tokens.clearAccessToken();
        return null;
      }
    }

    accessToken = await this.refresh(refreshToken as string, tokens);
    if (!accessToken) return null;

    const user = await this.authApi.me(accessToken);
    return user ? { user, expiresAt: readJwtExpiry(accessToken) } : null;
  }

  private async refresh(refreshToken: string, tokens: TokenStore): Promise<string | undefined> {
    try {
      const refreshed = await this.refresher.refresh(refreshToken);
      tokens.save(refreshed);
      return refreshed.accessToken;
    } catch (error) {
      if (error instanceof RefreshFailedError) {
        tokens.clear();
        return undefined;
      }
      throw error;
    }
  }
}
