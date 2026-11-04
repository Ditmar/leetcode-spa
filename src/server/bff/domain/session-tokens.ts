/**
 * Tokens that belong to one browser session.
 *
 * The API creates them; the Astro server (BFF) keeps them in HttpOnly cookies.
 * Browser JavaScript never sees these values.
 */
export interface SessionTokens {
  accessToken: string;
  /** Present after login. The current API refresh endpoint does not rotate it. */
  refreshToken?: string;
  /** Unix time in milliseconds. Used to set the access cookie lifetime. */
  accessTokenExpiresAt?: number;
}
