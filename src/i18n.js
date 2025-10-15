import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 번역 리소스 import
import ko from './locales/ko';
import en from './locales/en';
import zh from './locales/zh';
import ja from './locales/ja';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            ko: { translation: ko },
            en: { translation: en },
            zh: { translation: zh },
            ja: { translation: ja }
        },
        lng: 'ko',                    // 기본 언어
        fallbackLng: 'en',            // 폴백 언어
        debug: import.meta.env.DEV,   // 개발 모드에서만 디버그
        interpolation: {
            escapeValue: false          // React에서는 XSS 보호가 기본 적용
        },
        detection: {
            order: ['localStorage', 'navigator', 'htmlTag'],
            caches: ['localStorage']
        }
    });

export default i18n;


