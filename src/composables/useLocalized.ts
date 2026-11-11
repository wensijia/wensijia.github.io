import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import type { Locale, LocalizedText } from '@/types/content'

export function useLocalized() {
  const { locale } = useI18n()

  const currentLocale = computed<Locale>(() => (locale.value === 'zh' ? 'zh' : 'en'))

  function localize(text: LocalizedText): string {
    return text[currentLocale.value]
  }

  return {
    currentLocale,
    localize,
  }
}
