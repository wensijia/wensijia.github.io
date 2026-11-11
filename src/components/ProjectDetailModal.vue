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
        class="fixed inset-0 z-[60] overflow-y-auto bg-navy/55 p-4 backdrop-blur-sm sm:p-6 md:p-10"
        data-testid="project-dialog"
        @click.self="emit('close')"
      >
        <section
          ref="dialogPanel"
          class="modal-panel relative mx-auto my-4 w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl md:my-0"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="titleId"
        >
          <header class="relative border-b border-line bg-mist/80 px-6 pb-7 pt-6 sm:px-8 sm:pb-8 sm:pt-8">
            <div class="mb-5 flex items-center justify-between gap-4">
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

            <h2 :id="titleId" class="max-w-xl text-2xl leading-tight sm:text-3xl">
              {{ localize(project.title) }}
            </h2>
            <p class="mt-2 max-w-xl text-sm leading-6 text-ink-muted">
              {{ localize(project.subtitle) }}
            </p>

            <div class="mt-5 flex flex-wrap items-center gap-2">
              <span v-for="item in project.stack" :key="item" class="tag">{{ item }}</span>
              <span class="tag">{{ project.year }}</span>
            </div>
          </header>

          <div class="px-6 py-7 sm:px-8 sm:py-8">
            <p class="max-w-2xl text-[0.9375rem] leading-7 text-ink-soft">
              {{ localize(project.description) }}
            </p>

            <dl class="mt-7 grid gap-4 border-y border-line py-5 sm:grid-cols-2">
              <div>
                <dt class="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-ink-muted">
                  {{ t('projectDetail.role') }}
                </dt>
                <dd class="mt-1.5 text-sm font-medium text-ink">
                  {{ localize(project.detail.role) }}
                </dd>
              </div>
              <div>
                <dt class="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-ink-muted">
                  {{ t('projectDetail.timeline') }}
                </dt>
                <dd class="mt-1.5 text-sm font-medium text-ink">
                  {{ localize(project.detail.timeline) }}
                </dd>
              </div>
            </dl>

            <div class="mt-7 space-y-7">
              <div
                v-for="(section, index) in [
                  { label: t('projectDetail.problem'), body: localize(project.detail.problem) },
                  { label: t('projectDetail.solution'), body: localize(project.detail.solution) },
                  { label: t('projectDetail.impact'), body: localize(project.detail.impact) },
                ]"
                :key="section.label"
                class="grid gap-2 sm:grid-cols-[140px_1fr] sm:gap-6"
              >
                <div class="flex items-start gap-2">
                  <span class="font-mono text-[0.625rem] text-accent">0{{ index + 1 }}</span>
                  <h3 class="text-sm font-medium text-ink">
                    {{ section.label }}
                  </h3>
                </div>
                <p class="text-sm leading-7 text-ink-soft">
                  {{ section.body }}
                </p>
              </div>
            </div>

            <div class="mt-8 border-t border-line pt-6">
              <h3 class="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-ink-muted">
                {{ t('projectDetail.highlights') }}
              </h3>
              <ul class="mt-3 space-y-2.5">
                <li
                  v-for="highlight in project.detail.highlights"
                  :key="highlight.en"
                  class="flex items-start gap-2.5 text-sm leading-6 text-ink-soft"
                >
                  <span class="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {{ localize(highlight) }}
                </li>
              </ul>
            </div>

            <div class="mt-8 flex flex-wrap items-center gap-3">
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
              <span v-if="!project.links.demo && !project.links.source" class="text-xs leading-5 text-ink-muted">
                {{ t('projectDetail.noLinks') }}
              </span>
            </div>
          </div>

          <footer class="flex items-center justify-between gap-4 border-t border-line bg-mist/60 px-6 py-4 sm:px-8">
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
