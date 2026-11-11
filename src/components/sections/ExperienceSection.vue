<script setup lang="ts">
import { Building2 } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

import SectionHeading from '@/components/SectionHeading.vue'
import { useLocalized } from '@/composables/useLocalized'
import { experience } from '@/data'

const { t } = useI18n()
const { localize } = useLocalized()
</script>

<template>
  <section id="experience" aria-labelledby="experience-title" class="section-shell border-t border-line">
    <div class="container-page">
      <SectionHeading
        heading-id="experience-title"
        number="03"
        :eyebrow="t('sections.experience.eyebrow')"
        :title="t('sections.experience.title')"
        :description="t('sections.experience.description')"
      />

      <div class="relative">
        <div class="absolute bottom-2 left-[3px] top-2 w-px bg-line lg:left-[215px]" aria-hidden="true" />

        <div
          v-for="(item, index) in experience"
          :key="item.id"
          class="relative grid gap-3 pb-8 last:pb-0 lg:grid-cols-[215px_1fr] lg:gap-12 lg:pb-10"
        >
          <div class="relative pl-7 lg:pl-0 lg:pr-5 lg:pt-1 lg:text-right">
            <span
              class="absolute left-0 top-[0.4375rem] size-[0.4375rem] rounded-full border border-accent/40 bg-white ring-4 ring-white lg:left-auto lg:right-[-3px]"
              aria-hidden="true"
            />
            <p class="font-mono text-[0.6875rem] tracking-[0.04em] text-ink">
              {{ localize(item.period) }}
            </p>
            <p class="mt-1 text-xs text-ink-muted">
              {{ localize(item.location) }}
            </p>
          </div>

          <article class="card ml-7 p-6 lg:ml-0">
            <div class="flex items-start justify-between gap-4">
              <div>
                <div class="flex items-center gap-1.5">
                  <Building2 :size="13" class="text-accent" aria-hidden="true" />
                  <p class="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-ink-muted">
                    {{ localize(item.company) }}
                  </p>
                </div>
                <h3 class="mt-2 text-lg font-semibold tracking-[-0.01em] text-ink">
                  {{ localize(item.role) }}
                </h3>
              </div>
              <span class="font-mono text-[0.625rem] tracking-[0.14em] text-ink-muted">0{{ index + 1 }}</span>
            </div>

            <p class="mt-3 text-sm leading-6 text-ink-muted">
              {{ localize(item.summary) }}
            </p>

            <div class="mt-5 border-t border-line pt-4">
              <p class="font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-ink-muted">
                {{ t('experience.highlightsLabel') }}
              </p>
              <ul class="mt-3 space-y-2.5">
                <li
                  v-for="highlight in item.highlights"
                  :key="highlight.en"
                  class="flex gap-2.5 text-sm leading-6 text-ink-soft"
                >
                  <span class="mt-[9px] size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span>{{ localize(highlight) }}</span>
                </li>
              </ul>
            </div>

            <div class="mt-5 flex flex-wrap gap-1.5">
              <span v-for="tech in item.stack" :key="tech" class="tag">{{ tech }}</span>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
