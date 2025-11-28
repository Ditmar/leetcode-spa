/**
 * Vite environment variables interface
 */
interface ImportMetaEnv {
  readonly VITE_DEFAULT_CACHE_TTL?: string;
  // Future environment variables can be added here
}

/**
 * Extend ImportMeta to include env property
 */
declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

/**
 * Application configuration interface
 * Defines all configuration keys with their types
 * Designed to be easily extensible for future configuration needs
 */
export interface AppConfig {
  /**
   * Default cache Time-To-Live in milliseconds
   * Used by fetchWithCache utility
   * @default 300000 (5 minutes)
   */
  defaultCacheTTL: number;

  // Future configurations can be added here:
  // apiBaseUrl?: string;
  // featureFlags?: Record<string, boolean>;
  // maxRetries?: number;
}

/**
 * Environment variable mapping interface
 * Documents which env vars map to which config keys
 */
export interface EnvironmentVariables {
  VITE_DEFAULT_CACHE_TTL?: string;
  // Future env vars can be added here
}

// This export is needed to make this file a module
export {};
