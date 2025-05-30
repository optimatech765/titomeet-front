// locales/client.ts
"use client"
import { createI18nClient } from 'next-international/client'

export const { useI18n, useScopedI18n, I18nProviderClient, useCurrentLocale, useChangeLocale } = createI18nClient({
  en: () => import('./en/common.json'),
  fr: () => import('./fr/common.json'),
  es:()=> import('./es/common.json'),
})

