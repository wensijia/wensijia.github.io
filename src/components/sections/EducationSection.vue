<script setup lang="ts">
import { Award, GraduationCap } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

import SectionHeading from '@/components/SectionHeading.vue'
import { useLocalized } from '@/composables/useLocalized'
import { certifications, education } from '@/data'

const { t } = useI18n()
const { localize } = useLocalized()
</script>

<template>
  <section id="education" aria-labelledby="education-title" class="section-shell">
    <div class="container-page">
      <SectionHeading
        heading-id="education-title"
        number="05"
        :eyebrow="t('sections.education.eyebrow')"
        :title="t('sections.education.title')"
        :description="t('sections.education.description')"
      />

      <div :class="certifications.length ? 'grid gap-5 lg:grid-cols-[1.15fr_0.85fr]' : ''">
        <article
          v-for="item in education"
          :key="item.id"
          class="card p-7"
          :class="certifications.length ? 'flex flex-col' : 'lg:p-8'"
        >
          <div
            v-if="!certifications.length"
            class="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between"
          >
            <div class="flex items-start gap-5">
              <span class="icon-tile shrink-0">
                <GraduationCap :size="21" :stroke-width="1.7" aria-hidden="true" />
              </span>
              <div>
                <p class="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-ink-muted">
                  {{ t('education.educationLabel') }}
                </p>
                <h3 class="mt-3 text-xl font-semibold tracking-[-0.02em] text-ink">
                  {{ localize(item.degree) }}
                </h3>
                <p class="mt-1.5 text-sm font-medium text-ink-soft">
                  {{ localize(item.school) }}
                </p>
              </div>
            </div>

            <div
              class="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.625rem] tracking-[0.04em] text-ink-muted sm:flex-col sm:items-end sm:gap-1 sm:pt-1"
            >
              <span>{{ localize(item.period) }}</span>
              <span class="size-0.5 rounded-full bg-line sm:hidden" aria-hidden="true" />
              <span>{{ localize(item.location) }}</span>
            </div>
          </div>

          <div v-else>
            <div>
              <div class="flex items-start justify-between">
                <span class="icon-tile">
                  <GraduationCap :size="21" :stroke-width="1.7" aria-hidden="true" />
                </span>
                <span class="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-ink-muted">
                  {{ t('education.educationLabel') }}
                </span>
              </div>

              <h3 class="mt-6 text-xl font-semibold tracking-[-0.02em] text-ink">
                {{ localize(item.degree) }}
              </h3>
              <p class="mt-1.5 text-sm font-medium text-ink-soft">
                {{ localize(item.school) }}
              </p>

              <div class="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.625rem] tracking-[0.04em] text-ink-muted">
                <span>{{ localize(item.period) }}</span>
                <span class="size-0.5 rounded-full bg-line" aria-hidden="true" />
                <span>{{ localize(item.location) }}</span>
              </div>
            </div>

            <div class="mt-5 border-t border-line pt-4">
              <p class="max-w-2xl text-sm leading-7 text-ink-muted">
                {{ localize(item.summary) }}
              </p>

              <div v-if="item.coursework.length" class="mt-5">
                <p class="font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-ink-muted">
                  {{ t('education.courseworkLabel') }}
                </p>
                <div class="mt-2.5 flex flex-wrap gap-1.5">
                  <span v-for="course in item.coursework" :key="course.en" class="tag">{{ localize(course) }}</span>
                </div>
              </div>
            </div>
          </div>
        </article>

        <aside v-if="certifications.length" class="card flex flex-col p-7">
          <div class="flex items-start justify-between">
            <span class="icon-tile">
              <Award :size="21" :stroke-width="1.7" aria-hidden="true" />
            </span>
            <span class="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-ink-muted">
              {{ t('education.certificationsLabel') }}
            </span>
          </div>

          <ul class="mt-6 divide-y divide-line">
            <li v-for="certification in certifications" :key="certification.id" class="py-4 first:pt-0 last:pb-0">
              <div class="flex items-start justify-between gap-3">
                <div>
                  <p class="text-sm font-semibold text-ink">
                    {{ localize(certification.name) }}
                  </p>
                  <p class="mt-1 text-xs text-ink-muted">
                    {{ localize(certification.issuer) }}
                  </p>
                </div>
                <span class="font-mono text-[0.625rem] text-ink-muted">{{ certification.year }}</span>
              </div>
            </li>
          </ul>

          <p class="mt-auto border-t border-line pt-4 text-xs leading-5 text-ink-muted">
            {{ t('education.note') }}
          </p>
        </aside>
      </div>
    </div>
  </section>
</template>
