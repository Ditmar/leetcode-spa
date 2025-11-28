import type { AppConfig } from './config.types';

/**
 * Default configuration values
 */
const DEFAULT_CONFIG: AppConfig = {
  defaultCacheTTL: 300000, // 5 minutes in milliseconds
};

/**
 * Safely parse a string to number
 * @param value - String value to parse
 * @param fallback - Fallback value if parsing fails
 * @returns Parsed number or fallback
 */
function parseNumber(value: string | undefined, fallback: number): number {
  if (!value) return fallback;

  const parsed = Number(value);

  if (isNaN(parsed) || !isFinite(parsed)) {
    // eslint-disable-next-line no-console
    console.warn(`Invalid number value: "${value}". Using fallback: ${fallback}`);
    return fallback;
  }

  return parsed;
}

/**
 * Environment variable reader (extracted for testability)
 * @internal
 */
export function readEnvVars(): Record<string, string | undefined> {
  return {
    VITE_DEFAULT_CACHE_TTL: import.meta.env.VITE_DEFAULT_CACHE_TTL,
  };
}

/**
 * Build configuration from environment variables
 * @param envVars - Environment variables object
 * @returns Configuration object
 * @internal
 */
export function buildConfig(envVars: Record<string, string | undefined>): AppConfig {
  const config: AppConfig = {
    defaultCacheTTL: parseNumber(envVars.VITE_DEFAULT_CACHE_TTL, DEFAULT_CONFIG.defaultCacheTTL),
  };

  // Validation: Ensure TTL is positive
  if (config.defaultCacheTTL <= 0) {
    throw new Error('Configuration error: defaultCacheTTL must be a positive number');
  }

  return config;
}

/**
 * Get application configuration
 * Reads from environment variables with type-safe parsing
 * Falls back to sensible defaults when values are missing
 *
 * @returns Typed configuration object
 * @throws Error if required configuration is missing or invalid
 *
 * @example
 * ```ts
 * import { getConfig } from '@/utils/config';
 *
 * const config = getConfig();
 * console.log(config.defaultCacheTTL); // 300000 or custom value
 * ```
 */
export function getConfig(): AppConfig {
  return buildConfig(readEnvVars());
}

/**
 * Cached configuration instance
 * Avoids re-parsing environment variables on every call
 */
let cachedConfig: AppConfig | null = null;

/**
 * Get cached configuration (recommended for production use)
 * @returns Cached configuration object
 */
export function getCachedConfig(): AppConfig {
  if (!cachedConfig) {
    cachedConfig = getConfig();
  }
  return cachedConfig;
}

/**
 * Reset cached configuration (useful for testing)
 * @internal
 */
export function resetConfigCache(): void {
  cachedConfig = null;
}
