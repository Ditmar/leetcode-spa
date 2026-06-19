/// <reference types="astro/client" />

import type { AuthUser } from './services/auth/authService.types';
import type { AppConfig } from './utils/config.types';

declare global {
  namespace App {
    interface Locals {
      config: AppConfig;
      user: AuthUser | null;
      isAuthenticated: boolean;
    }
  }
}

export {};
