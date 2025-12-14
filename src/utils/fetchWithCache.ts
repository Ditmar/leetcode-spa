/**
 * Types
 */
type CacheEntry = {
  data: unknown;
  expiresAt: number;
};

type InFlightEntry = Promise<unknown>;

/**
 * Internal in-memory storage
 * NOTE: Map has no size limit → use only for small SSR workloads.
 * For production consider Redis or a LRU cache.
 */
const internalCache = new Map<string, CacheEntry>();

/**
 * Tracks requests in-flight (deduping concurrent fetches)
 */
const inFlight = new Map<string, InFlightEntry>();

/**
 * TTL configuration with explicit validation
 */
const rawTtl = parseInt(import.meta.env.API_CACHE_TTL ?? '', 10);
const DEFAULT_TTL = Number.isNaN(rawTtl) || rawTtl < 0 ? 5000 : rawTtl;

/**
 * Normalize fetch options to a stable, safe key (removes sensitive headers)
 */
function normalizeOptions(opts?: RequestInit): string {
  if (!opts) return '';

  const method = opts.method ?? 'GET';

  // Convert headers to a plain object
  const headersObj =
    opts.headers instanceof Headers
      ? Object.fromEntries(opts.headers.entries())
      : ((opts.headers as Record<string, string> | undefined) ?? {});

  // Remove sensitive tokens
  const safeHeaders = { ...headersObj };
  delete safeHeaders.Authorization;
  delete safeHeaders.authorization;

  return JSON.stringify({
    method,
    headers: safeHeaders,
    body: opts.body, // only safe for strings; if other types, user must control
  });
}

/**
 * Deep-clone simple JSON data (protects cache from accidental mutation)
 */
function clone<T>(value: T): T {
  // Works only for JSON-safe values, which is acceptable for API responses.
  return JSON.parse(JSON.stringify(value));
}

/**
 * Generic wrapper for fetch + cache + TTL + concurrency dedupe
 */
export async function fetchWithCache<T>(
  url: string,
  options?: RequestInit,
  ttl: number = DEFAULT_TTL
): Promise<T> {
  // Validate TTL
  if (!Number.isFinite(ttl) || ttl < 0) {
    throw new Error(`Invalid TTL value: ${ttl}`);
  }

  const key = `${url}-${normalizeOptions(options)}`;
  const now = Date.now();

  // 1. Return from cache if valid
  const cached = internalCache.get(key);
  if (cached && cached.expiresAt > now) {
    return clone(cached.data as T);
  }

  // 2. If another request is in-flight, reuse it
  if (inFlight.has(key)) {
    return (await inFlight.get(key)) as T;
  }

  // 3. Create the fetch promise (dedupe)
  const fetchPromise = (async () => {
    let response: Response;

    // Network safety wrapper
    try {
      response = await fetch(url, options);
    } catch (err) {
      throw new Error(
        `Network error fetching ${url}: ${err instanceof Error ? err.message : String(err)}`
      );
    }

    if (!response.ok) {
      throw new Error(`Fetch error: ${response.status} ${response.statusText}`);
    }

    // Try parse JSON → fallback to text if needed
    let parsed: unknown;
    try {
      parsed = await response.json();
    } catch {
      parsed = await response.text();
    }

    // Write to cache
    internalCache.set(key, {
      data: parsed,
      expiresAt: now + ttl,
    });

    return parsed as T;
  })();

  // store in-flight
  inFlight.set(key, fetchPromise);

  try {
    return await fetchPromise;
  } finally {
    // always cleanup
    inFlight.delete(key);
  }
}

/**
 * Manual cache cleaning
 */
export function clearCache() {
  internalCache.clear();
  inFlight.clear();
}
