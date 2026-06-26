/// <reference types="astro/client" />
import {
  APP_ENV_VALUES,
  ENV_KEYS,
  type AppEnv,
  type PublicConfig,
  type ServerConfig,
} from './env.types';
// ── Internal helpers ──────────────────────────────────────────────────────────

/**
 * Reads an environment variable by key.
 * Throws a descriptive error at startup if a required variable is missing.
 *
 * @param key - The environment variable key (use ENV_KEYS constants).
 * @param defaultValue - Optional fallback value. If omitted, the variable is required.
 * @returns The resolved string value.
 * @throws {Error} If the variable is missing and no default is provided.
 */
function getEnv(key: string, defaultValue?: string): string {
  const value = (import.meta.env as Record<string, string | undefined>)[key] ?? defaultValue;

  if (value === undefined) {
    throw new Error(
      `[config] Missing required environment variable: ${key}\n` +
        `  Add it to your .env file or deployment environment.\n` +
        `  See .env.example for all required variables.`
    );
  }

  return String(value);
}

/**
 * Parses a string value as a positive integer.
 * Falls back to the default if parsing yields NaN or a non-positive result.
 * Never passes NaN to fetch or downstream consumers.
 *
 * @param raw - Raw string from the environment.
 * @param defaultMs - Fallback value in milliseconds.
 * @returns Parsed positive integer.
 */
function parseTimeoutMs(raw: string, defaultMs: number): number {
  const parsed = Number(raw);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : defaultMs;
}

/**
 * Validates that a given string is a recognized AppEnv value.
 * Throws at startup if APP_ENV contains an unexpected value,
 * preventing silent misconfiguration in production.
 *
 * @param value - Raw APP_ENV string.
 * @returns Narrowed AppEnv type.
 * @throws {Error} If value is not one of the allowed AppEnv literals.
 */
function validateAppEnv(value: string): AppEnv {
  if ((APP_ENV_VALUES as readonly string[]).includes(value)) {
    return value as AppEnv;
  }

  throw new Error(
    `[config] Invalid value for APP_ENV: "${value}"\n` +
      `  Allowed values: ${APP_ENV_VALUES.join(', ')}`
  );
}

/**
 * Parses a boolean feature flag from its raw string representation.
 * Only the string "true" (case-insensitive) resolves to true.
 *
 * @param raw - Raw string from the environment (e.g. "true" | "false").
 * @returns Boolean flag value.
 */
function parseFeatureFlag(raw: string): boolean {
  return raw.trim().toLowerCase() === 'true';
}

// ── Public config builder ─────────────────────────────────────────────────────

/**
 * Builds the public configuration subset.
 * This object is the only part of ServerConfig safe to forward to the browser.
 * JWT_SECRET and other private vars must never appear here.
 */
function buildPublicConfig(appEnv: AppEnv, appVersion: string): PublicConfig {
  return {
    apiBaseUrl: getEnv(ENV_KEYS.PUBLIC_API_BASE_URL),
    appEnv,
    appVersion,
    featureFlags: {
      contests: parseFeatureFlag(getEnv(ENV_KEYS.PUBLIC_FEATURE_CONTESTS, 'true')),
      explore: parseFeatureFlag(getEnv(ENV_KEYS.PUBLIC_FEATURE_EXPLORE, 'true')),
    },
  };
}

// ── Config factory ────────────────────────────────────────────────────────────

/**
 * Reads, validates, and assembles the full server configuration.
 *
 * - Throws immediately (fail-fast) if any required variable is absent.
 * - Validates appEnv against the allowed literals.
 * - Parses numeric fields safely — never produces NaN.
 * - Separates public from private fields explicitly.
 *
 * @returns Fully validated and typed ServerConfig object.
 */
export function createConfig(): ServerConfig {
  const appEnv = validateAppEnv(getEnv(ENV_KEYS.APP_ENV, 'development'));
  const appVersion = getEnv(ENV_KEYS.APP_VERSION, '0.0.0');

  return {
    // ── API ──────────────────────────────────────────────────────────────────
    apiBaseUrl: getEnv(ENV_KEYS.API_BASE_URL),
    apiTimeoutMs: parseTimeoutMs(getEnv(ENV_KEYS.API_TIMEOUT_MS, '10000'), 10_000),

    // ── Auth ─────────────────────────────────────────────────────────────────
    jwtSecret: getEnv(ENV_KEYS.JWT_SECRET),
    cookieDomain: getEnv(ENV_KEYS.COOKIE_DOMAIN, 'localhost'),

    // ── App ──────────────────────────────────────────────────────────────────
    appEnv,
    appVersion,

    // ── Public subset ─────────────────────────────────────────────────────────
    public: buildPublicConfig(appEnv, appVersion),
  };
}

// ── Singleton ─────────────────────────────────────────────────────────────────

/**
 * Application configuration singleton.
 * Evaluated once per server process — safe to import anywhere server-side.
 *
 * @example
 * ```ts
 * import { config } from '@/config/env';
 *
 * const res = await fetch(`${config.apiBaseUrl}/problems`, {
 *   signal: AbortSignal.timeout(config.apiTimeoutMs),
 * });
 *
 * // In Astro middleware — forward only the public subset:
 * Astro.locals.config = config.public;
 * ```
 */
export const config = createConfig();
