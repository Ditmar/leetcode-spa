/// <reference types="astro/client" />

/**
 * Private environment variable key constants.
 * Server-side only — never sent to the browser.
 */
export const SERVER_ENV_KEYS = {
  API_BASE_URL: 'API_BASE_URL',
  API_TIMEOUT_MS: 'API_TIMEOUT_MS',
  JWT_SECRET: 'JWT_SECRET',
  COOKIE_DOMAIN: 'COOKIE_DOMAIN',
  APP_ENV: 'APP_ENV',
  APP_VERSION: 'APP_VERSION',
} as const;

/**
 * Public environment variable key constants.
 * Safe to expose to the browser via Astro.locals.
 */
export const PUBLIC_ENV_KEYS = {
  PUBLIC_API_BASE_URL: 'PUBLIC_API_BASE_URL',
  PUBLIC_FEATURE_CONTESTS: 'PUBLIC_FEATURE_CONTESTS',
  PUBLIC_FEATURE_EXPLORE: 'PUBLIC_FEATURE_EXPLORE',
} as const;

/**
 * Valid application environment values.
 */
export const APP_ENV_VALUES = ['development', 'staging', 'production'] as const;

export type AppEnv = (typeof APP_ENV_VALUES)[number];

/**
 * Feature flags derived from PUBLIC_FEATURE_* env vars.
 * Safe to expose to the browser.
 */
export interface FeatureFlags {
  /** Controlled by PUBLIC_FEATURE_CONTESTS */
  contests: boolean;
  /** Controlled by PUBLIC_FEATURE_EXPLORE */
  explore: boolean;
}

/**
 * Public configuration subset — safe to expose to the browser via Astro.locals.
 * Must never contain secrets (JWT_SECRET, API keys, etc.).
 */
export interface PublicConfig {
  /** PUBLIC_API_BASE_URL — browser-visible API endpoint */
  apiBaseUrl: string;
  /** Current application environment */
  appEnv: AppEnv;
  /** Application version injected at build time */
  appVersion: string;
  /** Feature flags derived from PUBLIC_FEATURE_* vars */
  featureFlags: FeatureFlags;
}

/**
 * Full server-side configuration.
 * Only config.public should ever be forwarded to the client.
 */
export interface ServerConfig {
  // ── API ────────────────────────────────────────────────────────────────────
  /** API_BASE_URL — private, server-to-server only */
  apiBaseUrl: string;
  /** API_TIMEOUT_MS — fetch timeout in milliseconds, default 10000 */
  apiTimeoutMs: number;

  // ── Auth ───────────────────────────────────────────────────────────────────
  /** JWT_SECRET — server-side session validation. Never in PublicConfig. */
  jwtSecret: string;
  /** COOKIE_DOMAIN — domain scope for auth cookies, default 'localhost' */
  cookieDomain: string;

  // ── App ────────────────────────────────────────────────────────────────────
  /** Current application environment */
  appEnv: AppEnv;
  /** APP_VERSION — injected at build time, default '0.0.0' */
  appVersion: string;

  // ── Public subset ──────────────────────────────────────────────────────────
  /** Safe subset forwarded to Astro.locals — never contains secrets */
  public: PublicConfig;
}
