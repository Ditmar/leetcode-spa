import { readJwtExpiry } from '../../domain/access-token-expiry';

import type { SessionView } from '../../domain/auth-user';
import type { AuthApi } from '../../domain/ports/auth-api';
import type { TokenStore } from '../../domain/ports/token-store';

/** Use case: check the password in the API and keep the tokens in cookies. */
export class Login {
  constructor(private readonly authApi: AuthApi) {}

  async execute(email: string, password: string, tokens: TokenStore): Promise<SessionView> {
    const result = await this.authApi.login(email, password);
    tokens.save(result.tokens);
    return {
      user: result.user,
      expiresAt: result.tokens.accessTokenExpiresAt ?? readJwtExpiry(result.tokens.accessToken),
    };
  }
}
