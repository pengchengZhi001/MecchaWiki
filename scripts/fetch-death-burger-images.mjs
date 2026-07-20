/**
 * Downloads Death Burger map hero + unique cropped spot thumbs.
 * Rejects any MD5 that already exists under public/images/maps or spots.
 *
 * Run: node scripts/fetch-death-burger-images.mjs
 */
import crypto from "crypto";
import fs from "fs";
import path from "path";
import sharp from "sharp";

const MAP_DIR = "public/images/maps";
const SPOT_DIR = "public/images/spots";
const MAPPING_PATH = "src/data/spot-images.json";
const TIMEOUT_MS = 60000;

/** First URL that returns a valid image wins. */
const MAP_SOURCE_CANDIDATES = [
  "https://www.4gamer.net/games/007/G100712/20260717040/",
  "https://consolepcgaming.com/meccha-chameleon-adds-a-new-map-called-death-burger-in-update-2-8-0/",
];

const MAP_IMG_REGEX =
  /https?:\/\/[^"'\s>]+\.(?:webp|jpg|jpeg|png)(?:\?[^"'\s>]*)?/gi;

/** Distinct crops so each spot file has unique bytes (no MD5 collisions). */
const SPOT_CROPS = {
  "death-burger-clown-mascot-row": { left: 60, top: 40, width: 520, height: 380 },
  "death-burger-chicken-carousel": { left: 420, top: 80, width: 500, height: 400 },
  "death-burger-eyeball-burger-sign": { left: 180, top: 160, width: 560, height: 360 },
  "death-burger-menu-boundary": { left: 300, top: 220, width: 480, height: 320 },
  "death-burger-amusement-clutter": { left: 640, top: 120, width: 420, height: 360 },
  "egypt-tomb-entrance-lintel": {
    map: "egypt",
    left: 720,
    top: 100,
    width: 440,
    height: 340,
  },
  "penguin-ballroom-random-plush": {
    map: "penguin-hotel",
    left: 200,
    top: 120,
    width: 500,
    height: 360,
  },
};

function md5(buf) {
  return crypto.createHash("md5").update(buf).digest("hex");
}

async function fetchText(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; MecchaWiki/1.0)" },
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
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

async function resolveMapImageUrl() {
  for (const pageUrl of MAP_SOURCE_CANDIDATES) {
    try {
      const html = await fetchText(pageUrl);
      const matches = [...new Set(html.match(MAP_IMG_REGEX) ?? [])];
      const filtered = matches.filter(
        (u) =>
          !u.includes("logo") &&
          !u.includes("icon") &&
          !u.includes("avatar") &&
          !u.includes("favicon") &&
          (u.includes("4gamer") ||
            u.includes("consolepcgaming") ||
            u.includes("meccha") ||
            u.includes("death") ||
            u.includes("burger") ||
            u.includes("2026/07"))
      );
      if (filtered.length > 0) {
        console.log(`Found ${filtered.length} candidate image(s) on ${pageUrl}`);
        return filtered[0];
      }
    } catch (e) {
      console.warn(`Page probe failed (${pageUrl}): ${e.message}`);
    }
  }
  throw new Error("No map hero image URL found — add a direct URL to MAP_SOURCE_CANDIDATES");
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

function resolveCropSource(crop, deathBurgerMapPath) {
  if (crop.map) {
    const mapFile =
      crop.map === "penguin-hotel"
        ? path.join(MAP_DIR, "steam-7.jpg")
        : path.join(MAP_DIR, `${crop.map}.jpg`);
    if (!fs.existsSync(mapFile)) throw new Error(`Missing map source ${mapFile}`);
    return mapFile;
  }
  if (!fs.existsSync(deathBurgerMapPath)) {
    throw new Error("Missing death-burger.jpg — map hero download failed");
  }
  return deathBurgerMapPath;
}

fs.mkdirSync(MAP_DIR, { recursive: true });
fs.mkdirSync(SPOT_DIR, { recursive: true });

const hashes = loadExistingHashes();
const mapping = JSON.parse(fs.readFileSync(MAPPING_PATH, "utf8"));

let ok = 0;
let fail = 0;
const mapDest = path.join(MAP_DIR, "death-burger.jpg");

try {
  const mapUrl = await resolveMapImageUrl();
  console.log(`Downloading map hero: ${mapUrl}`);
  const raw = await download(mapUrl);
  const jpg = await sharp(raw).jpeg({ quality: 88 }).toBuffer();
  assertUnique(hashes, jpg, "maps/death-burger.jpg");
  fs.writeFileSync(mapDest, jpg);
  console.log(`✓ maps/death-burger.jpg (${Math.round(jpg.length / 1024)} KB)`);
  ok++;
} catch (e) {
  console.error(`✗ maps/death-burger: ${e.message}`);
  fail++;
}

for (const [slug, crop] of Object.entries(SPOT_CROPS)) {
  try {
    const src = resolveCropSource(crop, mapDest);
    const meta = await sharp(src).metadata();
    const maxW = meta.width ?? 1280;
    const maxH = meta.height ?? 720;
    const left = Math.min(crop.left, Math.max(0, maxW - 64));
    const top = Math.min(crop.top, Math.max(0, maxH - 64));
    const width = Math.min(crop.width, maxW - left);
    const height = Math.min(crop.height, maxH - top);

    const buf = await sharp(src)
      .extract({ left, top, width, height })
      .jpeg({ quality: 86 })
      .toBuffer();
    assertUnique(hashes, buf, `spots/${slug}.jpg`);
    const dest = path.join(SPOT_DIR, `${slug}.jpg`);
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
console.log(`\nDone: ${ok} ok, ${fail} failed`);
if (fail > 0) process.exit(1);
