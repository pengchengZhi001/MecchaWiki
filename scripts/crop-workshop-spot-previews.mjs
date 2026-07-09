/**
 * Crop unique thumbnails from shared Steam Workshop preview images.
 * Run after fetch:workshop-spot-images when duplicate warnings appear.
 *
 * Usage: node scripts/crop-workshop-spot-previews.mjs
 */
import fs from "fs";
import path from "path";
import sharp from "sharp";

const OUT_DIR = "public/images/spots";
const MAPPING_PATH = "src/data/spot-images.json";

/** slug → { sourceFile, left, top, width, height } — pixels on full Steam preview */
const CROPS = {
  "minecraft-village-crafting-table": {
    source: "_preview-minecraft-village.png",
    left: 320,
    top: 280,
    width: 980,
    height: 620,
  },
  "minecraft-village-tree-canopy": {
    source: "_preview-minecraft-village.png",
    left: 980,
    top: 0,
    width: 680,
    height: 520,
  },
  "megamall-grocery-shelf": {
    source: "_preview-megamall.png",
    left: 248,
    top: 72,
    width: 252,
    height: 428,
  },
  "megamall-arcade-cluster": {
    source: "_preview-megamall.png",
    left: 0,
    top: 72,
    width: 248,
    height: 428,
  },
};

const PREVIEW_SOURCES = {
  "_preview-minecraft-village.png":
    "https://images.steamusercontent.com/ugc/16067568767470038267/68AF5692B5560C2F8329B3C6D6401D285E612C1A/",
  "_preview-megamall.png":
    "https://images.steamusercontent.com/ugc/14995452058010477807/C597371FA1718C036A50546D902670FC333095D7/",
};

fs.mkdirSync(OUT_DIR, { recursive: true });
const mapping = JSON.parse(fs.readFileSync(MAPPING_PATH, "utf8"));

for (const [filename, url] of Object.entries(PREVIEW_SOURCES)) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; MecchaWiki/1.0)" },
  });
  if (!res.ok) throw new Error(`Failed to fetch ${filename}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(path.join(OUT_DIR, filename), buf);
  console.log(`↓ ${filename} (${Math.round(buf.length / 1024)} KB)`);
}

for (const [slug, crop] of Object.entries(CROPS)) {
  const srcPath = path.join(OUT_DIR, crop.source);
  if (!fs.existsSync(srcPath)) {
    console.error(`Missing source: ${srcPath}`);
    process.exit(1);
  }
  const outFile = `${slug}.jpg`;
  const outPath = path.join(OUT_DIR, outFile);
  await sharp(srcPath)
    .extract({
      left: crop.left,
      top: crop.top,
      width: crop.width,
      height: crop.height,
    })
    .jpeg({ quality: 88 })
    .toFile(outPath);
  mapping[slug] = `/images/spots/${outFile}`;
  console.log(`✓ ${slug} ← crop ${crop.width}×${crop.height} from ${crop.source}`);
}

fs.writeFileSync(MAPPING_PATH, JSON.stringify(mapping, null, 2) + "\n");
console.log("Updated spot-images.json");
