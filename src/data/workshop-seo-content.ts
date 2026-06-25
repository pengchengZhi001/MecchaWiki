import type { WorkshopMap } from "./workshop";
import { generateWorkshopSeoFromMap } from "./workshop-seo-generator";

export type WorkshopSeoContent = {
  tagline: string;
  overview: string;
  whyPlay: string;
  tips: string[];
  bestColors: string[];
  commonMistakes: string[];
  hotspots: { name: string; description: string; type: "hot" | "danger" | "neutral" }[];
  dangerZones: { name: string; description: string }[];
  lobbySize: string;
  seekerLean: "Hider-favored" | "Balanced" | "Seeker-favored";
  comments: { author: string; text: string }[];
};

const CONTENT: Record<string, WorkshopSeoContent> = {
  minecraft: {
    tagline: "Blocky village · Familiar IP layout",
    overview:
      "The Minecraft workshop map recreates a recognizable blocky village with grass, stone, wood, and crafting-table props. Zone separation is clear — outdoor grass versus indoor wood tones — which makes color sampling straightforward once you learn the palette. Prop density is high enough for silhouette-breaking hides but sightlines stay manageable for medium-sized lobbies.",
    whyPlay:
      "Minecraft is the community's default workshop pickup for groups learning custom maps. The IP familiarity helps new players orient quickly, while six distinct color zones still reward disciplined sampling. Seekers with Minecraft background predict rotation paths — hiders who know the layout gain an edge in prop mimic spots near trees and crafting tables.",
    tips: [
      "Sample grass green outdoors and switch to wood brown before entering any structure.",
      "Tree trunks and leaf blocks break outlines — use flat poses against bark texture.",
      "Crafting tables offer dual-tone cover; match the top brown, not the side grain.",
      "Avoid open grass fields — seekers sweep the village center every round.",
      "Stone paths read lighter than grass; re-sample when crossing zones.",
    ],
    bestColors: ["Grass Green", "Oak Wood Brown", "Stone Gray", "Dirt Brown", "Leaf Green", "Cobble Gray"],
    commonMistakes: [
      "Using one grass sample for the entire map — wood interiors need re-sampling",
      "Camping open village center where blocky props don't break your outline",
      "Standing on stone paths with grass-colored paint",
      "Ignoring vertical play on tree canopies — seekers eventually look up",
    ],
    hotspots: [
      { name: "Village Tree Line", description: "Blocky trunks and leaf clusters break outlines at default camera height.", type: "hot" },
      { name: "Crafting Table Corner", description: "Dual-tone wood props reward precise sampling.", type: "hot" },
      { name: "Indoor Wood Rooms", description: "Warm brown palette with furniture stacks — strong mid-game zone.", type: "neutral" },
    ],
    dangerZones: [
      { name: "Open Grass Field", description: "Wide sightlines with minimal prop cover — seekers spot value mismatches fast." },
      { name: "Village Crossroads", description: "High-traffic intersection swept every round." },
    ],
    lobbySize: "4–12 players",
    seekerLean: "Balanced",
    comments: [
      { author: "BlockMain", text: "Best workshop map for teaching friends custom layouts. Six colors but zones are obvious." },
      { author: "VillageRat", text: "Tree line hides still work after the last patch. Sample bark, not leaves." },
    ],
  },
  "cs2-mirage": {
    tagline: "FPS classic · Lane-based sweeps",
    overview:
      "CS2 Mirage brings Counter-Strike's iconic sand-toned lanes, door chokes, and elevation changes into Mecha Chameleon. The layout rewards players who understand FPS callouts — mid control, A-site angles, and connector paths all translate. Five dominant colors with clear trim accents make this one of the most competitive workshop picks.",
    whyPlay:
      "If your lobby includes FPS veterans, Mirage turns seeker sweeps into organized lane clears. Hiders who know CS2 rotate like CS players; seekers hold mirage angles by habit. The five-color palette is tight enough to punish lazy sampling but zone-separated enough for skilled hiders to survive full rounds.",
    tips: [
      "Sand tan dominates mid — sample from wall trim, not floor tiles.",
      "Door frames create choke points; cross quickly or don't camp open.",
      "Elevation changes at A-site favor crouch poses against ledge edges.",
      "Seekers sweep mid → connector → site in order — rotate before second pass.",
      "Dark trim accents work as emergency re-sample colors near corners.",
    ],
    bestColors: ["Sand Tan", "Warm Trim Brown", "Concrete Gray", "Door Wood", "Shadow Gray"],
    commonMistakes: [
      "Camping mid open without matching floor tile value",
      "Using bright colors that pop against the warm sand palette",
      "Ignoring connector rotation — seekers always check it second",
      "Standing at default height on elevated ledges where your feet show",
    ],
    hotspots: [
      { name: "A-Site Ledge", description: "Elevation + trim colors create natural cover at crouch height.", type: "hot" },
      { name: "Connector Corridor", description: "Tight choke with dual-tone walls — strong rotation path.", type: "hot" },
      { name: "Mid Boxes", description: "Prop stacks break outlines if you match box tan exactly.", type: "neutral" },
    ],
    dangerZones: [
      { name: "Mid Open", description: "Wide lane with minimal cover — organized seeker sweeps clear this fast." },
      { name: "Spawn to Mid Path", description: "First sweep route every round." },
    ],
    lobbySize: "6–12 players",
    seekerLean: "Seeker-favored",
    comments: [
      { author: "MirageMain", text: "Organized seeker lobbies love this map. Hiders need real rotation discipline." },
      { author: "CSConvert", text: "Knowing CS callouts is basically a cheat code for seeker sweeps here." },
    ],
  },
  "meeting-room": {
    tagline: "Modern office · Dense prop clutter",
    overview:
      "Meeting Room is a realistic office interior spanning reception, cafeteria, and dense cubicle zones. Furniture stacks, monitors, and office props create strong silhouette-breaking opportunities in tight spaces. Five colors with neutral grays and wood accents make it competitive without being punishing.",
    whyPlay:
      "Office maps test prop mimic skills at a level official maps rarely reach. Chair stacks, desk edges, and partition walls give hiders multiple pose options per room. The realistic layout attracts serious lobbies that run organized seeker sweeps — great for players graduating from Mansion fundamentals.",
    tips: [
      "Reception desk offers dual-tone cover — sample the counter top, not the floor.",
      "Cubicle partitions break outlines at crouch height; avoid standing in open aisles.",
      "Cafeteria tables create prop mimic opportunities — match table edge color.",
      "Monitor bezels are dark value anchors — use for emergency re-sampling.",
      "Conference room corners have the best sightline control in the map.",
    ],
    bestColors: ["Office Gray", "Desk Wood Brown", "Carpet Beige", "Monitor Black", "Wall White"],
    commonMistakes: [
      "Camping open cafeteria without matching table or chair colors",
      "Using carpet beige in cubicle zones with different floor tone",
      "Standing in main hallway — swept every round without exception",
      "Ignoring monitor stack props that break outline at desk height",
    ],
    hotspots: [
      { name: "Cubicle Maze", description: "Partition walls and desk clutter — core competitive zone.", type: "hot" },
      { name: "Conference Room", description: "Corner positions with controlled sightlines.", type: "hot" },
      { name: "Reception Counter", description: "Dual-tone desk cover at spawn-adjacent zone.", type: "neutral" },
    ],
    dangerZones: [
      { name: "Main Hallway", description: "Central corridor swept every round — cross, don't camp." },
      { name: "Open Cafeteria Center", description: "Wide tables but open sightlines from all angles." },
    ],
    lobbySize: "4–10 players",
    seekerLean: "Balanced",
    comments: [
      { author: "OfficeRat", text: "Cubicle maze is underrated. Five colors but props do the heavy lifting." },
      { author: "DeskJockey", text: "Conference room corner survived three seeker passes in a row for me." },
    ],
  },
  "swimming-pool": {
    tagline: "Painted chaos · Meme lobby favorite",
    overview:
      "Swimming Pool is a small, hand-drawn style map with bright colors and cartoon walls. The painted aesthetic creates a chaotic funny-round atmosphere where movement tells increase and color discipline still wins — but seekers often laugh through sweeps instead of running disciplined scans.",
    whyPlay:
      "Perfect warmup map before grinding official layouts or competitive workshop picks. The bright palette and absurd proportions make content-creation rounds fun, while six colors still train sampling speed. Community favorite for chaotic group nights when nobody wants Cold Storage-level tension.",
    tips: [
      "Pool tile blue is the dominant outdoor color — sample from deck edge, not water.",
      "Hand-drawn walls have value shifts — re-sample at every wall segment.",
      "Bright colors punish lazy sampling harder than they look.",
      "Small map size means seekers complete full sweeps fast — rotate often.",
      "Use prop mimic on pool chairs and lane dividers for meme spots.",
    ],
    bestColors: ["Pool Tile Blue", "Deck White", "Wall Yellow", "Lane Red", "Hand-Drawn Blue", "Cartoon Green"],
    commonMistakes: [
      "Treating this as a serious competitive map — it's meme-first",
      "Using one blue sample for deck and pool tile zones",
      "Camping pool center where every seeker path crosses",
      "Overacting prop mimic poses — funny maps amplify movement tells",
    ],
    hotspots: [
      { name: "Pool Deck Edge", description: "Tile + deck dual-tone with chair props nearby.", type: "hot" },
      { name: "Lane Divider Wall", description: "Cartoon walls with strong color blocks.", type: "neutral" },
      { name: "Changing Room Corner", description: "Tight space with painted walls — good for quick hides.", type: "hot" },
    ],
    dangerZones: [
      { name: "Pool Center", description: "Open water zone with no prop cover — instant spot." },
      { name: "Main Entry Ramp", description: "Every seeker enters here first." },
    ],
    lobbySize: "4–8 players",
    seekerLean: "Hider-favored",
    comments: [
      { author: "PoolParty", text: "Our group's go-to warmup map. Nobody takes it seriously and that's the point." },
      { author: "MemeLord", text: "Chair stack spot by the diving board is content gold every time." },
    ],
  },
  skeld: {
    tagline: "Among Us classic · Tight corridors",
    overview:
      "Skeld recreates the Among Us ship layout with engine room, medbay, reactor corridors, and familiar task-room logic. Four colors compress the decision space — wrong samples stand out immediately. Tight rooms favor chair-stack style hides and fast seek sweeps.",
    whyPlay:
      "Skeld is the workshop IP map with the tightest color palette. Four dominant tones mean sampling speed matters more than pose creativity. Among Us fans rotate using task-room logic; newcomers get punished quickly. Excellent for training fast eyedropper discipline after Mansion basics.",
    tips: [
      "Engine room pipes offer dark value cover — sample rust gray, not wall white.",
      "Medbay beds create prop mimic opportunities at crouch height.",
      "Reactor corridor is narrow — single-file sweeps, rotate before second pass.",
      "Four colors means one wrong sample is fatal — double-check before locking.",
      "Electrical room corners have the best sightline control on the ship.",
    ],
    bestColors: ["Ship Gray", "Floor Dark Gray", "Pipe Metal", "Wall White"],
    commonMistakes: [
      "Using wall white in engine room where floor gray dominates",
      "Camping reactor corridor center — no prop cover, swept instantly",
      "Assuming IP familiarity means easy hides — four colors is brutal",
      "Ignoring medbay bed props for flat-pose mimic",
    ],
    hotspots: [
      { name: "Engine Room Pipes", description: "Dark metal tones with pipe geometry for outline breaking.", type: "hot" },
      { name: "Medbay Beds", description: "Prop mimic at bed height — classic Skeld zone.", type: "hot" },
      { name: "Electrical Corner", description: "Tight sightline control in smallest room.", type: "neutral" },
    ],
    dangerZones: [
      { name: "Central Corridor", description: "Main ship hallway — crossed and swept every round." },
      { name: "Reactor Open Floor", description: "Minimal props in the reactor room center." },
    ],
    lobbySize: "4–10 players",
    seekerLean: "Balanced",
    comments: [
      { author: "SusMain", text: "Four colors sounds easy until you're in reactor with the wrong gray." },
      { author: "CrewmateKing", text: "Medbay bed mimic still works. Among Us players know this map by heart." },
    ],
  },
  "fnaf-security-breach": {
    tagline: "Horror atmosphere · Dark machinery",
    overview:
      "FNAF Security Breach's Parts & Service area brings eerie machinery, dark metal tones, and industrial horror atmosphere. Five desaturated colors favor hiders who paint dark values and use machinery props for silhouette breaking. Low light forgives minor sampling errors.",
    whyPlay:
      "Horror workshop maps test nerve and value discipline more than hue matching. The FNAF layout attracts tension-focused lobbies where audio tells matter and slow seek passes give hiders extra time. Dark metal tones mirror Sewer's industrial palette — skills transfer directly.",
    tips: [
      "Dark metal gray is the dominant cover color — sample from machinery, not floor.",
      "Parts bins and conveyor props break outlines at crouch height.",
      "Low light zones forgive minor value mismatches — lean darker.",
      "Seekers move cautiously in horror maps — use the extra seconds.",
      "Avoid reflective metal surfaces — they catch light differently than matte props.",
    ],
    bestColors: ["Dark Metal Gray", "Industrial Black", "Rust Brown", "Concrete Floor", "Shadow Blue-Gray"],
    commonMistakes: [
      "Using bright colors that glow against dark machinery",
      "Camping open floor between conveyor belts — no cover",
      "Moving during seeker passes — audio tells amplify in quiet horror lobbies",
      "Sampling from lit areas when hiding in shadow zones",
    ],
    hotspots: [
      { name: "Parts Bin Row", description: "Machinery props with dark metal tones — core horror zone.", type: "hot" },
      { name: "Conveyor Belt Edge", description: "Industrial geometry breaks outline at low height.", type: "hot" },
      { name: "Service Door Alcove", description: "Shadow depth forgives value errors.", type: "neutral" },
    ],
    dangerZones: [
      { name: "Central Floor Gap", description: "Open space between machinery rows — swept first." },
      { name: "Lit Entrance", description: "Bright spawn area with no dark value cover." },
    ],
    lobbySize: "4–8 players",
    seekerLean: "Hider-favored",
    comments: [
      { author: "HorrorHider", text: "Dark values + slow seek sweeps = free survival time. Love this map." },
      { author: "FNAFFan", text: "Parts bin row is the Sewer ceiling pipe of workshop horror maps." },
    ],
  },
  "simpsons-family-house": {
    tagline: "Iconic living room · Trending IP map",
    overview:
      "The Simpsons Family House recreates the instantly recognizable living room and kitchen with seven distinct colors. High color count rewards patient sampling but the familiar IP layout helps hiders orient quickly. Trending in community lobbies for content creation and casual competitive nights.",
    whyPlay:
      "Seven colors is the upper range for balanced workshop play — this map punishes one-sample hiders while rewarding players who re-sample at every zone transition. The Simpsons props are instantly readable, making prop mimic spots intuitive for content clips. High subscription count means most lobbies have played it before.",
    tips: [
      "Living room orange dominates — sample from couch fabric, not wall.",
      "Kitchen zone shifts to yellow-green — re-sample before entering.",
      "Seven colors means zone transitions are critical — never carry one sample across rooms.",
      "Couch and TV props offer strong prop mimic at sitting height.",
      "Famously readable layout means seekers predict common spots — rotate.",
    ],
    bestColors: ["Couch Orange", "Wall Peach", "Kitchen Yellow", "Floor Brown", "TV Black", "Cabinet Wood", "Carpet Green"],
    commonMistakes: [
      "Using living room orange in the kitchen — instant spot",
      "Camping in front of the TV where seekers check first every round",
      "Ignoring the seven-color complexity — this is not a beginner map",
      "Copying viral clip spots without matching exact prop colors",
    ],
    hotspots: [
      { name: "Couch Corner", description: "Orange fabric with shadow depth — iconic Simpsons zone.", type: "hot" },
      { name: "Kitchen Counter", description: "Yellow-green palette shift with cabinet props.", type: "hot" },
      { name: "Hallway Transition", description: "Zone boundary — re-sample here every time.", type: "neutral" },
    ],
    dangerZones: [
      { name: "Living Room Center", description: "Open floor in front of TV — most-checked spot on the map." },
      { name: "Front Door Entry", description: "Spawn-adjacent zone swept immediately." },
    ],
    lobbySize: "4–10 players",
    seekerLean: "Balanced",
    comments: [
      { author: "DohMain", text: "Seven colors sounds scary but the zones are obvious if you know the show." },
      { author: "ClipHunter", text: "Couch corner spot is content gold. Survived 4/5 rounds last session." },
    ],
  },
  "low-poly-caverns": {
    tagline: "Dark caves · Minimal palette horror",
    overview:
      "Low Poly Caverns is a compact cave camp scene with four desaturated colors and simple geometric shapes. Dark values dominate, creating horror atmosphere similar to Sewer but with low-poly simplicity that makes prop edges sharper and outline mistakes more visible.",
    whyPlay:
      "Four colors in a dark horror setting is a sampling speed test. The low-poly aesthetic means fewer texture gradients to hide in — your sample must match exact flat tones. Small map size creates fast seek sweeps, but dark values give hiders a value-matching advantage seekers often underestimate.",
    tips: [
      "Cave wall gray is the primary cover — sample from flat wall faces.",
      "Campfire zone has warm orange accent — switch samples near fire props.",
      "Low-poly edges are sharp — flat poses align better than angled ones.",
      "Ceiling stalactites offer vertical play if the map geometry allows.",
      "Stay in shadow zones — the campfire lit area exposes value mismatches.",
    ],
    bestColors: ["Cave Gray", "Dark Stone", "Shadow Black", "Campfire Orange"],
    commonMistakes: [
      "Hiding near campfire with cave gray paint — warm/cool mismatch",
      "Using bright colors in a four-color dark map — instant detection",
      "Camping cave entrance where light exposure reveals your value",
      "Assuming low-poly means easy — flat tones are less forgiving",
    ],
    hotspots: [
      { name: "Deep Cave Wall", description: "Dark gray with minimal light exposure — strongest zone.", type: "hot" },
      { name: "Rock Formation Stack", description: "Low-poly geometry breaks outline at crouch height.", type: "hot" },
      { name: "Tent Area", description: "Camp props with dual-tone cover near fabric.", type: "neutral" },
    ],
    dangerZones: [
      { name: "Campfire Circle", description: "Lit zone with warm tones — no dark value cover." },
      { name: "Cave Entrance", description: "Light exposure and high traffic." },
    ],
    lobbySize: "4–8 players",
    seekerLean: "Hider-favored",
    comments: [
      { author: "CaveDweller", text: "Four colors + dark values = free wins if you sample correctly." },
      { author: "PolyFan", text: "Small map but the deep cave wall spot is legit. Don't sleep on it." },
    ],
  },
  "maplestory-lacheln": {
    tagline: "MMO town recreation · Prop-dense rooms",
    overview:
      "Maplestory Lacheln recreates the MapleStory town with prop-dense rooms and colorful MMO aesthetics. Six colors spread across distinct town zones — market stalls, buildings, and outdoor paths. From the same creator as the Minecraft map, with rising community interest.",
    whyPlay:
      "Lacheln offers the prop density of an MMO town without the overwhelming color chaos of eight-tone maps. Six colors with clear zone separation (outdoor path vs building interior vs market) make it a strong mid-tier workshop pick for groups wanting something fresh after Minecraft.",
    tips: [
      "Outdoor stone path differs from building interior wood — re-sample at every door.",
      "Market stall props create prop mimic opportunities at counter height.",
      "Building rooftops may offer vertical play — scout during prep phase.",
      "Colorful MMO aesthetic tempts bright samples — match local value, not saturation.",
      "Town center is high traffic — use side alleys for rotation paths.",
    ],
    bestColors: ["Stone Path Gray", "Building Wood", "Market Red", "Roof Brown", "Grass Green", "Sign Yellow"],
    commonMistakes: [
      "Using outdoor stone gray inside wood buildings",
      "Camping town center market — every seeker path crosses here",
      "Ignoring stall prop mimic in favor of flat wall camping",
      "Assuming new map means unpatrolled spots — community is scouting fast",
    ],
    hotspots: [
      { name: "Market Stalls", description: "Prop-dense counters with multi-tone cover.", type: "hot" },
      { name: "Building Interiors", description: "Wood tones with furniture stacks.", type: "hot" },
      { name: "Side Alley", description: "Low-traffic rotation path between zones.", type: "neutral" },
    ],
    dangerZones: [
      { name: "Town Center Plaza", description: "Open crossing point — swept every round." },
      { name: "Main Gate Entry", description: "Spawn zone with predictable first sweep." },
    ],
    lobbySize: "4–10 players",
    seekerLean: "Balanced",
    comments: [
      { author: "MSFan", text: "Market stall prop mimic is the spot to learn first. Six colors but zones are clear." },
      { author: "SkolasFan", text: "Same creator as Minecraft map — quality props, rising fast in subs." },
    ],
  },
  "restaurant-building": {
    tagline: "Messy dining · Table clutter hides",
    overview:
      "Restaurant Building features a messy restaurant with storage rooms, bathroom, and dense table clutter. Five colors with warm food-service tones create strong hide shapes in tight spaces. Table stacks and kitchen props break outlines effectively at default camera height.",
    whyPlay:
      "Restaurant maps excel at teaching prop mimic in cluttered environments — a skill that transfers to Meeting Room and official Brick Loft. The messy aesthetic means no two table arrangements look identical, giving hiders creative pose options. New listing with strong early community feedback.",
    tips: [
      "Booth seating offers dual-tone cover — sample cushion, not table top.",
      "Kitchen storage has dark value props — switch samples entering back area.",
      "Bathroom tile differs from dining floor — re-sample at the door.",
      "Table clutter breaks outlines — use flat crouch against table edges.",
      "Storage room shelves mirror office cubicle strategy — partition cover.",
    ],
    bestColors: ["Booth Red", "Table Wood", "Floor Tile", "Kitchen Gray", "Bathroom White"],
    commonMistakes: [
      "Using dining room wood tone in the kitchen storage area",
      "Camping open dining center without table prop cover",
      "Ignoring bathroom as a rotation zone — seekers often skip it first pass",
      "Standing instead of crouching at booth height",
    ],
    hotspots: [
      { name: "Booth Row", description: "Cushion + table dual-tone with strong silhouette breaking.", type: "hot" },
      { name: "Kitchen Storage", description: "Dark props and shelf clutter.", type: "hot" },
      { name: "Bathroom Corner", description: "Tile tones with low seeker priority first pass.", type: "neutral" },
    ],
    dangerZones: [
      { name: "Open Dining Floor", description: "Center tables don't break outline from all angles." },
      { name: "Front Entrance", description: "Glass door area with open sightlines." },
    ],
    lobbySize: "4–8 players",
    seekerLean: "Hider-favored",
    comments: [
      { author: "FoodieHider", text: "Booth row is criminally underrated. Table clutter does all the work." },
      { author: "NewMapScout", text: "Bathroom corner saved me twice when seekers cleared dining first." },
    ],
  },
  "the-market": {
    tagline: "Rustic village · Casual-friendly palette",
    overview:
      "The Market is a rustic village scene with market stalls, cottages, and cute palette tones. Five colors with warm earth tones make color matching easy for casual nights. Prop-dense stalls and cottage interiors offer straightforward hides without competitive pressure.",
    whyPlay:
      "The Market is the workshop equivalent of Mansion — forgiving palette, clear zones, and cute aesthetics that keep casual lobbies relaxed. Perfect for groups that want custom map variety without CS2 Mirage-level seeker sweeps. Easy color matching makes it ideal for teaching workshop fundamentals.",
    tips: [
      "Stall awning brown differs from cottage wall beige — re-sample per building.",
      "Market stall counters offer prop mimic at standing height.",
      "Cottage interiors have warm wood tones — sample from floorboards.",
      "Village paths are cobblestone gray — don't use grass tones on paths.",
      "Cute palette tempts lazy sampling — still match exact local value.",
    ],
    bestColors: ["Stall Awning Brown", "Cottage Beige", "Cobblestone Gray", "Grass Green", "Wood Trim"],
    commonMistakes: [
      "Using cottage beige at market stalls — different wood tones",
      "Camping village center crossroads — open and swept often",
      "Underestimating the map because it looks cute — five colors still matter",
      "Ignoring stall prop mimic for flat wall camping",
    ],
    hotspots: [
      { name: "Market Stalls", description: "Awning + counter props with warm earth tones.", type: "hot" },
      { name: "Cottage Interiors", description: "Wood floors and furniture stacks.", type: "hot" },
      { name: "Garden Path", description: "Grass + cobble transition zone.", type: "neutral" },
    ],
    dangerZones: [
      { name: "Village Crossroads", description: "Central open area connecting all zones." },
      { name: "Market Square Center", description: "Wide open with minimal stall cover." },
    ],
    lobbySize: "4–10 players",
    seekerLean: "Hider-favored",
    comments: [
      { author: "CasualQueen", text: "Our group's chill map. Five easy colors and nobody sweats the sweeps." },
      { author: "StallRat", text: "Market stall counter mimic is basically free survival in pub lobbies." },
    ],
  },
  "low-poly-mini-town": {
    tagline: "Compact town · Newly listed",
    overview:
      "Low Poly Mini Town is a compact low-poly town from the Restaurant Building creator. Four colors in a small footprint create fast rounds with tight decision space. Newly listed with growing subscriptions — hiding spot guides are in community scouting phase.",
    whyPlay:
      "Mini Town compresses the restaurant map's clutter strategy into a four-color low-poly package. Small map size means rounds finish fast — good for quick workshop sessions between official map grinds. Early subscribers are discovering spots before guides land on meccha.wiki.",
    tips: [
      "Four colors means zero margin for error — verify sample before locking.",
      "Building facades offer flat low-poly surfaces for clean pose alignment.",
      "Small map — rotate after first seeker pass, don't camp.",
      "Scout during prep phase — community spots aren't verified yet.",
      "Compare with Restaurant Building strategies — same creator, similar prop logic.",
    ],
    bestColors: ["Building Gray", "Roof Brown", "Path Tan", "Accent Red"],
    commonMistakes: [
      "Treating four colors casually — wrong sample is instant death",
      "Camping town center in a map this small",
      "Waiting for verified guides instead of scouting yourself",
      "Using Restaurant Building color habits without re-sampling",
    ],
    hotspots: [
      { name: "Building Facades", description: "Flat low-poly walls — strong for pose alignment.", type: "hot" },
      { name: "Side Street", description: "Low-traffic path between buildings.", type: "neutral" },
      { name: "Back Alley", description: "Tight space with shadow depth.", type: "hot" },
    ],
    dangerZones: [
      { name: "Town Center", description: "Smallest map's biggest open zone — avoid." },
      { name: "Main Road", description: "Connects all buildings — swept first every round." },
    ],
    lobbySize: "4–6 players",
    seekerLean: "Balanced",
    comments: [
      { author: "EarlyScout", text: "Too new for verified spots but building facade hides feel solid." },
      { author: "ZeminahFan", text: "Same creator as Restaurant — similar vibe, smaller package." },
    ],
  },
  "art-gallery": {
    tagline: "Museum masterpiece · Paint-as-art mechanic",
    overview:
      "Art Gallery is Popunia's museum map featuring famous paintings and portraits along the walls. The unique hook is painting yourself into artworks — Mona Lisa, apostles, or even the floor. Six colors across gallery rooms reward patient sampling and creative poses.",
    whyPlay:
      "Art Gallery stands out among workshop maps for forcing creative body-paint choices rather than standard prop mimic. Increase hunter wait time — players need extra prep to paint convincing masterpieces. Perfect for content creation and groups that want something beyond CS ports.",
    tips: [
      "Sample from the specific artwork you mimic — frame gold differs from wall beige.",
      "Floor painting subverts expectations but needs exact tile value matching.",
      "Gallery rooms have distinct palettes — re-sample entering each wing.",
      "Large canvas props break outlines at standing height when colors match.",
      "Seekers check famous paintings first — rotate to lesser-known frames.",
    ],
    bestColors: ["Canvas Cream", "Frame Gold", "Gallery Beige", "Floor Tile", "Portrait Brown", "Shadow Gray"],
    commonMistakes: [
      "Rushing prep without enough hunter wait time for detailed painting",
      "Using wall beige on gilded frames — instant highlight",
      "Camping center atrium with no artwork cover",
      "Copying viral Mona Lisa spot without matching exact canvas tone",
    ],
    hotspots: [
      { name: "Portrait Wall Row", description: "Famous paintings offer frame + canvas dual-tone cover.", type: "hot" },
      { name: "Sculpture Niche", description: "3D props break silhouette at crouch height.", type: "hot" },
      { name: "Floor Mosaic Zone", description: "Bold floor painting for deception-first hiders.", type: "neutral" },
    ],
    dangerZones: [
      { name: "Central Atrium", description: "Open crossing with minimal artwork cover." },
      { name: "Main Entrance", description: "First sweep zone every round." },
    ],
    lobbySize: "4–10 players",
    seekerLean: "Hider-favored",
    comments: [
      { author: "ArtMain", text: "Increase hunter wait — this map is about the paint job, not speed." },
      { author: "GalleryRat", text: "Floor hide still catches seekers who only scan walls." },
    ],
  },
  "the-village": {
    tagline: "Large rustic town · Tunep's expanded Market",
    overview:
      "The Village is Tunep's large-scale expansion of The Market aesthetic — houses, roads, stalls, and props spread across a much bigger play area. Six colors with warm earth tones across outdoor paths and cottage interiors.",
    whyPlay:
      "Best for large lobbies that want workshop variety without CS-competitive pressure. The expanded footprint means more rotation paths but also longer seek sweeps — recommend 2+ hunters, Infection mode, and auto taunt for balanced rounds.",
    tips: [
      "Outdoor cobble differs from cottage wood — re-sample at every door.",
      "Market stall props from The Market strategies transfer here.",
      "Use side alleys for rotation — village center is high traffic.",
      "Large map means seekers need 2+ hunters or extended timer.",
      "Scout full perimeter during prep — hiding spots vary by building.",
    ],
    bestColors: ["Cobble Gray", "Cottage Beige", "Stall Brown", "Grass Green", "Roof Trim", "Path Tan"],
    commonMistakes: [
      "Running 1 hunter on a map this large — unfun for seekers",
      "Camping village center crossroads",
      "Assuming Market strategies work without re-scouting larger zones",
      "Ignoring road vs grass color transitions",
    ],
    hotspots: [
      { name: "Market Stall Row", description: "Prop-dense counters with warm earth tones.", type: "hot" },
      { name: "Cottage Interior", description: "Wood floors and furniture stacks.", type: "hot" },
      { name: "Garden Side Path", description: "Low-traffic rotation between buildings.", type: "neutral" },
    ],
    dangerZones: [
      { name: "Village Center Plaza", description: "Main crossing point — swept every round." },
      { name: "Main Road", description: "Connects all districts — first seeker route." },
    ],
    lobbySize: "8–12 players",
    seekerLean: "Hider-favored",
    comments: [
      { author: "VillageHost", text: "Needs 2 hunters minimum. Market fans will love the scale." },
      { author: "TunepFan", text: "Same creator as The Market — bigger sibling, same cute palette." },
    ],
  },
  "police-station": {
    tagline: "Law enforcement interior · Balanced rounds",
    overview:
      "Police Station offers desks, holding cells, corridors, and office props in a balanced five-color palette. Works well with a single hunter — tighter than The Village but more structured than meme maps.",
    whyPlay:
      "Recommended for groups wanting fair hide-and-seek without Infection chaos. Familiar office-police layout with clear zones makes it a strong mid-tier workshop pick for mixed-skill lobbies.",
    tips: [
      "Desk surfaces differ from floor tile — sample locally.",
      "Cell bars create partial cover — match concrete, not metal glare.",
      "Corridor camping fails — cross or use alcove corners.",
      "Evidence room props offer dark value re-sampling.",
      "Single hunter works here — map size is moderate.",
    ],
    bestColors: ["Desk Gray", "Floor Tile", "Wall White", "Metal Trim", "Concrete"],
    commonMistakes: [
      "Standing in main hallway between desks",
      "Using bright white in shadowed cell areas",
      "Ignoring holding cell as rotation zone",
      "Forcing 2+ hunters when 1 hunter is balanced",
    ],
    hotspots: [
      { name: "Desk Row", description: "Office clutter breaks outlines at sitting height.", type: "hot" },
      { name: "Evidence Storage", description: "Dark props with shelf cover.", type: "hot" },
      { name: "Side Corridor", description: "Low-traffic path between wings.", type: "neutral" },
    ],
    dangerZones: [
      { name: "Main Lobby", description: "Open reception with wide sightlines." },
      { name: "Front Entrance", description: "Spawn-adjacent sweep zone." },
    ],
    lobbySize: "4–10 players",
    seekerLean: "Balanced",
    comments: [
      { author: "CopMain", text: "Best 1-hunter workshop map in our rotation. Fair and fun." },
      { author: "DeskDweller", text: "Evidence room corner survived three passes last night." },
    ],
  },
  "viking-dining": {
    tagline: "Tavern chaos · Weapons and ale props",
    overview:
      "Viking Dining by RareKiwi recreates a compact tavern with shields, swords, spears, food, and drink props scattered throughout. Five warm tones on a smaller footprint — easy for seekers without being a stomp.",
    whyPlay:
      "Perfect casual night map after competitive CS ports. Prop density is high but sightlines stay manageable — hunters can sweep without frustration while hiders get creative mimic options.",
    tips: [
      "Wood table brown dominates — sample from bench, not floor.",
      "Shield props on walls break outlines at default height.",
      "Ale barrel zones have warm amber accents — re-sample nearby.",
      "Compact map — rotate after first pass, don't camp center.",
      "Weapon rack props offer vertical silhouette breaking.",
    ],
    bestColors: ["Wood Brown", "Shield Gray", "Stone Floor", "Amber Ale", "Iron Dark"],
    commonMistakes: [
      "Camping open tavern center between tables",
      "Using floor stone on wood bench surfaces",
      "Overacting prop mimic — movement tells on small maps",
      "Ignoring barrel props for crouch-height hides",
    ],
    hotspots: [
      { name: "Shield Wall", description: "Wall-mounted props with dual-tone cover.", type: "hot" },
      { name: "Bench Row", description: "Table + bench dual-tone at sitting height.", type: "hot" },
      { name: "Barrel Corner", description: "Amber wood props with shadow depth.", type: "neutral" },
    ],
    dangerZones: [
      { name: "Tavern Center", description: "Open floor between tables — swept first." },
      { name: "Main Entry", description: "Every seeker path starts here." },
    ],
    lobbySize: "4–8 players",
    seekerLean: "Balanced",
    comments: [
      { author: "VikingFan", text: "Small but prop-dense. RareKiwi nailed the tavern vibe." },
      { author: "ShieldStack", text: "Shield wall mimic is free survival in pub lobbies." },
    ],
  },
  "fall-guys-level": {
    tagline: "Colorful platforms · Flat-color hides",
    overview:
      "Fall Guys Level by ArenaCloser12 features flat bright colors and scattered trinkets reminiscent of Fall Guys obstacle courses. Five dominant tones make sampling fast but movement tells increase on meme-heavy rounds.",
    whyPlay:
      "Ideal warmup map before competitive workshop picks. Easy palette teaches sampling speed while absurd props enable cheeky content spots. Community favorite for groups that want laughs over sweats.",
    tips: [
      "Flat platform colors are exact — sample from platform top, not edge shadow.",
      "Trinket props enable cheeky mimic spots near obstacles.",
      "Bright saturation punishes lazy sampling despite 'easy' look.",
      "Rotate often — small map with fast full sweeps.",
      "Seekers expect meme spots — subvert with boring flat-wall hides.",
    ],
    bestColors: ["Platform Pink", "Lane Yellow", "Trim Blue", "Floor White", "Accent Green"],
    commonMistakes: [
      "Assuming easy colors mean easy survival — edges matter",
      "Camping obvious obstacle meme spots second round",
      "Overmoving on colorful platforms — tells amplify",
      "One sample for multiple platform hues",
    ],
    hotspots: [
      { name: "Platform Edge", description: "Flat color blocks with trinket props nearby.", type: "hot" },
      { name: "Obstacle Stack", description: "Meme mimic at prop height.", type: "neutral" },
      { name: "Lane Divider", description: "Color transition zone — re-sample here.", type: "hot" },
    ],
    dangerZones: [
      { name: "Course Center", description: "Open platform crossing — no cover." },
      { name: "Start Platform", description: "First sweep every round." },
    ],
    lobbySize: "4–8 players",
    seekerLean: "Hider-favored",
    comments: [
      { author: "FallFan", text: "Warmup map king. Flat colors but zero margin for error." },
      { author: "MemeRunner", text: "Trinket hide by the spinning pad never gets old." },
    ],
  },
  "mw2-terminal": {
    tagline: "Airport interior · Large competitive layout",
    overview:
      "MW2 Terminal by vegal brings Modern Warfare 2's airport interior into Mecha Chameleon — optimized interior-only with good lighting. Large footprint with dense hiding spots across gates, shops, and corridors.",
    whyPlay:
      "Best for 8+ player lobbies wanting FPS-familiar competitive sweeps. Recommend forced taunt and extended timer — map size rewards rotation over camping. Trending in weekly popular rankings.",
    tips: [
      "Gate seating offers fabric + metal dual-tone cover.",
      "Shop storefronts break outlines at crouch height.",
      "Large map — establish rotation paths during prep walk.",
      "Corridor choke points favor quick crosses, not camps.",
      "Sample from local trim — airport gray shifts by zone.",
    ],
    bestColors: ["Terminal Gray", "Seat Fabric", "Floor Tile", "Shop Glass", "Trim Silver"],
    commonMistakes: [
      "Hosting with fewer than 8 players — map feels empty for seekers",
      "Camping open gate areas without seat prop cover",
      "Skipping prep walk on a map this large",
      "Using one gray sample across shops and gates",
    ],
    hotspots: [
      { name: "Gate Seating Row", description: "Fabric props with controlled sightlines.", type: "hot" },
      { name: "Duty-Free Shop", description: "Shelf clutter and glass tones.", type: "hot" },
      { name: "Connector Hall", description: "Rotation path between wings.", type: "neutral" },
    ],
    dangerZones: [
      { name: "Central Concourse", description: "Wide open with long sightlines." },
      { name: "Security Checkpoint", description: "High-traffic sweep zone." },
    ],
    lobbySize: "8–12 players",
    seekerLean: "Balanced",
    comments: [
      { author: "TerminalMain", text: "Force taunt + 8 players minimum. Worth the setup." },
      { author: "MW2Fan", text: "Gate row hide survived two full sweeps in our lobby." },
    ],
  },
};

export function getWorkshopSeoContent(map: WorkshopMap): WorkshopSeoContent {
  const content = CONTENT[map.slug];
  if (content) return content;
  return generateWorkshopSeoFromMap(map);
}

export function formatWorkshopStat(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
  return n.toLocaleString();
}
