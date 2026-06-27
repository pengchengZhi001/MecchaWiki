import mapping from "./spot-images.json";

/** Per-spot images from IGN wiki, community gallery, and map guides. */
export const spotImages: Record<string, string> = mapping;

export function getSpotImageUrl(slug: string): string {
  const path = spotImages[slug] ?? "/images/maps/steam-0.jpg";
  return `${path}?v=7`;
}
