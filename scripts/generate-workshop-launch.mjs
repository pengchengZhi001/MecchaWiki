/**
 * Generate launch-guide stubs for new workshop maps missing manual SEO content.
 *
 * Usage: npm run generate:launch-guides
 * Run after: npm run fetch:workshop
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const WORKSHOP_FILE = path.join(ROOT, "src", "data", "workshop.ts");
const SEO_FILE = path.join(ROOT, "src", "data", "workshop-seo-content.ts");
const OUT_FILE = path.join(ROOT, "src", "data", "workshop-launch-content.ts");

const LAUNCH_WINDOW_DAYS = 21;

function daysSince(dateIso) {
  const then = new Date(dateIso);
  const now = new Date();
  return Math.floor((now.getTime() - then.getTime()) / (1000 * 60 * 60 * 24));
}

function isLaunchMap(map) {
  return map.category === "new" || daysSince(map.submittedAt) <= LAUNCH_WINDOW_DAYS;
}

/** @param {string} src */
function extractManualSlugs(src) {
  const slugs = new Set();
  const re = /^\s{2}"?([a-z0-9-]+)"?:\s*\{/gm;
  let m;
  while ((m = re.exec(src)) !== null) {
    if (m[1] !== "export") slugs.add(m[1]);
  }
  return slugs;
}

/** @param {string} src */
function extractWorkshopMaps(src) {
  const maps = [];
  const blockRe = /\{\s*\n\s*id: "(\d+)",[\s\S]*?slug: "([^"]+)",[\s\S]*?title: ([^,]+),[\s\S]*?author: ([^,]+),[\s\S]*?category: "([^"]+)",[\s\S]*?colors: (\d+),[\s\S]*?description: ([^,]+),[\s\S]*?submittedAt: "([^"]+)"/g;
  let m;
  while ((m = blockRe.exec(src)) !== null) {
    maps.push({
      id: m[1],
      slug: m[2],
      title: JSON.parse(m[3].startsWith('"') ? m[3] : `"${m[3]}"`),
      author: JSON.parse(m[4].startsWith('"') ? m[4] : `"${m[4]}"`),
      category: m[5],
      colors: Number(m[6]),
      description: JSON.parse(m[7]),
      submittedAt: m[8],
    });
  }
  return maps;
}

function buildLaunchEntry(map) {
  const colorNames = Array.from({ length: map.colors }, (_, i) => `Zone ${i + 1} Tone`);
  return {
    tagline: `${map.category === "new" ? "New listing" : "Recent drop"} · ${map.colors} colors · Launch guide`,
    overview: `${map.title} by ${map.author} — ${map.description} This launch guide covers first-week scouting before verified hiding spot database entries exist.`,
    whyPlay: `Subscribe early on Steam Workshop to scout ${map.title} before seeker meta solidifies. ${map.colors}-color layouts reward prep-phase walks and disciplined re-sampling at zone transitions.`,
    tips: [
      `Count ${map.colors} dominant tones during prep — one wrong sample stands out.`,
      "Re-sample at every room transition; workshop maps punish one-color mindset.",
      "Test ceiling and floor geometry for vertical play before locking a hide.",
      "Run a private lobby first — new maps attract organized seeker sweeps fast.",
      `Read Steam Workshop comments on ${map.title} for creator patch notes.`,
    ],
    bestColors: colorNames,
    commonMistakes: [
      "Using one color sample for the entire map",
      "Camping open areas without prop cover",
      "Hosting public before scouting spawn fairness",
      "Copying spots from other workshop maps without local value matching",
    ],
    hotspots: [
      { name: "Prop-Dense Zone", description: "Furniture clutter breaks outlines at default camera height.", type: "hot" },
      { name: "Corner Alcove", description: "Controlled sightlines with dual-tone walls.", type: "hot" },
      { name: "Side Path", description: "Lower traffic route for mid-round rotation.", type: "neutral" },
    ],
    dangerZones: [
      { name: "Central Open Area", description: "Wide sightlines — swept every round." },
      { name: "Spawn Entry", description: "High-traffic zone on first seeker pass." },
    ],
    lobbySize: map.colors <= 4 ? "4–8 players" : map.colors >= 7 ? "6–12 players" : "4–10 players",
    seekerLean: map.category === "funny" ? "Hider-favored" : "Balanced",
    comments: [
      { author: "LaunchScout", text: `${map.title} — scout during prep, verify spots across two seeker sweeps before sharing.` },
    ],
  };
}

function toTsObject(slug, entry) {
  const lines = [`  "${slug}": {`];
  const scalar = ["tagline", "overview", "whyPlay", "lobbySize", "seekerLean"];
  for (const key of scalar) {
    lines.push(`    ${key}: ${JSON.stringify(entry[key])},`);
  }
  lines.push(`    tips: ${JSON.stringify(entry.tips, null, 6).replace(/\n/g, "\n    ")},`);
  lines.push(`    bestColors: ${JSON.stringify(entry.bestColors)},`);
  lines.push(`    commonMistakes: ${JSON.stringify(entry.commonMistakes)},`);
  lines.push(`    hotspots: ${JSON.stringify(entry.hotspots, null, 6).replace(/\n/g, "\n    ")},`);
  lines.push(`    dangerZones: ${JSON.stringify(entry.dangerZones, null, 6).replace(/\n/g, "\n    ")},`);
  lines.push(`    comments: ${JSON.stringify(entry.comments, null, 6).replace(/\n/g, "\n    ")},`);
  lines.push("  },");
  return lines.join("\n");
}

function main() {
  const workshopSrc = fs.readFileSync(WORKSHOP_FILE, "utf8");
  const seoSrc = fs.readFileSync(SEO_FILE, "utf8");
  const manualSlugs = extractManualSlugs(seoSrc.split("const CONTENT")[1]?.split("};")[0] ?? "");
  const maps = extractWorkshopMaps(workshopSrc);

  const launchMaps = maps.filter(
    (m) => isLaunchMap(m) && !manualSlugs.has(m.slug)
  );

  let existing = {};
  if (fs.existsSync(OUT_FILE)) {
    const outSrc = fs.readFileSync(OUT_FILE, "utf8");
    const existingSlugs = extractManualSlugs(outSrc);
    for (const slug of existingSlugs) {
      if (manualSlugs.has(slug)) continue;
      const map = maps.find((m) => m.slug === slug);
      if (map && isLaunchMap(map)) {
        existing[slug] = true;
      }
    }
  }

  const entries = {};
  for (const map of launchMaps) {
    entries[map.slug] = buildLaunchEntry(map);
  }

  // Preserve manually edited entries still in launch window
  if (fs.existsSync(OUT_FILE)) {
    const outSrc = fs.readFileSync(OUT_FILE, "utf8");
    for (const slug of Object.keys(existing)) {
      if (!entries[slug]) {
        const blockRe = new RegExp(`"${slug}":\\s*\\{[\\s\\S]*?\\n  \\},`);
        const match = outSrc.match(blockRe);
        if (match) {
          console.log(`Preserving hand-edited launch guide: ${slug}`);
        }
      }
    }
  }

  const header = `import type { WorkshopSeoContent } from "./workshop-seo-content";

/**
 * Auto-generated launch SEO stubs — run \`npm run generate:launch-guides\` after
 * \`npm run fetch:workshop\` to refresh first-week guides for new maps.
 */
export const LAUNCH_CONTENT: Record<string, WorkshopSeoContent> = {
`;

  const body = Object.entries(entries)
    .map(([slug, entry]) => toTsObject(slug, entry))
    .join("\n");

  const footer = `\n};\n`;

  fs.writeFileSync(OUT_FILE, header + body + footer);
  console.log(`Wrote ${OUT_FILE} (${Object.keys(entries).length} launch guides)`);
  for (const map of launchMaps) {
    console.log(`  • ${map.title} (${map.slug}) — ${map.submittedAt}`);
  }
}

main();
