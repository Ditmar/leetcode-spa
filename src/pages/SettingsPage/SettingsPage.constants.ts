export const SETTINGS_LOCAL_STORAGE_KEY = 'app-user-preferences-v1' as const;

export const LANGUAGE_OPTIONS = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Español' },
] as const;

export type Language = (typeof LANGUAGE_OPTIONS)[number]['value'];

export type ThemeMode = 'light' | 'dark';

export const ACCESSIBILITY_IDS = {
  themeSwitch: 'settings-theme-switch',
  notificationsSwitch: 'settings-notifications-switch',
  languageSelect: 'settings-language-select',
  privacyPublicProfile: 'settings-privacy-public-profile',
  privacyShareActivity: 'settings-privacy-share-activity',
  privacySaveHistory: 'settings-privacy-save-history',
} as const;

const en = {
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
} as const;

const es = {
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
} as const;

export const SETTINGS_LABELS = {
  en,
  es,
} as const;

export const SETTINGS_TEST_IDS = {
  container: 'settings-page-container',
  themeSection: 'settings-section-theme',
  notificationsSection: 'settings-section-notifications',
  languageSection: 'settings-section-language',
  privacySection: 'settings-section-privacy',
} as const;

export type SettingsLabels = typeof SETTINGS_LABELS;
export type Locale = keyof SettingsLabels;
export type LabelKey = keyof SettingsLabels['en'];
