export type Locale = 'zh' | 'en'

export type LocalizedText = Record<Locale, string>

export type SocialIcon = 'github' | 'linkedin' | 'globe'

export type SkillIcon = 'server' | 'panels' | 'database' | 'sparkles'

export interface SocialLink {
  id: string
  label: string
  url: string
  icon: SocialIcon
}

export interface QuickFact {
  label: LocalizedText
  value: LocalizedText
}

export interface Principle {
  title: LocalizedText
  description: LocalizedText
}

export interface Profile {
  name: LocalizedText
  initials: string
  role: LocalizedText
  headline: LocalizedText
  intro: LocalizedText
  focus: LocalizedText
  availability: LocalizedText
  location: LocalizedText
  email: string
  aboutLead: LocalizedText
  aboutBody: LocalizedText
  avatarFile: string
  avatarAlt: LocalizedText
  resumeFile: string
  quickFacts: QuickFact[]
  principles: Principle[]
  socials: SocialLink[]
}

export interface SkillCategory {
  id: string
  icon: SkillIcon
  title: LocalizedText
  description: LocalizedText
  skills: LocalizedText[]
}

export interface ExperienceItem {
  id: string
  company: LocalizedText
  role: LocalizedText
  period: LocalizedText
  location: LocalizedText
  summary: LocalizedText
  highlights: LocalizedText[]
  stack: string[]
}

export interface ProjectDetail {
  problem: LocalizedText
  solution: LocalizedText
  impact: LocalizedText
  role: LocalizedText
  timeline: LocalizedText
  highlights: LocalizedText[]
}

export interface Project {
  id: string
  number: string
  title: LocalizedText
  subtitle: LocalizedText
  description: LocalizedText
  stack: string[]
  year: string
  detail: ProjectDetail
  links: {
    demo?: string
    source?: string
  }
}

export interface EducationItem {
  id: string
  degree: LocalizedText
  school: LocalizedText
  period: LocalizedText
  location: LocalizedText
  summary: LocalizedText
  coursework: LocalizedText[]
}

export interface Certification {
  id: string
  name: LocalizedText
  issuer: LocalizedText
  year: string
}
