import { getConfig } from '../utils/config';

import type { MiddlewareHandler } from 'astro';

export const configMiddleware: MiddlewareHandler = async (ctx, next) => {
  ctx.locals.config = getConfig();

  return next();
};
