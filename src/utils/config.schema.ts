import { z } from 'zod';

// Definimos las reglas: debe ser un número positivo
export const configSchema = z.object({
  defaultCacheTTL: z.number().positive().describe('Cache TTL in milliseconds'),
});

// Extraemos el tipo de TypeScript automáticamente de Zod
export type Config = z.infer<typeof configSchema>;
