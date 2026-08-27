import type { FullWiki, WikiImage } from "../types";
import { steamHeader, steamHero } from "@/lib/steam-wiki";

const APP = 108600;

function header(alt: string): WikiImage {
  return { src: steamHeader(APP), alt };
}

function hero(alt: string): WikiImage {
  return { src: steamHero(APP), alt };
}

export const zomboidWiki: FullWiki = {
  slug: "project-zomboid",
  hubs: { maps: "Towns", roles: "Jobs", strats: "Setups" },
  copy: {
    home: {
      strats: "First house, quiet loot, fences, and the helicopter — not a shotgun in the street.",
      roles: "Carpentry and quiet looting first. Downtown last.",
      maps: "Rosewood or Riverside before West Point and Louisville.",
      guides: "Beginner path, base, sound, skills, vehicles, moodles, and sandbox.",
    },
    pages: {
      maps: "Knox Country towns. Start where the houses have fences, not where the skyline is a horde.",
      roles: "How you spend the day: build, loot, fight, drive, or vanish. Overconfidence is the infection.",
      strats: "Windows, ropes, loot order, and how not to die in the inventory menu.",
    },
  },
  maps: [
    {
      slug: "rosewood",
      name: "Rosewood",
      difficulty: "Easy",
      tagline: "The kindest first town: fire station, suburban streets, and a prison you should not tour on day one.",
      overview:
        "Rosewood is the starter map most new characters should see. Houses have yards, the fire station is a real loot pin, and the population is not Louisville. You still die to sound and over-encumbrance. Clear a two-story, sheet the windows, rope the second floor. The prison and the police station are late-week greed, not a frying-pan field trip. Call the firehouse, the main drag, and the woods west of town before you invent speedrun POIs.",
      stats: [
        { label: "Start here", value: "Yes — with Riverside as the other kind option" },
        { label: "Loot", value: "Fire station, school, suburban kitchens" },
        { label: "Skip day one", value: "Prison interior" },
      ],
      poi: [
        { name: "Fire station", note: "Axes, clothing, a roof. Still clear the street first. A siren is a magnet if you are loud inside." },
        { name: "Suburban two-story", note: "Fence, water, sheets. Ground-floor sheet rope is an exit." },
        { name: "Police / school", note: "Guns and noise. If you cannot sneak, you cannot loot them." },
        { name: "Prison", note: "A horde factory. Week two with a car and a plan, not spawn." },
        { name: "Woods edge", note: "Quiet farm path. Foraging after you can not get lost at dusk." },
      ],
      notes: [
        "Never fight a crowd with a frying pan. Walk away, close doors, fence-split.",
        "Read skill books before grinding. XP multipliers are the early power spike.",
        "Custom sandbox if Apocalypse feels unfair. Population is the slider.",
      ],
      image: header("Project Zomboid Rosewood fire station"),
      seoKeywords: ["Zomboid Rosewood", "Rosewood spawn", "Project Zomboid beginner town"],
    },
    {
      slug: "riverside",
      name: "Riverside",
      difficulty: "Easy",
      tagline: "Gated houses, a river, and a town that still punishes a shotgun on the lawn.",
      overview:
        "Riverside is the other beginner town: nicer houses, a country club vibe, and water. Gated communities look safe until you make noise. Same rules as Rosewood — sheets, rope, a bag, canned food. The bar and the school are loot with a crowd attached. Do not start a generator in the driveway on night three because you saw a YouTube base. Fish later. Survive the first week first.",
      stats: [
        { label: "Start here", value: "Yes — quieter than West Point" },
        { label: "Houses", value: "Often fenced — still sheet the windows" },
        { label: "River", value: "Water and a drown risk if you panic-sprint" },
      ],
      poi: [
        { name: "Gated suburb", note: "Best first base if you can clear the cul-de-sac without a shotgun." },
        { name: "Downtown strip", note: "Shops and zombies. Daylight, melee, never a crowd." },
        { name: "School / community", note: "Books. XP multipliers live here. Quiet in, quiet out." },
        { name: "River bank", note: "Fishing later. A panic swim with a bag is a new character." },
        { name: "Highway out", note: "Cars and a way to Muldraugh. Dead battery in the woods is a new character." },
      ],
      notes: [
        "Sleeping in a house you have not covered the windows of is how night zombies path to you.",
        "Over-encumbering then jogging stacks moodles into a trip and a bite.",
        "Riverside is kind, not empty. Treat every lawn as a sightline.",
      ],
      image: header("Project Zomboid Riverside houses"),
      seoKeywords: ["Zomboid Riverside", "Riverside spawn", "Project Zomboid gated community"],
    },
    {
      slug: "muldraugh",
      name: "Muldraugh",
      difficulty: "Medium",
      tagline: "The classic strip: warehouses, a dense main street, and the town that taught everyone to hate sirens.",
      overview:
        "Muldraugh is the original lesson. More zombies than Rosewood, better warehouses, a main street that is a meat grinder if you sprint. Live on the edge or in a two-story off the strip. The storage lots and warehouses are why you came — after you can fence and not pull forty. Helicopters will still deliver a crowd to whatever noise you made last. This is the town after you have one week on a kinder spawn.",
      stats: [
        { label: "When", value: "After Rosewood/Riverside, or if you like pain" },
        { label: "Payoff", value: "Warehouses, tools, building supplies" },
        { label: "Fail", value: "Shotgun on the main strip" },
      ],
      poi: [
        { name: "Main street", note: "Do not. Fence-split or do not be there at noon." },
        { name: "Warehouses / storage", note: "The loot. Cars, a bag you can actually lift, a clear path home." },
        { name: "McCoy / industrial", note: "Tools and lumber. Carpentry lives on this loot." },
        { name: "Edge houses", note: "Better first base than downtown." },
        { name: "Forest south/west", note: "Quiet rotate. Foraging and a place the helicopter is slightly less rude." },
      ],
      notes: [
        "Holding a shotgun in a suburban street is a magnet. Muldraugh's street is worse.",
        "Expand to a warehouse once you can fence and refrigerate — not on day two with a frying pan.",
        "If the helicopter event is on, be indoors with a plan.",
      ],
      image: header("Project Zomboid Muldraugh warehouses"),
      seoKeywords: ["Zomboid Muldraugh", "Muldraugh base", "Project Zomboid warehouse"],
    },
    {
      slug: "west-point",
      name: "West Point",
      difficulty: "Hard",
      tagline: "Downtown density: gun stores, a horde on every block, and the town that ends overconfident runs.",
      overview:
        "West Point is where people go to die with a shopping list. Dense downtown, more zombies, gun shops that are alarms with extra steps. You can live on the outskirts. You should not spawn here on your first character unless you like the quote on the loading screen. Clear one house, do not 'just pop into town for a shotgun.' Fences still work. Crowds still do not.",
      stats: [
        { label: "Beginner spawn?", value: "No" },
        { label: "Loot", value: "High — paid for in bites" },
        { label: "Play", value: "Edge house, daylight, melee, never the whole block" },
      ],
      poi: [
        { name: "Downtown", note: "A horde delivery service you walk into. Don't." },
        { name: "Gun store / police", note: "Sound magnets. If you must, sneak, never a panic shot." },
        { name: "School / church", note: "Books and crowds. Same as every town, louder." },
        { name: "River / north", note: "A way out that is not the strip." },
        { name: "Outskirts houses", note: "The only sane first week in West Point." },
      ],
      notes: [
        "This is how you died — faster, if you treat it like Rosewood.",
        "A bag full of guns you cannot carry home is a tombstone.",
        "Come from Muldraugh with a working car, not as a fresh spawn with a frying pan.",
      ],
      image: header("Project Zomboid West Point downtown"),
      seoKeywords: ["Zomboid West Point", "West Point spawn", "Project Zomboid downtown"],
    },
    {
      slug: "louisville",
      name: "Louisville",
      difficulty: "Expert",
      tagline: "The city: malls, hospitals, and a population slider that was not meant for week one.",
      overview:
        "Louisville is the endgame map for most runs — huge, dense, and unfair if you still fight crowds. Malls and hospitals print loot and print death. Live in a suburb on the edge if you insist on the city. Checkpoint walls and military leftovers are bait. Bring a car you can maintain, a melee skill that is not one, and the habit of walking away. This is not a starter town with a skyline.",
      stats: [
        { label: "When", value: "When Rosewood is boring and you have a car" },
        { label: "Loot", value: "Best in the game — worst density" },
        { label: "Helicopter", value: "A city-wide horde taxi" },
      ],
      poi: [
        { name: "Suburbs / edge", note: "Where a base can exist. Downtown is a raid on yourself." },
        { name: "Mall / large stores", note: "Week-later greed. Fence, bait, never a shotgun tour." },
        { name: "Hospital", note: "Medical loot and a nightmare interior. Flashlight, quiet, a rope exit." },
        { name: "Checkpoints", note: "Guns and zombies. Treat like West Point gun store, city-sized." },
        { name: "Highways", note: "Your life if the car dies. Tools and a spare battery before the trip." },
      ],
      notes: [
        "Custom sandbox population if you want the skyline without the census.",
        "Dying in a menu in a Louisville hallway is the meme at max volume.",
        "Multiplayer Louisville needs agreed loot rules or it is a grief city.",
      ],
      image: header("Project Zomboid Louisville skyline"),
      seoKeywords: ["Zomboid Louisville", "Louisville Project Zomboid", "Zomboid city"],
    },
    {
      slug: "march-ridge",
      name: "March Ridge",
      difficulty: "Medium",
      tagline: "A small military-flavored town: apartments, a bunker vibe, and not as empty as it looks on the map.",
      overview:
        "March Ridge sits south, compact, with apartments and a community-center energy. It looks skippable and then you pull a hallway. Good for a secondary base or a loot run from Muldraugh/Rosewood. Gun loot exists; so do stairwells. Do not assume 'small town' means 'safe town.' Same sheets, same fences, same no-shotgun-in-the-street rule.",
      stats: [
        { label: "Size", value: "Small — still a horde in a stairwell" },
        { label: "Loot", value: "Apartments, storage, some military flavor" },
        { label: "Base?", value: "Secondary — Rosewood is still kinder" },
      ],
      poi: [
        { name: "Apartments", note: "Vertical. Rope, sheets, never a fight on the stairs with a crowd below." },
        { name: "Community / school", note: "Books and bodies. Quiet loot." },
        { name: "Storage", note: "Building supplies. Car to haul; over-encumbrance is a bite." },
        { name: "Roads to Muldraugh", note: "The real use — a satellite town, not a spawn you pick for fun." },
        { name: "Woods", note: "Forage and a quiet sleep if the town is loud." },
      ],
      notes: [
        "Small on the map is not small on the zombie count per tile.",
        "A great place to die carrying a generator down stairs.",
        "Learn Rosewood first so you recognize the same mistakes in a new zip code.",
      ],
      image: header("Project Zomboid March Ridge"),
      seoKeywords: ["Zomboid March Ridge", "March Ridge base", "Project Zomboid apartments"],
    },
    {
      slug: "farms",
      name: "Farms and Rural",
      difficulty: "Easy",
      tagline: "Barns, isolated houses, and the quiet that makes you sloppy until a cow-eyed horde walks the driveway.",
      overview:
        "Rural Knox County is the long-game map: wells, barns, fields, and houses with space to fence. Population is lower until you make a sound that travels. Farming, trapping, and a generator plan live here. A dead battery between towns is still a new character. Isolated is not invisible — helicopter and meta events will path. Sheet the windows anyway. The barn is not a fortress if the door is open.",
      stats: [
        { label: "Pop", value: "Lower — noise still stacks" },
        { label: "Payoff", value: "Farming, water, space to fence" },
        { label: "Risk", value: "Distance, cars, and getting cocky" },
      ],
      poi: [
        { name: "Farmhouse", note: "Two-story plus a barn is a real week-one if you can reach it alive." },
        { name: "Well / rain", note: "Water after the shutoff. Carpentry and a roof." },
        { name: "Fields", note: "Sightlines. You see them, they see you. Crouch is not optional." },
        { name: "Barns", note: "Tools, sometimes cars. Clear loft and ground. Pitchforks are not a personality." },
        { name: "Dirt roads", note: "Your car's health. Spares before a Louisville run." },
      ],
      notes: [
        "Expand here once you can fence and refrigerate — the loop in the pitch.",
        "Foraging and farming are skills. Read the books.",
        "Rural MP servers still need agreed pop. 'Empty farms' with max zombies is a joke.",
      ],
      image: header("Project Zomboid rural farmhouse"),
      seoKeywords: ["Zomboid farm base", "Project Zomboid rural", "Zomboid farming"],
    },
    {
      slug: "woods",
      name: "Woods and Camps",
      difficulty: "Medium",
      tagline: "Trees, tents, and dying to a zombie you never saw because the zoom was on the backpack.",
      overview:
        "The forest is stealth and foraging, not a free win. Line of sight is short, hordes still path to sound, and you will get lost at dusk with a heavy bag. Camps and cabins are loot with a sleep risk. Hunting and trapping are late skills. A woods base needs water and a reason — usually hiding from a town you already looted. Dying in the inventory menu is easier when every tile is a surprise.",
      stats: [
        { label: "Vision", value: "Short — zoom out, watch adjacent tiles" },
        { label: "Loot", value: "Forage, cabins, the occasional camp" },
        { label: "Water", value: "Bring it or live near a river" },
      ],
      poi: [
        { name: "Cabins / camps", note: "Clear, sheet, rope if two-story. Do not assume empty." },
        { name: "Forage zones", note: "After the skill exists. Exhaustion in the trees is a trip." },
        { name: "Rivers / lakes", note: "Water and fish. Panic-sprint swimming with loot is a run ender." },
        { name: "Trails", note: "Zombies use them too. Sound carries." },
        { name: "Deep woods", note: "Helicopter is slightly less accurate. You can still starve." },
      ],
      notes: [
        "Zoom and inventory panels should leave a view of adjacent tiles.",
        "Mods can fill the woods. Add them after two in-game weeks vanilla.",
        "A woods life without carpentry is a tent and a prayer.",
      ],
      image: header("Project Zomboid woods foraging"),
      seoKeywords: ["Zomboid woods", "Zomboid foraging", "Project Zomboid cabin"],
    },
  ],
  roles: [
    {
      slug: "carpenter",
      name: "Carpenter",
      role: "Sheets, walls, rain collectors",
      difficulty: "Easy",
      beginnerRank: 1,
      tiers: [
        { label: "Week one", value: "Sheets, rope, barricades" },
        { label: "Later", value: "Fences, rain barrels, a real wall" },
      ],
      kit: ["Hammer, nails, planks, sheets", "Carpentry books before the grind", "A two-story with a rope exit"],
      excerpt:
        "The best first job. You make the house a base. Skill books before you saw random furniture for 40 minutes.",
      strengths: [
        "Windows and fences are the actual armor",
        "Honest occupation if you picked Carpenter",
        "Every town needs this, not just farms",
      ],
      weaknesses: [
        "Sawing in a street for XP is a noise event",
        "A wall with no water plan is a pretty tomb",
      ],
      starterTips: [
        "Two-story with a fence, water, and a sheet on the windows. Ground-floor sheet rope is an exit.",
        "Read skill books before grinding. XP multipliers are the real early-game power spike.",
        "Barricade after the room is clear. Nailing from inside a crowd is a bite.",
        "Carpentry, fitness, and a melee skill keep you alive. Nimble 10 can wait.",
      ],
      image: hero("Project Zomboid carpentry and barricades"),
      seoKeywords: ["Zomboid carpentry", "Zomboid barricade", "Project Zomboid carpenter"],
    },
    {
      slug: "scavenger",
      name: "Scavenger",
      role: "Quiet loot, bags, priority",
      difficulty: "Easy",
      beginnerRank: 2,
      tiers: [
        { label: "Take", value: "Water, canned food, bag, durable melee, medical" },
        { label: "Leave", value: "TVs and generators until you can carry them" },
      ],
      kit: ["A bag you can still walk with", "Crouch, closed doors", "Daylight hours"],
      excerpt:
        "You fill the base without printing a horde. Over-encumbering then jogging is how moodles become a bite.",
      strengths: [
        "Teaches the real game: noise and weight",
        "Burglar occupation pairs if you like hotwiring later",
        "Every death that was 'just one more house' is this job failed",
      ],
      weaknesses: [
        "Greeding a shotgun from a police station on day one",
        "Looting at night with lights on",
      ],
      starterTips: [
        "Water, canned food, a bag, a weapon with durability, then medical.",
        "Never fight a crowd with a frying pan. Walk away, close doors.",
        "Dying in a menu is a meme for a reason. Zoom so you see adjacent tiles.",
        "School libraries after the street is quiet. Books are the spike.",
      ],
      image: hero("Project Zomboid looting a kitchen"),
      seoKeywords: ["Zomboid loot", "Zomboid scavenging", "Project Zomboid loot priority"],
    },
    {
      slug: "melee",
      name: "Melee Clearer",
      role: "One zombie, not forty",
      difficulty: "Medium",
      beginnerRank: 3,
      tiers: [
        { label: "Fight", value: "Pull one, fence, shove, never a crowd" },
        { label: "Weapon", value: "Durability > a frying pan you found cute" },
      ],
      kit: ["A spear or a durable blunt", "Fitness that is not 0", "A fence"],
      excerpt:
        "You thin an area so the scavenger can work. A shotgun in a suburban street is a magnet. Walk away from 15 zombies.",
      strengths: [
        "Fences split hordes — the whole combat design",
        "Fire officer / police occupations are honest here",
        "Teaches stamina and panic moodles",
      ],
      weaknesses: [
        "Sprinting into nimble 10 by pulling 40 zombies",
        "Fighting tired, heavy, and panicked at once",
      ],
      starterTips: [
        "Never fight a crowd with a frying pan. Walk away, close doors, use fences to split hordes.",
        "Shove, then hit. Backpedal. The game is not a brawler you win on damage.",
        "Weapon condition is HP. A broken spear in a crowd is the loading screen.",
        "Guns wait until you can sneak and you have a reason. Sound is a magnet.",
      ],
      image: hero("Project Zomboid fence fighting"),
      seoKeywords: ["Zomboid combat", "Zomboid melee", "Zomboid fence"],
    },
    {
      slug: "driver",
      name: "Driver",
      role: "Cars, batteries, and not dying in the woods",
      difficulty: "Medium",
      beginnerRank: 4,
      tiers: [
        { label: "Need", value: "Battery, gas, tires, a key or Burglar" },
        { label: "Fail", value: "Ignoring maintenance, then a dead battery between towns" },
      ],
      kit: ["Wrench, tires, gas can", "Spare battery if you can", "A seat you can fight from if you must"],
      excerpt:
        "You make Knox Country smaller. A dead battery in the woods is a new character. Hotwiring is a skill, not a spawn right.",
      strengths: [
        "Warehouses and Louisville become possible",
        "Mechanic occupation / books pay off",
        "Trunks beat over-encumbered jogging",
      ],
      weaknesses: [
        "Honking and headlights as a lifestyle",
        "Crashes that pull every zombie on the road",
      ],
      starterTips: [
        "Ignoring vehicle maintenance is how runs end between towns.",
        "Burglar is strong if you like stealth and hotwiring. Otherwise loot keys.",
        "Park off the road, engine off, in cover. A running car is a zombie bell.",
        "Gas and a spare tire before a 'quick' West Point trip.",
      ],
      image: hero("Project Zomboid car and gas"),
      seoKeywords: ["Zomboid cars", "Zomboid hotwire", "Project Zomboid vehicle"],
    },
    {
      slug: "ghost",
      name: "Ghost",
      role: "Stealth, night, helicopter",
      difficulty: "Hard",
      beginnerRank: 5,
      tiers: [
        { label: "Default", value: "Crouch, closed doors, no gun" },
        { label: "Event", value: "Indoors when the helicopter flies" },
      ],
      kit: ["Quiet shoes, low weight", "Sheets already up", "A plan for the heli day"],
      excerpt:
        "You live because you were not seen. Light and noise path zombies at night. The helicopter is a horde delivery service.",
      strengths: [
        "Burglar / sneak builds shine",
        "Survives towns that melee cannot",
        "The only answer to the helicopter event",
      ],
      weaknesses: [
        "Overconfidence the moment it feels empty",
        "Sneaking while over-encumbered — you are not sneaky, you are slow",
      ],
      starterTips: [
        "Sleeping in a house you have not covered the windows of. Night zombies still path to light and noise.",
        "If the helicopter event is on, be indoors with a plan.",
        "Holding a shotgun in a suburban street. Sound is a magnet.",
        "This is how you died — slower, if you respect sound.",
      ],
      image: hero("Project Zomboid sneaking past zombies"),
      seoKeywords: ["Zomboid stealth", "Zomboid helicopter", "Project Zomboid sneak"],
    },
  ],
  strats: [
    {
      slug: "first-house",
      name: "First House",
      mapSlug: "rosewood",
      mapName: "Rosewood",
      difficulty: "Easy",
      risk: "Low",
      bestFor: "Spawns that immediately walk toward the prison or downtown",
      duration: "Day 1–3",
      excerpt:
        "Two-story, fence if you can, sheets, water, a rope. Rosewood or Riverside — not West Point.",
      steps: [
        "Pick Rosewood or Riverside. Custom sandbox if Apocalypse feels unfair.",
        "Clear a two-story. Close doors. Do not fight the lawn crowd.",
        "Sheets on windows, rope on the second floor to the ground as an exit.",
        "Water, canned food, a bag, a durable melee. Generators wait.",
        "Sleep only when windows are covered. Night pathing is real.",
      ],
      tips: [
        "Ground-floor sheet rope is an exit, not a decoration.",
        "Fire officer, police, or carpenter are honest first occupations. Burglar if you want hotwire later.",
        "The same house plan works in Riverside gated streets.",
      ],
      image: header("Project Zomboid first safe house"),
      seoKeywords: ["Zomboid first base", "Zomboid starter house", "where to spawn Zomboid"],
    },
    {
      slug: "fence-split",
      name: "Fence Split",
      mapSlug: "rosewood",
      mapName: "Any town",
      difficulty: "Easy",
      risk: "Medium",
      bestFor: "People who fight fifteen zombies in a street with a pan",
      duration: "One pull",
      excerpt:
        "Walk away, close a door, put a fence between you and the pile. One zombie at a time.",
      steps: [
        "If you see a crowd, you do not fight it. Break line of sight.",
        "Lead one through a fence gap or around a car. The rest path badly. That is the mechanic.",
        "Shove, hit, back up. Check stamina and weapon condition.",
        "If panic and heavy load are both up, you already lost. Drop the bag or leave.",
        "Never turn a split into a shotgun. The rest will come to the sound.",
      ],
      tips: [
        "Never fight a crowd with a frying pan. This setup is why.",
        "Fitness matters. Exhausted fighting is a trip.",
        "Works on Muldraugh warehouses the same way — more zombies, same fence.",
      ],
      image: header("Project Zomboid using a fence in combat"),
      seoKeywords: ["Zomboid fence fighting", "how to fight Zomboid", "Zomboid horde"],
    },
    {
      slug: "loot-priority",
      name: "Loot Priority",
      mapSlug: "riverside",
      mapName: "Riverside",
      difficulty: "Easy",
      risk: "Low",
      bestFor: "Characters who die under a TV and a generator",
      duration: "Each outing",
      excerpt:
        "Water, food, bag, weapon, medical. Books when the street is quiet. TVs later.",
      steps: [
        "Leave if the bag is already slow. Over-encumber then jog is a bite.",
        "Kitchens and bathrooms first in a new house. Then closets for bags and sheets.",
        "Skill books before you grind carpentry on random chairs.",
        "Guns last, and only if you will not shoot them in a suburb.",
        "Home before dusk. Night loot with a flashlight is a sightline you donated.",
      ],
      tips: [
        "TVs and generators wait until you can carry them.",
        "School after the scavenger can sneak. XP multipliers are the spike.",
        "The same list in Louisville — just worse density.",
      ],
      image: header("Project Zomboid loot in a kitchen"),
      seoKeywords: ["Zomboid loot guide", "what to loot Zomboid", "Zomboid books"],
    },
    {
      slug: "helicopter-hide",
      name: "Helicopter Hide",
      mapSlug: "muldraugh",
      mapName: "Muldraugh",
      difficulty: "Medium",
      risk: "High",
      bestFor: "Runs that go outside to 'see the heli' ",
      duration: "The event day",
      excerpt:
        "Be indoors, sheets up, no engine, no gun. It is a horde delivery service.",
      steps: [
        "Know if the event is on in sandbox. If yes, plan the day before it flies.",
        "Stay inside a sheeted house. Do not loot 'quickly' during the pass.",
        "No generator in the open, no car idling, no shotgun.",
        "After it leaves, wait. The crowd it brought is still pathing.",
        "If you are in woods or a farm, same rule — indoors or you are the destination.",
      ],
      tips: [
        "If the helicopter event is on, be indoors with a plan.",
        "Louisville makes this a city-sized problem. Edge suburb or skip the week.",
        "Multiplayer: agree who is allowed to start a generator that day.",
      ],
      image: header("Project Zomboid helicopter event"),
      seoKeywords: ["Zomboid helicopter", "helicopter event", "Project Zomboid heli"],
    },
    {
      slug: "car-kit",
      name: "Car Kit",
      mapSlug: "farms",
      mapName: "Farms and Rural",
      difficulty: "Medium",
      risk: "Medium",
      bestFor: "People who drive to West Point on a 12% battery",
      duration: "Before any town hop",
      excerpt:
        "Gas, tires, battery, wrench. A dead battery in the woods is a new character.",
      steps: [
        "Loot a wrench and learn the hood. Mechanic books help.",
        "Check battery and gas before you leave the driveway. Spare if you can.",
        "Tires and a trunk that is not a junk pile of TVs.",
        "Park off-road, engine off, in cover at the destination.",
        "Hotwire only if you have the skill or Burglar — sitting in a running car you cannot start is a bell.",
      ],
      tips: [
        "Ignoring vehicle maintenance. A dead battery in the woods is a new character.",
        "Rural roads are why this setup exists. Louisville highways even more so.",
        "Headlights at night are a zombie invitation. Daylight drives.",
      ],
      image: header("Project Zomboid vehicle maintenance"),
      seoKeywords: ["Zomboid cars", "Zomboid battery", "Zomboid gas"],
    },
    {
      slug: "warehouse-expand",
      name: "Warehouse Expand",
      mapSlug: "muldraugh",
      mapName: "Muldraugh",
      difficulty: "Hard",
      risk: "High",
      bestFor: "Week-one warehouse speedruns with a pan",
      duration: "After you can fence and refrigerate",
      excerpt:
        "Secure a starter, then expand. A warehouse is a second base, not a day-two picnic.",
      steps: [
        "Have a sheeted house and a melee you trust. Then think warehouse.",
        "Bait and fence-split the lot. Never a shotgun tour of the aisles.",
        "Generator and fridge when you can carry and fuel them. Noise has a radius.",
        "Sheet / wall a corner you can live in. The whole warehouse does not need to be clear day one.",
        "A car to haul. Walking a generator home is how you die in the menu.",
      ],
      tips: [
        "Secure a starter house, manage hunger and boredom, clear a small area quietly, then expand.",
        "Carpentry makes the warehouse a base. Without it, it is a loot pinata you visit.",
        "MP: agree the warehouse is not a free-for-all before you build a fortress.",
      ],
      image: header("Project Zomboid warehouse base"),
      seoKeywords: ["Zomboid warehouse", "Zomboid generator", "Zomboid late game base"],
    },
  ],
  guides: [
    {
      slug: "beginner-guide",
      title: "Project Zomboid Beginner Guide",
      category: "Getting Started",
      readTime: "9 min",
      excerpt:
        "Rosewood or Riverside, sandbox sliders, and why the frying pan is not a personality.",
      seoKeywords: ["Zomboid beginner", "how to play Project Zomboid", "Zomboid first hours"],
      heroImage: hero("Project Zomboid beginner guide"),
      content: [
        {
          heading: "What you are actually playing",
          body: "Project Zomboid is a top-down zombie survival sim where overconfidence is the real infection. Loot, carpentry, and moodles matter, but noise and line of sight are what end runs. The loading screen is honest. You win by dying later: a sheeted house, a quiet loot path, and never a crowd with a frying pan.",
        },
        {
          heading: "The first week",
          body: "Pick a custom sandbox if Apocalypse feels unfair. Population and transmission settings are the difficulty slider. Riverside or Rosewood are kinder first towns than downtown Louisville. Never fight a crowd with a frying pan. Walk away, close doors, and use fences to split hordes.",
        },
        {
          heading: "Occupation",
          body: "Fire officer, police, or carpenter are honest. Burglar is strong if you like stealth and hotwiring. The occupation is a head start, not a build that ignores sound.",
        },
        {
          heading: "Books",
          body: "Read skill books before grinding. XP multipliers are the real early-game power spike. A library after a quiet clear beats sawing chairs in the street.",
        },
        {
          heading: "What good looks like after a week",
          body: "A two-story with sheets and a rope, a bag you can walk with, a melee with durability, and you have not shotgunned a lawn. Then Muldraugh warehouses. Then a car.",
        },
      ],
    },
    {
      slug: "first-base-and-loot",
      title: "Zomboid First Base and Loot Routes",
      category: "Survival",
      readTime: "8 min",
      excerpt:
        "Where to live in week one, and which loot is actually worth the bite risk.",
      seoKeywords: ["Zomboid base", "Zomboid loot", "Zomboid starter house"],
      heroImage: header("Project Zomboid boarded house"),
      content: [
        {
          heading: "Starter house",
          body: "Two-story with a fence, water, and a sheet on the windows. Ground-floor sheet rope is an exit, not a decoration. Rosewood fire-adjacent or Riverside gated is the classroom.",
        },
        {
          heading: "Loot priority",
          body: "Water, canned food, a bag, a weapon with durability, then medical. TVs and generators wait until you can carry them.",
        },
        {
          heading: "Skills",
          body: "Carpentry, fitness, and a melee skill keep you alive. Sprinting into nimble 10 is how you pull 40 zombies.",
        },
        {
          heading: "Helicopters and events",
          body: "If the helicopter event is on, be indoors with a plan. It is a horde delivery service.",
        },
        {
          heading: "Expand",
          body: "Secure a starter, manage hunger and boredom, clear a small area quietly, then expand to a warehouse once you can fence and refrigerate.",
        },
      ],
    },
    {
      slug: "combat-and-sound",
      title: "Zomboid Combat and Sound",
      category: "Combat",
      readTime: "8 min",
      excerpt:
        "Fences, shoves, guns as last resort, and why a suburban shotgun is a dinner bell.",
      seoKeywords: ["Zomboid combat", "Zomboid guns", "Zomboid sound"],
      heroImage: header("Project Zomboid melee combat"),
      content: [
        {
          heading: "One at a time",
          body: "Walk away from crowds. Close doors. Fence-split. Shove then hit. A frying pan vs fifteen is the tutorial death.",
        },
        {
          heading: "Guns",
          body: "Holding a shotgun in a suburban street. Sound is a magnet. Guns are for a reason and a place you can leave.",
        },
        {
          heading: "Moodles",
          body: "Over-encumbering yourself then jogging. Moodles stack into a trip and a bite. Panic, exhaustion, and heavy load are the real HP bar.",
        },
        {
          heading: "Night",
          body: "Sleeping in a house you have not covered the windows of. Night zombies still path to light and noise.",
        },
        {
          heading: "Weapon condition",
          body: "Durability is a stat. A broken spear in a pull is the bite. Tape and spare weapons at home.",
        },
      ],
    },
    {
      slug: "skills-and-books",
      title: "Zomboid Skills and Skill Books",
      category: "Skills",
      readTime: "7 min",
      excerpt:
        "Read first, grind second. VHS and multipliers are the spike, not 400 chairs.",
      seoKeywords: ["Zomboid skill books", "Zomboid XP", "Zomboid carpentry"],
      heroImage: header("Project Zomboid skill books"),
      content: [
        {
          heading: "Order",
          body: "Find the book for the skill, read it, then grind. XP multipliers are the early-game power spike. Sawing unbuffed is how you make noise for nothing.",
        },
        {
          heading: "Which skills",
          body: "Carpentry, fitness/strength, a melee skill, then mechanics if you want cars. Nimble is nice. It is not week one.",
        },
        {
          heading: "VHS and TV",
          body: "Life and Living on time, VHS later. They are XP. Sitting in a sheeted house watching TV is not 'AFK' if the windows are covered — it is still a light at night.",
        },
        {
          heading: "Occupation",
          body: "Carpenter, fire officer, police, burglar, mechanic — pick the job you will actually play. A doctor who never loots medical is a wasted trait screen.",
        },
        {
          heading: "B42 / build notes",
          body: "Crafting and skills shift between builds. The habit (book then grind, do not pull 40) does not.",
        },
      ],
    },
    {
      slug: "vehicles",
      title: "Zomboid Vehicles",
      category: "Travel",
      readTime: "7 min",
      excerpt:
        "Keys, hotwire, gas, tires, and the woods battery death.",
      seoKeywords: ["Zomboid cars", "Zomboid hotwiring", "Zomboid mechanics"],
      heroImage: header("Project Zomboid car hood"),
      content: [
        {
          heading: "Maintenance",
          body: "Ignoring vehicle maintenance. A dead battery in the woods is a new character. Wrench, gas, tires, battery — before West Point.",
        },
        {
          heading: "Starting",
          body: "Keys from the world, or Burglar / mechanics to hotwire. Sitting in a car you cannot start with the engine trying is a bell.",
        },
        {
          heading: "Driving",
          body: "Daylight, headlights off at night if you can, no horn. Crashes pull the road. Park off-street, engine off.",
        },
        {
          heading: "Trunk",
          body: "This is how you move a generator. Over-encumbered jogging is how you skip the car and die.",
        },
        {
          heading: "Skill",
          body: "Mechanic books and installing parts. A 0 mechanics character can still check gas. They should not rebuild an engine in Louisville with a horde.",
        },
      ],
    },
    {
      slug: "moodles",
      title: "Zomboid Moodles and Health",
      category: "Survival",
      readTime: "7 min",
      excerpt:
        "The HUD is the game. Tired, heavy, depressed, and bitten are different sentences.",
      seoKeywords: ["Zomboid moodles", "Zomboid tired", "Zomboid depression"],
      heroImage: header("Project Zomboid moodles HUD"),
      content: [
        {
          heading: "Why am I always tired?",
          body: "Carrying too much, not sleeping, depression, and exercise. Read moodles; they are the HUD.",
        },
        {
          heading: "Weight",
          body: "Over-encumber then jog is a trip. Drop the loot. A bag at home is worth more than a bag at 90% on the lawn.",
        },
        {
          heading: "Boredom and unhappiness",
          body: "Books, radios, a walk that is not a horde. Depression makes everything slower. It is not flavor text.",
        },
        {
          heading: "Bites",
          body: "Sandbox lets you change transmission. Vanilla bite is the run. Do not 'just bandage it' as a plan unless your sandbox says so.",
        },
        {
          heading: "Sleep",
          body: "Covered windows, a safe room, not a chair in a mall. Exhausted combat is how you die to one zombie.",
        },
      ],
    },
    {
      slug: "settings-and-mp",
      title: "Zomboid Settings, Sandbox, and Multiplayer",
      category: "PC Setup",
      readTime: "6 min",
      excerpt:
        "Population sliders, UI that does not kill you, and hosts with RAM.",
      seoKeywords: ["Zomboid sandbox", "Zomboid multiplayer", "Zomboid settings"],
      heroImage: header("Project Zomboid sandbox settings"),
      content: [
        {
          heading: "Sandbox",
          body: "Population and transmission are the difficulty slider. You can turn down biting death. Use it. Apocalypse is a statement, not a moral requirement.",
        },
        {
          heading: "UI",
          body: "Zoom and inventory panels should leave you a view of adjacent tiles. Dying in a menu is a meme for a reason.",
        },
        {
          heading: "Multiplayer",
          body: "Yes, official. Host or join a server. Loot and zombie pop should be agreed before you build a fortress. Ping and relaying matter; host with enough RAM for the cell simulation.",
        },
        {
          heading: "Mods",
          body: "Half the Workshop culture. Add them after you survive two in-game weeks vanilla. Map mods on top of Louisville are how new players never learn fences.",
        },
        {
          heading: "Build 41 vs 42",
          body: "Crafting and towns shift. Rosewood and sound still kill you. Read the patch you launched.",
        },
      ],
    },
    {
      slug: "faq",
      title: "Project Zomboid FAQ",
      category: "FAQ",
      readTime: "5 min",
      excerpt: "Multiplayer, sandbox bites, tired moodles, and first occupation.",
      seoKeywords: ["Zomboid FAQ", "Zomboid multiplayer", "best Zomboid occupation"],
      content: [
        {
          heading: "Is multiplayer official?",
          body: "Yes. Host or join a server. Loot and zombie pop should be agreed before you build a fortress.",
        },
        {
          heading: "Can I turn off biting death?",
          body: "Sandbox lets you change transmission, population, and even building loot. Use it.",
        },
        {
          heading: "Why am I always tired?",
          body: "Carrying too much, not sleeping, depression, and exercise. Read moodles; they are the HUD.",
        },
        {
          heading: "Best starting occupation?",
          body: "Fire officer, police, or carpenter are honest. Burglar is strong if you like stealth and hotwiring.",
        },
        {
          heading: "Where should I spawn?",
          body: "Rosewood or Riverside. West Point and Louisville wait until you can fence-split and keep a car alive.",
        },
      ],
    },
  ],
};
