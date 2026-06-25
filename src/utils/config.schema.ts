import { z } from 'zod';

// We define the rules: it must be a positive number
export const configSchema = z.object({
  defaultCacheTTL: z.number().positive().describe('Cache TTL in milliseconds'),
  basePath: z.string().describe('Base path for the application'),
  navShell: z
    .array(
      z.object({
        id: z.string(),
        label: z.string(),
        href: z.string(),
      })
    )
    .describe('Navigation menu structure'),
  featureFlags: z
    .object({
      contests: z.boolean(),
    })
    .default({ contests: true })
    .describe('Feature flags to enable or disable sections of the app'),
});
// We automatically extract the TypeScript type from Zod
export type Config = z.infer<typeof configSchema>;
