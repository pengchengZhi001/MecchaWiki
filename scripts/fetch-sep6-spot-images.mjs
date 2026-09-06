/**
 * Unique crops for Sep 2026 GameWith / 4gamer pins.
 * Rejects any MD5 that already exists under public/images/maps or spots.
 *
 * Run: node scripts/fetch-sep6-spot-images.mjs
 */
import crypto from "crypto";
import fs from "fs";
import path from "path";
import sharp from "sharp";

const MAP_DIR = "public/images/maps";
const SPOT_DIR = "public/images/spots";
const MAPPING_PATH = "src/data/spot-images.json";

/** Distinct crops so each spot file has unique bytes (no MD5 collisions). */
const CROPS = {
  "kyoto-station-garden": {
    map: "kyoto.jpg",
    left: 900,
    top: 340,
    width: 560,
    height: 420,
  },
  "kyoto-festival-stall": {
    map: "kyoto.jpg",
    left: 1080,
    top: 680,
    width: 540,
    height: 400,
  },
  "kyoto-upper-escalator": {
    map: "kyoto.jpg",
    left: 740,
    top: 10,
    width: 500,
    height: 360,
  },
  "kyoto-shamisen-billboard": {
    map: "kyoto.jpg",
    left: 0,
    top: 180,
    width: 400,
    height: 460,
  },
  "art-museum-world-painting": {
    map: "art-museum.jpg",
    left: 170,
    top: 50,
    width: 210,
    height: 210,
  },
  "art-museum-meccha-exhibit": {
    map: "art-museum.jpg",
    left: 8,
    top: 30,
    width: 170,
    height: 220,
  },
  "art-museum-miniature-diorama": {
    map: "art-museum.jpg",
    left: 210,
    top: 170,
    width: 190,
    height: 150,
  },
  "egypt-bastet-statue": {
    map: "egypt.jpg",
    left: 980,
    top: 70,
    width: 500,
    height: 420,
  },
  "egypt-uneven-wall-nook": {
    map: "egypt.jpg",
    left: 1180,
    top: 280,
    width: 520,
    height: 400,
  },
  "deep-sea-treasure-chest": {
    map: "deep-sea.jpg",
    left: 1420,
    top: 720,
    width: 540,
    height: 380,
  },
  "shopping-mall-floor-merchandise": {
    map: "shopping-mall.jpg",
    left: 160,
    top: 790,
    width: 620,
    height: 330,
  },
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
    const tallEnough = (meta.height ?? 0) >= 140 && (meta.width ?? 0) >= 160;
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

fs.mkdirSync(SPOT_DIR, { recursive: true });

const hashes = loadExistingHashes();
const mapping = JSON.parse(fs.readFileSync(MAPPING_PATH, "utf8"));

let ok = 0;
let fail = 0;
let skipped = 0;

for (const [slug, crop] of Object.entries(CROPS)) {
  try {
    const sourcePath = path.join(MAP_DIR, crop.map);
    const result = await writeUniqueCrop(hashes, mapping, sourcePath, slug, crop);
    if (result === "ok") ok++;
    else skipped++;
  } catch (e) {
    console.error(`✗ ${slug}: ${e.message}`);
    fail++;
  }
}

fs.writeFileSync(MAPPING_PATH, JSON.stringify(mapping, null, 2) + "\n");
console.log(`\nDone: ${ok} ok, ${skipped} skipped, ${fail} failed`);
if (fail > 0) process.exit(1);
