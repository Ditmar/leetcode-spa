import { z } from 'zod';

// We define the rules: it must be a positive number
export const configSchema = z.object({
  defaultCacheTTL: z.number().positive().describe('Cache TTL in milliseconds'),
});
// We automatically extract the TypeScript type from Zod
export type Config = z.infer<typeof configSchema>;
