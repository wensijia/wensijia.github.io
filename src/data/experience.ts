import type { ExperienceItem } from '@/types/content'

/**
 * Work experience confirmed by the site owner.
 *
 * Keep company names, dates and outcomes factual. Do not add metrics or
 * responsibilities that are not supported by the source resume.
 */
export const experience: ExperienceItem[] = [
  {
    id: 'role-current',
    company: { zh: '道路交通安全综合治理产品团队', en: 'Road Traffic Safety Product Team' },
    role: { zh: '架构师 / 全栈开发', en: 'Architect / Full-stack Developer' },
    period: { zh: '2026.04 — 至今', en: '2026.04 — Present' },
    location: { zh: '成都，中国', en: 'Chengdu, China' },
    summary: {
      zh: '道路交通安全综合治理产品，技术侧 1 人，独立负责产品定义、架构设计、前后端开发、部署、测试与交付物。',
      en: 'A road traffic safety governance product delivered solo on the technical side, covering product definition, architecture, full-stack development, deployment, testing and delivery materials.',
    },
    highlights: [
      {
        zh: '7 个月完成 4 个业务插件与平台基座，合计 501 条接口、78 张表、171 个实体。',
        en: 'Delivered four business plugins and the platform foundation in seven months: 501 APIs, 78 tables and 171 entities.',
      },
      {
        zh: '实现 Vue 3 SPA 的 58 条路由、53 个业务页面和 56 个组件，统一登录、动态路由与权限守卫。',
        en: 'Built a Vue 3 SPA with 58 routes, 53 business pages and 56 components, including unified login, dynamic routing and permission guards.',
      },
      {
        zh: '编写并执行 494 条功能用例（0 缺陷），完成 28 项压测；300 并发峰值 2.28s，500 并发异常率 0.42%。',
        en: 'Authored and ran 494 functional cases with zero defects and completed 28 load tests, including 2.28s peak latency at 300 concurrent users and a 0.42% error rate at 500.',
      },
    ],
    stack: ['Java', 'Spring Boot', 'Vue 3', 'PostgreSQL', 'Redis', 'Nginx'],
  },
  {
    id: 'role-previous',
    company: {
      zh: '天津国盛华兴科技有限公司四川分公司',
      en: 'Tianjin Guosheng Huaxing Technology Co., Ltd., Sichuan Branch',
    },
    role: { zh: '后端架构师 / 业务线技术负责人', en: 'Backend Architect / Business Line Tech Lead' },
    period: { zh: '2024.03 — 2026.03', en: '2024.03 — 2026.03' },
    location: { zh: '成都，中国', en: 'Chengdu, China' },
    summary: {
      zh: '负责业务线技术团队管理与技术指导，主导开发规范、新一代技术框架和关键业务架构。',
      en: 'Led the business-line engineering team, owning development standards, the next-generation framework and architecture for key business domains.',
    },
    highlights: [
      {
        zh: '主导新一代技术框架的调研、架构设计、集成落地与维护，统一异常、日志、鉴权和数据访问约定。',
        en: 'Led research, architecture, adoption and maintenance of the next-generation framework, standardising exceptions, logging, authentication and data access.',
      },
      {
        zh: '负责关键需求分析、业务域数据建模与系统架构设计，支持 8 人团队交付省级司法辅助平台。',
        en: 'Owned key requirement analysis, domain data modelling and system architecture for an eight-person team delivering a provincial judicial assistance platform.',
      },
      {
        zh: '参与制定软件开发管理流程，编写并持续完善技术开发规范，承担团队日常管理与技术指导。',
        en: 'Contributed to software delivery processes, authored and maintained engineering standards, and provided day-to-day technical leadership.',
      },
    ],
    stack: ['Java', 'Spring Boot 3', 'Spring Cloud', 'MyBatis-Flex', 'MySQL', 'Redis', 'Neo4j'],
  },
  {
    id: 'role-earlier',
    company: {
      zh: '方正国际大数据（北京）有限公司',
      en: 'Fangzheng International Big Data (Beijing) Co., Ltd.',
    },
    role: {
      zh: 'Java 开发 → 高级开发 / 模块负责人',
      en: 'Java Developer → Senior Developer / Module Lead',
    },
    period: { zh: '2017.10 — 2024.03', en: '2017.10 — 2024.03' },
    location: { zh: '成都，中国', en: 'Chengdu, China' },
    summary: {
      zh: '从 Java 开发成长为高级开发与模块负责人，参与技术框架、微服务架构和省级信息平台建设。',
      en: 'Grew from Java developer to senior developer and module lead, contributing to framework design, microservice architecture and provincial information platforms.',
    },
    highlights: [
      {
        zh: '参与公司技术框架选型、设计与维护，推动公共组件和微服务架构迭代。',
        en: 'Contributed to framework selection, design and maintenance, and drove iteration of shared components and microservices.',
      },
      {
        zh: '负责核心模块设计、开发、单元测试与优化，编写概要设计、详细设计和接口文档。',
        en: 'Owned core module design, implementation, unit testing and optimisation, including high-level design, detailed design and API documentation.',
      },
      {
        zh: '主导省级信息平台 32 个模块重构，检索响应从 1000–3000ms 降至 200–500ms，发版从 30 分钟降至 5 分钟。',
        en: 'Led the re-architecture of 32 modules on a provincial platform, reducing search latency from 1–3s to 200–500ms and release time from 30 to 5 minutes.',
      },
    ],
    stack: ['Java', 'Spring Cloud', 'Dubbo', 'Oracle', 'MySQL', 'Kafka', 'Kubernetes'],
  },
]
