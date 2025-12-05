import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en/landing.json';

const resources = {
  en: {
    translation: en,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
