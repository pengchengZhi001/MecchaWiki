import crypto from "crypto";
import fs from "fs";

function md5(buf) {
  return crypto.createHash("md5").update(buf).digest("hex");
}

const mapHashes = {};
for (const f of fs.readdirSync("public/images/maps")) {
  mapHashes[md5(fs.readFileSync(`public/images/maps/${f}`))] = `maps/${f}`;
}

for (const f of fs.readdirSync("public/images/spots")) {
  const h = md5(fs.readFileSync(`public/images/spots/${f}`));
  if (mapHashes[h]) console.log("DUP", f, "==", mapHashes[h]);
}
