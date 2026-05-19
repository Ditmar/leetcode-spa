import { z } from 'zod';

// We define the rules: it must be a positive number
export const configSchema = z.object({
  defaultCacheTTL: z.number().positive().describe('Cache TTL in milliseconds'),
  basePath: z.string().describe('Base path prefix for all app routes (e.g. /app)'),
  navHomePath: z.string().describe('Path for the Home nav item'),
  navExplorePath: z.string().describe('Path for the Explore nav item'),
  navProblemsPath: z.string().describe('Path for the Problems nav item'),
  navContestPath: z.string().describe('Path for the Contest nav item'),
  navDiscussPath: z.string().describe('Path for the Discuss nav item'),
});
// We automatically extract the TypeScript type from Zod
export type Config = z.infer<typeof configSchema>;
