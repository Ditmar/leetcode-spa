import type { GuardResult, RequestGuard } from '../../domain/ports/request-guard';

const UNSAFE_METHODS = new Set(['POST', 'PUT', 'PATCH', 'DELETE']);

const FORBIDDEN: GuardResult = {
  allowed: false,
  status: 403,
  code: 'FORBIDDEN',
  message: 'Cross-site request blocked',
};

/**
 * CSRF protection for requests that change data (X-002: SameSite=Lax + Origin check).
 *
 * 1. If the browser sends `Origin`, it must be our own origin (or one in BFF_ALLOWED_ORIGINS).
 * 2. If there is no `Origin`, `Sec-Fetch-Site` must be `same-origin`.
 * 3. If there is neither, the request is blocked (modern browsers always send one of them).
 *
 * Exported so the auth routes (login, signup, logout) can use the same guard.
 */
export class OriginCsrfGuard implements RequestGuard {
  private readonly extraOrigins: ReadonlySet<string>;

  constructor(allowedOrigins: readonly string[] = []) {
    this.extraOrigins = new Set(allowedOrigins);
  }

  check(request: Request): GuardResult {
    if (!UNSAFE_METHODS.has(request.method.toUpperCase())) return { allowed: true };

    const origin = request.headers.get('origin');
    if (origin) {
      return this.isTrusted(origin, request) ? { allowed: true } : FORBIDDEN;
    }

    const fetchSite = request.headers.get('sec-fetch-site');
    return fetchSite === 'same-origin' ? { allowed: true } : FORBIDDEN;
  }

  private isTrusted(origin: string, request: Request): boolean {
    if (origin === 'null') return false;
    if (this.extraOrigins.has(origin)) return true;
    try {
      return new URL(request.url).origin === origin;
    } catch {
      return false;
    }
  }
}
