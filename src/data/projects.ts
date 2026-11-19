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
    id: 'industry-college-platform',
    number: '03',
    title: {
      zh: '产业学院（cyxy）· 产教融合在线教育平台',
      en: 'Industry College (cyxy) Industry-Education Platform',
    },
    subtitle: {
      zh: '用技能树、考试、岗位实践与作品提交，把校企协同育人串成可追踪的成长路径。',
      en: 'A skill-tree, exam and industry-practice platform that makes university-enterprise talent development traceable.',
    },
    description: {
      zh: '面向产教融合与校企合作场景的在线教育平台，独立全栈开发，交付 34 个后端业务模块、32 个前端业务页面。',
      en: 'An online education platform for industry-education collaboration. I delivered it solo, including 34 backend business modules and 32 frontend business pages.',
    },
    stack: ['Java 17', 'Spring Boot 3.2', 'MyBatis-Plus', 'Sa-Token', 'Flowable', 'bpmn-js', 'Vue 3', 'Element Plus', 'vxe-table', '微信小程序'],
    year: '2024',
    detail: {
      problem: {
        zh: '产教融合项目需要把技能学习、在线考试、企业岗位与实践报名、作品提交和学籍管理串起来，同时让多所学校在同一平台上保持数据隔离。',
        en: 'Industry-education programmes needed to connect skill learning, online exams, employer job and practice applications, work submissions and student records, while serving multiple schools with isolated data.',
      },
      solution: {
        zh: '以租户套餐和 MyBatis-Plus 租户插件做行级数据隔离，Redis 缓存键按租户隔离；建立“技能库—技能树—技能点—难度—学习资料”五级模型；把题库与技能点难度关联；集成 Flowable 7 与 bpmn-js 配置审批流程；补充企业子账号、岗位/实践报名、作品提交、学校—院系—专业学籍，以及微信小程序支付与钱包账户。',
        en: 'Built a multi-tenant SaaS model with tenant packages, MyBatis-Plus row-level isolation and tenant-scoped Redis keys. Modelled a five-level skill tree from skill library to learning material, connected question banks to skill difficulty, integrated Flowable 7 and bpmn-js for configurable approvals, and added enterprise sub-accounts, job and practice applications, work submissions, school-department-major student records, plus WeChat mini-program payments and wallet accounts.',
      },
      impact: {
        zh: '形成“技能树学习—在线考试—岗位/实践报名—作品提交”的培养闭环；独立交付 34 个后端业务模块和 32 个前端业务页面，支撑多所学校以 SaaS 方式运营。',
        en: 'Formed a learning, exam, application and submission loop; delivered 34 backend modules and 32 frontend pages independently, supporting multiple schools through one multi-tenant platform.',
      },
      role: {
        zh: '独立全栈开发（后端 + Web 管理端 + 微信小程序端）',
        en: 'Solo Full-stack Developer (backend + web admin + WeChat mini-program)',
      },
      timeline: { zh: '2024.08 — 2024.10', en: '2024.08 — 2024.10' },
      highlights: [
        {
          zh: '设计“技能库—技能树—技能点—技能点难度—学习资料”五级模型及关联关系，学员可按技能树报名并追踪进度。',
          en: 'Designed the five-level model of skill library, skill tree, skill point, difficulty and learning material, with enrolment and progress tracking along each tree.',
        },
        {
          zh: '建设知识点题库与技能点难度关联，支持在线考试和面试机考，形成“学—练—考—评”闭环。',
          en: 'Built question banks linked to skill points and difficulty for online exams and interview tests, completing the learn-practise-test-assess loop.',
        },
        {
          zh: '集成 Flowable 7 工作流与 bpmn-js 流程设计器，实现审批流程的可视化配置。',
          en: 'Integrated Flowable 7 and the bpmn-js designer for visually configured approval workflows.',
        },
        {
          zh: '交付企业/子账号/岗位、实践报名与作品提交、学籍体系，以及微信支付和钱包变更记录。',
          en: 'Delivered enterprise, sub-account and job management, practice applications and work submissions, student records, and WeChat payment with wallet ledgers.',
        },
      ],
    },
    links: {},
  },
  {
    id: 'training-saas-platform',
    number: '04',
    title: {
      zh: '培训管理（pxgl）· 多租户 SaaS 培训运营平台',
      en: 'Training Management (pxgl) Multi-tenant SaaS Platform',
    },
    subtitle: {
      zh: '面向连锁门店培训批次，把课程、签到、缴费、食宿与开票退费串成一条运营闭环。',
      en: 'A multi-tenant platform that connects courses, attendance, payments, accommodation and invoicing for chain-store training batches.',
    },
    description: {
      zh: '基于 RuoYi-Vue-Plus 的多租户培训运营平台，服务连锁门店培训场景，独立负责后端、Web 管理端与微信小程序端。',
      en: 'A multi-tenant training platform built on RuoYi-Vue-Plus for chain-store training operations, delivered solo across backend, web admin and WeChat mini-program.',
    },
    stack: ['Java 17', 'Spring Boot 3.1', 'MyBatis-Plus', 'Sa-Token', 'Redisson', 'PowerJob', 'IJPay', 'Vue 3', 'Element Plus', '微信小程序'],
    year: '2024',
    detail: {
      problem: {
        zh: '连锁门店的培训批次涉及报名、签到、资料、食宿、开票和退费，多个运营主体需要共用一套系统，但业务数据必须隔离。',
        en: 'Chain-store training batches span registration, attendance, materials, accommodation, invoicing and refunds. Multiple operators needed one system with strictly isolated business data.',
      },
      solution: {
        zh: '基于 RuoYi-Vue-Plus 搭建租户套餐与数据隔离；采用 Java 17、Spring Boot 3 与 MyBatis-Plus；用 Sa-Token 实现 PC 与小程序差异化登录；Redisson + lock4j 防止重复扣费；PowerJob 承接报表结算；建立开票单位、开票记录、商品明细与红冲流程。',
        en: 'Built tenant packages and data isolation on RuoYi-Vue-Plus with Java 17, Spring Boot 3 and MyBatis-Plus. Sa-Token provides separate login strategies for PC and mini-program, Redisson and lock4j prevent duplicate charges, PowerJob runs report settlement, and the invoicing ledger covers issuers, records, line items and red-letter reversals.',
      },
      impact: {
        zh: '形成课程—批次—签到—资料领取—团队报名/缴费—退费全链路；支持门店餐食住宿配置与批次报表；一套系统服务多个培训运营主体。',
        en: 'Connected courses, batches, attendance, material collection, team registration and payment, and refunds. Store meal and accommodation settings feed batch reports, and one deployment serves multiple training operators.',
      },
      role: {
        zh: '独立全栈开发（后端 + Web 管理端 + 微信小程序端）',
        en: 'Solo Full-stack Developer (backend + web admin + WeChat mini-program)',
      },
      timeline: { zh: '2024.05 — 2024.07', en: '2024.05 — 2024.07' },
      highlights: [
        {
          zh: '实现租户套餐、数据隔离与 PC/小程序差异化登录，支撑多运营主体共用平台。',
          en: 'Implemented tenant packages, data isolation and differentiated PC/mini-program login for multiple operators.',
        },
        {
          zh: '打通课程、批次、签到、资料领取、团队报名（Excel 批量导入）、团队缴费与退费申请。',
          en: 'Connected courses, batches, attendance, material collection, team registration with Excel import, team payment and refund applications.',
        },
        {
          zh: '建立开票单位、开票记录、发票商品明细与红冲台账，并支持门店餐食住宿及批次报表。',
          en: 'Built an invoicing ledger with issuers, records, line items and red-letter reversals, plus store meal, accommodation and batch reports.',
        },
        {
          zh: '用 Redisson + lock4j 防止重复扣费，PowerJob 执行报表结算，Spring Boot Admin 提供运行监控。',
          en: 'Used Redisson and lock4j to prevent duplicate charges, PowerJob for report settlement and Spring Boot Admin for runtime monitoring.',
        },
      ],
    },
    links: {},
  },
  {
    id: 'apartment-ops-platform',
    number: '05',
    title: {
      zh: '壹柒云居 · 智能长租公寓运营管理系统',
      en: 'Yiqi Yunju Smart Long-term Rental Apartment Platform',
    },
    subtitle: {
      zh: '把资产、合同、租赁账务与 IoT 硬件管控连成一条可追溯的运营闭环。',
      en: 'Connecting assets, contracts, rental accounting and IoT hardware control in one traceable operating loop.',
    },
    description: {
      zh: '面向集中式公寓运营商的资产管理与租赁运营一体化平台，独立负责后端、Web 管理端和微信小程序端，覆盖四级资产、合同签约、租住订单、支付与钱包账务，并接入门锁、电表等 IoT 硬件。',
      en: 'An integrated asset and rental operations platform for centralised apartment operators. I delivered the backend, web admin and WeChat mini-program, covering four-level assets, contracts, tenancy orders, payments and wallet ledgers, with IoT locks and meters connected.',
    },
    stack: ['Spring Boot 2.5', 'MyBatis', 'Redis', 'IJPay', '微信支付 V3/V2', '阿里云 OSS', 'iText', 'Vue 2', 'Element-UI', '微信小程序'],
    year: '2023',
    detail: {
      problem: {
        zh: '公寓运营需要同时管理“项目—楼栋—楼层—房间”四级资产、合同、租住订单、支付与钱包账务，并联动门锁、电表等硬件；任一环节脱节都会让租赁过程难以追溯。',
        en: 'Apartment operations had to manage four-level assets, contracts, tenancy orders, payments and wallet ledgers while coordinating locks and meters. Any disconnected step made the rental lifecycle hard to trace.',
      },
      solution: {
        zh: '设计资产—租赁领域模型，让合同、租住订单、退款与钱包流水联动；基于 IJPay + wechatpay-java 接入微信支付 V3/V2 与支付宝；对接通通锁（TTLock）、多版本智能电表（含 485 协议）和 ISUP 视频设备；用 iText 生成 PDF 电子合同，封装微信模板消息与小程序 OSS 直传，并补充转租/移交批次和数据报表。',
        en: 'Designed an asset-to-lease domain model linking contracts, tenancy orders, refunds and wallet entries. Integrated WeChat Pay V3/V2 and Alipay through IJPay and wechatpay-java, connected TTLock locks, multiple meter generations including RS-485 and ISUP video devices, generated PDF contracts with iText, wrapped WeChat template messages and mini-program OSS direct upload, and added transfer/handover batches and reports.',
      },
      impact: {
        zh: '打通从资产、签约、收租到硬件管控的线上闭环；电子合同、支付和钱包流水可追溯；支持转租/移交批次、数据报表与多厂商设备管理。',
        en: 'Connected assets, contracting, rent collection and hardware control in one online loop. E-contracts, payments and wallet entries are traceable, with transfer batches, reports and multi-vendor device management.',
      },
      role: {
        zh: '独立全栈开发（后端 + Web 管理端 + 微信小程序端）',
        en: 'Solo Full-stack Developer (backend + web admin + WeChat mini-program)',
      },
      timeline: { zh: '2023.05 — 2023.08', en: '2023.05 — 2023.08' },
      highlights: [
        {
          zh: '设计资产—租赁领域模型，合同、租住订单、退款和钱包流水联动，形成可追溯的租赁账务闭环。',
          en: 'Designed the asset-to-lease domain model so contracts, tenancy orders, refunds and wallet entries form a traceable accounting loop.',
        },
        {
          zh: '基于 IJPay 与 wechatpay-java 接入微信支付 V3/V2 和支付宝，配套钱包账户与退款流程。',
          en: 'Integrated WeChat Pay V3/V2 and Alipay with IJPay and wechatpay-java, including wallet accounts and refunds.',
        },
        {
          zh: '对接 TTLock 门锁、多版本智能电表（含 485 协议）和 ISUP 视频设备，实现绑定/解绑、租借订单下发、远程控制与用电记录。',
          en: 'Connected TTLock locks, multiple meter generations including RS-485 and ISUP video devices for binding, rental order dispatch, remote control and electricity records.',
        },
        {
          zh: '用 iText 生成电子合同，封装微信模板消息（access_token Redis 缓存）与小程序 OSS 直传，并用代码生成器搭建 CRUD。',
          en: 'Generated e-contracts with iText, wrapped WeChat template messages with a Redis-cached access token and mini-program OSS uploads, and used a code generator for CRUD screens.',
        },
      ],
    },
    links: {},
  },
  {
    id: 'provincial-platform-rebuild',
    number: '06',
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
    number: '07',
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
