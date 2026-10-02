# LSE Study Hub

一个**自用**的、双语的、纯静态学习网站。把每门课拆成周次，跑一条闭环：
**看讲义 → 记笔记 → 讲出来（费曼）→ 被追问（苏格拉底）→ 做题 → 收错题 → 定期复习（SRS）**。
外加每周的「要问的问题」和「AI 使用记录」。所有进度、错题、草稿都只存在你自己的浏览器（`localStorage`）。

零构建：可以直接**双击 `index.html`** 打开，也可以推到 **GitHub Pages**。

### 已收录课程
| 课程 | 中文 | 配色 | 讲义类型 |
|---|---|---|---|
| **MA221** Further Mathematical Methods (Calculus) | 高等数学方法（微积分） | 红 + 绿 | 无-slide 型（按讲授内容写） |
| **FM214** Principles of Finance I | 金融学原理 I | 红 + 金/琥珀 | slide 讲义型（照官方 slides 逐节解读，标注 slide 号） |

> FM214 有官方 slides，Week 1 讲义 `courses/fm214/lectures/w01_portfolio_capm.html` 按 slides 1–39 分 7 个 part 逐节解读；配色为**红做结构 + 金/琥珀做强调**（定义/例题/TL;DR）。

---

## 页面
| 文件 | 作用 |
|---|---|
| `index.html` | 首页 / 所有课程 + 总进度 + 今日待复习 |
| `course.html?c=ma221` | 课程主页：十周时间线、learning outcomes、考试资源 |
| `week.html?c=ma221&w=1` | **周次学习页**（学习闭环 + 要问的问题 + AI 记录） |
| `courses/ma221/lectures/w01_limits.html` | Week 1 双语讲义（4 个 part、KaTeX、例题详解） |
| `courses/ma221/notes/w01_limits.md` | Week 1 **笔记模板**（你自己填） |
| `review.html` | 错题本 + 间隔重复复习 |

数据全在 `data/ma221.js`（一个 `<script>` 就能离线加载）。样式在 `assets/hub.css`，逻辑在 `assets/hub.js`。

---

## 本地打开
直接双击 `index.html` 即可。
> 注：本地 `file://` 打开时，Week 1 页无法把你的 `.md` 笔记内嵌渲染（浏览器安全限制），会给一个打开 `.md` 的链接；公式需要联网加载 KaTeX。部署到 Pages 后一切正常。

## 部署到 GitHub Pages
```bash
git init && git add . && git commit -m "init study hub"
git branch -M main
git remote add origin https://github.com/<你>/<repo>.git
git push -u origin main
```
在 GitHub 仓库 **Settings → Pages → Source: `main` / root**，几分钟后访问 `https://<你>.github.io/<repo>/`。

---

## 怎么加**一周**内容
1. 在 `data/ma221.js` 里找到那一周对象，填 `objectives / keyTerms / feynman / socratic / exercises.items`（照 Week 1 的格式）。把 `status:"locked"` 改成 `"active"` 或去掉。
2. 讲义：在 `courses/ma221/lectures/` 放一个 HTML（可复制 `w01_limits.html` 改内容），并把路径写进该周的 `lecture` 字段。
3. 笔记：在 `courses/ma221/notes/` 放一个 `.md`，把路径写进 `notes` 字段——**这个 `.md` 你自己写**。

## 怎么加**一门课**
1. 复制 `data/ma221.js` → `data/maXXX.js`，改 `window.LSEHUB.courses.maXXX = {...}`，给它一个自己的 `accent` 颜色。
2. 在 `index.html` 和用到的页面里，多引一行 `<script src="data/maXXX.js"></script>`。
3. 完成——首页会自动多出一张课程卡片。

## 错题本 & 复习
- 讲义页 / 周次页右下角有浮标「🙋 我没懂 / 记一笔」，随手把**没懂 / 错题 / 必背**存进错题本。
- `review.html` 按 SM-2 间隔重复调度：`忘了 / 难 / 会 / 秒懂` 四档。可导出 JSON 备份。

---

*Built for Wenying · 极限、积分，一步步弄懂、记牢。*
