import { describe, it, expect, beforeEach } from 'vitest';

import { buildConfig, getConfig, getCachedConfig, resetConfigCache } from './config';

describe('Config Manager', () => {
  beforeEach(() => {
    resetConfigCache();
  });

  describe('buildConfig', () => {
    it('should return default cache TTL when environment variable is not set', () => {
      const config = buildConfig({});

      expect(config.defaultCacheTTL).toBe(300000);
    });

    it('should parse valid cache TTL from environment variable', () => {
      const config = buildConfig({
        VITE_DEFAULT_CACHE_TTL: '600000',
      });

      expect(config.defaultCacheTTL).toBe(600000);
    });

    it('should use default when environment variable is invalid string', () => {
      const config = buildConfig({
        VITE_DEFAULT_CACHE_TTL: 'not-a-number',
      });

      expect(config.defaultCacheTTL).toBe(300000);
    });

    it('should use default when environment variable is empty string', () => {
      const config = buildConfig({
        VITE_DEFAULT_CACHE_TTL: '',
      });

      expect(config.defaultCacheTTL).toBe(300000);
    });

    it('should throw error when parsed TTL is zero', () => {
      expect(() =>
        buildConfig({
          VITE_DEFAULT_CACHE_TTL: '0',
        })
      ).toThrow('Configuration error: defaultCacheTTL must be a positive number');
    });

    it('should throw error when parsed TTL is negative', () => {
      expect(() =>
        buildConfig({
          VITE_DEFAULT_CACHE_TTL: '-1000',
        })
      ).toThrow('Configuration error: defaultCacheTTL must be a positive number');
    });

    it('should handle very large TTL values', () => {
      const config = buildConfig({
        VITE_DEFAULT_CACHE_TTL: '86400000',
      });

      expect(config.defaultCacheTTL).toBe(86400000);
    });

    it('should handle scientific notation in environment variable', () => {
      const config = buildConfig({
        VITE_DEFAULT_CACHE_TTL: '3e5',
      });

      expect(config.defaultCacheTTL).toBe(300000);
    });

    it('should handle undefined env vars', () => {
      const config = buildConfig({
        VITE_DEFAULT_CACHE_TTL: undefined,
      });

      expect(config.defaultCacheTTL).toBe(300000);
    });
  });

  describe('getConfig', () => {
    it('should return AppConfig with correct structure', () => {
      const config = getConfig();

      expect(config).toHaveProperty('defaultCacheTTL');
      expect(typeof config.defaultCacheTTL).toBe('number');
    });

    it('should only contain expected properties', () => {
      const config = getConfig();
      const keys = Object.keys(config);

      expect(keys).toEqual(['defaultCacheTTL']);
    });

    it('should return a valid positive TTL value', () => {
      const config = getConfig();

      expect(config.defaultCacheTTL).toBeGreaterThan(0);
    });
  });

  describe('getCachedConfig', () => {
    it('should return cached configuration on subsequent calls', () => {
      const config1 = getCachedConfig();
      const config2 = getCachedConfig();

      expect(config1).toBe(config2); // Same reference
      expect(config1.defaultCacheTTL).toBeGreaterThan(0);
    });

    it('should reset cache when resetConfigCache is called', () => {
      const config1 = getCachedConfig();
      resetConfigCache();
      const config2 = getCachedConfig();

      expect(config1).not.toBe(config2); // Different references after reset
      expect(config1.defaultCacheTTL).toBe(config2.defaultCacheTTL); // Same values
    });
  });

  describe('Type Safety', () => {
    it('should ensure defaultCacheTTL is always a number', () => {
      const configs = [
        buildConfig({}),
        buildConfig({ VITE_DEFAULT_CACHE_TTL: '500000' }),
        buildConfig({ VITE_DEFAULT_CACHE_TTL: '3e5' }),
      ];

      configs.forEach((config) => {
        expect(typeof config.defaultCacheTTL).toBe('number');
        expect(config.defaultCacheTTL).toBeGreaterThan(0);
      });
    });

    it('should reject invalid configurations', () => {
      const invalidConfigs = [
        { VITE_DEFAULT_CACHE_TTL: '0' },
        { VITE_DEFAULT_CACHE_TTL: '-100' },
        { VITE_DEFAULT_CACHE_TTL: '-999999' },
      ];

      invalidConfigs.forEach((envVars) => {
        expect(() => buildConfig(envVars)).toThrow(
          'Configuration error: defaultCacheTTL must be a positive number'
        );
      });
    });
  });
});
