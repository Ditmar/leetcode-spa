/**
 * User shape the SPA expects (src/services/auth/authService.types.ts → AuthUser).
 * The API today returns `name` instead of `username` and no `role` (API-028),
 * so the BFF maps it here.
 */
export interface AuthUser {
  id: string;
  username: string;
  email: string;
  avatarUrl?: string;
  role: 'user' | 'admin';
}

/**
 * What the browser receives from /api/auth/login, /signup and /me.
 * There are NO tokens here: they stay in HttpOnly cookies.
 */
export interface SessionView {
  user: AuthUser;
  /** Unix time in ms when the access token expires (undefined if unknown). */
  expiresAt?: number;
}

type RawUser = Record<string, unknown>;

function str(value: unknown): string | undefined {
  return typeof value === 'string' && value.length > 0 ? value : undefined;
}

/** Maps the API user (`{ id, name, email, ... }` or `{ id, username, role, ... }`). */
export function toAuthUser(raw: unknown): AuthUser | undefined {
  if (typeof raw !== 'object' || raw === null) return undefined;
  const user = raw as RawUser;
  const id = str(user.id) ?? (typeof user.id === 'number' ? String(user.id) : undefined);
  const email = str(user.email);
  if (!id || !email) return undefined;

  return {
    id,
    email,
    username: str(user.username) ?? str(user.name) ?? email.split('@')[0],
    ...(str(user.avatarUrl) ? { avatarUrl: str(user.avatarUrl) } : {}),
    role: str(user.role)?.toLowerCase() === 'admin' ? 'admin' : 'user',
  };
}
