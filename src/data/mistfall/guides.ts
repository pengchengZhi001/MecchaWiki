import type { MistfallGuide } from "./types";

export const mistfallGuides: MistfallGuide[] = [
  {
    slug: "beginner-guide",
    title: "Mistfall Hunter Beginner Guide",
    category: "Getting Started",
    readTime: "8 min",
    excerpt:
      "First hour at Windrest camp: pick a class, understand Gyldenblood, travel light, and complete your first clean extract.",
    heroImage: {
      src: "/images/mistfall/hero.jpg",
      alt: "Mistfall Hunter beginner guide hero art",
    },
    seoKeywords: ["beginner guide", "how to start", "first hour"],
    content: [
      {
        heading: "What kind of game this is",
        body: "Mistfall Hunter is a dark fantasy PvPvE extraction ARPG. You deploy into corrupted ruins, fight monsters and other Gyldhunters, then leave with loot. A haul only counts when you extract — deaths can wipe the run’s gains. Treat every expensive kit as something you might lose.",
      },
      {
        heading: "Camp first: Windrest basics",
        body: "Before queueing, clear deploy restrictions by banking restricted items. Create a character, pick one class, and keep your warehouse organized. Daily logins and battle pass progress matter less than learning the extract loop — do not over-invest rare affixes on day one.",
      },
      {
        heading: "Pick Mercenary or Seer first",
        body: "Six classes ship at launch: Mercenary, Seer, Sorcerer, Blackarrow, Shadowstrix, and Withered Knight. Mercenary Sword & Shield is the most forgiving starter. Seer works if you prefer support tools. Save Shadowstrix and glass-cannon Sorcerer play until you can extract on schedule.",
        image: {
          src: "/images/mistfall/ss-1.jpg",
          alt: "Choosing a starter class in Mistfall Hunter",
        },
      },
      {
        heading: "Your first three runs",
        body: "Queue Hallowgrove Normal only. Travel light, loot safe containers, follow the Return Chime to the Returner Woodling, use the Soul Tree, and extract. Repeat until three runs end outside the mist with something banked. That consistency beats one lucky Perfect drop.",
      },
      {
        heading: "What to upgrade next",
        body: "Chase one readable weapon upgrade and basic camp progress funded by Gyldenblood. Skip perfect endgame sets. When you can leave on command, open the class hub and route cards to specialize.",
      },
    ],
  },
  {
    slug: "how-to-extract",
    title: "How to Extract in Mistfall Hunter",
    category: "Extraction",
    readTime: "7 min",
    excerpt:
      "Returner Woodling, Soul of Return, Soul Tree portals, and map-tier differences between Hallowgrove and Brandrgarde.",
    heroImage: {
      src: "/images/mistfall/ss-2.jpg",
      alt: "How to extract in Mistfall Hunter",
    },
    seoKeywords: ["how to extract", "Soul of Return", "extraction guide"],
    content: [
      {
        heading: "The extract loop",
        body: "Deploy → loot and survive → locate Returner Woodling cues → secure Soul of Return / Soul Tree access → summon portal → channel without getting interrupted → bank at camp. Killing monsters is optional; leaving alive is mandatory.",
      },
      {
        heading: "Finding the Woodling",
        body: "Woodlings advertise themselves: interval chimes that grow louder, pulsing outlines through terrain, map marks after the Return Chime window, and combat noise from other teams. Sweeping the map silently with game audio muted is the slowest method.",
        image: {
          src: "/images/mistfall/ss-3.jpg",
          alt: "Woodling audio and visual cues",
        },
      },
      {
        heading: "Hallowgrove vs Brandrgarde rules",
        body: "On Hallowgrove, a Soul Tree can serve multiple squadmates if you stagger summons. Brandrgarde is stricter — Souls are often inventory-tied, so trios may need multiple Woodling kills. Always confirm your map’s rule before greeding mid-fight.",
      },
      {
        heading: "Channel discipline",
        body: "Pre-aim an exit angle before you interact. If hunters collapse, disengage and re-time rather than panic-channeling in the open. Escape XP only awards on successful extract — a full bag on the ground is worth zero.",
      },
    ],
  },
  {
    slug: "returner-woodling",
    title: "Returner Woodling Guide",
    category: "Extraction",
    readTime: "5 min",
    excerpt:
      "Cue checklist, contest timing, and when to abandon a Woodling tree to third parties.",
    heroImage: {
      src: "/images/mistfall/ss-3.jpg",
      alt: "Returner Woodling guide",
    },
    seoKeywords: ["Returner Woodling", "Woodling spawn", "Woodling fight"],
    content: [
      {
        heading: "Cue checklist",
        body: "Listen for chimes, watch outline glow, confirm map marks, and treat enemy combat FX as a soft ping. If all four are quiet, you are probably early — keep looting the edge until the Return Chime window opens.",
      },
      {
        heading: "When to take the fight",
        body: "Take free or soft-contested Woodlings. If two teams are already committed, rotate to a second cue or extract later rather than donating your kit. Assassin and caster kits especially should avoid fair triple-team scrambles.",
      },
      {
        heading: "After the kill",
        body: "Secure Soul access immediately. On shared-tree maps, call remaining charges. On inventory-Soul maps, confirm every teammate can leave before you start celebrating loot.",
      },
    ],
  },
  {
    slug: "class-tier-list",
    title: "Mistfall Hunter Class Tier List",
    category: "Classes",
    readTime: "6 min",
    excerpt:
      "Launch-leaning rankings for beginners, PvE clear, and PvP contests — plus who to play first.",
    heroImage: {
      src: "/images/mistfall/ss-4.jpg",
      alt: "Mistfall Hunter class tier list",
    },
    seoKeywords: ["tier list", "best class", "class ranking"],
    content: [
      {
        heading: "How to read this list",
        body: "Tiers shift with patches. This page prioritizes practical outcomes: who teaches the game, who clears PvE safely, and who contests extracts. Beginner rank matters more than S-tier labels for your first week.",
      },
      {
        heading: "Beginner priority",
        body: "1) Mercenary 2) Seer 3) Blackarrow 4) Sorcerer 5) Withered Knight 6) Shadowstrix. Learn extract timing on forgiving kits before investing rare gems into assassins.",
      },
      {
        heading: "PvE vs PvP snapshot",
        body: "Seer, Sorcerer, and Withered Knight lean strong for organized clears and holds. Sorcerer and Blackarrow spike in PvP spacing wars. Mercenary stays the best teacher. Shadowstrix rewards hunters who already understand third-party timing.",
      },
      {
        heading: "Switching classes",
        body: "You can change class direction, but expect to rebuild progression for the new kit. Master one stance pair before spreading talent points across every fantasy build.",
      },
    ],
  },
  {
    slug: "camp-upgrades",
    title: "Camp Upgrades & Gyldenblood",
    category: "Progression",
    readTime: "5 min",
    excerpt:
      "What to prioritize between successful extracts so your account power compounds instead of resetting.",
    heroImage: {
      src: "/images/mistfall/ss-5.jpg",
      alt: "Mistfall Hunter camp upgrades guide",
    },
    seoKeywords: ["camp upgrades", "Gyldenblood", "progression"],
    content: [
      {
        heading: "Bank before you dream",
        body: "Every successful extract should end at camp with banking first. Requeueing with your entire stash equipped is how one bad Brandrgarde run erases an evening.",
      },
      {
        heading: "Upgrade order that works",
        body: "Fund quality-of-life and extract reliability before vanity. One strong weapon with a readable affix outperforms a scattered semi-upgraded set. Keep a budget kit ready for learning lobbies.",
      },
      {
        heading: "Gyldenblood discipline",
        body: "Treat Gyldenblood as account XP fuel. Consistent Hallowgrove extracts beat rare heroic deaths. When clearance gates open Brandrgarde, bring kits sized to the risk.",
      },
    ],
  },
];

export function getGuideBySlug(slug: string): MistfallGuide | undefined {
  return mistfallGuides.find((g) => g.slug === slug);
}
