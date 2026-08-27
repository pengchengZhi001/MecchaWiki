import type { FullWiki, WikiImage } from "../types";
import { steamHeader, steamHero } from "@/lib/steam-wiki";

const APP = 252490;

function header(alt: string): WikiImage {
  return { src: steamHeader(APP), alt };
}

function hero(alt: string): WikiImage {
  return { src: steamHero(APP), alt };
}

export const rustWiki: FullWiki = {
  slug: "rust",
  hubs: { maps: "Monuments", roles: "Jobs", strats: "Setups" },
  copy: {
    home: {
      strats: "2x1, airlocks, Harbor, and oil — not a bow montage on the beach.",
      roles: "Farm and build first. Raiding last.",
      maps: "Harbor and Airfield before you run Launch Site with a rock.",
      guides: "Beginner path, first base, monuments, upkeep, PvP, and electricity.",
    },
    pages: {
      maps: "The server is the map. Learn one monument's cards before you live on Launch Site.",
      roles: "Farm, build, wire, run, then raid. Codes are not a friendship.",
      strats: "Starters that survive two nights, loot you spread, and raids you can actually finish.",
    },
  },
  maps: [
    {
      slug: "woods",
      name: "Woods and Roads",
      difficulty: "Easy",
      tagline: "The first hours: nodes, hemp, barrels, and a bag that is not next to your only door.",
      overview:
        "Every wipe starts in the trees. You naked-spawn, grab wood and stone, and you do not bow-fight every other naked you see — the third party is holding a gun. Roads print barrels and scrap. Build near nodes and hemp, not on the snow cliff because it looked cinematic. Place two sleeping bags apart from the base. A bag next to the only airlock is not a respawn plan. Low-pop or beginner-tagged servers exist so this loop is a game, not a dissertation in door camping.",
      stats: [
        { label: "Farm first", value: "Wood, stone, cloth, then metal. Sulfur when you can use it" },
        { label: "Fight", value: "Avoid. A bow war on the road is a loot pinata" },
        { label: "Server", value: "Low-pop / beginner for wipe one" },
      ],
      poi: [
        { name: "Nodes", note: "Stone and metal near home. Do not roam twenty grids for one sulfur rock on night one." },
        { name: "Hemp / cloth", note: "Bags, bows, armor. Pick it on the walk, not as a sightseeing tour." },
        { name: "Barrels / road", note: "Scrap and components. Headphones — footsteps on gravel are the real PvP." },
        { name: "Beach", note: "Easy farm, easy doorcampers. Move inland once you have a bag." },
        { name: "Your grid", note: "Know who lives next door. Cute neighbors still raid." },
      ],
      notes: [
        "Time-to-stone matters more than roof shooting floors. A 2x1 that exists beats a mansion on twig.",
        "Allies are temporary. Do not hand codes to a random who helped you bow a wolf.",
        "Mute, pick better servers, and do not voice-chat your base location.",
      ],
      image: header("Rust woods farming nodes and hemp"),
      seoKeywords: ["Rust beginner", "Rust first wipe", "Rust farming"],
    },
    {
      slug: "harbor",
      name: "Harbor",
      difficulty: "Easy",
      tagline: "The first real monument: green card, crates, and scientists you can actually learn.",
      overview:
        "Harbor is the classroom monument. Green card puzzle, loot that is not Launch Site, and a layout you can run with a nailgun. Learn it before Airfield. Do not take a minicopter as your first vehicle if you cannot land it on the crane. Clear scientists, swipe, loot, leave. Bow-fighting zergs in the shipping containers is how you donate a full kit. Call the warehouses, the puzzle room, and the dock — then go home and feed the TC.",
      stats: [
        { label: "Card", value: "Green — buy or find before you live here" },
        { label: "Learn first", value: "Yes — before Airfield and Launch" },
        { label: "Risk", value: "Medium traffic, still third parties" },
      ],
      poi: [
        { name: "Puzzle / swipes", note: "Green card. If you cannot finish the puzzle, you are farming barrels, not Harbor." },
        { name: "Warehouses", note: "Crates and peek angles. Clear a corner; do not loot in the open doorway." },
        { name: "Docks / cranes", note: "Vertical. People with guns hold high. You with a bow should leave." },
        { name: "Road in", note: "The third party arrives on the sound of your fight. Heal, then move." },
        { name: "Recycler", note: "If the monument has one you can use, do it when the grid is quiet — or take comps home." },
      ],
      notes: [
        "Learn one monument's puzzles (Harbor or Airfield) before you run Launch Site with a rock.",
        "A safe monument run beats a cinematic death at Cargo.",
        "Night Harbor with no torch bind is how you eat a shotgun trap you placed with your eyes.",
      ],
      image: header("Rust Harbor monument"),
      seoKeywords: ["Rust Harbor", "Rust green card", "Rust monuments beginner"],
    },
    {
      slug: "airfield",
      name: "Airfield",
      difficulty: "Medium",
      tagline: "Long runways, blue card, and a monument that punishes tourists in the open.",
      overview:
        "Airfield is bigger, louder, and more third-partied than Harbor. Hangars, the puzzle, and a lot of open tarmac. You come with a gun and a plan to leave, not a rock and a dream. Blue card progression starts here for a lot of wipes. Do not stand on the runway looting a crate like it is a picnic. Roof campers and helis exist. Run the puzzle, take the loot, get off the monument.",
      stats: [
        { label: "Card", value: "Green in, blue out (typical path)" },
        { label: "Open space", value: "High — do not stroll the tarmac" },
        { label: "Traffic", value: "Clans like this grid" },
      ],
      poi: [
        { name: "Hangars", note: "Cover. Fight here, not on the painted lines." },
        { name: "Puzzle building", note: "Learn the swipe order in a server you can die on. Official 1000-pop is a bad classroom." },
        { name: "Runway", note: "A killbox. Sprint between cover or do not be there." },
        { name: "Towers", note: "People hold them. Assume a roof until you cleared it." },
        { name: "Exit road", note: "The part where the five-man was waiting. Bags off-monument help." },
      ],
      notes: [
        "If Harbor still feels like a maze, you are not ready for Airfield every roam.",
        "Bradley / heli can show up near military monuments depending on the map. Headphones.",
        "Recycle at Outpost if the airfield recycler is a warzone.",
      ],
      image: header("Rust Airfield monument"),
      seoKeywords: ["Rust Airfield", "Rust blue card", "Airfield puzzle"],
    },
    {
      slug: "outpost",
      name: "Outpost",
      difficulty: "Easy",
      tagline: "The safe zone: recycler, vendors, and a place you still do not AFK with a minicopter on the pad.",
      overview:
        "Outpost (and Bandit Camp) are NPC safe zones: shop, recycle, buy a card, sell scrap. PvP is restricted until you leave the bubble — then the road is a murder hallway. Do not voice your base grid at the vendor. Do not exit the same path every time with a full inventory. The safe zone is a tool, not a house. Bandit Camp has the wheel and different vendors; same rule: the parking lot is not safe.",
      stats: [
        { label: "PvP", value: "Off inside — on the moment you leave" },
        { label: "Use for", value: "Recycler, cards, fishing, vending" },
        { label: "Trap", value: "Same exit every time with a full kit" },
      ],
      poi: [
        { name: "Recycler", note: "Why you came. Do it and leave. AFK recycle is a highlight for the doorcamp." },
        { name: "Vendors", note: "Buy the card you need. Selling sulfur here can be smarter than hoarding if you cannot raid." },
        { name: "Vehicle pad", note: "People wait outside. Land, shop, a different exit." },
        { name: "Bubble edge", note: "The real PvP. Assume a roof camper on the first rock." },
        { name: "Bandit Camp", note: "Same idea, different shops. Wheel is optional gambling, not a farm." },
      ],
      notes: [
        "Safe zones do not make you safe on the walk home.",
        "Do not store your life in a locker at Outpost as your only backup. Bags at home.",
        "Low-pop servers still have Outpost campers. They have more time.",
      ],
      image: header("Rust Outpost safe zone"),
      seoKeywords: ["Rust Outpost", "Rust Bandit Camp", "Rust recycler"],
    },
    {
      slug: "launch-site",
      name: "Launch Site",
      difficulty: "Hard",
      tagline: "Red card endgame monument: radiation, clans, and a rock is not a ticket.",
      overview:
        "Launch Site is the big military monument. Radiation, a heavy puzzle, and the highest third-party rate on most maps. You need cards, meds, a real gun, and a reason to be there. Running it with a rock is how YouTubers make death compilations. Loot is good. Dying with it on the road is the default. Go with a duo or a clan, clear, swipe, leave on a vehicle. Do not farm Launch as your first monument because a streamer did it.",
      stats: [
        { label: "Cards", value: "Red path — earn it through green/blue" },
        { label: "Rad", value: "Bring tea / clothing that actually works" },
        { label: "Who lives here", value: "Groups with AKs, not your 2x1" },
      ],
      poi: [
        { name: "Puzzle core", note: "If you have not learned it on a low-pop, you will die to the timer and a five-man." },
        { name: "Open yard", note: "Roof campers and helis. Cover to cover." },
        { name: "Locked crates", note: "The magnet. The third party is already walking." },
        { name: "Exit", note: "Vehicle or you own nothing. Walking Launch loot is a donation." },
        { name: "Radiation", note: "Meds and the right suit. Downing inside from rads is a loot drop for them." },
      ],
      notes: [
        "Learn Harbor and Airfield first. Launch is a different sport.",
        "Online clans treat this as their backyard. Pick your hours.",
        "A locked crate you cannot extract is a firework for the grid.",
      ],
      image: header("Rust Launch Site monument"),
      seoKeywords: ["Rust Launch Site", "Rust red card", "Launch Site loot"],
    },
    {
      slug: "oil-rig",
      name: "Oil Rig",
      difficulty: "Hard",
      tagline: "Boat in, scientists, heavy crate, chinook — and a boat out that everyone hears.",
      overview:
        "Small and Large Oil Rig are timed PvE islands with a PvP extraction. You boat or mini in, clear scientists, hack the crate, and leave before the heavy scientists and the rest of the server arrive. The water is the third-party highway. If you cannot land a mini, take a boat and practice on a dead server. Do not take your only kit and your only boat with no bag on the mainland.",
      stats: [
        { label: "Get there", value: "Boat or minicopter — landing is the skill" },
        { label: "Timer", value: "Crate hack is a dinner bell" },
        { label: "Fail", value: "No exit vehicle, no mainland bag" },
      ],
      poi: [
        { name: "Helipad / boat", note: "How you live. How they arrive." },
        { name: "Scientists", note: "Clear systematically. Spraying from the water is how you die to the next wave." },
        { name: "Locked crate", note: "Start it when you can hold. The hack is public." },
        { name: "Heavies", note: "The crate's friends. Meds, cover, do not greed the last box in the open." },
        { name: "Chinook / extra", note: "If it drops, the whole ocean heard. Decide if you are the third party or the loot." },
      ],
      notes: [
        "Do not take a minicopter as your first vehicle if you cannot land it.",
        "A duo with bags on shore beats a solo hero cinematic.",
        "Night oil with no lights is a scientist shooting gallery — you are the gallery.",
      ],
      image: header("Rust Oil Rig"),
      seoKeywords: ["Rust Oil Rig", "Rust locked crate", "Oil Rig guide"],
    },
    {
      slug: "military-tunnels",
      name: "Military Tunnels",
      difficulty: "Hard",
      tagline: "Underground scientists, fog, and a monument that punishes noise and bad radios.",
      overview:
        "Military Tunnels are a close, dark, scientist-heavy monument. You need a weapon that works in hallways, meds, and the discipline not to spray every corner into a third party at the entrance. Blue/red progression depending on the puzzle. People camp the exits. Clear, loot, a different exit if you can. Grenades and traps exist. This is not Harbor with a roof.",
      stats: [
        { label: "Range", value: "Close — SMG/shotgun comfort" },
        { label: "PVE", value: "Scientists will down you if you reload in the open" },
        { label: "PvP", value: "Exit campers are the boss" },
      ],
      poi: [
        { name: "Entrance", note: "The third party waits here. Bag nearby." },
        { name: "Hallways", note: "Sound. Headphones. Do not reload in a doorway." },
        { name: "Puzzle / rooms", note: "Learn on low-pop. Flashlights bound." },
        { name: "Scientist packs", note: "The loot is good. Greeding a second loop is how you meet a five-man." },
        { name: "Exit", note: "Assume a camp. Utility, a teammate, or a wait." },
      ],
      notes: [
        "If you hate interiors in every other shooter, you will hate this monument until you slow down.",
        "Radiation and scientists stack. Meds are the kit.",
        "A full inventory and a camped exit is the Rust joke. Spread loot at home first.",
      ],
      image: header("Rust Military Tunnels"),
      seoKeywords: ["Rust Military Tunnels", "Rust scientists", "tunnels monument"],
    },
    {
      slug: "snow",
      name: "Snow Biome",
      difficulty: "Medium",
      tagline: "Cold, better nodes, and a base that needs heat — not a mansion because the cliff looked cool.",
      overview:
        "The snow biome is colder, often richer in nodes, and harsher on naked kits. You need a heat source, better cloth, and a reason to live there — usually metal/sulfur density or a monument. Building a starter on a snow cliff with no wood nearby is how you freeze and decay. Roads still exist. Polar scientists and the cold meter are the PvE. Clans like snow for the farm. Your 2x1 should still be stone with an airlock, not an ice palace.",
      stats: [
        { label: "Need", value: "Heat, food, a farm path that is not 10 grids of ice" },
        { label: "Farm", value: "Often better metal/sulfur — that is why people contest it" },
        { label: "Build", value: "Still a 2x1 first. Cute castles after stone" },
      ],
      poi: [
        { name: "Nodes", note: "Why you came. Farm and leave if you cannot hold the grid." },
        { name: "Heat", note: "Campfire, clothing, tea. Downing to cold is a loot drop." },
        { name: "Visibility", note: "White on white. You are easier to see than you think." },
        { name: "Monuments in snow", note: "Same puzzles, colder walk. Meds and a vehicle." },
        { name: "Ice lakes / roads", note: "Vehicle time. Walking a sulfur stack across snow is a pinata." },
      ],
      notes: [
        "Do not pick snow for the screenshot on wipe night if you cannot farm wood.",
        "Upkeep still exists. A huge snowbase you cannot feed is a decay advertisement.",
        "Third parties hear guns farther on open snow. Heal in a dip.",
      ],
      image: header("Rust snow biome"),
      seoKeywords: ["Rust snow biome", "Rust arctic", "Rust cold"],
    },
  ],
  roles: [
    {
      slug: "farmer",
      name: "Farmer",
      role: "Nodes, hemp, scrap",
      difficulty: "Easy",
      beginnerRank: 1,
      tiers: [
        { label: "Early", value: "Wood, stone, cloth, metal" },
        { label: "Later", value: "Sulfur when you can actually spend it" },
      ],
      kit: ["Tools that match the node", "A bag off the farm path", "Headphones — the road is PvP"],
      excerpt:
        "The best first job. You print the wipe. Bow-fighting every naked is how you donate the farm to an AK.",
      strengths: [
        "Time-to-stone is the real PvP",
        "Teaches routes, sound, and when to leave a node",
        "Fits a solo 2x1",
      ],
      weaknesses: [
        "Greeding one more sulfur rock into a five-man",
        "Farming with the whole kit and no bag",
      ],
      starterTips: [
        "Wood, stone, cloth, then metal. Sulfur is for when you can actually use it.",
        "Play on a low-pop or beginner-tagged server for the first wipe.",
        "Farm near home. Twenty-grid sightseeing is a death screen.",
        "If you hear a fight, you are the third party or you leave. Standing in the middle is loot.",
      ],
      image: hero("Rust farming stone and metal nodes"),
      seoKeywords: ["Rust farming", "Rust nodes", "Rust scrap"],
    },
    {
      slug: "builder",
      name: "Builder",
      role: "TC, airlock, upkeep",
      difficulty: "Easy",
      beginnerRank: 2,
      tiers: [
        { label: "Starter", value: "2x1, airlock, stone, honeycomb on peeks" },
        { label: "Fail", value: "Mansion on twig, no airlock, all loot in TC" },
      ],
      kit: ["Building plan and hammer binds", "Stone in the cupboard", "Two bags that are not the door"],
      excerpt:
        "You keep the wipe alive. A decayed wall is an open door. No airlock means people walk in behind you for the rest of the wipe.",
      strengths: [
        "A live stone 2x1 beats a dead castle",
        "Teaches upkeep, which is the real raid timer",
        "Honeycomb and airlocks are the skill, not roof camps",
      ],
      weaknesses: [
        "Cute designs that cannot be upkept",
        "Handing codes to a random",
      ],
      starterTips: [
        "Build a 2x1 or honeycomb starter, not a mansion. Time-to-stone matters more than roof shooting floors.",
        "Place two bags apart from your base.",
        "Keep stone and wood in the cupboard. A decayed wall is an open door.",
        "Soft-side walls face in. If you can pick the wall from outside, you built it backwards.",
      ],
      image: hero("Rust 2x1 stone base with airlock"),
      seoKeywords: ["Rust base", "Rust 2x1", "Rust tool cupboard"],
    },
    {
      slug: "electrician",
      name: "Electrician",
      role: "Power, farms, auto turrets",
      difficulty: "Medium",
      beginnerRank: 3,
      tiers: [
        { label: "Early", value: "Light, door control you understand" },
        { label: "Later", value: "Turrets, HBHF, auto farm if you can defend it" },
      ],
      kit: ["Root combiner and a plan on paper", "Fuel for the generator", "Turrets that are not on the roof for the clan to farm"],
      excerpt:
        "You turn scrap into uptime. Fancy circuits on a twig roof are a raid gift. Power a door and a light before a YouTube mega-farm.",
      strengths: [
        "Farms print cloth and food while you monument",
        "Turrets that actually cover the airlock",
        "Less night-blindness if lights exist",
      ],
      weaknesses: [
        "Wiring you cannot debug at 3am during a raid",
        "Solar on a roof the heli looks at",
      ],
      starterTips: [
        "Bind keys for building grades, light, and healing. Inventory panic is a death sentence.",
        "A working auto turret on the airlock beats a farm you cannot power.",
        "Do not put all batteries in the TC room with the sulfur.",
        "Learn splitters on a low-pop. Official is a bad electrical school.",
      ],
      image: hero("Rust electricity and auto turret"),
      seoKeywords: ["Rust electricity", "Rust auto turret", "Rust farm"],
    },
    {
      slug: "runner",
      name: "Monument Runner",
      role: "Cards, crates, extraction",
      difficulty: "Medium",
      beginnerRank: 4,
      tiers: [
        { label: "Path", value: "Harbor → Airfield → then the red stuff" },
        { label: "Kit", value: "Gun, meds, a vehicle, a bag that is not on the monument" },
      ],
      kit: ["The card the puzzle actually needs", "Meds and a ranged gun", "A boat or mini you can land"],
      excerpt:
        "You turn scrap into better scrap. Launch Site with a rock is a clip for them. Extract or the crate was a firework.",
      strengths: [
        "Prints guns the farmer cannot find on a barrel",
        "Teaches third parties — the real Rust PvP",
        "Oil and Harbor are different sports; you can main one",
      ],
      weaknesses: [
        "Greeding a second puzzle while the five-man walks in",
        "No exit vehicle",
      ],
      starterTips: [
        "Learn Harbor or Airfield before Launch Site.",
        "Do not take a minicopter as your first vehicle if you cannot land it.",
        "Start the locked crate when you can hold or leave. The timer is public.",
        "Recycle at Outpost if the monument recycler is a war.",
      ],
      image: hero("Rust running a monument puzzle"),
      seoKeywords: ["Rust monuments", "Rust cards", "Rust oil rig"],
    },
    {
      slug: "raider",
      name: "Raider",
      role: "Sulfur, boom, and the clock",
      difficulty: "Hard",
      beginnerRank: 5,
      tiers: [
        { label: "Need", value: "More sulfur than they have walls — and a plan for online" },
        { label: "Fail", value: "All boom in one box, raid at 4am your time, log off" },
      ],
      kit: ["Rockets/C4 you can actually spend", "A raid base or a ladder plan", "Spread loot so one counter-raid is not wipe"],
      excerpt:
        "You end other people's wipes and risk yours. Store sulfur everywhere except 'the TC room only.' Online raids happen when you sleep in real life too.",
      strengths: [
        "The win condition of vanilla",
        "Teaches weak sides, doors, and utility",
        "A finished raid with extract beats a 40-rocket fail on honeycomb",
      ],
      weaknesses: [
        "Bow-raiding a clan because you are bored",
        "Playing until 4am then logging off with deployables on the roof",
      ],
      starterTips: [
        "Spread loot; expect to get raided. Storing all sulfur in the TC room is the classic.",
        "Count the boom. Honeycomb exists so you go home empty.",
        "Offline raids are the game. So are people who play your timezone. Pick.",
        "Do not raid if you cannot upkeep your own stone. You are about to be next.",
      ],
      image: hero("Rust raid with explosives"),
      seoKeywords: ["Rust raid", "Rust sulfur", "how to raid Rust"],
    },
  ],
  strats: [
    {
      slug: "first-2x1",
      name: "First 2x1",
      mapSlug: "woods",
      mapName: "Woods and Roads",
      difficulty: "Easy",
      risk: "Low",
      bestFor: "Wipes that start with a mansion sketch and end on twig",
      duration: "First 30–90 minutes",
      excerpt:
        "2x1, airlock, stone, two bags. Cute castles come after the cupboard has upkeep.",
      steps: [
        "Spawn, bag, wood and stone tools. Do not bow-war the beach.",
        "Place a 2x1 with an airlock. Honeycomb peek sides if you can afford it.",
        "Upgrade to stone before you farm a second grid. Twig is a door.",
        "TC with stone and wood. A decayed wall is an open door.",
        "Second bag away from the door. Then Harbor, not Launch.",
      ],
      tips: [
        "Play on a low-pop or beginner-tagged server for the first wipe. Main 1000-pop is door-camp school.",
        "Triangle airlock if you can afford the upkeep.",
        "Soft side in. If you can pick from outside, rebuild.",
      ],
      image: header("Rust starter 2x1 base"),
      seoKeywords: ["Rust 2x1", "Rust starter base", "Rust first wipe"],
    },
    {
      slug: "airlock-honeycomb",
      name: "Airlock and Honeycomb",
      mapSlug: "woods",
      mapName: "Any base",
      difficulty: "Easy",
      risk: "Low",
      bestFor: "Bases people walk into behind you all wipe",
      duration: "Until the next expansion",
      excerpt:
        "No airlock means people walk in behind you for the rest of the wipe. Honeycomb is the raid tax.",
      steps: [
        "Double door on the entrance. Never leave the inner door open while the outer is open.",
        "Honeycomb peek sides and the TC wall. Peeking honeycomb is cheaper than a roof you cannot hold.",
        "Shotgun traps / turrets that cover the airlock, not the scenic roof.",
        "Do not store all sulfur in the TC room. Spread boxes.",
        "Expand with upkeep you can farm. A honeycomb you cannot feed decays into a raid.",
      ],
      tips: [
        "Codes: you and maybe a real teammate. Not the naked who helped with a wolf.",
        "Garage doors cost more boom. Use them where it matters.",
        "Deployables on the roof when you log off at 4am are an online-raid shopping list.",
      ],
      image: header("Rust airlock honeycomb"),
      seoKeywords: ["Rust airlock", "Rust honeycomb", "Rust base design"],
    },
    {
      slug: "harbor-loop",
      name: "Harbor Loop",
      mapSlug: "harbor",
      mapName: "Harbor",
      difficulty: "Easy",
      risk: "Medium",
      bestFor: "People who only know Launch Site from YouTube",
      duration: "One card run",
      excerpt:
        "Green card, clear, swipe, loot, leave. Recycle at Outpost if Harbor is a war.",
      steps: [
        "Bring a green card, a gun, meds. A rock is not a ticket.",
        "Clear scientists and corners. Do not loot a crate in the open dock.",
        "Swipe the puzzle you practiced. If you fail, leave — the third party heard the shots.",
        "Take comps / guns and get off the monument. Vehicle if you have one.",
        "Feed the TC. The run was for upkeep and a better kit, not a highlight.",
      ],
      tips: [
        "Learn Harbor or Airfield before Launch Site with a rock.",
        "Same loop at Airfield with more tarmac. Cover to cover.",
        "If you hear a five-man, you are loot. Bags off-grid.",
      ],
      image: header("Rust Harbor loot run"),
      seoKeywords: ["Rust Harbor guide", "Rust green card puzzle", "Rust monument loot"],
    },
    {
      slug: "oil-extract",
      name: "Oil Extract",
      mapSlug: "oil-rig",
      mapName: "Oil Rig",
      difficulty: "Hard",
      risk: "High",
      bestFor: "Solos who boat in with one kit and no shore bag",
      duration: "Crate timer plus exit",
      excerpt:
        "Land, clear, hack when you can hold, boat out. The water is the third-party highway.",
      steps: [
        "Bag on the mainland. Second boat or a mini you can actually land.",
        "Clear scientists floor by floor. Do not start the crate at 10% HP.",
        "Hack when you have meds and a hold. The timer is a server announcement.",
        "Heavies: cover, burst, do not greed the last box on the helipad.",
        "Leave on a vehicle. Swimming a red crate is a clip for the roof camper on the cliff.",
      ],
      tips: [
        "Do not take a minicopter as your first vehicle if you cannot land it.",
        "Duo with someone on the boat beats a hero cinematic.",
        "If chinook is in play, decide immediately: third-party or extract.",
      ],
      image: header("Rust Oil Rig locked crate"),
      seoKeywords: ["Rust Oil Rig guide", "Rust locked crate", "how to oil rig"],
    },
    {
      slug: "spread-loot",
      name: "Spread Loot",
      mapSlug: "woods",
      mapName: "Your base",
      difficulty: "Easy",
      risk: "Low",
      bestFor: "Everyone who put all sulfur next to the TC",
      duration: "Every time you come home",
      excerpt:
        "Expect to get raided. One box should not be the wipe. Spread sulfur, comps, and kits.",
      steps: [
        "TC gets upkeep only — stone, wood, a bit of metal. Not the rocket stash.",
        "Sulfur in a box that is not the first room. Better: two boxes.",
        "Kits in a locker off the main path. A raider who opens TC should not get everything.",
        "Keep a 'grief kit' bag and a bow somewhere cheap so you can play after a raid.",
        "If you are rich, a second small base beats a bigger honeycomb you cannot upkeep.",
      ],
      tips: [
        "Storing all sulfur in the tool cupboard room is the number-one wipe joke.",
        "Allies are temporary. Extra codes are extra raid paths.",
        "A decayed honeycomb is an open wall. Feed the cupboard.",
      ],
      image: header("Rust loot storage and TC"),
      seoKeywords: ["Rust loot", "Rust TC", "Rust sulfur storage"],
    },
    {
      slug: "raid-finish",
      name: "Raid You Can Finish",
      mapSlug: "woods",
      mapName: "Target base",
      difficulty: "Hard",
      risk: "High",
      bestFor: "Forty rockets into honeycomb and a walk home",
      duration: "Until boom or extract",
      excerpt:
        "Count the sulfur. Pick a weak side. Extract. Logging off at 4am with boom on the roof is how you get raided back.",
      steps: [
        "Scout: doors, honeycomb, who is online. Offline is a choice, not a moral category.",
        "Count rockets/C4 vs walls. If the math loses, farm more or pick a worse base.",
        "Breach a path to loot, not a tour of every honeycomb triangle.",
        "Bag and a box for extract. A raid with no way home is their counter-raid.",
        "If it goes online, decide to finish or leave. Ego vs a five-man is how you lose two bases.",
      ],
      tips: [
        "Playing until 4am then logging off with deployables on the roof invites the online raid.",
        "Spread your own boom before you spend it. You are about to be famous on the grid.",
        "Do not raid if your own stone is not upkept. You are next.",
      ],
      image: header("Rust raid explosives"),
      seoKeywords: ["Rust raid guide", "Rust rocket raid", "offline raid"],
    },
  ],
  guides: [
    {
      slug: "beginner-guide",
      title: "Rust Beginner Guide",
      category: "Getting Started",
      readTime: "9 min",
      excerpt:
        "Low-pop first wipe, a 2x1, two bags, and why Launch Site can wait.",
      seoKeywords: ["Rust beginner", "how to play Rust", "Rust first wipe"],
      heroImage: hero("Rust beginner guide"),
      content: [
        {
          heading: "What you are actually playing",
          body: "Rust is a persistent PvP survival game. The server is the product: you naked-spawn, farm nodes, build a base that can take a raid, and lose it when someone brings more sulfur than you. You win the wipe by still having a stone airlock on day three, not by bow-killing three nakeds on the beach.",
        },
        {
          heading: "The first wipe",
          body: "Play on a low-pop or beginner-tagged server. Main 1000-pop is a dissertation in door camping. Place two bags apart from your base. Build a 2x1 or honeycomb starter, not a mansion. Time-to-stone matters more than roof shooting floors.",
        },
        {
          heading: "The loop",
          body: "Spawn, get a sleeping bag and tools, farm a starter, upgrade to stone, then play the monument and oil rig loop until wipe. Learn Harbor or Airfield before you run Launch Site with a rock.",
        },
        {
          heading: "Social",
          body: "Allies are temporary. Do not hand codes to a random who helped you bow a wolf. Mute, pick better servers, and do not voice-chat your base location.",
        },
        {
          heading: "What good looks like after a week",
          body: "You can upkeep stone, run Harbor without panicking, recycle at Outpost without the same exit every time, and you have not stored all sulfur in the TC. Then Airfield. Then oil.",
        },
      ],
    },
    {
      slug: "first-wipe-base",
      title: "Rust First Wipe Base",
      category: "Building",
      readTime: "8 min",
      excerpt:
        "A starter that survives the first two nights without eating your whole farm.",
      seoKeywords: ["Rust 2x1", "Rust starter base", "Rust honeycomb"],
      heroImage: header("Rust starter base build"),
      content: [
        {
          heading: "Footprint",
          body: "2x1 with an airlock, honeycomb on peek sides, and a triangle airlock if you can afford the upkeep. Cute castles come after stone.",
        },
        {
          heading: "TC and upkeep",
          body: "Keep stone and wood in the cupboard. A decayed wall is an open door. Do not store all sulfur in the TC room. Spread loot; expect to get raided.",
        },
        {
          heading: "Farm path",
          body: "Nodes and hemp near home, then a safe monument. Do not take a minicopter as your first vehicle if you cannot land it.",
        },
        {
          heading: "Airlock",
          body: "No airlock. People will walk in behind you for the rest of the wipe. Double door. Never both open.",
        },
        {
          heading: "Log-off",
          body: "Playing until 4am then logging off with deployables on the roof. Online raids happen when you sleep in real life too.",
        },
      ],
    },
    {
      slug: "monuments-and-cards",
      title: "Rust Monuments and Cards",
      category: "Monuments",
      readTime: "8 min",
      excerpt:
        "Green, blue, red — Harbor before Launch, oil when you can extract.",
      seoKeywords: ["Rust monuments", "Rust keycards", "Rust puzzles"],
      heroImage: header("Rust monument keycards"),
      content: [
        {
          heading: "Order",
          body: "Harbor (green), Airfield (blue path), then Launch / tunnels / oil. A rock at Launch Site is a donation. Learn the puzzle on a server you can die on.",
        },
        {
          heading: "Extraction",
          body: "Loot you cannot move is a firework. Vehicle, bags off-monument, a different Outpost exit every time.",
        },
        {
          heading: "Oil",
          body: "Boat or mini you can land. Crate timer is public. Heavies and the ocean third-party are the boss.",
        },
        {
          heading: "Safe zones",
          body: "Outpost and Bandit Camp for recycle and vendors. The bubble edge is PvP. Do not AFK the recycler.",
        },
        {
          heading: "Radiation and scientists",
          body: "Meds, the right clothing, hallway guns for tunnels. Downing to rads or AI is a loot drop.",
        },
      ],
    },
    {
      slug: "farming-and-upkeep",
      title: "Rust Farming and Upkeep",
      category: "Economy",
      readTime: "7 min",
      excerpt:
        "What to farm first, how much stone a cupboard eats, and when sulfur is a trap.",
      seoKeywords: ["Rust upkeep", "Rust farming", "Rust sulfur"],
      heroImage: header("Rust tool cupboard upkeep"),
      content: [
        {
          heading: "Order",
          body: "Wood, stone, cloth, then metal. Sulfur is for when you can actually use it. Barrel roads print scrap. Nodes near home beat a 10-grid tour.",
        },
        {
          heading: "Upkeep",
          body: "The cupboard is the raid timer you pay daily. If you cannot farm the stone, you cannot own the honeycomb. Downsize.",
        },
        {
          heading: "Sulfur",
          body: "Spread it. Farming more than you can defend is how you fund someone else's rockets.",
        },
        {
          heading: "Quarries / excavator",
          body: "Group content. Solo 2x1 players get third-partied. Treat them like Launch Site.",
        },
        {
          heading: "Food and cloth",
          body: "Hemp and a small farm keep you in the game. Starving on a sulfur run is a naked walk back.",
        },
      ],
    },
    {
      slug: "pvp-and-third-parties",
      title: "Rust PvP and Third Parties",
      category: "Combat",
      readTime: "7 min",
      excerpt:
        "Sound, roofs, and why the bow war on the road is a pinata.",
      seoKeywords: ["Rust PvP", "Rust third party", "Rust combat"],
      heroImage: header("Rust PvP gunfight"),
      content: [
        {
          heading: "Do not bow-fight every naked",
          body: "You will die to the third party holding an AK. Farm, or fight with a reason and an exit.",
        },
        {
          heading: "Sound",
          body: "Audio is a weapon. Headphones. Footsteps and roofs tell you the raid before the boom. Music off.",
        },
        {
          heading: "After a kill",
          body: "You advertised. Heal, reload, leave or hold. Looting in the open is PUBG rules in a persistence game.",
        },
        {
          heading: "Roof / door camp",
          body: "It exists. Bags not next to the airlock. Different Outpost exits. Do not voice the grid.",
        },
        {
          heading: "Toxicity",
          body: "Mute, pick better servers, and do not voice-chat your base location. Vanilla is PvP-first; PvE is a different listing.",
        },
      ],
    },
    {
      slug: "electricity",
      title: "Rust Electricity and Farms",
      category: "Building",
      readTime: "7 min",
      excerpt:
        "Lights and turrets before a YouTube mega-circuit you cannot debug in a raid.",
      seoKeywords: ["Rust electricity", "Rust auto turret", "Rust planter farm"],
      heroImage: header("Rust electrical circuits"),
      content: [
        {
          heading: "First circuits",
          body: "A door you control and a light you can bind. Then an auto turret covering the airlock. Fancy root combiners wait.",
        },
        {
          heading: "Turrets",
          body: "Ammo, range, and a height that is not a heli gift. A turret on the scenic roof is loot.",
        },
        {
          heading: "Farms",
          body: "Cloth and food while you roam. Power you can defend. An outdoor farm on a contested grid is a public garden.",
        },
        {
          heading: "Fuel",
          body: "Generators need low grade. Solar needs space the raid can see. Plan the fuel like upkeep.",
        },
        {
          heading: "Debug",
          body: "If you cannot explain the circuit, you cannot fix it at 3am. Keep a screenshot or a simple layout.",
        },
      ],
    },
    {
      slug: "settings-and-binds",
      title: "Rust Settings and Binds",
      category: "PC Setup",
      readTime: "6 min",
      excerpt:
        "See players in the grass, bind grades and heals, audio louder than music.",
      seoKeywords: ["Rust settings", "Rust binds", "Rust graphics"],
      heroImage: header("Rust graphics and keybinds"),
      content: [
        {
          heading: "Visibility",
          body: "Use a max-gibs and grass setting you can still see players in. Some competitive configs reduce clutter on purpose. Pretty forests are death.",
        },
        {
          heading: "Binds",
          body: "Bind keys for building grades, light, and healing. Inventory panic is a death sentence. Practice the airlock doors until both never stay open.",
        },
        {
          heading: "Audio",
          body: "Audio is a weapon. Wear headphones; footsteps and roofs tell you the raid before the boom.",
        },
        {
          heading: "Performance",
          body: "Cap a frame rate you hold in a monument fight with smokes and five people. A freeze on a roof is a kit loss.",
        },
        {
          heading: "Mini",
          body: "If you fly, practice landing on a dead server. The first vehicle should not be a $50 crash into Harbor.",
        },
      ],
    },
    {
      slug: "faq",
      title: "Rust FAQ",
      category: "FAQ",
      readTime: "5 min",
      excerpt: "Wipes, PvE, toxicity, and what to farm first.",
      seoKeywords: ["Rust FAQ", "Rust wipe", "Rust PvE"],
      content: [
        {
          heading: "When do servers wipe?",
          body: "Usually weekly or monthly depending on the server. Official and community calendars differ — read the listing.",
        },
        {
          heading: "Is PvE possible?",
          body: "On modded or PvE community servers. Vanilla is PvP-first.",
        },
        {
          heading: "How do I deal with toxicity?",
          body: "Mute, pick better servers, and do not voice-chat your base location.",
        },
        {
          heading: "What should I farm first?",
          body: "Wood, stone, cloth, then metal. Sulfur is for when you can actually use it.",
        },
        {
          heading: "Solo on official?",
          body: "Possible, miserable on high-pop. Low-pop or a duo is how the 2x1 stays a game.",
        },
      ],
    },
  ],
};
