The user wants me to output the full skill.md content directly in the chat so they can copy it.
```markdown
# Arknights UI - 明日方舟风格 Vue 3 组件库

## 项目概述

Arknights UI 是一套基于 Vue 3 + TypeScript 的 UI 组件库，还原明日方舟游戏 UI 的设计语言。
参考项目：`astro-arknights`（Astro 模仿官网主题）和 `hexo-theme-arknights`（Hexo 博客主题）。

## 技术栈

- **Vue 3.5+** / Composition API / `<script setup>` / TypeScript 5.6
- **Vite 6** — 构建 & 开发服务器
- **PNPM 8+** — monorepo workspace 管理
- **CSS Custom Properties** — Design Token 实现，支持主题定制

## 项目结构

```
arknights-ui/
├── packages/
│   ├── arknights-ui/          # 组件库源码
│   │   ├── src/
│   │   │   ├── components/    # 组件（Button, Input, Card, Table, Menu, Dialog, Drawer, Pagination）
│   │   │   ├── styles/        # 全局样式（variables.css, reset.css, transitions.css）
│   │   │   ├── utils/         # 工具函数（install.ts, props.ts, emitter.ts）
│   │   │   └── index.ts       # 入口，统一注册
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── playground/            # 开发调试 Playground
│   │   ├── src/demos/         # 各组件 Demo 页面
│   │   └── vite.config.ts
│   └── docs/                  # 文档站点
│       ├── src/pages/         # 各组件文档页
│       └── vite.config.ts
├── package.json               # Monorepo 根配置
├── pnpm-workspace.yaml
└── tsconfig.json
```

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动 Playground（端口 3000）
pnpm dev

# 启动文档站点（端口 5173）
pnpm doc

# 构建组件库
pnpm build
```

## 组件清单

| 组件 | 标签名 | 说明 | 设计特征 |
|------|--------|------|----------|
| Button | `<AkButton>` | 按钮 | 可选斜切、纯色变体、悬浮白色反转 |
| Input | `<AkInput>` | 输入框 | 左侧白/蓝边框、聚焦蓝色遮罩展开动画 |
| Card | `<AkCard>` | 卡片 | 四角 L 形装饰、悬浮蓝色背景反转 |
| Table | `<AkTable>` | 表格 | hexo-theme-arknights 风格、白色表头、蓝色单元格边框 |
| Menu | `<AkMenu>` | 菜单 | 垂直/水平模式、左侧蓝色指示条 |
| MenuItem | `<AkMenuItem>` | 菜单项 | 由 Menu 包裹使用 |
| Dialog | `<AkDialog>` | 对话框 | 顶部蓝色装饰线、毛玻璃遮罩 |
| Drawer | `<AkDrawer>` | 抽屉 | 侧边蓝色装饰线、毛玻璃遮罩 |
| Pagination | `<AkPagination>` | 分页 | 蓝色边框、激活蓝色背景反转、省略号折叠 |

## 设计规范

### 色彩系统

以深色基底搭配高对比度青色（`#18d1ff`）为主色调，标志性黄色（`#ffee22`）为副色调，还原明日方舟 UI 的视觉风格。

| Token | 用途 | 色值 |
|-------|------|------|
| `--ak-primary` | 主色调 (ark-blue) | `#18d1ff` |
| `--ak-primary-light` | 主色调（亮） | `#2bf` |
| `--ak-primary-dark` | 主色调（暗） | `#0fa8d4` |
| `--ak-subcolor` | 副色调 (end-yellow) | `#ffee22` |
| `--ak-danger` | 危险色 | `#C0392B` |
| `--ak-danger-dark` | 危险色（暗） | `#962d22` |
| `--ak-success` | 成功色 | `#00c853` |
| `--ak-success-dark` | 成功色（暗） | `#00a844` |
| `--ak-warning` | 警告色 | `#ffee22` |
| `--ak-warning-dark` | 警告色（暗） | `#e6d200` |
| `--ak-bg-base` | 页面背景 | `#141516` |
| `--ak-bg-panel` | 面板背景 | `#1a1a1a` |
| `--ak-bg-card` | 卡片背景 | `rgba(20,21,22,0.95)` |
| `--ak-bg-input` | 输入框背景 | `#000` |
| `--ak-bg-overlay` | 遮罩背景 | `rgba(0,0,0,0.85)` |
| `--ak-text-primary` | 标题文字 | `#fff` |
| `--ak-text-regular` | 正文文字 | `#c4c4c4` |
| `--ak-text-secondary` | 次要文字 | `#898989` |
| `--ak-text-muted` | 禁用/占位文字 | `#535353` |
| `--ak-text-rev` | 反色文字（在蓝色/白色上） | `#000` |
| `--ak-border-color` | 默认边框 | `rgba(#fff,.1)` |

### 字体

来自明日方舟官方网站使用的字体家族：

| Token | 用途 | 值 |
|-------|------|-----|
| `--ak-font-family` | 主字体 | `'Bender', 'Noto Sans SC', 'Microsoft YaHei', sans-serif` |
| `--ak-font-family-light` | 轻字重 | `'BenderLight', 'Noto Sans SC', sans-serif` |
| `--ak-font-family-bold` | 粗字重 | `'BenderBold', 'Noto Sans SC', sans-serif` |
| `--ak-font-family-display` | 展示字体 | `'Novecentosanswide', 'Oswald', 'Bender', sans-serif` |
| `--ak-font-mono` | 等宽字体 | `'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', monospace` |

中文回退：Noto Sans SC / Microsoft YaHei

### 核心设计特征

1. **无渐变** — 所有颜色使用纯色，禁止 `linear-gradient`，明日方舟 UI 以纯色硬边为主
2. **无圆角** — 所有组件的 `border-radius` 已移除，仅 loading spinner 保留 `border-radius: 50%`
3. **无辉光** — 移除所有 `box-shadow` 发光效果和 `text-shadow` 发光
4. **斜切（可选）** — Button 通过 `angled` prop 启用 `clip-path` 切角，默认关闭
5. **悬浮反转** — 组件悬浮时背景变为主题蓝 `--ak-primary`，文字反转为黑色 `#000`；Card 悬浮同理
6. **Button 悬浮** — default/primary 悬浮时背景变纯白 `#fff`，文字反转为黑色
7. **Input 聚焦** — 左侧边框白色（默认）→ 蓝色（聚焦），蓝色遮罩从左到右展开（100% 不透明），输入文字变黑，占位符变白
8. **Card 四角装饰** — 四角带有 L 形线条装饰，还原明日方舟面板的 HUD 感
9. **Dialog/Drawer 装饰线** — 顶部/侧边有蓝色装饰线，毛玻璃遮罩
10. **Table** — 参照 hexo-theme-arknights：`th` 白底黑字白色边框，`td` 蓝色边框，hover 蓝色半透明背景
11. **主色滚动条** — `#18d1ff` 滑块 + `#5a5a5a` 轨道，直角无圆角
12. **链接交互** — hover 时背景变为主色、文字反色为黑
13. **间距 token** — xs(4px), sm(8px), md(12px), lg(16px), xl(24px), xxl(32px)

### 组件尺寸

| Token | 值 |
|-------|-----|
| `--ak-component-size-sm` | `28px` |
| `--ak-component-size-md` | `36px` |
| `--ak-component-size-lg` | `44px` |

### 字号

| Token | 值 |
|-------|-----|
| `--ak-font-size-xs` | `12px` |
| `--ak-font-size-sm` | `13px` |
| `--ak-font-size-base` | `14px` |
| `--ak-font-size-md` | `16px` |
| `--ak-font-size-lg` | `18px` |
| `--ak-font-size-xl` | `20px` |
| `--ak-font-size-xxl` | `24px` |

---

## API 参考

### Button

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `'default' \| 'primary' \| 'danger' \| 'success' \| 'warning'` | `'default'` | 颜色变体 |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | 尺寸 |
| disabled | `boolean` | `false` | 禁用 |
| loading | `boolean` | `false` | 加载中 |
| block | `boolean` | `false` | 撑满父容器宽度 |
| ghost | `boolean` | `false` | 幽灵按钮（透明背景） |
| angled | `boolean` | `false` | 斜切效果（clip-path 切角） |
| htmlType | `'button' \| 'submit' \| 'reset'` | `'button'` | 原生 type |

**Events**: `click`

**设计说明**：
- default: 暗色背景 + 白色文字，hover 背景变白、文字变黑
- primary: `--ak-primary-dark` 背景，hover 背景变白、文字变黑
- danger/success/warning: 对应暗色背景，hover 变亮色
- angled: 通过 `clip-path: polygon(...)` 实现右下+左上切角，sm/md/lg 切角大小不同

### Input

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| modelValue | `string \| number` | `''` | 绑定值（支持 v-model） |
| type | `string` | `'text'` | 输入类型 |
| placeholder | `string` | `''` | 占位文本 |
| clearable | `boolean` | `false` | 可清空 |
| disabled | `boolean` | `false` | 禁用 |
| readonly | `boolean` | `false` | 只读 |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | 尺寸 |

**Events**: `update:modelValue`, `focus`, `blur`, `enter`

**Slots**: `prefix`, `suffix`

**设计说明**：
- 未聚焦：黑色背景 + 白色左边框 2px
- 聚焦：左边框变主题蓝，蓝色遮罩从左到右 `scaleX(0→1)` 展开（100% 不透明），输入文字变黑，占位符变白
- 文字、prefix、suffix 均在遮罩之上（z-index: 2）

### Card

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | `string` | `''` | 标题 |
| bordered | `boolean` | `true` | 显示边框 |
| shadow | `boolean` | `true` | 显示阴影 |
| hoverable | `boolean` | `false` | 悬浮交互 |

**Slots**: `default`（body）, `header`, `footer`

**设计说明**：
- 四角有 L 形装饰线条（`.ak-card__corner`）
- body 文本统一 `#fff`，`font-weight: 500`
- 悬浮时：背景变主题蓝，标题/body 文字 + 角标装饰全部反转为黑色（`!important` 覆盖内联样式）

### Table

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| columns | `TableColumn[]` | required | 列配置 |
| data | `Record<string, unknown>[]` | required | 数据 |
| hoverable | `boolean` | `true` | 行悬浮高亮 |
| compact | `boolean` | `false` | 紧凑模式 |

**TableColumn**: `{ key: string, title: string, width?: string, align?: 'left' \| 'center' \| 'right', render?: (row) => unknown }`

**Slots**: `empty`, `cell-{key}`（作用域插槽 `{ row, column, index }`）

**设计说明**（来自 hexo-theme-arknights `base.styl`）：
- 无外边框（`border: 0`），`border-collapse: collapse`
- `th`: 黑色文字 + 白色背景 + 白色 1px 边框
- `td`: 主题蓝 `--ak-primary` 1px 边框
- hover: `td` 背景 `rgba(24, 209, 255, 0.1)`
- 字体: `--ak-font-family`（Bender 系列）

### Menu

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| mode | `'vertical' \| 'horizontal'` | `'vertical'` | 菜单模式 |
| collapsed | `boolean` | `false` | 折叠 |
| title | `string` | `''` | 菜单标题 |
| modelValue | `string` | `''` | 当前选中项 key（支持 v-model） |

**Events**: `select`

### MenuItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| key | `string` | required | 唯一标识 |
| label | `string` | `''` | 显示文本 |
| icon | `string` | `''` | 图标 |
| disabled | `boolean` | `false` | 禁用 |

**设计说明**：
- 垂直模式：左侧 2px 蓝色指示条（激活时）
- 水平模式：底部 2px 蓝色指示条（激活时）
- 激活项背景 `rgba(24, 209, 255, 0.1)`

### Dialog

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | `boolean` | `false` | 显示控制（支持 v-model） |
| title | `string` | `''` | 标题 |
| width | `string` | `'520px'` | 宽度 |
| closeOnOverlay | `boolean` | `true` | 点击遮罩关闭 |
| showClose | `boolean` | `true` | 显示关闭按钮 |

**Events**: `update:visible`, `close`, `confirm`

**Slots**: `default`, `footer`

**设计说明**：顶部蓝色装饰线 + 毛玻璃遮罩 `backdrop-filter: blur()`

### Drawer

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| visible | `boolean` | `false` | 显示控制（支持 v-model） |
| placement | `'left' \| 'right' \| 'top' \| 'bottom'` | `'right'` | 方向 |
| title | `string` | `''` | 标题 |
| size | `string` | `'360px'` | 尺寸 |
| closeOnOverlay | `boolean` | `true` | 点击遮罩关闭 |

**Events**: `update:visible`, `close`

**Slots**: `default`, `footer`

**设计说明**：侧边蓝色装饰线 + 毛玻璃遮罩

### Pagination

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| total | `number` | `0` | 总条目数 |
| pageSize | `number` | `10` | 每页条数 |
| currentPage | `number` | `1` | 当前页码（支持 v-model） |

**Events**: `update:currentPage`, `change` — 回调参数均为 `(page: number)`

**设计说明**（来自 hexo-theme-arknights `#paginator`）：
- 白色文字 + 主题蓝边框
- 激活页码：蓝色背景 + 黑色文字
- 悬浮：蓝色背景 + 黑色文字
- 字体：`BenderBold`
- 页码超过 7 页时折叠中间页码，以 `...` 显示

---

## 在现有项目中使用

```bash
pnpm add @arknights-ui/arknights-ui
```

### 全量引入

```typescript
import ArknightsUI from '@arknights-ui/arknights-ui'
import '@arknights-ui/arknights-ui/styles'

app.use(ArknightsUI)
```

### 按需引入

```typescript
import { ArknightsButton, ArknightsInput } from '@arknights-ui/arknights-ui'
import '@arknights-ui/arknights-ui/styles'

app.use(ArknightsButton)
app.use(ArknightsInput)
```

组件库默认提供完整的 CSS 变量体系，导入 `@arknights-ui/arknights-ui/styles` 即可自动注入全局样式（`variables.css` + `reset.css` + `transitions.css`）。

## Design Token 体系

所有视觉参数均通过 CSS Custom Properties 统一管理，覆盖颜色、间距、圆角、阴影、字号、动画等维度，支持通过覆盖 CSS 变量实现主题定制。

## 参考项目

- `astro-arknights` — Astro 主题，提供 tailwind.config 中的颜色定义、字体引用、滚动条样式
- `hexo-theme-arknights` — Hexo 博客主题，提供 dark.styl 完整变量体系、table/paginator/blockquote 链接交互样式
```