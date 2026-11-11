/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    config?: import('./utils/config.types').AppConfig | null;
    user?: import('./services/auth/authService.types').AuthUser | null;
  }
}
