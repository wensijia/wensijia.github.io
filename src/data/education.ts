import type { Certification, EducationItem } from '@/types/content'

/**
 * Education confirmed by the site owner.
 *
 * The source resume did not list coursework, honors or certifications, so those
 * fields stay empty rather than being inferred.
 */
export const education: EducationItem[] = [
  {
    id: 'degree',
    degree: { zh: '计算机科学与技术 · 本科', en: 'Computer Science and Technology · Bachelor' },
    school: { zh: '西南民族大学', en: 'Southwest Minzu University' },
    period: { zh: '2013.08 — 2017.05', en: '2013.08 — 2017.05' },
    location: { zh: '成都，中国', en: 'Chengdu, China' },
    summary: {
      zh: '计算机科学与技术本科，2013.08 至 2017.05。',
      en: 'Bachelor studies in Computer Science and Technology, August 2013 to May 2017.',
    },
    coursework: [],
  },
]

export const certifications: Certification[] = []
