<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { persistLocale, type AppLocale } from '@/i18n'

const { locale, t } = useI18n()

const currentLocale = computed<AppLocale>(() => (locale.value === 'zh' ? 'zh' : 'en'))

const options: { value: AppLocale; label: string; titleKey: string }[] = [
  { value: 'zh', label: '中', titleKey: 'a11y.switchToChinese' },
  { value: 'en', label: 'EN', titleKey: 'a11y.switchToEnglish' },
]

function selectLocale(nextLocale: AppLocale) {
  locale.value = nextLocale
  persistLocale(nextLocale)
}
</script>

<template>
  <div
    class="inline-flex items-center gap-0.5 rounded-full border border-line bg-white p-0.5"
    role="group"
    :aria-label="t('a11y.language')"
    data-testid="locale-toggle"
  >
    <button
      v-for="option in options"
      :key="option.value"
      type="button"
      class="flex min-h-8 min-w-8 items-center justify-center rounded-full px-2.5 font-mono text-[0.6875rem] font-medium transition duration-200"
      :class="
        currentLocale === option.value
          ? 'bg-ink text-white shadow-sm'
          : 'text-ink-muted hover:bg-mist hover:text-ink'
      "
      :aria-pressed="currentLocale === option.value"
      :aria-label="t(option.titleKey)"
      :title="t(option.titleKey)"
      @click="selectLocale(option.value)"
    >
      {{ option.label }}
    </button>
  </div>
</template>
