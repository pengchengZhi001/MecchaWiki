import type { FullWiki, WikiImage } from "../types";
import { steamHeader, steamHero } from "@/lib/steam-wiki";

const APP = 381210;

function header(alt: string): WikiImage {
  return { src: steamHeader(APP), alt };
}

function hero(alt: string): WikiImage {
  return { src: steamHero(APP), alt };
}

export const dbdWiki: FullWiki = {
  slug: "dead-by-daylight",
  hubs: { maps: "Realms", roles: "Roles", strats: "Setups" },
  copy: {
    home: {
      strats: "Split gens, loops, and safe unhooks — not a flashlight montage.",
      roles: "Repair and unhook first. Nurse last.",
      maps: "MacMillan tiles before you main indoor labyrinths.",
      guides: "Beginner path, looping, gens, killer pressure, perks, and both sides.",
    },
    pages: {
      maps: "Realms and tiles. Shack and jungle gyms matter more than the licensed skyline.",
      roles: "Four survivors, one killer. Jobs still exist: gens, hooks, loops, pressure.",
      strats: "How chases should end, why a 3-gen loses games, and when to take a hit.",
    },
  },
  maps: [
    {
      slug: "macmillan",
      name: "MacMillan Estate",
      difficulty: "Easy",
      tagline: "The classroom realm: jungle gyms, shack, and loops you can actually learn.",
      overview:
        "MacMillan (Coal Tower, Shelter Woods, Ironworks, Suffocation Pit, and the rest of the estate) is where you should learn tiles. Shack is a strong loop. Jungle gyms have windows you run in a pattern, not a panic vault. Killers that stare at a pallet here will teach you more than a jump scare. Play both sides on this realm before you blame RNG. Call shack, gym, and the gen in the open — not a streamer's 2020 tile name until you can pre-drop versus hold.",
      stats: [
        { label: "Learn first", value: "Yes — outdoor tiles" },
        { label: "Strong tile", value: "Shack + jungle gyms" },
        { label: "Gen rule", value: "Do not finish the two easy ones that leave a 3-gen" },
      ],
      poi: [
        { name: "Killer shack", note: "Window, pallet, a God pallet if it spawned. Loop slowly. A 20-second chase that donates three pallets is a loss." },
        { name: "Jungle gym", note: "Window chain. Killer mindgames live here. Hold the pallet until you must drop." },
        { name: "Main building", note: "Indoor-ish. Do not all four sit on the same gen in the doorway." },
        { name: "Open field gens", note: "Finish these later if they would leave three packed together." },
        { name: "Hooks", note: "Scamper to a tile after unhook. Unhooking in the killer's face with no trade is a second hook." },
      ],
      notes: [
        "Play both sides. You will loop better after you have been the killer staring at a pallet.",
        "Learn to pre-drop versus holding every pallet. Dead Hard and windows do not replace map knowledge.",
        "Cap FPS for stable skill checks. Spikes during gens cause comedy, not progress.",
      ],
      image: header("Dead by Daylight MacMillan Estate"),
      seoKeywords: ["DbD MacMillan", "MacMillan loops", "DbD shack"],
    },
    {
      slug: "autohaven",
      name: "Autohaven Wreckers",
      difficulty: "Easy",
      tagline: "Cars, buses, and wreckers: more line-of-sight blockers, same 3-gen rule.",
      overview:
        "Autohaven is junkyard tiles — buses, cars, wreckers, Blood Lodge, Gas Heaven. Loops are shorter and messier than MacMillan gyms. You still split generators. You still do not crouch-walk everywhere. Killers get blocked by cars the same way you do. Learn a bus loop and a car loop. The realm looks chaotic; the habit is the same: strong tile, spend resources slowly, make the killer earn the down.",
      stats: [
        { label: "Tiles", value: "Cars, buses, wreckers" },
        { label: "LOS", value: "Blocked — good for hiding, bad for 'where is the killer'" },
        { label: "Killer", value: "Leave a healthy survivor to kick a gen" },
      ],
      poi: [
        { name: "Bus / wrecker", note: "Short loops. Pre-drop if the killer has a fast power. Do not donate every pallet in 15 seconds." },
        { name: "Blood Lodge / gas", note: "Main buildings. Gens inside. Do not 4-stack one." },
        { name: "Car walls", note: "Mindgame city. Walk, run when spotted. Crouch-walking everywhere is how you arrive late to a hook." },
        { name: "Shack if it spawned", note: "Still shack. Treat it like MacMillan." },
        { name: "Corner gens", note: "3-gen bait. Look at the map before you pop the second easy one." },
      ],
      notes: [
        "Bring a med-kit or know where to heal. Slugged teammates need a plan, not panic vaults.",
        "Audio cues (terror radius, directional screams) are gameplay. Overlays off.",
        "Same unhook rule: take the hit or wait for a flashlight/pallet setup.",
      ],
      image: header("Dead by Daylight Autohaven Wreckers"),
      seoKeywords: ["DbD Autohaven", "Wreckers DbD", "DbD bus loop"],
    },
    {
      slug: "coldwind",
      name: "Coldwind Farm",
      difficulty: "Medium",
      tagline: "Corn, cowshed, Thompson house — and a realm that eats survivors who cannot run a cornline.",
      overview:
        "Coldwind is corn and big buildings (Thompson House, Fractured Cowshed, Rancid Abattoir). Corn is a loop if you use it; it is a death if you zigzag with no tile. Killers with mobility eat open corn. Split gens across the farm, not three in the house. The house is a strong main — do not all four repair the same gen on the porch. As killer, pressure the house and a field gen, not one survivor for three minutes in the corn.",
      stats: [
        { label: "Open", value: "Corn — need a plan, not vibes" },
        { label: "Main", value: "Thompson / cowshed" },
        { label: "3-gen", value: "Easy to build around the house. Don't." },
      ],
      poi: [
        { name: "Corn", note: "Break LOS, get to a tile. Honking the terror radius into a dead zone is not stealth." },
        { name: "Thompson House", note: "Strong main. Loop upstairs/down. Killer: kick the gen and leave." },
        { name: "Cowshed / silo", note: "Vertical-ish. Windows. Do not vault in the killer's face for no reason." },
        { name: "Killer shack", note: "If it spawned in corn, it is still the best tile on the realm." },
        { name: "Hook in corn", note: "Safe unhook needs a body block or a wait. Face-unhook is a tunnel gift." },
      ],
      notes: [
        "All four survivors on one generator. That is a 3-gen you built for the killer — extra true on a farm.",
        "As killer, pick someone with a readable power (Wraith, Huntress) before Nurse.",
        "Lighting: use accessibility options if corn is unreadable.",
      ],
      image: header("Dead by Daylight Coldwind Farm"),
      seoKeywords: ["DbD Coldwind", "Thompson House", "DbD corn"],
    },
    {
      slug: "haddonfield",
      name: "Haddonfield",
      difficulty: "Medium",
      tagline: "Suburban streets, houses, and a map that looks like a movie until you 3-gen the block.",
      overview:
        "Haddonfield (and similar street maps) is houses and road. Loops are house tiles and fences, not jungle gyms. Killers with map pressure love the street. Survivors that finish two house gens on the same cul-de-sac build the 3-gen. Split to opposite houses. Unhook through a house, not in the street in the killer's face. The licensed look is flavor. The gen spread is the game.",
      stats: [
        { label: "Shape", value: "Street + houses" },
        { label: "Risk", value: "3-gen on one block" },
        { label: "Chase", value: "House tiles, not the road" },
      ],
      poi: [
        { name: "Street", note: "Killer patrol. Do not repair in the open unless you have a tile." },
        { name: "Houses", note: "Windows and pallets. Loop inside, leave through a back fence." },
        { name: "Opposite block gens", note: "Split. Two easy porch gens are a 3-gen factory." },
        { name: "Hooks on porches", note: "Wait for the killer to commit away. Take the hit if you unhook in face." },
        { name: "Endgame", note: "Gates on a street are a camping exam. Body block or don't go." },
      ],
      notes: [
        "Do not finish two easy gens that leave three close ones. Killers live there.",
        "Info and exhaustion perks first. Meta pages change every patch; habits do not.",
        "Jump scares matter less than tiles once you leave the tutorial.",
      ],
      image: header("Dead by Daylight Haddonfield"),
      seoKeywords: ["DbD Haddonfield", "Haddonfield loops", "DbD street map"],
    },
    {
      slug: "the-game",
      name: "The Game (Gideon)",
      difficulty: "Hard",
      tagline: "Indoor labyrinth: bathrooms, stairs, and a map that punishes lost survivors more than the killer.",
      overview:
        "Gideon Meat Plant / The Game is indoor, multi-floor, and easy to get lost on. Gens are stacked in a way that 3-gens happen if you do not think. Killers with stealth or mobility eat confused teams. Learn stairs and bathrooms as tiles. Do not crouch-walk the whole building. Do not all four sit on the bathroom gen. Play this after MacMillan so you already know what a loop is supposed to feel like — then apply it in a maze.",
      stats: [
        { label: "Indoor", value: "Yes — call stairs, not vibes" },
        { label: "3-gen", value: "Very easy to build. Look at the HUD gens." },
        { label: "Killer", value: "Patrol multiple floors, not one locker for 60 seconds" },
      ],
      poi: [
        { name: "Bathrooms", note: "Loops and mindgames. Hold pallets. Panic vaults die." },
        { name: "Stairs", note: "The map. Killer hears you. Survivor: do not all take the same stair." },
        { name: "Office / main", note: "Gens. Split floors." },
        { name: "Hooks in halls", note: "Safe unhook around a corner. Face-unhook in a hallway is a tunnel." },
        { name: "Hatch / endgame", note: "Indoor hatch is a search exam. Do not wander while slugged teammates wait." },
      ],
      notes: [
        "You will loop better after you have been the killer staring at a pallet — extra true indoors.",
        "Directional screams matter. Headphones.",
        "Licensed indoor maps (RPD, Midwich) are the same homework with a different coat of paint.",
      ],
      image: header("Dead by Daylight The Game Gideon"),
      seoKeywords: ["DbD The Game", "Gideon Meat Plant", "DbD indoor map"],
    },
    {
      slug: "raccoon-city",
      name: "Raccoon City",
      difficulty: "Hard",
      tagline: "RPD: two wings, a maze, and a map that is a 3-gen if you only play East.",
      overview:
        "Raccoon Police Station is a licensed indoor monster: East/West, stairs, library, and a layout people still get lost in. Split gens across wings. A team that only repairs East builds a 3-gen the killer can babysit. Loop the library and hall tiles; do not run the main hall in a straight line. As killer, pressure both wings. Tunneling at five gens every game still teaches you nothing about this map.",
      stats: [
        { label: "Wings", value: "Split East and West gens" },
        { label: "Learn after", value: "MacMillan + one indoor" },
        { label: "Lost?", value: "You are the down" },
      ],
      poi: [
        { name: "East / West", note: "The whole strategy. Look at remaining gens before you pop another East one." },
        { name: "Library / main hall", note: "Loops. Killer: do not 3-minute patrol a locker." },
        { name: "Stairs / balcony", note: "Windows. Mindgames. Dead Hard does not replace knowing the tile." },
        { name: "Hooks", note: "Long walks. Body block or wait. Face-unhook in the hall is a second hook." },
        { name: "Gates", note: "Far. Endgame collapse is a timer. Decide to go or hide." },
      ],
      notes: [
        "The base roster is enough to learn. Licensed maps are not a paywall to play; they are a navigation exam.",
        "Killer FOV and survivor accessibility options exist if lighting is unreadable.",
        "Alternate sides. RPD as killer teaches the gens survivors keep 3-genning.",
      ],
      image: header("Dead by Daylight Raccoon City Police Station"),
      seoKeywords: ["DbD RPD", "Raccoon City DbD", "DbD police station"],
    },
    {
      slug: "garden-of-joy",
      name: "Garden of Joy",
      difficulty: "Medium",
      tagline: "House, greenhouse, and a modern realm that still obeys shack and 3-gen math.",
      overview:
        "Garden of Joy is a house-plus-garden realm: greenhouse, main house, and outdoor tiles that feel like a mix of Haddonfield and MacMillan. The house is a strong main. The garden can 3-gen if you pop the two closest gens first. Loop greenhouse glass and house windows the same way you loop gyms — pattern, not panic. Killers with area denial like the house. Survivors should drag chases to shack if it spawned.",
      stats: [
        { label: "Main", value: "House / greenhouse" },
        { label: "Habit", value: "Same as every realm — split gens, strong tiles" },
        { label: "New maps", value: "Easier after MacMillan tiles click" },
      ],
      poi: [
        { name: "Main house", note: "Strong. Do not 4-stack the kitchen gen." },
        { name: "Greenhouse", note: "LOS and windows. Hold pallets." },
        { name: "Garden gens", note: "3-gen bait if they are clustered. Look first." },
        { name: "Shack", note: "If present, play it. Always." },
        { name: "Hooks in garden", note: "Open. Wait or trade. Face-unhook is a tunnel." },
      ],
      notes: [
        "Meta perk pages change every patch; habits do not. Info and exhaustion first.",
        "Play both sides here. The house looks different when you are the one kicking the gen.",
        "New realms keep shipping. The 3-gen rule ships with them.",
      ],
      image: header("Dead by Daylight Garden of Joy"),
      seoKeywords: ["DbD Garden of Joy", "Garden of Joy loops", "DbD greenhouse"],
    },
    {
      slug: "midwich",
      name: "Midwich Elementary",
      difficulty: "Hard",
      tagline: "School halls, a Silent Hill fog, and indoor gens that cluster if you are greedy.",
      overview:
        "Midwich is hallways, classrooms, and a layout that feels like The Game with a school coat. Indoor 3-gens are easy. Loop lockers and classroom tiles; do not sprint the main hall on a prediction. Killers with ranged or mobility powers (Huntress, Nurse — Nurse last) eat long halls. Survivors: split classrooms. Killers: kick a gen and leave. A 60-second locker patrol is how five gens become two on the other side of the school.",
      stats: [
        { label: "Indoor", value: "Halls + rooms" },
        { label: "Power", value: "Ranged killers love halls" },
        { label: "Survivor", value: "Classrooms as tiles, not a straight sprint" },
      ],
      poi: [
        { name: "Main hall", note: "A Huntress hallway. Cross it with a plan." },
        { name: "Classrooms", note: "Pallets and windows. Loop, then leave to a gen that is not next to the last two." },
        { name: "Bathroom / side", note: "Mindgames. Hold the pallet." },
        { name: "Hooks in hall", note: "Long. Body block. Do not unhook at the killer's feet." },
        { name: "Gens in a cluster", note: "The 3-gen. Look at the HUD." },
      ],
      notes: [
        "As killer, pick Huntress or Wraith before Nurse. Readable powers teach pressure.",
        "Skill checks: cap FPS. Spikes during gens are comedy.",
        "Licensed fog is flavor. The pallet is the game.",
      ],
      image: header("Dead by Daylight Midwich Elementary"),
      seoKeywords: ["DbD Midwich", "Midwich Elementary", "DbD Silent Hill map"],
    },
  ],
  roles: [
    {
      slug: "repairer",
      name: "Repairer",
      role: "Generators",
      difficulty: "Easy",
      beginnerRank: 1,
      tiers: [
        { label: "Job", value: "Split gens, hit skill checks, do not 4-stack" },
        { label: "Fail", value: "Two easy gens that leave a 3-gen" },
      ],
      kit: ["A gen that is not next to the other two remaining", "Calm skill checks", "Headphones for the terror radius"],
      excerpt:
        "The best first survivor job. You win by finishing five generators that are not a triangle the killer can babysit.",
      strengths: [
        "Teaches the win condition, not the chase clip",
        "Info perks help; they do not replace looking at remaining gens",
        "Every map is this job with a different coat of paint",
      ],
      weaknesses: [
        "All four on one generator. That is a 3-gen you built for the killer",
        "Crouch-walking everywhere and arriving to a gen at 99 when the chase already ended",
      ],
      starterTips: [
        "Look at remaining generator locations before you pop the second easy one.",
        "Cap FPS for stable skill checks.",
        "Walk, run when spotted, and stop honking the terror radius into a dead zone.",
        "Play killer once so you see how a 3-gen feels to patrol.",
      ],
      image: hero("Dead by Daylight repairing a generator"),
      seoKeywords: ["DbD generators", "DbD 3-gen", "how to do gens"],
    },
    {
      slug: "unhooker",
      name: "Unhooker",
      role: "Saves and trades",
      difficulty: "Easy",
      beginnerRank: 2,
      tiers: [
        { label: "Job", value: "Safe unhook, take the hit, or wait" },
        { label: "Fail", value: "Unhooking in the killer's face with no trade" },
      ],
      kit: ["A body block or a pallet/flashlight setup", "A med-kit or a heal plan", "The patience to wait two seconds"],
      excerpt:
        "You keep people in the game. Face-unhooks are how tunnels start. Take the hit or wait for a setup.",
      strengths: [
        "Wins games that a 4K chase clip still loses",
        "Teaches when to take a hit — the tagline",
        "Slugged teammates need a plan, not panic vaults",
      ],
      weaknesses: [
        "Insta-unhook every time because the HUD is yellow",
        "No heal after, then a second hook in 10 seconds",
      ],
      starterTips: [
        "Unhooking in the killer's face with no trade. Take the hit or wait for a flashlight/pallet setup.",
        "Bring a med-kit or know where to heal.",
        "If the killer is camping at five gens, do a gen — then a trade. Not four people in the basement.",
        "Perks that help unhooks change every patch. The wait-or-trade habit does not.",
      ],
      image: hero("Dead by Daylight unhooking a survivor"),
      seoKeywords: ["DbD unhook", "DbD trade hit", "DbD camping"],
    },
    {
      slug: "looper",
      name: "Looper",
      role: "Chase",
      difficulty: "Medium",
      beginnerRank: 3,
      tiers: [
        { label: "Job", value: "Strong tile, spend pallets slowly, earn the down" },
        { label: "Fail", value: "A 20-second chase that donates three pallets" },
      ],
      kit: ["Shack or a gym", "Pre-drop vs hold judgment", "Exhaustion as extra, not a personality"],
      excerpt:
        "You buy gen time. Run to a strong tile, make the killer earn the down. Dead Hard does not replace map knowledge.",
      strengths: [
        "The skill that makes gens possible",
        "You will loop better after you have been the killer staring at a pallet",
        "Windows and pallets are the game once jump scares stop mattering",
      ],
      weaknesses: [
        "Holding every pallet until it is a free vault for them",
        "Chasing into a dead zone with no tile",
      ],
      starterTips: [
        "Learn to pre-drop versus holding every pallet.",
        "Run to shack or a jungle gym, not a random rock.",
        "Dead Hard and windows do not replace map knowledge.",
        "A long chase that spends every pallet on the map is still a loss if gens are 3-genning.",
      ],
      image: hero("Dead by Daylight looping a pallet"),
      seoKeywords: ["DbD looping", "DbD pallets", "how to loop"],
    },
    {
      slug: "m1-killer",
      name: "M1 Killer",
      role: "Pressure with a readable power",
      difficulty: "Medium",
      beginnerRank: 4,
      tiers: [
        { label: "Job", value: "Multiple gens, not one survivor for three minutes" },
        { label: "Ops", value: "Wraith, Huntress, Trapper — before Nurse" },
      ],
      kit: ["A power you can read", "A kick on a gen after a hook", "The discipline to leave a healthy survivor"],
      excerpt:
        "The best first killer job. Leave a healthy survivor to kick a gen. One hooked person plus regression is more than a 60-second locker patrol.",
      strengths: [
        "Teaches pressure, which is how killers win",
        "Huntress hatchets teach aim without Nurse blinks",
        "Wraith teaches when to uncloak on a loop",
      ],
      weaknesses: [
        "Tunneling at five gens every game — you can win and learn nothing",
        "Camping a hook while four gens pop",
      ],
      starterTips: [
        "Pick someone with a readable power (Wraith, Huntress, or a simpler licensed killer) before Nurse.",
        "Leave a healthy survivor to kick a gen.",
        "Do not 3-minute patrol a locker. The other three are on gens.",
        "Play survivor. You will pressure better after you have been the one on the gen.",
      ],
      image: hero("Dead by Daylight killer patrolling generators"),
      seoKeywords: ["DbD killer beginner", "DbD Wraith", "DbD Huntress"],
    },
    {
      slug: "high-skill-killer",
      name: "High-Skill Killer",
      role: "Nurse, Blight, and the homework",
      difficulty: "Hard",
      beginnerRank: 5,
      tiers: [
        { label: "When", value: "After you can win with Wraith on pressure" },
        { label: "Fail", value: "Instalock Nurse and blame ping" },
      ],
      kit: ["Hours in custom or bot games if you have them", "The same gen-pressure habits", "No excuse tunneling as 'the only way'"],
      excerpt:
        "Blink and rush killers delete loops. They do not delete the need to kick gens. Learn M1 pressure first or you will tunnel at five gens forever.",
      strengths: [
        "Ends chases that a Trapper cannot",
        "Ranked ceiling is real",
        "Still loses to a 3-gen you let them build if you never kick",
      ],
      weaknesses: [
        "The whole identity is the power — then you never learn tiles",
        "Licensed skins are not the skill",
      ],
      starterTips: [
        "Nurse last. The loading screen is honest about new killers too.",
        "Tunneling at five gens every game. You can win that way and still learn nothing about pressure.",
        "Same 3-gen rule. A Nurse who ignores gens still loses to five pops.",
        "DLC is not required. The base roster is enough to learn. Licensed killers are powers plus cosmetics, not a paywall to play.",
      ],
      image: hero("Dead by Daylight Nurse"),
      seoKeywords: ["DbD Nurse", "DbD Blight", "hardest DbD killers"],
    },
  ],
  strats: [
    {
      slug: "split-gens",
      name: "Split Gens",
      mapSlug: "macmillan",
      mapName: "MacMillan Estate",
      difficulty: "Easy",
      risk: "Low",
      bestFor: "Teams that 4-stack one generator and gift a 3-gen",
      duration: "The whole match",
      excerpt:
        "Do not finish two easy gens that leave three close ones. Killers live there.",
      steps: [
        "At five gens, look at the map. Identify a cluster. Work the outliers first if the cluster would become the 3-gen.",
        "Two on a gen is plenty. Four is a party the killer walks into.",
        "After a hook, one unhooks, two stay on separate gens. Not four in the basement.",
        "If you already 3-genned, stop popping the last easy one until someone is in a chase far away — or accept the patrol.",
        "Killer side: you want that cluster. Kick, leave, come back. Do not tunnel at five gens instead.",
      ],
      tips: [
        "All four survivors on one generator. That is a 3-gen you built for the killer.",
        "What is a 3-gen? Three remaining generators close together, easy to patrol.",
        "Works on every realm. MacMillan just makes the tiles obvious.",
      ],
      image: header("Dead by Daylight generator spread"),
      seoKeywords: ["DbD 3-gen", "DbD generator strategy", "how to not 3-gen"],
    },
    {
      slug: "loop-tile",
      name: "Run a Strong Tile",
      mapSlug: "macmillan",
      mapName: "MacMillan Estate",
      difficulty: "Medium",
      risk: "Medium",
      bestFor: "Survivors who drop three pallets in 20 seconds",
      duration: "One chase",
      excerpt:
        "Run to a strong tile, spend resources slowly, and make the killer earn the down.",
      steps: [
        "When the chase starts, path to shack or a jungle gym, not a random tree.",
        "Hold the pallet until the mindgame is lost, then drop — or pre-drop if they have a fast power.",
        "Window in a pattern. Panic vaults are hits.",
        "If the tile is dead, rotate to the next. A 20-second chase that donates three pallets is a loss.",
        "Killer: break the pallet you must, then leave to a gen. Bloodlust is extra, not a 3-minute tour.",
      ],
      tips: [
        "Learn to pre-drop versus holding every pallet. Dead Hard and windows do not replace map knowledge.",
        "Play both sides. You will loop better after you have been the killer staring at a pallet.",
        "Autohaven cars are shorter tiles. Same habit, faster decisions.",
      ],
      image: header("Dead by Daylight shack loop"),
      seoKeywords: ["DbD looping", "DbD shack", "DbD jungle gym"],
    },
    {
      slug: "safe-unhook",
      name: "Safe Unhook",
      mapSlug: "autohaven",
      mapName: "Autohaven Wreckers",
      difficulty: "Easy",
      risk: "High",
      bestFor: "Face-unhooks that become tunnels",
      duration: "Until they are off the hook and moving",
      excerpt:
        "Take the hit or wait for a flashlight/pallet setup. Unhooking in the killer's face with no trade is a second hook.",
      steps: [
        "If the killer is on the hook, wait, body block, or flashlight/pallet. Do not tap unhook and run.",
        "If they are camping at five gens, do generators. A trade at 3 gens is different from a trade at 5.",
        "Unhook, take the hit if you promised the trade, then both run to a tile — not a dead zone.",
        "Heal after. Slugged teammates need a plan, not panic vaults.",
        "Why do I get tunneled? It is a valid if toxic-feeling strategy. This setup reduces it; it will not vanish.",
      ],
      tips: [
        "Bring a med-kit or know where to heal.",
        "Four people in basement is how the other three gens sit at 0.",
        "Perks help. Positioning helps more.",
      ],
      image: header("Dead by Daylight unhook"),
      seoKeywords: ["DbD unhook", "DbD tunneling", "DbD camping"],
    },
    {
      slug: "killer-pressure",
      name: "Killer Pressure",
      mapSlug: "coldwind",
      mapName: "Coldwind Farm",
      difficulty: "Medium",
      risk: "Low",
      bestFor: "Killers who chase one person for three minutes",
      duration: "Between hooks",
      excerpt:
        "Leave a healthy survivor to kick a gen. One hooked person plus regression is more than a locker tour.",
      steps: [
        "Hook, then walk to the loudest gen or the cluster you want to keep.",
        "Kick, injure someone else if they are there, do not tunnel the unhook at five gens every time.",
        "If a chase hits 40 seconds with no down, leave for a gen. The down can wait.",
        "Patrol two gens, not one locker for 60 seconds.",
        "Endgame: you can tunnel. Early game: you learn nothing if that is the only plan.",
      ],
      tips: [
        "As killer, pick Wraith or Huntress before Nurse.",
        "Tunneling at five gens every game. You can win that way and still learn nothing about pressure.",
        "Play survivor. You will see the gens you keep ignoring.",
      ],
      image: header("Dead by Daylight killer kicking a generator"),
      seoKeywords: ["DbD killer pressure", "DbD gen kick", "how to play killer"],
    },
    {
      slug: "avoid-3gen",
      name: "Avoid the 3-Gen",
      mapSlug: "haddonfield",
      mapName: "Haddonfield",
      difficulty: "Medium",
      risk: "Low",
      bestFor: "Street and indoor maps where gens cluster",
      duration: "Before the fourth gen pops",
      excerpt:
        "Three remaining generators close together, easy for the killer to patrol. Do not build it.",
      steps: [
        "Name the cluster out loud if you have a mic. Ping if you do not.",
        "Work far gens while people are healthy. After two hooks, it is harder to travel.",
        "If the 3-gen is already built, force a chase on the other side of the map or accept a long game.",
        "Killer: you want this. Herd them into it by kicking the outliers.",
        "Indoor maps (RPD, Gideon, Midwich): look at the HUD. The cluster is not always obvious in 3D.",
      ],
      tips: [
        "Do not finish two easy gens that leave three close ones.",
        "Haddonfield porches and RPD East are classic 3-gen factories.",
        "A 3-gen at two gens left is a killer win condition you handed over.",
      ],
      image: header("Dead by Daylight remaining generators"),
      seoKeywords: ["what is a 3-gen", "DbD 3 gen", "DbD generator placement"],
    },
    {
      slug: "play-both-sides",
      name: "Play Both Sides",
      mapName: "Any trial",
      difficulty: "Easy",
      risk: "Low",
      bestFor: "One-tricks who only survivor or only killer",
      duration: "A session",
      excerpt:
        "Alternate. Each side teaches the other. You will loop better after you have been the killer staring at a pallet.",
      steps: [
        "One survivor game, one killer game. Repeat.",
        "Survivor: notice which gens you would kick. Killer: notice which tiles you cannot loop.",
        "Pick a readable killer (Wraith, Huntress) so the lesson is pressure, not Nurse homework.",
        "Do not need DLC. Base roster is enough to learn.",
        "When you tilt on one side, switch. Same MMR anger, different homework.",
      ],
      tips: [
        "Survivor or killer first? Alternate. Each side teaches the other.",
        "Licensed killers are cosmetics plus powers, not a paywall to play.",
        "Jump scares stop mattering. Tiles do not.",
      ],
      image: header("Dead by Daylight survivor and killer"),
      seoKeywords: ["DbD both sides", "DbD killer or survivor", "learn DbD"],
    },
  ],
  guides: [
    {
      slug: "beginner-guide",
      title: "Dead by Daylight Beginner Guide",
      category: "Getting Started",
      readTime: "9 min",
      excerpt:
        "Play both sides, split gens, and pick Wraith before Nurse.",
      seoKeywords: ["DbD beginner", "how to play Dead by Daylight", "DbD first hours"],
      heroImage: hero("Dead by Daylight beginner guide"),
      content: [
        {
          heading: "What you are actually playing",
          body: "Dead by Daylight is 4v1 asymmetric horror. Survivors repair generators; the killer hunts. Loops, perks, and map tiles matter more than jump scares once you leave the tutorial. You win as survivor by splitting gens, looping when chased, and unhooking safely. As killer, you pressure multiple gens, not one survivor for three minutes.",
        },
        {
          heading: "The first week",
          body: "Play both sides. You will loop better after you have been the killer staring at a pallet. Learn to pre-drop versus holding every pallet. Dead Hard and windows do not replace map knowledge. As killer, pick Wraith, Huntress, or a simpler licensed killer before Nurse.",
        },
        {
          heading: "Gens and hooks",
          body: "Do not 4-stack one generator. That is a 3-gen you built for the killer. Unhooking in the killer's face with no trade is a second hook. Take the hit or wait.",
        },
        {
          heading: "DLC",
          body: "You do not need it. The base roster is enough to learn. Licensed killers are cosmetics plus powers, not a paywall to play.",
        },
        {
          heading: "What good looks like after a week",
          body: "You can run shack, split gens, unhook without a tunnel gift, and kick a gen as killer after a hook. Then indoor maps. Then Nurse, if you must.",
        },
      ],
    },
    {
      slug: "looping-and-gen-pressure",
      title: "DbD Looping and Generator Pressure",
      category: "Fundamentals",
      readTime: "8 min",
      excerpt:
        "How chases should end, and why three generators in a triangle lose games.",
      seoKeywords: ["DbD looping", "DbD 3-gen", "DbD killer pressure"],
      heroImage: header("Dead by Daylight chase"),
      content: [
        {
          heading: "Survivor chase",
          body: "Run to a strong tile, spend resources slowly, and make the killer earn the down. A 20-second chase that donates three pallets is a loss.",
        },
        {
          heading: "Killer pressure",
          body: "Leave a healthy survivor to kick a gen. One hooked person plus regression is more than a 60-second patrol of a locker.",
        },
        {
          heading: "Three-gen",
          body: "Do not finish two easy gens that leave three close ones. Killers live there.",
        },
        {
          heading: "Perks",
          body: "Info and exhaustion first. Meta perk pages change every patch; habits do not.",
        },
        {
          heading: "Tunneling",
          body: "Tunneling at five gens every game. You can win that way and still learn nothing about pressure. Body block and not unhooking in face reduce it; it will not vanish.",
        },
      ],
    },
    {
      slug: "survivor-habits",
      title: "DbD Survivor Habits",
      category: "Survivor",
      readTime: "8 min",
      excerpt:
        "Walk vs crouch, skill checks, heals, and not honking the terror radius.",
      seoKeywords: ["DbD survivor guide", "DbD skill checks", "DbD stealth"],
      heroImage: header("Dead by Daylight survivor"),
      content: [
        {
          heading: "Movement",
          body: "Crouch-walking everywhere as survivor. Walk, run when spotted, and stop honking the terror radius into a dead zone.",
        },
        {
          heading: "Skill checks",
          body: "Cap FPS for stable skill checks. Spikes during gens cause great skill-check comedy. Greats are extra; misses are a gift.",
        },
        {
          heading: "Heals",
          body: "Bring a med-kit or know where to heal. Slugged teammates need a plan, not panic vaults.",
        },
        {
          heading: "Resources",
          body: "Pallets and windows are time. Spend them on a tile, not in a dead corridor.",
        },
        {
          heading: "Endgame",
          body: "Gates and hatch. Collapse is a timer. Do not wander the map while someone is on first hook.",
        },
      ],
    },
    {
      slug: "killer-habits",
      title: "DbD Killer Habits",
      category: "Killer",
      readTime: "8 min",
      excerpt:
        "Hooks, kicks, readable powers, and leaving the 3-minute chase.",
      seoKeywords: ["DbD killer guide", "DbD beginner killer", "DbD pressure"],
      heroImage: header("Dead by Daylight killer"),
      content: [
        {
          heading: "Who to pick",
          body: "Wraith, Huntress, or a simpler licensed killer before Nurse. Readable powers teach the loop. High-skill killers wait.",
        },
        {
          heading: "After a hook",
          body: "Leave a healthy survivor to kick a gen. Regression plus a second injured person is a trial. Camping at five gens is a 3-gen you might still lose.",
        },
        {
          heading: "Chase timer",
          body: "If it is long and you have no down, leave. Pressure multiple gens, not one survivor for three minutes.",
        },
        {
          heading: "3-gen",
          body: "Herd them into a cluster by kicking outliers. Then patrol. That is the win condition they built.",
        },
        {
          heading: "Both sides",
          body: "Play survivor. You will see the tiles you cannot loop and the gens you should have kicked.",
        },
      ],
    },
    {
      slug: "perks",
      title: "DbD Perks: Habits Over Meta",
      category: "Perks",
      readTime: "7 min",
      excerpt:
        "Info and exhaustion first. The wiki page will be wrong next patch; the job will not.",
      seoKeywords: ["DbD perks", "DbD exhaustion", "best DbD perks"],
      heroImage: header("Dead by Daylight perk loadout"),
      content: [
        {
          heading: "Survivor",
          body: "Info (where is the killer) and exhaustion (extend a chase). Healing and unhook perks if you are the unhooker. Do not copy a 4-perk YouTube page from last season without knowing the job.",
        },
        {
          heading: "Killer",
          body: "Slowdown and info. Aura after a hook, gen regression. Tunneling perks teach a habit you may not want as your only plan.",
        },
        {
          heading: "Prestige and DLC",
          body: "Perks unlock over time. Base roster is enough. You do not need every licensed chapter to hit a loop.",
        },
        {
          heading: "Patch notes",
          body: "Meta perk pages change every patch; habits do not. Split gens still win.",
        },
        {
          heading: "Offerings",
          body: "Map offerings are a vote. Play the realm you get. MacMillan still teaches more than a forced indoor maze on day one.",
        },
      ],
    },
    {
      slug: "maps-and-tiles",
      title: "DbD Maps and Tiles",
      category: "Maps",
      readTime: "7 min",
      excerpt:
        "Shack, gyms, mains, indoor mazes. The skyline is licensed; the pallet is the game.",
      seoKeywords: ["DbD maps", "DbD tiles", "DbD shack"],
      heroImage: header("Dead by Daylight map tiles"),
      content: [
        {
          heading: "Outdoor classroom",
          body: "MacMillan and Autohaven. Shack and jungle gyms. Learn these before RPD.",
        },
        {
          heading: "Open realms",
          body: "Coldwind corn and street maps. Get to a tile. Corn is not a loop by itself.",
        },
        {
          heading: "Indoor",
          body: "The Game, RPD, Midwich. Split wings and floors. 3-gens hide in 3D. Look at the HUD.",
        },
        {
          heading: "New realms",
          body: "Garden of Joy and whatever ships next. Same rules. House is a main. Garden gens can cluster.",
        },
        {
          heading: "Callouts",
          body: "Shack, gym, main, gate. Streamer names wait until you can pre-drop.",
        },
      ],
    },
    {
      slug: "settings",
      title: "DbD Settings and Audio",
      category: "PC Setup",
      readTime: "6 min",
      excerpt:
        "Stable FPS for skill checks, FOV, and terror radius as gameplay.",
      seoKeywords: ["DbD settings", "DbD FPS", "DbD audio"],
      heroImage: header("Dead by Daylight settings"),
      content: [
        {
          heading: "FPS",
          body: "Cap FPS for stable skill checks. Spikes during gens cause great skill-check comedy.",
        },
        {
          heading: "FOV and lighting",
          body: "Killer FOV and survivor accessibility options exist — use them if lighting is unreadable.",
        },
        {
          heading: "Audio",
          body: "Disable unnecessary overlays; audio cues (terror radius, directional screams) are gameplay.",
        },
        {
          heading: "Input",
          body: "A consistent frame time matters more than max FPS for Dead Hard and skill checks.",
        },
        {
          heading: "HUD",
          body: "Generator count and hook states. The 3-gen is on the HUD if you look.",
        },
      ],
    },
    {
      slug: "faq",
      title: "Dead by Daylight FAQ",
      category: "FAQ",
      readTime: "5 min",
      excerpt: "DLC, which side first, 3-gens, and tunneling.",
      seoKeywords: ["DbD FAQ", "DbD DLC", "what is a 3-gen"],
      content: [
        {
          heading: "Do I need DLC?",
          body: "No. The base roster is enough to learn. Licensed killers are cosmetics plus powers, not a paywall to play.",
        },
        {
          heading: "Survivor or killer first?",
          body: "Alternate. Each side teaches the other.",
        },
        {
          heading: "What is a 3-gen?",
          body: "Three remaining generators close together, easy for the killer to patrol.",
        },
        {
          heading: "Why do I get tunneled?",
          body: "It is a valid if toxic-feeling strategy. Body block, perks, and not unhooking in face reduce it; it will not vanish.",
        },
        {
          heading: "Who should I play as killer?",
          body: "Wraith or Huntress before Nurse. Readable powers teach pressure. High-skill killers wait.",
        },
      ],
    },
  ],
};
