<script setup lang="ts">
import { Download, Menu, X } from 'lucide-vue-next'
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

import LanguageToggle from '@/components/LanguageToggle.vue'
import { useActiveSection } from '@/composables/useActiveSection'
import { useLocalized } from '@/composables/useLocalized'
import { profile } from '@/data'
import { assetUrl } from '@/utils/assetUrl'

const { t } = useI18n()
const { localize } = useLocalized()

const navItems = [
  { id: 'about', labelKey: 'nav.about' },
  { id: 'skills', labelKey: 'nav.skills' },
  { id: 'experience', labelKey: 'nav.experience' },
  { id: 'projects', labelKey: 'nav.projects' },
  { id: 'education', labelKey: 'nav.education' },
  { id: 'contact', labelKey: 'nav.contact' },
] as const

const activeSection = useActiveSection(navItems.map((item) => item.id))
const resumeUrl = computed(() => assetUrl(profile.resumeFile))

const menuOpen = ref(false)
const isScrolled = ref(false)
const scrollProgress = ref(0)

let previousBodyOverflow = ''
let animationFrameId = 0

function updateScrollState() {
  animationFrameId = 0
  isScrolled.value = window.scrollY > 8

  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = scrollableHeight > 0 ? Math.min(window.scrollY / scrollableHeight, 1) * 100 : 0
}

function onScroll() {
  if (animationFrameId === 0) {
    animationFrameId = window.requestAnimationFrame(updateScrollState)
  }
}

function closeMenu() {
  menuOpen.value = false
}

function onGlobalKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && menuOpen.value) {
    closeMenu()
  }
}

watch(menuOpen, (isOpen) => {
  if (isOpen) {
    previousBodyOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = previousBodyOverflow
  }
})

onMounted(() => {
  updateScrollState()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })
  document.addEventListener('keydown', onGlobalKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
  document.removeEventListener('keydown', onGlobalKeydown)
  if (animationFrameId) {
    window.cancelAnimationFrame(animationFrameId)
  }
  if (menuOpen.value) {
    document.body.style.overflow = previousBodyOverflow
  }
})
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-40">
    <div class="h-0.5 w-full bg-transparent" aria-hidden="true">
      <div class="h-full bg-accent transition-[width] duration-150 ease-out" :style="{ width: `${scrollProgress}%` }" />
    </div>

    <div
      class="border-b backdrop-blur-xl transition duration-300"
      :class="isScrolled ? 'border-line bg-white/[0.92] shadow-[0_1px_20px_rgba(11,28,51,0.06)]' : 'border-transparent bg-white/80'"
    >
      <div class="container-page flex h-[4.25rem] items-center justify-between gap-5">
        <a
          href="#top"
          class="group flex min-w-0 items-center gap-2.5 rounded-md focus-visible:ring-offset-2"
          :aria-label="`${localize(profile.name)} — ${t('actions.backToTop')}`"
        >
          <span
            class="flex size-9 shrink-0 items-center justify-center rounded-lg bg-ink font-mono text-[0.6875rem] font-semibold tracking-[0.04em] text-white transition duration-200 group-hover:bg-accent"
          >
            {{ profile.initials }}
          </span>
          <span class="hidden min-w-0 sm:block">
            <span class="block truncate text-sm font-semibold leading-5 text-ink">{{ localize(profile.name) }}</span>
            <span class="block font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-ink-muted">Portfolio</span>
          </span>
        </a>

        <nav class="hidden items-center gap-0.5 lg:flex" :aria-label="t('a11y.primaryNav')">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            class="rounded-md px-3 py-2 text-[0.8125rem] font-medium transition duration-200"
            :class="
              activeSection === item.id
                ? 'bg-mist text-ink'
                : 'text-ink-muted hover:bg-mist/70 hover:text-ink'
            "
            :aria-current="activeSection === item.id ? 'location' : undefined"
          >
            {{ t(item.labelKey) }}
          </a>
        </nav>

        <div class="flex shrink-0 items-center gap-2">
          <LanguageToggle />

          <a
            :href="resumeUrl"
            download
            class="hidden min-h-9 items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-2 text-xs font-medium text-ink transition hover:border-ink/25 hover:bg-mist sm:inline-flex"
          >
            <Download :size="14" :stroke-width="1.9" aria-hidden="true" />
            {{ t('actions.resume') }}
          </a>

          <button
            type="button"
            class="flex size-9 items-center justify-center rounded-full border border-line bg-white text-ink transition hover:border-ink/25 hover:bg-mist lg:hidden"
            :aria-label="menuOpen ? t('actions.closeMenu') : t('actions.openMenu')"
            :aria-expanded="menuOpen"
            aria-controls="mobile-menu"
            @click="menuOpen = !menuOpen"
          >
            <X v-if="menuOpen" :size="18" aria-hidden="true" />
            <Menu v-else :size="18" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>

    <Transition name="mobile-menu">
      <div v-if="menuOpen" class="fixed inset-0 z-30 lg:hidden">
        <div class="absolute inset-0 bg-navy/30 backdrop-blur-sm" @click="closeMenu" />

        <nav
          id="mobile-menu"
          class="absolute inset-x-4 top-[4.75rem] rounded-2xl border border-line bg-white p-3 shadow-lift"
          :aria-label="t('a11y.mobileNav')"
        >
          <a
            v-for="(item, index) in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            class="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium transition"
            :class="activeSection === item.id ? 'bg-mist text-ink' : 'text-ink-muted hover:bg-mist hover:text-ink'"
            :aria-current="activeSection === item.id ? 'location' : undefined"
            @click="closeMenu"
          >
            <span>{{ t(item.labelKey) }}</span>
            <span class="font-mono text-[0.625rem] text-ink-muted">0{{ index + 1 }}</span>
          </a>

          <div class="mt-2 border-t border-line pt-3">
            <a
              :href="resumeUrl"
              download
              class="flex min-h-11 items-center justify-center gap-2 rounded-xl bg-ink px-4 py-3 text-sm font-medium text-white transition hover:bg-accent"
              @click="closeMenu"
            >
              <Download :size="16" aria-hidden="true" />
              {{ t('actions.downloadResume') }}
            </a>
            <p class="mt-3 px-2 pb-1 text-xs leading-5 text-ink-muted">
              {{ localize(profile.availability) }}
            </p>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 180ms ease;
}

.mobile-menu-enter-active nav,
.mobile-menu-leave-active nav {
  transition: transform 220ms cubic-bezier(0.22, 1, 0.36, 1);
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}

.mobile-menu-enter-from nav,
.mobile-menu-leave-to nav {
  transform: translateY(-8px);
}
</style>
