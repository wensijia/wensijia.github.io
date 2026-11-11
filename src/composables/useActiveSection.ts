import { onBeforeUnmount, onMounted, ref } from 'vue'

/**
 * Tracks the section currently crossing the reading area of the viewport.
 * Falls back to no active item when IntersectionObserver is unavailable.
 */
export function useActiveSection(sectionIds: string[]) {
  const activeSection = ref(sectionIds[0] ?? '')
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return
    }

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    if (sections.length === 0) {
      return
    }

    const visibleSections = new Map<string, number>()

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry.intersectionRatio)
          } else {
            visibleSections.delete(entry.target.id)
          }
        }

        const nextSection = sectionIds.find((id) => visibleSections.has(id))
        if (nextSection) {
          activeSection.value = nextSection
        }
      },
      {
        rootMargin: '-24% 0px -60% 0px',
        threshold: [0, 0.2, 0.5],
      },
    )

    for (const section of sections) {
      observer.observe(section)
    }
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })

  return activeSection
}
