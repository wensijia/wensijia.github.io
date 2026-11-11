<script setup lang="ts">
import { Download, FileText } from 'lucide-vue-next'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import SectionHeading from '@/components/SectionHeading.vue'
import SocialLinks from '@/components/SocialLinks.vue'
import { useLocalized } from '@/composables/useLocalized'
import { profile } from '@/data'
import { assetUrl } from '@/utils/assetUrl'

const { t } = useI18n()
const { localize } = useLocalized()

const resumeUrl = computed(() => assetUrl(profile.resumeFile))
</script>

<template>
  <section id="about" aria-labelledby="about-title" class="section-shell border-y border-line bg-mist/70">
    <div class="container-page">
      <SectionHeading
        heading-id="about-title"
        number="01"
        :eyebrow="t('sections.about.eyebrow')"
        :title="t('sections.about.title')"
        :description="t('sections.about.description')"
      />

      <div class="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
        <div>
          <div class="mb-3 flex items-center gap-2">
            <FileText :size="14" class="text-accent" aria-hidden="true" />
            <span class="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-ink-muted">
              {{ t('about.summaryLabel') }}
            </span>
          </div>

          <p class="max-w-2xl text-xl font-medium leading-[1.65] tracking-[-0.015em] text-ink sm:text-[1.4rem]">
            {{ localize(profile.aboutLead) }}
          </p>
          <p class="mt-5 max-w-2xl text-[0.9375rem] leading-7 text-ink-muted">
            {{ localize(profile.aboutBody) }}
          </p>

          <div class="mt-10">
            <h3 class="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-ink-muted">
              {{ t('about.principlesLabel') }}
            </h3>
            <div class="mt-4 grid gap-4 sm:grid-cols-3">
              <div
                v-for="(principle, index) in profile.principles"
                :key="principle.title.en"
                class="border-t border-line pt-4"
              >
                <span class="font-mono text-[0.625rem] text-accent">0{{ index + 1 }}</span>
                <h4 class="mt-2 text-sm font-semibold text-ink">
                  {{ localize(principle.title) }}
                </h4>
                <p class="mt-1.5 text-xs leading-5 text-ink-muted">
                  {{ localize(principle.description) }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <aside class="lg:pt-1">
          <div class="card p-6">
            <div class="flex items-center justify-between border-b border-line pb-4">
              <h3 class="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-ink-muted">
                {{ t('about.quickFactsLabel') }}
              </h3>
              <span class="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            </div>

            <dl class="divide-y divide-line">
              <div v-for="fact in profile.quickFacts" :key="fact.label.en" class="py-3.5">
                <dt class="font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-ink-muted">
                  {{ localize(fact.label) }}
                </dt>
                <dd class="mt-1 text-sm font-medium text-ink">
                  {{ localize(fact.value) }}
                </dd>
              </div>
            </dl>

            <div class="mt-5 rounded-xl border border-accent/15 bg-accent-soft/60 p-4">
              <p class="text-xs font-semibold text-ink">
                {{ t('about.resumeLabel') }}
              </p>
              <p class="mt-1 text-xs leading-5 text-ink-muted">
                {{ t('about.resumeDescription') }}
              </p>
              <a :href="resumeUrl" download class="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-accent transition hover:text-accent-strong">
                <Download :size="14" aria-hidden="true" />
                {{ t('actions.downloadResume') }}
              </a>
            </div>

            <div v-if="profile.socials.length" class="mt-6 border-t border-line pt-4">
              <h3 class="mb-3 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-ink-muted">
                {{ t('about.socialLabel') }}
              </h3>
              <SocialLinks :links="profile.socials" />
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>
