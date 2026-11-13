import type { Login } from './login';
import type { SessionView } from '../../domain/auth-user';
import type { AuthApi, SignupInput } from '../../domain/ports/auth-api';
import type { TokenStore } from '../../domain/ports/token-store';

/** Use case: create the account, then log in so the user has a session right away. */
export class Signup {
  constructor(
    private readonly authApi: AuthApi,
    private readonly login: Login
  ) {}

  async execute(input: SignupInput, tokens: TokenStore): Promise<SessionView> {
    await this.authApi.signup(input);
    return this.login.execute(input.email, input.password, tokens);
  }
}
