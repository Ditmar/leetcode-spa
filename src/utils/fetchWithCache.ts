/**
 * Types
 */
type CacheEntry = {
  data: unknown;
  expiresAt: number;
};

type InFlightEntry = Promise<unknown>;

/**
 * Cache Limits (SPA-035)
 * Protects memory from unbounded growth and ensures only safe, public data is stored.
 */
export const MAX_CACHE_ENTRIES = 100;
export const MAX_PAYLOAD_SIZE_BYTES = 256 * 1024; // 256 KB

/**
 * Internal in-memory storage with LRU/FIFO eviction
 */
const internalCache = new Map<string, CacheEntry>();

/**
 * Tracks requests in-flight (deduping concurrent fetches)
 */
const inFlight = new Map<string, InFlightEntry>();

/**
 * TTL configuration with explicit validation
 */
const rawTtl = parseInt(
  (typeof process !== 'undefined' ? process.env.API_CACHE_TTL : undefined) ?? '',
  10
);
const DEFAULT_TTL = Number.isNaN(rawTtl) || rawTtl < 0 ? 5000 : rawTtl;

/**
 * Check if the request is public and safe to cache.
 * Per-user data (requests with credentials/cookies/tokens or non-GET) MUST NEVER be cached.
 */
function isCacheable(opts?: RequestInit): boolean {
  const method = (opts?.method ?? 'GET').toUpperCase();
  if (method !== 'GET') {
    return false;
  }

  if (!opts?.headers) return true;

  const headersObj =
    opts.headers instanceof Headers
      ? Object.fromEntries(opts.headers.entries())
      : ((opts.headers as Record<string, string> | undefined) ?? {});

  const lowerKeys = Object.keys(headersObj).map((k) => k.toLowerCase());
  if (lowerKeys.includes('authorization') || lowerKeys.includes('cookie')) {
    return false;
  }

  return true;
}

/**
 * Normalize fetch options to a stable, safe key
 */
function normalizeOptions(opts?: RequestInit): string {
  if (!opts) return '';

  const method = (opts.method ?? 'GET').toUpperCase();

  const headersObj =
    opts.headers instanceof Headers
      ? Object.fromEntries(opts.headers.entries())
      : ((opts.headers as Record<string, string> | undefined) ?? {});

  const safeHeaders = { ...headersObj };
  delete safeHeaders.Authorization;
  delete safeHeaders.authorization;
  delete safeHeaders.Cookie;
  delete safeHeaders.cookie;

  return JSON.stringify({
    method,
    headers: safeHeaders,
    body: opts.body,
  });
}

/**
 * Deep-clone simple JSON data (protects cache from accidental mutation)
 */
function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

/**
 * Generic wrapper for fetch + cache + TTL + concurrency dedupe
 * Safe for public data with size limit and eviction (SPA-035).
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

  const canCache = isCacheable(options);

  // If request is not cacheable (private data, non-GET), fetch directly without caching
  if (!canCache) {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Fetch error: ${response.status} ${response.statusText}`);
    }
    try {
      return (await response.json()) as T;
    } catch {
      return (await response.text()) as unknown as T;
    }
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

    let parsed: unknown;
    let payloadSize = 0;
    try {
      const text = await response.text();
      payloadSize = new TextEncoder().encode(text).length;
      try {
        parsed = JSON.parse(text);
      } catch {
        parsed = text;
      }
    } catch (e) {
      throw new Error(`Failed to parse response from ${url}: ${String(e)}`);
    }

    // Only cache if payload is within allowed size
    if (payloadSize <= MAX_PAYLOAD_SIZE_BYTES) {
      // Evict oldest entry if limit reached
      if (internalCache.size >= MAX_CACHE_ENTRIES) {
        const oldestKey = internalCache.keys().next().value;
        if (oldestKey) {
          internalCache.delete(oldestKey);
        }
      }

      internalCache.set(key, {
        data: parsed,
        expiresAt: now + ttl,
      });
    }

    return parsed as T;
  })();

  inFlight.set(key, fetchPromise);

  try {
    return await fetchPromise;
  } finally {
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

/**
 * Returns current cache entries count (useful for testing and monitoring)
 */
export function getCacheSize(): number {
  return internalCache.size;
}
