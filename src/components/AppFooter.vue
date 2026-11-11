<script setup lang="ts">
import { ArrowUp, BarChart3 } from 'lucide-vue-next'
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

import { useLocalized } from '@/composables/useLocalized'
import { profile } from '@/data'
import { injectBusuanziScript, shouldLoadPageViews } from '@/utils/analytics'

const { t } = useI18n()
const { localize } = useLocalized()
const currentYear = new Date().getFullYear()

onMounted(() => {
  if (shouldLoadPageViews()) injectBusuanziScript()
})
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

      <div class="mt-6 flex flex-col gap-3 border-t border-line pt-4 sm:flex-row sm:items-center sm:justify-between">
        <p class="inline-flex items-center gap-1.5 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-ink-muted/80">
          <BarChart3 :size="12" :stroke-width="1.8" aria-hidden="true" />
          {{ t('footer.analyticsLabel') }}
        </p>
        <div
          data-testid="analytics-stats"
          class="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[0.6875rem] text-ink-muted"
        >
          <span class="inline-flex items-baseline gap-1.5">
            {{ t('footer.siteViews') }}
            <strong class="font-mono font-medium tabular-nums text-ink">
              <span id="busuanzi_container_site_pv"><span id="busuanzi_value_site_pv">—</span></span>
            </strong>
          </span>
          <span class="inline-flex items-baseline gap-1.5">
            {{ t('footer.uniqueVisitors') }}
            <strong class="font-mono font-medium tabular-nums text-ink">
              <span id="busuanzi_container_site_uv"><span id="busuanzi_value_site_uv">—</span></span>
            </strong>
          </span>
          <span class="inline-flex items-baseline gap-1.5">
            {{ t('footer.pageViews') }}
            <strong class="font-mono font-medium tabular-nums text-ink">
              <span id="busuanzi_container_page_pv"><span id="busuanzi_value_page_pv">—</span></span>
            </strong>
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>
