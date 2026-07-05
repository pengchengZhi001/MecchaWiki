import type { WorkshopSeoContent } from "./workshop-seo-content";

/**
 * Auto-generated launch SEO stubs — run `npm run generate:launch-guides` after
 * `npm run fetch:workshop` to refresh first-week guides for new maps.
 */
export const LAUNCH_CONTENT: Record<string, WorkshopSeoContent> = {
  "low-poly-mini-town": {
    tagline: "Compact low-poly · 4 colors · Launch guide",
    overview:
      "Low Poly Mini Town is a compact low-poly town from Restaurant Building creator Zeminah. Four colors in a small footprint create fast rounds with tight decision space — ideal for groups scouting a fresh workshop layout before competitive picks.",
    whyPlay:
      "Newly listed with rising subscriptions — this launch guide covers prep-phase scouting before verified hiding spot database entries exist. Small maps teach sampling speed; every wrong tone is visible within one seeker sweep.",
    tips: [
      "Four colors only — sample each building facade during your first prep walk.",
      "Low-poly edges create hard value steps; sample shadow sides, not sunlit faces.",
      "Rooftop silhouettes break outlines if you match roof gray exactly.",
      "Central plaza is a rotation path, not a home — cross quickly or die.",
      "Private lobby first — public seekers learn this layout within two rounds.",
    ],
    bestColors: ["Roof Gray", "Wall Cream", "Path Stone", "Trim Brown"],
    commonMistakes: [
      "Camping open plaza without prop cover",
      "One sample for all four building tones",
      "Ignoring rooftop vertical play on a small map",
      "Hosting public before scouting spawn fairness",
    ],
    hotspots: [
      { name: "Building Corner Stack", description: "Hard low-poly corners break outlines at crouch height.", type: "hot" },
      { name: "Alley Between Blocks", description: "Narrow path with dual-tone walls — strong rotation route.", type: "hot" },
      { name: "Rooftop Lip", description: "Vertical play if geometry allows flat pose on roof edge.", type: "neutral" },
    ],
    dangerZones: [
      { name: "Central Plaza", description: "Open sightlines — swept every round on small maps." },
      { name: "Spawn Entry", description: "First seeker pass always checks spawn approach." },
    ],
    lobbySize: "4–8 players",
    seekerLean: "Balanced",
    comments: [
      { author: "LaunchScout", text: "Four colors makes this a great warmup before Minecraft or Meeting Room." },
    ],
  },
  "maplestory-lacheln": {
    tagline: "MapleStory town · 6 colors · Launch guide",
    overview:
      "Maplestory Lacheln recreates the MapleStory town with prop-dense rooms and colorful MMO aesthetics. Six colors spread across market stalls, buildings, and outdoor paths — from the same creator as the Minecraft map.",
    whyPlay:
      "Rising community interest makes this a priority launch guide. MMO-style prop density rewards prop mimic clusters; seekers with MapleStory background predict stall layouts.",
    tips: [
      "Market stall awnings offer dual-tone cover — sample fabric, not wood trim.",
      "Outdoor paths shift value from building interiors — re-sample at every door.",
      "NPC-scale props break outlines when you match local saturation.",
      "Town center is high traffic — rotate to side alleys after round one.",
      "Check Steam Workshop comments for spawn fixes from the creator.",
    ],
    bestColors: ["Stall Fabric", "Stone Path", "Building Trim", "Awning Blue", "Wood Brown", "Sign Accent"],
    commonMistakes: [
      "Camping town center without stall prop cover",
      "Bright MMO accent colors on shadowed paths",
      "Skipping prep walk on a six-color map",
      "Copying Minecraft village spots — layout differs",
    ],
    hotspots: [
      { name: "Market Stall Row", description: "Dense props and awnings at default camera height.", type: "hot" },
      { name: "Side Alley", description: "Lower traffic between main zones.", type: "hot" },
      { name: "Building Entrance", description: "Transition zone for color re-sampling.", type: "neutral" },
    ],
    dangerZones: [
      { name: "Town Square", description: "Wide open with long sightlines." },
      { name: "Main Path Crossing", description: "Rotation hub checked every sweep." },
    ],
    lobbySize: "6–10 players",
    seekerLean: "Balanced",
    comments: [
      { author: "MapleMain", text: "Stall row survived two sweeps when I sampled awning blue, not path stone." },
    ],
  },
  "restaurant-building": {
    tagline: "Messy restaurant · 5 colors · Launch guide",
    overview:
      "Restaurant Building is a cluttered restaurant interior with storage and bathroom zones. Table stacks and kitchen props create strong silhouette-breaking shapes in tight spaces — five dominant tones across dining and back-of-house areas.",
    whyPlay:
      "Launch-week favorite for prop mimic practice that transfers to Meeting Room and official Brick Loft. Messy aesthetics mean no two table arrangements look identical — creative pose options for early subscribers.",
    tips: [
      "Sample tablecloth, not metal chair legs — value mismatch pops instantly.",
      "Kitchen storage clutter rewards crouch poses behind shelving.",
      "Bathroom tile plus grout needs dual sampling like Mansion bathrooms.",
      "Dining room center is seeker-favored — hug walls and booth backs.",
      "Read recent Workshop comments for exploit patches from Zeminah.",
    ],
    bestColors: ["Tablecloth White", "Wood Trim", "Tile Gray", "Booth Fabric", "Kitchen Steel"],
    commonMistakes: [
      "Camping open dining floor without booth cover",
      "Metal chair sample on fabric booth pose",
      "Ignoring bathroom zone color shift",
      "Public lobby before learning choke points",
    ],
    hotspots: [
      { name: "Booth Back Row", description: "Fabric props with controlled sightlines.", type: "hot" },
      { name: "Kitchen Storage", description: "Shelf clutter breaks outlines at crouch height.", type: "hot" },
      { name: "Bathroom Alcove", description: "Tile dual-tone zone — re-sample grout separately.", type: "neutral" },
    ],
    dangerZones: [
      { name: "Open Dining Floor", description: "Minimal prop cover — swept first." },
      { name: "Front Entrance", description: "High-traffic spawn approach." },
    ],
    lobbySize: "4–10 players",
    seekerLean: "Hider-favored",
    comments: [
      { author: "KitchenRat", text: "Booth backs still strong — sample fabric undertone, not highlight." },
    ],
  },
  "mitas-apartment": {
    tagline: "MiSide apartment · 6 colors · Launch guide",
    overview:
      "Mita's Apartment recreates the MiSide apartment with exploration-heavy layout and detailed interior rooms. Six colors across bedroom, living space, and corridor props — IP familiarity helps hiders orient during prep.",
    whyPlay:
      "High subscription growth makes this a launch priority. Dense interior props reward prop mimic like Mansion but with anime-flat color blocks — seekers need disciplined room-by-room sweeps.",
    tips: [
      "Bedroom plush zones favor prop mimic — sample plush gray-pink, not wall white.",
      "Corridor transitions need re-sampling — flat anime walls shift value subtly.",
      "Under-furniture poses work like Mansion bedroom meta.",
      "Living room center is seeker-favored — rotate to side rooms.",
      "Creator fujinn may patch geometry from Workshop comments — check before tournaments.",
    ],
    bestColors: ["Wall White", "Plush Gray", "Wood Floor", "Fabric Pink", "Trim Blue", "Shadow Gray"],
    commonMistakes: [
      "Camping living room center without furniture cover",
      "One white sample for all rooms",
      "Ignoring under-bed and desk plush variants",
      "Skipping prep walk on exploration-heavy layout",
    ],
    hotspots: [
      { name: "Bedroom Plush Cluster", description: "Prop-dense zone with low light.", type: "hot" },
      { name: "Desk Corner", description: "Controlled sightlines with dual-tone walls.", type: "hot" },
      { name: "Corridor Niche", description: "Rotation path between main rooms.", type: "neutral" },
    ],
    dangerZones: [
      { name: "Living Room Center", description: "Open sightlines with minimal cover." },
      { name: "Front Door Entry", description: "First sweep zone from spawn." },
    ],
    lobbySize: "6–10 players",
    seekerLean: "Balanced",
    comments: [
      { author: "MiSideFan", text: "Plush cluster round survived — sample shadow gray on wall first." },
    ],
  },
};
