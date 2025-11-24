import { describe, it, expect, vi, beforeEach } from 'vitest';

import { fetchWithCache, clearCache } from './fetchWithCache';

describe('fetchWithCache', () => {
  beforeEach(() => {
    clearCache();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it('It should retrieve data and cache it.', async () => {
    const mockData = { message: 'hola mundo' };

    // Correct approach: stub global fetch
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => mockData,
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
        json: async () => mockData,
      })
    );

    const url = 'https://api.fake.test/value';
    const ttl = 1000;

    // Set initial fake time
    vi.setSystemTime(0);

    await fetchWithCache(url, {}, ttl);
    expect(fetch).toHaveBeenCalledTimes(1);

    // Advance timers AND system time
    vi.advanceTimersByTime(1500);
    vi.setSystemTime(1500);

    // Now cached entry must be expired, so fetch again
    await fetchWithCache(url, {}, ttl);
    expect(fetch).toHaveBeenCalledTimes(2);

    vi.useRealTimers();
  });

  it('It should throw an error if fetch fails.', async () => {
    // No json() required here; fetchWithCache throws before calling it
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
});
