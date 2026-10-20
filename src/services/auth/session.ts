import { getAccessToken } from './cookies';

import type { AstroCookies } from 'astro';

/**
 * Server-side session reader (SPA-036-A).
 * Place at: src/lib/auth/session.ts
 *
 * It only DECODES the JWT payload to read `exp` / `sub`. It does NOT verify the
 * signature: the API is the owner of authentication and verifies every request.
 * Use this to decide "show page or redirect", never to authorize data access.
 */
export interface Session {
  accessToken: string;
  /** Unix time in milliseconds, or null if the token has no `exp`. */
  expiresAt: number | null;
  userId: string | null;
}

export function decodePayload(token: string): Record<string, unknown> | null {
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  try {
    const json = Buffer.from(parts[1], 'base64url').toString('utf8');
    const payload: unknown = JSON.parse(json);
    return payload && typeof payload === 'object' ? (payload as Record<string, unknown>) : null;
  } catch {
    return null;
  }
}

export function getSession(cookies: AstroCookies): Session | null {
  const accessToken = getAccessToken(cookies);
  if (!accessToken) return null;

  const payload = decodePayload(accessToken);
  if (!payload) return null;

  const exp = typeof payload.exp === 'number' ? payload.exp * 1000 : null;
  if (exp !== null && exp <= Date.now()) return null;

  return {
    accessToken,
    expiresAt: exp,
    userId: typeof payload.sub === 'string' ? payload.sub : null,
  };
}
