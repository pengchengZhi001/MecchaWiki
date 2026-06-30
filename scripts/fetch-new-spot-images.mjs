/**
 * Downloads new community spot images (Osaka, Sugarland fixes, etc.) from IGN wiki.
 * Run: node scripts/fetch-new-spot-images.mjs
 */
import crypto from "crypto";
import fs from "fs";
import path from "path";

const OUT_DIR = "public/images/spots";
const TIMEOUT_MS = 60000;
const IGN = "https://oyster.ignimgs.com/mediawiki/apis.ign.com/meccha-chameleon";

/** slug → remote image URL (each URL must be unique content) */
const NEW_SPOT_SOURCES = {
  // ── Osaka (IGN v1.7.0) ──
  "osaka-truck-bed": `${IGN}/7/74/Osaka_Open_Area_Chameleon.png`,
  "osaka-signage-above": `${IGN}/5/5c/Osaka_Above_Chameleon.png`,
  "osaka-shop-clutter": `${IGN}/d/d4/Osaka_Shops_Chameleon.png`,
  "osaka-trash-corner": `${IGN}/8/80/Osaka_Trash_Chameleon.png`,
  "osaka-alleyway-nook": `${IGN}/9/95/Osaka_Alleyway_Chameleon.png`,

  // ── Sugarland (IGN + GameRant) ──
  "sugarland-gingerbread-circle": `${IGN}/8/80/Candy_Gingerbread_Houses_Chamelon.png`,
  "sugarland-cake-tree": `${IGN}/2/29/Candy_Cake_Chameleon.png`,
  "sugarland-gumdrop-pile": `${IGN}/3/34/Candy_Gumdrops_Chameleon.png`,
  "sugarland-candy-houses": `${IGN}/7/70/Candy_Houses_Chameleon.png`,
  "sugarland-candy-locker": `${IGN}/9/9f/Candy_Locker_Chameleon.png`,
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

for (const [slug, url] of Object.entries(NEW_SPOT_SOURCES)) {
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

fs.writeFileSync("src/data/spot-images.json", JSON.stringify(mapping, null, 2) + "\n");
console.log(`\nDone: ${ok} ok, ${fail} failed`);
if (fail > 0) process.exit(1);
