/**
 * Downloads Greece map hero + unique cropped spot thumbs.
 * Rejects any MD5 that already exists under public/images/maps or spots.
 * Skips writing if destination already exists with unique content.
 *
 * Run: node scripts/fetch-greece-images.mjs
 */
import crypto from "crypto";
import fs from "fs";
import path from "path";
import sharp from "sharp";

const MAP_DIR = "public/images/maps";
const SPOT_DIR = "public/images/spots";
const MAPPING_PATH = "src/data/spot-images.json";
const TIMEOUT_MS = 60000;

/** Prefer the dedicated Greece asset — do NOT reuse egypt meccha-chameleon-1.webp. */
const MAP_SOURCES = [
  "https://consolepcgaming.com/wp-content/uploads/2026/07/meccha-chameleon-greece-map.webp",
  "https://consolepcgaming.com/wp-content/uploads/2026/07/meccha-chameleon-greece-map-780x470.webp",
];

/** Distinct crops so each spot file has unique bytes (no MD5 collisions). */
const SPOT_CROPS = {
  "greece-blue-dome-trim": { left: 80, top: 40, width: 520, height: 380 },
  "greece-white-plaster-ledge": { left: 420, top: 60, width: 500, height: 400 },
  "greece-sunset-alley-nook": { left: 160, top: 180, width: 540, height: 360 },
  "greece-emissive-doorway": { left: 300, top: 120, width: 480, height: 340 },
  "greece-central-pit-rim": { left: 520, top: 200, width: 440, height: 320 },
  "greece-stair-terrace-shadow": { left: 40, top: 220, width: 460, height: 340 },
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

fs.mkdirSync(MAP_DIR, { recursive: true });
fs.mkdirSync(SPOT_DIR, { recursive: true });

const hashes = loadExistingHashes();
const mapping = JSON.parse(fs.readFileSync(MAPPING_PATH, "utf8"));
const mapDest = path.join(MAP_DIR, "greece.jpg");

let ok = 0;
let fail = 0;
let skipped = 0;

async function downloadMapHero() {
  if (fs.existsSync(mapDest)) {
    const existing = fs.readFileSync(mapDest);
    const h = md5(existing);
    if (hashes.get(h) === `maps/greece.jpg` || !hashes.has(h) || hashes.get(h)?.endsWith("greece.jpg")) {
      console.log(`⏭ maps/greece.jpg already present (${Math.round(existing.length / 1024)} KB) — skip download`);
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
      assertUnique(hashes, jpg, "maps/greece.jpg");
      fs.writeFileSync(mapDest, jpg);
      console.log(`✓ maps/greece.jpg (${Math.round(jpg.length / 1024)} KB)`);
      ok++;
      return;
    } catch (e) {
      lastErr = e;
      console.warn(`  retry: ${e.message}`);
    }
  }
  throw lastErr ?? new Error("No Greece map source worked");
}

try {
  await downloadMapHero();
} catch (e) {
  console.error(`✗ maps/greece: ${e.message}`);
  fail++;
}

for (const [slug, crop] of Object.entries(SPOT_CROPS)) {
  const dest = path.join(SPOT_DIR, `${slug}.jpg`);
  try {
    if (!fs.existsSync(mapDest)) throw new Error("Missing greece.jpg — map hero download failed");

    if (fs.existsSync(dest)) {
      const existing = fs.readFileSync(dest);
      const h = md5(existing);
      const owner = hashes.get(h);
      if (owner && owner !== `spots/${slug}.jpg` && !owner.endsWith(`/${slug}.jpg`)) {
        throw new Error(`Existing file duplicates ${owner} — regenerate with unique crop`);
      }
      mapping[slug] = `/images/spots/${slug}.jpg`;
      console.log(`⏭ spots/${slug}.jpg already unique — skip`);
      skipped++;
      continue;
    }

    const meta = await sharp(mapDest).metadata();
    const maxW = meta.width ?? 1280;
    const maxH = meta.height ?? 720;
    const left = Math.min(crop.left, Math.max(0, maxW - 64));
    const top = Math.min(crop.top, Math.max(0, maxH - 64));
    const width = Math.min(crop.width, maxW - left);
    const height = Math.min(crop.height, maxH - top);

    const buf = await sharp(mapDest)
      .extract({ left, top, width, height })
      .jpeg({ quality: 86 })
      .toBuffer();
    assertUnique(hashes, buf, `spots/${slug}.jpg`);
    fs.writeFileSync(dest, buf);
    mapping[slug] = `/images/spots/${slug}.jpg`;
    console.log(`✓ spots/${slug}.jpg (${Math.round(buf.length / 1024)} KB crop ${width}x${height})`);
    ok++;
  } catch (e) {
    console.error(`✗ ${slug}: ${e.message}`);
    fail++;
  }
}

fs.writeFileSync(MAPPING_PATH, JSON.stringify(mapping, null, 2) + "\n");
console.log(`\nDone: ${ok} ok, ${skipped} skipped, ${fail} failed`);
if (fail > 0) process.exit(1);
