import type { FullWiki, WikiImage } from "../types";
import { steamHeader, steamHero } from "@/lib/steam-wiki";

const APP = 1172470;

function header(alt: string): WikiImage {
  return { src: steamHeader(APP), alt };
}

function hero(alt: string): WikiImage {
  return { src: steamHero(APP), alt };
}

export const apexWiki: FullWiki = {
  slug: "apex-legends",
  hubs: { maps: "Maps", roles: "Roles", strats: "Setups" },
  copy: {
    home: {
      strats: "Drops, crack-then-push, ring, and banners — not a Fragment montage.",
      roles: "Support and Controller first. Skirmishers last.",
      maps: "Firing Range and a mid POI before you live in Fragment.",
      guides: "Beginner path, squad fights, legends, guns, ring, and ranked.",
    },
    pages: {
      maps: "BR maps plus the Range. Learn a mid POI and the ring before you main a hot drop.",
      roles: "Classes exist so someone scans, someone covers, and someone is not three Wraiths.",
      strats: "How to take a fight, reset, rotate, and not get beamed while looting.",
    },
  },
  maps: [
    {
      slug: "firing-range",
      name: "Firing Range",
      difficulty: "Easy",
      tagline: "The only map where dying is free: hip-fire SMGs, tap-fire ARs, and movement that can wait.",
      overview:
        "The Firing Range is where Apex should start. Hip-fire SMGs vs tap-fire ARs, recoil on one gun until it is boring, then a legend's tactical. Movement tech can wait. If you cannot hit a dummy at the range the gun actually fights, ranked will not teach you. Mixtape is the next classroom. Fragment is not.",
      stats: [
        { label: "Play first", value: "Yes — before BR as a gun tutorial" },
        { label: "Focus", value: "One SMG, one AR, one shotgun range" },
        { label: "Skip", value: "Superglide playlists until the gun is down" },
      ],
      poi: [
        { name: "Dummy line", note: "Pick a distance. Hip SMG close, tap AR mid. Do not spray 40m with a CAR on full auto as a lesson." },
        { name: "Moving dummies", note: "Tracking. ALC is optional; a curve you cannot use is a handicap." },
        { name: "Legend dummies", note: "Tactical and ult on a target. If the ult does not change 10 seconds, wait in real games too." },
        { name: "Zip / jump towers", note: "Optional. Landing is more important than the clip." },
        { name: "Range PvP", note: "Fine for a warm-up. Not a substitute for ring." },
      ],
      notes: [
        "Play the Firing Range until you understand hip-fire SMGs vs tap-fire ARs.",
        "Turn on interact prompts and damage numbers if you are learning bloom.",
        "Cap FPS if 1% lows hitch during abilities. VFX is heavier than POI geometry.",
      ],
      image: header("Apex Legends Firing Range"),
      seoKeywords: ["Apex Firing Range", "Apex aim trainer", "Apex beginner"],
    },
    {
      slug: "worlds-edge",
      name: "World's Edge",
      difficulty: "Medium",
      tagline: "Trains, lava, Fragment — and a map that still has mid POIs if you want RP.",
      overview:
        "World's Edge is the classic large map: trains, loot bins, lava fissures, and Fragment as the challenge-run drop. Ranked is survival plus KP. Hot dropping Fragment every game is not a ladder. Learn a mid POI (Countdown, Skyhook, Sorting, Harvest depending on the season layout), loot a kit, rotate on ring with height. Third parties walk on the sound of your fight. Do not loot for two minutes after a knock.",
      stats: [
        { label: "Hot drop", value: "Fragment — sometimes, not always" },
        { label: "Win", value: "Height + ring, not 8 KP dead 12th" },
        { label: "Rotate", value: "Zips, trains, and not the open lava beach" },
      ],
      poi: [
        { name: "Fragment", note: "Chaos. Fine for mixtape energy. Bad as your only drop if you want RP." },
        { name: "Mid POIs", note: "One or two other squads. Kit, then rotate. This is the classroom." },
        { name: "Trains / zips", note: "Ring tools. Walking a beach as three is KP for a ridge team." },
        { name: "Lava / fissures", note: "Third-party highways and death if you rotate late with no heat plan." },
        { name: "High ground", note: "The actual endgame. Take it or do not take the fight below it." },
      ],
      notes: [
        "Ping ammo, enemies, and banners. The ping system is the tutorial for players who will not mic.",
        "Craft banners when a teammate is dead instead of 1v3ing their killers for a highlight.",
        "EVO from damage. Take a small fight to evolve before a big one if you are still white/blue.",
      ],
      image: header("Apex Legends World's Edge"),
      seoKeywords: ["World's Edge", "Apex Fragment", "Apex World's Edge guide"],
    },
    {
      slug: "storm-point",
      name: "Storm Point",
      difficulty: "Hard",
      tagline: "Huge, wildlife, heat shields — and the map that punishes 'we can make it' without a plan.",
      overview:
        "Storm Point is large. Ring is the boss. Heat shields, tridents, and beasts are extra verbs, not a reason to ignore timers. Ignoring ring because 'we can make it' is how you die with no heat shields. Drop mid-tier, loot, rotate early. High ground and zip lines are ring tools. Walking a beach as three is how you donate KP to a ridge team.",
      stats: [
        { label: "Size", value: "Large — leave early" },
        { label: "Gimmick", value: "Heat shields / wildlife — optional, timers are not" },
        { label: "Fail", value: "Late rotate with white armor and no heals" },
      ],
      poi: [
        { name: "Coastal POIs", note: "Pretty and late. Ring will eat you. Vehicle or zip." },
        { name: "Interior / high", note: "Where endgames live. Take height before the last two rings." },
        { name: "Wildlife", note: "A third party with extra HP. Do not start a PvE war in a 3v3." },
        { name: "Tridents", note: "Rotate tools. Parking in the open is a beam." },
        { name: "Replicators", note: "Banners and heals. Craft, then leave. AFK craft is a deathbox." },
      ],
      notes: [
        "You cannot make it, with no heat shields, on Storm Point — the pitch is literal.",
        "Third parties travel farther. After a knock: cover, batts, then loot.",
        "Ranked: placement is RP. A 2-2 dead in ring 2 is not a W.",
      ],
      image: header("Apex Legends Storm Point"),
      seoKeywords: ["Storm Point Apex", "Apex heat shield", "Storm Point rotation"],
    },
    {
      slug: "kings-canyon",
      name: "Kings Canyon",
      difficulty: "Medium",
      tagline: "The original: tight POIs, zip spam, and third parties that arrive in ten seconds.",
      overview:
        "Kings Canyon is smaller-feeling fights and faster third parties. Slums, skull town-era energy even when the POI names change. You loot less, you fight sooner, you reset or you die. Support legends and smokes earn more here than on a desert ridge. Do not chase a knock 80 meters from your team — you are now the knock.",
      stats: [
        { label: "Pace", value: "Fast third parties" },
        { label: "Drop", value: "Edge or mid — the whole map is 'contest' if you land center" },
        { label: "Reset", value: "Buildings and zips, not an open field batts" },
      ],
      poi: [
        { name: "Named hot POIs", note: "Contest. Ping a different building if two teams land." },
        { name: "Zips", note: "Rotate and escape. Cut zips if you are holding." },
        { name: "Canyons / low ground", note: "A beam from above. Do not reset in a ditch vs height." },
        { name: "Survey beacons", note: "Recon job. Ring knowledge is KP you did not shoot for." },
        { name: "Craft", note: "Banners. Do not 1v3 the team that just killed your mate." },
      ],
      notes: [
        "Popping a Phoenix Kit in the open. Battery behind cover, then kit in a building.",
        "Scan, smoke, or dome should enable a push, not replace shooting.",
        "Mixtape guns transfer. KC just asks you to use them faster.",
      ],
      image: header("Apex Legends Kings Canyon"),
      seoKeywords: ["Kings Canyon Apex", "Apex KC guide", "Apex zip lines"],
    },
    {
      slug: "olympus",
      name: "Olympus",
      difficulty: "Medium",
      tagline: "Phase belts, tridents, and a floating city that still has a ring.",
      overview:
        "Olympus is vertical and gimmicky: phase tides, tridents, and long sightlines on the plates. Poke comps and IGLAs feel good until a skirmisher deletes your backline. Play cover, not the postcard. Tridents are rotates. Phase is a timer, not a personality. Mid POIs still beat hot dropping the most contested name on the map every game.",
      stats: [
        { label: "Vertical", value: "High — look up, hold cover" },
        { label: "Rotate", value: "Tridents and phase windows" },
        { label: "Poke", value: "Real — still reset behind a wall" },
      ],
      poi: [
        { name: "Phase / belts", note: "Know the timer. Getting caught mid-phase is a running simulator with extra steps." },
        { name: "Trident pads", note: "Ring tool. Do not parade the open." },
        { name: "Estates / energy", note: "Contest POIs. Land with a plan to leave." },
        { name: "Hammond / labs", note: "Interior fights. Shotguns and smokes." },
        { name: "Edge rings", note: "Pretty deaths. Rotate before the postcard." },
      ],
      notes: [
        "Break shields, crack, then either push together or reset.",
        "Solo swinging a cracked enemy through a doorway is a free beam.",
        "Controller legends (gas, fences, walls) make Olympus interiors less of a Wraith playground.",
      ],
      image: header("Apex Legends Olympus"),
      seoKeywords: ["Olympus Apex", "Apex Olympus guide", "Apex trident"],
    },
    {
      slug: "broken-moon",
      name: "Broken Moon",
      difficulty: "Medium",
      tagline: "Zips, mag-rails, and a map that looks sci-fi until you die in the open like everywhere else.",
      overview:
        "Broken Moon is infrastructure: zip lines and mag-rails that move you or the third party. Treat rails like trains on World's Edge — a tool and a tell. Drop mid, loot, take height on ring. The moon aesthetic does not change crack-then-push. If your squad is three disconnected alims, the rails just help you die apart.",
      stats: [
        { label: "Move", value: "Zips and rails — loud and useful" },
        { label: "Fight", value: "Same rules: cover, crack, together" },
        { label: "Ranked", value: "Do not rail into a 3-team for a clip" },
      ],
      poi: [
        { name: "Rails", note: "Rotate. You are visible. Get off before the fight you wanted." },
        { name: "Interior labs", note: "Close. Support and controller value." },
        { name: "High rocks / broken", note: "Endgame height. Take it." },
        { name: "Named towns", note: "Mid drops. Ping if contested." },
        { name: "Edge", note: "Late ring will punish tourists." },
      ],
      notes: [
        "A team that sticks together and shares cover will beat three disconnected alims every time.",
        "Looting for two minutes after a knock. The third party is already walking — on a rail, even.",
        "Craft banners. 1v3 revenge is content for them.",
      ],
      image: header("Apex Legends Broken Moon"),
      seoKeywords: ["Broken Moon Apex", "Apex mag rail", "Broken Moon guide"],
    },
    {
      slug: "e-district",
      name: "E-District",
      difficulty: "Hard",
      tagline: "Neon city BR: vertical, close, and third parties that take the elevator with you.",
      overview:
        "E-District is the urban map: buildings, neon, and fights that feel like mixtape with a ring. Vertical is the skill. Look up, hold stairs, do not reset in the street vs a team on a roof. Drop a side district, not the most named plaza every game. SMGs and shotguns earn their keep. Ring still exists — the city just hides it until you are late.",
      stats: [
        { label: "Range", value: "Close-to-mid — hip-fire matters" },
        { label: "Vertical", value: "Roofs and stairs are the map" },
        { label: "Third party", value: "Fast — reset inside, not in the neon street" },
      ],
      poi: [
        { name: "Central plaza", note: "Hot. Sometimes. Not a ranked default." },
        { name: "Side blocks", note: "Kit, then height. This is the drop." },
        { name: "Roofs", note: "If you do not have them, you do not take the fight in the street." },
        { name: "Interiors", note: "Grenades, smokes, doors. Bangalore / Catalyst earn their pick.",
        },
        { name: "Ring through city", note: "Leave a POI early. Urban FOMO is how you die in zone." },
      ],
      notes: [
        "Firing Range hip-fire is this map's homework.",
        "Phoenix in the open neon is a spotlight. Cover, batts, kit inside.",
        "New maps are easier after you already ping and reset on World's Edge.",
      ],
      image: header("Apex Legends E-District"),
      seoKeywords: ["E-District Apex", "Apex city map", "E-District guide"],
    },
    {
      slug: "mixtape",
      name: "Mixtape",
      difficulty: "Easy",
      tagline: "Control, TDM, Gun Run: guns without the ring — then go back to BR.",
      overview:
        "Mixtape is the gun playlist: Control, TDM, Gun Run, and whatever Respawn is rotating. It teaches bloom, hip-fire, and legend kits without a 20-minute ring. It does not teach third parties or crafting banners. Warm up here, then BR. If you only play Mixtape, you will still die to zone on Storm Point with a 2.0 K/D.",
      stats: [
        { label: "Best for", value: "Guns and legend TTK" },
        { label: "Not a substitute for", value: "Ring, loot, third parties" },
        { label: "When", value: "Before ranked, or after a tilt game" },
      ],
      poi: [
        { name: "Control points", note: "Play the point. Mixtape still has an objective." },
        { name: "TDM spawns", note: "Do not spawn-peek the same angle 12 times as 'practice'." },
        { name: "Gun Run", note: "Weapon swap. Learn two guns, not twenty badly." },
        { name: "Legend select", note: "Try the class you will fill in BR. Three Octanes here does not fix ranked." },
        { name: "After", note: "Queue BR. The ring is the rest of the game." },
      ],
      notes: [
        "Mixtape (Control, TDM, Gun Run) teaches guns. BR teaches ring and third parties.",
        "Start with Gibraltar, Bangalore, or Bloodhound if you want clear value in both modes.",
        "Movement legends punish bad positioning harder — learn that in BR, not only in TDM.",
      ],
      image: header("Apex Legends Mixtape Control"),
      seoKeywords: ["Apex Mixtape", "Apex Control", "Apex TDM"],
    },
  ],
  roles: [
    {
      slug: "support",
      name: "Support",
      role: "Res, cover, craft",
      difficulty: "Easy",
      beginnerRank: 1,
      tiers: [
        { label: "Job", value: "Banners, res behind cover, gold bags later" },
        { label: "Legends", value: "Lifeline, Gibraltar, Newcastle, Conduit-class" },
      ],
      kit: ["A legend that can res or dome", "Batteries for the team", "The ping button"],
      excerpt:
        "The best first class. You craft banners, you res behind a wall, and you do not 1v3 the squad that just wiped you.",
      strengths: [
        "RP is teammates alive. Support is the ranked class.",
        "Gibraltar and Bangalore (smoke) teach cover even if Bang is Assault",
        "Clear value: a res that lives is a fight",
      ],
      weaknesses: [
        "Res in the open is a second deathbox",
        "Never shooting because you are 'the medic'",
      ],
      starterTips: [
        "Start with Gibraltar if you want a dome that is obvious. Lifeline if you like faster res.",
        "Craft banners when a teammate is dead instead of 1v3ing their killers for a highlight.",
        "Battery behind cover, then Phoenix in a building. Never a kit in the open.",
        "Ping ammo and banners. Apex's ping system is the tutorial for players who will not mic.",
      ],
      image: hero("Apex Legends Support legend revive"),
      seoKeywords: ["Apex Support", "Apex Lifeline", "Apex Gibraltar"],
    },
    {
      slug: "controller",
      name: "Controller",
      role: "Space and denial",
      difficulty: "Easy",
      beginnerRank: 2,
      tiers: [
        { label: "Job", value: "Walls, gas, fences — hold a building" },
        { label: "Legends", value: "Catalyst, Wattson, Caustic, Rampart" },
      ],
      kit: ["Ult that actually holds a doorway", "A building you will live in", "Teammates who play the space"],
      excerpt:
        "You make a POI yours. Scan, smoke, or dome should enable a push — your wall should enable a reset. Endgame loves you.",
      strengths: [
        "Wins ring 4–5 that Wraiths throw by running",
        "Teaches 'play cover' better than a movement legend",
        "E-District and interiors are your classroom",
      ],
      weaknesses: [
        "Fencing a doorway nobody will walk",
        "No gun skill because the gas did the montage in your head",
      ],
      starterTips: [
        "Catalyst or Wattson first. Caustic if you like buildings and the patch still loves him.",
        "Hold the building you looted. Do not gas a field.",
        "If your ult does not change the next 10 seconds, wait.",
        "Ranked endgames are Controller games. Fill this if nobody locked it.",
      ],
      image: hero("Apex Legends Controller legend holding a building"),
      seoKeywords: ["Apex Controller", "Apex Catalyst", "Apex Wattson"],
    },
    {
      slug: "recon",
      name: "Recon",
      role: "Scans and beacons",
      difficulty: "Medium",
      beginnerRank: 3,
      tiers: [
        { label: "Job", value: "Beacons, scans, info — then shoot" },
        { label: "Legends", value: "Bloodhound, Crypto, Seer, Valk (when recon)" },
      ],
      kit: ["A scan you use before the swing", "Beacons on rotate", "A mic or pings that are not 'enemy'"],
      excerpt:
        "You tell the squad where the next fight is. Bloodhound is the clear first Recon. A scan that nobody pushes is a light show.",
      strengths: [
        "Ring knowledge is free RP",
        "Bloodhound is the recommended 'clear value' recon",
        "Stops 3v3s that were actually 3v6",
      ],
      weaknesses: [
        "Scanning and never shooting",
        "Crypto in a drone while the team 2v3s",
      ],
      starterTips: [
        "Start with Bloodhound if you want clear value. Movement legends punish bad positioning harder.",
        "Beacon on rotate, not after you are already late to ring.",
        "Ping the scan. 'They're one' is a sentence. Silence is a wipe.",
        "Crack, not crave — scan the cracked target so the squad swings together.",
      ],
      image: hero("Apex Legends Bloodhound scan"),
      seoKeywords: ["Apex Recon", "Apex Bloodhound", "Apex survey beacon"],
    },
    {
      slug: "assault",
      name: "Assault",
      role: "Break space, crack armor",
      difficulty: "Medium",
      beginnerRank: 4,
      tiers: [
        { label: "Job", value: "Damage, red bins, a push that is together" },
        { label: "Legends", value: "Bangalore, Fuse, Ash, Mad Maggie" },
      ],
      kit: ["An AR/SMG you warmed in Range", "Ult that enables a swing", "A team that is not 80m behind"],
      excerpt:
        "You print EVO and open doors. Bangalore smoke is the best first assault kit. Solo swinging a crack through a doorway is a free beam.",
      strengths: [
        "EVO from dealing damage — take a small fight to evolve if you are white/blue",
        "Bangalore teaches smoke as cover, which is Apex",
        "Red weapon bins if the class still has them — check the season",
      ],
      weaknesses: [
        "Rolling ult into a 1v3",
        "Chasing a knock 80 meters from your team",
      ],
      starterTips: [
        "Bangalore first. Smoke for the res and the rotate, not only for the clip.",
        "Break shields, crack, then push together or reset.",
        "Looting for two minutes after a knock. The third party is already walking.",
        "If your ult does not change the next 10 seconds, wait.",
      ],
      image: hero("Apex Legends Bangalore assault"),
      seoKeywords: ["Apex Assault", "Apex Bangalore", "Apex Fuse"],
    },
    {
      slug: "skirmisher",
      name: "Skirmisher",
      role: "Entry and escape",
      difficulty: "Hard",
      beginnerRank: 5,
      tiers: [
        { label: "Job", value: "Take space, leave space, do not 1v3" },
        { label: "Legends", value: "Wraith, Pathfinder, Octane, Horizon, Alter" },
      ],
      kit: ["Movement you practiced after the gun", "A portal/zip the team can use", "The humility to play cover"],
      excerpt:
        "You take the first angle and you get out. Movement legends punish bad positioning harder. Three Wraiths is not a composition.",
      strengths: [
        "Resets and height that other classes walk",
        "Path zips are ring tools",
        "Clips are real — so are 1-7 ranked games",
      ],
      weaknesses: [
        "Playing around your squad, not with them",
        "Q-ing out and leaving two teammates in a 2v3",
      ],
      starterTips: [
        "Movement tech can wait. Firing Range guns first.",
        "Portal/zip for the team. A Wraith who only saves herself is a Duelist in the wrong game.",
        "Chasing a knock 80 meters from your team. You are now the knock.",
        "Fill Support or Controller if the lobby already locked two skirmishers.",
      ],
      image: hero("Apex Legends Wraith skirmisher"),
      seoKeywords: ["Apex Skirmisher", "Apex Wraith", "Apex Pathfinder"],
    },
  ],
  strats: [
    {
      slug: "mid-poi-drop",
      name: "Mid POI Drop",
      mapSlug: "worlds-edge",
      mapName: "World's Edge",
      difficulty: "Easy",
      risk: "Low",
      bestFor: "Fragment every game, then wondering why RP is a joke",
      duration: "Drop + first 3 minutes",
      excerpt:
        "Land a named POI that is not the plane's favorite. Loot a kit, ping, then rotate. Hot drop is a challenge run.",
      steps: [
        "Jump master: pick mid-tier. Ping the building. Split loot, not three people on one bin.",
        "SMG/AR, batts, a shield. Attachments are extra. EVO comes from the next fight.",
        "If two teams land, play the building, ping, reset together. Do not 1v3 for a gold mag.",
        "Leave when you can fight. Sitting 4 minutes in a POI is how ring and third parties eat you.",
        "Same idea on every BR map. Fragment/hot plaza is optional homework, not the default.",
      ],
      tips: [
        "Hot dropping Fragment every game is a challenge run, not a ladder strategy.",
        "Mixtape if you wanted constant fights. BR is ring plus KP.",
        "Ping ammo. The silent drop is how duos starve.",
      ],
      image: header("Apex Legends mid POI drop"),
      seoKeywords: ["Apex drop spots", "Apex ranked drop", "where to drop Apex"],
    },
    {
      slug: "crack-push",
      name: "Crack Then Push",
      mapSlug: "kings-canyon",
      mapName: "Kings Canyon",
      difficulty: "Medium",
      risk: "High",
      bestFor: "Teams that swing one-by-one through a door",
      duration: "One fight",
      excerpt:
        "Break shields, crack, then push together or reset. Solo swinging a cracked enemy through a doorway is a free beam.",
      steps: [
        "Take an angle as a trio. Damage until a crack. Ping the cracked player.",
        "If you have utility (smoke, dome, scan), use it on the go — not 8 seconds earlier.",
        "Swing together. Trade. The first entry is allowed to die if two people shoot the same target.",
        "If the crack resets, you reset. Batts behind cover. No Phoenix in the open.",
        "After the wipe: cover, batts, glance at the horizon, then loot. Two minutes of shopping is a third party.",
      ],
      tips: [
        "Legend jobs: scan, smoke, or dome should enable a push, not replace shooting.",
        "Chasing a knock 80 meters from your team. You are now the knock.",
        "EVO: a small fight to evolve white/blue is legal. A 3v3 for white armor in the open is not.",
      ],
      image: header("Apex Legends squad pushing a crack"),
      seoKeywords: ["Apex team fight", "how to push Apex", "Apex third party"],
    },
    {
      slug: "ring-rotate",
      name: "Ring Rotate",
      mapSlug: "storm-point",
      mapName: "Storm Point",
      difficulty: "Medium",
      risk: "Medium",
      bestFor: "Squads that ignore timers because they can 'make it'",
      duration: "Each ring after first loot",
      excerpt:
        "High ground and zips are ring tools. Walking a beach as three is how you donate KP to a ridge team.",
      steps: [
        "Look at the next ring when you hear the timer, not when you are already in storm.",
        "Heat shields / heals / a trident on Storm Point. You cannot make it on hope.",
        "Take height on the rotate. Do not walk the postcard beach.",
        "Beacon if you have Recon. Knowing the next ring is damage you did not take.",
        "Gatekeep or be late — pick one. Late plus a fight is a deathbox in zone.",
      ],
      tips: [
        "Ignoring ring timers because 'we can make it'. You cannot, with no heat shields, on Storm Point.",
        "World's Edge lava and Olympus phase have the same lesson: leave early.",
        "Ranked RP is survival plus kills. Zone deaths are free RP for someone else.",
      ],
      image: header("Apex Legends ring rotation"),
      seoKeywords: ["Apex rotations", "Apex ring", "Storm Point rotate"],
    },
    {
      slug: "banner-craft",
      name: "Banner Craft",
      mapSlug: "worlds-edge",
      mapName: "Any BR map",
      difficulty: "Easy",
      risk: "Low",
      bestFor: "Players who 1v3 the squad that just wiped their mate",
      duration: "Until the banner expires",
      excerpt:
        "Craft banners at a replicator. A highlight 1v3 is how you go from 2 alive to 0.",
      steps: [
        "Grab the banner if it is safe. If it is not, leave and craft.",
        "Replicator: banners first, then ammo/heals. Do not AFK the craft animation in the open.",
        "Res in cover. Gibraltar dome / Newcastle wall / a building — not the street.",
        "If you cannot craft in time, play for placement. Two alive in ring 4 is RP.",
        "Ping the replicator. Silent crafts are how the third sits on you.",
      ],
      tips: [
        "Craft banners when a teammate is dead instead of 1v3ing their killers for a highlight.",
        "Support class is this setup as a legend.",
        "Timer is real. Ego fights during a banner timer are how you lose two people.",
      ],
      image: header("Apex Legends crafting banners"),
      seoKeywords: ["Apex banners", "Apex replicator", "Apex revive"],
    },
    {
      slug: "ranked-rp",
      name: "Ranked RP Plan",
      mapSlug: "worlds-edge",
      mapName: "Ranked",
      difficulty: "Medium",
      risk: "Low",
      bestFor: "Hot droppers who call the ladder RNG",
      duration: "A ranked session",
      excerpt:
        "RP is survival plus kills. Placement is the floor. Fragment every game is a challenge run.",
      steps: [
        "Fill a missing class. Three skirmishers is a mixtape stack.",
        "Mid POI, kit, a small EVO fight if you are white, then ring.",
        "Take fights you can finish before the next squad arrives. Reset if you cannot.",
        "Play for top 5 if the lobby is lasers. KP from a third party beats a 3-team for 8th.",
        "Stop after a tilt loss. Mixtape or Range, not 'one more Fragment'.",
      ],
      tips: [
        "Hot dropping Fragment every game is a challenge run, not a ladder strategy.",
        "Ping. Ranked without pings is three solos.",
        "Controller in endgame. If nobody locked it, you are the Wattson.",
      ],
      image: header("Apex Legends ranked match"),
      seoKeywords: ["Apex ranked", "Apex RP", "how to rank up Apex"],
    },
    {
      slug: "mixtape-warmup",
      name: "Mixtape Warm-Up",
      mapSlug: "mixtape",
      mapName: "Mixtape",
      difficulty: "Easy",
      risk: "Low",
      bestFor: "People who queue ranked cold and blame aim assist",
      duration: "10–20 minutes",
      excerpt:
        "Guns in Mixtape, then BR. Control/TDM/Gun Run teach bloom. They do not teach ring.",
      steps: [
        "Firing Range: one SMG hip, one AR tap, two magazines each.",
        "One Mixtape game on the legend you will fill.",
        "Queue BR. Drop mid. Play the ring plan.",
        "If you lost to guns, more Mixtape. If you lost to zone, more BR.",
        "ALC is optional. A copied pro curve you cannot track is worse than default.",
      ],
      tips: [
        "Mixtape teaches guns. BR teaches ring and third parties.",
        "Play what you aim better with. Aim assist exists; movement still matters.",
        "Ability VFX hitches: cap FPS. The 1% low is the death, not the POI.",
      ],
      image: header("Apex Legends Mixtape warm-up"),
      seoKeywords: ["Apex warm up", "Apex Mixtape", "Apex Firing Range routine"],
    },
  ],
  guides: [
    {
      slug: "beginner-guide",
      title: "Apex Legends Beginner Guide",
      category: "Getting Started",
      readTime: "9 min",
      excerpt:
        "Range first, a clear legend, pings, and why Fragment is not the tutorial.",
      seoKeywords: ["Apex beginner", "how to play Apex", "Apex first hours"],
      heroImage: hero("Apex Legends beginner guide"),
      content: [
        {
          heading: "What you are actually playing",
          body: "Apex is a movement-heavy BR where legends, shields, and third-parties define fights. A team that sticks together and shares cover will beat three disconnected alims every time. You win by dropping as a trio, looting a POI, rotating on ring with a plan, then taking fights you can finish before the next squad arrives.",
        },
        {
          heading: "The first week",
          body: "Play the Firing Range until you understand hip-fire SMGs vs tap-fire ARs. Movement tech can wait. Start with Gibraltar, Bangalore, or Bloodhound if you want clear value. Movement legends punish bad positioning harder.",
        },
        {
          heading: "Pings",
          body: "Ping ammo, enemies, and banners. Apex's ping system is the tutorial for players who will not mic. Craft banners when a teammate is dead instead of 1v3ing their killers for a highlight.",
        },
        {
          heading: "Mixtape then BR",
          body: "Mixtape teaches guns. BR teaches ring and third parties. Do not only play TDM and then wonder why Storm Point killed you.",
        },
        {
          heading: "What good looks like after a week",
          body: "You can loot a mid POI, batt behind cover, push a crack as a trio, and craft a banner. Then ranked. Fragment can wait.",
        },
      ],
    },
    {
      slug: "squad-fight-flow",
      title: "Apex Squad Fight Flow",
      category: "Team Play",
      readTime: "8 min",
      excerpt:
        "How to take a fight, reset, and not get beamed while looting.",
      seoKeywords: ["Apex team fight", "Apex third party", "Apex reset"],
      heroImage: header("Apex Legends squad fight"),
      content: [
        {
          heading: "Crack, not crave",
          body: "Break shields, crack, then either push together or reset. Solo swinging a cracked enemy through a doorway is a free beam.",
        },
        {
          heading: "Legend jobs",
          body: "Scan, smoke, or dome should enable a push, not replace shooting. If your ult does not change the next 10 seconds, wait.",
        },
        {
          heading: "Rotations",
          body: "High ground and zip lines are ring tools. Walking a beach as three is how you donate KP to a ridge team.",
        },
        {
          heading: "After the knock",
          body: "Looting for two minutes after a knock. The third party is already walking. Cover, batts, then loot. Phoenix in the open is a spotlight.",
        },
        {
          heading: "Chase",
          body: "Chasing a knock 80 meters from your team. You are now the knock. Play with your squad, not around them.",
        },
      ],
    },
    {
      slug: "legends-and-classes",
      title: "Apex Legends Classes",
      category: "Legends",
      readTime: "8 min",
      excerpt:
        "Support, Controller, Recon, Assault, Skirmisher — fill the hole, do not triple Wraith.",
      seoKeywords: ["Apex classes", "Apex legends guide", "best Apex legend for beginners"],
      heroImage: header("Apex Legends character select"),
      content: [
        {
          heading: "Support",
          body: "Banners, res, cover. Gibraltar, Lifeline, Newcastle. Craft the banner. Do not 1v3.",
        },
        {
          heading: "Controller",
          body: "Hold buildings and endgames. Catalyst, Wattson, Caustic. Ranked loves this class when nobody locked it.",
        },
        {
          heading: "Recon",
          body: "Beacons and scans. Bloodhound is the clear first pick. Info only matters if the squad shoots it.",
        },
        {
          heading: "Assault",
          body: "Damage and space. Bangalore first. Crack, then a team push. EVO from shooting.",
        },
        {
          heading: "Skirmisher",
          body: "Entry and escape. Last to learn. Movement tech after the gun. Portal for the team, not only for you.",
        },
      ],
    },
    {
      slug: "guns-and-evo",
      title: "Apex Guns, Bloom, and EVO",
      category: "Guns",
      readTime: "8 min",
      excerpt:
        "Hip SMG, tap AR, batteries, and why white armor should pick a small fight.",
      seoKeywords: ["Apex guns", "Apex EVO", "Apex recoil"],
      heroImage: header("Apex Legends weapons and EVO"),
      content: [
        {
          heading: "Ranges",
          body: "Hip-fire SMGs close. Tap-fire ARs mid. Shotguns in doors. Spraying an AR at 80m is a loot pinata for the team that can aim.",
        },
        {
          heading: "Range practice",
          body: "One gun until the mag is boring. Damage numbers on if you are learning bloom. Movement tech after.",
        },
        {
          heading: "EVO",
          body: "Armor upgrades from dealing damage. Take a small fight to evolve before a big one if you are still white/blue.",
        },
        {
          heading: "Heals",
          body: "Cells and batts behind cover. Phoenix in a building. Popping a kit in the open is how montages of you get made.",
        },
        {
          heading: "Loot after fights",
          body: "The third party is walking. Grab batts and ammo first, gold attachments second.",
        },
      ],
    },
    {
      slug: "rotations-and-ring",
      title: "Apex Rotations and Ring",
      category: "Map Movement",
      readTime: "7 min",
      excerpt:
        "Zips, heat shields, beacons, and not walking the beach.",
      seoKeywords: ["Apex rotations", "Apex ring", "Apex ranked rotation"],
      heroImage: header("Apex Legends ring closing"),
      content: [
        {
          heading: "Leave early",
          body: "Ignoring ring timers because 'we can make it' is a Storm Point special. Heat shields, tridents, zips. Walking is how 12th place happens.",
        },
        {
          heading: "Height",
          body: "High ground and zip lines are ring tools. Walking a beach as three donates KP to a ridge team.",
        },
        {
          heading: "Beacons",
          body: "Recon job. Next ring is information. Late beacons are a gravestone.",
        },
        {
          heading: "Gatekeep",
          body: "If you are early, you can hold. If you are late, you do not take a 3v3 in zone for pride.",
        },
        {
          heading: "Map gimmicks",
          body: "Trains, phase, rails, wildlife — tools. The ring is still the boss.",
        },
      ],
    },
    {
      slug: "ranked",
      title: "Apex Ranked",
      category: "Ranked",
      readTime: "7 min",
      excerpt:
        "RP is survival plus kills. Fill, ping, stop Fragment-only queues.",
      seoKeywords: ["Apex ranked", "Apex RP", "Apex ranked guide"],
      heroImage: header("Apex Legends ranked"),
      content: [
        {
          heading: "The math",
          body: "RP is survival plus kills. Hot dropping Fragment every game is a challenge run, not a ladder strategy.",
        },
        {
          heading: "Comp",
          body: "Fill Support or Controller. Three skirmishers is mixtape. Play with your squad, not around them.",
        },
        {
          heading: "Fights",
          body: "Finish before the next squad arrives. Reset. Third parties define Apex more than your 1v1.",
        },
        {
          heading: "Tilt",
          body: "Mixtape or Range after two ugly games. Ranked cold-requeue is how you donate RP.",
        },
        {
          heading: "Controller vs MnK",
          body: "Play what you aim better with. Aim assist exists; movement still matters.",
        },
      ],
    },
    {
      slug: "settings",
      title: "Apex Settings and ALC",
      category: "PC Setup",
      readTime: "6 min",
      excerpt:
        "Deadzone, FPS caps, and a curve you can actually track with.",
      seoKeywords: ["Apex settings", "Apex ALC", "Apex FPS"],
      heroImage: header("Apex Legends settings"),
      content: [
        {
          heading: "ALC",
          body: "Optional. A simple small deadzone and a comfortable outer threshold beat a copied pro curve you cannot track with.",
        },
        {
          heading: "Performance",
          body: "On PC, cap FPS if the 1% lows hitch during abilities. Ability VFX is heavier than POI geometry.",
        },
        {
          heading: "UI",
          body: "Turn on interact prompts and damage numbers if you are learning gun bloom. Pings on a button you can hit.",
        },
        {
          heading: "FOV",
          body: "Higher sees more and shrinks targets. Pick one and stay for the session.",
        },
        {
          heading: "Audio",
          body: "Footsteps and deaths. Music down. Third parties are an audio game.",
        },
      ],
    },
    {
      slug: "faq",
      title: "Apex Legends FAQ",
      category: "FAQ",
      readTime: "5 min",
      excerpt: "Free to play, Mixtape vs BR, EVO, and controller on PC.",
      seoKeywords: ["Apex FAQ", "is Apex free", "Apex EVO"],
      content: [
        {
          heading: "Is Apex free?",
          body: "Yes. Legends rotate or unlock with in-game currency over time. Cosmetics are the shop.",
        },
        {
          heading: "Mixtape or BR first?",
          body: "Mixtape (Control, TDM, Gun Run) teaches guns. BR teaches ring and third parties.",
        },
        {
          heading: "What is EVO?",
          body: "Armor upgrades from dealing damage. Take a small fight to evolve before a big one if you are still white/blue.",
        },
        {
          heading: "Should I use a controller on PC?",
          body: "Play what you aim better with. Aim assist exists; movement still matters.",
        },
        {
          heading: "Who should I unlock first?",
          body: "Gibraltar, Bangalore, or Bloodhound for clear value. Movement legends after you can play cover.",
        },
      ],
    },
  ],
};
