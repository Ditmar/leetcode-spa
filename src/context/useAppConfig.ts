import { useAppContext } from './AppConfigContext';

import type { PublicConfig } from '@/config/env.types';

export function useAppConfig(): PublicConfig {
  return useAppContext().config;
}
