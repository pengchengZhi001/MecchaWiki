# Meccha Spots

**Meccha Chameleon Hidden Spot Database** — 社区驱动的隐藏点与工坊地图数据库。

## 数据说明

### 隐藏点（50 个）
- 内容来源：**TheGamer**、**IGN**、**meccha-chameleon.net**、**YouTube 社区**
- 每条记录含 `source` + `sourceUrl` 可追溯
- 截图：Steam 官方游戏截图 CDN（`shared.akamai.steamstatic.com`）

### 工坊地图（29 张）
- 真实 Steam Workshop 数据（订阅数、预览图）
- 预览图来自 `images.steamusercontent.com`
- 运行 `npm run fetch:workshop` 从 Steam API 刷新数据
- 编辑 `scripts/workshop-catalog.mjs` 添加新地图，运行 `npm run generate:workshop` 生成本地数据

## 开发

```bash
npm install
npm run dev
```

## 刷新 Workshop 数据

```bash
# 从 Steam API 同步预览图与订阅数（推荐，Windows）
npm run sync:workshop

# 或仅离线从 catalog 生成（无网络时）
npm run generate:workshop
```

## 技术栈

Next.js 16 · TypeScript · Tailwind CSS v4 · next/image 远程图片
