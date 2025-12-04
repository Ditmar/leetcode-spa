import defaultConfig from '../config/default.json';
import envMapping from '../config/env.json';

import { configSchema, type Config } from './config.schema';

let envGetter = (key: string): string | undefined => {
  const env = import.meta.env as Record<string, string | undefined>;
  return env[key];
};

export function setEnvGetterForTesting(getter: (key: string) => string | undefined): void {
  envGetter = getter;
}

export function loadConfig(): unknown {
  const config = { ...defaultConfig } as Record<string, unknown>;
  const mapping = envMapping as Record<string, string>;

  Object.keys(mapping).forEach((key) => {
    const envVarName = mapping[key];
    if (!envVarName) return;

    const envValue = envGetter(envVarName);

    if (envValue !== undefined && envValue !== '') {
      const currentValue = config[key];

      if (typeof currentValue === 'number') {
        const parsed = Number(envValue);
        if (!isNaN(parsed)) {
          config[key] = parsed;
        }
      } else if (typeof currentValue === 'boolean') {
        config[key] = envValue === 'true';
      } else {
        config[key] = envValue;
      }
    }
  });

  return config;
}

export function validateConfig(rawConfig: unknown): Config {
  const result = configSchema.safeParse(rawConfig);

  if (!result.success) {
    const errorMessages = result.error.issues
      .map((e) => `${e.path.join('.')}: ${e.message}`)
      .join(', ');
    throw new Error(`Invalid configuration: ${errorMessages}`);
  }

  return result.data;
}

let cachedConfig: Config | null = null;

export function getConfig(): Config {
  if (!cachedConfig) {
    const raw = loadConfig();
    cachedConfig = validateConfig(raw);
  }
  return cachedConfig;
}

export function getCachedConfig(): Config {
  return getConfig();
}

export function resetConfigCache(): void {
  cachedConfig = null;
  envGetter = (key: string): string | undefined => {
    const env = import.meta.env as Record<string, string | undefined>;
    return env[key];
  };
}
