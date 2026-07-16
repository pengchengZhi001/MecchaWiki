/**
 * Reports duplicate image content (MD5) across maps/ and spots/.
 * Run: node scripts/check-dup-spots.mjs
 */
import crypto from "crypto";
import fs from "fs";
import path from "path";

function md5(buf) {
  return crypto.createHash("md5").update(buf).digest("hex");
}

const dirs = ["public/images/maps", "public/images/spots"];
const byHash = new Map();
let dupCount = 0;

for (const dir of dirs) {
  if (!fs.existsSync(dir)) continue;
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);
    if (!fs.statSync(full).isFile()) continue;
    if (file.startsWith("_preview-")) continue;
    const h = md5(fs.readFileSync(full));
    const label = `${dir.replace("public/images/", "")}/${file}`;
    if (byHash.has(h)) {
      console.log("DUP", label, "==", byHash.get(h));
      dupCount++;
    } else {
      byHash.set(h, label);
    }
  }
}

if (dupCount === 0) {
  console.log("No duplicate image content found.");
} else {
  console.log(`\n${dupCount} duplicate pair(s) found.`);
  process.exitCode = 1;
}
