# 内容状态与上线清单

本清单对应仓库所有者提供并确认的真实简历（温思嘉，后端架构师 / 全栈）。后续修改仍必须保持事实准确，不得编造公司、职位、学历、项目成果或量化指标。

## 当前状态

| 项目 | 状态 |
| --- | --- |
| 基本资料、About、Hero | 已写入真实资料 |
| 技能分类（4 类） | 已写入真实技术栈 |
| 工作经历（3 段） | 已写入真实经历与简历指标 |
| 项目（4 个） | 已写入真实项目与简历指标 |
| 教育经历 | 西南民族大学 · 计算机科学与技术 · 本科（2013.08–2017.05） |
| 认证 / 课程 | 简历未提供，数组保持为空，页面自动隐藏 |
| 社交链接 | 简历未提供，`socials: []`，页面自动隐藏 |
| 头像 | WSJ 字母标识，未使用个人照片 |
| PDF 简历 | 2 页中文版，已隐去手机号 |
| 项目链接 | 无公开链接，`links: {}` |

可选补充：个人照片、GitHub / LinkedIn、项目演示链接、英文 PDF。没有的内容保持为空，不要为了“完整”而虚构。

## 1. 基本资料

编辑 `src/data/profile.ts`。

- [x] `name.zh` / `name.en`：温思嘉 / Sijia Wen。
- [x] `initials`：`WSJ`，用于导航、页脚和头像标识。
- [x] `role.zh` / `role.en`：后端架构师 / 全栈。
- [x] `headline.zh` / `headline.en`：9 年复杂业务系统、全栈交付与 AI 工程化。
- [x] `intro.zh` / `intro.en`：自我介绍与求职方向。
- [x] `focus.zh` / `focus.en`：Hero 档案卡关注方向。
- [x] `availability.zh` / `availability.en`：一周内到岗。
- [x] `location.zh` / `location.en`：成都，中国。
- [x] `email`：`wensijia0123@qq.com`。
- [x] `aboutLead.zh` / `aboutLead.en`：About 首段。
- [x] `aboutBody.zh` / `aboutBody.en`：技术背景、工作方式与方向。
- [x] `quickFacts`：当前职位、城市、9 年经验、到岗时间。
- [x] `principles`：3 条工作原则。
- [x] `socials`：当前为空数组，About 与 Contact 会自动隐藏社交区块。

## 2. 头像与 PDF

- [x] 头像使用 `public/images/avatar-placeholder.svg` 的 WSJ 字母标识，`profile.avatarAlt` 已对应中英文。
- [x] PDF 为 `public/resume/wensijia-backend-architect.pdf`，`profile.resumeFile` 已指向该文件。
- [x] PDF 为 2 页 A4、文字可选、无排版溢出，已用 PyMuPDF 渲染检查。
- [x] PDF 不含手机号、住址、身份证号；只保留姓名、城市、邮箱、经历、项目和教育。
- [x] 已删除不再引用的 `public/resume/resume-placeholder.pdf`。
- [x] `public/favicon.svg` 已改为 WSJ 标识。

替换头像或 PDF 后，保持文件名与 `profile.avatarFile` / `profile.resumeFile` 一致，并运行 `npm run test`。

## 3. 技能

编辑 `src/data/skills.ts`。

- [x] 四个分类：后端与架构、前端与全栈交付、数据与中间件、AI / 信创与交付。
- [x] `SkillIcon` 使用 `server` / `panels` / `database` / `sparkles`，组件映射完整。
- [x] 只列出简历中真实出现的技术，不添加熟练度百分比或星级。
- [x] 中英文分类与标签完整；专有名词保留英文。
- [x] 没有为凑数量添加未使用的工具。

## 4. 工作经历

编辑 `src/data/experience.ts`。

- [x] 3 段经历的公司、职位、时间段、地点来自简历；方正国际工作地点已按 owner 确认改为成都。
- [x] 当前产品团队：2026.04–至今，架构师 / 全栈，技术侧 1 人、7 个月。
- [x] 天津国盛华兴：2024.03–2026.03，后端架构师 / 业务线技术负责人，8 人团队。
- [x] 方正国际：2017.10–2024.03，Java 开发 → 高级开发 / 模块负责人。
- [x] `summary`、`highlights`、`stack` 中英文完整，指标均来自简历。
- [x] 未把团队成果全部归为个人成果；明确“技术侧 1 人”“负责 8 人团队”等边界。

## 5. 项目

编辑 `src/data/projects.ts`。

- [x] 4 个项目：道路交通平台、司法辅助 AI 平台、省级平台重构、早期省级平台。
- [x] `number`、`year`、`timeline` 与简历一致。
- [x] `title` / `subtitle` / `description` 中英文完整。
- [x] `stack` 为项目实际使用的技术。
- [x] `detail.problem` / `solution` / `impact` / `role` / `highlights` 完整。
- [x] 指标全部取自简历，没有新增或推断。
- [x] `links: {}`；无公开链接时弹窗显示邮件联系提示。
- [x] 项目信息来自所有者提供的简历；公开发布前仍需所有者确认客户信息可公开。

## 6. 教育经历与认证

编辑 `src/data/education.ts`。

- [x] 西南民族大学 / Southwest Minzu University。
- [x] 计算机科学与技术 / Computer Science and Technology，本科 / Bachelor。
- [x] 2013.08–2017.05，成都，中国。
- [x] `coursework: []`，未编造课程。
- [x] `certifications: []`，未编造认证；页面自动隐藏认证栏。

## 7. 双语检查

- [x] 中英文键与插值完全一致，`npm run test` 已通过。
- [x] 姓名、职位、公司、项目、学校、数字均有英文对应。
- [x] 语言切换会更新界面、`<html lang>`、标题和 meta description。
- [x] 在浏览器中逐段复核英文长句、术语与日期格式（1440 与 390 宽度）。
- [x] 确认两种语言下导航、按钮、弹窗、复制邮箱反馈均正常。

## 8. 视觉与响应式

- [x] 桌面 1440px：4 类技能与 4 个项目呈 2×2，无落单卡片。
- [x] 平板 768px：卡片折叠正常，无文字截断，无横向溢出。
- [x] 手机 390px：单栏、无横向滚动，按钮可点。
- [x] 2K/QHD 下 100% 浏览器缩放使用 23px 根字号与 1600px 版心；150% 时 CSS 视口约 1707px，根字号仍为 23px，物理字号 34.5px，确实放大 1.5 倍，且无横向溢出。已覆盖 2560×1440 的 100%/150% 与 2048×1152；截图见 `docs/preview-qhd.png`、`docs/preview-qhd-150.png`。
- [x] 教育区无认证时学位卡占满整行，布局不空洞。
- [x] About / Contact 在 `socials: []` 时不显示空的社交标题。
- [x] Experience 时间线文字不被圆点或卡片遮挡。
- [x] 项目弹窗在桌面和手机上都能滚动、关闭，焦点可见。
- [x] 所有图片有替代文本；仅图标按钮有 `aria-label`。
- [x] 系统开启“减少动态效果”后，页面无强制动画（构建 CSS 已包含对应媒体查询）。

## 9. 上线前命令

```bash
npm run lint
npm run typecheck
npm run test
npm run build
npm run preview
```

- [x] `npm run lint`：0 error / 0 warning。
- [x] `npm run typecheck`：通过。
- [x] `npm run test`：3 files / 12 tests 通过。
- [x] `npm run build`：真实资料版本构建成功。
- [x] `npm run preview`：检查首页、锚点、语言切换、4 个项目弹窗、PDF 下载、复制邮箱。
- [x] 检查 `dist/` 中包含 `index.html`、`favicon.svg`、`resume/` 和 `.nojekyll`。
- [x] 确认没有把 `node_modules/`、`dist/`、临时截图脚本或密钥加入 Git。

## 10. GitHub Pages

- [ ] 仓库 Settings → Pages → Source 选择 **GitHub Actions**。
- [ ] 代码推送到 `main` 或 `master` 后，Actions 的检查与构建 job 成功。
- [ ] `deploy` job 成功，环境 URL 可访问。
- [ ] 线上访问 `https://wensijia.github.io/` 检查资源 200、无控制台错误。
- [ ] 在手机上实际打开线上地址，测试 PDF 下载和邮件链接。
- [ ] 如需自定义域名，配置 DNS、Custom domain 和 `public/CNAME`。

## 11. 隐私与真实性最终确认

- [x] 工作经历、学历、项目成果和技能水平来自所有者提供的简历。
- [x] 简历中的量化指标原样使用，没有放大或补造。
- [x] 网站与 PDF 未公开手机号。
- [x] 公开邮箱 `wensijia0123@qq.com` 为所有者提供。
- [ ] 所有者确认项目中的客户/前雇主信息可以公开发布，或完成进一步匿名化。
- [ ] 若补充个人照片、社交链接或项目链接，确认其适合公开。

完成以上检查后，网站即可通过修改 `src/data/` 与 `public/` 并提交 Git 持续更新。
