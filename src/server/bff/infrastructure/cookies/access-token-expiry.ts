/**
 * Reads the `exp` claim of a JWT WITHOUT verifying it. Only used to choose the cookie
 * lifetime; the API is the one that validates the token.
 * Returns Unix time in milliseconds, or undefined if the token is not a readable JWT.
 */
export function readJwtExpiry(token: string): number | undefined {
  const parts = token.split('.');
  if (parts.length !== 3) return undefined;
  try {
    const json = Buffer.from(parts[1], 'base64url').toString('utf8');
    const payload = JSON.parse(json) as { exp?: unknown };
    return typeof payload.exp === 'number' ? payload.exp * 1000 : undefined;
  } catch {
    return undefined;
  }
}

/** Seconds until the access token expires (or undefined to use the default). */
export function secondsUntil(
  expiresAtMs: number | undefined,
  now = Date.now()
): number | undefined {
  if (expiresAtMs === undefined) return undefined;
  const seconds = Math.floor((expiresAtMs - now) / 1000);
  return seconds > 0 ? seconds : undefined;
}
