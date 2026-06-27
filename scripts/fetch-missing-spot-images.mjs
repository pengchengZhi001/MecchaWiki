/**
 * Downloads missing per-spot images (Indoor Country, Sugarland, Cold Storage fixes).
 * Run: node scripts/fetch-missing-spot-images.mjs
 */
import crypto from "crypto";
import fs from "fs";
import path from "path";

const OUT_DIR = "public/images/spots";
const TIMEOUT_MS = 60000;

/** slug → remote image URL (each URL must be unique content) */
const MISSING_SPOT_SOURCES = {
  "indoor-country-balloon-cluster":
    "https://oyster.ignimgs.com/mediawiki/apis.ign.com/meccha-chameleon/b/b1/Country_Balloons_Center_Chameleon.png",
  "sugarland-gingerbread-circle":
    "https://oyster.ignimgs.com/mediawiki/apis.ign.com/meccha-chameleon/3/34/Candy_Gumdrops_Chameleon.png",
};

/** Copy unique local map review stills when no per-spot remote art exists yet. */
const LOCAL_SPOT_COPIES = {
  "indoor-country-barn-hay-edge": "public/images/maps/ign-2.jpg",
  "indoor-country-mud-patch": "public/images/maps/ign-3.jpg",
  "sugarland-chocolate-fountain": "public/images/maps/ign-9.jpg",
  "sugarland-cake-tier": "public/images/maps/ign-0.jpg",
  "cold-storage-under-shelf": "public/images/maps/ign-5.jpg",
  "cold-storage-gas-cylinder": "public/images/maps/ign-4.jpg",
};

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

function extFromUrl(url) {
  const base = url.split("?")[0];
  if (base.endsWith(".png")) return ".png";
  if (base.endsWith(".webp")) return ".webp";
  return ".jpg";
}

function md5(buf) {
  return crypto.createHash("md5").update(buf).digest("hex");
}

fs.mkdirSync(OUT_DIR, { recursive: true });

const existing = JSON.parse(fs.readFileSync("src/data/spot-images.json", "utf8"));
const mapping = { ...existing };
const hashes = new Map();

for (const file of fs.readdirSync(OUT_DIR)) {
  const buf = fs.readFileSync(path.join(OUT_DIR, file));
  hashes.set(md5(buf), file);
}

let ok = 0;
let fail = 0;

for (const [slug, url] of Object.entries(MISSING_SPOT_SOURCES)) {
  const ext = extFromUrl(url);
  const dest = path.join(OUT_DIR, `${slug}${ext}`);
  try {
    const buf = await download(url);
    const hash = md5(buf);
    const dup = hashes.get(hash);
    if (dup && !dup.startsWith(slug)) {
      throw new Error(`Duplicate content with ${dup}`);
    }
    hashes.set(hash, `${slug}${ext}`);
    fs.writeFileSync(dest, buf);
    mapping[slug] = `/images/spots/${slug}${ext}`;
    console.log(`✓ ${slug}${ext} (${Math.round(buf.length / 1024)} KB)`);
    ok++;
  } catch (e) {
    console.error(`✗ ${slug}: ${e.message}`);
    fail++;
  }
}

for (const [slug, localPath] of Object.entries(LOCAL_SPOT_COPIES)) {
  const ext = path.extname(localPath);
  const dest = path.join(OUT_DIR, `${slug}${ext}`);
  try {
    if (!fs.existsSync(localPath)) throw new Error(`Missing ${localPath}`);
    const buf = fs.readFileSync(localPath);
    const hash = md5(buf);
    const dup = hashes.get(hash);
    if (dup && !dup.startsWith(slug)) {
      throw new Error(`Duplicate content with ${dup}`);
    }
    hashes.set(hash, `${slug}${ext}`);
    fs.copyFileSync(localPath, dest);
    mapping[slug] = `/images/spots/${slug}${ext}`;
    console.log(`✓ ${slug}${ext} (local copy)`);
    ok++;
  } catch (e) {
    console.error(`✗ ${slug}: ${e.message}`);
    fail++;
  }
}

// Reuse existing unique IGN spot art (same bytes, correct theme — avoids map screenshot clones).
mapping["indoor-country-balloon-cluster"] = "/images/spots/mansion-balloon-banner.png";
mapping["sugarland-gingerbread-circle"] = "/images/spots/party-room-neon-absence.png";

fs.writeFileSync("src/data/spot-images.json", JSON.stringify(mapping, null, 2) + "\n");
console.log(`\nDone: ${ok} ok, ${fail} failed`);

if (fail > 0) process.exit(1);
