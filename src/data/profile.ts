import type { Profile } from '@/types/content'

/**
 * Personal profile data.
 *
 * These details come from the resume confirmed by the site owner. Do not add
 * facts, metrics, employers, credentials, or contact details that have not been
 * explicitly confirmed. The avatar is a monogram; replace it with a portrait if
 * one is approved for publication.
 */
export const profile: Profile = {
  name: {
    zh: '温思嘉',
    en: 'Sijia Wen',
  },
  initials: 'WSJ',
  role: {
    zh: '后端架构师 / 全栈',
    en: 'Backend Architect / Full-stack',
  },
  headline: {
    zh: '9 年后端架构，专注复杂系统、全栈交付与 AI 工程化。',
    en: '9 years in backend architecture, focused on complex systems, full-stack delivery and AI engineering.',
  },
  intro: {
    zh: '长期负责复杂业务系统的架构设计、核心开发与落地交付，也能独立完成 Vue 前端、部署、测试与交付物。关注性能、合规与可复制交付，习惯把重复出现的问题沉淀为机制。',
    en: 'I design and deliver complex business systems end to end, from architecture and core backend code to Vue frontends, deployment, testing and delivery materials. My focus is performance, compliance and repeatable delivery, with a bias for turning recurring problems into mechanisms.',
  },
  focus: {
    zh: '后端架构 / 全栈交付 / AI 工程化',
    en: 'Backend architecture / Full-stack delivery / AI engineering',
  },
  availability: {
    zh: '一周内到岗',
    en: 'Available within one week',
  },
  location: {
    zh: '成都，中国',
    en: 'Chengdu, China',
  },
  email: 'wensijia0123@qq.com',
  aboutLead: {
    zh: '把复杂系统做成可交付、可复制、可验证的产品。',
    en: 'Making complex systems deliverable, repeatable and verifiable.',
  },
  aboutBody: {
    zh: '9 年后端架构与全栈交付经验，做过道路交通安全、司法辅助、省级信息平台等复杂业务系统。既负责架构取舍和核心代码，也负责部署、压测、测试与交付材料；在信创、等保和 AI 工程化方向都有实际落地经验。',
    en: 'Nine years of backend architecture and full-stack delivery across road traffic safety, judicial support and provincial information platforms. I own architecture decisions and core code as well as deployment, load testing, QA and delivery materials, with hands-on experience in compliance, domestic infrastructure and AI engineering.',
  },
  avatarFile: 'images/avatar-placeholder.svg',
  avatarAlt: {
    zh: '温思嘉的字母标识',
    en: 'Sijia Wen monogram',
  },
  resumeFile: 'resume/wensijia-backend-architect.pdf',
  quickFacts: [
    {
      label: { zh: '当前职位', en: 'Current role' },
      value: { zh: '架构师 / 全栈开发', en: 'Architect / Full-stack Developer' },
    },
    {
      label: { zh: '所在城市', en: 'Location' },
      value: { zh: '成都，中国', en: 'Chengdu, China' },
    },
    {
      label: { zh: '工作经验', en: 'Experience' },
      value: { zh: '9 年', en: '9 years' },
    },
    {
      label: { zh: '到岗时间', en: 'Availability' },
      value: { zh: '一周内', en: 'Within one week' },
    },
  ],
  principles: [
    {
      title: { zh: '先定义边界', en: 'Define the boundary first' },
      description: {
        zh: '先把问题、约束和验收标准定义清楚，再开始实现。',
        en: 'Clarify the problem, constraints and acceptance criteria before implementation.',
      },
    },
    {
      title: { zh: '对结果负责', en: 'Own the outcome' },
      description: {
        zh: '从架构、代码到部署与测试，对最终交付质量负责。',
        en: 'Take responsibility for the final delivery, from architecture and code to deployment and testing.',
      },
    },
    {
      title: { zh: '用机制替代补丁', en: 'Turn fixes into mechanisms' },
      description: {
        zh: '重复出现的问题，优先沉淀为规范、脚本或平台能力。',
        en: 'Recurring problems should become standards, scripts or platform capabilities, not repeated patches.',
      },
    },
  ],
  socials: [],
}
