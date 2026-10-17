import type { AuthUser } from '../auth-user';
import type { SessionTokens } from '../session-tokens';

export interface LoginResult {
  tokens: Required<Pick<SessionTokens, 'accessToken' | 'refreshToken'>> & SessionTokens;
  user: AuthUser;
}

export interface SignupInput {
  username: string;
  email: string;
  password: string;
}

/**
 * The auth endpoints of the real API. Throws AuthApiError for 4xx answers and
 * UpstreamTimeoutError / UpstreamUnavailableError when the API is not reachable.
 */
export interface AuthApi {
  login(email: string, password: string): Promise<LoginResult>;
  signup(input: SignupInput): Promise<void>;
  /** Revokes the refresh token in the API. */
  logout(refreshToken: string): Promise<void>;
  /** Returns the user, or `null` when the access token is not valid (401). */
  me(accessToken: string): Promise<AuthUser | null>;
}
