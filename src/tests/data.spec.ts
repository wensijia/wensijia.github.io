import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

import { describe, expect, it } from 'vitest'

import {
  certifications,
  education,
  experience,
  profile,
  projects,
  skillCategories,
} from '@/data'
import type { LocalizedText } from '@/types/content'

function isLocalizedText(value: unknown): value is LocalizedText {
  return (
    typeof value === 'object' &&
    value !== null &&
    'zh' in value &&
    'en' in value &&
    typeof (value as LocalizedText).zh === 'string' &&
    typeof (value as LocalizedText).en === 'string'
  )
}

function collectIssues(value: unknown, path: string, issues: string[]): void {
  if (isLocalizedText(value)) {
    if (!value.zh.trim()) issues.push(`${path}.zh is empty`)
    if (!value.en.trim()) issues.push(`${path}.en is empty`)
    return
  }

  if (Array.isArray(value)) {
    value.forEach((entry, index) => collectIssues(entry, `${path}[${index}]`, issues))
    return
  }

  if (value && typeof value === 'object') {
    Object.entries(value).forEach(([key, entry]) => collectIssues(entry, `${path}.${key}`, issues))
  }
}

describe('resume content', () => {
  it('provides non-empty Chinese and English text for every localized value', () => {
    const issues: string[] = []

    collectIssues(
      {
        profile,
        skillCategories,
        experience,
        projects,
        education,
        certifications,
      },
      'content',
      issues,
    )

    expect(issues).toEqual([])
  })

  it('keeps every collection id unique', () => {
    const collections = [
      { name: 'skillCategories', entries: skillCategories },
      { name: 'experience', entries: experience },
      { name: 'projects', entries: projects },
      { name: 'education', entries: education },
      { name: 'certifications', entries: certifications },
    ]

    collections.forEach(({ name, entries }) => {
      const ids = entries.map((entry) => entry.id)
      expect(new Set(ids).size, `${name} contains duplicate ids`).toBe(ids.length)
    })

    const projectNumbers = projects.map((project) => project.number)
    expect(new Set(projectNumbers).size).toBe(projectNumbers.length)
  })

  it('references static avatar and resume files that exist in public/', () => {
    const files = [profile.avatarFile, profile.resumeFile]

    files.forEach((file) => {
      expect(file.startsWith('/'), `${file} must be relative to the Vite base`).toBe(false)
      expect(existsSync(resolve(process.cwd(), 'public', file)), `${file} is missing`).toBe(true)
    })
  })

  it('ships a readable PDF resume rather than an empty download', () => {
    const resumePath = resolve(process.cwd(), 'public', profile.resumeFile)
    const pdf = readFileSync(resumePath)

    expect(pdf.subarray(0, 5).toString('latin1')).toBe('%PDF-')
    expect(pdf.byteLength).toBeGreaterThan(1000)
  })

  it('uses secure URLs for public social links', () => {
    profile.socials.forEach((link) => {
      expect(link.url.startsWith('https://'), `${link.label} must use HTTPS`).toBe(true)
    })
  })
})
