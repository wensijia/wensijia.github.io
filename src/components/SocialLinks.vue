<script setup lang="ts">
import { Github, Globe2, Linkedin } from 'lucide-vue-next'
import type { Component } from 'vue'
import { useI18n } from 'vue-i18n'

import type { SocialIcon, SocialLink } from '@/types/content'

withDefaults(
  defineProps<{
    links: SocialLink[]
    inverted?: boolean
  }>(),
  {
    inverted: false,
  },
)

const { t } = useI18n()

const icons: Record<SocialIcon, Component> = {
  github: Github,
  linkedin: Linkedin,
  globe: Globe2,
}
</script>

<template>
  <ul class="flex flex-wrap items-center gap-2">
    <li v-for="link in links" :key="link.id">
      <a
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex min-h-9 items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition duration-200"
        :class="
          inverted
            ? 'border-white/15 text-white/70 hover:border-white/35 hover:bg-white/10 hover:text-white'
            : 'border-line bg-white text-ink-soft hover:border-ink/25 hover:bg-mist hover:text-ink'
        "
        :aria-label="t('a11y.opensNewTab', { name: link.label })"
      >
        <component :is="icons[link.icon]" :size="14" :stroke-width="1.9" aria-hidden="true" />
        {{ link.label }}
      </a>
    </li>
  </ul>
</template>
