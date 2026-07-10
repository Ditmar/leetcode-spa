import type { Config } from './config.schema';

type PublicConfigFields = 'defaultCacheTTL' | 'basePath' | 'navShell';

export type AppConfig = Config;
export type PublicConfig = Pick<AppConfig, PublicConfigFields>;
