<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
import ProjectDetailModal from '@/components/ProjectDetailModal.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import EducationSection from '@/components/sections/EducationSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import { useLocalized } from '@/composables/useLocalized'
import { profile } from '@/data'
import type { Project } from '@/types/content'

const { t, locale } = useI18n()
const { localize } = useLocalized()

const selectedProject = ref<Project | null>(null)
const pageTitle = computed(() => `${localize(profile.name)} — ${localize(profile.role)}`)

watch(
  [locale, pageTitle],
  () => {
    document.documentElement.lang = locale.value === 'zh' ? 'zh-CN' : 'en'
    document.title = `${pageTitle.value} | ${t('meta.titleSuffix')}`

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    description?.setAttribute('content', t('meta.description'))
  },
  { immediate: true },
)
</script>

<template>
  <div class="min-h-screen bg-white">
    <a href="#main-content" class="skip-link">{{ t('a11y.skipToContent') }}</a>

    <AppHeader />

    <main id="main-content" tabindex="-1">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection @select="selectedProject = $event" />
      <EducationSection />
      <ContactSection />
    </main>

    <AppFooter />

    <ProjectDetailModal :project="selectedProject" @close="selectedProject = null" />
  </div>
</template>
