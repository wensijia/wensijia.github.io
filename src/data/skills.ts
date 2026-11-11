import type { SkillCategory } from '@/types/content'

/**
 * Skill categories confirmed by the site owner.
 *
 * Every entry should be a technology used in real delivery. Do not add
 * proficiency scores or tools that cannot be discussed in depth.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    icon: 'server',
    title: { zh: '后端与架构', en: 'Backend & Architecture' },
    description: {
      zh: 'Java 服务端、微服务治理与复杂业务建模。',
      en: 'Java services, microservice governance and complex domain modelling.',
    },
    skills: [
      { zh: 'Java', en: 'Java' },
      { zh: 'Spring Boot', en: 'Spring Boot' },
      { zh: 'Spring Cloud', en: 'Spring Cloud' },
      { zh: 'MyBatis-Flex', en: 'MyBatis-Flex' },
      { zh: 'Dubbo', en: 'Dubbo' },
      { zh: 'BPM 流程引擎', en: 'BPM engines' },
      { zh: 'JVM 调优', en: 'JVM tuning' },
      { zh: '微服务治理', en: 'Microservice governance' },
    ],
  },
  {
    id: 'frontend',
    icon: 'panels',
    title: { zh: '前端与全栈交付', en: 'Frontend & Full-stack' },
    description: {
      zh: 'Vue 3 SPA、权限体系与业务组件库。',
      en: 'Vue 3 SPAs, permission models and reusable business components.',
    },
    skills: [
      { zh: 'Vue 3', en: 'Vue 3' },
      { zh: 'Vite', en: 'Vite' },
      { zh: 'Pinia', en: 'Pinia' },
      { zh: 'Element Plus', en: 'Element Plus' },
      { zh: 'ECharts', en: 'ECharts' },
      { zh: '动态路由', en: 'Dynamic routing' },
      { zh: '权限守卫', en: 'Permission guards' },
      { zh: 'SPA 多产物', en: 'Multi-build SPA' },
    ],
  },
  {
    id: 'data',
    icon: 'database',
    title: { zh: '数据与中间件', en: 'Data & Middleware' },
    description: {
      zh: '关系型数据库、检索、缓存与消息链路。',
      en: 'Relational databases, search, caching and messaging.',
    },
    skills: [
      { zh: 'PostgreSQL', en: 'PostgreSQL' },
      { zh: 'MySQL', en: 'MySQL' },
      { zh: 'Oracle', en: 'Oracle' },
      { zh: 'Redis', en: 'Redis' },
      { zh: 'Elasticsearch', en: 'Elasticsearch' },
      { zh: 'Solr', en: 'Solr' },
      { zh: 'Kafka', en: 'Kafka' },
      { zh: 'RabbitMQ', en: 'RabbitMQ' },
    ],
  },
  {
    id: 'ai-platform',
    icon: 'sparkles',
    title: { zh: 'AI、信创与交付', en: 'AI, Compliance & Delivery' },
    description: {
      zh: 'AI 工程化、信创适配与持续交付。',
      en: 'AI engineering, domestic infrastructure and continuous delivery.',
    },
    skills: [
      { zh: 'Xinference', en: 'Xinference' },
      { zh: 'Dify', en: 'Dify' },
      { zh: 'OCR / 视觉模型', en: 'OCR / vision models' },
      { zh: 'Neo4j', en: 'Neo4j' },
      { zh: 'Docker / K8s', en: 'Docker / K8s' },
      { zh: 'Jenkins', en: 'Jenkins' },
      { zh: '信创 ARM64', en: 'ARM64 domestic stack' },
      { zh: '等保三级', en: 'MLPS Level 3' },
      { zh: '国密 SM2/3/4', en: 'SM2 / SM3 / SM4' },
    ],
  },
]
