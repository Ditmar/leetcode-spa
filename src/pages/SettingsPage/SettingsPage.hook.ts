import { useCallback, useEffect, useState } from 'react';

import { SETTINGS_LOCAL_STORAGE_KEY, type Locale } from './SettingsPage.constants';

import type {
  UserPreferences,
  UseSettingsPageReturn,
  SettingsPageProps,
} from './SettingsPage.types';

const DEFAULT_PREFERENCES = {
  theme: 'light' as const,
  notifications: true,
  language: 'en' as const,
  privacy: {
    publicProfile: true,
    shareActivity: true,
    saveHistory: true,
  },
} satisfies UserPreferences;

const migratePreferences = (raw: unknown): UserPreferences => {
  if (!raw || typeof raw !== 'object') return DEFAULT_PREFERENCES;
  return { ...DEFAULT_PREFERENCES, ...(raw as Partial<UserPreferences>) };
};

const loadInitialPreferences = (initialFromProps?: Partial<UserPreferences>): UserPreferences => {
  try {
    const item = localStorage.getItem(SETTINGS_LOCAL_STORAGE_KEY);
    if (item !== null) {
      return migratePreferences(JSON.parse(item));
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn('[useSettingsPage] Error reading localStorage:', error);
  }

  return initialFromProps ? { ...DEFAULT_PREFERENCES, ...initialFromProps } : DEFAULT_PREFERENCES;
};

export const useSettingsPage = (props?: SettingsPageProps): UseSettingsPageReturn => {
  const { initialPreferences } = props ?? {};

  const [preferences, setPreferences] = useState<UserPreferences>(() =>
    loadInitialPreferences(initialPreferences)
  );

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const timeoutId = setTimeout(() => {
      try {
        localStorage.setItem(SETTINGS_LOCAL_STORAGE_KEY, JSON.stringify(preferences));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn('[useSettingsPage] No se pudo guardar en localStorage:', error);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [preferences, isLoading]);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = preferences.theme;
    if (preferences.theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [preferences.theme]);

  const update = useCallback((updater: (prev: UserPreferences) => UserPreferences) => {
    setPreferences(updater);
  }, []);

  const toggleTheme = useCallback(() => {
    update((prev) => ({
      ...prev,
      theme: prev.theme === 'light' ? 'dark' : 'light',
    }));
  }, [update]);

  const setNotifications = useCallback(
    (enabled: boolean) => {
      update((prev) => ({ ...prev, notifications: enabled }));
    },
    [update]
  );

  const setLanguage = useCallback(
    (lang: Locale) => {
      update((prev) => ({ ...prev, language: lang }));
    },
    [update]
  );

  const setPrivacySetting = useCallback(
    <K extends keyof UserPreferences['privacy']>(key: K, value: UserPreferences['privacy'][K]) => {
      update((prev) => ({
        ...prev,
        privacy: {
          ...prev.privacy,
          [key]: value,
        },
      }));
    },
    [update]
  );

  return {
    preferences,
    isLoading,
    toggleTheme,
    setNotifications,
    setLanguage,
    setPrivacySetting,
  };
};
