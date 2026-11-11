import { createI18n } from 'vue-i18n'

import en from './locales/en'
import zh from './locales/zh'

export const SUPPORTED_LOCALES = ['zh', 'en'] as const

export type AppLocale = (typeof SUPPORTED_LOCALES)[number]

const STORAGE_KEY = 'portfolio-locale'

function isAppLocale(value: string | null): value is AppLocale {
  return value !== null && SUPPORTED_LOCALES.includes(value as AppLocale)
}

function getPreferredLocale(): AppLocale {
  if (typeof window === 'undefined') {
    return 'en'
  }

  try {
    const savedLocale = window.localStorage.getItem(STORAGE_KEY)
    if (isAppLocale(savedLocale)) {
      return savedLocale
    }
  } catch {
    // Storage can be unavailable in privacy-restricted browser contexts.
  }

  return window.navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en'
}

export function persistLocale(locale: AppLocale): void {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en'
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, locale)
  } catch {
    // A language switch should still work for the current page session.
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: getPreferredLocale(),
  fallbackLocale: 'en',
  messages: {
    zh,
    en,
  },
  missingWarn: import.meta.env.DEV,
  fallbackWarn: import.meta.env.DEV,
})
