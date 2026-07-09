// eslint-disable-next-line import/no-unresolved
import { sequence } from 'astro:middleware';

import { authMiddleware } from './middleware/auth.middleware';
import { configMiddleware } from './middleware/config.middleware';

export const onRequest = sequence(configMiddleware, authMiddleware);
