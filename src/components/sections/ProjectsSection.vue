<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

import SectionHeading from '@/components/SectionHeading.vue'
import { useLocalized } from '@/composables/useLocalized'
import { projects } from '@/data'
import type { Project } from '@/types/content'

const emit = defineEmits<{
  select: [project: Project]
}>()

const { t } = useI18n()
const { localize } = useLocalized()
</script>

<template>
  <section id="projects" aria-labelledby="projects-title" class="section-shell border-y border-line bg-mist/60">
    <div class="container-page">
      <SectionHeading
        heading-id="projects-title"
        number="04"
        :eyebrow="t('sections.projects.eyebrow')"
        :title="t('sections.projects.title')"
        :description="t('sections.projects.description')"
      />

      <div class="grid gap-4 sm:grid-cols-2 md:gap-5">
        <button
          v-for="project in projects"
          :key="project.id"
          type="button"
          class="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 text-left shadow-card transition duration-300 ease-smooth hover:-translate-y-1 hover:border-accent/30 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          aria-haspopup="dialog"
          data-testid="project-card"
          @click="emit('select', project)"
        >
          <div class="flex items-center justify-between">
            <span class="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-accent">{{ project.number }}</span>
            <span class="inline-flex items-center gap-1 font-mono text-[0.625rem] text-ink-muted">
              {{ project.year }}
              <ArrowUpRight
                :size="14"
                class="transition duration-300 ease-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                aria-hidden="true"
              />
            </span>
          </div>

          <h3 class="mt-5 text-xl font-semibold tracking-[-0.02em] text-ink">
            {{ localize(project.title) }}
          </h3>
          <p class="mt-2 text-sm leading-6 text-ink-muted">
            {{ localize(project.subtitle) }}
          </p>

          <p class="mt-4 line-clamp-3 text-xs leading-6 text-ink-muted/90">
            {{ localize(project.description) }}
          </p>

          <div class="mt-auto pt-6">
            <div class="flex flex-wrap gap-1.5 border-t border-line pt-4">
              <span v-for="tech in project.stack" :key="tech" class="tag">{{ tech }}</span>
            </div>
            <span class="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-ink transition group-hover:text-accent">
              {{ t('projects.openLabel') }}
              <ArrowUpRight :size="13" aria-hidden="true" />
            </span>
          </div>
        </button>
      </div>
    </div>
  </section>
</template>
