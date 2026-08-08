# 审美情报局 · 知识卡片生产 Skill

"审美情报局"（公众号"审美创意局"）知识卡片系列的完整生产系统——从选题、事实核查、到版式规范、字号红线、图文摆放，把踩过的坑固化成可复用的规范和模板。

入口文档见 [`SKILL.md`](./SKILL.md)。

## 目录

```
aesthetic-bureau-card-skill/
├── SKILL.md                          # 入口：六步工作流 + 索引
├── reference/
│   ├── typography-rules.md           # 字号下限表、标题起法、封面标题最大化
│   ├── layout-patterns.md            # 封面/账本/三明治图文/左右分栏配方
│   ├── fact-check-discipline.md      # 事实核查纪律（附真实翻车/纠偏案例）
│   ├── topic-selection.md            # 选题判断标准、女性主角写法红线
│   ├── image-sourcing.md             # 照片来源与筛选（彩色优先、要选好看的）
│   └── prepublish-checklist.md       # 六条自查 + 草稿/定稿交付节奏
└── template/                         # 可直接复制起版的 HTML/CSS/渲染脚本
    ├── index.html
    ├── render.mjs
    └── assets/magazine-bg-webgl.js
```

## 用法

1. 复制 `template/` 到新项目目录，替换内容（人物/标题/图片），换一个新的强调色。
2. `node render.mjs` 渲染，`montage output/*.png -tile 3x3 -geometry 360x480+12+12 -background '#1a1a1a' contact.png` 生成预览。
3. 对照 `reference/prepublish-checklist.md` 自查后交付。

卡片规格：3:4 竖版社交卡片，1080×1440，2x 导出 2160×2880。Editorial 杂志风（纸墨配色 + 衬线字体）。
