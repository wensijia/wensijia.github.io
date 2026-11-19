# AGENTS.md

本文件定义本仓库的工程约定。修改代码、内容或部署配置前，请先阅读并遵守这些规则。

## 项目定位

这是一个纯静态、中英双语的个人技术简历网站，使用 Vue 3 + TypeScript + Vite 构建，部署到 GitHub Pages。

- 没有后端、数据库、服务端渲染或运行时 API。
- 简历内容来自仓库所有者提供并确认的真实简历；修改时必须保持事实准确，不得编造。
- 设计目标是极简商务风格：白色背景、深蓝/科技蓝强调、最大内容宽度 1600px、充足留白、轻量动画。
- 必须同时支持桌面、平板和手机，移动端为单栏布局。

## 常用命令

| 命令 | 作用 |
| --- | --- |
| `npm run dev` | 启动 Vite 开发服务器 |
| `npm run build` | 生产构建到 `dist/` |
| `npm run preview` | 本地预览生产构建 |
| `npm run lint` | ESLint 检查，任何 warning 都视为失败 |
| `npm run lint:fix` | 自动修复可修复的 ESLint 问题 |
| `npm run typecheck` | `vue-tsc --noEmit` 类型检查 |
| `npm run test` | Vitest 单次运行 |
| `npm run test:watch` | Vitest watch 模式 |

提交前必须依次通过：

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

Node.js 版本要求 `>=20`。依赖使用固定版本，不使用 `^` 或 `~`；升级依赖时必须同步更新 `package-lock.json`。

## 目录结构

```text
.
├── .github/workflows/deploy.yml   # GitHub Pages CI/CD
├── public/                        # 原样复制的静态资源
│   ├── images/avatar-placeholder.svg  # WSJ 字母标识
│   ├── resume/wensijia-backend-architect.pdf
│   └── .nojekyll
├── src/
│   ├── components/                # 通用组件与页面区块
│   │   ├── sections/              # 七个页面区域
│   │   ├── AppHeader.vue
│   │   ├── AppFooter.vue
│   │   ├── LanguageToggle.vue
│   │   ├── ProjectDetailModal.vue
│   │   ├── SectionHeading.vue
│   │   └── SocialLinks.vue
│   ├── composables/               # 语言内容与当前区块逻辑
│   ├── data/                      # 个人资料、技能、经历、项目、教育
│   ├── i18n/                      # 界面文案与语言初始化
│   ├── styles/main.css            # Tailwind 入口与共享样式
│   ├── tests/                     # Vitest 测试与 jsdom 环境设置
│   ├── types/content.ts           # 内容数据模型
│   ├── utils/assetUrl.ts          # 兼容 Vite base 的资源 URL
│   ├── App.vue
│   └── main.ts
├── AGENTS.md
├── README.md
├── docs/CONTENT-CHECKLIST.md
├── index.html
├── tailwind.config.ts
├── vite.config.ts
└── package.json
```

## 架构约定

### 1. 内容与组件分离

- 所有可编辑的简历内容放在 `src/data/`，不要在 Vue 模板中硬编码姓名、公司、项目或日期。
- 可本地化字段必须使用 `LocalizedText`（`{ zh: string; en: string }`）。
- 组件通过 `useLocalized().localize()` 读取双语内容，不要直接读取 `.zh` 或 `.en`。
- 新增内容类型时，先更新 `src/types/content.ts`，再更新所有语言的数据文件。
- `src/data/` 中的真实资料必须来自所有者确认的简历；不得自行添加未经确认的工作成果、指标、学历、认证或技能熟练度。

### 2. 国际化

- 界面固定文案位于 `src/i18n/locales/en.ts` 和 `src/i18n/locales/zh.ts`。
- 两个语言文件的键必须完全一致；`src/tests/i18n.spec.ts` 会做严格比对。
- 插值占位符（如 `{name}`）必须在两种语言中保持一致。
- 语言切换要同时更新：界面文案、`<html lang>`、页面标题和 meta description。
- 语言偏好持久化在 `localStorage` 的 `portfolio-locale` 键中。
- 中文页面使用 `zh-CN`，英文页面使用 `en`。

### 3. 页面区块

七个区块的 id 和顺序固定：

1. `#top` — Hero
2. `#about` — About
3. `#skills` — Skills
4. `#experience` — Experience
5. `#projects` — Projects
6. `#education` — Education
7. `#contact` — Contact

每个区块必须使用 `<section>`、`id` 和 `aria-labelledby`（或等效的可访问标题关联）。导航锚点、`useActiveSection` 和滚动偏移依赖这些 id，不要随意重命名。

`App.vue` 只负责页面组装、当前项目状态和文档元数据；业务展示逻辑留在区块组件中。项目详情使用 `ProjectDetailModal.vue`，不引入路由。

### 4. 样式

- 使用 Tailwind 工具类；共享的排版、卡片和按钮样式在 `src/styles/main.css` 中以 `@layer components` 定义。
- 颜色、字体、最大宽度和阴影优先使用 `tailwind.config.ts` 中的 token：
  - `ink`、`navy`、`accent`、`accent-strong`、`accent-soft`、`mist`、`line`
  - `max-w-page`（1600px）
- 不要新增复杂装饰、重型动画或大面积渐变。动画必须支持 `prefers-reduced-motion`。
- 移动端单栏；技能与项目卡片可在 `sm`/`md` 断点转为两栏，主要双栏区块从 `lg` 开始。
- 基础字号通过根元素响应式放大：默认 17px、`sm` 18px、`lg` 20px、`min-width: 1700px` 时 23px；版心同步扩大到 1600px。这样在 2K 屏幕 100% 下已有足够阅读尺寸；2K 浏览器在 150% 缩放下 CSS 视口约 1707px，仍保持 23px 根字号，物理字号为 34.5px，确实比 100% 的 23px 放大 1.5 倍。禁止再用 CSS `zoom` 或按视口反向缩放来“模拟”浏览器缩放，否则会抵消真实缩放并破坏响应式。调整字号或版心后必须在 1440、2048、2560 宽度以及浏览器 100%/150% 缩放下验证无横向溢出、Hero 不被裁切、锚点偏移正确。
- 交互元素必须有可见的 `focus-visible` 状态，触控目标不小于约 40px。

### 5. 静态资源

- `public/` 下的文件会原样发布。页面中使用 `assetUrl()` 生成路径，确保 Vite base 改变时仍然可用。
- 数据文件中的资源路径不带前导 `/`，例如 `resume/wensijia-backend-architect.pdf`。
- PDF 必须是真实可打开的静态文件，不能是空文件或伪扩展名文件。
- 替换头像或 PDF 后，保持文件名与 `profile.avatarFile` / `profile.resumeFile` 一致；`src/tests/data.spec.ts` 会检查文件是否存在。

### 6. 可访问性

- 保持语义化标题层级，每个区块只有一个主要标题。
- 图标若是纯装饰，设置 `aria-hidden="true"`；仅图标按钮必须有 `aria-label`。
- 项目弹窗必须保留：`role="dialog"`、`aria-modal="true"`、ESC 关闭、焦点陷阱、打开时锁定页面滚动、关闭后恢复焦点。
- 移动菜单打开时锁定页面滚动，并支持 ESC 关闭。
- 所有图片必须有与语言对应的 `alt` 文本。

### 7. 测试

- 修改数据或 i18n 后至少运行 `npm run test`。
- 新增交互时补充测试，优先覆盖用户可见行为，而不是实现细节。
- 当前测试覆盖：七个区块渲染、语言切换与文档元数据、项目弹窗开关、PDF 下载、复制邮箱、双语键对齐、内容完整性、静态资源存在性。
- 测试环境在 `src/tests/setup.ts` 中模拟 `IntersectionObserver`、`requestAnimationFrame` 和剪贴板。

## 内容政策

- 简历内容来自所有者的真实履历。不得自行编造工作经历、学历、项目成果、量化指标或技能水平。
- 只有所有者提供并确认后，才能新增或修改真实姓名、公司、学校、邮箱、社交链接或项目数据；当前 PDF 已隐去手机号。
- 发布前检查 `docs/CONTENT-CHECKLIST.md`，并确认 PDF 与头像不包含不希望公开的信息。
- 不在仓库中提交密钥、令牌、私钥或任何凭据。

## 构建与部署

- `vite.config.ts` 的 `base` 为 `/`，适用于 `username.github.io` 用户站点。
- GitHub Actions 顺序：Install → Lint → Type check → Test → Build → Deploy。
- 只有 `verify-and-build` job 全部成功，`deploy` job 才会运行。
- 部署工作流位于 `.github/workflows/deploy.yml`；Pages 的 Source 必须设置为 **GitHub Actions**。
- 不要提交 `dist/`、`node_modules/`、覆盖率报告或本地环境文件。

## 修改检查清单

- [ ] 内容仍然全部位于 `src/data/`，没有把真实数据写进组件。
- [ ] 中英文键和插值占位符完全一致。
- [ ] 七个区块 id 未改变，导航与滚动偏移正常。
- [ ] 桌面 1440px、平板 768px、手机 390px 无横向溢出。
- [ ] 键盘可以操作导航、语言切换、弹窗和复制邮箱。
- [ ] `npm run lint`、`npm run typecheck`、`npm run test`、`npm run build` 全部通过。
- [ ] 没有提交构建产物、依赖目录或敏感信息。
