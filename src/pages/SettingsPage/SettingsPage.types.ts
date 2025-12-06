import type { Locale } from './SettingsPage.constants';

export type ThemeMode = 'light' | 'dark';

export type PrivacySettings = {
  publicProfile: boolean;
  shareActivity: boolean;
  saveHistory: boolean;
};

export type UserPreferences = {
  theme: ThemeMode;
  notifications: boolean;
  language: Locale;
  privacy: PrivacySettings;
};

export type UseSettingsPageReturn = {
  preferences: UserPreferences;
  isLoading: boolean;
  toggleTheme: () => void;
  setNotifications: (value: boolean) => void;
  setLanguage: (value: Locale) => void;
  setPrivacySetting: <K extends keyof PrivacySettings>(key: K, value: PrivacySettings[K]) => void;
};

export type SettingsPageProps = {
  initialPreferences?: Partial<UserPreferences>;
  forceMobile?: boolean;
};

export type LabelKey =
  | 'theme'
  | 'notifications'
  | 'language'
  | 'sectionTheme'
  | 'sectionNotifications'
  | 'sectionLanguage'
  | 'sectionPrivacy'
  | 'privacyPublicProfile'
  | 'privacyShareActivity'
  | 'privacySaveHistory';
