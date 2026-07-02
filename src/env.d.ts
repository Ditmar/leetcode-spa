/// <reference types="astro/client" />

import type { AuthUser } from './services/auth/authService.types';
import type { AppConfig } from './utils/config.types';

declare namespace App {
  interface Locals {
    config: AppConfig | null;
    user: AuthUser | null;
  }
}
