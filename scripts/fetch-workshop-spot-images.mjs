/**
 * Downloads workshop spot preview images to public/images/spots/.
 * Art Gallery uses scripts/crop-art-gallery-spots.py for unique per-spot crops.
 * Run: node scripts/fetch-workshop-spot-images.mjs
 */
import crypto from "crypto";
import fs from "fs";
import path from "path";

const OUT_DIR = "public/images/spots";
const MAPPING_PATH = "src/data/spot-images.json";
const TIMEOUT_MS = 60000;

/** slug → Steam Workshop preview URL */
const WORKSHOP_SPOT_SOURCES = {
  "minecraft-crafting-table":
    "https://images.steamusercontent.com/ugc/15131510923525279426/FD09E90DEE53E8B69B05336013FDDF1DFEAE3308/",
  "minecraft-village-tree-line":
    "https://images.steamusercontent.com/ugc/15131510923525279426/FD09E90DEE53E8B69B05336013FDDF1DFEAE3308/",
  "minecraft-grass-torch-yard":
    "https://images.steamusercontent.com/ugc/15131510923525279426/FD09E90DEE53E8B69B05336013FDDF1DFEAE3308/",
  "minecraft-indoor-wood-room":
    "https://images.steamusercontent.com/ugc/15131510923525279426/FD09E90DEE53E8B69B05336013FDDF1DFEAE3308/",
  "swimming-pool-deck-chair":
    "https://images.steamusercontent.com/ugc/14809763676444897712/FE07FB7CE736E9FA610A5FC030395BE1A2CF42C1/",
  "swimming-pool-wall-art":
    "https://images.steamusercontent.com/ugc/14809763676444897712/FE07FB7CE736E9FA610A5FC030395BE1A2CF42C1/",
  "swimming-pool-changing-room":
    "https://images.steamusercontent.com/ugc/14809763676444897712/FE07FB7CE736E9FA610A5FC030395BE1A2CF42C1/",
  "swimming-pool-lane-divider":
    "https://images.steamusercontent.com/ugc/14809763676444897712/FE07FB7CE736E9FA610A5FC030395BE1A2CF42C1/",
  // art-gallery-* → run: python scripts/crop-art-gallery-spots.py
  "meeting-room-cubicle-maze":
    "https://images.steamusercontent.com/ugc/11739885369561036156/D47874287678B78366EE490F558E8B4A4DFCAEDD/",
  "meeting-room-conference-corner":
    "https://images.steamusercontent.com/ugc/11739885369561036156/D47874287678B78366EE490F558E8B4A4DFCAEDD/",
  "meeting-room-reception-desk":
    "https://images.steamusercontent.com/ugc/11739885369561036156/D47874287678B78366EE490F558E8B4A4DFCAEDD/",
  "cs2-mirage-a-site-ledge":
    "https://images.steamusercontent.com/ugc/10178585842378833568/A6EC29ACC9C5CAE06032DFA5245B16114E0E13F8/",
  "cs2-mirage-connector":
    "https://images.steamusercontent.com/ugc/10178585842378833568/A6EC29ACC9C5CAE06032DFA5245B16114E0E13F8/",
  "cs2-mirage-mid-boxes":
    "https://images.steamusercontent.com/ugc/10178585842378833568/A6EC29ACC9C5CAE06032DFA5245B16114E0E13F8/",
  "minecraft-house-torch-flower":
    "https://images.steamusercontent.com/ugc/15997883309042678099/A6CA797356D6D3A25C7C6BE8E8B2CD9D0F398277/",
  "minecraft-house-grass-block":
    "https://images.steamusercontent.com/ugc/15997883309042678099/A6CA797356D6D3A25C7C6BE8E8B2CD9D0F398277/",
  "simpsons-couch-living-room":
    "https://images.steamusercontent.com/ugc/18367212070731390835/1E5EBF43AD4874FA904B937D2296EDFF090BFFDD/",
  "simpsons-kitchen-clutter":
    "https://images.steamusercontent.com/ugc/18367212070731390835/1E5EBF43AD4874FA904B937D2296EDFF090BFFDD/",
  "peak-airport-gate-seating":
    "https://images.steamusercontent.com/ugc/17063689919572783334/D34552C7189ED3DD7F01ADD774FA370E94DC156C/",
  "peak-airport-shop-storefront":
    "https://images.steamusercontent.com/ugc/17063689919572783334/D34552C7189ED3DD7F01ADD774FA370E94DC156C/",
  "bikini-bottom-pineapple-wall":
    "https://images.steamusercontent.com/ugc/14906373178721883619/7B48EE463C3200694958EE62186D86200C32C574/",
  "bikini-bottom-krusty-krab":
    "https://images.steamusercontent.com/ugc/14906373178721883619/7B48EE463C3200694958EE62186D86200C32C574/",
  // minecraft-village-*, megamall-* → scripts/crop-workshop-spot-previews.mjs
};

function extFromContentType(type) {
  if (type?.includes("png")) return ".png";
  if (type?.includes("webp")) return ".webp";
  return ".jpg";
}

async function fetchBuffer(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; MecchaWiki/1.0)" },
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 3000) throw new Error(`Too small (${buf.length} bytes)`);
  return { buf, ext: extFromContentType(res.headers.get("content-type")) };
}

fs.mkdirSync(OUT_DIR, { recursive: true });

const existing = JSON.parse(fs.readFileSync(MAPPING_PATH, "utf8"));
const mapping = { ...existing };
const urlCache = new Map();
const fileHashes = new Map();

function md5(buf) {
  return crypto.createHash("md5").update(buf).digest("hex");
}

let ok = 0;
let fail = 0;
let dupWarnings = 0;

for (const [slug, url] of Object.entries(WORKSHOP_SPOT_SOURCES)) {
  try {
    let cached = urlCache.get(url);
    if (!cached) {
      cached = await fetchBuffer(url);
      urlCache.set(url, cached);
      console.log(`↓ fetched ${url.slice(0, 70)}… (${Math.round(cached.buf.length / 1024)} KB)`);
    }
    const hash = md5(cached.buf);
    const duplicateOf = fileHashes.get(hash);
    if (duplicateOf && duplicateOf !== slug) {
      console.warn(
        `! ${slug} shares identical preview with ${duplicateOf} — run a crop script for unique thumbnails`
      );
      dupWarnings++;
    } else {
      fileHashes.set(hash, slug);
    }
    const filename = `${slug}${cached.ext}`;
    fs.writeFileSync(path.join(OUT_DIR, filename), cached.buf);
    mapping[slug] = `/images/spots/${filename}`;
    console.log(`✓ ${slug} → ${mapping[slug]}`);
    ok++;
  } catch (e) {
    console.error(`✗ ${slug}: ${e.message}`);
    fail++;
  }
}

fs.writeFileSync(MAPPING_PATH, JSON.stringify(mapping, null, 2) + "\n");
console.log(`\nDone: ${ok} ok, ${fail} failed, ${urlCache.size} unique previews, ${dupWarnings} duplicate warnings`);
if (fail > 0) process.exit(1);
