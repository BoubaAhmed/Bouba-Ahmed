import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./locales/en";
import { frSite } from "./locales/frSite";

const supportedLanguages = ["en", "fr"] as const;

function getInitialLanguage() {
  if (typeof window === "undefined") {
    return "en";
  }

  const stored = window.localStorage.getItem("portfolio-language");
  if (stored && supportedLanguages.includes(stored as (typeof supportedLanguages)[number])) {
    return stored;
  }

  return "en";
}

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: frSite },
  },
  lng: getInitialLanguage(),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export { supportedLanguages };
export default i18n;
