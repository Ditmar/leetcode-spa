const DEFAULT_REDIRECT = '/';
const PARSE_BASE = 'http://localhost';
const AUTH_PATHS = new Set(['/login', '/signup']);

function hasUnsafeCharacters(value: string): boolean {
  return Array.from(value).some((char) => {
    const code = char.charCodeAt(0);
    return code <= 0x1f || code === 0x7f || char === '\\';
  });
}

function isInternalPath(value: string): boolean {
  return value.startsWith('/') && !value.startsWith('//');
}

/**
 * Returns an internal path that is safe to redirect to after signing in.
 *
 * Only paths that start with a single "/" are accepted. Everything else
 * (absolute URLs, "//host", backslashes, control characters, "javascript:")
 * falls back to `fallback`, which avoids open redirects.
 *
 * The path is also normalized the way a browser would. This matters because
 * "/.//evil.com" looks internal but resolves to "//evil.com".
 * Links to /login and /signup are rejected too, so a signed-in user is never
 * redirected back to the page that just redirected them.
 */
export function getSafeRedirect(
  value: string | null | undefined,
  fallback: string = DEFAULT_REDIRECT
): string {
  if (typeof value !== 'string' || value === '') return fallback;
  if (!isInternalPath(value) || hasUnsafeCharacters(value)) return fallback;

  let url: URL;
  try {
    url = new URL(value, PARSE_BASE);
  } catch {
    return fallback;
  }

  if (url.origin !== PARSE_BASE) return fallback;

  const normalized = `${url.pathname}${url.search}${url.hash}`;
  if (!isInternalPath(normalized)) return fallback;

  const pathname = url.pathname.length > 1 ? url.pathname.replace(/\/+$/, '') : url.pathname;
  if (AUTH_PATHS.has(pathname)) return fallback;

  return normalized;
}

/** Builds a link to another auth page and keeps the redirect target. */
export function withRedirect(path: string, redirect: string): string {
  return redirect === DEFAULT_REDIRECT ? path : `${path}?redirect=${encodeURIComponent(redirect)}`;
}
