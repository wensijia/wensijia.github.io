<script setup lang="ts">
import { ArrowUp } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

import { useLocalized } from '@/composables/useLocalized'
import { profile } from '@/data'

const { t } = useI18n()
const { localize } = useLocalized()
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-line bg-white">
    <div class="container-page py-8">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div class="flex items-center gap-3">
          <span class="flex size-9 items-center justify-center rounded-lg bg-navy font-mono text-[0.6875rem] font-semibold tracking-[0.08em] text-white">
            {{ profile.initials }}
          </span>
          <div>
            <p class="text-sm font-semibold text-ink">
              {{ localize(profile.name) }}
            </p>
            <p class="mt-0.5 text-xs text-ink-muted">
              {{ t('footer.tagline') }}
            </p>
          </div>
        </div>

        <div class="flex flex-col gap-3 text-xs text-ink-muted sm:items-end">
          <a href="#top" class="inline-flex items-center gap-1.5 font-medium text-ink transition hover:text-accent">
            {{ t('actions.backToTop') }}
            <ArrowUp :size="13" aria-hidden="true" />
          </a>
          <p>© {{ currentYear }} {{ localize(profile.name) }}. {{ t('footer.rights') }}</p>
          <p class="font-mono text-[0.625rem] text-ink-muted/80">
            {{ t('footer.builtWith') }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
