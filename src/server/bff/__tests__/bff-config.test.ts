// @vitest-environment node
import { describe, expect, it } from 'vitest';

import { loadBffConfig, resolveApiBaseUrl } from '../infrastructure/config/bff-config';

describe('bff config (ADR-003: API_BASE_URL is the origin, without /api)', () => {
  it.each([
    ['http://localhost:3000', 'http://localhost:3000/api'],
    ['http://localhost:3000/', 'http://localhost:3000/api'],
    ['https://api.example.com', 'https://api.example.com/api'],
    // old .env files that already include /api keep working
    ['http://localhost:3000/api', 'http://localhost:3000/api'],
    ['http://localhost:3000/api/', 'http://localhost:3000/api'],
  ])('%s → %s', (input, expected) => {
    expect(resolveApiBaseUrl(input)).toBe(expected);
  });

  it('fails clearly when API_BASE_URL is missing', () => {
    expect(() => loadBffConfig({})).toThrow(/API_BASE_URL/);
  });

  it('reads the optional variables', () => {
    const config = loadBffConfig({
      API_BASE_URL: 'http://localhost:3000',
      BFF_UPSTREAM_TIMEOUT_MS: '5000',
      BFF_MAX_BODY_BYTES: '2048',
      BFF_ALLOWED_ORIGINS: 'https://a.example.com/, https://b.example.com',
      RAILWAY_PUBLIC_DOMAIN: 'spa.up.railway.app',
      NODE_ENV: 'production',
    });
    expect(config).toEqual({
      apiBaseUrl: 'http://localhost:3000/api',
      upstreamTimeoutMs: 5000,
      maxBodyBytes: 2048,
      allowedOrigins: [
        'https://a.example.com',
        'https://b.example.com',
        'https://spa.up.railway.app',
      ],
      isProduction: true,
    });
  });
});
