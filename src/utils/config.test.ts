import { describe, it, expect, beforeEach, afterEach } from 'vitest';

import { getConfig, resetConfigCache, setEnvGetterForTesting } from './config';

describe('Config Manager', () => {
  beforeEach(() => {
    resetConfigCache();
  });

  afterEach(() => {
    resetConfigCache();
  });

  it('should return default values when env vars are missing', () => {
    setEnvGetterForTesting(() => undefined);
    const config = getConfig();
    expect(config.defaultCacheTTL).toBe(300000);
  });

  it('should override default with valid environment variable', () => {
    setEnvGetterForTesting((key) => {
      if (key === 'VITE_DEFAULT_CACHE_TTL') return '600000';
      return undefined;
    });
    const config = getConfig();
    expect(config.defaultCacheTTL).toBe(600000);
  });

  it('should handle scientific notation correctly', () => {
    setEnvGetterForTesting(() => '1e5');
    const config = getConfig();
    expect(config.defaultCacheTTL).toBe(100000);
  });

  it('should ignore non-numeric strings and keep default', () => {
    setEnvGetterForTesting(() => 'invalid-number');
    const config = getConfig();
    expect(config.defaultCacheTTL).toBe(300000);
  });

  it('should ignore empty strings and keep default', () => {
    setEnvGetterForTesting(() => '');
    const config = getConfig();
    expect(config.defaultCacheTTL).toBe(300000);
  });

  it('should throw error for negative numbers', () => {
    setEnvGetterForTesting(() => '-50');
    expect(() => getConfig()).toThrow(/Invalid configuration/);
  });

  it('should throw error for zero value', () => {
    setEnvGetterForTesting(() => '0');
    expect(() => getConfig()).toThrow(/Invalid configuration/);
  });

  it('should ensure defaultCacheTTL is a number', () => {
    setEnvGetterForTesting(() => '999');
    const config = getConfig();
    expect(typeof config.defaultCacheTTL).toBe('number');
  });

  it('should cache the configuration object', () => {
    setEnvGetterForTesting(() => undefined);
    const config1 = getConfig();
    const config2 = getConfig();
    expect(config1).toBe(config2);
  });

  it('should reset cache when requested', () => {
    setEnvGetterForTesting(() => undefined);
    const config1 = getConfig();
    resetConfigCache();
    const config2 = getConfig();
    expect(config1).not.toBe(config2);
    expect(config1).toEqual(config2);
  });

  it('should handle unknown environment variables', () => {
    setEnvGetterForTesting((key) => (key === 'UNKNOWN' ? '123' : undefined));
    const config = getConfig();
    expect(config.defaultCacheTTL).toBe(300000);
  });

  it('should handle undefined keys in env getter', () => {
    setEnvGetterForTesting(() => undefined);
    const config = getConfig();
    expect(config).toBeDefined();
  });

  it('should handle large valid numbers', () => {
    setEnvGetterForTesting(() => '999999999');
    const config = getConfig();
    expect(config.defaultCacheTTL).toBe(999999999);
  });

  it('should include field name in error message', () => {
    setEnvGetterForTesting(() => '-1');
    try {
      getConfig();
    } catch (e) {
      const err = e as Error;
      expect(err.message).toContain('defaultCacheTTL');
    }
  });

  it('should return object matching schema keys', () => {
    setEnvGetterForTesting(() => undefined);
    const config = getConfig();
    expect(Object.keys(config)).toContain('defaultCacheTTL');
  });

  it('should not allow modification of cached config to affect future calls', () => {
    setEnvGetterForTesting(() => undefined);
    const config1 = getConfig();
    const mutableConfig = config1 as Record<string, unknown>;
    mutableConfig.temp = 1;

    resetConfigCache();
    const config2 = getConfig();
    expect((config2 as Record<string, unknown>).temp).toBeUndefined();
  });
});
