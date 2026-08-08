---
name: aesthetic-bureau-card-skill
description: 审美情报局知识卡片生产系统——从选题到成稿的完整流程、版式规范、字号红线、图文规范、事实核查纪律。做任何"用知识卡片讲一个人/一件事"的图文贴时使用。
---

# 审美情报局 · 知识卡片生产 Skill

这是"审美情报局"（公众号"审美创意局"）知识卡片系列的完整生产系统，把从选题到成稿的全部踩坑经验固化成可复用的规范。做任何一期新的知识卡片（人物/事件/机构），从这里开始。

## 用途

把一个人的生平、成就、金句拆成一组 7-9 张 Editorial 杂志风社交卡片（3:4 竖版，1080×1440，2x 导出 2160×2880），配文发小红书/公众号图文帖。

## 核心工作流（六步）

1. **选题**：认知度×话题度矩阵 + 反常识三关过滤器，判断"这个人/这件事"值不值得做，蹭热点优先。见 `reference/topic-selection.md`（并参照 `/workspace/group/审美情报局_知识卡片系统/选题方法论.md`，本文件是选题方法论的原始版本，二者配合使用）。
2. **调研+事实核查**：联网核实生平/成就/引语，重大声称（去世、获奖、具体数字）必须多源交叉验证。见 `reference/fact-check-discipline.md`。
3. **起标题**：反常识钩子，2 行以内，字数控制在能撑满大字号的范围。见 `reference/typography-rules.md` 的"标题"一节。
4. **搭卡片**：复制 `template/` 里的 HTML/CSS 模板起版，8-9 张，版式配方+图文摆放规则见 `reference/layout-patterns.md`。
5. **渲染+自检**：`node render.mjs` → `montage` 生成 `contact.png` 预览 → 对照 `reference/typography-rules.md` 的字号下限和 `reference/prepublish-checklist.md` 逐条自查。
6. **交付**：草稿阶段只发 `contact.png` 预览小图，收到"定稿"信号后才打包 zip 发送。见 `reference/prepublish-checklist.md`。

## 参考文档索引

- `reference/topic-selection.md` — 选题判断标准、女性主角写法的红线
- `reference/fact-check-discipline.md` — 事实核查纪律，附真实翻车/纠偏案例
- `reference/typography-rules.md` — 字号下限表、标题起法、封面标题最大化规则
- `reference/layout-patterns.md` — 卡片版式配方（封面/账本/引言/图文三明治/左右分栏）
- `reference/image-sourcing.md` — 人物照片来源与筛选规则（彩色优先、要选好看的）
- `reference/prepublish-checklist.md` — 发布前六条自查 + 草稿/定稿交付节奏
- `template/` — 可直接复制起版的 HTML/CSS/渲染脚本模板

## 关联但独立的系统

- 长文（公众号深度文章）走的是另一套逻辑——常青、讲设计美学知识，不追热点，参照 `/workspace/group/审美情报局_知识卡片系统/选题方法论.md`。本 Skill 只管"知识卡片图文帖"这一种形态。
- 抓热点素材可以用 Agent Reach（全网语义搜索 Exa / B站搜索 / RSS）配合本 Skill 的选题矩阵一起筛。
