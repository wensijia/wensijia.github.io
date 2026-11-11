import { flushPromises, mount, type VueWrapper } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { nextTick } from 'vue'
import { createI18n } from 'vue-i18n'

import App from '@/App.vue'
import en from '@/i18n/locales/en'
import zh from '@/i18n/locales/zh'

let wrapper: VueWrapper | undefined

function mountApp() {
  const testI18n = createI18n({
    legacy: false,
    locale: 'zh',
    fallbackLocale: 'en',
    messages: { zh, en },
    missingWarn: false,
    fallbackWarn: false,
  })

  return mount(App, {
    attachTo: document.body,
    global: {
      plugins: [testI18n],
    },
  })
}

afterEach(() => {
  wrapper?.unmount()
  wrapper = undefined
  document.body.innerHTML = ''
})

describe('portfolio application', () => {
  it('renders all seven sections in Chinese by default', () => {
    wrapper = mountApp()

    const sectionIds = [...document.querySelectorAll('main > section')].map((section) => section.id)
    expect(sectionIds).toEqual([
      'top',
      'about',
      'skills',
      'experience',
      'projects',
      'education',
      'contact',
    ])

    sectionIds.forEach((id) => {
      const section = document.getElementById(id)
      const labelledBy = section?.getAttribute('aria-labelledby')
      expect(labelledBy, `${id} needs an accessible name`).toBeTruthy()
      expect(document.getElementById(labelledBy ?? '')?.textContent?.trim()).not.toBe('')
    })

    expect(wrapper.get('h1').text()).toBe('温思嘉')
    expect(document.title).toContain('温思嘉')
    expect(document.documentElement.lang).toBe('zh-CN')
  })

  it('switches the interface and document metadata to English', async () => {
    wrapper = mountApp()
    const localeButtons = wrapper.findAll('[data-testid="locale-toggle"] button')

    await localeButtons[1].trigger('click')
    await nextTick()

    expect(wrapper.get('h1').text()).toBe('Sijia Wen')
    expect(document.documentElement.lang).toBe('en')
    expect(document.title).toContain('Sijia Wen')
    expect(window.localStorage.getItem('portfolio-locale')).toBe('en')
    expect(wrapper.get('[data-testid="locale-toggle"]').text()).toContain('EN')
  })

  it('opens and closes a project case study with a modal dialog', async () => {
    wrapper = mountApp()
    const cards = wrapper.findAll('[data-testid="project-card"]')
    expect(cards).toHaveLength(4)

    await cards[0].trigger('click')
    await nextTick()

    const dialog = document.querySelector<HTMLElement>('[role="dialog"]')
    expect(dialog).not.toBeNull()
    expect(dialog?.querySelector('h2')?.textContent).toContain('道路交通安全综合治理信息平台')
    expect(document.body.style.overflow).toBe('hidden')

    dialog?.querySelector<HTMLButtonElement>('button[aria-label]')?.click()
    await new Promise((resolve) => window.setTimeout(resolve, 350))
    await nextTick()

    expect(document.querySelector('[role="dialog"]')).toBeNull()
    expect(document.body.style.overflow).toBe('')
  })

  it('exposes the PDF download and copies the contact email', async () => {
    wrapper = mountApp()

    const downloadHrefs = wrapper
      .findAll('a[download]')
      .map((link) => link.attributes('href') ?? '')
    expect(downloadHrefs.some((href) => href.endsWith('/resume/wensijia-backend-architect.pdf'))).toBe(true)

    const copyButton = wrapper.get('[data-testid="copy-email"]')
    await copyButton.trigger('click')
    await flushPromises()

    expect(vi.mocked(navigator.clipboard.writeText)).toHaveBeenCalledWith('wensijia0123@qq.com')
    expect(copyButton.text()).toContain('已复制')
    expect(wrapper.get('[aria-live="polite"]').text()).toContain('邮箱地址已复制')
  })
})
