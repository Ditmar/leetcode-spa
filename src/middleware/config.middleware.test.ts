import { beforeEach, describe, expect, it, vi } from 'vitest';

import { getConfig } from '../utils/config';

import { configMiddleware } from './config.middleware';

import type { APIContext, MiddlewareNext } from 'astro';

vi.mock('../utils/config', () => ({
  getConfig: vi.fn(),
}));

describe('configMiddleware', () => {
  beforeEach(() => {
    vi.mocked(getConfig).mockReset();
  });

  it('populates locals.config on every request before continuing', async () => {
    const config = {
      defaultCacheTTL: 300000,
      basePath: '',
      navShell: [],
    };
    vi.mocked(getConfig).mockReturnValue(config);

    const ctx = { locals: {} } as APIContext;
    const next = vi.fn(() => new Response('ok')) as unknown as MiddlewareNext;

    await configMiddleware(ctx, next);

    expect(ctx.locals.config).toEqual(config);
    expect(next).toHaveBeenCalledOnce();
  });
});
