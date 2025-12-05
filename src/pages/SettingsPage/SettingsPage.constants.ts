import type { ThemeMode } from './SettingsPage.types';

export const SETTINGS_LOCAL_STORAGE_KEY = 'app-user-preferences';

export const LANGUAGE_OPTIONS = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Español' },
] as const;

export const THEME_OPTIONS: ThemeMode[] = ['light', 'dark'];

export const ACCESSIBILITY_IDS = {
  themeSwitch: 'settings-theme-switch',
  notificationsSwitch: 'settings-notifications-switch',
  languageSelect: 'settings-language-select',
  privacyPublicProfile: 'settings-privacy-public-profile',
  privacyShareActivity: 'settings-privacy-share-activity',
  privacySaveHistory: 'settings-privacy-save-history',
} as const;

export const SETTINGS_LABELS: Record<string, Record<string, string>> = {
  en: {
    theme: 'Dark mode',
    notifications: 'Enable notifications',
    language: 'Language',
    sectionTheme: 'Theme',
    sectionNotifications: 'Notifications',
    sectionLanguage: 'Language',
    sectionPrivacy: 'Privacy Settings',
    privacyPublicProfile: 'Public profile',
    privacyShareActivity: 'Share activity',
    privacySaveHistory: 'Save history',
  },
  es: {
    theme: 'Modo oscuro',
    notifications: 'Habilitar notificaciones',
    language: 'Idioma',
    sectionTheme: 'Tema',
    sectionNotifications: 'Notificaciones',
    sectionLanguage: 'Idioma',
    sectionPrivacy: 'Configuración de privacidad',
    privacyPublicProfile: 'Perfil público',
    privacyShareActivity: 'Compartir actividad',
    privacySaveHistory: 'Guardar historial',
  },
};
