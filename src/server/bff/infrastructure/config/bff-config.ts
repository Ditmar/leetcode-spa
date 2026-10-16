/**
 * Server-only configuration of the BFF. Never import this file from browser code:
 * API_BASE_URL is private and must not reach the client bundle.
 */
export interface BffConfig {
  /** Real API, including its prefix. Example: `http://localhost:3000/api`. */
  apiBaseUrl: string;
  /** Time limit for one call to the API. */
  upstreamTimeoutMs: number;
  /** Largest request body the proxy accepts. */
  maxBodyBytes: number;
  /** Extra origins allowed to send POST/PUT/PATCH/DELETE (the site's own origin is always allowed). */
  allowedOrigins: string[];
  /** Production → cookies get the `Secure` flag. */
  isProduction: boolean;
}

type Env = Record<string, string | undefined>;

const DEFAULT_TIMEOUT_MS = 10_000;
const DEFAULT_MAX_BODY_BYTES = 1024 * 1024; // 1 MiB

function positiveInt(value: string | undefined, fallback: number): number {
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback;
}

function parseOrigins(value: string | undefined): string[] {
  if (!value) return [];
  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => new URL(item).origin);
}

export function loadBffConfig(env: Env = process.env): BffConfig {
  const apiBaseUrl = env.API_BASE_URL?.trim();
  if (!apiBaseUrl) {
    throw new Error(
      '[bff] API_BASE_URL is not set. Example: API_BASE_URL=http://localhost:3000/api'
    );
  }

  // Railway gives the public domain without protocol (same variable astro.config.mjs uses).
  const railwayOrigin = env.RAILWAY_PUBLIC_DOMAIN ? `https://${env.RAILWAY_PUBLIC_DOMAIN}` : '';

  return {
    apiBaseUrl: apiBaseUrl.replace(/\/+$/, ''),
    upstreamTimeoutMs: positiveInt(env.BFF_UPSTREAM_TIMEOUT_MS, DEFAULT_TIMEOUT_MS),
    maxBodyBytes: positiveInt(env.BFF_MAX_BODY_BYTES, DEFAULT_MAX_BODY_BYTES),
    allowedOrigins: [...parseOrigins(env.BFF_ALLOWED_ORIGINS), ...parseOrigins(railwayOrigin)],
    isProduction: env.NODE_ENV === 'production' || env.ENV === 'production',
  };
}
