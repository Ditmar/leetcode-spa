import type { Config } from './config.schema';

export type AppConfig = Config;
export type PublicConfig = Pick<Config, 'defaultCacheTTL' | 'basePath' | 'navShell'>;
