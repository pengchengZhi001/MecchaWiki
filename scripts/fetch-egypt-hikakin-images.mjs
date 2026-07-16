/**
 * Downloads Egypt + HIKAKIN Museum map heroes and unique cropped spot thumbs.
 * Rejects any MD5 that already exists under public/images/maps or spots.
 *
 * Run: node scripts/fetch-egypt-hikakin-images.mjs
 */
import crypto from "crypto";
import fs from "fs";
import path from "path";
import sharp from "sharp";

const MAP_DIR = "public/images/maps";
const SPOT_DIR = "public/images/spots";
const MAPPING_PATH = "src/data/spot-images.json";
const TIMEOUT_MS = 60000;

const MAP_SOURCES = {
  egypt: "https://consolepcgaming.com/wp-content/uploads/2026/07/meccha-chameleon-1.webp",
  "hikakin-museum":
    "https://automaton-media.com/wp-content/uploads/2026/07/20260711-454477-header.jpg",
};

/** Distinct crops so each spot file has unique bytes (no MD5 collisions). */
const SPOT_CROPS = {
  "egypt-pillar-shadow": {
    map: "egypt",
    left: 40,
    top: 80,
    width: 520,
    height: 380,
  },
  "egypt-sarcophagus-alcove": {
    map: "egypt",
    left: 480,
    top: 60,
    width: 500,
    height: 400,
  },
  "egypt-hieroglyph-wall": {
    map: "egypt",
    left: 120,
    top: 200,
    width: 560,
    height: 360,
  },
  "egypt-sand-prop-cluster": {
    map: "egypt",
    left: 300,
    top: 280,
    width: 480,
    height: 320,
  },
  "egypt-statue-plinth": {
    map: "egypt",
    left: 600,
    top: 140,
    width: 420,
    height: 360,
  },
  "hikakin-photo-wall": {
    map: "hikakin-museum",
    left: 80,
    top: 60,
    width: 640,
    height: 420,
  },
  "hikakin-misokin-display": {
    map: "hikakin-museum",
    left: 520,
    top: 100,
    width: 560,
    height: 400,
  },
  "hikakin-exhibit-case": {
    map: "hikakin-museum",
    left: 160,
    top: 220,
    width: 520,
    height: 380,
  },
  "hikakin-seikin-gallery": {
    map: "hikakin-museum",
    left: 700,
    top: 80,
    width: 500,
    height: 400,
  },
  "hikakin-onicha-corner": {
    map: "hikakin-museum",
    left: 40,
    top: 280,
    width: 480,
    height: 340,
  },
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
const mapPaths = {};

let ok = 0;
let fail = 0;

for (const [slug, url] of Object.entries(MAP_SOURCES)) {
  const dest = path.join(MAP_DIR, `${slug}.jpg`);
  try {
    const raw = await download(url);
    const jpg = await sharp(raw).jpeg({ quality: 88 }).toBuffer();
    assertUnique(hashes, jpg, `maps/${slug}.jpg`);
    fs.writeFileSync(dest, jpg);
    mapPaths[slug] = dest;
    console.log(`✓ maps/${slug}.jpg (${Math.round(jpg.length / 1024)} KB)`);
    ok++;
  } catch (e) {
    console.error(`✗ maps/${slug}: ${e.message}`);
    fail++;
  }
}

for (const [slug, crop] of Object.entries(SPOT_CROPS)) {
  const src = mapPaths[crop.map] ?? path.join(MAP_DIR, `${crop.map}.jpg`);
  try {
    if (!fs.existsSync(src)) throw new Error(`Missing map source ${src}`);
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
