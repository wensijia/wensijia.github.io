<script setup lang="ts">
import { ArrowUpRight, Github, X } from 'lucide-vue-next'
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

import { useLocalized } from '@/composables/useLocalized'
import type { Project } from '@/types/content'

const props = defineProps<{
  project: Project | null
}>()

const emit = defineEmits<{
  close: []
}>()

const { t } = useI18n()
const { localize } = useLocalized()

const dialogPanel = ref<HTMLElement | null>(null)
const closeButton = ref<HTMLButtonElement | null>(null)
const titleId = computed(() => (props.project ? `project-dialog-${props.project.id}` : 'project-dialog'))

let lastFocusedElement: HTMLElement | null = null
let previousBodyOverflow = ''
let isListening = false

function onKeydown(event: KeyboardEvent) {
  if (!props.project) {
    return
  }

  if (event.key === 'Escape') {
    event.preventDefault()
    emit('close')
    return
  }

  if (event.key !== 'Tab' || !dialogPanel.value) {
    return
  }

  const focusableElements = Array.from(
    dialogPanel.value.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  )

  if (focusableElements.length === 0) {
    event.preventDefault()
    return
  }

  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]
  const activeElement = document.activeElement

  if (event.shiftKey && (activeElement === firstElement || !dialogPanel.value.contains(activeElement))) {
    event.preventDefault()
    lastElement?.focus()
  } else if (!event.shiftKey && activeElement === lastElement) {
    event.preventDefault()
    firstElement?.focus()
  }
}

function releasePage() {
  document.body.style.overflow = previousBodyOverflow
  lastFocusedElement?.focus()
  lastFocusedElement = null

  if (isListening) {
    document.removeEventListener('keydown', onKeydown)
    isListening = false
  }
}

watch(
  () => props.project,
  async (project) => {
    if (project) {
      lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null
      previousBodyOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'

      if (!isListening) {
        document.addEventListener('keydown', onKeydown)
        isListening = true
      }

      await nextTick()
      closeButton.value?.focus()
    } else {
      releasePage()
    }
  },
)

onBeforeUnmount(() => {
  if (isListening) {
    releasePage()
  }
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="project"
        class="fixed inset-0 z-[60] flex items-center justify-center overflow-hidden bg-navy/55 p-3 backdrop-blur-sm sm:p-5"
        data-testid="project-dialog"
        @click.self="emit('close')"
      >
        <section
          ref="dialogPanel"
          class="modal-panel relative flex max-h-[calc(100dvh-1.5rem)] w-full max-w-[44rem] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:max-h-[calc(100dvh-2.5rem)]"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="titleId"
        >
          <header class="relative shrink-0 border-b border-line bg-mist/80 px-6 pb-5 pt-5 sm:px-7 sm:pb-6 sm:pt-6">
            <div class="mb-4 flex items-center justify-between gap-4">
              <div class="flex items-center gap-2.5">
                <span class="font-mono text-[0.6875rem] tracking-[0.16em] text-accent">{{ project.number }}</span>
                <span class="h-px w-6 bg-line" />
                <span class="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-ink-muted">
                  {{ t('projectDetail.label') }}
                </span>
              </div>
              <button
                ref="closeButton"
                type="button"
                class="flex size-9 items-center justify-center rounded-full border border-line bg-white text-ink-muted transition hover:border-ink/25 hover:text-ink"
                :aria-label="t('a11y.closeDialog')"
                @click="emit('close')"
              >
                <X :size="17" aria-hidden="true" />
              </button>
            </div>

            <h2 :id="titleId" class="max-w-[34rem] text-[1.45rem] leading-[1.25] sm:text-[1.7rem]">
              {{ localize(project.title) }}
            </h2>
            <p class="mt-2 max-w-2xl text-[0.8125rem] leading-5 text-ink-muted">
              {{ localize(project.subtitle) }}
            </p>

            <div class="mt-4 flex flex-wrap items-center gap-1.5">
              <span v-for="item in project.stack" :key="item" class="tag">{{ item }}</span>
              <span class="tag">{{ project.year }}</span>
            </div>
          </header>

          <div class="min-h-0 flex-1 overflow-y-auto overscroll-contain">
            <div class="grid gap-6 px-6 py-6 sm:px-7 sm:py-7 md:grid-cols-[0.82fr_1.18fr] md:gap-x-8 md:gap-y-5">
              <div class="order-1 space-y-5 md:col-start-1 md:row-start-1">
                <p class="text-[0.875rem] leading-6 text-ink-soft">
                  {{ localize(project.description) }}
                </p>

                <dl class="grid gap-3 border-y border-line py-4">
                  <div class="flex items-start justify-between gap-4">
                    <dt class="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-ink-muted">
                      {{ t('projectDetail.role') }}
                    </dt>
                    <dd class="max-w-[13rem] text-right text-[0.8125rem] font-medium leading-5 text-ink">
                      {{ localize(project.detail.role) }}
                    </dd>
                  </div>
                  <div class="flex items-start justify-between gap-4">
                    <dt class="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-ink-muted">
                      {{ t('projectDetail.timeline') }}
                    </dt>
                    <dd class="text-right text-[0.8125rem] font-medium leading-5 text-ink">
                      {{ localize(project.detail.timeline) }}
                    </dd>
                  </div>
                </dl>
              </div>

              <div class="order-2 space-y-5 md:col-start-2 md:row-span-2 md:row-start-1">
                <div
                  v-for="(section, index) in [
                    { label: t('projectDetail.problem'), body: localize(project.detail.problem) },
                    { label: t('projectDetail.solution'), body: localize(project.detail.solution) },
                    { label: t('projectDetail.impact'), body: localize(project.detail.impact) },
                  ]"
                  :key="section.label"
                  class="grid gap-1.5 sm:grid-cols-[5.5rem_1fr] sm:gap-4"
                >
                  <div class="flex items-start gap-2">
                    <span class="font-mono text-[0.625rem] text-accent">0{{ index + 1 }}</span>
                    <h3 class="text-[0.8125rem] font-medium text-ink">
                      {{ section.label }}
                    </h3>
                  </div>
                  <p class="text-[0.875rem] leading-6 text-ink-soft">
                    {{ section.body }}
                  </p>
                </div>
              </div>

              <div class="order-3 space-y-5 md:col-start-1 md:row-start-2">
                <div class="border-t border-line pt-4">
                  <h3 class="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-ink-muted">
                    {{ t('projectDetail.highlights') }}
                  </h3>
                  <ul class="mt-2.5 space-y-2">
                    <li
                      v-for="highlight in project.detail.highlights"
                      :key="highlight.en"
                      class="flex items-start gap-2.5 text-[0.8125rem] leading-5 text-ink-soft"
                    >
                      <span class="mt-1.5 size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {{ localize(highlight) }}
                    </li>
                  </ul>
                </div>

                <div class="flex flex-wrap items-center gap-2.5">
                  <a
                    v-if="project.links.demo"
                    :href="project.links.demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn-primary"
                  >
                    {{ t('projectDetail.viewDemo') }}
                    <ArrowUpRight :size="16" aria-hidden="true" />
                  </a>
                  <a
                    v-if="project.links.source"
                    :href="project.links.source"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn-secondary"
                  >
                    <Github :size="16" aria-hidden="true" />
                    {{ t('projectDetail.viewSource') }}
                  </a>
                  <span v-if="!project.links.demo && !project.links.source" class="text-[0.75rem] leading-5 text-ink-muted">
                    {{ t('projectDetail.noLinks') }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <footer class="flex shrink-0 items-center justify-between gap-4 border-t border-line bg-mist/60 px-6 py-3.5 sm:px-7">
            <span class="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-ink-muted">
              {{ project.number }} / {{ project.year }}
            </span>
            <button type="button" class="text-xs font-medium text-ink transition hover:text-accent" @click="emit('close')">
              {{ t('projectDetail.close') }}
            </button>
          </footer>
        </section>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 220ms ease;
}

.modal-enter-active .modal-panel,
.modal-leave-active .modal-panel {
  transition:
    transform 260ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 220ms ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-panel,
.modal-leave-to .modal-panel {
  opacity: 0;
  transform: translateY(14px) scale(0.99);
}
</style>
