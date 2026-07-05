import { z } from 'zod';

export const configSchema = z.object({
  defaultCacheTTL: z.number().positive().describe('Cache TTL in milliseconds'),
  basePath: z.string().describe('Base path for the application'),
  apiBaseUrl: z.string().url().describe('Base URL for the API'),
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

export type Config = z.infer<typeof configSchema>;
