import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en.json';
import tr from '../locales/tr.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  resources: {
    en: { translation: en },
    tr: { translation: tr },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

/**
 * Homework: connect `language` Redux slice → `i18n.changeLanguage` (e.g. listener middleware or screen dispatch).
 * Optional: load persisted locale on startup before rendering navigation.
 */
export default i18n;
