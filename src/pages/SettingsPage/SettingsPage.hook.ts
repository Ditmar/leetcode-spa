import { useCallback, useEffect, useState } from 'react';

import type {
  UserPreferences,
  UseSettingsPageReturn,
  PrivacySettings,
  SettingsPageProps,
} from './SettingsPage.types';

const LOCAL_STORAGE_KEY = 'app-user-preferences';

const getDefaultPreferences = (): UserPreferences => ({
  theme: 'light',
  notifications: true,
  language: 'en',
  privacy: {
    publicProfile: true,
    shareActivity: true,
    saveHistory: true,
  },
});

const loadPreferences = (initial?: Partial<UserPreferences>): UserPreferences => {
  try {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (stored) {
      const parsed = JSON.parse(stored) as UserPreferences;
      return { ...getDefaultPreferences(), ...parsed };
    }

    if (initial) {
      return { ...getDefaultPreferences(), ...initial };
    }

    return getDefaultPreferences();
  } catch {
    return getDefaultPreferences();
  }
};

const savePreferences = (preferences: UserPreferences) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(preferences));
};

export const useSettingsPage = (props?: SettingsPageProps): UseSettingsPageReturn => {
  const { initialPreferences } = props || {};

  const [preferences, setPreferences] = useState<UserPreferences>(() =>
    loadPreferences(initialPreferences)
  );

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      savePreferences(preferences);
    }
  }, [preferences, isLoading]);

  const toggleTheme = useCallback(() => {
    setPreferences((prev) => ({
      ...prev,
      theme: prev.theme === 'light' ? 'dark' : 'light',
    }));
  }, []);

  const setNotifications = useCallback((value: boolean) => {
    setPreferences((prev) => ({
      ...prev,
      notifications: value,
    }));
  }, []);

  const setLanguage = useCallback((value: string) => {
    setPreferences((prev) => ({
      ...prev,
      language: value,
    }));
  }, []);

  const setPrivacySetting = useCallback(
    <K extends keyof PrivacySettings>(key: K, value: PrivacySettings[K]) => {
      setPreferences((prev) => ({
        ...prev,
        privacy: {
          ...prev.privacy,
          [key]: value,
        },
      }));
    },
    []
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
