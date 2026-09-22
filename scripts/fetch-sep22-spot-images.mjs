/**
 * Unique crops for Sep 22 2026 Kyoto / Art Museum / Cherry Blossom pins.
 * Rejects any MD5 that already exists under public/images/maps or spots.
 *
 * Run: node scripts/fetch-sep22-spot-images.mjs
 */
import crypto from "crypto";
import fs from "fs";
import path from "path";
import sharp from "sharp";

const MAP_DIR = "public/images/maps";
const SPOT_DIR = "public/images/spots";
const MAPPING_PATH = "src/data/spot-images.json";
const TIMEOUT_MS = 60000;

const CHERRY_PREVIEW =
  "https://images.steamusercontent.com/ugc/12696834947027860090/9F03B2CBE47801957D39B6AB74E301844FFD9B15/";
const CHERRY_RAW = path.join(MAP_DIR, "_tmp", "cherry-blossom-raw.jpg");

/** Distinct crops so each spot file has unique bytes (no MD5 collisions). */
const CROPS = {
  "kyoto-stall-underside": {
    map: "kyoto.jpg",
    left: 1550,
    top: 720,
    width: 480,
    height: 360,
  },
  "kyoto-torii-post-shadow": {
    map: "kyoto.jpg",
    left: 200,
    top: 780,
    width: 480,
    height: 360,
  },
  "kyoto-garden-planter-back": {
    map: "kyoto.jpg",
    left: 1100,
    top: 120,
    width: 440,
    height: 320,
  },
  "kyoto-escalator-underside": {
    map: "kyoto.jpg",
    left: 480,
    top: 40,
    width: 360,
    height: 280,
  },
  "art-museum-bench-leg": {
    map: "art-museum.jpg",
    left: 40,
    top: 250,
    width: 140,
    height: 80,
  },
  "art-museum-plinth-shadow": {
    map: "art-museum.jpg",
    left: 280,
    top: 250,
    width: 120,
    height: 80,
  },
  "art-museum-frame-gap": {
    map: "art-museum.jpg",
    left: 0,
    top: 0,
    width: 140,
    height: 140,
  },
};

const CHERRY_CROPS = {
  "cherry-blossom-koi-pond": { left: 40, top: 220, width: 280, height: 200 },
  "cherry-blossom-bridge-rail": { left: 220, top: 80, width: 260, height: 200 },
  "cherry-blossom-tree-cluster": { left: 20, top: 20, width: 240, height: 180 },
  "cherry-blossom-open-path": { left: 180, top: 240, width: 300, height: 180 },
};

function md5(buf) {
  return crypto.createHash("md5").update(buf).digest("hex");
}

function loadExistingHashes() {
  const hashes = new Map();
  for (const dir of [MAP_DIR, SPOT_DIR]) {
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir)) {
      if (file.startsWith("_tmp") || file.startsWith("_preview-")) continue;
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

async function writeUniqueCrop(hashes, mapping, sourcePath, slug, crop) {
  const dest = path.join(SPOT_DIR, `${slug}.jpg`);
  if (!fs.existsSync(sourcePath)) {
    throw new Error(`Missing ${sourcePath}`);
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

  if (fs.existsSync(dest)) {
    const existing = fs.readFileSync(dest);
    const h = md5(existing);
    const owner = hashes.get(h);
    if (owner === `spots/${slug}.jpg` || owner?.endsWith(`/${slug}.jpg`)) {
      const other = [...hashes.entries()].find(
        ([hash, label]) => hash === h && label !== `spots/${slug}.jpg`
      );
      if (!other) {
        mapping[slug] = `/images/spots/${slug}.jpg`;
        console.log(`⏭ spots/${slug}.jpg already unique — skip`);
        return "skipped";
      }
    }
    hashes.delete(h);
  }

  assertUnique(hashes, buf, `spots/${slug}.jpg`);
  fs.writeFileSync(dest, buf);
  mapping[slug] = `/images/spots/${slug}.jpg`;
  console.log(`✓ spots/${slug}.jpg (${Math.round(buf.length / 1024)} KB crop ${width}x${height})`);
  return "ok";
}

fs.mkdirSync(SPOT_DIR, { recursive: true });
fs.mkdirSync(path.join(MAP_DIR, "_tmp"), { recursive: true });

const hashes = loadExistingHashes();
const mapping = JSON.parse(fs.readFileSync(MAPPING_PATH, "utf8"));

let ok = 0;
let fail = 0;
let skipped = 0;

for (const [slug, crop] of Object.entries(CROPS)) {
  try {
    const source = path.join(MAP_DIR, crop.map);
    const result = await writeUniqueCrop(hashes, mapping, source, slug, crop);
    if (result === "ok") ok++;
    else skipped++;
  } catch (e) {
    console.error(`✗ ${slug}: ${e.message}`);
    fail++;
  }
}

try {
  console.log(`Downloading Cherry Blossom Garden preview`);
  const raw = await download(CHERRY_PREVIEW);
  fs.writeFileSync(CHERRY_RAW, raw);

  const heroDest = path.join(MAP_DIR, "cherry-blossom-garden.jpg");
  const heroJpg = await sharp(raw).jpeg({ quality: 88 }).toBuffer();
  if (!fs.existsSync(heroDest) || process.env.FORCE === "1") {
    assertUnique(hashes, heroJpg, "maps/cherry-blossom-garden.jpg");
    fs.writeFileSync(heroDest, heroJpg);
    console.log(`✓ maps/cherry-blossom-garden.jpg (${Math.round(heroJpg.length / 1024)} KB)`);
    ok++;
  } else {
    console.log(`⏭ maps/cherry-blossom-garden.jpg already present — skip`);
    skipped++;
  }

  for (const [slug, crop] of Object.entries(CHERRY_CROPS)) {
    try {
      const result = await writeUniqueCrop(hashes, mapping, CHERRY_RAW, slug, crop);
      if (result === "ok") ok++;
      else skipped++;
    } catch (e) {
      console.error(`✗ ${slug}: ${e.message}`);
      fail++;
    }
  }
} catch (e) {
  console.error(`✗ cherry-blossom-garden: ${e.message}`);
  fail++;
}

fs.writeFileSync(MAPPING_PATH, JSON.stringify(mapping, null, 2) + "\n");
console.log(`\nDone: ${ok} ok, ${skipped} skipped, ${fail} failed`);
if (fail > 0) process.exit(1);
