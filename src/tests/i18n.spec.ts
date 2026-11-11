import { describe, expect, it } from 'vitest'

import en from '@/i18n/locales/en'
import zh from '@/i18n/locales/zh'

function flatten(
  messages: Record<string, unknown>,
  prefix = '',
  result: Record<string, string> = {},
): Record<string, string> {
  Object.entries(messages).forEach(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key

    if (typeof value === 'string') {
      result[path] = value
      return
    }

    if (value && typeof value === 'object' && !Array.isArray(value)) {
      flatten(value as Record<string, unknown>, path, result)
    }
  })

  return result
}

function placeholders(value: string): string[] {
  return [...value.matchAll(/\{(\w+)\}/g)].map((match) => match[1]).sort()
}

describe('bilingual messages', () => {
  const english = flatten(en)
  const chinese = flatten(zh)

  it('defines exactly the same keys in English and Chinese', () => {
    expect(Object.keys(chinese).sort()).toEqual(Object.keys(english).sort())
  })

  it('does not leave an empty translation', () => {
    Object.entries(english).forEach(([key, value]) => {
      expect(value.trim(), `en.${key} is empty`).not.toBe('')
    })

    Object.entries(chinese).forEach(([key, value]) => {
      expect(value.trim(), `zh.${key} is empty`).not.toBe('')
    })
  })

  it('keeps interpolation placeholders aligned across locales', () => {
    Object.keys(english).forEach((key) => {
      expect(placeholders(chinese[key] ?? ''), `${key} placeholders differ`).toEqual(
        placeholders(english[key] ?? ''),
      )
    })
  })
})
