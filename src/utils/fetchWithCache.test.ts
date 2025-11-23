import { describe, it, expect, vi, beforeEach } from 'vitest';

import { fetchWithCache, clearCache } from './fetchWithCache';

describe('fetchWithCache', () => {
  beforeEach(() => {
    clearCache();
    vi.restoreAllMocks();
  });

  it('It should retrieve data and cache it.', async () => {
    const mockData = { message: 'hola mundo' };

    // Mock the global fetch
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockData,
    });

    const url = 'https://api.fake.test/data';

    // First call → makes a real fetch
    const result1 = await fetchWithCache(url);
    expect(result1).toEqual(mockData);
    expect(global.fetch).toHaveBeenCalledTimes(1);

    // Second call → falls into cache
    const result2 = await fetchWithCache(url);
    expect(result2).toEqual(mockData);
    expect(global.fetch).toHaveBeenCalledTimes(1); // It does NOT increase
  });

  it('The cache should expire according to the TTL', async () => {
    vi.useFakeTimers();

    const mockData = { value: 123 };

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockData,
    });

    const url = 'https://api.fake.test/value';

    // Very short TTL for testing
    const ttl = 1000;

    await fetchWithCache(url, {}, ttl);
    expect(global.fetch).toHaveBeenCalledTimes(1);

    // We advanced time beyond TTL
    vi.advanceTimersByTime(1500);

    // Since it expired → you must call fetch again
    await fetchWithCache(url, {}, ttl);
    expect(global.fetch).toHaveBeenCalledTimes(2);

    vi.useRealTimers();
  });

  it('It should throw an error if fetch fails.', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
    });

    await expect(fetchWithCache('https://api.fake.test/bad')).rejects.toThrow(
      'Fetch error: 500 Internal Server Error'
    );
  });
});
