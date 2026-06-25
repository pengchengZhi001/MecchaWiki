/** Local map hero images (from Steam store screenshots). */
const MAP_IMAGES: Record<string, string> = {
  mansion: "/images/maps/steam-0.jpg",
  sewer: "/images/maps/steam-4.jpg",
  backrooms: "/images/maps/steam-3.jpg",
  "penguin-hotel": "/images/maps/steam-7.jpg",
  "cold-storage": "/images/maps/steam-5.jpg",
  "brick-loft": "/images/maps/steam-6.jpg",
};

export type MapDifficulty = "Easy" | "Medium" | "Hard" | "Expert";

export type GameMap = {
  slug: string;
  name: string;
  tagline: string;
  difficulty: MapDifficulty;
  playerCount: string;
  themeColor: string;
  accentColor: string;
  description: string;
  tips: string[];
  hotspots: { name: string; description: string; type: "hot" | "danger" | "neutral" }[];
  dangerZones: { name: string; description: string }[];
  colorPalette: string[];
  imageUrl: string;
};

export const maps: GameMap[] = [
  {
    slug: "mansion",
    name: "Mansion",
    tagline: "Classic manor · Best for beginners",
    difficulty: "Easy",
    playerCount: "4–12 players",
    themeColor: "#8B4513",
    accentColor: "#D4A574",
    imageUrl: MAP_IMAGES["mansion"],
    description:
      "Hide-and-Seek Mansion is the map most players see first. Medium-sized rooms with strong color blocks — wood trim, tiled bathroom, red kitchen accents — make eyedropper sampling forgiving for new hiders. Ceiling and prop mimics dominate high-level play.",
    tips: [
      "Learn living room vs study color zones before the round ends.",
      "Stair landings are high-traffic for seekers — don't camp open walls.",
      "Chandelier shadows buy time but hunters can look down from the balcony.",
      "Red wood + beige walls give natural two-tone cover.",
    ],
    hotspots: [
      { name: "Main Ballroom", description: "Open sightlines favor seekers. Use balloons, corners, or ceiling.", type: "danger" },
      { name: "Study Library", description: "Bookshelves and shadows — core mid-game zone.", type: "hot" },
      { name: "Side Bathroom", description: "Tile + grout dual-color setup. High reflectivity after patches.", type: "hot" },
    ],
    dangerZones: [
      { name: "Ballroom Center", description: "Wide open floor — only works with perfect paint and stillness." },
      { name: "Main Stair Landing", description: "Seekers sweep here every round." },
    ],
    colorPalette: ["#8B4513", "#D4A574", "#F5DEB3", "#654321", "#2F1810"],
  },
  {
    slug: "sewer",
    name: "Sewer",
    tagline: "Dark pipes · Vertical plays",
    difficulty: "Medium",
    playerCount: "4–10 players",
    themeColor: "#2D4A3E",
    accentColor: "#5C7A6B",
    imageUrl: MAP_IMAGES["sewer"],
    description:
      "The darkest official map. Industrial pipes, oil barrels, graffiti, and low light heavily favor hiders who paint dark values and use vertical geometry.",
    tips: [
      "Rust green on pipe interiors is the dominant cover color.",
      "Look up — ceiling pipes are the strongest zone on this map.",
      "Graffiti needs multi-color sampling, not one flat tone.",
      "Barrel tops are invisible from default seeker camera height.",
    ],
    hotspots: [
      { name: "Ceiling Pipe Maze", description: "Community #1 zone — overhead pipes in dark sections.", type: "hot" },
      { name: "Graffiti Walls", description: "Pattern chaos hides outline mistakes.", type: "hot" },
      { name: "Central Junction", description: "Open crossing — cross quickly or don't.", type: "danger" },
    ],
    dangerZones: [
      { name: "Open Junction Floor", description: "No cover — only speed and color match." },
      { name: "Lit Side Room", description: "Rare bright patches expose value errors." },
    ],
    colorPalette: ["#2D4A3E", "#5C7A6B", "#8B9A8B", "#3D3D3D", "#1A2E26"],
  },
  {
    slug: "backrooms",
    name: "Backrooms",
    tagline: "Yellow halls · Psychological pressure",
    difficulty: "Hard",
    playerCount: "6–14 players",
    themeColor: "#C4B896",
    accentColor: "#E8DCC8",
    imageUrl: MAP_IMAGES["backrooms"],
    description:
      "Iconic yellow wallpaper and fluorescent hum. Repetitive layout disorients both teams. Subtle wallpaper value differences are the only tells.",
    tips: [
      "Wallpaper yellow has tiny value shifts — sample locally every room.",
      "Use identical rooms to fake direction.",
      "Carpet vs wall value gap is minimal — stay low when moving.",
      "Re-test wall-clip spots after v1.2.0.",
    ],
    hotspots: [
      { name: "Chair Stacks", description: "Compact furniture clusters break outline.", type: "hot" },
      { name: "Office Corners", description: "Cramped wedges hard to clear quickly.", type: "hot" },
      { name: "Fluorescent Rows", description: "Harsh light punishes imperfect paint.", type: "danger" },
    ],
    dangerZones: [
      { name: "Long Yellow Corridor", description: "No clutter — silhouette stands out." },
      { name: "Open Office Floor", description: "Seekers cut sightlines across desks." },
    ],
    colorPalette: ["#C4B896", "#E8DCC8", "#B8A882", "#D4C4A0", "#A89870"],
  },
  {
    slug: "penguin-hotel",
    name: "Penguin Hotel",
    tagline: "Ice ballroom · Themed props",
    difficulty: "Medium",
    playerCount: "4–12 players",
    themeColor: "#4A90D9",
    accentColor: "#A8D4F0",
    imageUrl: MAP_IMAGES["penguin-hotel"],
    description:
      "Polar resort aesthetic with ice sculptures, plush rooms, and a chaotic ballroom. Blue-white palette with strong prop mimic opportunities.",
    tips: [
      "Switch between ice blue and white often near sculptures.",
      "Ballroom is seeker-favored — cross fast or use ceiling/rafters.",
      "Plush rooms reward object mimic poses.",
      "Pool tiles are highly reflective — minimize time there.",
    ],
    hotspots: [
      { name: "Ice Sculpture Lobby", description: "Signature blend zone behind sculptures.", type: "hot" },
      { name: "Plush Gallery Room", description: "Dense props and bookcases.", type: "hot" },
      { name: "Pool Deck", description: "Reflections expose movement instantly.", type: "danger" },
    ],
    dangerZones: [
      { name: "Ballroom Center", description: "Balloons and statues but constant traffic." },
      { name: "Open Hallways", description: "Long sightlines between themed doors." },
    ],
    colorPalette: ["#4A90D9", "#A8D4F0", "#FFFFFF", "#E8F4FC", "#2E6BA8"],
  },
  {
    slug: "cold-storage",
    name: "Cold Storage",
    tagline: "Industrial shelves · Expert map",
    difficulty: "Expert",
    playerCount: "4–8 players",
    themeColor: "#6B8FA3",
    accentColor: "#B0C9D6",
    imageUrl: MAP_IMAGES["cold-storage"],
    description:
      "Metal shelving, meat props, and cold blue-gray tones. Almost no decorative clutter — positioning and shelf shadows do the work.",
    tips: [
      "Cold steel gray is mandatory — warm tones pop instantly.",
      "Shelf gaps are tight — time your entry and exit.",
      "Frost on the floor can telegraph movement.",
      "Pipe corners are deeper value — emergency cover only.",
    ],
    hotspots: [
      { name: "Meat Shelf Row", description: "Highest-rated community zone on this map.", type: "hot" },
      { name: "Rear Shelf Depth", description: "Back row with lowest seeker check rate.", type: "hot" },
      { name: "Loading Bay", description: "Only exit lane — extremely exposed.", type: "danger" },
    ],
    dangerZones: [
      { name: "Loading Platform", description: "Open floor with nowhere to break outline." },
      { name: "Aisle Crossings", description: "Seekers pre-aim down main lanes." },
    ],
    colorPalette: ["#6B8FA3", "#B0C9D6", "#4A6B7A", "#D4E4EC", "#3A5563"],
  },
  {
    slug: "brick-loft",
    name: "Brick Loft",
    tagline: "Exposed brick · Industrial loft",
    difficulty: "Medium",
    playerCount: "4–10 players",
    themeColor: "#A0522D",
    accentColor: "#CD853F",
    imageUrl: MAP_IMAGES["brick-loft"],
    description:
      "Exposed brick, iron stairs, and vintage furniture. Warm browns and oranges with strong vertical lines from beams and pipes.",
    tips: [
      "Brick hue shifts from deep brown to orange-red — sample per wall.",
      "Second floor gives seekers height advantage.",
      "Pipes match brick value — strong temporary cover.",
      "Window walls are lethal in daylight rounds.",
    ],
    hotspots: [
      { name: "Brick Beam Gap", description: "Horizontal lines swallow silhouettes.", type: "hot" },
      { name: "Pipe Cluster", description: "Industrial crawl spaces under pipes.", type: "hot" },
      { name: "Stairwell", description: "Vertical chase arena — avoid camping.", type: "danger" },
    ],
    dangerZones: [
      { name: "Second Floor Open Floor", description: "360° sightlines from iron railings." },
      { name: "Window Wall", description: "Backlit players glow." },
    ],
    colorPalette: ["#A0522D", "#CD853F", "#8B4513", "#D2691E", "#5C3317"],
  },
];

export function getMapBySlug(slug: string): GameMap | undefined {
  return maps.find((m) => m.slug === slug);
}
