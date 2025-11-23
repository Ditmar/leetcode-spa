type CacheEntry = {
    data: unknown;
    expiresAt: number;
};

const internalCache = new Map<string, CacheEntry>();

const DEFAULT_TTL = Number(import.meta.env.API_CACHE_TTL || 5000);

/**
 * Generic wrapper for fetch + cache + TTL
 */
export async function fetchWithCache<T>(
    url: string,
    options?: RequestInit,
    ttl: number = DEFAULT_TTL
): Promise<T> {
    const key = `${url}-${JSON.stringify(options || {})}`;
    const now = Date.now();

    const cached = internalCache.get(key);
    if (cached && cached.expiresAt > now) {
        return cached.data as T;
    }

    const response = await fetch(url, options);

    if (!response.ok) {
        throw new Error(`Fetch error: ${response.status} ${response.statusText}`);
    }

    const data = (await response.json()) as T;

    internalCache.set(key, {
        data,
        expiresAt: now + ttl,
    });

    return data;
}

/**
 * Manual cache cleaning
 */
export function clearCache() {
    internalCache.clear();
}
