<script setup lang="ts">
import { Check, Copy, Download, FileText, Mail } from 'lucide-vue-next'
import { computed, onBeforeUnmount, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import SectionHeading from '@/components/SectionHeading.vue'
import SocialLinks from '@/components/SocialLinks.vue'
import { useLocalized } from '@/composables/useLocalized'
import { profile } from '@/data'
import { assetUrl } from '@/utils/assetUrl'

const { t } = useI18n()
const { localize } = useLocalized()

const resumeUrl = computed(() => assetUrl(profile.resumeFile))
const copied = ref(false)
const copyFailed = ref(false)
let resetTimer: ReturnType<typeof setTimeout> | undefined

const copyMessage = computed(() => {
  if (copied.value) return t('a11y.emailCopied')
  if (copyFailed.value) return t('a11y.copyFailed')
  return ''
})

function fallbackCopy(): boolean {
  const field = document.createElement('textarea')
  field.value = profile.email
  field.setAttribute('readonly', '')
  field.style.position = 'fixed'
  field.style.opacity = '0'
  document.body.appendChild(field)
  field.select()

  try {
    return document.execCommand('copy')
  } catch {
    return false
  } finally {
    document.body.removeChild(field)
  }
}

async function copyEmail() {
  if (resetTimer) clearTimeout(resetTimer)
  copied.value = false
  copyFailed.value = false

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(profile.email)
      copied.value = true
    } else {
      copied.value = fallbackCopy()
      copyFailed.value = !copied.value
    }
  } catch {
    copied.value = fallbackCopy()
    copyFailed.value = !copied.value
  }

  resetTimer = setTimeout(() => {
    copied.value = false
    copyFailed.value = false
  }, 3000)
}

onBeforeUnmount(() => {
  if (resetTimer) clearTimeout(resetTimer)
})
</script>

<template>
  <section
    id="contact"
    aria-labelledby="contact-title"
    class="relative scroll-mt-24 overflow-hidden bg-navy py-20 text-white md:py-28"
  >
    <div class="grid-field-dark pointer-events-none absolute inset-0" aria-hidden="true" />
    <div
      class="pointer-events-none absolute -right-24 top-0 size-[30rem] rounded-full bg-accent/20 blur-3xl"
      aria-hidden="true"
    />

    <div class="container-page relative">
      <SectionHeading
        heading-id="contact-title"
        number="06"
        :eyebrow="t('sections.contact.eyebrow')"
        :title="t('sections.contact.title')"
        :description="t('sections.contact.description')"
        inverted
      />

      <div class="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <div>
          <p class="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-white/50">
            {{ t('contact.emailLabel') }}
          </p>

          <a
            :href="`mailto:${profile.email}`"
            class="mt-3 inline-block break-all text-xl font-medium tracking-[-0.02em] text-white underline decoration-white/20 decoration-1 underline-offset-[6px] transition hover:decoration-accent sm:text-2xl"
          >
            {{ profile.email }}
          </a>

          <div class="mt-5 flex flex-wrap items-center gap-3">
            <button
              type="button"
              class="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-medium text-white/80 transition hover:border-white/40 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              data-testid="copy-email"
              @click="copyEmail"
            >
              <Check v-if="copied" :size="14" aria-hidden="true" />
              <Copy v-else :size="14" aria-hidden="true" />
              {{ copied ? t('actions.copied') : t('actions.copyEmail') }}
            </button>

            <span class="inline-flex items-center gap-2 text-xs text-white/60">
              <Mail :size="13" aria-hidden="true" />
              {{ localize(profile.availability) }}
            </span>
          </div>

          <p
            class="mt-3 min-h-4 text-xs"
            :class="copyFailed ? 'text-red-300' : 'text-emerald-300'"
            aria-live="polite"
          >
            {{ copyMessage }}
          </p>

          <div v-if="profile.socials.length" class="mt-10 border-t border-white/10 pt-6">
            <h3 class="mb-4 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-white/50">
              {{ t('contact.socialLabel') }}
            </h3>
            <SocialLinks :links="profile.socials" inverted />
          </div>
        </div>

        <aside class="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
          <span class="inline-flex size-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white">
            <FileText :size="20" :stroke-width="1.7" aria-hidden="true" />
          </span>

          <h3 class="mt-5 text-lg font-semibold text-white">
            {{ t('contact.resumeTitle') }}
          </h3>
          <p class="mt-2 text-sm leading-6 text-white/60">
            {{ t('contact.resumeDescription') }}
          </p>

          <a :href="resumeUrl" download class="btn-dark-outline mt-6 w-full">
            <Download :size="16" aria-hidden="true" />
            {{ t('actions.downloadResume') }}
          </a>

          <div class="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
            <span class="font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-white/40">{{ t('contact.resumeMeta') }}</span>
            <span class="font-mono text-[0.5625rem] text-white/40">PDF</span>
          </div>

          <p class="mt-6 text-xs leading-5 text-white/40">
            {{ t('contact.note') }}
          </p>
        </aside>
      </div>
    </div>
  </section>
</template>
