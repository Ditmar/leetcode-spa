import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

// ── Helpers ───────────────────────────────────────────────────────────────────

/**
 * Minimal valid environment — satisfies all required variables.
 */
const VALID_ENV: Record<string, string> = {
  API_BASE_URL: 'http://localhost:4000/api/v1',
  API_TIMEOUT_MS: '10000',
  JWT_SECRET: 'test-secret',
  COOKIE_DOMAIN: 'localhost',
  APP_ENV: 'development',
  APP_VERSION: '1.0.0',
  PUBLIC_API_BASE_URL: 'http://localhost:4000/api/v1',
  PUBLIC_FEATURE_CONTESTS: 'true',
  PUBLIC_FEATURE_EXPLORE: 'true',
};

function stubEnv(overrides: Record<string, string | undefined> = {}): void {
  const env = { ...VALID_ENV, ...overrides };
  for (const [key, value] of Object.entries(env)) {
    if (value === undefined) {
      vi.stubEnv(key, undefined as unknown as string);
    } else {
      vi.stubEnv(key, value);
    }
  }
}

// ── Suite ─────────────────────────────────────────────────────────────────────

describe('createConfig()', () => {
  beforeEach(() => {
    stubEnv();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  // ── Happy path ──────────────────────────────────────────────────────────────

  describe('valid environment', () => {
    it('returns a fully populated ServerConfig object', async () => {
      const { createConfig } = await import('./env');
      const cfg = createConfig();

      expect(cfg.apiBaseUrl).toBe('http://localhost:4000/api/v1');
      expect(cfg.apiTimeoutMs).toBe(10_000);
      expect(cfg.jwtSecret).toBe('test-secret');
      expect(cfg.cookieDomain).toBe('localhost');
      expect(cfg.appEnv).toBe('development');
      expect(cfg.appVersion).toBe('1.0.0');
    });

    it('populates config.public with only browser-safe fields', async () => {
      const { createConfig } = await import('./env');
      const cfg = createConfig();

      expect(cfg.public.apiBaseUrl).toBe('http://localhost:4000/api/v1');
      expect(cfg.public.appEnv).toBe('development');
      expect(cfg.public.appVersion).toBe('1.0.0');
      expect(cfg.public.featureFlags.contests).toBe(true);
      expect(cfg.public.featureFlags.explore).toBe(true);
    });

    it('config.public does not contain jwtSecret', async () => {
      const { createConfig } = await import('./env');
      const cfg = createConfig();

      expect(cfg.public).not.toHaveProperty('jwtSecret');
    });

    it('accepts all valid appEnv values', async () => {
      const { createConfig } = await import('./env');
      const envValues = ['development', 'staging', 'production'] as const;

      for (const appEnv of envValues) {
        stubEnv({ APP_ENV: appEnv });
        const cfg = createConfig();
        expect(cfg.appEnv).toBe(appEnv);
        expect(cfg.public.appEnv).toBe(appEnv);
      }
    });
  });

  // ── Missing required variables ──────────────────────────────────────────────

  describe('missing required variables — fail-fast behaviour', () => {
    it('throws when API_BASE_URL is missing', async () => {
      stubEnv({ API_BASE_URL: undefined });
      const { createConfig } = await import('./env');
      expect(() => createConfig()).toThrow(/API_BASE_URL/);
    });

    it('throws when JWT_SECRET is missing', async () => {
      stubEnv({ JWT_SECRET: undefined });
      const { createConfig } = await import('./env');
      expect(() => createConfig()).toThrow(/JWT_SECRET/);
    });

    it('throws when PUBLIC_API_BASE_URL is missing', async () => {
      stubEnv({ PUBLIC_API_BASE_URL: undefined });
      const { createConfig } = await import('./env');
      expect(() => createConfig()).toThrow(/PUBLIC_API_BASE_URL/);
    });

    it('error message includes variable name and guidance', async () => {
      stubEnv({ API_BASE_URL: undefined });
      const { createConfig } = await import('./env');
      expect(() => createConfig()).toThrow(
        '[config] Missing required environment variable: API_BASE_URL'
      );
    });
  });

  // ── Optional variables with defaults ───────────────────────────────────────

  describe('optional variables fall back to defaults', () => {
    it('defaults apiTimeoutMs to 10000 when API_TIMEOUT_MS is absent', async () => {
      stubEnv({ API_TIMEOUT_MS: undefined });
      const { createConfig } = await import('./env');
      const cfg = createConfig();
      expect(cfg.apiTimeoutMs).toBe(10_000);
    });

    it('defaults cookieDomain to "localhost" when COOKIE_DOMAIN is absent', async () => {
      stubEnv({ COOKIE_DOMAIN: undefined });
      const { createConfig } = await import('./env');
      const cfg = createConfig();
      expect(cfg.cookieDomain).toBe('localhost');
    });

    it('defaults appEnv to "development" when APP_ENV is absent', async () => {
      stubEnv({ APP_ENV: undefined });
      const { createConfig } = await import('./env');
      const cfg = createConfig();
      expect(cfg.appEnv).toBe('development');
    });

    it('defaults appVersion to "0.0.0" when APP_VERSION is absent', async () => {
      stubEnv({ APP_VERSION: undefined });
      const { createConfig } = await import('./env');
      const cfg = createConfig();
      expect(cfg.appVersion).toBe('0.0.0');
    });

    it('defaults feature flags to true when PUBLIC_FEATURE_* vars are absent', async () => {
      stubEnv({ PUBLIC_FEATURE_CONTESTS: undefined, PUBLIC_FEATURE_EXPLORE: undefined });
      const { createConfig } = await import('./env');
      const cfg = createConfig();
      expect(cfg.public.featureFlags.contests).toBe(true);
      expect(cfg.public.featureFlags.explore).toBe(true);
    });
  });

  // ── appEnv validation ───────────────────────────────────────────────────────

  describe('appEnv validation', () => {
    it('throws when APP_ENV is an invalid value', async () => {
      stubEnv({ APP_ENV: 'local' });
      const { createConfig } = await import('./env');
      expect(() => createConfig()).toThrow(/APP_ENV/);
    });

    it('throws when APP_ENV is an empty string', async () => {
      stubEnv({ APP_ENV: '' });
      const { createConfig } = await import('./env');
      expect(() => createConfig()).toThrow(/APP_ENV/);
    });

    it('error message lists the allowed values', async () => {
      stubEnv({ APP_ENV: 'test' });
      const { createConfig } = await import('./env');
      expect(() => createConfig()).toThrow(/development.*staging.*production/);
    });
  });

  // ── apiTimeoutMs numeric parsing ────────────────────────────────────────────

  describe('apiTimeoutMs numeric parsing', () => {
    it('parses a valid numeric string correctly', async () => {
      stubEnv({ API_TIMEOUT_MS: '5000' });
      const { createConfig } = await import('./env');
      const cfg = createConfig();
      expect(cfg.apiTimeoutMs).toBe(5_000);
    });

    it('falls back to 10000 when API_TIMEOUT_MS is not a number', async () => {
      stubEnv({ API_TIMEOUT_MS: 'not-a-number' });
      const { createConfig } = await import('./env');
      const cfg = createConfig();
      expect(cfg.apiTimeoutMs).toBe(10_000);
    });

    it('falls back to 10000 when API_TIMEOUT_MS is zero', async () => {
      stubEnv({ API_TIMEOUT_MS: '0' });
      const { createConfig } = await import('./env');
      const cfg = createConfig();
      expect(cfg.apiTimeoutMs).toBe(10_000);
    });

    it('falls back to 10000 when API_TIMEOUT_MS is negative', async () => {
      stubEnv({ API_TIMEOUT_MS: '-500' });
      const { createConfig } = await import('./env');
      const cfg = createConfig();
      expect(cfg.apiTimeoutMs).toBe(10_000);
    });

    it('apiTimeoutMs is always a finite number — never NaN', async () => {
      stubEnv({ API_TIMEOUT_MS: 'NaN' });
      const { createConfig } = await import('./env');
      const cfg = createConfig();
      expect(Number.isFinite(cfg.apiTimeoutMs)).toBe(true);
    });
  });

  // ── Feature flags ───────────────────────────────────────────────────────────

  describe('feature flags parsing', () => {
    it('parses "true" as true', async () => {
      stubEnv({ PUBLIC_FEATURE_CONTESTS: 'true', PUBLIC_FEATURE_EXPLORE: 'true' });
      const { createConfig } = await import('./env');
      const cfg = createConfig();
      expect(cfg.public.featureFlags.contests).toBe(true);
      expect(cfg.public.featureFlags.explore).toBe(true);
    });

    it('parses "false" as false', async () => {
      stubEnv({ PUBLIC_FEATURE_CONTESTS: 'false', PUBLIC_FEATURE_EXPLORE: 'false' });
      const { createConfig } = await import('./env');
      const cfg = createConfig();
      expect(cfg.public.featureFlags.contests).toBe(false);
      expect(cfg.public.featureFlags.explore).toBe(false);
    });

    it('treats any non-"true" string as false', async () => {
      stubEnv({ PUBLIC_FEATURE_CONTESTS: '1', PUBLIC_FEATURE_EXPLORE: 'yes' });
      const { createConfig } = await import('./env');
      const cfg = createConfig();
      expect(cfg.public.featureFlags.contests).toBe(false);
      expect(cfg.public.featureFlags.explore).toBe(false);
    });

    it('is case-insensitive for feature flag parsing', async () => {
      stubEnv({ PUBLIC_FEATURE_CONTESTS: 'TRUE', PUBLIC_FEATURE_EXPLORE: 'True' });
      const { createConfig } = await import('./env');
      const cfg = createConfig();
      expect(cfg.public.featureFlags.contests).toBe(true);
      expect(cfg.public.featureFlags.explore).toBe(true);
    });
  });

  // ── Public/private separation ───────────────────────────────────────────────

  describe('public/private separation', () => {
    it('config.public.apiBaseUrl uses PUBLIC_API_BASE_URL, not API_BASE_URL', async () => {
      stubEnv({
        API_BASE_URL: 'http://internal-api/v1',
        PUBLIC_API_BASE_URL: 'http://public-api/v1',
      });
      const { createConfig } = await import('./env');
      const cfg = createConfig();
      expect(cfg.apiBaseUrl).toBe('http://internal-api/v1');
      expect(cfg.public.apiBaseUrl).toBe('http://public-api/v1');
    });

    it('config.public shares appEnv and appVersion with the root config', async () => {
      stubEnv({ APP_ENV: 'staging', APP_VERSION: '2.5.0' });
      const { createConfig } = await import('./env');
      const cfg = createConfig();
      expect(cfg.appEnv).toBe(cfg.public.appEnv);
      expect(cfg.appVersion).toBe(cfg.public.appVersion);
    });
  });
});
