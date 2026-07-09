import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { registerServiceWorker } from './pwa.js';

describe('registerServiceWorker', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('registers the service worker when the browser supports it', async () => {
    const register = vi.fn().mockResolvedValue({});

    Object.defineProperty(window.navigator, 'serviceWorker', {
      configurable: true,
      value: { register },
    });

    const result = await registerServiceWorker('/sw.js');

    expect(result).toBe(true);
    expect(register).toHaveBeenCalledWith('/sw.js');
  });
});
