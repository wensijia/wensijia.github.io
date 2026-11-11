<script setup lang="ts">
import { ArrowDownRight, Download, Mail, MapPin } from 'lucide-vue-next'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { useLocalized } from '@/composables/useLocalized'
import { profile } from '@/data'
import { assetUrl } from '@/utils/assetUrl'

const { t } = useI18n()
const { localize } = useLocalized()

const resumeUrl = computed(() => assetUrl(profile.resumeFile))
const avatarUrl = computed(() => assetUrl(profile.avatarFile))
const currentYear = new Date().getFullYear()
</script>

<template>
  <section
    id="top"
    aria-labelledby="hero-title"
    class="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32 lg:min-h-[calc(100svh-4.25rem)] lg:pb-24 lg:pt-36"
  >
    <div class="grid-field pointer-events-none absolute inset-0" aria-hidden="true" />
    <div
      class="pointer-events-none absolute -right-32 -top-24 size-[34rem] rounded-full bg-accent/[0.07] blur-3xl"
      aria-hidden="true"
    />

    <div class="container-page relative">
      <div class="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <div class="animate-fade-up">
          <div class="mb-7 flex items-center gap-3">
            <span class="h-px w-8 bg-accent" aria-hidden="true" />
            <span class="eyebrow">{{ t('hero.eyebrow') }}</span>
            <span class="font-mono text-[0.625rem] tracking-[0.16em] text-ink-muted">/ {{ currentYear }}</span>
          </div>

          <h1
            id="hero-title"
            class="max-w-2xl text-[3.4rem] font-semibold leading-[0.96] tracking-[-0.045em] text-ink sm:text-[4.5rem] lg:text-[5rem]"
            data-testid="hero-title"
          >
            {{ localize(profile.name) }}
          </h1>

          <p class="mt-5 text-lg font-medium text-accent sm:text-xl">
            {{ localize(profile.role) }}
          </p>

          <p class="mt-5 max-w-[29rem] text-[1.25rem] font-medium leading-[1.45] tracking-[-0.02em] text-ink [word-break:auto-phrase] sm:text-[1.55rem]">
            {{ localize(profile.headline) }}
          </p>

          <p class="mt-4 max-w-xl text-[0.9375rem] leading-7 text-ink-muted">
            {{ localize(profile.intro) }}
          </p>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#projects" class="btn-primary">
              {{ t('actions.viewProjects') }}
              <ArrowDownRight :size="17" aria-hidden="true" />
            </a>
            <a :href="resumeUrl" download class="btn-secondary">
              <Download :size="16" aria-hidden="true" />
              {{ t('actions.downloadResume') }}
            </a>
          </div>

          <div class="mt-9 flex flex-col gap-2.5 text-xs text-ink-muted sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5">
            <span class="inline-flex items-center gap-1.5">
              <MapPin :size="14" class="text-accent" aria-hidden="true" />
              {{ localize(profile.location) }}
            </span>
            <span class="hidden h-3 w-px bg-line sm:block" aria-hidden="true" />
            <span class="inline-flex items-center gap-2">
              <span class="relative flex size-2">
                <span class="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span class="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              {{ localize(profile.availability) }}
            </span>
          </div>
        </div>

        <div class="relative mx-auto w-full max-w-[25.625rem] animate-fade-up [animation-delay:160ms] lg:mr-0">
          <div
            class="absolute -inset-3 -z-10 rounded-[1.75rem] border border-accent/15 bg-accent-soft/40"
            aria-hidden="true"
          />

          <div class="card overflow-hidden">
            <div class="flex items-center justify-between border-b border-line px-5 py-3.5">
              <span class="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-ink-muted">
                {{ t('hero.profile') }} / {{ t('hero.profileIndex') }}
              </span>
              <span class="flex items-center gap-1.5 font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-emerald-600">
                <span class="size-1.5 rounded-full bg-emerald-500" />
                {{ t('hero.available') }}
              </span>
            </div>

            <div class="relative overflow-hidden bg-mist">
              <img
                :src="avatarUrl"
                :alt="localize(profile.avatarAlt)"
                class="aspect-[4/3] w-full object-cover"
                width="800"
                height="600"
              />
              <div class="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-navy/25 to-transparent" aria-hidden="true" />
              <span class="absolute bottom-3 left-4 font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-white/80">
                {{ localize(profile.name) }} · {{ localize(profile.role) }}
              </span>
            </div>

            <div class="p-5">
              <div class="grid grid-cols-2 gap-4">
                <div class="col-span-2">
                  <p class="font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-ink-muted">
                    {{ t('hero.focus') }}
                  </p>
                  <p class="mt-1 text-sm font-medium text-ink">
                    {{ localize(profile.focus) }}
                  </p>
                </div>
                <div class="col-span-2 border-t border-line pt-4">
                  <a
                    :href="`mailto:${profile.email}`"
                    class="inline-flex max-w-full items-center gap-1.5 text-xs text-ink-soft transition hover:text-accent"
                  >
                    <Mail :size="13" class="shrink-0 text-accent" aria-hidden="true" />
                    <span class="truncate">{{ profile.email }}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 hidden items-center justify-between border-t border-line/80 pt-5 lg:flex">
        <span class="font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-ink-muted">
          {{ localize(profile.location) }}
        </span>
        <a href="#about" class="group inline-flex items-center gap-2 font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-ink-muted transition hover:text-accent">
          {{ t('hero.scroll') }}
          <span class="flex h-7 w-4 items-start justify-center rounded-full border border-line p-1">
            <span class="size-1 animate-bounce rounded-full bg-accent" />
          </span>
        </a>
      </div>
    </div>
  </section>
</template>
