import { ACCESS_MAX_AGE } from './cookies';
import { decodePayload } from './session';

/**
 * Shared helpers for the Astro auth routes (BFF) — SPA-036-A.
 * Place at: src/services/auth/authBff.ts
 *
 * TODO(SPA-036-A): confirm these paths against the real API (Swagger / API repo).
 * They are relative to API_BASE_URL (e.g. http://localhost:4000/api/v1).
 */
export const API_AUTH_PATHS = {
  LOGIN: '/auth/login',
  SIGNUP: '/auth/register',
  LOGOUT: '/auth/logout',
  ME: '/auth/me',
} as const;

const API_TIMEOUT_MS = 10_000;

export function getApiBaseUrl(): string {
  const fromProcess = typeof process !== 'undefined' ? process.env.API_BASE_URL : undefined;
  const url = fromProcess ?? import.meta.env.API_BASE_URL;
  if (!url) throw new Error('API_BASE_URL is not set');
  return String(url).replace(/\/+$/, '');
}

export function jsonResponse(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
}

/**
 * CSRF guard for POST/PUT/PATCH/DELETE. Returns a 403 Response when the request
 * does not come from our own site, or null when it is fine.
 */
export function rejectCrossOrigin(request: Request): Response | null {
  const forbidden = () =>
    jsonResponse(403, { code: 'FORBIDDEN', message: 'Cross-origin request blocked' });

  const fetchSite = request.headers.get('sec-fetch-site');
  if (fetchSite) {
    return fetchSite === 'same-origin' || fetchSite === 'none' ? null : forbidden();
  }

  const origin = request.headers.get('origin');
  if (!origin) return forbidden();

  try {
    if (new URL(origin).host === new URL(request.url).host) return null;
  } catch {
    // invalid Origin header -> falls through to forbidden
  }
  return forbidden();
}

export async function readJsonBody(request: Request): Promise<Record<string, unknown> | null> {
  const body: unknown = await request.json().catch(() => null);
  return body && typeof body === 'object' && !Array.isArray(body)
    ? (body as Record<string, unknown>)
    : null;
}

interface CallApiOptions {
  method?: 'GET' | 'POST';
  body?: unknown;
  accessToken?: string | null;
  requestId?: string | null;
}

/**
 * Server-to-server call to the real API. Never forwards browser cookies.
 * Network failures and timeouts become a synthetic 502/504 Response so routes
 * handle them like any other upstream error.
 */
export async function callApi(path: string, options: CallApiOptions = {}): Promise<Response> {
  const headers: Record<string, string> = { Accept: 'application/json' };
  if (options.body !== undefined) headers['Content-Type'] = 'application/json';
  if (options.accessToken) headers.Authorization = `Bearer ${options.accessToken}`;
  if (options.requestId) headers['X-Request-Id'] = options.requestId;

  try {
    return await fetch(`${getApiBaseUrl()}${path}`, {
      method: options.method ?? 'GET',
      headers,
      body: options.body === undefined ? undefined : JSON.stringify(options.body),
      signal: AbortSignal.timeout(API_TIMEOUT_MS),
    });
  } catch (err) {
    const timedOut = err instanceof Error && err.name === 'TimeoutError';
    return jsonResponse(timedOut ? 504 : 502, {
      code: timedOut ? 'UPSTREAM_TIMEOUT' : 'UPSTREAM_UNAVAILABLE',
      message: timedOut ? 'The API took too long to respond' : 'Could not reach the API',
    });
  }
}

/** Turns an API error response into the `{ code, message }` shape the SPA expects. */
export async function errorFromUpstream(res: Response): Promise<Response> {
  const body = (await res.json().catch(() => ({}))) as Record<string, unknown>;
  const message =
    typeof body.message === 'string'
      ? body.message
      : typeof body.error === 'string'
        ? body.error
        : 'Request failed';
  const code = typeof body.code === 'string' ? body.code : `HTTP_${res.status}`;
  return jsonResponse(res.status, { code, message });
}

/** Reads the JSON body of an API success response, unwrapping a `{ data }` envelope if present. */
export async function parseUpstream(res: Response): Promise<Record<string, unknown> | null> {
  const body: unknown = await res.json().catch(() => null);
  if (!body || typeof body !== 'object') return null;
  const record = body as Record<string, unknown>;
  const inner = record.data;
  return inner && typeof inner === 'object' ? (inner as Record<string, unknown>) : record;
}

export interface LoginPayload {
  accessToken: string;
  refreshToken: string;
  user: unknown;
}

export function isLoginPayload(
  value: Record<string, unknown> | null
): value is Record<string, unknown> & LoginPayload {
  return (
    !!value &&
    typeof value.accessToken === 'string' &&
    typeof value.refreshToken === 'string' &&
    value.user !== undefined
  );
}

/** Expiry in ms: from the JWT `exp` claim, or now + access cookie lifetime as a fallback. */
export function resolveExpiresAt(accessToken: string): number {
  const exp = decodePayload(accessToken)?.exp;
  return typeof exp === 'number' ? exp * 1000 : Date.now() + ACCESS_MAX_AGE * 1000;
}
