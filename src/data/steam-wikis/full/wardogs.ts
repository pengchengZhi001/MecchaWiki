import type { FullWiki, WikiImage } from "../types";
import { steamHeader, steamHero } from "@/lib/steam-wiki";

const APP = 1867240;

function header(alt: string): WikiImage {
  return { src: steamHeader(APP), alt };
}

function hero(alt: string): WikiImage {
  return { src: steamHero(APP), alt };
}

export const wardogsWiki: FullWiki = {
  slug: "wardogs",
  hubs: { maps: "Maps", roles: "Roles", strats: "Setups" },
  copy: {
    home: {
      strats: "Hot Zone bodies, cheap kits, and the third faction — not a kill montage.",
      roles: "Medic and Assault first. Pilots exist to shorten the death tax.",
      maps: "Bakurani valley first, then Ozeti town, then Zestafona's open approaches.",
      guides: "Beginner path, Control Zone math, cash, roles, maps, settings, and FAQ.",
    },
    pages: {
      maps: "Three 16×16 km Kolchia battlegrounds. The match is the 2×2 km Control Zone inside them.",
      roles: "Six XP tracks, no locked classes. Buy the tools, then do the job that pays.",
      strats: "Where to stand when the tick fires, how to spend $10,000, and when to let the other two teams fight.",
    },
  },
  maps: [
    {
      slug: "bakurani",
      name: "Bakurani",
      difficulty: "Easy",
      tagline:
        "Kolchia's river valley: one town, sunflower fields, a lumberyard, and ridges that own the road.",
      overview:
        "Bakurani is the first WARDOGS map most players will learn — a forested river valley in Kolchia with a town on the floor, cultivated parcels around it, and steep wooded ridges on both sides. The valley road is the only sustained flat route across 16×16 km, which makes it both the fast way back from spawn and the obvious ambush. Control Zone variants rotate through the town belt, sunflower complex, and lumber district. Learn Hill Town, the numbered towers, and which ridge actually sees the live zone before you worry about Ozeti.",
      stats: [
        { label: "Size", value: "16×16 km (256 km²)" },
        { label: "Learn first", value: "Yes — densest cover, most named POIs" },
        { label: "Win condition", value: "Bodies in the live 2×2 km zone, not a ridge montage" },
      ],
      poi: [
        {
          name: "Hill Town / Apartments / Market Swamp",
          note: "Valley-floor urban belt. Close fights, destruction, and FOB bait. Do not hold the previous street after the Hot Zone drifts.",
        },
        {
          name: "Sunflower Church / Sunflowers Tower / fields",
          note: "Open, long sightlines. Ghillie and Recon value. Crossing on foot in daylight is how cheap kits die.",
        },
        {
          name: "Lumberyard North / South / Lumber Hills",
          note: "North-east timber district. Cover is stacks and sheds. Vehicles get stuck; infantry and lifts win rotations.",
        },
        {
          name: "Towers 1–7",
          note: "Capture a terminal for one digit of the Hot Zone pull code. Share the digit in chat immediately (example: XX5).",
        },
        {
          name: "Valley road",
          note: "Fastest ground route back from the safe zone. Also the most camped. A helicopter skip is often cheaper than a third road death.",
        },
      ],
      notes: [
        "There is no countdown respawn. You appear in the safe zone; the timer is travel time back to the Control Zone.",
        "Ridges see the road. If the zone is on the floor, someone on your team should own a treeline, not all 33 people in the same barn.",
        "Bakurani Farmland and Lumberyard are Control Zone variants of the same map — learn the terrain, not one lucky spawn.",
      ],
      image: header("WARDOGS Bakurani river valley Control Zone"),
      seoKeywords: [
        "WARDOGS Bakurani",
        "Bakurani map",
        "Kolchia WARDOGS",
        "Sunflower Church",
        "Lumberyard WARDOGS",
      ],
    },
    {
      slug: "ozeti",
      name: "Ozeti",
      difficulty: "Medium",
      tagline:
        "Hill town, church on the high ground, walled stadium — getting there is the fight.",
      overview:
        "Ozeti joined Bakurani in Closed Beta 02 (3 September 2026). A hill town strings low buildings along one road, a walled stadium sits at one end, and a church holds the high ground above it. Around the town: orchard, dry field parcels, and scattered pine. Cover is walls, treelines, and terracing — thick once you are inside, almost absent on the open approaches. The server browser prints Ozeti; game files label the world Europe. If Bakurani hides you in canopy, Ozeti punishes the last 400 meters into town.",
      stats: [
        { label: "Size", value: "16×16 km" },
        { label: "Feel", value: "Town CQB, exposed approaches" },
        { label: "Key", value: "Arrive with a squad, not a trickle of solos" },
      ],
      poi: [
        {
          name: "Hill town road",
          note: "The spine. Vehicles on the main street eat RPGs. Dismount a block out and walk the walls.",
        },
        {
          name: "Church high ground",
          note: "Sees the town. Recon and marksman kits belong here only if your team still has bodies in the zone below.",
        },
        {
          name: "Walled stadium",
          note: "A box. Easy to fortify, easy to trap. Third faction loves the delayed entry after two teams spend the first minute inside.",
        },
        {
          name: "Orchards and dry fields",
          note: "The approach. Smoke, vehicles, or night. A hero sprint across the parcel is a free Assist for someone on the terrace.",
        },
        {
          name: "Towers",
          note: "Same code job as Bakurani. A Pilot looping towers can move the Hot Zone without winning the town brawl.",
        },
      ],
      notes: [
        "If the Control Zone is the town, do not take a fair 300-meter rifle fight from the field. Close or wait.",
        "Stadium holds look unbeatable until the Hot Zone leaves the bowl. Follow the sub-zone, not the architecture.",
        "Logistics matter more than on Bakurani: fewer trees means a downed squad is visible from the next ridge.",
      ],
      image: header("WARDOGS Ozeti hill town and church"),
      seoKeywords: ["WARDOGS Ozeti", "Ozeti map", "Ozeti stadium", "WARDOGS Europe map"],
    },
    {
      slug: "zestafona",
      name: "Zestafona",
      difficulty: "Hard",
      tagline:
        "Arid high country and industrial cover — long approaches, warehouses, and nowhere to hide a bad rotate.",
      overview:
        "Zestafona is the most open of the three Early Access maps: irrigated field blocks along a creek, scattered settlement, then ridges of bare rock and low scrub. Cover is agricultural and man-made — warehouses, rail, water treatment, offices — not Bakurani's continuous canopy. Approaches are long. Drivers and Pilots decide whether you arrive for the tick. Named industrial blocks (warehouse rows, factory, shipping, train sheds) reward CQB once you are inside; the farmland/forest outer ring is a sniper and vehicle problem. Shown 4 September 2026 and shipping with or just after Early Access.",
      stats: [
        { label: "Size", value: "16×16 km" },
        { label: "Cover", value: "Man-made + fields — not forest" },
        { label: "Fail state", value: "Walking the last kilometre in the open, twice" },
      ],
      poi: [
        {
          name: "Warehouse maze / brick warehouses",
          note: "CQB core. Destruction opens lanes. Clear corners as a stack; a solo hero peek donates the kit.",
        },
        {
          name: "Water Treatment / Houses",
          note: "Named play areas that often host the zone. Rotate with the Hot Zone, not with the building you already learned.",
        },
        {
          name: "Rail / train sheds / bus depot",
          note: "Chokes. Good FOB ground if you can supply it. Bad if two factions already live there.",
        },
        {
          name: "Offices / water towers",
          note: "Vertical. One marksman here, the rest in the circle. Six people on the tower lose the tick.",
        },
        {
          name: "Farmland / forest outer ring",
          note: "Long-range. AP ammo and vehicles. This is how you die on the way in, not how you score.",
        },
      ],
      notes: [
        "Budget a vehicle on this map even if you walk Bakurani. The death tax is distance.",
        "Industrial interiors make the third faction lethal: they enter the warehouse you just cleared.",
        "If your squad cannot hold open ground, play logistics and Medic on the approach instead of feeding the first ridge.",
      ],
      image: header("WARDOGS Zestafona industrial Control Zone"),
      seoKeywords: [
        "WARDOGS Zestafona",
        "Zestafona map",
        "WARDOGS warehouses",
        "Zestafona Water Treatment",
      ],
    },
    {
      slug: "kolchia-logistics",
      name: "Kolchia Logistics Ring",
      difficulty: "Medium",
      tagline:
        "The other 252 km² — spawn, safe zone, and why Pilot is a real job.",
      overview:
        "Every WARDOGS map is 256 km². Only a randomized 4 km² Control Zone is scored. The rest is a logistics problem: you respawn in the safe zone with no countdown, and the clock is however long it takes to reach the fight. BULKHEAD framed that travel time as the death penalty on purpose. This page is that ring — faction spawns (Lonestar / Valkyra / Manticore), vehicle vendors, lifts, and why buying a helicopter for four teammates can print more cash than your rifle ever will. Learn it on Bakurani's valley road first, then stop walking Zestafona.",
      stats: [
        { label: "In play", value: "4 km² zone inside 256 km²" },
        { label: "Respawn", value: "Safe zone immediately — travel is the timer" },
        { label: "Job", value: "Driver / Pilot XP for every body you deliver" },
      ],
      poi: [
        {
          name: "Safe zone / deploy",
          note: "Where death sends you. Buy the next kit here. Do not leave on foot if the zone is a mountain away.",
        },
        {
          name: "Faction spawns",
          note: "Lonestar (blue), Valkyra (red), Manticore (green) start split. Call your colour. Friendly fire is a wallet tax.",
        },
        {
          name: "Vehicle vendor",
          note: "Transport is a purchase, not a spawn power. A lift that arrives for the tick is an objective play.",
        },
        {
          name: "River crossings / bridges",
          note: "On Bakurani they concentrate traffic. Ambush food. Alternate or fly.",
        },
        {
          name: "Landing zones near the Hot Zone",
          note: "Do not land in the blob. Offset, dismount, walk the last 150 m. Helicopters on the Hot Zone are tracers.",
        },
      ],
      notes: [
        "Cash for transporting friendlies into the zone is a listed teamplay reward on the Steam page. Use it.",
        "A negative wallet still gets free starter gear. Catch a lift; do not pride-walk a 4 km return.",
        "Patch 0.11 (14 September 2026) split Community and Official server browsers — join the server your squad actually named.",
      ],
      image: hero("WARDOGS safe zone to Control Zone logistics"),
      seoKeywords: [
        "WARDOGS spawn",
        "WARDOGS vehicles",
        "WARDOGS helicopter",
        "Control Zone travel time",
      ],
    },
  ],
  roles: [
    {
      slug: "medic",
      name: "Medic",
      role: "Sustain and cash",
      difficulty: "Easy",
      beginnerRank: 1,
      tiers: [
        { label: "Pays", value: "Revives, heals, tips" },
        { label: "Risk", value: "Low kit cost" },
        { label: "XP track", value: "Medic" },
      ],
      kit: [
        "Defibrillator / revive tool",
        "Bandages and extra medical",
        "Light armor so you still sprint",
        "A cheap primary for the peek you cannot avoid",
      ],
      excerpt:
        "The beginner money printer. Revives keep kits in the zone and pay you even when your aim is still forming.",
      strengths: [
        "Consistent cash without winning aim duels",
        "A revive is cheaper for the team than a full respawn trip",
        "Hot Zone doubles the same actions",
      ],
      weaknesses: [
        "You still die to the third faction if you stand up in the open",
        "Heavy armor plus medical weight spikes sway",
        "A Medic who never enters the circle does not score",
      ],
      starterTips: [
        "Wait for the downed teammate's call. Sprinting into the same angle that dropped them is a double wipe.",
        "Heal after the revive — there is no passive regen. Then move. Re-peeking immediately is the expensive habit.",
        "You can carry a rifle. The track is what you do, not a class lock.",
      ],
      image: hero("WARDOGS Medic revive in the Control Zone"),
      seoKeywords: ["WARDOGS Medic", "WARDOGS revive", "best beginner role WARDOGS"],
    },
    {
      slug: "assault",
      name: "Assault",
      role: "Bodies on the point",
      difficulty: "Easy",
      beginnerRank: 2,
      tiers: [
        { label: "Pays", value: "Kills, assists, zone time" },
        { label: "Risk", value: "Medium — you are the blob" },
        { label: "XP track", value: "Assault" },
      ],
      kit: [
        "Controllable rifle (FMJ first)",
        "Two or three magazines plus matching loose ammo",
        "Bandages",
        "Helmet / light armor if the budget allows",
      ],
      excerpt:
        "Standard FPS muscle memory, pointed at the circle. You exist to be a body that counts when the tick fires.",
      strengths: [
        "Clearest first-week job",
        "Assists and zone presence still pay if you are not top frag",
        "FMJ covers most armor you will meet early",
      ],
      weaknesses: [
        "Max kits bankroll the enemy when you die",
        "Winning a fight outside the zone scores nothing",
        "Weight thresholds add sway — overpacking magazines hurts the gunfight",
      ],
      starterTips: [
        "Refill magazines from cover with C. Loose ammo does not auto-fill.",
        "After a won building, check the third approach before you loot.",
        "If the Hot Zone moves, you move. The barn you cleared is now scenery.",
      ],
      image: header("WARDOGS Assault loadout in the Hot Zone"),
      seoKeywords: ["WARDOGS Assault", "WARDOGS beginner loadout", "WARDOGS FMJ"],
    },
    {
      slug: "recon",
      name: "Recon",
      role: "Information tax",
      difficulty: "Medium",
      beginnerRank: 3,
      tiers: [
        { label: "Pays", value: "Spotting, tower digits, overwatch" },
        { label: "Risk", value: "Low if you stay alive" },
        { label: "XP track", value: "Recon" },
      ],
      kit: [
        "Spotting / recon equipment",
        "Marksman or suppressed rifle as budget allows",
        "Ghillie only if the terrain is fields, not warehouses",
        "Radio for digits and third-faction calls",
      ],
      excerpt:
        "Mark enemies, grab tower digits, and stop your team from walking into a blob they cannot see.",
      strengths: [
        "Spotting pays without a kill",
        "Tower codes can pull the Hot Zone to a held position",
        "Sunflower and Zestafona fields actually use a ghillie",
      ],
      weaknesses: [
        "A sniper who never enters the zone loses the tick",
        "Ghillie in a warehouse is a costume",
        "Digits you do not type in chat do not exist",
      ],
      starterTips: [
        "Share tower digits as XX5-style chat immediately.",
        "Spot the third faction's approach, not just the team you are already shooting.",
        "One Recon on a ridge, the rest in the circle. Five ghillies is a lost match.",
      ],
      image: header("WARDOGS Recon overwatch and tower capture"),
      seoKeywords: ["WARDOGS Recon", "WARDOGS tower code", "WARDOGS ghillie"],
    },
    {
      slug: "support",
      name: "Support",
      role: "Ammo, FOBs, fortify",
      difficulty: "Medium",
      beginnerRank: 4,
      tiers: [
        { label: "Pays", value: "Resupply, build, repair" },
        { label: "Risk", value: "You are a logistics ping" },
        { label: "XP track", value: "Support" },
      ],
      kit: [
        "Ammo crates / resupply tools",
        "FOB build pieces and a plan for fuel",
        "Repair tools for friendly vehicles",
        "A primary you can actually shoot when the FOB is rushed",
      ],
      excerpt:
        "The blob runs dry. You refill it, fortify a choke, and make the Drill Rig more than a loot pinata.",
      strengths: [
        "Resupply and FOB work are listed cash actions",
        "A supplied choke beats another hero peek",
        "Repair keeps the taxi fleet in the air",
      ],
      weaknesses: [
        "An empty FOB is an invitation. Drill Rigs need fuel and a defense, not a screenshot.",
        "Building off the live zone is decorating",
        "You still need to count as a body when the tick is close",
      ],
      starterTips: [
        "Build where the Hot Zone is going, or on a tower you already hold.",
        "Loose ammo in crates matters more than a fourth decorative sandbag.",
        "If two factions crash the FOB, collapse. Concrete is cheaper than three max kits.",
      ],
      image: header("WARDOGS Support FOB and resupply"),
      seoKeywords: ["WARDOGS Support", "WARDOGS FOB", "WARDOGS Drill Rig"],
    },
    {
      slug: "driver",
      name: "Driver",
      role: "Ground taxi",
      difficulty: "Medium",
      beginnerRank: 5,
      tiers: [
        { label: "Pays", value: "Transport into the zone" },
        { label: "Risk", value: "Roads are camped" },
        { label: "XP track", value: "Driver" },
      ],
      kit: [
        "A vehicle you can replace",
        "Repair if Support is not riding",
        "A secondary for when the engine dies",
        "Seats filled before you leave spawn",
      ],
      excerpt:
        "Death has no countdown. You are the respawn timer for everyone in the truck.",
      strengths: [
        "Steam lists transporting friendlies as a cash action",
        "A full truck arriving for a tick can flip control",
        "Driver XP from the job, not from a class screen",
      ],
      weaknesses: [
        "Valley roads and bridges are killboxes",
        "Empty taxis are a vanity purchase",
        "Parking on the Hot Zone paints a target",
      ],
      starterTips: [
        "Load spawn, drive offset, dump 150 m short of the blob.",
        "If you die on the same bridge twice, fly or change the crossing.",
        "A cheap truck that completes the trip beats a tank that never leaves the vendor.",
      ],
      image: hero("WARDOGS Driver transporting squad to the Control Zone"),
      seoKeywords: ["WARDOGS Driver", "WARDOGS vehicles", "WARDOGS transport cash"],
    },
    {
      slug: "pilot",
      name: "Pilot",
      role: "Air taxi and tower loop",
      difficulty: "Hard",
      beginnerRank: 6,
      tiers: [
        { label: "Pays", value: "Lifts, tower hops, supply" },
        { label: "Risk", value: "AA and the landing" },
        { label: "XP track", value: "Pilot" },
      ],
      kit: [
        "Helicopter you can afford to lose once",
        "A plan for the landing offset",
        "Fuel / repair awareness",
        "A carbine for when you are on the ground",
      ],
      excerpt:
        "The map is 256 km² because BULKHEAD wanted travel to hurt. Pilots delete that hurt — or become a firework.",
      strengths: [
        "Fastest return from the safe zone",
        "Tower-digit loops can steer the Hot Zone",
        "Supply runs keep a FOB alive",
      ],
      weaknesses: [
        "Landing in the Hot Zone is a highlight for the other two teams",
        "A helicopter you cannot replace wipes your wallet",
        "Empty flights are a Pilot cosplay",
      ],
      starterTips: [
        "Fill seats. A solo joyride is not the job.",
        "Land behind a ridge, not on the church roof the Recon already owns.",
        "Learn this after Medic/Assault. The gunfight on the ground is still the tick.",
      ],
      image: hero("WARDOGS Pilot helicopter lift into the Hot Zone"),
      seoKeywords: ["WARDOGS Pilot", "WARDOGS helicopter", "WARDOGS air transport"],
    },
  ],
  strats: [
    {
      slug: "hot-zone-bodies",
      name: "Hot Zone Bodies",
      mapName: "Any map",
      difficulty: "Easy",
      risk: "Medium",
      bestFor: "Squads that win gunfights on the edge of the circle and still lose the tick",
      duration: "Every 30-second scoring cycle",
      excerpt:
        "Players in the Hot Zone count as two and earn double cash. Move bodies into the sub-zone before the bar fills.",
      steps: [
        "Find the Control Zone, then find the smaller Hot Zone inside it. The HUD is the source of truth, not the building you like.",
        "Count: 17 in the big circle with 4 in the Hot Zone beats 20 on the rim (those 4 count as 8 → 21 effective).",
        "When the Hot Zone drifts, leave the barn. A perfect hold of empty ground is a lost point.",
        "Medic and Assault walk in together. A lone Recon on a roof does not flip the math.",
        "After the tick, reassess. The next 30 seconds is a new fight, often with a third faction arriving.",
      ],
      tips: [
        "Double cash in the Hot Zone compounds your wallet for the rest of the session — it is not only a round trick.",
        "Tanks and helicopters cluster here. Bring AP or do not peek the ridgeline like it is Deathmatch.",
        "If you cannot survive the blob, play logistics: dump teammates 150 m out and let them walk the last bit.",
      ],
      image: header("WARDOGS Hot Zone double-count scoring"),
      seoKeywords: ["WARDOGS Hot Zone", "Hot Zone guide", "WARDOGS scoring"],
    },
    {
      slug: "cheap-first-kit",
      name: "Cheap First Kit",
      mapName: "Any map",
      difficulty: "Easy",
      risk: "Low",
      bestFor: "New accounts about to spend the $10,000 starter wallet on a fantasy loadout",
      duration: "First two lives",
      excerpt:
        "Buy a kit you can lose twice. Cash persists. Gear does not. The session is the economy, not the first spawn screen.",
      steps: [
        "Start with one controllable primary, two or three magazines, matching loose ammo, bandages, and light armor if it fits.",
        "Use FMJ until you know what armor you keep losing to. AP is a later tax, HP is for the unarmored peek.",
        "Do not stack every magazine, grenade, and plate. Weight thresholds add movement penalties and aim sway.",
        "If you go down, wait for a revive. Respawning buys a new kit and starts the travel timer.",
        "If the wallet goes negative, take free starter gear, loot a body, and print cash on revives/spots/zone time before you shop again.",
      ],
      tips: [
        "Unlocks only put items in the store. You still pay every life.",
        "A $2k kit that reaches the tick twice beats a $9k kit that dies on the valley road.",
        "Refill with C from cover. Loose ammo in the pack is not in the gun.",
      ],
      image: header("WARDOGS cheap beginner loadout"),
      seoKeywords: ["WARDOGS loadout", "WARDOGS $10000", "WARDOGS beginner kit"],
    },
    {
      slug: "third-faction-check",
      name: "Third Faction Check",
      mapSlug: "bakurani",
      mapName: "Bakurani",
      difficulty: "Medium",
      risk: "High",
      bestFor: "Two-team FPS habits after a building clear",
      duration: "The five seconds after you win a fight",
      excerpt:
        "Clearing Lonestar does not make the apartment safe. Manticore just watched two wallets empty. Check ammo, health, and the third approach.",
      steps: [
        "When the last enemy in the room drops, do not loot in the doorway.",
        "Reload from cover. Confirm matching ammo type.",
        "Bandage — there is no passive regen.",
        "Look at the approach the third colour would use. Call it. Lonestar / Valkyra / Manticore are not 'us and them'.",
        "Then move with the Hot Zone. Staying to finish loot is how the third team inherits a pre-cleared building.",
      ],
      tips: [
        "This is the hardest mental load coming from CS2 or Battlefield two-team modes.",
        "Proximity voice goes both ways. If you are loud after a win, they heard the celebration.",
        "Works on Ozeti stadium and Zestafona warehouses the same way. Bakurani just teaches it first.",
      ],
      image: header("WARDOGS three-team third-party after a clear"),
      seoKeywords: ["WARDOGS three teams", "Lonestar Valkyra Manticore", "WARDOGS third party"],
    },
    {
      slug: "tower-code-pull",
      name: "Tower Code Pull",
      mapSlug: "bakurani",
      mapName: "Bakurani",
      difficulty: "Medium",
      risk: "Medium",
      bestFor: "Squads that want the Hot Zone to come to a held tower instead of chasing it",
      duration: "A tower loop between ticks",
      excerpt:
        "3–5 towers. Each captured terminal yields a digit. Complete the sequence and pull the Hot Zone toward a tower you already own.",
      steps: [
        "Assign one Pilot or light vehicle to the tower loop. The blob does not need 33 people on terminals.",
        "Capture, read the digit, type position in chat (XX5). Incomplete codes in one person's head waste the loop.",
        "Do not contest a tower that two factions already live on unless the digit is the last one.",
        "When the code completes, pull toward a tower with cover and a resupply plan — not an isolated sniper stick.",
        "Then put bodies in the new Hot Zone. The pull is useless if nobody walks in.",
      ],
      tips: [
        "This is how a Recon/Pilot pair steers the match without topping the kill feed.",
        "A Drill Rig at a supplied FOB is the other pull tool — it needs fuel and a defense.",
        "Share digits even with randoms. Silence is how official servers stay chaotic.",
      ],
      image: header("WARDOGS tower terminal Hot Zone code"),
      seoKeywords: ["WARDOGS towers", "Hot Zone code", "WARDOGS Drill Rig"],
    },
    {
      slug: "fob-drill-rig",
      name: "FOB and Drill Rig",
      mapSlug: "ozeti",
      mapName: "Ozeti",
      difficulty: "Hard",
      risk: "High",
      bestFor: "Organized squads with Support XP and a reason to make the other two teams attack a prepared position",
      duration: "Once the FOB is supplied",
      excerpt:
        "Fortify a choke, keep it fed, then spend fuel on a Drill Rig that pulls the Hot Zone into your guns. An empty FOB is loot.",
      steps: [
        "Pick ground the Hot Zone can actually reach — a town terrace, a warehouse block, not a decorative ridge 2 km out.",
        "Build, then assign ammo, medical, and a repair loop. Support XP comes from that loop.",
        "Only start the Drill Rig when you can fuel it and hold the invitation you just sent.",
        "Expect a three-team crash. The rig is a ping. Keep a collapse route.",
        "If the zone leaves and the rig is dry, abandon. Concrete is cheaper than the kits you will donate.",
      ],
      tips: [
        "Ozeti stadium looks like a free FOB and is a trap. Town walls with one approach are cleaner.",
        "Artillery tanks are for deleting a FOB you cannot afford to storm on foot.",
        "Solo FOB building is a hobby. This setup needs at least a three-stack.",
      ],
      image: header("WARDOGS Forward Operating Base Drill Rig"),
      seoKeywords: ["WARDOGS FOB guide", "Drill Rig WARDOGS", "WARDOGS fortify"],
    },
    {
      slug: "spawn-taxi",
      name: "Spawn Taxi",
      mapSlug: "kolchia-logistics",
      mapName: "Kolchia Logistics Ring",
      difficulty: "Medium",
      risk: "Medium",
      bestFor: "Players who keep walking 4 km back and missing every tick",
      duration: "Each death",
      excerpt:
        "Fill a cheap vehicle at the safe zone, dump 150 m short of the blob, repeat. You are the respawn timer.",
      steps: [
        "Die, buy a replaceable vehicle, ping seats in spawn.",
        "Take a route that is not the last bridge you died on.",
        "Land or dismount offset. Helicopters on the Hot Zone are AA food.",
        "If seats were full, you already got paid in transport cash and Pilot/Driver XP.",
        "Do not ego-peek with the remaining passengers. Your next job is the next wipe's taxi.",
      ],
      tips: [
        "This is how a bad-aim session still prints wallet and wins ticks.",
        "Zestafona needs this more than Bakurani. Open ground is the tax.",
        "If nobody enters the vehicle, switch to Medic in the blob. Empty taxis are a vanity death.",
      ],
      image: hero("WARDOGS spawn taxi into the Control Zone"),
      seoKeywords: ["WARDOGS transport", "WARDOGS respawn", "how to get back to Control Zone"],
    },
  ],
  guides: [
    {
      slug: "beginner-guide",
      title: "WARDOGS Beginner Guide",
      category: "Getting Started",
      readTime: "10 min",
      excerpt:
        "Three teams, a 2×2 km Control Zone, a $10,000 wallet, and why your first kit should be cheap.",
      seoKeywords: [
        "WARDOGS beginner guide",
        "how to play WARDOGS",
        "WARDOGS first match",
        "WARDOGS Early Access",
      ],
      heroImage: hero("WARDOGS beginner guide first match"),
      content: [
        {
          heading: "What you are actually playing",
          body: "WARDOGS (Steam app 1867240) is BULKHEAD and Team17's Early Access all-out-warfare FPS. Up to 100 players split across Lonestar (blue), Valkyra (red), and Manticore (green) fight a randomized 2×2 km Control Zone inside a 16×16 km map. Every 30 seconds the faction with the most people in that zone scores; first to 100 points wins. The store page is explicit: this is not a battle royale and not an extraction shooter. You win by standing in the right dirt when the tick fires — then by still having cash for the next life.",
        },
        {
          heading: "Your first session",
          body: "Every account starts with $10,000 that persists between matches. Buy a cheap rifle kit: a controllable primary, two or three magazines, matching loose ammo, bandages, light armor if it fits. Open the map, find the Control Zone, and spend money on a ride if the walk is long. There is no respawn countdown — death dumps you in the safe zone and the timer is travel. Play Medic or Assault. Revive, spot, and stand in the circle. Kills are optional income.",
        },
        {
          heading: "The Hot Zone",
          body: "Inside the Control Zone is a smaller moving Hot Zone. Each player there counts as two toward control and earns double cash. A slightly smaller team that sits in the Hot Zone beats a larger team hugging the rim. When it drifts, leave the building you 'cleared'. The barn is not the objective.",
        },
        {
          heading: "Three colours",
          body: "After you wipe one faction, the third has been waiting. Check ammo, bandage (no passive regen), and the other approach before you loot. Two-team FPS habits are how you donate kits.",
        },
        {
          heading: "What good looks like after a week",
          body: "You can find the live zone without opening the map twice. You notice the Hot Zone move. You wait for a revive instead of insta-respawning. You refill magazines from cover. You remember Manticore exists. Then add Driver lifts and tower digits — not a $9k starter kit.",
        },
      ],
    },
    {
      slug: "control-zone-and-hot-zone",
      title: "WARDOGS Control Zone and Hot Zone",
      category: "Objectives",
      readTime: "9 min",
      excerpt:
        "30-second ticks, double-count Hot Zone math, tower codes, and why fights outside the circle are a hobby.",
      seoKeywords: [
        "WARDOGS Control Zone",
        "WARDOGS Hot Zone",
        "how scoring works WARDOGS",
        "first to 100",
      ],
      heroImage: header("WARDOGS Control Zone scoring explained"),
      content: [
        {
          heading: "The only mode",
          body: "Official servers run one loop. A 2×2 km Control Zone is placed somewhere on the 256 km² map. The team with the most players inside it earns a point on a 30-second cycle. First to 100 wins. A firefight can last longer than a tick — which is why a small group that stays in the dirt outscores a larger group winning duels just outside it.",
        },
        {
          heading: "Hot Zone math",
          body: "The Hot Zone is a shifting sub-area. While you stand in it, your body counts twice toward the faction total and your teamplay cash doubles. Example: they have 20 in the Control Zone, you have 17. Put 4 of yours in the Hot Zone (those 4 count as 8) and you sit at 21 effective. You take the tick. BULKHEAD called this match-swinging for a reason.",
        },
        {
          heading: "Towers and Drill Rigs",
          body: "Three to five towers on the battlefield. Capture a terminal, get a digit, complete the sequence, pull the Hot Zone toward a tower you hold. Type digits in chat as you get them. A supplied FOB can also run a Drill Rig to pull the zone onto a prepared position — that is an invitation to be attacked, so fuel and defense are not optional.",
        },
        {
          heading: "What does not score",
          body: "A 20-kill streak on the valley road with nobody in the circle is content. Artillery that never walks in is content. A ghillie on a ridge that never counts as a body is content. Convert the fight into occupancy before the bar fills.",
        },
        {
          heading: "No rank ladder",
          body: "Launch Early Access is not a battle-royale ranked grind. You win the match in front of you. Community servers (improved in Patch 0.11, 14 September 2026) are for organized rules; Official is the chaotic default. Join the browser your squad actually named.",
        },
      ],
    },
    {
      slug: "cash-and-loadouts",
      title: "WARDOGS Cash and Loadouts",
      category: "Economy",
      readTime: "9 min",
      excerpt:
        "Persistent wallet, deleted kits, FMJ vs AP, weight sway, and how to print money without top frag.",
      seoKeywords: [
        "WARDOGS cash",
        "WARDOGS economy",
        "WARDOGS loadout",
        "WARDOGS ammunition",
      ],
      heroImage: header("WARDOGS cash economy and loadouts"),
      content: [
        {
          heading: "Wallet vs kit",
          body: "Cash carries between matches. Purchased guns, armor, and vehicles do not survive death. That split is the whole economy. Spend as if you will die. A kit you cannot replace is a self-imposed eco round.",
        },
        {
          heading: "How cash actually prints",
          body: "The Steam page lists teamplay payouts: kills and assists, revives (teammates can tip), healing, spotting, transporting friendlies into the zone, holding the Hot Zone (double), building FOBs, delivering supplies, repairing vehicles, capturing towers. Medic and Recon are the beginner printers. Hot Zone occupancy is the multiplier.",
        },
        {
          heading: "Ammo types",
          body: "FMJ is the default. HP hits harder on light/no armor. AP is for plates and vehicles once you know what you keep bouncing off. Loose rounds pack tighter than filled magazines — but they do not auto-load. Press C from cover and confirm the type matches the gun.",
        },
        {
          heading: "Weight",
          body: "Every item adds weight. Cross a threshold and you lose movement and pick up aim sway. The armor that was supposed to save you can make the gunfight worse. Build for this life: blob Assault, taxi Driver, or tower Recon — not all three in one backpack.",
        },
        {
          heading: "Going broke",
          body: "Negative balance still gets free starter equipment. Loot a body, revive, spot, sit in the zone, catch a lift. Do not pride-buy a rifle you cannot afford to lose again. Unlocking a gun only lists it in the shop.",
        },
      ],
    },
    {
      slug: "roles-and-progression",
      title: "WARDOGS Roles and Progression Tracks",
      category: "Team Play",
      readTime: "8 min",
      excerpt:
        "Assault, Medic, Recon, Support, Driver, Pilot — XP from what you do, not from a class lock.",
      seoKeywords: [
        "WARDOGS classes",
        "WARDOGS progression",
        "WARDOGS Medic",
        "WARDOGS Pilot",
      ],
      heroImage: header("WARDOGS progression tracks"),
      content: [
        {
          heading: "No locked classes",
          body: "Six tracks unlock better gear over time: Assault, Medic, Recon, Support, Driver, and Pilot. The track that levels is the work you performed. A rifleman can carry a defibrillator and a spotter tool in the same life. There is no class select screen that forbids the mix.",
        },
        {
          heading: "Learn Medic, then Assault",
          body: "Medic pays when your aim is still forming and keeps kits in the circle. Assault is the familiar FPS job pointed at occupancy. Recon is next if you can stay alive on a ridge without abandoning the tick.",
        },
        {
          heading: "Driver and Pilot are the death tax",
          body: "BULKHEAD's 11 August 2026 framing: there is no respawn countdown. Travel is the punishment. Filling a truck or helicopter at the safe zone is how your faction makes it back for the next tick. Empty vehicles are a cosplay. Offset landings, not Hot Zone rooftops.",
        },
        {
          heading: "Support is a squad job",
          body: "FOBs, ammo, repairs, Drill Rigs. Solo sandbags off the live zone are decorating. Build where the Hot Zone can reach, keep it fed, and collapse when two colours crash the door.",
        },
        {
          heading: "Mix on purpose",
          body: "A cheap rifle plus spotting gear plus a seat in a taxi is a real first-week loadout. A maxed Pilot kit with nobody in the helicopter is not.",
        },
      ],
    },
    {
      slug: "maps-and-factions",
      title: "WARDOGS Maps and Factions",
      category: "Maps",
      readTime: "8 min",
      excerpt:
        "Bakurani valley, Ozeti town, Zestafona's open industry — plus Lonestar, Valkyra, and Manticore.",
      seoKeywords: [
        "WARDOGS maps",
        "Bakurani Ozeti Zestafona",
        "Lonestar Valkyra Manticore",
        "Kolchia",
      ],
      heroImage: hero("WARDOGS Kolchia maps and three factions"),
      content: [
        {
          heading: "Kolchia",
          body: "The setting is Kolchia: derelict industrial mountains in Eastern Europe, framed around a fight for PV-1. Each playable battlefield is 16×16 km. Only 4 km² is the Control Zone. Learn terrain that does not reroll — ridges, roads, towns — because the zone does reroll every match.",
        },
        {
          heading: "Bakurani",
          body: "River valley, town belt, sunflower fields, lumber district, numbered towers. Dense canopy. The valley road is fast and camped. Learn this first.",
        },
        {
          heading: "Ozeti",
          body: "Hill town, church high ground, walled stadium, orchards. Cover inside, exposed approaches. Closed Beta 02, 3 September 2026. Getting there is the skill check.",
        },
        {
          heading: "Zestafona",
          body: "Most open map: arid ridges, irrigated fields, warehouses and rail. Man-made cover. Budget vehicles. Arrived at or just after Early Access launch (shown 4 September 2026).",
        },
        {
          heading: "Three factions",
          body: "Lonestar blue, Valkyra red, Manticore green. You pick a side each match. Most fights are potential three-ways. Let two colours spend ammo, then take the building. Call colour, not 'enemy'.",
        },
      ],
    },
    {
      slug: "settings-and-performance",
      title: "WARDOGS Settings and Performance",
      category: "PC Setup",
      readTime: "6 min",
      excerpt:
        "Steam minimums, 100-player hitching, proximity voice, and why a freeze on a ridge costs a kit.",
      seoKeywords: [
        "WARDOGS settings",
        "WARDOGS FPS",
        "WARDOGS requirements",
        "WARDOGS lag",
      ],
      heroImage: header("WARDOGS PC settings and performance"),
      content: [
        {
          heading: "Official baseline",
          body: "Steam lists Windows 10, 16 GB RAM, Intel Core i5-8600 / Ryzen 5 3500, GTX 1660 / RX 590, 50 GB, and a broadband connection for 1080p low 60 FPS upscaled. Recommended is Windows 11, i7-12700K / Ryzen 7 5700X, RTX 3070 / RX 6700 XT for 1440p medium. Install on an SSD. This is a 100-player destructible map, not a 5v5 server.",
        },
        {
          heading: "Cap FPS, cut hitching",
          body: "Hold a frame time you can keep when a town collapses. Drop shadows, volumetric fog, and dense foliage on Bakurani if the valley hitchs. A freeze mid-peek deletes the kit you just bought.",
        },
        {
          heading: "Audio is information",
          body: "Proximity voice is part of the design — tactics and trolling. Wired ethernet, disable extra overlays, and do not rely on Discord alone for the third faction walking up the stairs.",
        },
        {
          heading: "Servers",
          body: "Patch 0.11 (14 September 2026) split Community and Official browsers, added community text search, and made community server IDs persist across map changes. If your squad cannot find each other, you are on the wrong tab.",
        },
        {
          heading: "Early Access",
          body: "Launch week had a stability hotfix. Expect balance and browser changes. Re-test sensitivity after patches. Do not max a preset you cannot hold in a 100-player Hot Zone.",
        },
      ],
    },
    {
      slug: "faq",
      title: "WARDOGS FAQ",
      category: "FAQ",
      readTime: "5 min",
      excerpt:
        "Price, Early Access date, whether it is a battle royale, starting cash, and how classes work.",
      seoKeywords: [
        "WARDOGS FAQ",
        "is WARDOGS a battle royale",
        "WARDOGS price",
        "WARDOGS release date",
      ],
      content: [
        {
          heading: "When did WARDOGS release?",
          body: "Early Access launched on Steam 10 September 2026 (app 1867240). Developer BULKHEAD, publisher Team17. It is still in Early Access — expect balance, maps, and browser work.",
        },
        {
          heading: "Is WARDOGS a battle royale or extraction shooter?",
          body: "No. The Steam store page states both, word for word. One King-of-the-Hill mode: 100 players, three teams, one Control Zone, first to 100 points. No shrinking circle, no extract bag.",
        },
        {
          heading: "How much does it cost?",
          body: "$39.99 at Early Access. Not free to play. Starting in-match wallet is $10,000 and persists between matches; that is not the store price.",
        },
        {
          heading: "Are there classes?",
          body: "No locked classes. Six XP tracks — Assault, Medic, Recon, Support, Driver, Pilot — level from actions. Mix tools in one loadout.",
        },
        {
          heading: "What should I play first?",
          body: "Bakurani, cheap Assault or Medic kit, stand in the Hot Zone, wait for revives, remember the third faction. Ranked ladders are not the onboarding — occupancy is.",
        },
      ],
    },
  ],
};
