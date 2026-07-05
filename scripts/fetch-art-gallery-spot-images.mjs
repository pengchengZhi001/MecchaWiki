/**
 * Download verified Art Gallery spot screenshots from DualShockers guide.
 * Run: node scripts/fetch-art-gallery-spot-images.mjs
 */
import crypto from "crypto";
import fs from "fs";
import path from "path";

const OUT_DIR = "public/images/spots";
const MAPPING_PATH = "src/data/spot-images.json";
const DS_BASE =
  "https://static0.dualshockersimages.com/wordpress/wp-content/uploads/2026/06/";

/** slug → DualShockers filename (must match spot title) */
const ART_GALLERY_SOURCES = {
  "art-gallery-mona-lisa": "meccha-chameleon-characters-in-front-of-artwork.jpg",
  "art-gallery-portrait-row":
    "meccha-chameleon-art-gallery-hiding-spots-the-last-supper.jpg",
  "art-gallery-sculpture-niche": "meccha-chameleon-art-gallery-st-john.jpg",
  "art-gallery-floor-mosaic":
    "meccha-chameleon-art-gallery-hiding-spots-security-camera.jpg",
  "art-gallery-twelve-apostles":
    "meccha-chameleon-art-gallery-hiding-spots-garbage-can.jpg",
  "art-gallery-gilded-frame-corner":
    "meccha-chameleon-art-gallery-hiding-spots-the-annunciation.jpg",
  "art-gallery-lesser-known-wing":
    "meccha-chameleon-art-gallery-hiding-impression-sunrise.jpg",
  "art-gallery-large-canvas":
    "meccha-chameleon-art-gallery-hiding-spots-pompeii.jpg",
};

function md5(buf) {
  return crypto.createHash("md5").update(buf).digest("hex");
}

function extFromUrl(filename) {
  if (filename.endsWith(".png")) return ".png";
  if (filename.endsWith(".webp")) return ".webp";
  return ".jpg";
}

fs.mkdirSync(OUT_DIR, { recursive: true });
const mapping = JSON.parse(fs.readFileSync(MAPPING_PATH, "utf8"));
const hashes = new Map();

let ok = 0;
let fail = 0;

for (const [slug, filename] of Object.entries(ART_GALLERY_SOURCES)) {
  const url = DS_BASE + filename;
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; MecchaWiki/1.0)" },
      signal: AbortSignal.timeout(60000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 5000) throw new Error(`Too small (${buf.length} bytes)`);

    const hash = md5(buf);
    const dup = hashes.get(hash);
    if (dup && dup !== slug) {
      console.warn(`! ${slug} identical to ${dup} — check mapping`);
    }
    hashes.set(hash, slug);

    const ext = extFromUrl(filename);
    const outFile = `${slug}${ext}`;
    fs.writeFileSync(path.join(OUT_DIR, outFile), buf);
    mapping[slug] = `/images/spots/${outFile}`;
    console.log(`OK ${slug} <- ${filename} (${Math.round(buf.length / 1024)} KB, ${hash.slice(0, 8)})`);
    ok++;
  } catch (e) {
    console.error(`FAIL ${slug}: ${e.message}`);
    fail++;
  }
}

fs.writeFileSync(MAPPING_PATH, JSON.stringify(mapping, null, 2) + "\n");
console.log(`\nDone: ${ok} ok, ${fail} failed, ${hashes.size} unique images`);
if (fail > 0) process.exit(1);
