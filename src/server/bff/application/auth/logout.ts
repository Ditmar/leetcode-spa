import type { AuthApi } from '../../domain/ports/auth-api';
import type { TokenStore } from '../../domain/ports/token-store';

/**
 * Use case: revoke the refresh token in the API and clear both cookies.
 * The cookies are cleared even if the API call fails, so the browser is always logged out.
 */
export class Logout {
  constructor(private readonly authApi: AuthApi) {}

  async execute(tokens: TokenStore): Promise<void> {
    const refreshToken = tokens.readRefreshToken();
    try {
      if (refreshToken) await this.authApi.logout(refreshToken);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn('[bff-auth] logout: could not revoke the refresh token in the API', error);
    } finally {
      tokens.clear();
    }
  }
}
