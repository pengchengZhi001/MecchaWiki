/**
 * Downloads Shopping Mall map hero + unique cropped spot thumbs.
 * Rejects any MD5 that already exists under public/images/maps or spots.
 *
 * Run: node scripts/fetch-shopping-mall-images.mjs
 */
import crypto from "crypto";
import fs from "fs";
import path from "path";
import sharp from "sharp";

const MAP_DIR = "public/images/maps";
const SPOT_DIR = "public/images/spots";
const MAPPING_PATH = "src/data/spot-images.json";
const TIMEOUT_MS = 60000;

const MAP_SOURCES = [
  "https://consolepcgaming.com/wp-content/uploads/2026/08/meccha-chameleon-shopping-mall-map.webp",
];

/** Distinct crops so each spot file has unique bytes (no MD5 collisions). */
const SPOT_CROPS = {
  "shopping-mall-storefront-window": { left: 40, top: 60, width: 720, height: 500 },
  "shopping-mall-directory-signage": { left: 860, top: 40, width: 680, height: 440 },
  "shopping-mall-mannequin-cluster": { left: 180, top: 320, width: 680, height: 480 },
  "shopping-mall-food-court-clutter": { left: 1120, top: 180, width: 720, height: 480 },
  "shopping-mall-clothing-rack": { left: 1280, top: 480, width: 700, height: 500 },
  "shopping-mall-planter-bench": { left: 40, top: 620, width: 740, height: 500 },
  "shopping-mall-atrium-floor": { left: 420, top: 700, width: 820, height: 430 },
  "shopping-mall-escalator-rail": { left: 680, top: 160, width: 720, height: 520 },
};

const MEGAMALL_SRC =
  "https://images.steamusercontent.com/ugc/14995452058010477807/C597371FA1718C036A50546D902670FC333095D7/";
const MEGAMALL_CROPS = {
  "megamall-fast-food-counter": { left: 20, top: 230, width: 260, height: 250 },
  "megamall-instrument-shop": { left: 210, top: 30, width: 270, height: 250 },
};

const DEEP_SEA_EXTRA = {
  "deep-sea-open-blue-water": { left: 900, top: 40, width: 680, height: 460 },
  "deep-sea-map-boundary": { left: 40, top: 40, width: 560, height: 400 },
};

function md5(buf) {
  return crypto.createHash("md5").update(buf).digest("hex");
}

async function download(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; MecchaWiki/1.0)" },
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 5000) throw new Error(`Too small (${buf.length} bytes)`);
  return buf;
}

function loadExistingHashes() {
  const hashes = new Map();
  for (const dir of [MAP_DIR, SPOT_DIR]) {
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir)) {
      const full = path.join(dir, file);
      if (!fs.statSync(full).isFile()) continue;
      hashes.set(md5(fs.readFileSync(full)), `${dir}/${file}`);
    }
  }
  return hashes;
}

function assertUnique(hashes, buf, label) {
  const hash = md5(buf);
  const existing = hashes.get(hash);
  if (existing) {
    throw new Error(`Duplicate MD5 with ${existing} — skip ${label}`);
  }
  hashes.set(hash, label);
  return hash;
}

async function writeUniqueCrop(hashes, mapping, sourcePath, slug, crop) {
  const dest = path.join(SPOT_DIR, `${slug}.jpg`);
  if (!fs.existsSync(sourcePath)) {
    throw new Error(`Missing ${sourcePath}`);
  }
  if (fs.existsSync(dest) && process.env.FORCE !== "1") {
    const existing = fs.readFileSync(dest);
    const h = md5(existing);
    const owner = hashes.get(h);
    const meta = await sharp(existing).metadata();
    const tallEnough = (meta.height ?? 0) >= 280 && (meta.width ?? 0) >= 380;
    if (tallEnough && owner && (owner === `spots/${slug}.jpg` || owner.endsWith(`/${slug}.jpg`))) {
      mapping[slug] = `/images/spots/${slug}.jpg`;
      console.log(`⏭ spots/${slug}.jpg already unique — skip`);
      return "skipped";
    }
    fs.unlinkSync(dest);
    hashes.delete(h);
  }

  const meta = await sharp(sourcePath).metadata();
  const maxW = meta.width ?? 1280;
  const maxH = meta.height ?? 720;
  const left = Math.min(crop.left, Math.max(0, maxW - 64));
  const top = Math.min(crop.top, Math.max(0, maxH - 64));
  const width = Math.min(crop.width, maxW - left);
  const height = Math.min(crop.height, maxH - top);

  const buf = await sharp(sourcePath)
    .extract({ left, top, width, height })
    .jpeg({ quality: 86 })
    .toBuffer();
  assertUnique(hashes, buf, `spots/${slug}.jpg`);
  fs.writeFileSync(dest, buf);
  mapping[slug] = `/images/spots/${slug}.jpg`;
  console.log(`✓ spots/${slug}.jpg (${Math.round(buf.length / 1024)} KB crop ${width}x${height})`);
  return "ok";
}

fs.mkdirSync(MAP_DIR, { recursive: true });
fs.mkdirSync(SPOT_DIR, { recursive: true });

const hashes = loadExistingHashes();
const mapping = JSON.parse(fs.readFileSync(MAPPING_PATH, "utf8"));
const mapDest = path.join(MAP_DIR, "shopping-mall.jpg");
const megamallDest = path.join(MAP_DIR, "_preview-megamall-supermarket.png");
const deepSeaDest = path.join(MAP_DIR, "deep-sea.jpg");

let ok = 0;
let fail = 0;
let skipped = 0;

async function downloadMapHero() {
  if (fs.existsSync(mapDest) && process.env.FORCE !== "1") {
    const existing = fs.readFileSync(mapDest);
    const h = md5(existing);
    const owner = hashes.get(h);
    if (owner === `maps/shopping-mall.jpg` || owner?.endsWith("shopping-mall.jpg")) {
      console.log(`⏭ maps/shopping-mall.jpg already present (${Math.round(existing.length / 1024)} KB) — skip`);
      skipped++;
      return;
    }
  }

  let lastErr;
  for (const url of MAP_SOURCES) {
    try {
      console.log(`Downloading map hero: ${url}`);
      const raw = await download(url);
      const jpg = await sharp(raw).jpeg({ quality: 88 }).toBuffer();
      assertUnique(hashes, jpg, "maps/shopping-mall.jpg");
      fs.writeFileSync(mapDest, jpg);
      console.log(`✓ maps/shopping-mall.jpg (${Math.round(jpg.length / 1024)} KB)`);
      ok++;
      return;
    } catch (e) {
      lastErr = e;
      console.warn(`  retry: ${e.message}`);
    }
  }
  throw lastErr ?? new Error("No Shopping Mall map source worked");
}

try {
  await downloadMapHero();
} catch (e) {
  console.error(`✗ maps/shopping-mall: ${e.message}`);
  fail++;
}

for (const [slug, crop] of Object.entries(SPOT_CROPS)) {
  try {
    const result = await writeUniqueCrop(hashes, mapping, mapDest, slug, crop);
    if (result === "ok") ok++;
    else skipped++;
  } catch (e) {
    console.error(`✗ ${slug}: ${e.message}`);
    fail++;
  }
}

try {
  if (!fs.existsSync(megamallDest)) {
    const raw = await download(MEGAMALL_SRC);
    fs.writeFileSync(megamallDest, raw);
    console.log(`✓ maps/_preview-megamall-supermarket.png (${Math.round(raw.length / 1024)} KB)`);
    ok++;
  } else {
    console.log("⏭ MegaMall preview already on disk");
    skipped++;
  }
  for (const [slug, crop] of Object.entries(MEGAMALL_CROPS)) {
    const result = await writeUniqueCrop(hashes, mapping, megamallDest, slug, crop);
    if (result === "ok") ok++;
    else skipped++;
  }
} catch (e) {
  console.error(`✗ megamall extras: ${e.message}`);
  fail++;
}

if (fs.existsSync(deepSeaDest)) {
  for (const [slug, crop] of Object.entries(DEEP_SEA_EXTRA)) {
    try {
      const result = await writeUniqueCrop(hashes, mapping, deepSeaDest, slug, crop);
      if (result === "ok") ok++;
      else skipped++;
    } catch (e) {
      console.error(`✗ ${slug}: ${e.message}`);
      fail++;
    }
  }
}

fs.writeFileSync(MAPPING_PATH, JSON.stringify(mapping, null, 2) + "\n");
console.log(`\nDone: ${ok} ok, ${skipped} skipped, ${fail} failed`);
if (fail > 0) process.exit(1);
