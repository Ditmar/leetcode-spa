import { getPublicConfig } from '../utils/config';

import type { MiddlewareHandler } from 'astro';

export const configMiddleware: MiddlewareHandler = async (ctx, next) => {
  ctx.locals.config = getPublicConfig();

  return next();
};
