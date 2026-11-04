import { readJwtExpiry, secondsUntil } from '../../domain/access-token-expiry';

import {
  ACCESS_COOKIE_PATH,
  AUTH_COOKIE_NAMES,
  REFRESH_COOKIE_PATH,
  accessCookieOptions,
  deleteOptions,
  refreshCookieOptions,
} from './auth-cookie-options';

import type { CookieSecurityContext } from './auth-cookie-options';
import type { TokenStore } from '../../domain/ports/token-store';
import type { SessionTokens } from '../../domain/session-tokens';
import type { AstroCookieSetOptions } from 'astro';

/**
 * The only cookie operations this store needs (Interface Segregation).
 * Astro `cookies` (APIContext / Astro.cookies / middleware context) satisfies it.
 */
export interface CookieJar {
  get(name: string): { value: string } | undefined;
  set(name: string, value: string, options?: AstroCookieSetOptions): void;
  delete(
    name: string,
    options?: Omit<AstroCookieSetOptions, 'expires' | 'maxAge' | 'encode'>
  ): void;
}

/** Adapter: TokenStore on top of Astro `cookies`. */
export class AstroCookieTokenStore implements TokenStore {
  constructor(
    private readonly cookies: CookieJar,
    private readonly security: CookieSecurityContext
  ) {}

  readAccessToken(): string | undefined {
    return this.cookies.get(AUTH_COOKIE_NAMES.ACCESS)?.value || undefined;
  }

  readRefreshToken(): string | undefined {
    return this.cookies.get(AUTH_COOKIE_NAMES.REFRESH)?.value || undefined;
  }

  save(tokens: SessionTokens): void {
    const expiresAt = tokens.accessTokenExpiresAt ?? readJwtExpiry(tokens.accessToken);
    this.cookies.set(
      AUTH_COOKIE_NAMES.ACCESS,
      tokens.accessToken,
      accessCookieOptions(this.security, secondsUntil(expiresAt))
    );

    if (tokens.refreshToken) {
      this.cookies.set(
        AUTH_COOKIE_NAMES.REFRESH,
        tokens.refreshToken,
        refreshCookieOptions(this.security)
      );
    }
  }

  clear(): void {
    this.cookies.delete(AUTH_COOKIE_NAMES.ACCESS, deleteOptions(this.security, ACCESS_COOKIE_PATH));
    this.cookies.delete(
      AUTH_COOKIE_NAMES.REFRESH,
      deleteOptions(this.security, REFRESH_COOKIE_PATH)
    );
  }
}
