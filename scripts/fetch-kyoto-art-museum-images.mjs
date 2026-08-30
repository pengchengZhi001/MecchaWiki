/**
 * Downloads Kyoto (official 4.1.0 still) + unique cropped spot thumbs.
 * Art Museum uses a distinct Steam Workshop museum-interior analog only if
 * the MD5 is new — official 美術館 still was not on Steam store at time of scrape.
 *
 * Rejects any MD5 that already exists under public/images/maps or spots.
 * Run: node scripts/fetch-kyoto-art-museum-images.mjs
 */
import crypto from "crypto";
import fs from "fs";
import path from "path";
import sharp from "sharp";

const MAP_DIR = "public/images/maps";
const SPOT_DIR = "public/images/spots";
const MAPPING_PATH = "src/data/spot-images.json";
const TIMEOUT_MS = 60000;

const KYOTO_SOURCES = [
  "https://news.denfaminicogamer.jp/wp-content/uploads/2026/08/HQz2XG9awAEP6MF.png",
  path.join(MAP_DIR, "_tmp", "denfami-410.png"),
];

/** Distinct crops from the 2048×1184 Kyoto still (LEMORION / Denfaminicogamer). */
const KYOTO_CROPS = {
  "kyoto-maple-balcony": { left: 20, top: 40, width: 720, height: 500 },
  "kyoto-torii-row": { left: 280, top: 480, width: 820, height: 520 },
  "kyoto-bamboo-cluster": { left: 1280, top: 180, width: 720, height: 640 },
  "kyoto-wagasa-lantern": { left: 160, top: 380, width: 680, height: 500 },
  "kyoto-lantern-wall": { left: 1380, top: 40, width: 620, height: 480 },
  "kyoto-dai-stairs": { left: 520, top: 280, width: 740, height: 520 },
  "kyoto-under-balcony": { left: 40, top: 620, width: 760, height: 480 },
  "kyoto-open-plaza": { left: 420, top: 680, width: 840, height: 440 },
};

/** Square 512×512 Steam preview — crop the alcove, not the "ART GALLERY" title overlay. */
const ART_MUSEUM_SOURCES = [
  "https://images.steamusercontent.com/ugc/9751442565880744508/E103EC79E4CF6839F3BFF5484E56169FD2283A01/",
];

const ART_MUSEUM_HERO_CROP = { left: 48, top: 88, width: 416, height: 336 };

/** 512×512 grid — distinct from DualShockers art-gallery-* thumbs. */
const ART_MUSEUM_CROPS = {
  "art-museum-canvas-blend": { left: 72, top: 96, width: 280, height: 260 },
  "art-museum-sculpture-plinth": { left: 200, top: 220, width: 260, height: 240 },
  "art-museum-gilded-frame": { left: 16, top: 140, width: 240, height: 260 },
  "art-museum-gallery-column": { left: 300, top: 40, width: 200, height: 280 },
  "art-museum-lesser-wing": { left: 40, top: 280, width: 280, height: 220 },
  "art-museum-dark-canvas": { left: 160, top: 80, width: 240, height: 240 },
  "art-museum-open-floor": { left: 80, top: 320, width: 320, height: 180 },
  "art-museum-spotlight-front": { left: 120, top: 48, width: 280, height: 240 },
};

function md5(buf) {
  return crypto.createHash("md5").update(buf).digest("hex");
}

async function download(url) {
  if (!url.startsWith("http") && fs.existsSync(url)) {
    return fs.readFileSync(url);
  }
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

async function writeMapHero(hashes, destRel, sources, label) {
  const dest = path.join(MAP_DIR, destRel);
  if (fs.existsSync(dest) && process.env.FORCE !== "1") {
    const existing = fs.readFileSync(dest);
    const h = md5(existing);
    const owner = hashes.get(h);
    if (owner === `maps/${destRel}` || owner?.endsWith(destRel)) {
      console.log(`⏭ maps/${destRel} already present (${Math.round(existing.length / 1024)} KB) — skip`);
      return "skipped";
    }
  }

  let lastErr;
  for (const url of sources) {
    try {
      console.log(`Downloading ${label}: ${url}`);
      const raw = await download(url);
      const jpg = await sharp(raw).jpeg({ quality: 88 }).toBuffer();
      assertUnique(hashes, jpg, `maps/${destRel}`);
      fs.writeFileSync(dest, jpg);
      console.log(`✓ maps/${destRel} (${Math.round(jpg.length / 1024)} KB)`);
      return "ok";
    } catch (e) {
      lastErr = e;
      console.warn(`  retry: ${e.message}`);
    }
  }
  throw lastErr ?? new Error(`No ${label} source worked`);
}

fs.mkdirSync(MAP_DIR, { recursive: true });
fs.mkdirSync(SPOT_DIR, { recursive: true });

const hashes = loadExistingHashes();
const mapping = JSON.parse(fs.readFileSync(MAPPING_PATH, "utf8"));
const kyotoDest = path.join(MAP_DIR, "kyoto.jpg");
const artDest = path.join(MAP_DIR, "art-museum.jpg");

let ok = 0;
let fail = 0;
let skipped = 0;

try {
  const result = await writeMapHero(hashes, "kyoto.jpg", KYOTO_SOURCES, "Kyoto");
  if (result === "ok") ok++;
  else skipped++;
} catch (e) {
  console.error(`✗ maps/kyoto: ${e.message}`);
  fail++;
}

for (const [slug, crop] of Object.entries(KYOTO_CROPS)) {
  try {
    const result = await writeUniqueCrop(hashes, mapping, kyotoDest, slug, crop);
    if (result === "ok") ok++;
    else skipped++;
  } catch (e) {
    console.error(`✗ ${slug}: ${e.message}`);
    fail++;
  }
}

try {
  const artRawDest = path.join(MAP_DIR, "_tmp", "art-museum-raw.jpg");
  fs.mkdirSync(path.dirname(artRawDest), { recursive: true });
  let raw;
  if (fs.existsSync(artDest) && process.env.FORCE !== "1") {
    const existing = fs.readFileSync(artDest);
    const h = md5(existing);
    const owner = hashes.get(h);
    if (owner === "maps/art-museum.jpg" || owner?.endsWith("art-museum.jpg")) {
      const meta = await sharp(existing).metadata();
      if ((meta.width ?? 0) >= 380 && (meta.height ?? 0) >= 280) {
        console.log(`⏭ maps/art-museum.jpg already unique — skip`);
        skipped++;
      } else {
        process.env.FORCE = "1";
      }
    }
  }
  if (process.env.FORCE === "1" || !fs.existsSync(artDest)) {
    let lastErr;
    for (const url of ART_MUSEUM_SOURCES) {
      try {
        console.log(`Downloading Art Museum analog: ${url}`);
        raw = await download(url);
        fs.writeFileSync(artRawDest, raw);
        const crop = ART_MUSEUM_HERO_CROP;
        const meta = await sharp(raw).metadata();
        const maxW = meta.width ?? 512;
        const maxH = meta.height ?? 512;
        const left = Math.min(crop.left, Math.max(0, maxW - 64));
        const top = Math.min(crop.top, Math.max(0, maxH - 64));
        const width = Math.min(crop.width, maxW - left);
        const height = Math.min(crop.height, maxH - top);
        const jpg = await sharp(raw)
          .extract({ left, top, width, height })
          .jpeg({ quality: 88 })
          .toBuffer();
        if (fs.existsSync(artDest)) {
          hashes.delete(md5(fs.readFileSync(artDest)));
          fs.unlinkSync(artDest);
        }
        assertUnique(hashes, jpg, "maps/art-museum.jpg");
        fs.writeFileSync(artDest, jpg);
        console.log(`✓ maps/art-museum.jpg (${Math.round(jpg.length / 1024)} KB crop ${width}x${height})`);
        ok++;
        lastErr = null;
        break;
      } catch (e) {
        lastErr = e;
        console.warn(`  retry: ${e.message}`);
      }
    }
    if (lastErr) throw lastErr;
  }
} catch (e) {
  console.error(`✗ maps/art-museum: ${e.message}`);
  fail++;
}

if (fs.existsSync(artDest)) {
  for (const [slug, crop] of Object.entries(ART_MUSEUM_CROPS)) {
    try {
      const result = await writeUniqueCrop(hashes, mapping, artDest, slug, crop);
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
