import type { FullWiki, WikiImage } from "../types";
import { steamHeader, steamHero } from "@/lib/steam-wiki";

const APP = 1623730;

function header(alt: string): WikiImage {
  return { src: steamHeader(APP), alt };
}

function hero(alt: string): WikiImage {
  return { src: steamHero(APP), alt };
}

export const palworldWiki: FullWiki = {
  slug: "palworld",
  hubs: { maps: "Biomes", roles: "Jobs", strats: "Setups" },
  copy: {
    home: {
      strats: "First base, work crew, raids, and towers — not a legendary hunt montage.",
      roles: "Workers and catchers first. Breeders last.",
      maps: "Windswept Hills before desert, volcano, and snow.",
      guides: "Beginner path, catching, base jobs, combat, breeding, and settings.",
    },
    pages: {
      maps: "One island chain, eight biomes. Learn heat, cold, and what actually lives there before you sprint for a legendary.",
      roles: "Work suits first. Combat partners when the base can run without you watching it.",
      strats: "Where to drop the palbox, who to catch, how raids work, and when to walk into a tower.",
    },
  },
  maps: [
    {
      slug: "windswept-hills",
      name: "Windswept Hills",
      difficulty: "Easy",
      tagline: "The tutorial biome: berries, ore in the open, and the first palbox that should not move three times.",
      overview:
        "Windswept Hills is the grassland you spawn into. Catch workers here, not a raid boss. Lamball, Cattiva, Chikipi, Foxparks, and Pengullet cover food, mining, kindling, and watering. Build the palbox on flat ground with room for beds, a berry plot, and a chest line — a cliff-edge castle looks good until pathing dies. Zoe's tower is the first real check. Fast-travel statues exist so you can leave and come back; do not abandon a working base because a YouTube pin is 400 meters away.",
      stats: [
        { label: "When to live here", value: "Hours 0–15, and as a forever production hub" },
        { label: "Weather", value: "Mild — no heat/cold kit required" },
        { label: "First tower", value: "Zoe & Grizzbolt once you have a combat party" },
      ],
      poi: [
        { name: "Spawn plateau", note: "Flat enough for a palbox. Leave corridors. Chests in doorways are how Pals stand still." },
        { name: "Ore and tree lines", note: "Early mining and lumbering. Assign dedicated Pals; a 'do everything' Pal will wander." },
        { name: "Small caves", note: "Spheres, ancient notes, and a first dungeon. Do not take your only transport Pal in and leave the base empty." },
        { name: "Great Eagle statues", note: "Unlock them while you explore. Fast travel is the real mount." },
        { name: "Zoe's tower", note: "Bring a party that is not your mining crew. Type and levels matter more than a fancy gun." },
      ],
      notes: [
        "Catch a handful of gatherers before you obsess over IVs or a legendary spawn video.",
        "A second combat party in the palbox is cheaper than dragging Foxparks into a boss and watching the kiln go cold.",
        "If raids already hurt, lower raid frequency in world settings before you rebuild the walls in marble.",
      ],
      image: header("Palworld Windswept Hills grasslands and first base"),
      seoKeywords: ["Palworld starting area", "Windswept Hills", "Palworld first base"],
    },
    {
      slug: "forest",
      name: "Forest",
      difficulty: "Easy",
      tagline: "Wood, water Pals, and the first biome that punishes a party with no plan.",
      overview:
        "The forest belt around the hills is where you pick up better lumbering, watering, and mid-game catches. Visibility drops, alphas show up, and Lily's tower sits in this direction for most playthroughs. You come here for resources and a few work upgrades — not to relocate the entire factory on day two. Keep a fire Pal out if nights feel long, and do not walk a berry-only diet into a twenty-minute hike.",
      stats: [
        { label: "Why come", value: "Lumber, watering Pals, mid spheres, Lily's tower" },
        { label: "Threat", value: "Alphas and denser spawns than the hills" },
        { label: "Base?", value: "Optional outpost — main hub can stay in the hills" },
      ],
      poi: [
        { name: "Dense timber", note: "Lumbering Pals earn their keep here. Hand-chopping for an hour is a trap." },
        { name: "Rivers and ponds", note: "Watering Pals and a place to think about a second farm plot." },
        { name: "Alpha spawns", note: "Bigger spheres, better stats. Soften with Pal skills, then throw. Do not empty a stack of Mega Spheres into a full-HP alpha." },
        { name: "Dungeons in the trees", note: "Schematics and spheres. Bring food and a flying or fast mount to leave." },
        { name: "Lily's tower", note: "Grass/plant check. Swap the party. The hills crew that beat Zoe may bounce here." },
      ],
      notes: [
        "Unlock statues as you pass them. Backtracking on foot with a full inventory is the real boss.",
        "A small chest outpost is fine. A second full palbox before electricity is usually wasted time.",
        "If SAN is tanking after forest trips, you need beds and food at home, not a new catch.",
      ],
      image: header("Palworld forest biome exploration"),
      seoKeywords: ["Palworld forest", "Lily tower", "Palworld lumbering"],
    },
    {
      slug: "dessicated-desert",
      name: "Dessicated Desert",
      difficulty: "Medium",
      tagline: "Heat gear, better ore, and the biome that kills underdressed sprinting.",
      overview:
        "The desert is the first climate wall. Heat-resistant clothing, cooling Pals, and water matter more than a new assault rifle. You come for ores, desert catches, and a tower that expects a real combat roster. Travel at night if days cook you. Do not plant the main palbox in the sand until you can cool the base and feed it — a hills factory that ships metal still beats a pretty ruin with three dead Pals.",
      stats: [
        { label: "Kit", value: "Heat resist + water + a cooler Pal for the box" },
        { label: "Payoff", value: "Ore, sulfur-adjacent crafts, desert Pals" },
        { label: "Fail state", value: "Sprinting in starter cloth until the heat bar fills" },
      ],
      poi: [
        { name: "Ore fields", note: "Worth a mining outpost or a flying haul back to the hills." },
        { name: "Desert Pals", note: "Ground and dark types you did not have on grass. Catch after you can survive the walk." },
        { name: "Ruins and chests", note: "Ancient technology and schematics. Clear the room; do not AFK-open in a patrol." },
        { name: "Tower", note: "Marcus-era desert check. Bring resistances and a party that is not on fire." },
        { name: "Fast travel line", note: "Statue-to-statue. One mount death with no statue nearby is a long walk in the heat." },
      ],
      notes: [
        "Craft heat gear before the sightseeing tour. A cooler Pal in the party helps; cloth still matters.",
        "Eggs on the sand cook. Incubate at a temperature-controlled base.",
        "If you want a desert factory, electricity and cooling first — then the pretty walls.",
      ],
      image: header("Palworld Dessicated Desert heat biome"),
      seoKeywords: ["Palworld desert", "Dessicated Desert", "Palworld heat resistance"],
    },
    {
      slug: "mount-obsidian",
      name: "Mount Obsidian",
      difficulty: "Hard",
      tagline: "Volcano heat, fire Pals, and the ore you should not farm in a swimsuit.",
      overview:
        "Mount Obsidian is the fire biome. Heat is worse than the desert, lava punishes bad mounts, and the Pals here are the kindling and combat upgrades people skip until they get burned. Come with maxed heat gear, fire-resistant food if you have it, and a flying mount that will not panic-jump into lava. This is an expedition biome until you can actually staff a hot base. The tower here is a filter for parties that still look like the grassland starter set.",
      stats: [
        { label: "Kit", value: "High heat resist, flying mount, fire plan" },
        { label: "Catch targets", value: "Late kindling and fire combat Pals" },
        { label: "Base?", value: "Late-game only — cooling and fireproof layout" },
      ],
      poi: [
        { name: "Lava rivers", note: "Path with a flyer. Ground mounts eat deaths here." },
        { name: "High-tier ore", note: "Worth the trip if the hills mines are tapped. Haul out; do not smelt in the open magma." },
        { name: "Fire alphas", note: "Soften hard. Sphere quality jumps here — bring Ultras, not a pocket of Megas." },
        { name: "Volcano tower", note: "Axel-era fire check. Swap off grass pets you loved in the hills." },
        { name: "Egg spots", note: "Hot eggs need a hot incubator setup, not a snow base and a prayer." },
      ],
      notes: [
        "If the heat bar is always full, you are undergeared. Go home. The legendary will wait.",
        "Do not assign a cooling-only crew to a volcano box and then leave for an hour.",
        "Ancient chests here are bait if you cannot win the alpha next to them.",
      ],
      image: header("Palworld Mount Obsidian volcano"),
      seoKeywords: ["Palworld volcano", "Mount Obsidian", "Palworld fire biome"],
    },
    {
      slug: "astral-mountains",
      name: "Astral Mountains",
      difficulty: "Hard",
      tagline: "Cold gear, ice Pals, and the other climate wall people ignore until they freeze.",
      overview:
        "Astral Mountains are the snow biome. Cold resistance, kindling, and hot food are the ticket. Ice Pals, late combat options, and a tower that punishes fire-only thinking live here. Same rule as the volcano: this is an expedition until you can heat a base. A hills palbox with a production line still beats a frozen decorative chalet with no beds. Watch your mount — falls and wolves end trips that the cold already started.",
      stats: [
        { label: "Kit", value: "Cold resist + kindling Pal + hot food" },
        { label: "Catch targets", value: "Ice, flying, late bosses" },
        { label: "Fail state", value: "Starter cloth and a Lamball in a blizzard" },
      ],
      poi: [
        { name: "Ridges and drops", note: "Flying mount or careful pathing. Inventory full + a fall is a reload." },
        { name: "Ice Pals", note: "Cooling for desert bases and combat into fire towers. Catch with real spheres." },
        { name: "Snow dungeons", note: "Bring heat. A cave is not automatically warm enough if you are already freezing." },
        { name: "Snow tower", note: "Victor-era ice/dark check. Party swap again. One roster does not beat every tower." },
        { name: "High eggs", note: "Cold eggs want a cold incubator. Match temperature to the egg, not to your main biome." },
      ],
      notes: [
        "Stack cold resist. One piece of 'sort of warm' cloth is how YouTubers make death compilations.",
        "A kindling Pal in the party is a heater. A kindling Pal left at base does not help you on the ridge.",
        "If you are here for a legendary, have a save plan and Ultra+ spheres. Soften first.",
      ],
      image: header("Palworld Astral Mountains snow biome"),
      seoKeywords: ["Palworld snow", "Astral Mountains", "Palworld cold resistance"],
    },
    {
      slug: "wildlife-sanctuaries",
      name: "Wildlife Sanctuaries",
      difficulty: "Hard",
      tagline: "Restricted islands with better Pals — and a wanted level if you treat them like a starter ranch.",
      overview:
        "Wildlife Sanctuaries are offshore islands with stronger, rarer Pals. You fly or boat in, catch what you came for, and leave. Guards and wanted-level logic punish lingering like it is Windswept Hills. This is not a place to drop a palbox on day one. Bring your best spheres, a combat party that can finish a fight quickly, and a mount that can leave when the alert goes up. Three sanctuary ranks exist as you push the map — match the island to your sphere tier.",
      stats: [
        { label: "How to enter", value: "Flying mount or boat — unlock the statue if you can" },
        { label: "Risk", value: "Wanted / guards if you hang around" },
        { label: "Reward", value: "Rare Pals you will not find next to the first palbox" },
      ],
      poi: [
        { name: "Sanctuary 1", note: "The first island most players can reach. Still not a starter catch loop." },
        { name: "Higher sanctuaries", note: "Better Pals, worse welcome. Ultra/Legendary spheres, not Megas." },
        { name: "Shore pickup", note: "Land, catch, leave. Building a kiln on the beach is how you meet the police." },
        { name: "Alpha rares", note: "Soften to red, then throw. Full-HP legendaries eat sphere stacks." },
        { name: "Escape height", note: "A flying Pal is the exit strategy. A slow ground mount is a cutscene." },
      ],
      notes: [
        "Do not take the whole work crew. They die, you get a wanted level, the base stops.",
        "If you cannot catch in one visit, you were undergeared. Farm spheres and come back.",
        "Sanctuary Pals still need SAN and beds at home. A legendary that sits down is a trophy, not a worker.",
      ],
      image: header("Palworld Wildlife Sanctuary island"),
      seoKeywords: ["Palworld Wildlife Sanctuary", "rare Pals", "Palworld legendary catch"],
    },
    {
      slug: "dungeons",
      name: "Dungeons",
      difficulty: "Medium",
      tagline: "Sealed realms and caves: spheres, schematics, and the boss at the end — not a second home.",
      overview:
        "Dungeons (sealed realms and cave systems) are timed or linear PvE spaces. You enter for spheres, ancient technology, legendary schematic chances, and a boss Pal. Bring a combat party, food, and spheres if you want to catch the boss. Leave the mining crew at the palbox. If the timer exists in your patch, watch it — dying to the clock with a full bag is the same as a wipe. Clear rooms, do not sprint past every chest 'to save time' and then miss the schematic you came for.",
      stats: [
        { label: "Bring", value: "Combat party, food, spheres, a weapon you can shoot" },
        { label: "Leave at base", value: "Work Pals, breeding parents, the only flyer" },
        { label: "Loot", value: "Spheres, tech, schematics, boss catch" },
      ],
      poi: [
        { name: "Entrance crystals", note: "On the overworld. Note the biome so you know heat/cold inside nearby caves." },
        { name: "Chest rooms", note: "Open them. The boss is not the only loot." },
        { name: "End boss", note: "Soften, catch or kill. A catch is a Pal; a kill is XP and the door." },
        { name: "Exit", note: "Fast travel out if you can. Walking home overloaded through a blizzard is optional suffering." },
        { name: "Repeat runs", note: "Schematics are a grind. One lucky chest is not a build plan." },
      ],
      notes: [
        "If you keep wiping, you are underleveled or on the wrong type. Swap Pals like weapons.",
        "Do not drop the palbox inside a dungeon. It is not a biome.",
        "Ancient Technology points from chests and towers beat guessing recipes in the dark.",
      ],
      image: header("Palworld dungeon sealed realm"),
      seoKeywords: ["Palworld dungeons", "sealed realm", "Palworld schematics"],
    },
    {
      slug: "sakurajima",
      name: "Sakurajima",
      difficulty: "Hard",
      tagline: "The first big island expansion: new Pals, oil-tier industry, and content you should not rush in starter cloth.",
      overview:
        "Sakurajima is the large island added after launch — new Pals, oil and late crafts, another tower line, and raids that assume you already understand a palbox. Treat it like a new continent, not a slightly warmer Windswept Hills. Ferry or fly with heat/cold covered for the route, unlock statues immediately, and keep the original factory running until a second base can actually staff oil, electricity, and beds. Feybreak and later islands follow the same rule: expedition first, relocation second.",
      stats: [
        { label: "When", value: "After desert/volcano kit and a working home factory" },
        { label: "Payoff", value: "Oil, new Pals, late towers, raid content" },
        { label: "Trap", value: "Moving the only palbox here on a fresh save" },
      ],
      poi: [
        { name: "Shore landing", note: "Statue first. Then a chest. Then a fight. Not a palbox in the surf." },
        { name: "Oil nodes", note: "Late industry. Needs a real transport loop, not one Cattiva." },
        { name: "New tower", note: "Saya-era check. Read the type. Your Grizzbolt clear does not transfer." },
        { name: "Raid bosses", note: "Bellanoir-style raids are group content. Solo is possible; undergeared solo is a wipe timer." },
        { name: "Breeding targets", note: "New parents. Finish a cake line at home before you live on the island." },
      ],
      notes: [
        "World settings still apply. If raids on Sakurajima feel broken, check the slider before blaming the island.",
        "Keep a hills or forest food belt until the new base has planting + watering + kindling staffed.",
        "Later islands (Feybreak and after) are the same loop at a higher number. Gear, then statue, then box.",
      ],
      image: header("Palworld Sakurajima island"),
      seoKeywords: ["Palworld Sakurajima", "Palworld oil", "Palworld Feybreak"],
    },
  ],
  roles: [
    {
      slug: "rancher",
      name: "Rancher",
      role: "Base work suits",
      difficulty: "Easy",
      beginnerRank: 1,
      tiers: [
        { label: "Early", value: "Kindling, watering, planting, mining, lumbering" },
        { label: "Later", value: "Electricity, cooling, transporting, farming" },
      ],
      kit: ["Palbox on flat ground", "Beds + food + SAN", "One job per Pal, not 'everything'"],
      excerpt:
        "The best first job. You keep the factory alive: fire, water, plants, ore, and wood. Combat legendaries do not chop trees while you are in a dungeon.",
      strengths: [
        "Prints the rest of the game — spheres, guns, and cakes all start as ore and berries",
        "Teaches pathing, feeders, and why the palbox monitor exists",
        "Foxparks, Pengullet, Lamball, and Cattiva are enough to start",
      ],
      weaknesses: [
        "Boring if you only wanted to catch a dragon on day one",
        "A messy base looks like 'AI is broken' when it is just blocked doors",
      ],
      starterTips: [
        "Assign mining, planting, and kindling to dedicated Pals. Wander-mode is how the kiln goes cold.",
        "Beds equal to Pal count. Hungry, sleepless, low-SAN Pals sit down.",
        "Leave corridors. Chests in the only doorway create a traffic jam.",
        "Check the palbox monitor before you recatch the entire island.",
      ],
      image: hero("Palworld Pals working a base production line"),
      seoKeywords: ["Palworld work suitability", "Palworld base", "kindling watering planting"],
    },
    {
      slug: "catcher",
      name: "Catcher",
      role: "Exploration and spheres",
      difficulty: "Easy",
      beginnerRank: 2,
      tiers: [
        { label: "Throw", value: "Soften first, then sphere" },
        { label: "Stock", value: "Sphere tier matches the Pal, not your optimism" },
      ],
      kit: ["Spheres one tier above what you think you need", "A combat Pal that can chip HP", "Lifmunk Effigies for capture power"],
      excerpt:
        "You fill the palbox with the right work suits and a few fighters. A catcher who only throws at full-HP alphas is how Mega Sphere stacks vanish.",
      strengths: [
        "Every other job is downstream of having the Pal",
        "Alphas and dungeons are catch content, not only kill content",
        "Effigies are a permanent capture upgrade — pick them up while you walk",
      ],
      weaknesses: [
        "Emptying spheres on a legendary at 100% HP",
        "Catching twenty combat Pals and zero watering Pals",
      ],
      starterTips: [
        "Chip the Pal into the red, then throw. Status from Pal skills helps.",
        "Buy or craft the next sphere tier before a new biome, not after the first fail.",
        "Keep workers and fighters in different parties. The catch trip should not pause the farm.",
        "Wanted-level sanctuaries are a catcher endgame, not a tutorial.",
      ],
      image: hero("Palworld catching a Pal with a sphere"),
      seoKeywords: ["Palworld catching", "Pal spheres", "how to catch Pals"],
    },
    {
      slug: "outrider",
      name: "Outrider",
      role: "Mounts and transport",
      difficulty: "Medium",
      beginnerRank: 3,
      tiers: [
        { label: "Ground", value: "Early rushoar / direhowl class mounts" },
        { label: "Air", value: "A flyer for desert, volcano, sanctuaries" },
      ],
      kit: ["A mount that is not your only worker", "Statues unlocked", "Weight upgrades so you can actually haul"],
      excerpt:
        "You move the player and the loot. A flying Pal is how biomes stop being death marches. Do not take the only Nitewing into a dungeon and then wonder why you are walking.",
      strengths: [
        "Makes heat and cold trips possible",
        "Hauls ore so the rancher can stay on the plot",
        "Sanctuary in-and-out is an outrider job",
      ],
      weaknesses: [
        "Mount deaths in lava or long falls with a full bag",
        "Using the transport Pal as the tower tank",
      ],
      starterTips: [
        "Unlock Great Eagle statues while mounted. Fast travel beats any sprint.",
        "Keep a spare flyer in the box. The overworld is how you lose the first one.",
        "Weight is a stat. Drop junk, upgrade, or assign a transporter at base.",
        "Boats and later flyers exist for islands. Swimming a legendary egg is a meme.",
      ],
      image: hero("Palworld flying mount over the map"),
      seoKeywords: ["Palworld flying mount", "Palworld transport", "Nitewing"],
    },
    {
      slug: "fighter",
      name: "Fighter",
      role: "Combat party and towers",
      difficulty: "Medium",
      beginnerRank: 4,
      tiers: [
        { label: "Party", value: "Type matchup, not your favorite lamb" },
        { label: "Player", value: "Gun or Pal skills — both are valid" },
      ],
      kit: ["A party that is not the mining crew", "Spheres if you might catch the boss", "Food and a weapon you can actually use"],
      excerpt:
        "You clear towers, alphas, dungeons, and raids. Swap Pals the same way you swap weapons. Wrong type into a tower is a wipe, not a DPS check.",
      strengths: [
        "Opens Ancient Technology and the next biome",
        "Alphas are spheres and stats if you catch instead of only killing",
        "Raids need someone who built walls and someone who can shoot",
      ],
      weaknesses: [
        "Taking the work crew into Zoe and watching the farm die",
        "One legendary with no condensing and no condiments into a raid timer",
      ],
      starterTips: [
        "Beat Zoe with a dedicated party. Then rebuild the party for Lily. Repeat every tower.",
        "Condense (stars) on the Pals you actually fight with. Twenty unused catches are not condensing.",
        "You do not have to main a gun. Pal skills carry; guns speed bosses up.",
        "Raid bosses are group content with a solo option — undergeared solo is still a wipe.",
      ],
      image: hero("Palworld combat party fighting a tower boss"),
      seoKeywords: ["Palworld tower bosses", "Palworld combat", "Zoe Grizzbolt"],
    },
    {
      slug: "breeder",
      name: "Breeder",
      role: "Eggs, cake, and IVs",
      difficulty: "Hard",
      beginnerRank: 5,
      tiers: [
        { label: "Need", value: "Breeding farm + cake loop" },
        { label: "Goal", value: "The Pal you already use, with better stats — not a zoo" },
      ],
      kit: ["Breeding Farm", "Cake production (wheat, milk, eggs, honey, berry)", "Incubators at the right temperature"],
      excerpt:
        "Late job. You combine parents for the Pal you wanted and hatch it at the right temperature. Breeding before you have a food belt is how the ranch starves.",
      strengths: [
        "Passes work suits and stats you cannot catch in the grass",
        "Cake is a factory problem — good practice for real automation",
        "Condensing and breeding together make tower Pals",
      ],
      weaknesses: [
        "Ignoring temperature: hot eggs in a snow box, cold eggs on a volcano",
        "Breeding random pairs with no goal while the ore line is empty",
      ],
      starterTips: [
        "Stand up planting, watering, kindling, and a cook before the breeding farm.",
        "Look up the parent combo for the Pal you need. Blind breeding is a berry sink.",
        "Match incubator heat to the egg. The biome of the box matters.",
        "Do this after towers 1–2, not as hour-three content.",
      ],
      image: hero("Palworld breeding farm and Pal eggs"),
      seoKeywords: ["Palworld breeding", "Palworld cake", "Palworld eggs"],
    },
  ],
  strats: [
    {
      slug: "first-palbox",
      name: "First Palbox",
      mapSlug: "windswept-hills",
      mapName: "Windswept Hills",
      difficulty: "Easy",
      risk: "Low",
      bestFor: "New worlds that keep relocating the base for a nicer view",
      duration: "First 30–60 minutes",
      excerpt:
        "Flat ground, room for beds and a berry line, statues nearby. Move once if you must — not four times.",
      steps: [
        "Catch Lamball / Cattiva / Chikipi class workers before you sculpt a castle.",
        "Drop the palbox on flat terrain with space in every direction. Cliffs and water edges path badly.",
        "Beds, a food box or farm plot, a chest line, then production. Walls can wait an hour; hunger cannot.",
        "Assign jobs in the palbox. Confirm they are actually working, not stuck on a chest.",
        "Unlock the nearest Great Eagle statue so a death is not a cross-map jog.",
      ],
      tips: [
        "World settings: ease hunger and raids if the first night is miserable. You can tighten later.",
        "A slightly worse view that runs is better than a ridgeline palace that jams.",
        "Do not take every Pal exploring. Someone has to stay on kindling.",
      ],
      image: header("Palworld first palbox on Windswept Hills"),
      seoKeywords: ["Palworld palbox", "where to build base", "Palworld first base"],
    },
    {
      slug: "work-crew",
      name: "Early Work Crew",
      mapSlug: "windswept-hills",
      mapName: "Windswept Hills",
      difficulty: "Easy",
      risk: "Low",
      bestFor: "Bases that look busy and produce nothing",
      duration: "Hours 1–8",
      excerpt:
        "Kindling, watering, planting, mining, lumbering, transporting — dedicated Pals, food, and beds. Combat is a different roster.",
      steps: [
        "List the suits you need: fire for kiln/campfire, water + plant for berries, mine + lumber for building.",
        "Catch the first Pal that has each suit. Perfect IVs can wait.",
        "One primary job per Pal. 'All work' is how they wander off the ore node.",
        "Put feeders and beds on the path they already walk. Hidden bedrooms get unused.",
        "Watch SAN. A broken Pal sits down while you are in a dungeon — check the monitor when you return.",
      ],
      tips: [
        "Transporting Pals move items to chests. Without them, the pile next to the miner is not 'in storage'.",
        "Electricity comes after a stable food belt. Generators on an empty stomach are cosplay.",
        "If everyone is stuck, you overbuilt in the palbox radius or blocked the only door.",
      ],
      image: header("Palworld Pals assigned to mining and farming"),
      seoKeywords: ["Palworld work pals", "Palworld automation", "work suitability"],
    },
    {
      slug: "desert-run",
      name: "Desert Expedition",
      mapSlug: "dessicated-desert",
      mapName: "Dessicated Desert",
      difficulty: "Medium",
      risk: "Medium",
      bestFor: "Players who ran there in starter cloth and died to the heat bar",
      duration: "One statue-to-statue loop",
      excerpt:
        "Heat gear, water, a cooler Pal, Ultra-enough spheres. Unlock statues. Haul ore home. Do not move the only palbox yet.",
      steps: [
        "Craft heat-resistant clothing. Bring a cooler Pal and water/food that is not a single berry stack.",
        "Fly or mount statue to statue. Unlock every Eagle you pass.",
        "Mine or catch what you came for. Soften alphas before throwing.",
        "Leave before night if you are undergeared, or use night if days are worse on your patch.",
        "Dump ore at the hills factory. A desert box waits until you can cool and feed it.",
      ],
      tips: [
        "Eggs on the sand need the right incubator later. Do not leave them on the lawn.",
        "If heat still fills instantly, you are missing pieces or a Pal passive. Go craft, do not 'tough it out'.",
        "The desert tower is a fighter job. This setup is the commute, not the boss.",
      ],
      image: header("Palworld desert expedition with heat gear"),
      seoKeywords: ["Palworld desert guide", "heat resistance", "Palworld ore"],
    },
    {
      slug: "raid-defense",
      name: "Raid Defense",
      mapSlug: "windswept-hills",
      mapName: "Any base",
      difficulty: "Medium",
      risk: "High",
      bestFor: "Open-air crafting floors that lose the kiln every raid",
      duration: "Each raid timer",
      excerpt:
        "Walls, a roof over production, a watch Pal, and world settings you actually chose. Legendary eggs do not live on the lawn.",
      steps: [
        "Put walls and a roof around beds, incubators, and the palbox path. Open-air benches eat raids and weather.",
        "Assign a combat Pal that stays home. The whole crew should not be in your pocket in a dungeon.",
        "Pick up eggs, cakes, and rare schematics off the ground when the timer pings.",
        "Fight on a chokepoint, not in the farm plots. Replant after, do not tank in the berries.",
        "If raids feel unfair on a fresh save, lower the slider. Difficulty is a setting, not a moral test.",
      ],
      tips: [
        "SAN and hunger still tick during a raid. A starving defense roster is not a defense roster.",
        "Later raid bosses (Bellanoir-class) are not the same as the early base raid. Gear up.",
        "Co-op: someone should be home or the simulation needs a host that can actually fight.",
      ],
      image: header("Palworld base raid defense walls"),
      seoKeywords: ["Palworld raids", "base defense", "Palworld raid settings"],
    },
    {
      slug: "tower-clear",
      name: "Tower Clear",
      mapSlug: "windswept-hills",
      mapName: "Towers",
      difficulty: "Medium",
      risk: "Medium",
      bestFor: "Parties that walk Zoe with the mining crew and a grey spear",
      duration: "One tower visit",
      excerpt:
        "Separate combat roster, type swap, food, and a gun or Pal skills you can use. Towers are Ancient Tech, not a side chest.",
      steps: [
        "Leave workers in the palbox. Form a party for this tower's type.",
        "Bring food, a weapon, and spheres if the partner Pal is a catch target.",
        "Use the inside as a fight — not a sightseeing tour with one Lamball.",
        "After a win, spend Ancient Technology on the next sphere or production unlock, not only on a gun you cannot feed ammo.",
        "Rebuild the party for the next biome's tower. Zoe's clear does not beat Lily on type.",
      ],
      tips: [
        "Condense the Pals you repeat on. Stars matter more than a sixth unused legendary.",
        "If you wipe, you are underleveled or on the wrong type. Catch a counter; do not buy a louder gun only.",
        "Fast travel out. Walking home at 5% HP through wolves is optional.",
      ],
      image: header("Palworld tower boss fight"),
      seoKeywords: ["Palworld towers", "Zoe Grizzbolt", "Palworld ancient technology"],
    },
    {
      slug: "cake-and-eggs",
      name: "Cake and Egg Loop",
      mapSlug: "windswept-hills",
      mapName: "Home base",
      difficulty: "Hard",
      risk: "Low",
      bestFor: "Players who built a breeding farm and then starved the ranch",
      duration: "Ongoing factory",
      excerpt:
        "Cake ingredients first, then the farm, then incubators at the right temperature. Breeding is a production line.",
      steps: [
        "Staff planting, watering, kindling, and farming until berries, wheat, milk, eggs, and honey are boring.",
        "Cook cake on a loop. One cake is not a breeding program.",
        "Put the two parents on the Breeding Farm with cake in the box. Check they are actually assigned.",
        "Incubate at the temperature the egg wants. Move the incubator or the box — do not hope.",
        "Hatch into the Pal you planned. Condense extras into the fighter you already use.",
      ],
      tips: [
        "Look up the parent combination. Random pairs burn cake.",
        "Do not start this in hour three. Towers 1–2 and a food belt first.",
        "Eggs on the lawn during a raid is how breeding programs end.",
      ],
      image: header("Palworld cake production and breeding farm"),
      seoKeywords: ["Palworld cake", "Palworld breeding farm", "how to breed Pals"],
    },
  ],
  guides: [
    {
      slug: "beginner-guide",
      title: "Palworld Beginner Guide",
      category: "Getting Started",
      readTime: "9 min",
      excerpt:
        "What to catch first, where to drop the palbox, and why the mining crew is not a tower party.",
      seoKeywords: ["Palworld beginner", "how to play Palworld", "Palworld first hours"],
      heroImage: hero("Palworld beginner guide"),
      content: [
        {
          heading: "What you are actually playing",
          body: "Palworld is a survival-crafting loop with creature collecting. You catch Pals, assign work, and the world tries to starve, freeze, or raid you while you scale weapons. You win by keeping a factory alive and walking into new biomes with a combat party that is not your lumber crew. A legendary on the summary screen with a dead base is a trophy, not progress.",
        },
        {
          heading: "The first two hours",
          body: "Catch gathering Pals (Lamball, Cattiva, Chikipi, Foxparks, Pengullet). Drop a palbox on flat ground. Beds, food, then production. Unlock the nearest Great Eagle statue. Do not sprint to the desert. Do not rebuild the base three times for a nicer screenshot.",
        },
        {
          heading: "Two rosters",
          body: "Workers stay home. Fighters go to towers, alphas, and dungeons. Taking the only kindling Pal into Zoe is how you return to a cold kiln and a pile of raw ore.",
        },
        {
          heading: "World settings are part of the game",
          body: "Item weight, hunger, Pal spawn, and raid interval are sliders. New players should ease hunger and raids. Turning everything to max on night one is a difficulty mod, not the default lesson.",
        },
        {
          heading: "What good looks like after a week",
          body: "A food belt that runs while you explore, heat and cold kits in the box, Zoe beaten with a real party, and statues unlocked toward the forest. Then desert. Breeding and sanctuaries wait.",
        },
      ],
    },
    {
      slug: "catching-and-spheres",
      title: "Palworld Catching and Spheres",
      category: "Catching",
      readTime: "8 min",
      excerpt:
        "Soften first, match sphere tier to the Pal, and spend Lifmunk Effigies on capture power.",
      seoKeywords: ["Palworld catching", "Pal spheres", "Lifmunk Effigy"],
      heroImage: header("Palworld throwing a Pal Sphere"),
      content: [
        {
          heading: "Soften, then throw",
          body: "A full-HP alpha eats Mega Spheres. Chip with Pal skills or a weapon into the red, apply a status if you have one, then throw. This is the whole catching skill. Everything else is inventory management.",
        },
        {
          heading: "Sphere tiers",
          body: "Craft or buy the next tier before you change biomes. Megas for hills, Giga/Ultra as HP and rarity jump, Legendary for the things you flew to a sanctuary for. Optimism is not a sphere tier.",
        },
        {
          heading: "Effigies",
          body: "Lifmunk Effigies on the overworld raise capture power. Pick them up while you statue-hunt. They are a permanent upgrade, not a collectible to screenshot and skip.",
        },
        {
          heading: "What to catch",
          body: "Early: work suits you do not have. Mid: a mount, a cooler, a fighter with the right type. Late: sanctuary and breed targets. Twenty combat Pals and zero watering is how the farm dies.",
        },
        {
          heading: "Alphas and bosses",
          body: "Alphas are catchable. Dungeon bosses are catchable. Tower partners are fights first. If you want the Pal, bring spheres and a party that can hold the DPS without killing it in one panic volley — or accept the kill and come back.",
        },
      ],
    },
    {
      slug: "base-and-work-suits",
      title: "Palworld Base and Work Suits",
      category: "Base Building",
      readTime: "9 min",
      excerpt:
        "Which jobs keep a base alive, how pathing fails, and why the palbox monitor exists.",
      seoKeywords: ["Palworld work suitability", "Palworld base guide", "palbox"],
      heroImage: header("Palworld palbox and work assignments"),
      content: [
        {
          heading: "Work suit priority",
          body: "Kindling, watering, planting, gathering, lumbering, mining, and transporting cover most of the early factory. Handiwork builds. Electricity and cooling come when the biome or the machine demands them. Farming and medicine are specialist lines. Combat partners are a different roster — do not grade a Jetragon on berry planting.",
        },
        {
          heading: "Assign explicitly",
          body: "A Pal set to everything wanders. Pin mining, planting, and kindling to Pals who have the suit. Check the palbox monitor when you log back in. If everyone is idle, it is beds, food, SAN, or a blocked path — not a need to recatch the island.",
        },
        {
          heading: "Pathing",
          body: "Leave corridors. Palboxes stuffed with chests in doorways create traffic jams that look like broken AI. Feeders sit on a path they already walk. Multi-story bases need stairs Pals will actually use.",
        },
        {
          heading: "Food and SAN",
          body: "A planted berry or wheat loop plus a cook beats running out with a spear every five minutes. Beds equal Pal count. Unhappy Pals work slower and then sit down. Raids and exploration do not pause hunger.",
        },
        {
          heading: "Moving the box",
          body: "You can move. You will hate moving a messy factory. Pick flat ground once, expand outward, add an outpost for ore or oil — do not relocate the only palbox every time a YouTuber drops a pin.",
        },
      ],
    },
    {
      slug: "combat-and-towers",
      title: "Palworld Combat, Towers, and Raids",
      category: "Combat",
      readTime: "8 min",
      excerpt:
        "Type matchups, condensing, tower order, and why raids are a settings-plus-walls problem.",
      seoKeywords: ["Palworld towers", "Palworld combat", "Palworld raids"],
      heroImage: header("Palworld tower and raid combat"),
      content: [
        {
          heading: "Type is the build",
          body: "Swap Pals the way you swap weapons. The hills party that beat Zoe can bounce off Lily. Read the boss. Bring the counter. A grey legendary with the wrong type is still the wrong type.",
        },
        {
          heading: "Towers",
          body: "Zoe is the exam for 'do you have a combat roster.' Later towers sit in forest, desert, volcano, snow, and expansion islands. Ancient Technology from clears unlocks the crafts you actually wanted. Walk in with food and a party that is not the mining crew.",
        },
        {
          heading: "Player weapons",
          body: "You do not have to main guns. Pal skills carry early. Guns and better spheres speed bosses and catching. Ammo is a factory product — if you cannot feed the gun, the spear plus Pals is the real build.",
        },
        {
          heading: "Condensing",
          body: "Stars on the Pals you fight with. Catch extras of that species. A box of unused legendaries is not condensing. Upgrade the one that already has the right type.",
        },
        {
          heading: "Raids",
          body: "Early base raids want walls, a roof, and a home fighter. If they feel unfair, check world settings. Large raid bosses later are a gear and party check — treat them like a tower, not like a wolf on the lawn.",
        },
      ],
    },
    {
      slug: "breeding",
      title: "Palworld Breeding, Cake, and Eggs",
      category: "Breeding",
      readTime: "8 min",
      excerpt:
        "Cake is a factory. Parents are a combo. Temperature is a setting. Do this after the ranch already runs.",
      seoKeywords: ["Palworld breeding", "Palworld cake recipe", "Palworld incubator"],
      heroImage: header("Palworld breeding farm and incubators"),
      content: [
        {
          heading: "Factory first",
          body: "Breeding Farm plus cake. Cake wants a loop of wheat, berries, milk, eggs, and honey — which means planting, watering, farming, and kindling already work. If those jobs are empty, you are not a breeder yet. You are a rancher with a decorative farm.",
        },
        {
          heading: "Parents",
          body: "Combos are known. Look up the Pal you need. Blind pairing burns cake and fills the box with things you will not condense. Breed for work suits and for the fighter you already take to towers.",
        },
        {
          heading: "Temperature",
          body: "Hot eggs, cold eggs, normal eggs. Incubators and the biome of the box have to match. A volcano egg in a snow chalet is a stall, not a mystery.",
        },
        {
          heading: "What to do with hatches",
          body: "The goal Pal goes to work or to the fight roster. Duplicates condense. A zoo with no stars and no jobs is a SAN bill.",
        },
        {
          heading: "When to start",
          body: "After a food belt and the first towers. Hour-three breeding is how people starve the ranch and decide the game is idle.",
        },
      ],
    },
    {
      slug: "biomes-and-gear",
      title: "Palworld Biomes, Heat, and Cold",
      category: "Exploration",
      readTime: "7 min",
      excerpt:
        "Hills, forest, desert, volcano, snow, sanctuaries, islands — gear first, palbox second.",
      seoKeywords: ["Palworld biomes", "heat resistance", "cold resistance Palworld"],
      heroImage: header("Palworld heat and cold gear"),
      content: [
        {
          heading: "Order of operations",
          body: "Windswept Hills until the factory runs. Forest for lumber and the next tower. Desert with heat gear. Volcano and snow only with the matching kit. Sanctuaries and Sakurajima when you can fly in and out with Ultra+ spheres.",
        },
        {
          heading: "Heat and cold",
          body: "Clothing pieces stack. Party Pals with cooling or kindling help. Food helps. Starter cloth in a blizzard is not a skill issue — it is a crafting skip. If the bar fills instantly, go home and craft.",
        },
        {
          heading: "Statues are the mount",
          body: "Great Eagle statues are fast travel. Unlock them on every expedition. A flying Pal is for the gaps between statues and for sanctuaries, not a reason to skip the statue on the ridge.",
        },
        {
          heading: "Outposts vs moving home",
          body: "A small chest and a bed near ore is an outpost. A second palbox needs staff, food, and climate control. Keep the hills factory until the new box can run overnight without you.",
        },
        {
          heading: "Islands",
          body: "Sakurajima, Feybreak, and later maps are new continents. Same loop: kit, statue, then industry. Oil and raid bosses are not a reason to delete the berry line.",
        },
      ],
    },
    {
      slug: "settings-and-performance",
      title: "Palworld Settings and Performance",
      category: "PC Setup",
      readTime: "6 min",
      excerpt:
        "World sliders, Pal counts, shadows, and hosts that can actually simulate a ranch.",
      seoKeywords: ["Palworld settings", "Palworld world settings", "Palworld FPS"],
      heroImage: header("Palworld world settings and graphics"),
      content: [
        {
          heading: "World sliders",
          body: "Hunger, raid interval, Pal spawn, item weight, and XP are all tunable. Ease hunger and raids on a first save. You can tighten later. Max everything on night one is a different game.",
        },
        {
          heading: "Performance",
          body: "The simulation is heavier than the gunplay. Drop shadows and on-screen Pal count first if you hitch. A pretty forest at 20 FPS is how you miss a sphere throw.",
        },
        {
          heading: "Co-op and servers",
          body: "Solo, friends, and dedicated servers all work. Host on a machine that can simulate the base while people catch. Desync and frozen ranches are usually the host, not 'Pals are broken.'",
        },
        {
          heading: "PvP",
          body: "Optional in world settings and server rules. Learn PvE automation before you turn player damage on. A raid is already enough homework.",
        },
        {
          heading: "Saves",
          body: "Cloud and local both fail if you never exit cleanly. After a breeding session or a tower, give the world a clean save before you alt-tab into a second game.",
        },
      ],
    },
    {
      slug: "faq",
      title: "Palworld FAQ",
      category: "FAQ",
      readTime: "5 min",
      excerpt: "Solo play, guns, idle bases, PvP, and whether you have to breed.",
      seoKeywords: ["Palworld FAQ", "Palworld solo", "why is my Palworld base idle"],
      content: [
        {
          heading: "Can I play Palworld solo?",
          body: "Yes. Solo, friends, and dedicated servers all work. Base simulation still runs while you explore if the world is hosted. Leave workers home.",
        },
        {
          heading: "Do I have to use guns?",
          body: "No. Pal skills and melee carry early game. Guns and better spheres speed up catching and bosses. Ammo is a factory product.",
        },
        {
          heading: "Why is my base idle?",
          body: "Missing beds, food, SAN, or job assignments — or a blocked path. Check the palbox monitor before recatching everything.",
        },
        {
          heading: "Is there PvP?",
          body: "Optional depending on world settings and server rules. Learn PvE automation before turning player damage on.",
        },
        {
          heading: "Do I have to breed?",
          body: "No. You can beat towers on caught Pals. Breeding is how you target work suits and stats later. Cake first, combos second.",
        },
      ],
    },
  ],
};
