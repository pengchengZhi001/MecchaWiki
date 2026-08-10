import type { HunterClass } from "./types";

export const mistfallClasses: HunterClass[] = [
  {
    slug: "mercenary",
    name: "Mercenary",
    role: "Frontline bruiser",
    difficulty: "Easy",
    beginnerRank: 1,
    pveTier: "B",
    pvpTier: "B",
    stances: ["Sword & Shield", "Hammer"],
    excerpt:
      "The safest first Gyldhunter. Shield blocks teach spacing while you learn extraction timing and Woodling hunts.",
    strengths: [
      "Forgiving defense while learning stamina reads",
      "Strong PvE clear for early camp upgrades",
      "Reliable solo boss pressure with shield stance",
    ],
    weaknesses: [
      "Lower burst than assassin or caster mains",
      "Can overcommit if you treat every pack as free loot",
    ],
    starterTips: [
      "Queue Hallowgrove Normal and stay in Sword & Shield for your first three extracts.",
      "Bank restricted items at camp before matchmaking so the boat lets you deploy.",
      "Leave early with a clean Soul of Return instead of greeding for Perfect gear.",
    ],
    image: {
      src: "/images/mistfall/ss-1.jpg",
      alt: "Mistfall Hunter Mercenary combat in dark fantasy ruins",
    },
    seoKeywords: ["best beginner class", "Mercenary guide", "sword and shield"],
  },
  {
    slug: "seer",
    name: "Seer",
    role: "Support & control",
    difficulty: "Easy",
    beginnerRank: 2,
    pveTier: "A",
    pvpTier: "A",
    stances: ["Reverent", "Blasphemer"],
    excerpt:
      "Heals, vision, and zone denial for players who want safer solos and strong trio value.",
    strengths: [
      "Reverent stance stabilizes rough extracts",
      "Excellent trio utility once your squad syncs portals",
      "Strong disengage tools when hunters contest the Soul Tree",
    ],
    weaknesses: [
      "Lower raw clear speed than Mercenary early on",
      "Needs map audio awareness — support cannot fix a missed Woodling cue",
    ],
    starterTips: [
      "Learn Reverent first; swap to Blasphemer only after you can extract cleanly.",
      "Call Soul Tree charges out loud in trios — the pool is finite on Hallowgrove.",
      "Play the edge of fights; your job is surviving with loot, not topping damage.",
    ],
    image: {
      src: "/images/mistfall/ss-2.jpg",
      alt: "Mistfall Hunter Seer support play near mist-covered ruins",
    },
    seoKeywords: ["Seer guide", "support class", "best support"],
  },
  {
    slug: "sorcerer",
    name: "Sorcerer",
    role: "Spell DPS",
    difficulty: "Medium",
    beginnerRank: 4,
    pveTier: "A",
    pvpTier: "S",
    stances: ["Elemental", "Stardust"],
    excerpt:
      "High burst and control for players who already kite well. Squishy — spacing is everything.",
    strengths: [
      "Top-tier trio damage when protected",
      "Crowd control that wins contested extracts",
      "Strong mid-range poke before committing to Soul Tree",
    ],
    weaknesses: [
      "Low forgiveness in melee scrambles",
      "Punished hard if you tunnel PvE while hunters approach",
    ],
    starterTips: [
      "Do not main Sorcerer until you have three clean Mercenary extracts.",
      "Pre-aim exits before casting long setups near Woodling trees.",
      "Travel light — failed extracts cost more when your kit is expensive.",
    ],
    image: {
      src: "/images/mistfall/ss-3.jpg",
      alt: "Mistfall Hunter Sorcerer casting elemental magic",
    },
    seoKeywords: ["Sorcerer guide", "best DPS", "Stardust"],
  },
  {
    slug: "blackarrow",
    name: "Blackarrow",
    role: "Ranged kiting",
    difficulty: "Medium",
    beginnerRank: 3,
    pveTier: "B",
    pvpTier: "S",
    stances: ["Longbow", "Gadget arrows"],
    excerpt:
      "Patient ranged play with traps and charged shots. Rewards positioning over panic melee.",
    strengths: [
      "Excellent solo kiting once spacing clicks",
      "Strong PvP chip and zone control",
      "Safer Woodling contests from distance",
    ],
    weaknesses: [
      "Weaker if forced into tight interiors",
      "Needs ammo discipline and map pathing knowledge",
    ],
    starterTips: [
      "Practice charged shots in PvE packs before taking Brandrgarde.",
      "Mark two exit routes before you start the Woodling fight.",
      "Use gadgets to delay third parties instead of hard committing.",
    ],
    image: {
      src: "/images/mistfall/ss-4.jpg",
      alt: "Mistfall Hunter Blackarrow ranged combat",
    },
    seoKeywords: ["Blackarrow guide", "archer class", "ranged build"],
  },
  {
    slug: "shadowstrix",
    name: "Shadowstrix",
    role: "Assassin",
    difficulty: "Hard",
    beginnerRank: 6,
    pveTier: "C",
    pvpTier: "B",
    stances: ["Stealth daggers", "Dual blades"],
    excerpt:
      "Ambush specialist for hunting other Gyldhunters. High skill floor — skip until you understand extract timing.",
    strengths: [
      "Burst deletes isolated hunters",
      "Strong third-party potential at Soul Tree",
      "Mobility for disengage after a failed contest",
    ],
    weaknesses: [
      "Fragile in prolonged PvE clears",
      "Easy to brick early economy if you die with rare affixes",
    ],
    starterTips: [
      "Unlock map audio cues before maining this class.",
      "Farm on Hallowgrove with cheap kits — never bring stash killers.",
      "Extract on schedule; greed kills assassins faster than bosses do.",
    ],
    image: {
      src: "/images/mistfall/ss-5.jpg",
      alt: "Mistfall Hunter Shadowstrix assassin in ruins",
    },
    seoKeywords: ["Shadowstrix guide", "assassin class", "PvP class"],
  },
  {
    slug: "withered-knight",
    name: "Withered Knight",
    role: "Heavy melee / control",
    difficulty: "Medium",
    beginnerRank: 5,
    pveTier: "A",
    pvpTier: "A",
    stances: ["Greatsword", "Polearm & Shield"],
    excerpt:
      "Parry-focused heavy fighter with strong launch tuning. Steeper than Mercenary, stronger once fundamentals click.",
    strengths: [
      "High PvE durability after learning parry windows",
      "Strong objective hold near Soul Trees",
      "Flexible stance swap for packs vs hunters",
    ],
    weaknesses: [
      "Punishing if you miss defensive timings",
      "Slower early learning curve than Mercenary",
    ],
    starterTips: [
      "Start with Greatsword in quiet Hallowgrove lobbies.",
      "Treat Polearm & Shield as your extract-contest stance.",
      "Upgrade one readable weapon affix before chasing full sets.",
    ],
    image: {
      src: "/images/mistfall/ss-1.jpg",
      alt: "Mistfall Hunter Withered Knight heavy melee combat",
    },
    seoKeywords: ["Withered Knight guide", "tank class", "parry"],
  },
];

export function getClassBySlug(slug: string): HunterClass | undefined {
  return mistfallClasses.find((c) => c.slug === slug);
}

export function getBeginnerClasses(): HunterClass[] {
  return [...mistfallClasses].sort((a, b) => a.beginnerRank - b.beginnerRank);
}
