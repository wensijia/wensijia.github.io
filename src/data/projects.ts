import type { Project } from '@/types/content'

/**
 * Project data confirmed by the site owner.
 *
 * Keep the problem, decisions and outcomes accurate. Metrics below are taken
 * from the confirmed resume; do not infer or embellish them.
 */
export const projects: Project[] = [
  {
    id: 'road-traffic-platform',
    number: '01',
    title: {
      zh: '道路交通安全综合治理信息平台',
      en: 'Road Traffic Safety Governance Platform',
    },
    subtitle: {
      zh: '把任务、隐患、报表与考核装进同一条数据链的可复制产品。',
      en: 'A repeatable product that connects tasks, hazards, reporting and performance review in one data chain.',
    },
    description: {
      zh: '面向多部门协同的道路交通安全治理平台。技术侧 1 人、7 个月，完成产品定义、架构设计、前后端开发、部署、测试与交付物，并落地首个签约客户。',
      en: 'A multi-agency road traffic safety platform. I delivered it solo over seven months, covering product definition, architecture, full-stack development, deployment, testing and sales materials, and secured the first customer.',
    },
    stack: ['Vue 3', 'Spring Boot', 'PostgreSQL', 'Redis', 'FastDFS', 'BPM', 'SM2/SM3/SM4'],
    year: '2026',
    detail: {
      problem: {
        zh: '责任链条长、参与部门多，任务靠文件流转，道路、路段、隐患三本账对不上，整治过程断链，基层重复填报。',
        en: 'Long accountability chains and many agencies meant tasks moved as documents, road, segment and hazard records did not reconcile, remediation lost continuity, and frontline teams duplicated data entry.',
      },
      solution: {
        zh: '把业务拆成 4 个可独立部署的插件和平台基座，单库多 schema 隔离；统一权限、流程、异常与数据访问约定；跨网采用增量导出、单向网闸和幂等 MERGE 同步。',
        en: 'Split the product into four independently deployable business plugins plus a platform foundation, isolated by schema in one database. Standardised permissions, workflow, exceptions and data access, and designed an incremental export, one-way gateway and idempotent MERGE sync across networks.',
      },
      impact: {
        zh: '交付 501 条接口、78 张表、171 个实体；494 条功能用例 0 缺陷，28 项压测全部通过（300 并发峰值 2.28s，500 并发异常率 0.42%，200 并发 TPS 486）；首个客户签约落地。',
        en: 'Delivered 501 APIs, 78 tables and 171 entities. All 494 functional cases passed with zero defects and all 28 load tests met their targets, including 2.28s peak latency at 300 concurrent users, a 0.42% error rate at 500 and 486 TPS at 200. The first customer signed.',
      },
      role: { zh: '架构师 / 全栈开发（技术侧 1 人）', en: 'Architect / Full-stack Developer (sole engineer)' },
      timeline: { zh: '2026.04 — 2026.10', en: '2026.04 — 2026.10' },
      highlights: [
        {
          zh: '设计业务插件化、五套 schema 隔离和基线迁移方案，使产品可复制交付、独立升级。',
          en: 'Designed plugin-based delivery, five-schema isolation and baseline migrations so the product could be reused and upgraded per customer.',
        },
        {
          zh: '独立完成 Vue 3 前端 58 条路由、53 个页面、56 个组件及动态路由与权限守卫。',
          en: 'Built the Vue 3 frontend with 58 routes, 53 pages and 56 components, including dynamic routing and permission guards.',
        },
        {
          zh: '落地国密 SM2 本地加密登录、四类权限统一模型、敏感字段密文存储与全实体审计。',
          en: 'Implemented SM2 client-side encrypted login, a unified model for four permission types, encrypted sensitive fields and audit columns across all entities.',
        },
        {
          zh: '用单一事实源和脚本渲染四类交付材料，保证数字一致、可反向核对。',
          en: 'Produced four sets of delivery materials from a single source of truth and scripts, keeping figures consistent and auditable.',
        },
      ],
    },
    links: {},
  },
  {
    id: 'judicial-ai-platform',
    number: '02',
    title: {
      zh: '省级司法辅助业务智能办理平台',
      en: 'Provincial Judicial Assistance Intelligence Platform',
    },
    subtitle: {
      zh: '用私有化 AI 链路把材料审阅从人工逐页检查变成可复核的智能初筛。',
      en: 'A private AI pipeline that turns page-by-page manual review into a reviewable intelligent first pass.',
    },
    description: {
      zh: '面向全省 21 个地市的司法辅助平台，8 人团队。主导微服务架构、通用后端框架和离线 AI 处理链路，累计办理 32 万件。',
      en: 'A judicial assistance platform serving 21 prefectures with an eight-person team. I led the microservice architecture, shared backend framework and offline AI pipeline; the platform has handled 320,000 cases.',
    },
    stack: ['Spring Boot 3', 'MyBatis-Flex', 'MySQL', 'Elasticsearch', 'Neo4j', 'Xinference', 'Dify', 'Powerjob'],
    year: '2024–2026',
    detail: {
      problem: {
        zh: '材料审阅依赖人工，单件平均耗时 45 分钟，材料瑕疵导致退回率高；业务方要求智能引导、材料智检、文书智写和流程合规判定。',
        en: 'Manual material review averaged 45 minutes per case and defects caused a high return rate. The business required intelligent guidance, material checks, document drafting and workflow compliance decisions.',
      },
      solution: {
        zh: '私有化 Xinference 部署模型，Powerjob 编排离线批处理；Dify 统一 Prompt 版本与权限；OCR/视觉模型抽取要素后清洗落仓；Neo4j 承载多层实体关系。',
        en: 'Deployed models privately with Xinference and orchestrated offline batches with Powerjob. Dify governed prompt versions and permissions, OCR and vision models extracted elements before cleaned results were persisted, and Neo4j modelled multi-level entity relationships.',
      },
      impact: {
        zh: '单件初审从 45 分钟降至 9 分钟，人工复核件数减少 80%；要素抽取准确率 98%，瑕疵检出率 91%、误报率 6%；覆盖 21 个地市、累计办理 32 万件。',
        en: 'First-pass review dropped from 45 to 9 minutes and manual review volume fell by 80%. Element extraction reached 98% accuracy, defect detection 91% with a 6% false-positive rate, across 21 prefectures and 320,000 cases.',
      },
      role: { zh: '技术负责人（架构设计 + 核心开发）', en: 'Technical Lead (architecture and core development)' },
      timeline: { zh: '2024.04 — 2026.03', en: '2024.04 — 2026.03' },
      highlights: [
        {
          zh: '主导微服务架构与服务治理规范，统一异常、日志、鉴权、分页和数据访问约定。',
          en: 'Led the microservice architecture and governance standards, unifying exceptions, logging, authentication, pagination and data access.',
        },
        {
          zh: '设计材料入库、OCR 抽取、瑕疵定位、大模型分析、清洗落仓的全链路留痕。',
          en: 'Designed an auditable pipeline from material intake and OCR extraction to defect location, model analysis and cleaned persistence.',
        },
        {
          zh: '将新智能体接入周期从 3 天缩短到 1 天，沉淀 AI 能力接入规范。',
          en: 'Reduced onboarding of a new agent from three days to one and established an AI capability integration standard.',
        },
      ],
    },
    links: {},
  },
  {
    id: 'provincial-platform-rebuild',
    number: '03',
    title: {
      zh: '省级信息综合应用平台重构',
      en: 'Provincial Information Platform Re-architecture',
    },
    subtitle: {
      zh: '把 32 个模块的服务边界、检索性能与发版链路一起重做。',
      en: 'Rebuilding service boundaries, search performance and release flow across 32 modules.',
    },
    description: {
      zh: '对运行多年的省级信息平台做全模块重构，重划服务边界，治理字典、日志、编号和镜像版本，并把发版从多步人工改为一键发布。',
      en: 'A full re-architecture of a long-running provincial platform: redrawing service boundaries, fixing dictionary, logging, numbering and image-version drift, and replacing a manual release sequence with one-click delivery.',
    },
    stack: ['Spring Cloud', 'MyBatis', 'MySQL', 'Redis', 'Kafka', 'Solr', 'Elasticsearch', 'Jenkins', 'Kubernetes'],
    year: '2021–2024',
    detail: {
      problem: {
        zh: '多模块口径不一致、日志单表膨胀、跨模块追溯困难，热点检索需要 1–3 秒，发版依赖多步人工且配置故障频发。',
        en: 'Modules disagreed on shared definitions, log tables grew unbounded, cross-module tracing was difficult, hot searches took one to three seconds, and releases depended on manual steps with frequent configuration failures.',
      },
      solution: {
        zh: '基于 Nacos 做字典发版同步，日志按日期分表并独立上报，建立跨系统统一编号服务；Docker 镜像内置版本号；重构服务边界并用 Solr/Elasticsearch 支撑检索。',
        en: 'Synchronised dictionary releases through Nacos, partitioned logs by date with independent reporting, introduced a cross-system numbering service, embedded version metadata in Docker images, and rebuilt service boundaries around Solr and Elasticsearch.',
      },
      impact: {
        zh: '32 个模块重构上线，检索响应从 1000–3000ms 降至 200–500ms，发版耗时从 30 分钟降至 5 分钟，配置问题导致的发版故障下降 90%。',
        en: 'All 32 modules were re-architected and released. Search latency fell from 1–3s to 200–500ms, release time from 30 to 5 minutes, and configuration-related release failures by 90%.',
      },
      role: { zh: '核心开发 / 模块负责人', en: 'Core Developer / Module Lead' },
      timeline: { zh: '2021.04 — 2024.03', en: '2021.04 — 2024.03' },
      highlights: [
        {
          zh: '推动字典同步、日志分表、统一编号、镜像版本自描述和签章失败重试等治理机制落地。',
          en: 'Introduced mechanisms for dictionary sync, partitioned logs, unified numbering, self-describing image versions and signature retry.',
        },
        {
          zh: '搭建 GitLab + Jenkins + Docker + K8s 一键发版链路，测试环境发布从五步人工降为两次点击。',
          en: 'Built a one-click GitLab, Jenkins, Docker and K8s release pipeline, reducing test-environment releases from five manual steps to two clicks.',
        },
        {
          zh: '优化热点接口与检索链路，支撑大数据量查询。',
          en: 'Optimised hot endpoints and search paths to support large data volumes.',
        },
      ],
    },
    links: {},
  },
  {
    id: 'provincial-platform-early',
    number: '04',
    title: {
      zh: '省级信息综合应用平台（早期）',
      en: 'Provincial Information Platform (Early Phase)',
    },
    subtitle: {
      zh: '从基础信息采集到全业务办理，让业务数据全程可追溯。',
      en: 'From foundational data collection to full business processing, with end-to-end traceability.',
    },
    description: {
      zh: '基于 Dubbo + Spring MVC + Oracle 的全业务办理平台，独立负责基础信息采集、流程化办理和系统配置，支撑多地市差异化需求。',
      en: 'A full business processing platform built with Dubbo, Spring MVC and Oracle. I owned foundational data collection, workflow processing and system configuration, supporting differentiated requirements across prefectures.',
    },
    stack: ['Dubbo', 'Spring MVC', 'Oracle', 'RabbitMQ', 'POI'],
    year: '2017–2021',
    detail: {
      problem: {
        zh: '业务数据分散、办理过程难以全程追溯，多地市需求差异大，第三方组织机构变更需要稳定同步。',
        en: 'Business data was fragmented, processing was hard to trace end to end, prefecture requirements varied widely, and third-party organisation changes needed reliable synchronisation.',
      },
      solution: {
        zh: '以基础信息采集、业务流程化办理和系统配置管理为核心；用线程池完成系统间离线数据打包与解析，封装 POI 导入导出工具，用 RabbitMQ 同步多第三方组织机构变更；抽象共性能力并快速实现地方差异。',
        en: 'Built around foundational data collection, workflow processing and configuration management. Used thread pools for offline inter-system packaging and parsing, encapsulated POI import/export, synchronised third-party organisation changes through RabbitMQ, and abstracted shared capabilities while implementing local differences quickly.',
      },
      impact: {
        zh: '支撑全业务办理与数据追溯，形成可复用的采集、流程、配置和导入导出能力，服务多地市差异化交付。',
        en: 'Supported full business processing and data traceability, creating reusable collection, workflow, configuration and import/export capabilities for differentiated delivery across prefectures.',
      },
      role: { zh: '核心开发', en: 'Core Developer' },
      timeline: { zh: '2017.10 — 2021.03', en: '2017.10 — 2021.03' },
      highlights: [
        {
          zh: '独立负责基础信息采集、业务流程化办理和系统配置管理。',
          en: 'Owned foundational data collection, workflow-based processing and system configuration.',
        },
        {
          zh: '封装 POI 导入导出工具，支撑多业务线数据交换。',
          en: 'Built a POI-based import/export toolkit for data exchange across business lines.',
        },
        {
          zh: '通过共性抽象与个性化实现，应对多地市差异化需求。',
          en: 'Balanced shared abstractions with local implementations to handle prefecture-specific requirements.',
        },
      ],
    },
    links: {},
  },
]
