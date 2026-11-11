<script setup lang="ts">
withDefaults(
  defineProps<{
    number: string
    eyebrow: string
    title: string
    headingId?: string
    description?: string
    inverted?: boolean
  }>(),
  {
    headingId: '',
    description: '',
    inverted: false,
  },
)
</script>

<template>
  <header class="mb-10 md:mb-14">
    <div class="mb-5 flex items-center gap-3">
      <span class="font-mono text-[0.6875rem] font-medium tracking-[0.16em]" :class="inverted ? 'text-white/45' : 'text-ink-muted'">
        {{ number }}
      </span>
      <span class="h-px w-8" :class="inverted ? 'bg-white/25' : 'bg-line'" />
      <span class="eyebrow" :class="inverted ? 'text-accent-soft' : ''">{{ eyebrow }}</span>
    </div>

    <div class="grid gap-4 xl:grid-cols-[1.15fr_0.85fr] xl:items-end xl:gap-12">
      <h2 :id="headingId" class="section-title" :class="inverted ? '!text-white' : ''">
        {{ title }}
      </h2>
      <p
        v-if="description"
        class="max-w-md text-[0.9375rem] leading-7 xl:justify-self-end"
        :class="inverted ? 'text-white/60' : 'text-ink-muted'"
      >
        {{ description }}
      </p>
    </div>
  </header>
</template>
