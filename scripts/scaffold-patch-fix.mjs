/**
 * Scaffold a new patch entry in src/data/patch-fixes.ts
 *
 * Usage:
 *   node scripts/scaffold-patch-fix.mjs v2.5.0 2026-07-10 "Optional headline"
 *
 * Then edit knownIssues in patch-fixes.ts with Steam Discussion findings.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PATCH_FILE = path.join(__dirname, "..", "src", "data", "patch-fixes.ts");

const [version, releasedAt, ...headlineParts] = process.argv.slice(2);

if (!version || !releasedAt) {
  console.error("Usage: node scripts/scaffold-patch-fix.mjs <version> <YYYY-MM-DD> [headline]");
  process.exit(1);
}

if (!/^\d{4}-\d{2}-\d{2}$/.test(releasedAt)) {
  console.error("releasedAt must be YYYY-MM-DD");
  process.exit(1);
}

const headline =
  headlineParts.join(" ") ||
  "Community-reported fixes — update knownIssues after scanning Steam Discussions";

let src = fs.readFileSync(PATCH_FILE, "utf8");

const versionRe = /version: "v[^"]+"/;
const dateRe = /releasedAt: "\d{4}-\d{2}-\d{2}"/;
const headlineRe = /headline: "[^"]+"/;

if (!versionRe.test(src) || !dateRe.test(src) || !headlineRe.test(src)) {
  console.error("Could not find latestPatch fields in patch-fixes.ts — update manually.");
  process.exit(1);
}

src = src
  .replace(versionRe, `version: "${version}"`)
  .replace(dateRe, `releasedAt: "${releasedAt}"`)
  .replace(headlineRe, `headline: "${headline.replace(/"/g, '\\"')}"`);

fs.writeFileSync(PATCH_FILE, src);

console.log(`Updated latestPatch → ${version} (${releasedAt})`);
console.log("");
console.log("Next steps:");
console.log("  1. Edit knownIssues in src/data/patch-fixes.ts from Steam Discussions");
console.log("  2. Update src/data/guides/problems-after-update.ts if new error types appear");
console.log("  3. Add retestNotes for geometry or spot changes");
console.log("  4. Homepage PatchAlertBanner auto-shows for 14 days after releasedAt");
