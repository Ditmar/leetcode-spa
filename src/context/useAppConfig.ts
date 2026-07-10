import { useAppContext } from './AppConfigContext';

import type { PublicConfig } from '../utils/config.types';

export function useAppConfig(): PublicConfig {
  const { config } = useAppContext();

  if (!config) {
    throw new Error('useAppConfig requires a public config');
  }

  return config;
}
