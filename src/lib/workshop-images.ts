import type { WorkshopMap } from "@/data/workshop";

/** Local previews — bypass Steam CDN / Next image optimizer issues */
const LOCAL_PREVIEWS: Record<string, string> = {
  "bikini-bottom": "/images/workshop/bikini-bottom.png",
  "peak-airport": "/images/workshop/peak-airport.png",
};

export function getWorkshopImageUrl(map: Pick<WorkshopMap, "slug" | "imageUrl">): string {
  return LOCAL_PREVIEWS[map.slug] ?? map.imageUrl;
}

export function isLocalWorkshopImage(src: string): boolean {
  return src.startsWith("/images/");
}
