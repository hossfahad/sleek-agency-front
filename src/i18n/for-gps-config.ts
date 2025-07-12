import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

export const supportedLanguages = {
  en: "English",
  de: "Deutsch",
  ar: "العربية",
  zh: "中文"
};

// Create a separate i18n instance specifically for the /for-gps section
const i18nForGps = i18n.createInstance();

i18nForGps
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: Object.keys(supportedLanguages),
    ns: ["common", "hero", "features", "footer"],
    defaultNS: "common",
    debug: process.env.NODE_ENV === "development",
    interpolation: { 
      escapeValue: false 
    },
    backend: {
      loadPath: "/locales/for-gps/{{lng}}/{{ns}}.json"
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"]
    },
    react: {
      useSuspense: true
    }
  });

export default i18nForGps;
