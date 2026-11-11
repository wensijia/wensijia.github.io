<script setup lang="ts">
import { Database, PanelsTopLeft, Server, Sparkles } from 'lucide-vue-next'
import type { Component } from 'vue'
import { useI18n } from 'vue-i18n'

import SectionHeading from '@/components/SectionHeading.vue'
import { useLocalized } from '@/composables/useLocalized'
import { skillCategories } from '@/data'
import type { SkillIcon } from '@/types/content'

const { t } = useI18n()
const { localize } = useLocalized()

const icons: Record<SkillIcon, Component> = {
  server: Server,
  panels: PanelsTopLeft,
  database: Database,
  sparkles: Sparkles,
}
</script>

<template>
  <section id="skills" aria-labelledby="skills-title" class="section-shell">
    <div class="container-page">
      <SectionHeading
        heading-id="skills-title"
        number="02"
        :eyebrow="t('sections.skills.eyebrow')"
        :title="t('sections.skills.title')"
        :description="t('sections.skills.description')"
      />

      <div class="grid gap-4 md:grid-cols-2 md:gap-5">
        <article
          v-for="(category, index) in skillCategories"
          :key="category.id"
          class="group rounded-2xl border border-line bg-white p-6 shadow-card transition duration-300 ease-smooth hover:-translate-y-1 hover:border-accent/25 hover:shadow-lift"
        >
          <div class="flex items-start justify-between">
            <span class="icon-tile">
              <component :is="icons[category.icon]" :size="20" :stroke-width="1.7" aria-hidden="true" />
            </span>
            <span class="font-mono text-[0.625rem] tracking-[0.14em] text-ink-muted">0{{ index + 1 }}</span>
          </div>

          <h3 class="mt-6 text-lg font-semibold text-ink">
            {{ localize(category.title) }}
          </h3>
          <p class="mt-2 text-sm leading-6 text-ink-muted">
            {{ localize(category.description) }}
          </p>

          <div class="mt-6 flex flex-wrap gap-1.5 border-t border-line pt-5">
            <span v-for="skill in category.skills" :key="skill.en" class="tag">{{ localize(skill) }}</span>
          </div>
        </article>
      </div>

      <div class="mt-6 flex flex-col justify-between gap-3 rounded-xl border border-dashed border-line bg-mist/60 px-5 py-4 sm:flex-row sm:items-center">
        <p class="text-sm font-medium text-ink">
          {{ t('skills.note') }}
        </p>
        <p class="max-w-xl text-xs leading-5 text-ink-muted">
          {{ t('skills.noteDetail') }}
        </p>
      </div>
    </div>
  </section>
</template>
