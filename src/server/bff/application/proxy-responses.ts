/**
 * Error bodies use the same shape the SPA apiClient already understands:
 * `{ code, message }` (see src/services/api/apiClient.ts → normalizeHttpError).
 */
export function jsonError(
  status: number,
  code: string,
  message: string,
  requestId?: string
): Response {
  const headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  });
  if (requestId) headers.set('X-Request-Id', requestId);
  return new Response(JSON.stringify({ code, message }), { status, headers });
}

/**
 * Headers that must not travel from the API back to the browser.
 * - hop-by-hop headers belong to one connection only;
 * - `content-encoding`/`content-length` are wrong after fetch() decompressed the body;
 * - `set-cookie`: only the BFF decides which cookies the browser gets.
 */
const BLOCKED_RESPONSE_HEADERS = new Set([
  'connection',
  'keep-alive',
  'proxy-authenticate',
  'proxy-authorization',
  'te',
  'trailer',
  'transfer-encoding',
  'upgrade',
  'content-encoding',
  'content-length',
  'set-cookie',
]);

export function toClientResponse(upstream: Response, requestId: string): Response {
  const headers = new Headers();
  upstream.headers.forEach((value, key) => {
    if (!BLOCKED_RESPONSE_HEADERS.has(key.toLowerCase())) headers.set(key, value);
  });
  headers.set('X-Request-Id', requestId);
  if (!headers.has('Cache-Control')) headers.set('Cache-Control', 'no-store');

  return new Response(upstream.body, {
    status: upstream.status,
    statusText: upstream.statusText,
    headers,
  });
}
