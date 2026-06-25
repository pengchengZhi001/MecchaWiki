import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { WORKSHOP_CATALOG } from "./workshop-catalog.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const API_CACHE = path.join(ROOT, "workshop-api-response.json");

/** Maps removed from Steam API (result=9) — use last-known preview URLs */
const PREVIEW_OVERRIDES = {
  "3744930374":
    "https://images.steamusercontent.com/ugc/18367212070731390835/1E5EBF43AD4874FA904B937D2296EDFF090BFFDD/",
  "3742926910":
    "https://images.steamusercontent.com/ugc/14099890680091943031/D276D9A5595D41566F166CA823761381ECD606A9/",
  "3744940322":
    "https://images.steamusercontent.com/ugc/17650518085133223476/58BEEE096F2AFE471DFEBAB3C8BB56BB2965B36B/",
};

function loadApiDetails() {
  if (!fs.existsSync(API_CACHE)) return new Map();
  const raw = fs.readFileSync(API_CACHE, "utf8").replace(/^\uFEFF/, "");
  const items = JSON.parse(raw);
  return new Map(items.filter((d) => d.result === 1).map((d) => [String(d.publishedfileid), d]));
}

function toTs(e) {
  return `  {
    id: "${e.id}",
    slug: "${e.slug}",
    title: ${JSON.stringify(e.title)},
    author: ${JSON.stringify(e.author)},
    category: "${e.category}",
    colors: ${e.colors},
    description: ${JSON.stringify(e.description)},
    tags: ${JSON.stringify(e.tags)},
    imageUrl: ${JSON.stringify(e.imageUrl)},
    workshopUrl: "${e.workshopUrl}",
    workshopId: "${e.workshopId}",
    submittedAt: "${e.submittedAt}",
    curated: ${e.curated},
    subscriptions: ${e.subscriptions},
    views: ${e.views},
  },`;
}

const apiById = loadApiDetails();

const entries = WORKSHOP_CATALOG.map((c) => {
  const api = apiById.get(c.id);
  const previewOverride = c.previewUrl ?? PREVIEW_OVERRIDES[c.id];

  return {
    ...c,
    title: api?.title ?? c.title,
    author: api?.creator ? resolveAuthor(api, c) : c.author,
    imageUrl: api?.preview_url ?? previewOverride ?? c.previewUrl ?? "",
    workshopUrl: `https://steamcommunity.com/sharedfiles/filedetails/?id=${c.id}`,
    workshopId: c.id,
    curated: c.curated !== false,
    subscriptions: api?.subscriptions ?? 0,
    views: api?.views ?? 0,
  };
});

function resolveAuthor(api, catalog) {
  if (catalog.author && catalog.author !== "Community") return catalog.author;
  return catalog.author;
}

const missing = entries.filter((e) => !e.imageUrl);
if (missing.length > 0) {
  console.warn("Missing preview URLs:", missing.map((m) => m.slug).join(", "));
}

const previews = entries.map((e) => ({
  id: e.id,
  title: e.title,
  preview: e.imageUrl,
  subscriptions: e.subscriptions,
  views: e.views,
  creator: e.author,
  url: e.workshopUrl,
}));
fs.writeFileSync(path.join(ROOT, "workshop-previews.json"), JSON.stringify(previews, null, 2));

const ts = `import type { WorkshopCategoryId } from "@/lib/site";

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

/** Run npm run sync:workshop to refresh from Steam API */
export const workshopMaps: WorkshopMap[] = [
${entries.map(toTs).join("\n")}
];

export function getWorkshopMapBySlug(slug: string): WorkshopMap | undefined {
  return workshopMaps.find((m) => m.slug === slug);
}

export function getWorkshopByCategory(
  category: WorkshopCategoryId,
  limit = 5
): WorkshopMap[] {
  return workshopMaps
    .filter((m) => m.category === category && m.curated)
    .slice(0, limit);
}

export function getPopularWorkshopMaps(limit = 6): WorkshopMap[] {
  return [...workshopMaps]
    .filter((m) => m.curated)
    .sort((a, b) => b.subscriptions - a.subscriptions)
    .slice(0, limit);
}

export function getRelatedWorkshopMaps(
  slug: string,
  limit = 4
): WorkshopMap[] {
  const current = getWorkshopMapBySlug(slug);
  if (!current) return [];

  return workshopMaps
    .filter((m) => m.slug !== slug && m.category === current.category)
    .slice(0, limit);
}
`;

fs.writeFileSync(path.join(ROOT, "src", "data", "workshop.ts"), ts);
console.log(`Generated ${entries.length} workshop maps (${entries.filter((e) => e.imageUrl).length} with previews)`);
