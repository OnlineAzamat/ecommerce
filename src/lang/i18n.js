import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEn from "./en.json";
import translationUz from "./uz.json";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: translationEn
            },
            uz: {
                translation: translationUz
            }
        },
        lng: 'en',
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        }
})

export default i18n;