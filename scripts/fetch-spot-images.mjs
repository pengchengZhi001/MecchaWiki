/**
 * Downloads per-spot images from community guides (IGN wiki, gallery, Steam mirrors).
 * Run: node scripts/fetch-spot-images.mjs
 */
import crypto from "crypto";
import fs from "fs";
import path from "path";

const OUT_DIR = "public/images/spots";
const TIMEOUT_MS = 60000;

/** slug → remote image URL (each URL used once) */
const SPOT_IMAGE_SOURCES = {
  // ── Mansion (TheGamer / IGN / gallery) ──
  "mansion-library-shelf":
    "https://mecchachameleongame.org/images/mansion-library-book.jpg",
  "mansion-ceiling-pillar":
    "https://mecchachameleongame.org/images/mansion-ceiling-pillar.jpg",
  "mansion-horse-statue":
    "https://mecchachameleongame.org/images/mansion-horse-statue.jpg",
  "mansion-kitchen-poster":
    "https://mecchachameleongame.org/images/mansion-kitchen-poster.jpg",
  "mansion-bathroom-tiles":
    "https://mecchachameleongame.org/images/mansion-bathroom-tile.jpg",
  "mansion-wooden-arch":
    "https://oyster.ignimgs.com/mediawiki/apis.ign.com/meccha-chameleon/6/67/Hiding-spot-1.jpg",
  "mansion-hallway-painting":
    "https://mecchachameleongame.org/images/mansion-hallway-painting.jpg",
  "mansion-pillar-top":
    "https://oyster.ignimgs.com/mediawiki/apis.ign.com/meccha-chameleon/a/a5/Mansion_Ballroom_Chameleon.png",
  "mansion-armchair-tuck":
    "https://oyster.ignimgs.com/mediawiki/apis.ign.com/meccha-chameleon/5/54/Mansion_Study_Corner_Chameleon.png",
  "mansion-kitchen-shelving":
    "https://mecchachameleongame.org/images/mansion-kitchen-shelving.jpg",
  "mansion-black-tile-wall":
    "https://oyster.ignimgs.com/mediawiki/apis.ign.com/meccha-chameleon/1/19/Mansion_Study_Room_Chameleon.png",
  "mansion-balloon-banner":
    "https://oyster.ignimgs.com/mediawiki/apis.ign.com/meccha-chameleon/b/b1/Country_Balloons_Center_Chameleon.png",
  "mansion-vase-corner":
    "https://oyster.ignimgs.com/mediawiki/apis.ign.com/meccha-chameleon/9/93/Mansion_Study.png",
  "mansion-behind-plank":
    "https://oyster.ignimgs.com/mediawiki/apis.ign.com/meccha-chameleon/5/5d/Mansion_Storage_Chameleon.png",

  // ── Sewer ──
  "sewer-ceiling-pipe":
    "https://mecchachameleongame.org/images/sewer-pipe-ceiling.jpg",
  "sewer-oil-barrel-top":
    "https://meccha-chameleon.net/assets/steam/screenshot-05.jpg",
  "sewer-graffiti-wall-a":
    "https://mecchachameleongame.org/images/sewer-graffiti.jpg",
  "sewer-graffiti-wall-b":
    "https://oyster.ignimgs.com/mediawiki/apis.ign.com/meccha-chameleon/0/05/Sewers_Flood_Chameleon.png",
  "sewer-pipe-overhang":
    "https://oyster.ignimgs.com/mediawiki/apis.ign.com/meccha-chameleon/3/3e/Sewers_Center_Chameleon.png",
  "sewer-locker-room":
    "https://sm.ign.com/t/ign_nordic/photo/default/meccha-chameleon-7-1781548552123_f8gc.1400.jpg",
  "sewer-ceiling-pipe-maze":
    "https://oyster.ignimgs.com/mediawiki/apis.ign.com/meccha-chameleon/4/4f/Sewers_Party_Chameleon.png",
  "sewer-grate-shadow":
    "https://sm.ign.com/t/ign_nordic/photo/default/meccha-chameleon-9-1781548552122_7e7p.1400.jpg",

  // ── Backrooms ──
  "backrooms-bikes-wall":
    "https://mecchachameleongame.org/images/backrooms-wall-bikes.jpg",
  "backrooms-chair-stack":
    "https://oyster.ignimgs.com/mediawiki/apis.ign.com/meccha-chameleon/8/8e/Backrooms_Chairs_Chameleon.png",
  "backrooms-ceiling-light":
    "https://oyster.ignimgs.com/mediawiki/apis.ign.com/meccha-chameleon/9/93/Meccha-angles.jpg",
  "backrooms-exit-sign":
    "https://mecchachameleongame.org/images/backrooms-exit-sign.jpg",
  "backrooms-yellow-nook":
    "https://oyster.ignimgs.com/mediawiki/apis.ign.com/meccha-chameleon/3/3d/Backrooms_Trash_Chameleons.png",
  "backrooms-office-corner":
    "https://oyster.ignimgs.com/mediawiki/apis.ign.com/meccha-chameleon/e/ed/Backrooms_Office_Chameleons.png",
  "backrooms-birthday-hallway":
    "https://oyster.ignimgs.com/mediawiki/apis.ign.com/meccha-chameleon/1/14/Backrooms_Birthday_Party_Chameleon.png",
  "backrooms-vending-machine":
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4704690/0a8a562016b13a349349e685f7a4d5a6cbccef3e/ss_0a8a562016b13a349349e685f7a4d5a6cbccef3e.1920x1080.jpg?t=1781108224",
  "backrooms-fluorescent-blind":
    "https://meccha-chameleon.net/assets/steam/screenshot-06.jpg",

  // ── Penguin Hotel (IGN Editor Jen) ──
  "penguin-ballroom-rafters":
    "https://oyster.ignimgs.com/mediawiki/apis.ign.com/meccha-chameleon/d/d7/Penguin_Ballroom_Chameleon.png",
  "penguin-plush-room":
    "https://oyster.ignimgs.com/mediawiki/apis.ign.com/meccha-chameleon/0/02/Penguin_Play_Room_Chameleon.png",
  "penguin-bedroom-under-bed":
    "https://oyster.ignimgs.com/mediawiki/apis.ign.com/meccha-chameleon/4/44/Penguin_Bedroom_Chameleon.png",
  "penguin-second-floor-dice":
    "https://oyster.ignimgs.com/mediawiki/apis.ign.com/meccha-chameleon/2/2e/Penguin_Second_Floor_Chameleon.png",
  "penguin-hallway-risk":
    "https://oyster.ignimgs.com/mediawiki/apis.ign.com/meccha-chameleon/4/47/Penguin_Hallway_Chameleon.png",
  "penguin-ice-sculpture":
    "https://mecchachameleongame.org/images/steam-penguin-hotel.jpg",
  "penguin-pool-drain":
    "https://oyster.ignimgs.com/mediawiki/apis.ign.com/meccha-chameleon/4/4b/Mecha-hidden.jpg",

  // ── Cold Storage (map screenshot + industrial spot guides) ──
  "cold-storage-meat-shelf":
    "https://meccha-chameleon.net/assets/steam/screenshot-03.jpg",
  "cold-storage-gas-cylinder":
    "https://sm.ign.com/t/ign_nordic/photo/default/meccha-chameleon-2-1781548552124_ewmb.1400.jpg",
  "cold-storage-tile-grid":
    "https://sm.ign.com/t/ign_nordic/photo/default/meccha-chameleon-8-1781548552122_2vyw.1400.jpg",
  "cold-storage-under-shelf":
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4704690/0383a711ed93bf8edd848df4b63b331fc44f3ad5/ss_0383a711ed93bf8edd848df4b63b331fc44f3ad5.1920x1080.jpg?t=1781108224",
  "cold-storage-shelf-back-row":
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4704690/e38c8f1a5457304900196a133ecd49c6632fc19e/ss_e38c8f1a5457304900196a133ecd49c6632fc19e.1920x1080.jpg?t=1781108224",

  // ── Brick Loft ──
  "brick-loft-beam-gap":
    "https://mecchachameleongame.org/images/vintage-picture-frame.jpg",
  "brick-loft-red-brick-alcove":
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4704690/25f5c021fcaf118dee1ed17d638a35c05f0eec2f/ss_25f5c021fcaf118dee1ed17d638a35c05f0eec2f.1920x1080.jpg?t=1781108224",
  "brick-loft-pipe-crawl":
    "https://mecchachameleongame.org/images/vintage-staircase.jpg",
  "brick-loft-window-sill":
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4704690/b5a025eff8156f561590b3863ee5628353d5d41c/ss_b5a025eff8156f561590b3863ee5628353d5d41c.1920x1080.jpg?t=1781108224",
  "brick-loft-iron-stair":
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4704690/2764a4a42c24a88d0bbb9b67e5c2bde979a24ac9/ss_2764a4a42c24a88d0bbb9b67e5c2bde979a24ac9.1920x1080.jpg?t=1781108224",

  // ── Cross-map tips ──
  "party-room-neon-absence":
    "https://oyster.ignimgs.com/mediawiki/apis.ign.com/meccha-chameleon/3/34/Candy_Gumdrops_Chameleon.png",
  "white-elbow-trap":
    "https://mecchachameleongame.org/images/steam-paint-hide.jpg",
};

/** When remote art duplicates another spot, use the official map hero screenshot. */
const MAP_OVERVIEW_FALLBACK = {
  "brick-loft-iron-stair": "public/images/maps/steam-6.jpg",
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

const urls = Object.values(SPOT_IMAGE_SOURCES);
const slugEntries = Object.entries(SPOT_IMAGE_SOURCES);
if (new Set(urls).size !== urls.length) {
  const seen = new Map();
  for (const [slug, url] of slugEntries) {
    if (seen.has(url)) {
      console.error(`Duplicate URL: ${slug} and ${seen.get(url)} → ${url}`);
    }
    seen.set(url, slug);
  }
  process.exit(1);
}

const mapping = {};
const hashes = new Map();
let ok = 0;
let fail = 0;

for (const [slug, url] of slugEntries) {
  const ext = extFromUrl(url);
  const dest = path.join(OUT_DIR, `${slug}${ext}`);
  try {
    const buf = await download(url);
    const hash = md5(buf);
    if (hashes.has(hash)) {
      throw new Error(`Duplicate content with ${hashes.get(hash)}`);
    }
    hashes.set(hash, slug);
    fs.writeFileSync(dest, buf);
    mapping[slug] = `/images/spots/${slug}${ext}`;
    console.log(`✓ ${slug}${ext} (${Math.round(buf.length / 1024)} KB)`);
    ok++;
  } catch (e) {
    const fallback = MAP_OVERVIEW_FALLBACK[slug];
    if (fallback && fs.existsSync(fallback)) {
      const ext = path.extname(fallback);
      const dest = path.join(OUT_DIR, `${slug}${ext}`);
      fs.copyFileSync(fallback, dest);
      mapping[slug] = `/images/spots/${slug}${ext}`;
      console.log(`✓ ${slug}${ext} (map overview fallback)`);
      ok++;
      continue;
    }
    console.error(`✗ ${slug}: ${e.message}`);
    fail++;
  }
}

fs.writeFileSync("src/data/spot-images.json", JSON.stringify(mapping, null, 2) + "\n");
console.log(`\nDone: ${ok} ok, ${fail} failed → ${OUT_DIR}/`);
if (fail > 0) process.exit(1);
