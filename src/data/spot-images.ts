import mapping from "./spot-images.json";

/** Per-spot images from IGN wiki, community gallery, and map guides. */
export const spotImages: Record<string, string> = mapping;

export function getSpotImageUrl(slug: string): string {
  const imagePath = spotImages[slug] ?? "/images/maps/steam-0.jpg";
  if (imagePath.startsWith("/")) {
    return `${imagePath}?v=16`;
  }
  return imagePath;
}
