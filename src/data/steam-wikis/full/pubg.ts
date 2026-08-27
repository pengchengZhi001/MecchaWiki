import type { FullWiki, WikiImage } from "../types";
import { steamHeader, steamHero } from "@/lib/steam-wiki";

const APP = 578080;

function header(alt: string): WikiImage {
  return { src: steamHeader(APP), alt };
}

function hero(alt: string): WikiImage {
  return { src: steamHero(APP), alt };
}

export const pubgWiki: FullWiki = {
  slug: "pubg",
  hubs: { maps: "Maps", roles: "Roles", strats: "Setups" },
  copy: {
    home: {
      strats: "Drops, compounds, edge rotates, and third-parties — not a School montage.",
      roles: "Utility and a driver first. IGL last.",
      maps: "Erangel and Miramar before the fast maps.",
      guides: "Beginner path, loot, circles, compounds, vehicles, and FPP/TPP.",
    },
    pages: {
      maps: "Big BR maps. Learn compounds and circle math on Erangel before you live on Livik.",
      roles: "Squad jobs. Smokes and a car keep more people alive than a fourth sniper.",
      strats: "Where to drop, when to hold, when to move, and how not to die to the zone with eight kills.",
    },
  },
  maps: [
    {
      slug: "erangel",
      name: "Erangel",
      difficulty: "Easy",
      tagline: "The classroom: compounds, a readable circle, and drops that are not School every game.",
      overview:
        "Erangel is the map you should learn first. Towns have windows, stairs, and yards you can actually call. The circle is large enough to punish greed but slow enough that a vehicle still saves you. Drop a mid-tier compound, loot a kit, keep a car until late, and stop shooting 400-meter silhouettes for no reason. Call the compound name, the ridge, and the next white — not a streamer's 2018 POI nickname until the squad can hear footsteps in a house.",
      stats: [
        { label: "Learn first", value: "Yes — classic compounds + circle" },
        { label: "Drop", value: "Mid-tier towns, not School / Pochinki every round" },
        { label: "Win condition", value: "Late circle with a rifle, smokes, and cover" },
      ],
      poi: [
        { name: "School / Pochinki", note: "Hot drops. Fine once a week for chaos reps. Not how you learn loot or driving." },
        { name: "Mid compounds", note: "Mylta, Primorsk, farms, and similar. One or two other squads, then a car." },
        { name: "Military / Georgopol", note: "High loot, high traffic. Come with a plan to leave, not a plan to 1v12 the warehouse." },
        { name: "Ridges and rivers", note: "Rotations. Silhouette on a ridge is a DMR gift. Hug terrain." },
        { name: "Compounds in late circle", note: "Stairs and utility. One player on the staircase beats four people watching the same field." },
      ],
      notes: [
        "Always keep a vehicle until final circles. Walking blue with no boosts is how 30th place happens.",
        "After a fight, heal in cover, reload, then loot. Gunshots advertised you to two other squads.",
        "Smokes to cross a street are a weapon. Four rifles and no throws is a loadout, not a kit.",
      ],
      image: header("PUBG Erangel compound and circle"),
      seoKeywords: ["PUBG Erangel", "Erangel guide", "PUBG beginner map"],
    },
    {
      slug: "miramar",
      name: "Miramar",
      difficulty: "Hard",
      tagline: "Desert sightlines, vehicles as life, and a map that punishes walking the open.",
      overview:
        "Miramar is the long-range exam. Hills, cities, and empty dirt make a car mandatory and a DMR comfortable. You rotate early, you park behind cover not on a ridge, and you do not take a 400-meter ego shot that tells three teams where you are. Compounds still win late game — the desert just makes the walk to them lethal. Learn Erangel first so you already hear houses; then Miramar teaches patience.",
      stats: [
        { label: "Range", value: "Long — DMR and utility matter" },
        { label: "Vehicle", value: "Non-negotiable until late" },
        { label: "Fail", value: "Running a field in the last two minutes of zone" },
      ],
      poi: [
        { name: "Pecado / Los Leones", note: "City loot and city third-parties. Leave with a car or you own the street you die on." },
        { name: "Hacienda / prison-class compounds", note: "Holdable. Stairs and windows. Do not all watch the same wall." },
        { name: "Ridge lines", note: "Where people silhouette. Crawl, vehicle, or do not be there." },
        { name: "Arroyos / dips", note: "Rotate off the skyline. Blue still catches you if you sightsee." },
        { name: "Final desert circle", note: "Smokes, a compound if it exists, and not a standing spray in the open." },
      ],
      notes: [
        "Boosts and a vehicle beat a third AR in the bag. You cannot loot if you are dead in blue.",
        "Park the car where it is not a billboard. Ditch it before final unless it is a moving wall on purpose.",
        "Third-parties travel farther here. Assume the shot you heard has friends in a truck.",
      ],
      image: header("PUBG Miramar desert rotation"),
      seoKeywords: ["PUBG Miramar", "Miramar guide", "PUBG desert map"],
    },
    {
      slug: "sanhok",
      name: "Sanhok",
      difficulty: "Medium",
      tagline: "Jungle, shorter games, and fights that start before your inventory is finished.",
      overview:
        "Sanhok is smaller and greener. You get less loot time and more compound fights in foliage. The circle moves with less mercy for a slow city clear. Drop with a weapon first, attachments second. Sound in the trees is the game; music is not. This is a good second map after Erangel — faster reps, same rules: smoke a revive, do not shoot for no reason, keep a bike or a car.",
      stats: [
        { label: "Pace", value: "Fast — kit up and move" },
        { label: "Cover", value: "Jungle + compounds, not open desert" },
        { label: "Drop", value: "Not Bootcamp every time if you are learning" },
      ],
      poi: [
        { name: "Bootcamp", note: "The School of Sanhok. Chaos. Mid compounds teach more if you still miss loot binds." },
        { name: "Quarry / Ruins-class", note: "Vertical and third-parties. Clear a floor, then watch the zip or the ridge." },
        { name: "River / bridges", note: "Rotate traps. Pre-aim or go around. Do not picnic mid-bridge." },
        { name: "Jungle floor", note: "Prone and foliage. You will die to someone you never saw if you only check windows." },
        { name: "Late circle", note: "Utility in grass. A smoke is still a smoke when nobody has a building." },
      ],
      notes: [
        "You do not need a perfect 5.56 kit. A working AR and heals beat shopping in a hot compound.",
        "Motorcycles are loud and fast. Use them to rotate, not to tour the zone for fun.",
        "Foliage hides you and them. Utility and patience beat spraying the bush you guessed.",
      ],
      image: header("PUBG Sanhok jungle compound"),
      seoKeywords: ["PUBG Sanhok", "Sanhok guide", "PUBG Bootcamp"],
    },
    {
      slug: "vikendi",
      name: "Vikendi",
      difficulty: "Medium",
      tagline: "Snow tracks, audio, and a map that tells on you if you sprint everywhere.",
      overview:
        "Vikendi is snow and towns. Footprints and engine noise advertise more than on Erangel. Vehicles still matter; so does not driving the ridgeline like a parade. Compounds are readable. The weather and palette make peeks different — TPP cameras around snow corners still win fights. Treat it like Erangel with worse camouflage for runners.",
      stats: [
        { label: "Tell", value: "Tracks and sound" },
        { label: "Loot", value: "Towns and compounds — do not skip a car" },
        { label: "Peek", value: "TPP around snow corners is real" },
      ],
      poi: [
        { name: "Cosmodrome / castle-class", note: "High traffic, high loot. Have an exit vehicle." },
        { name: "Town grids", note: "Windows and streets. Smokes to cross. Do not revive in the open." },
        { name: "Snow fields", note: "You are a dark blob. Rotate ditches and compounds, not the postcard ridge." },
        { name: "Tracks", note: "If you can see theirs, they can see yours. Do not loop the same footprint circle." },
        { name: "Late snow circle", note: "White on white. Utility and not spraying your position into the next ridge." },
      ],
      notes: [
        "A suppressed weapon is more valuable when the map is quiet and white.",
        "Park off-road behind a building. Black cars on snow hills are a doodle for DMRs.",
        "If you play TPP, the camera still cheats corners. If you play FPP, pre-aim like CS — this map punishes lazy swings.",
      ],
      image: header("PUBG Vikendi snow map"),
      seoKeywords: ["PUBG Vikendi", "Vikendi guide", "PUBG snow"],
    },
    {
      slug: "taego",
      name: "Taego",
      difficulty: "Medium",
      tagline: "Secret rooms, a big classic-sized map, and rotations that still need a car.",
      overview:
        "Taego plays like a modern Erangel: large, compound-heavy, with extras (secret rooms / event loot depending on the patch). Do not let the gimmick eat the fundamentals. Drop mid-tier, kit a rifle and throws, keep a vehicle, rotate on edge or take a hold you can actually defend. If you chase every secret room you will third-party yourself into a 3-team mess.",
      stats: [
        { label: "Size", value: "Large — Erangel habits apply" },
        { label: "Extra", value: "Secret rooms / events — optional, not the win condition" },
        { label: "Circle", value: "Leave early if you are in the wrong quadrant" },
      ],
      poi: [
        { name: "Downtown / dense towns", note: "Loot and third-parties. Same as Pochinki: have a leave plan." },
        { name: "Rural compounds", note: "The actual PUBG skill. Stairs, windows, utility." },
        { name: "Secret room", note: "If the squad is already kitted, skip. A crate is not worth a 4v8 in a doorway." },
        { name: "Open farms", note: "Vehicle + ditch. Walking is how blue plus a Kar98 find you." },
        { name: "Late circle", note: "Ignore the gimmick. Play cover and smokes." },
      ],
      notes: [
        "Learn the map after Erangel so POI names mean something.",
        "Event loot is bait if you are already late to zone.",
        "Same revive rule: smoke first. Taego streets are not a medic tent.",
      ],
      image: header("PUBG Taego map rotation"),
      seoKeywords: ["PUBG Taego", "Taego guide", "PUBG secret room"],
    },
    {
      slug: "deston",
      name: "Deston",
      difficulty: "Hard",
      tagline: "Vertical cities, water, and a map that feels like a different game until you bring circle math back.",
      overview:
        "Deston is newer-world PUBG: taller buildings, more vertical, water in the mix. You still need a vehicle, you still need smokes, and you still die to zone if you shop the skyline. Play compounds and mid-rises you can hold. Do not treat a skyscraper as a free win — it is a third-party magnet and a death if circle leaves you. Learn it after you can already leave Erangel fights without looting in the open.",
      stats: [
        { label: "Vertical", value: "High — stairs and elevators are fights" },
        { label: "Loot", value: "Cities print kits and print company" },
        { label: "Rotate", value: "Car / boat — walking a city grid in blue is a meme" },
      ],
      poi: [
        { name: "Downtown cores", note: "High loot. Clear a floor, watch stairs, leave with a car." },
        { name: "Suburbs / plants", note: "More like classic PUBG. Better for learning this map." },
        { name: "Water / bridges", note: "Rotate tools and traps. Do not swim a final circle for fun." },
        { name: "Rooftops", note: "DMR heaven and silhouette hell. Get off the skyline when you shoot." },
        { name: "Late circle in concrete", note: "Utility in stairwells. Nades beat a fourth AR." },
      ],
      notes: [
        "Sound in stairwells is the game. Music off.",
        "A vehicle parked in the open in front of a tower is a spawn beacon for every squad nearby.",
        "If circle is rural, leave the city early. Pride in a penthouse does not stop blue.",
      ],
      image: header("PUBG Deston city map"),
      seoKeywords: ["PUBG Deston", "Deston guide", "PUBG city map"],
    },
    {
      slug: "rondo",
      name: "Rondo",
      difficulty: "Medium",
      tagline: "Mixed terrain and a rotation of 'new map energy' — still the same car, smokes, and circle.",
      overview:
        "Rondo is another large map in the current-style pool: mixed POIs, vehicles, and circles that punish tourists. Play it like Taego/Erangel. Drop mid-tier, kit, car, edge or a hold. Do not invent a new personality because the loading screen looks different. If you are new, queue it after Erangel so you are not learning loot binds and a brand-new POI list in the same death.",
      stats: [
        { label: "Pool", value: "Current large-map rotation" },
        { label: "Skill transfer", value: "Erangel compounds + Miramar patience" },
        { label: "Drop", value: "Mid-tier until names stick" },
      ],
      poi: [
        { name: "Named cities", note: "Loot and chaos. Same leave-plan rule as Los Leones." },
        { name: "Rural compounds", note: "Where you actually practice PUBG." },
        { name: "Ridges / fields", note: "Do not walk them late. Vehicle or early rotate." },
        { name: "Event / unique POIs", note: "Optional. Circle is not optional." },
        { name: "Final", note: "Cover, smokes, not a standing reload in the open after a win." },
      ],
      notes: [
        "New maps are easier after you already hear footsteps in compounds on Erangel.",
        "Do not hot-drop the flavor POI every game to 'learn the map.' You learn deaths.",
        "Third-parties still arrive on the sound of your fight. Heal, then move or hold.",
      ],
      image: header("PUBG Rondo battleground"),
      seoKeywords: ["PUBG Rondo", "Rondo map", "PUBG current maps"],
    },
    {
      slug: "livik",
      name: "Livik",
      difficulty: "Easy",
      tagline: "The 20-minute map: faster circles, less loot time, still not a reason to skip smokes.",
      overview:
        "Livik is the small, fast map. Games end sooner. You kit worse on purpose and fight more. It is good when you have twenty minutes — it is a bad only-map if you never learned a car rotation on Erangel. Drop, grab a gun, play the small circle math. Third-parties are instant. Revives still need smoke. A hot drop here is the whole lobby; mid compounds still teach more if you are new.",
      stats: [
        { label: "Length", value: "Short — good for reps, bad as your only teacher" },
        { label: "Circle", value: "Aggressive — loot less, move more" },
        { label: "Beginner?", value: "OK for shooting; Erangel still for fundamentals" },
      ],
      poi: [
        { name: "Hot named POIs", note: "Instant fights. Fine for aim. Bad for inventory practice." },
        { name: "Side compounds", note: "Still the right drop if you want a kit and a brain." },
        { name: "Mid map", note: "Everyone rotates through you. Assume company." },
        { name: "Water / edges", note: "Small map still has bad rotates. Do not get caught hugging the blue for no reason." },
        { name: "Final", note: "Utility. There is less building. Smokes matter more, not less." },
      ],
      notes: [
        "Do not treat Livik wins as proof you can play Miramar. Different exam.",
        "Keep a vehicle even here until the circle is a postage stamp.",
        "If you only have time for Livik, still practice training range peeks and inventory binds.",
      ],
      image: header("PUBG Livik small map"),
      seoKeywords: ["PUBG Livik", "Livik guide", "PUBG fast map"],
    },
  ],
  roles: [
    {
      slug: "support",
      name: "Support",
      role: "Utility, heals, and loot",
      difficulty: "Easy",
      beginnerRank: 1,
      tiers: [
        { label: "Bag", value: "Smokes, molotovs, meds — not a fourth rifle" },
        { label: "Job", value: "Revive in smoke, throw the cross, share ammo" },
      ],
      kit: ["Smokes and molotovs", "Meds and boosts the squad can actually use", "A rifle you can spray in a house"],
      excerpt:
        "The best first squad job. You carry the throws, you smoke the revive, and you do not loot the open after a win.",
      strengths: [
        "Wins fights that aim did not — a smoke across a street is a weapon",
        "Teaches inventory binds, which kill more squads than the zone",
        "Fits any drop because every compound needs utility",
      ],
      weaknesses: [
        "Boring if you only wanted a Kar98 montage",
        "Hoarding all the smokes in a death box helps nobody",
      ],
      starterTips: [
        "Drop mid-tier. Practice looting a kit without School chaos.",
        "Smoke first, then revive. 'They are reloading' is how you both die.",
        "One inventory bind you can hit while shot. The loot menu is a death screen.",
        "After a fight: cover, heals, reload, then loot. Gunshots called the neighbors.",
      ],
      image: hero("PUBG support player throwing smoke"),
      seoKeywords: ["PUBG smokes", "PUBG utility", "how to play support PUBG"],
    },
    {
      slug: "driver",
      name: "Driver",
      role: "Rotations and the car",
      difficulty: "Easy",
      beginnerRank: 2,
      tiers: [
        { label: "Job", value: "Keep a vehicle until late circle" },
        { label: "Park", value: "Behind cover, not on the ridge silhouette" },
      ],
      kit: ["A car or bike you can actually control", "Boosts for the squad if the car dies", "A plan to ditch before final"],
      excerpt:
        "You are why the squad is not 30th in blue. Park smart, rotate on time, and stop treating the car as a turret on a hill.",
      strengths: [
        "Edge rotations and third-parties both start with a running engine you control",
        "Saves bad drops when circle is across the map",
        "Easier than IGL — the job is visible on the minimap",
      ],
      weaknesses: [
        "Driving the skyline like a parade float",
        "Ditching the only car in the open 'because we hear one shot'",
      ],
      starterTips: [
        "Always keep a vehicle until final circles. Walking blue with no boosts is 30th place.",
        "Park behind a compound, not on the ridge. The car is a billboard.",
        "Ditch before final unless you are using it as a moving wall on purpose.",
        "Call when you are moving. A silent U-turn yeets a teammate into the dirt.",
      ],
      image: hero("PUBG vehicle rotation on a battleground"),
      seoKeywords: ["PUBG driving", "PUBG vehicle", "PUBG rotations"],
    },
    {
      slug: "entry",
      name: "Entry",
      role: "First contact in the compound",
      difficulty: "Medium",
      beginnerRank: 3,
      tiers: [
        { label: "Job", value: "Clear a room with a teammate, not a 1v4 hero peek" },
        { label: "Gun", value: "SMG/AR for houses — the 8x is for later" },
      ],
      kit: ["Close-range AR or SMG", "Nades for rooms", "A teammate on the same floor"],
      excerpt:
        "You take the first doorway so the squad can trade. Dying alone in a bathroom while they watch a field is not entry.",
      strengths: [
        "Wins compounds that poke never finishes",
        "Teaches sound and stairs faster than a DMR camp",
        "Pairs with support smokes for the actual take",
      ],
      weaknesses: [
        "Ego swinging every window",
        "No trade partner — then you are just first death",
      ],
      starterTips: [
        "Practice TPP/FPP peeks in training. PUBG peeker's advantage is a camera game.",
        "Nade a room, then swing with a teammate. Solo bathroom heroics are clips for them.",
        "Call 'stairs' and 'downed'. After you die you are still the drone.",
        "Do not entry School until you can entry a farmhouse.",
      ],
      image: hero("PUBG squad clearing a compound"),
      seoKeywords: ["PUBG close range", "PUBG compound", "PUBG entry fragger"],
    },
    {
      slug: "overwatch",
      name: "Overwatch",
      role: "DMR and information",
      difficulty: "Medium",
      beginnerRank: 4,
      tiers: [
        { label: "Job", value: "Hold a line, call numbers, do not ego-shot 400m" },
        { label: "Gun", value: "DMR/SR plus an AR — one sniper and nothing else is a throw" },
      ],
      kit: ["Mini14 / SLR / Kar98 class plus an AR", "Cover and a fall-back", "Mics for 'two in the truck'"],
      excerpt:
        "You win Miramar-style space and late circles from a window. Shooting every silhouette donates your position to two other squads.",
      strengths: [
        "Stops rotations that an SMG squad cannot contest",
        "Third-party timing: you see the fight, the entry waits",
        "Late circle info is a role, not a kill counter",
      ],
      weaknesses: [
        "400-meter shots for no reason",
        "No close gun when they walk the stairs you ignored",
      ],
      starterTips: [
        "Do not shoot every player you see at 400 meters. You just pinged two trucks.",
        "Carry an AR. The sniper is not a 1v4 staircase plan.",
        "On Erangel, learn one compound window before you main a ridge.",
        "Suppressors matter more than another 8x if you cannot stop shooting.",
      ],
      image: hero("PUBG DMR holding a ridge"),
      seoKeywords: ["PUBG DMR", "PUBG sniper", "Kar98 PUBG"],
    },
    {
      slug: "igl",
      name: "IGL",
      role: "Drop, circle, and go / wait",
      difficulty: "Hard",
      beginnerRank: 5,
      tiers: [
        { label: "Calls", value: "Drop, rotate time, hold vs third-party" },
        { label: "Need", value: "A squad that listens — mute Premier habits" },
      ],
      kit: ["A readable AR", "The map and timers in your head", "A mic that is not a concert"],
      excerpt:
        "You pick the drop, the leave time, and whether this fight is the one. A quiet IGL is just a fourth rifler after the zone already ate you.",
      strengths: [
        "Stops four people from hot-dropping School and then arguing in blue",
        "Edge vs center is a decision, not a vibe",
        "Can hide a weak aimer on support if the rotate is real",
      ],
      weaknesses: [
        "Calling and shooting at once — new IGLs drop both",
        "Ego 'we can take this 3-team' when you should leave",
      ],
      starterTips: [
        "IGL in a three-stack first, not in random fill with three mutes.",
        "Pick one plan per drop: edge third-parties or a compound hold. Not both, badly.",
        "Leave early or take the next white's compound. Rotating a field in the last two minutes is the throw.",
        "After gunshots: 'heal, then hold / leave.' Looting in the open is not a call.",
      ],
      image: hero("PUBG IGL calling a rotation"),
      seoKeywords: ["PUBG IGL", "PUBG squad calls", "PUBG circle play"],
    },
  ],
  strats: [
    {
      slug: "mid-tier-drop",
      name: "Mid-Tier Drop",
      mapSlug: "erangel",
      mapName: "Erangel",
      difficulty: "Easy",
      risk: "Low",
      bestFor: "Players who only know School and then die with a pan",
      duration: "Plane + first 3 minutes",
      excerpt:
        "Pick a named town that is not the plane's favorite. Loot a kit, grab a car, then play the game.",
      steps: [
        "Watch the plane. Mark a mid compound off the hot line — farms, smaller towns, not School every match.",
        "Land on a roof or a garage with a gun, not on a 1x sight in the street.",
        "Kit: AR/SMG, heals, smokes, a vehicle. Attachments are extra.",
        "If you hear a full squad and you have pistols, leave. Pride is 28th place.",
        "Ping the car. The round starts when you can rotate, not when you have a 6x.",
      ],
      tips: [
        "You need reps of looting, healing, and driving more than 20-player chaos.",
        "Same idea on Sanhok (not Bootcamp) and Livik (side compounds).",
        "Fill randoms: ping the drop in the plane. Silence is how you land four different towns.",
      ],
      image: header("PUBG mid-tier town drop"),
      seoKeywords: ["PUBG drop", "where to drop Erangel", "PUBG beginner drop"],
    },
    {
      slug: "compound-hold",
      name: "Compound Hold",
      mapSlug: "erangel",
      mapName: "Erangel",
      difficulty: "Medium",
      risk: "Medium",
      bestFor: "Squads that all watch the same field and die to stairs",
      duration: "Until the next circle forces a move",
      excerpt:
        "Windows, stairs, and utility. One player on the staircase is worth more than four people staring at one door.",
      steps: [
        "Clear the compound first. Holding a house you did not clear is a horror movie.",
        "Assign: stairs, back window, field, utility. Do not quadruple-stack one sightline.",
        "Park the car where it cannot be used as a spawn beacon on the ridge.",
        "Save smokes for the revive and the leave. Do not panic-throw the whole bag at one bush.",
        "When circle moves, leave early as a group or commit to the next building in the white. Not a field jog at 0:30.",
      ],
      tips: [
        "Nades inside > spraying a wall you heard.",
        "TPP: camera the corner. FPP: pre-aim. Do not mix the two habits in one night if you are tilting.",
        "Works on Miramar haciendas and Taego rural the same way.",
      ],
      image: header("PUBG squad holding a compound"),
      seoKeywords: ["PUBG compound", "how to hold a house PUBG", "PUBG stairs"],
    },
    {
      slug: "edge-rotate",
      name: "Edge Rotate",
      mapSlug: "miramar",
      mapName: "Miramar",
      difficulty: "Medium",
      risk: "Medium",
      bestFor: "Center campers who die in blue with eight kills",
      duration: "Each circle after first loot",
      excerpt:
        "Play the edge of zone with a vehicle. Third-party people running from blue. Do not walk a field in the last two minutes.",
      steps: [
        "Loot enough to fight, then look at the next white. If you are wrong-side, the car is the play.",
        "Rotate on time. 'One more crate' is how you 50/50 a bridge in blue.",
        "Travel ditches and compounds, not the ridge silhouette.",
        "Set up where people must run at you from the blue. That is the third-party, not a 400m ego shot.",
        "Keep boosts. If the car dies, you still have to walk once — do it with energy drinks, not hope.",
      ],
      tips: [
        "Edge lets you third-party. Center is for squads that can win a compound hold. Pick one per drop.",
        "Park behind cover. Engine off if you are holding. A running car is a ping.",
        "Erangel rivers and Miramar dirt both punish late walks the same way.",
      ],
      image: header("PUBG rotating the circle edge"),
      seoKeywords: ["PUBG rotations", "PUBG circle", "edge vs center PUBG"],
    },
    {
      slug: "third-party",
      name: "Third-Party Timing",
      mapSlug: "sanhok",
      mapName: "Sanhok",
      difficulty: "Medium",
      risk: "High",
      bestFor: "Teams that shoot the first shot of every distant fight",
      duration: "30–90 seconds",
      excerpt:
        "Move on a fight that is already committed. Ten seconds late is loot. Ten seconds early is a 3-team mess.",
      steps: [
        "Hear a committed spray / nade, not one DMR tick at 400m.",
        "Approach from a third angle — not the same road both squads already watch.",
        "Kill the distracted team first if you can, or wait until one is downed. Do not 1v8 the opener.",
        "After you win: cover, heal, reload. The fourth team heard you too.",
        "If you arrive and it is already three teams, leave. Greed is a deathbox.",
      ],
      tips: [
        "Death icons (if you use them) are for this. Sound is still better.",
        "Shooting every player you see at 400 meters is advertising, not a third-party.",
        "Livik third-parties are instant. Same rule, less time.",
      ],
      image: header("PUBG third-party on a compound fight"),
      seoKeywords: ["PUBG third party", "how to third party", "PUBG positioning"],
    },
    {
      slug: "vehicle-discipline",
      name: "Vehicle Discipline",
      mapSlug: "miramar",
      mapName: "Miramar",
      difficulty: "Easy",
      risk: "Low",
      bestFor: "Squads that park on hills and wonder why they get picked",
      duration: "Whole match until final",
      excerpt:
        "Park behind cover, not on the ridge. Ditch before final unless the car is a wall. Keep one until then.",
      steps: [
        "Loot a vehicle as part of the kit, same as a rifle.",
        "Drive off the skyline. Stop behind a building or in a dip.",
        "Engine off when you hold. Do not sit revving on a ridge 'for a quick leave'.",
        "If you take fire, bale into cover — the car is not a fortress against a 6x.",
        "Final circles: ditch unless you are ramming or using it as last cover on purpose.",
      ],
      tips: [
        "Always keep a vehicle until final. Walking blue with no boosts is how 30th happens.",
        "Bikes are loud. Fine for Sanhok rotates; terrible for a silent hold.",
        "Call seats. Yeeting a teammate is not a rotate.",
      ],
      image: header("PUBG parking a vehicle behind cover"),
      seoKeywords: ["PUBG cars", "PUBG driving tips", "PUBG vehicle"],
    },
    {
      slug: "late-circle",
      name: "Late Circle",
      mapSlug: "erangel",
      mapName: "Erangel",
      difficulty: "Hard",
      risk: "High",
      bestFor: "Players who win two fights then die standing in the open reloading",
      duration: "Last two–three circles",
      excerpt:
        "Cover, smokes, and not looting. The zone plus one DMR is the real final boss.",
      steps: [
        "Be in the next white early, in a compound or a ditch — not a jog across a field at 0:40.",
        "Smokes to revive and to cross. A molotov on a shared compound door is legal.",
        "After a kill: crouch in cover, heal, reload, then touch loot. Standing is a silhouette.",
        "Watch the blue for runners. That is your edge play if you still have one.",
        "If you have no cover, smoke a bubble and wait. Spraying your ammo into fog is a donation.",
      ],
      tips: [
        "Surviving to late circle with a rifle and cover is a skill, not camping.",
        "Four rifles and no smokes is how you fail a ten-meter street.",
        "FPP finals are pre-aim. TPP finals are camera. Pick the mode and commit.",
      ],
      image: header("PUBG late circle final compound"),
      seoKeywords: ["PUBG late game", "PUBG final circle", "PUBG endgame"],
    },
  ],
  guides: [
    {
      slug: "beginner-guide",
      title: "PUBG Beginner Guide",
      category: "Getting Started",
      readTime: "9 min",
      excerpt:
        "Where to drop, why a car is the kit, and why School every game teaches the wrong lesson.",
      seoKeywords: ["PUBG beginner", "how to play PUBG", "PUBG first hours"],
      heroImage: hero("PUBG beginner guide"),
      content: [
        {
          heading: "What you are actually playing",
          body: "PUBG is a large-map battle royale. Ballistics, vehicles, and the blue zone punish greed. You win by surviving to late circle with a rifle, throws, and cover — not by hot-dropping School for a montage. Surviving is a skill, not camping. Gunshots are advertisements. The loot menu is a death screen if you cannot close it.",
        },
        {
          heading: "The first week",
          body: "Drop mid-tier towns, not School every game. You need reps of looting, healing, and driving more than 20-player chaos. Learn Erangel first. New maps are easier after you already hear footsteps in compounds. Training range: FPP and TPP peeks. PUBG peeker's advantage is a camera game as much as an aim game.",
        },
        {
          heading: "The kit",
          body: "A working AR or SMG, heals, smokes, a vehicle. Attachments and a 6x are extra. Always keep a car until final circles. Walking a blue zone with no boosts is how 30th place happens.",
        },
        {
          heading: "After every fight",
          body: "Heal in cover, reload, then loot or leave. You advertised the gunshots. Do not loot in the open. Smoke a revive. 'They are reloading' is how double wipes happen.",
        },
        {
          heading: "What good looks like after a week",
          body: "You can drop a mid town, leave with a car, rotate without walking a field at 0:30, and stop shooting every 400-meter silhouette. Then Miramar. Then ranked squads.",
        },
      ],
    },
    {
      slug: "loot-and-loadouts",
      title: "PUBG Loot and Loadouts",
      category: "Gear",
      readTime: "8 min",
      excerpt:
        "What to pick up, what to drop, and why four rifles with no smokes is not a loadout.",
      seoKeywords: ["PUBG loot", "PUBG loadout", "PUBG attachments"],
      heroImage: header("PUBG inventory and attachments"),
      content: [
        {
          heading: "Priority",
          body: "Weapon that shoots, helmet/vest, heals, throws, ammo, then optics. A 8x on a pistol is not progress. Close the inventory. A 1:1 loot bind you can hit while shot matters more than a perfect attachment order.",
        },
        {
          heading: "Two guns",
          body: "Something for houses (SMG/AR) and something for 100m+ (AR/DMR). A sniper with no AR is a staircase victim. Four rifles and no smokes cannot cross a street.",
        },
        {
          heading: "Utility is a weapon",
          body: "Smokes for revives and crosses. Molotovs for rooms and doors. Frags for stairs. If your bag is only ammo and energy drinks, you will fail late circle.",
        },
        {
          heading: "Boosts",
          body: "Energy drinks and painkillers are how you outrun a bad rotate when the car dies. Fill them. They are not optional cosmetics.",
        },
        {
          heading: "Deathboxes",
          body: "Loot after you are safe. A box in a doorway is a second fight. Take smokes and heals first if you are empty — not the gold sniper you cannot shoot from a window.",
        },
      ],
    },
    {
      slug: "rotations-and-circles",
      title: "PUBG Rotations and Circle Play",
      category: "Map Movement",
      readTime: "8 min",
      excerpt:
        "When to hold a compound, when to move, and how not to die to the zone with eight kills.",
      seoKeywords: ["PUBG rotations", "PUBG circle", "edge vs center"],
      heroImage: header("PUBG zone circle rotation"),
      content: [
        {
          heading: "Edge vs center",
          body: "Edge lets you third-party people running from blue. Center is for squads that can win a compound hold. Pick one per drop. Doing both badly is how you get caught in a field.",
        },
        {
          heading: "Leave early",
          body: "Rotating through open fields in the last two minutes of a circle is the classic throw. Leave early or take a compound on the next white. 'One more crate' is a 50/50 on a bridge.",
        },
        {
          heading: "Vehicle discipline",
          body: "Park behind cover, not on the ridge silhouette. Ditch the car before final circles unless you are using it as a moving wall. Engine off on a hold. A running car is a ping.",
        },
        {
          heading: "Compounds",
          body: "Windows, stairs, and utility. One player holding a staircase is worth more than four people all watching the same field. Clear first, then hold.",
        },
        {
          heading: "Third parties",
          body: "Move on the sound of a fight that is already committed. Arriving 10 seconds late is free loot; arriving 10 seconds early is a 3-team mess.",
        },
      ],
    },
    {
      slug: "compounds-and-utility",
      title: "PUBG Compounds, Sound, and Utility",
      category: "Fighting",
      readTime: "8 min",
      excerpt:
        "Stairs, nades, smokes, and why the loot menu loses more gunfights than recoil.",
      seoKeywords: ["PUBG compounds", "PUBG grenades", "PUBG sound"],
      heroImage: header("PUBG house fight utility"),
      content: [
        {
          heading: "Sound",
          body: "Headphones. Footsteps on wood vs metal, stairs, and reloads. Music lower than effects. If you cannot hear a staircase, you do not own the compound.",
        },
        {
          heading: "Utility",
          body: "Smoke the revive and the street cross. Molotov a camped room. Frag a stairwell. Carrying four rifles and no throws is how you fail a ten-meter gap in final.",
        },
        {
          heading: "Peeks",
          body: "TPP camera around a corner is a real advantage. FPP is pre-aim and jiggle. Practice both in training. Do not mix muscle memory across modes in the same night if you are tilting.",
        },
        {
          heading: "Trade",
          body: "Two people on one door. Solo hero peeks are how you go 1-7 in a farmhouse. Call downed and reload.",
        },
        {
          heading: "After the wipe",
          body: "You advertised. Heal, reload, watch one door, then loot. Death icons (if you use them) are for the next truck, not a reason to stand up.",
        },
      ],
    },
    {
      slug: "vehicles-and-audio",
      title: "PUBG Vehicles and Audio",
      category: "Rotations",
      readTime: "7 min",
      excerpt:
        "Cars are the kit. Engines are pings. Bikes are loud on purpose.",
      seoKeywords: ["PUBG vehicles", "PUBG audio", "PUBG driving"],
      heroImage: header("PUBG vehicle audio and rotation"),
      content: [
        {
          heading: "A car is loot",
          body: "Treat it like a rifle. No vehicle until late is a run to blue. Always keep one until final circles.",
        },
        {
          heading: "Audio",
          body: "Engines travel. If you can hear them, they can hear you. Turn off the engine when you hold. Do not rev on a ridge for a 'quick peek'.",
        },
        {
          heading: "Parking",
          body: "Behind the compound, in a dip, not on the postcard hill. A black car on Miramar dirt or Vikendi snow is a doodle for DMRs.",
        },
        {
          heading: "Bikes and boats",
          body: "Fast and loud. Sanhok rotates love bikes. Final circles do not. Boats are Deston/Rondo tools, not a personality.",
        },
        {
          heading: "When it explodes",
          body: "Bale into cover. Boosts are the backup rotate. Standing in the fire to ping a crate is a clip for them.",
        },
      ],
    },
    {
      slug: "fpp-and-tpp",
      title: "PUBG FPP vs TPP",
      category: "Modes",
      readTime: "7 min",
      excerpt:
        "Two peek games. Pick a lobby and commit for the night.",
      seoKeywords: ["PUBG FPP", "PUBG TPP", "PUBG peeker's advantage"],
      heroImage: header("PUBG first person vs third person"),
      content: [
        {
          heading: "TPP",
          body: "The camera sees around corners before your body does. Hold camera angles, then swing. Compound play is a camera game. You will die to people you never saw if you only check your crosshair.",
        },
        {
          heading: "FPP",
          body: "What you see is what you get. Pre-aim, jiggle, counter-strafe like a tactical shooter. High ground is still high ground. No magic camera — sound and crosshair placement do the work.",
        },
        {
          heading: "Do not mix while tilting",
          body: "FPP vs TPP is a lobby choice. Mixing muscle memory across modes in the same night is how you swing a TPP peek in FPP and eat a headshot.",
        },
        {
          heading: "Training",
          body: "Practice both peeks in the range. The skill transfers less than people think. Your drop and circle habits transfer; your swing does not fully.",
        },
        {
          heading: "Ranked / competitive",
          body: "Know which perspective the lobby is. Playing the other game's peeks is a handicap you chose.",
        },
      ],
    },
    {
      slug: "settings-and-binds",
      title: "PUBG Settings and Binds",
      category: "PC Setup",
      readTime: "6 min",
      excerpt:
        "Inventory binds, sound, and FPS when 60 people still exist.",
      seoKeywords: ["PUBG settings", "PUBG keybinds", "PUBG FPS"],
      heroImage: header("PUBG settings and inventory"),
      content: [
        {
          heading: "Inventory",
          body: "Use a 1:1 inventory bind you can hit while shot. Loot menus kill more squads than the zone. Practice stacking meds without looking at every attachment.",
        },
        {
          heading: "Sound",
          body: "Effects up, music down. Footsteps and engines are the game. Turn on enemy death icons if you use them for third-parties — they are information, not a reason to sprint at a box.",
        },
        {
          heading: "Performance",
          body: "Cap a frame rate you hold in compounds with smokes and cars. A freeze on a swing is a death. Drop extra scaling if late-game hitching is real.",
        },
        {
          heading: "Sensitivity",
          body: "ADS per optic if you swap 2x and 6x. Copying a pro without their mousepad is how you miss the first shot you needed.",
        },
        {
          heading: "FPP FOV",
          body: "Higher FOV sees more and shrinks targets. Pick one and stay. TPP camera distance is a separate cheat-code — learn it on purpose.",
        },
      ],
    },
    {
      slug: "faq",
      title: "PUBG FAQ",
      category: "FAQ",
      readTime: "5 min",
      excerpt: "Free to play, solo vs squad, dying after a win, and which map to learn first.",
      seoKeywords: ["PUBG FAQ", "is PUBG free", "PUBG beginner map"],
      content: [
        {
          heading: "Is PUBG free?",
          body: "Yes on Steam. Some cosmetics and passes are paid. The rifles and the zone are not pay-to-win.",
        },
        {
          heading: "Solo, duo, or squad?",
          body: "Learn loot and shooting in solo. Squads teach revives, rides, and not overlapping sightlines. Random fill is a driver exam with strangers.",
        },
        {
          heading: "Why do I die after winning a fight?",
          body: "You advertised the gunshots. Heal in cover, reload, then leave or hold — do not loot in the open.",
        },
        {
          heading: "Which map is best for beginners?",
          body: "Erangel. Classic compounds and a readable circle. Livik is faster if you only have 20 minutes. Miramar waits until you keep a car.",
        },
        {
          heading: "Hot drop or not?",
          body: "Sometimes for chaos. Not every game. Mid-tier drops teach the actual loop: loot, car, circle, third-party.",
        },
      ],
    },
  ],
};
