/// <reference types="astro/client" />

import type { AuthUser } from './services/auth/authService.types';
import type { PublicConfig } from './utils/config.types';

declare global {
  namespace App {
    interface Locals {
      config: PublicConfig;
      user: AuthUser | null;
      isAuthenticated: boolean;
    }
  }
}

export {};
