'use client'

import { I18nProviderClient } from '@/lib/locale/client'
import { PropsWithChildren } from 'react'

interface LocaleProviderProps extends PropsWithChildren {
  locale: string
}

export default function LocaleProvider({
  children,
  locale,
}: LocaleProviderProps) {
  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
}
