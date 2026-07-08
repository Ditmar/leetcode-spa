import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from './en/common.json';
import esCommon from './es/common.json';

export const SUPPORTED_LANGUAGES = ['en', 'es'] as const;

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const DEFAULT_LANGUAGE: SupportedLanguage = 'en';
export const LANGUAGE_STORAGE_KEY = 'preferred-language';

const resources = {
  en: {
    translation: enCommon,
  },
  es: {
    translation: esCommon,
  },
};

const getInitialLanguage = (): SupportedLanguage => {
  if (typeof window === 'undefined') {
    return DEFAULT_LANGUAGE;
  }

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

  if (storedLanguage === 'en' || storedLanguage === 'es') {
    return storedLanguage;
  }

  return window.navigator.language.toLowerCase().startsWith('es') ? 'es' : DEFAULT_LANGUAGE;
};

if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: SUPPORTED_LANGUAGES,
    interpolation: {
      escapeValue: false,
    },
  });
}

export const setDocumentLanguage = (language: SupportedLanguage): void => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = language;
  }
};

export const persistLanguage = (language: SupportedLanguage): void => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }
};

export default i18n;
