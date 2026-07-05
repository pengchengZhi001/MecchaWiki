import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { WORKSHOP_CATALOG } from "./workshop-catalog.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const APP_ID = 4704690;
const BATCH = 100;

const PREVIEW_CACHE = path.join(ROOT, "workshop-previews.json");

/** @param {string} html */
function extractIdsFromBrowseHtml(html) {
  return [...new Set([...html.matchAll(/filedetails\/\?id=(\d+)/g)].map((m) => m[1]))];
}

/** @param {string[]} ids */
function fetchDetails(ids) {
  if (ids.length === 0) return [];
  const params = [`itemcount=${ids.length}`];
  ids.forEach((id, i) => params.push(`publishedfileids[${i}]=${id}`));
  const body = params.join("&");
  const cmd = `curl.exe -sL --connect-timeout 30 -X POST "https://api.steampowered.com/ISteamRemoteStorage/GetPublishedFileDetails/v1/" -d "${body}"`;
  const raw = execSync(cmd, { encoding: "utf8" });
  const parsed = JSON.parse(raw);
  return parsed.response?.publishedfiledetails ?? [];
}

/** @param {string} html @param {number} pages */
function discoverWorkshopIds(pages = 3) {
  const discovered = new Set(WORKSHOP_CATALOG.map((m) => m.id));
  for (let p = 1; p <= pages; p++) {
    try {
      const url = `https://steamcommunity.com/workshop/browse/?appid=${APP_ID}&browsesort=trend&section=readytouseitems&actualsort=trend&p=${p}`;
      const html = execSync(`curl.exe -sL --connect-timeout 30 "${url}" -H "User-Agent: Mozilla/5.0"`, {
        encoding: "utf8",
      });
      extractIdsFromBrowseHtml(html).forEach((id) => discovered.add(id));
      console.log(`Browse page ${p}: ${discovered.size} unique IDs`);
    } catch (err) {
      console.warn(`Browse page ${p} failed:`, err.message);
    }
  }
  return [...discovered];
}

/** @param {object[]} details @param {Map<string, object>} catalogById */
function mergeEntry(catalog, detail) {
  const id = catalog?.id ?? detail?.publishedfileid;
  const preview =
    detail?.preview_url ||
    "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4704690/capsule_616x353.jpg?t=1781108224";

  return {
    id,
    slug: catalog.slug,
    title: detail?.title || catalog?.title || "Unknown Map",
    author: detail?.creator || catalog?.author || "Community",
    category: catalog?.category || "new",
    colors: catalog?.colors ?? 5,
    description: catalog?.description || detail?.file_description?.slice(0, 280) || "Community workshop map.",
    tags: catalog?.tags || ["Steam Workshop"],
    imageUrl: preview.replace(/\/\?$/, "/"),
    workshopUrl: `https://steamcommunity.com/sharedfiles/filedetails/?id=${id}`,
    workshopId: id,
    submittedAt: catalog?.submittedAt || (detail?.time_created ? new Date(detail.time_created * 1000).toISOString().slice(0, 10) : "2026-06-01"),
    curated: catalog?.curated !== false,
    subscriptions: detail?.subscriptions ?? 0,
    views: detail?.views ?? 0,
  };
}

/** @param {object} entry */
function toTsObject(entry) {
  const lines = [
    "  {",
    `    id: "${entry.id}",`,
    `    slug: "${entry.slug}",`,
    `    title: ${JSON.stringify(entry.title)},`,
    `    author: ${JSON.stringify(entry.author)},`,
    `    category: "${entry.category}",`,
    `    colors: ${entry.colors},`,
    `    description: ${JSON.stringify(entry.description)},`,
    `    tags: ${JSON.stringify(entry.tags)},`,
    `    imageUrl: ${JSON.stringify(entry.imageUrl)},`,
    `    workshopUrl: "${entry.workshopUrl}",`,
    `    workshopId: "${entry.workshopId}",`,
    `    submittedAt: "${entry.submittedAt}",`,
    `    curated: ${entry.curated},`,
    `    subscriptions: ${entry.subscriptions},`,
    `    views: ${entry.views},`,
    "  },",
  ];
  return lines.join("\n");
}

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48);
}

function main() {
  const catalogById = new Map(WORKSHOP_CATALOG.map((m) => [m.id, m]));
  const allIds = discoverWorkshopIds(3);

  /** @type {object[]} */
  let details = [];
  for (let i = 0; i < allIds.length; i += BATCH) {
    const batch = allIds.slice(i, i + BATCH);
    try {
      details.push(...fetchDetails(batch));
      console.log(`Fetched details ${Math.min(i + BATCH, allIds.length)}/${allIds.length}`);
    } catch (err) {
      console.warn(`API batch failed (${i}):`, err.message);
    }
  }

  const detailById = new Map(details.map((d) => [d.publishedfileid, d]));

  // Load cached previews if API failed partially
  if (fs.existsSync(PREVIEW_CACHE)) {
    const cached = JSON.parse(fs.readFileSync(PREVIEW_CACHE, "utf8"));
    for (const c of cached) {
      if (!detailById.has(c.id)) {
        detailById.set(c.id, {
          publishedfileid: c.id,
          title: c.title,
          preview_url: c.preview,
          subscriptions: c.subscriptions,
          views: c.views,
          creator: c.creator,
        });
      }
    }
  }

  const entries = WORKSHOP_CATALOG.map((catalog) => {
    const detail = detailById.get(catalog.id);
    return mergeEntry(catalog, detail);
  });

  // Append newly discovered maps not in catalog (up to 50 total catalog entries)
  for (const id of allIds) {
    if (catalogById.has(id) || entries.length >= 50) continue;
    const detail = detailById.get(id);
    if (!detail?.title) continue;
    entries.push(
      mergeEntry(
        {
          id,
          slug: slugify(detail.title),
          title: detail.title,
          author: detail.creator || "Community",
          category: "new",
          colors: 5,
          description: detail.file_description?.slice(0, 280) || "Community workshop map.",
          tags: ["Steam Workshop", "Discovered"],
          submittedAt: detail.time_created
            ? new Date(detail.time_created * 1000).toISOString().slice(0, 10)
            : "2026-06-01",
        },
        detail
      )
    );
  }

  const previewOutput = entries.map((e) => ({
    id: e.id,
    title: e.title,
    preview: e.imageUrl,
    subscriptions: e.subscriptions,
    views: e.views,
    creator: e.author,
    url: e.workshopUrl,
  }));

  fs.writeFileSync(PREVIEW_CACHE, JSON.stringify(previewOutput, null, 2));
  console.log(`Wrote ${PREVIEW_CACHE} (${entries.length} maps)`);

  const tsContent = `import type { WorkshopCategoryId } from "@/lib/site";

export type WorkshopMap = {
  id: string;
  slug: string;
  title: string;
  author: string;
  category: WorkshopCategoryId;
  colors: number;
  description: string;
  tags: string[];
  imageUrl: string;
  workshopUrl: string;
  workshopId: string;
  submittedAt: string;
  curated: boolean;
  subscriptions: number;
  views: number;
};

/** Auto-generated by scripts/fetch-workshop.mjs — edit scripts/workshop-catalog.mjs to add maps */
export const workshopMaps: WorkshopMap[] = [
${entries.map(toTsObject).join("\n")}
];

export function formatWorkshopSubscriptions(count: number): string {
  if (count >= 1_000_000) return \`\${(count / 1_000_000).toFixed(1)}M\`;
  if (count >= 1_000) return \`\${Math.round(count / 1_000)}K\`;
  return String(count);
}

export function sortWorkshopBySubscriptions(maps: WorkshopMap[]): WorkshopMap[] {
  return [...maps].sort((a, b) => b.subscriptions - a.subscriptions);
}

export function getCuratedWorkshopMaps(): WorkshopMap[] {
  return sortWorkshopBySubscriptions(workshopMaps.filter((m) => m.curated));
}

export function getWorkshopMapBySlug(slug: string): WorkshopMap | undefined {
  return workshopMaps.find((m) => m.slug === slug);
}

export function getWorkshopByCategory(
  category: WorkshopCategoryId,
  limit = 5
): WorkshopMap[] {
  return sortWorkshopBySubscriptions(
    workshopMaps.filter((m) => m.category === category && m.curated)
  ).slice(0, limit);
}

export function getPopularWorkshopMaps(limit = 6): WorkshopMap[] {
  return getCuratedWorkshopMaps().slice(0, limit);
}

export function getRelatedWorkshopMaps(
  slug: string,
  limit = 4
): WorkshopMap[] {
  const current = getWorkshopMapBySlug(slug);
  if (!current) return [];

  return sortWorkshopBySubscriptions(
    workshopMaps.filter((m) => m.slug !== slug && m.category === current.category)
  ).slice(0, limit);
}
`;

  const outPath = path.join(ROOT, "src", "data", "workshop.ts");
  fs.writeFileSync(outPath, tsContent);
  console.log(`Wrote ${outPath}`);
}

main();
