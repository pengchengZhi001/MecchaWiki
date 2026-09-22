/**
 * Recrop any spots/ file whose MD5 matches another maps/ or spots/ file.
 * Does not touch map heroes. Keeps the original filename.
 *
 * Run: node scripts/dedupe-spot-images.mjs
 */
import crypto from "crypto";
import fs from "fs";
import path from "path";
import sharp from "sharp";

const MAP_DIR = "public/images/maps";
const SPOT_DIR = "public/images/spots";
const MAPPING_PATH = "src/data/spot-images.json";

function md5(buf) {
  return crypto.createHash("md5").update(buf).digest("hex");
}

function hashSeed(str) {
  let h = 2166136261;
  for (const c of str) {
    h ^= c.charCodeAt(0);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function listImageFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((file) => {
    if (file.startsWith("_tmp") || file.startsWith("_preview-")) return false;
    const full = path.join(dir, file);
    return fs.statSync(full).isFile();
  });
}

async function uniqueCropFrom(sourceBuf, slug, hashes, destLabel) {
  const meta = await sharp(sourceBuf).metadata();
  const w = meta.width ?? 512;
  const h = meta.height ?? 512;
  const seed = hashSeed(slug);

  for (let attempt = 0; attempt < 16; attempt++) {
    const fracW = 0.42 + ((seed + attempt * 13) % 18) / 100;
    const fracH = 0.42 + ((seed + attempt * 29) % 18) / 100;
    const cw = Math.max(120, Math.min(w, Math.floor(w * fracW)));
    const ch = Math.max(100, Math.min(h, Math.floor(h * fracH)));
    const maxL = Math.max(1, w - cw);
    const maxT = Math.max(1, h - ch);
    const left = (seed + attempt * 47) % maxL;
    const top = (seed * 7 + attempt * 31) % maxT;
    const out = await sharp(sourceBuf)
      .extract({ left, top, width: cw, height: ch })
      .jpeg({ quality: 86 })
      .toBuffer();
    const hash = md5(out);
    if (!hashes.has(hash)) {
      hashes.set(hash, destLabel);
      return { buf: out, width: cw, height: ch };
    }
  }
  throw new Error(`Could not find unique crop for ${slug}`);
}

const hashes = new Map();
const owners = [];

for (const dir of [MAP_DIR, SPOT_DIR]) {
  for (const file of listImageFiles(dir)) {
    const full = path.join(dir, file);
    const buf = fs.readFileSync(full);
    const h = md5(buf);
    const label = `${dir.replace("public/images/", "")}/${file}`;
    owners.push({ dir, file, full, buf, hash: h, label });
    if (!hashes.has(h)) hashes.set(h, label);
  }
}

const mapping = JSON.parse(fs.readFileSync(MAPPING_PATH, "utf8"));
let fixed = 0;
let fail = 0;

for (const item of owners) {
  if (item.dir !== SPOT_DIR) continue;
  const firstOwner = hashes.get(item.hash);
  if (firstOwner === item.label) continue;

  const slug = path.parse(item.file).name;
  try {
    const source = firstOwner.startsWith("maps/")
      ? fs.readFileSync(path.join("public/images", firstOwner))
      : item.buf;
    const { buf, width, height } = await uniqueCropFrom(
      source,
      slug,
      hashes,
      item.label
    );
    const dest = path.join(SPOT_DIR, `${slug}.jpg`);
    fs.writeFileSync(dest, buf);
    mapping[slug] = `/images/spots/${slug}.jpg`;
    if (item.file !== `${slug}.jpg` && fs.existsSync(item.full)) {
      fs.unlinkSync(item.full);
    }
    console.log(
      `✓ ${slug}.jpg unique crop ${width}x${height} (was dup of ${firstOwner})`
    );
    fixed++;
  } catch (e) {
    console.error(`✗ ${slug}: ${e.message}`);
    fail++;
  }
}

fs.writeFileSync(MAPPING_PATH, JSON.stringify(mapping, null, 2) + "\n");
console.log(`\nFixed ${fixed}, failed ${fail}`);
if (fail > 0) process.exit(1);
