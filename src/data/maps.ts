/** Local map hero images (from Steam store screenshots + press stills for newest maps). */
const MAP_IMAGES: Record<string, string> = {
  mansion: "/images/maps/steam-0.jpg",
  "indoor-country": "/images/maps/steam-1.jpg",
  sewer: "/images/maps/steam-4.jpg",
  backrooms: "/images/maps/steam-3.jpg",
  "penguin-hotel": "/images/maps/steam-7.jpg",
  sugarland: "/images/maps/steam-2.jpg",
  osaka: "/images/maps/steam-8.jpg",
  "cold-storage": "/images/maps/steam-5.jpg",
  "brick-loft": "/images/maps/steam-6.jpg",
  egypt: "/images/maps/egypt.jpg",
  "hikakin-museum": "/images/maps/hikakin-museum.jpg",
  "death-burger": "/images/maps/death-burger.jpg",
  greece: "/images/maps/greece.jpg",
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
    slug: "indoor-country",
    name: "Indoor Country",
    tagline: "Rustic farm · Beginner-friendly",
    difficulty: "Easy",
    playerCount: "4–12 players",
    themeColor: "#6B8E23",
    accentColor: "#C4A35A",
    imageUrl: MAP_IMAGES["indoor-country"],
    description:
      "Rustic farm interior with hay bales, green crates, cow standees, and teal accent walls. Community map databases rate it Beginner alongside Mansion — large readable color blocks make eyedropper practice forgiving.",
    tips: [
      "Sample cow standees and hay-adjacent surfaces when mimicking props.",
      "Green crates and teal walls are distinct zones — re-sample when rotating.",
      "Clutter around hay stacks breaks outline better than open barn floor.",
      "Control guides note Indoor Country standees for eyedropper practice.",
    ],
    hotspots: [
      { name: "Hay Stack Clusters", description: "Visual noise hides outline mistakes.", type: "hot" },
      { name: "Cow Standee Zone", description: "Prop mimic opportunities near standees.", type: "hot" },
      { name: "Open Barn Floor", description: "Wide sightlines — cross quickly.", type: "danger" },
    ],
    dangerZones: [
      { name: "Central Open Floor", description: "Minimal clutter — value errors show instantly." },
      { name: "Door Thresholds", description: "Seekers pre-aim transitions between rooms." },
    ],
    colorPalette: ["#6B8E23", "#C4A35A", "#8FBC8F", "#2E8B8B", "#D2B48C"],
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
      "Polar resort aesthetic with ice sculptures, plush rooms, and a chaotic ballroom. Blue-white palette with strong prop mimic opportunities. v2.7.0 added random furniture/layout elements — re-test database spots each lobby rather than memorizing one fixed path.",
    tips: [
      "Switch between ice blue and white often near sculptures.",
      "Ballroom is seeker-favored — cross fast or use ceiling/rafters.",
      "Plush rooms reward object mimic poses.",
      "Pool tiles are highly reflective — minimize time there.",
      "v2.7.0 random elements: scout prop positions during prep before committing.",
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
    slug: "sugarland",
    name: "Sugarland",
    tagline: "Candy world · Saturated colors",
    difficulty: "Medium",
    playerCount: "4–10 players",
    themeColor: "#FF69B4",
    accentColor: "#98FB98",
    imageUrl: MAP_IMAGES["sugarland"],
    description:
      "Bright candy-themed map added in v1.4.0 (June 17, 2026). Saturated pinks, mints, and chocolate browns — community sources rate it Intermediate. Confident color-blocking reads believable; sloppy paint stands out on bright surfaces.",
    tips: [
      "Commit to one candy surface color — mid-blend zones read as errors.",
      "Saturated hues punish white gaps at joints more than muted maps.",
      "Large flat candy panels need pose discipline — less clutter than Mansion.",
      "Specific spots still being verified post-launch — test and screenshot.",
    ],
    hotspots: [
      { name: "Candy Wall Panels", description: "Flat saturated blocks — fast sampling.", type: "hot" },
      { name: "Chocolate Trim Zones", description: "Dual-tone brown/pink edges.", type: "neutral" },
      { name: "Open Candy Floor", description: "Bright open areas expose value errors.", type: "danger" },
    ],
    dangerZones: [
      { name: "Central Bright Zones", description: "High saturation exposes unpainted white." },
      { name: "Long Open Aisles", description: "Seekers sweep bright corridors quickly." },
    ],
    colorPalette: ["#FF69B4", "#98FB98", "#D2691E", "#FFB6C1", "#90EE90"],
  },
  {
    slug: "osaka",
    name: "Osaka",
    tagline: "Japan streets · Compact urban",
    difficulty: "Hard",
    playerCount: "4–8 players",
    themeColor: "#C41E3A",
    accentColor: "#1E3A5F",
    imageUrl: MAP_IMAGES["osaka"],
    description:
      "Japan-themed urban map added in v1.7.0 (June 22, 2026), reworked in v2.5.0 (July 2026). IGN describes it as the smallest official map — signage, storefronts, lanterns, truck bed, and octopus statue zones. Re-test database spots after the rework; layout and clutter zones may have shifted.",
    tips: [
      "Smallest map — pick spots early; open ground is risky.",
      "Sample exact urban surface — mixed pixels on signs and crates.",
      "Vertical signage and octopus statue zones reward overhead hides.",
      "Truck bed/underneath needs shadow-matched paint per IGN.",
    ],
    hotspots: [
      { name: "Shop Wall Clusters", description: "Fans, crates, and storefront clutter.", type: "hot" },
      { name: "Signage & Octopus Statue", description: "Vertical hides above default sightline.", type: "hot" },
      { name: "Truck Open Area", description: "Shadow paint critical — lit vs shaded metal.", type: "neutral" },
    ],
    dangerZones: [
      { name: "Open Street Center", description: "Compact map — seekers recycle paths fast." },
      { name: "Lit Signage Fronts", description: "Neon-adjacent blues expose value mismatch." },
    ],
    colorPalette: ["#C41E3A", "#1E3A5F", "#F5F5DC", "#2F4F4F", "#FFD700"],
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
  {
    slug: "egypt",
    name: "Egypt",
    tagline: "Desert tombs · Tomb palette",
    difficulty: "Hard",
    playerCount: "4–10 players",
    themeColor: "#C4A35A",
    accentColor: "#2E5A4C",
    imageUrl: MAP_IMAGES["egypt"],
    description:
      "Official desert / tomb-themed map added in v2.7.0 (July 12, 2026 per Steam News). Sandy stone, pillar shadows, hieroglyph walls, and prop clusters reward value-matched paints over bright accent mistakes. Early community consensus: vertical pillars and alcove depth beat open sand floors — re-verify spots as lobby meta settles.",
    tips: [
      "Sample stone and sand separately — warm floor vs cool pillar shadow are different values.",
      "Pillar and statue plinths sit above default seeker eye height when you climb during prep.",
      "Hieroglyph walls need pattern-aligned poses; flat fill on busy relief reads as a sticker.",
      "Open sand corridors are transit only — camp clutter or vertical geometry instead.",
    ],
    hotspots: [
      { name: "Pillar Shadow Rings", description: "Column bases and mid-height wraps hide outline in dark stone.", type: "hot" },
      { name: "Sarcophagus / Alcove Depth", description: "Recessed props break silhouette from foyer angles.", type: "hot" },
      { name: "Open Sand Floor", description: "Bright value + no clutter — seekers clear first.", type: "danger" },
    ],
    dangerZones: [
      { name: "Central Courtyard Sand", description: "Wide sightlines punish imperfect paint." },
      { name: "Lit Hieroglyph Fronts", description: "Strong front lighting exposes value mismatch on relief walls." },
    ],
    colorPalette: ["#C4A35A", "#2E5A4C", "#8B6914", "#E8D5A3", "#3D2B1F"],
  },
  {
    slug: "hikakin-museum",
    name: "HIKAKIN Museum",
    tagline: "Collab museum · Special gimmicks",
    difficulty: "Medium",
    playerCount: "4–12 players",
    themeColor: "#1A1A2E",
    accentColor: "#E8B923",
    imageUrl: MAP_IMAGES["hikakin-museum"],
    description:
      "Official collaboration map with YouTuber HIKAKIN, shipped in v2.6.0 (July 10–11, 2026). Museum halls feature HIKAKIN and SEIKIN photo walls, Misokin and ONICHA exhibit props, plus collab-exclusive gimmicks. Random lottery excludes collaboration maps by default in v2.7.0 — enable manually in map lottery settings. v2.7.0 also fixed wall-stuck collision on this map.",
    tips: [
      "Photo-wall mimics need frame + print dual sampling — white mat borders expose elbows.",
      "Exhibit cases and Misokin displays reward prop-mimic poses at crouch height.",
      "Do not force deep wall clips — v2.7.0 patched stuck-in-wall collision; use surface blends.",
      "Collab lobbies are loud and meme-heavy — rotate spots after one viral find.",
    ],
    hotspots: [
      { name: "HIKAKIN / SEIKIN Photo Walls", description: "Portrait rows and gallery lighting for flat wall blends.", type: "hot" },
      { name: "Misokin & ONICHA Exhibits", description: "Themed prop clusters break outline like Art Gallery canvases.", type: "hot" },
      { name: "Open Museum Floor", description: "Wide halls favor seekers after first photo-wall check.", type: "danger" },
    ],
    dangerZones: [
      { name: "Central Atrium", description: "Long sightlines across exhibit floors." },
      { name: "Glass Case Fronts", description: "Specular glass punishes high metallic paint." },
    ],
    colorPalette: ["#1A1A2E", "#E8B923", "#F5F5F5", "#4A5568", "#C41E3A"],
  },
  {
    slug: "death-burger",
    name: "Death Burger",
    tagline: "Burger horror park · Carnival clutter",
    difficulty: "Hard",
    playerCount: "4–12 players",
    themeColor: "#C41E3A",
    accentColor: "#FFD700",
    imageUrl: MAP_IMAGES["death-burger"],
    description:
      "Official burger-chain-themed horror amusement park added in v2.8.0 (July 17, 2026 per Steam News). Japanese outlets 4gamer and Game*Spark describe clown mascots, eyeball burgers, and a fried-chicken merry-go-round amid loud signage and saturated props. Early community meta favors dual-color boundary paints and prop-mimic clutter over flat wall fills — treat every database spot as experimental until lobby screenshots confirm it.",
    tips: [
      "Paint across color boundaries — sign edge + wall, not one flat tone (Gamee blog v2.8.0 tips).",
      "Prop-mimic beside clown mascots, menu boards, and food signage beats open walkway camping.",
      "Have a friend check your silhouette from seeker approach angles — loud scenery still exposes outlines.",
      "Open carnival midways are transit only; commit to signage clusters or ride-base clutter during prep.",
    ],
    hotspots: [
      { name: "Clown Mascot Row", description: "Dense mascot props break outline when dual-sampled.", type: "hot" },
      { name: "Fried-Chicken Carousel Base", description: "Ride clutter and vertical posts hide crouch poses.", type: "hot" },
      { name: "Open Midway Walkway", description: "Bright open sightlines — cross fast or avoid.", type: "danger" },
    ],
    dangerZones: [
      { name: "Central Midway Strip", description: "Wide sightlines punish imperfect paint on saturated floors." },
      { name: "Lit Signage Fronts", description: "Neon-adjacent reds and yellows expose value mismatch." },
    ],
    colorPalette: ["#C41E3A", "#FFD700", "#FF6B35", "#2D1B0E", "#F5F5DC"],
  },
  {
    slug: "greece",
    name: "Greece",
    tagline: "Santorini streets · Newest official map",
    difficulty: "Hard",
    playerCount: "4–10 players",
    themeColor: "#1E5F8A",
    accentColor: "#F5F5F0",
    imageUrl: MAP_IMAGES["greece"],
    description:
      "Official Santorini-inspired map added in v3.0.0 (July 20, 2026 per Steam News). Japanese outlets Denfaminicogamer, 4gamer, and Game*Spark describe blue-and-white contrasting buildings, beautiful sunset lighting, and a compact globe-shaped layout with tight streets. Community chatter (including Chinese and JP social threads) compares the central circular pit to Overwatch's Ilios — treat that as meme lore, not a verified hide. Early meta pairs white plaster / blue dome dual-samples with v2.9.0 emissive (glow) paint on lit sunset surfaces.",
    tips: [
      "Dual-sample white plaster and blue dome/trim — flat single fills read as stickers on Santorini contrast (JP press theme).",
      "Sunset-lit doorways and warm walls pair with v2.9.0 emissive paint — match glow intensity to the lit object, not max emissive everywhere.",
      "Tight alley nooks beat open courtyard floors; Game*Spark notes a small, intricate layout.",
      "Central pit rim is high-meme traffic after Ilios comparisons — rotate early if seekers spam the hole.",
    ],
    hotspots: [
      { name: "Blue Dome / Roof Trim", description: "Blue-on-white contrast zones for dual-tone blends.", type: "hot" },
      { name: "Sunset Alley Nooks", description: "Tight street recesses with warm evening light.", type: "hot" },
      { name: "Central Circular Pit", description: "Open sightlines + meme traffic after Ilios comparisons.", type: "danger" },
    ],
    dangerZones: [
      { name: "Open Courtyard Floor", description: "Bright white floors expose value and outline mistakes." },
      { name: "Pit Rim Camping", description: "Seekers check the hole early once social clips spread." },
    ],
    colorPalette: ["#1E5F8A", "#F5F5F0", "#E8C07A", "#4A90A4", "#2C3E50"],
  },
];

export function getMapBySlug(slug: string): GameMap | undefined {
  return maps.find((m) => m.slug === slug);
}
