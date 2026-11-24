import { describe, it, expect, vi, beforeEach } from 'vitest';

import {
  fetchWithCache,
  clearCache,
  getCacheSize,
  MAX_CACHE_ENTRIES,
  MAX_PAYLOAD_SIZE_BYTES,
} from './fetchWithCache';

describe('fetchWithCache', () => {
  beforeEach(() => {
    clearCache();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it('It should retrieve data and cache it.', async () => {
    const mockData = { message: 'hola mundo' };

    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        text: async () => JSON.stringify(mockData),
      })
    );

    const url = 'https://api.fake.test/data';

    const result1 = await fetchWithCache(url);
    expect(result1).toEqual(mockData);
    expect(fetch).toHaveBeenCalledTimes(1);

    const result2 = await fetchWithCache(url);
    expect(result2).toEqual(mockData);
    expect(fetch).toHaveBeenCalledTimes(1); // reused from cache
  });

  it('The cache should expire according to the TTL', async () => {
    vi.useFakeTimers();

    const mockData = { value: 123 };

    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        text: async () => JSON.stringify(mockData),
      })
    );

    const url = 'https://api.fake.test/value';
    const ttl = 1000;

    vi.setSystemTime(0);

    await fetchWithCache(url, {}, ttl);
    expect(fetch).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(1500);
    vi.setSystemTime(1500);

    await fetchWithCache(url, {}, ttl);
    expect(fetch).toHaveBeenCalledTimes(2);

    vi.useRealTimers();
  });

  it('It should throw an error if fetch fails.', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: false,
        status: 500,
        statusText: 'Internal Server Error',
      })
    );

    await expect(fetchWithCache('https://api.fake.test/bad')).rejects.toThrow(
      'Fetch error: 500 Internal Server Error'
    );
  });

  it('Never caches requests with Authorization or Cookie headers (SPA-035 security)', async () => {
    const mockData = { secret: 'user-private-data' };
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => mockData,
      })
    );

    const url = 'https://api.fake.test/user-profile';
    const optionsWithAuth = {
      headers: { Authorization: 'Bearer token-123' },
    };

    const res1 = await fetchWithCache(url, optionsWithAuth);
    const res2 = await fetchWithCache(url, optionsWithAuth);

    expect(res1).toEqual(mockData);
    expect(res2).toEqual(mockData);
    expect(fetch).toHaveBeenCalledTimes(2); // Never cached!
    expect(getCacheSize()).toBe(0);
  });

  it('Never caches non-GET requests (SPA-035)', async () => {
    const mockData = { success: true };
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => mockData,
      })
    );

    const url = 'https://api.fake.test/post-action';
    await fetchWithCache(url, { method: 'POST', body: '{}' });
    await fetchWithCache(url, { method: 'POST', body: '{}' });

    expect(fetch).toHaveBeenCalledTimes(2);
    expect(getCacheSize()).toBe(0);
  });

  it('Evicts oldest entry when MAX_CACHE_ENTRIES limit is reached', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockImplementation((url: string) =>
        Promise.resolve({
          ok: true,
          text: async () => JSON.stringify({ item: url }),
        })
      )
    );

    // Fill cache up to limit + 1
    for (let i = 0; i <= MAX_CACHE_ENTRIES; i++) {
      await fetchWithCache(`https://api.fake.test/item-${i}`);
    }

    expect(getCacheSize()).toBe(MAX_CACHE_ENTRIES);
  });

  it('Bypasses caching when payload exceeds MAX_PAYLOAD_SIZE_BYTES', async () => {
    const bigString = 'x'.repeat(MAX_PAYLOAD_SIZE_BYTES + 10);
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        text: async () => bigString,
      })
    );

    await fetchWithCache('https://api.fake.test/big-data');
    expect(getCacheSize()).toBe(0);
  });
});
