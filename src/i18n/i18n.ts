import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import koTranslation from "./locales/ko.json";
import enTranslation from "./locales/en.json";

const resources = {
  ko: {
    translation: koTranslation,
  },
  en: {
    translation: enTranslation,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ko",
    // lng 속성을 제거하여 LanguageDetector가 localStorage에서 언어를 감지하도록 함

    keySeparator: ".", // 중첩된 키를 위한 구분자

    interpolation: {
      escapeValue: false, // React는 이미 XSS 보호를 제공하므로 false로 설정
    },

    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
      lookupLocalStorage: "language", // localStorage에서 'language' 키를 찾음
    },

    react: {
      useSuspense: false, // Suspense 모드 비활성화 (필요에 따라 설정)
    },
  });

export default i18n;
