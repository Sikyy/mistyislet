import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 导入翻译文件
import zhTranslation from './locales/zh.json';
import enTranslation from './locales/en.json';
import ruTranslation from './locales/ru.json';

const resources = {
  zh: {
    translation: zhTranslation,
  },
  en: {
    translation: enTranslation,
  },
  ru: {
    translation: ruTranslation,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'zh', // 默认语言设为中文
    fallbackLng: 'zh',
    debug: process.env.NODE_ENV === 'development',

    interpolation: {
      escapeValue: false, // React已经安全处理
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n; 