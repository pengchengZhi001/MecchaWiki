# Meccha Spots

**Meccha Chameleon Hidden Spot Database** — A community-driven database of hiding spots and workshop maps.

## Data

### Hidden spots (90+)
- **Official maps:** TheGamer, IGN, meccha-chameleon.net, YouTube community
- **Workshop maps:** TheGamer, Polygon, GAMES.GG, GameRant — Minecraft, Art Gallery, Swimming Pool, and more
- Each entry includes traceable `source` + `sourceUrl`
- Screenshots: Steam official CDN (`shared.akamai.steamstatic.com`)

### Workshop maps (31)
- Live Steam Workshop data (subscriptions, preview images)
- Preview images from `images.steamusercontent.com`
- Run `npm run fetch:workshop` to refresh from the Steam API
- Edit `scripts/workshop-catalog.mjs` and run `npm run generate:workshop` for local data

## Development

```bash
npm install
npm run dev
```

## Refresh workshop data

```bash
# Sync preview images and subscription counts from Steam API (recommended on Windows)
npm run sync:workshop

# Or generate offline from catalog only (no network)
npm run generate:workshop
```

## Stack

Next.js 16 · TypeScript · Tailwind CSS v4 · next/image remote images
