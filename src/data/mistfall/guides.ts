import type { MistfallGuide } from "./types";

export const mistfallGuides: MistfallGuide[] = [
  {
    slug: "soul-harvest",
    title: "Soul Harvest Event Guide",
    category: "Season 1",
    readTime: "8 min",
    excerpt:
      "It is not a queue. Soul Harvest rolls into ordinary Hallowgrove and Brandrgarde matches: Cocoons, resonance, Richie cash-out, and the Soulgnawer ritual.",
    heroImage: {
      src: "/images/mistfall/ss-3.jpg",
      alt: "Soul Harvest ritual in a Mistfall Hunter extraction match",
    },
    seoKeywords: [
      "Soul Harvest",
      "Soulgnawer",
      "Soul Cocoon",
      "Mistchaser Shop",
    ],
    content: [
      {
        heading: "What Soul Harvest actually is",
        body: "Soul Harvest went live with the August 12, 2026 client update. It is a Season 1 ritual that can trigger inside a normal extraction match — not a separate playlist. Higher Gyldening Intensity raises the chance, so the difficulty you already pick is the spawn dial. When it fires, Soul Incubators drop Soul Cocoons and a Fate Altar appears on the map. Dew frames the operation as mending the Web of Fate; you still have to extract with whatever you earn.",
      },
      {
        heading: "Cocoons, resonance, and why people hunt you",
        body: "Carrying a Soul Cocoon is a two-way ping. You see every other Cocoon on the map, and every other carrier sees you. There is no opt-out while you hold one. That is why Steam and Discord threads treat the event as a PvP hotspot rather than a PvE side objective — the map tells hunters where the bag is.",
        image: {
          src: "/images/mistfall/ss-5.jpg",
          alt: "Soul Cocoon resonance turning a match into a hunt",
        },
      },
      {
        heading: "Safe cash-out: Richie",
        body: "One Soul Cocoon handed to Richie, the in-match merchant, pays a team reward. That is the consistent farm: grab a spare, sell it, keep moving, extract. Solo and budget kits should default here. Do not walk a Cocoon across open ground if you already have a Soul of Return and a full bag — the resonance ping is louder than most loot.",
      },
      {
        heading: "High-risk: Fate Altar and Soulgnawer",
        body: "Two Cocoons submitted at the Fate Altar start the ritual after the match has been running for a while. Completing it requires killing the Soulgnawer — a loud, stationary elite with a serpentine lower body who disrupts the prayer. Official notes tell you to watch for third parties during this fight. Treat it like an extraction bell: commit only if your squad can hold the altar and still leave on time. Starting the ritual with a few minutes left is how bags die on the floor.",
      },
      {
        heading: "What to buy first",
        body: "Event tokens spend at the Mistchaser / Soul Harvest Exchange Shop. Official posts name exclusive collectibles, Soul Coins, Moonlight Nectar, and a season-exclusive Holy-quality Soulbound Serpent Crystal. Prioritize Moonlight Nectar and guaranteed Holy / material chests before gambling bags. The August 15 server post also stocked Moonlight Nectar and a Legendary Material Selection Chest on the Fate Chart Shop — check both if you last looked before that date.",
      },
    ],
  },
  {
    slug: "august-patch-and-lag",
    title: "August Patch Notes, Lag, and Known Issues",
    category: "Updates",
    readTime: "9 min",
    excerpt:
      "What shipped on August 6, 12, and 15: Soul Harvest, the first real class pass, server stutter from cloud CPU hyper-threading, and what is still open.",
    heroImage: {
      src: "/images/mistfall/ss-4.jpg",
      alt: "Mistfall Hunter August 2026 patch and stability status",
    },
    seoKeywords: [
      "patch notes",
      "lag",
      "desync",
      "known issues",
      "August 12 update",
    ],
    content: [
      {
        heading: "Current live client",
        body: "As of mid-August 2026 the last gameplay client is the August 12 live update (08:00 UTC, no downtime — update from Steam, PlayStation, or Xbox). August 13–15 were server-side configuration changes with nothing to download. Claim window still open as of the 15th: Moonlight Nectar ×5, Pro Combat Bag ×2, and Advanced Combat Bag ×2 via in-game mail until August 22, 2026 00:00 UTC. That mail is separate from the 1,000,000-player Wave 3 grant that already closed on the 12th.",
      },
      {
        heading: "Why fights still teleport",
        body: "Launch-week Steam, Reddit, and Discord reports cluster on hitching, input delay, desync, rubber-banding, and character teleport. August 12 claimed client hitching and stuttering fixes plus select server-side lag work. Three days later Bellring named a remaining cause: cloud server CPU hyper-threading. Their own monitoring says stutters are less frequent, and they still call performance the highest priority. Treat that as a direction of travel, not a closed case. A sudden death with a clean kit is often the server, not your build.",
      },
      {
        heading: "What you can actually do about it",
        body: "Client-side: install on an SSD, update GPU drivers, drop shadows / volumetric fog / particles, cap FPS to your display, and prefer DLSS or FSR over native 4K in mist-heavy maps. Some players report fewer scene-switch hitches on DirectX 11 via the Steam launch option -dx11 — test it; it is not an official requirement. Network-side: do not take expensive kits into a lobby where ping is already jumping. Skip Soul Tomb / Fate Altar commits when the match already feels rubbery. Report repeatable crashes in-game so server logs can pair with the clip.",
      },
      {
        heading: "Class pass that actually moved the meta",
        body: "August 12 is the first post-launch pass that reads as tuning rather than bug-fixing. Blackarrow and Sorcerer lost solo-mode PvP damage only — PvE and trio PvP are unchanged. Blackarrow also took cooldown increases on Mysticfly / Steel Arrow and Dodge Power Shot, with Sonic Arrow cooldown cut. Sorcerer fire tools were redistributed toward direct damage; Crystal Icebolt cooldown went up and Deep Freeze impact went down. Shadowstrix Super Armor and Battle Frenzy piercing dropped, but Wound Accumulation detonates at 8 stacks and Aftereffect went up. Mercenary was the only class left untouched. Across every kit: DoT ticks less often for the same total, and Eloquence high-tier anti-interrupt cooldown went from 10s to 15s.",
      },
      {
        heading: "Fair play, illegal teaming, and solo mode",
        body: "Cheating is a permanent account plus device ban. Illegal Teaming is narrower than the first translated posts: it means players deliberately entering the same match to stack against others, not a temporary truce with a stranger you met in the mist. First teaming hits are matchmaking suspensions. Brandrgarde Solo Mode for Normal and Cataclysm is officially targeted at mid-Season 1 in September — Bellring already warned it will split queues and create new solo-balance problems. Until then, Hallowgrove remains the honest solo farm.",
      },
    ],
  },
  {
    slug: "einherjar-mist-lord",
    title: "Einherjar Mode & Dried Flower Knots",
    category: "Endgame",
    readTime: "6 min",
    excerpt:
      "Knot-gated Mist Lord challenges from the August 6 update: what is official, what old videos get wrong, and how to spend a Knot without bricking it.",
    heroImage: {
      src: "/images/mistfall/ss-1.jpg",
      alt: "Einherjar Mist Lord challenge in Mistfall Hunter",
    },
    seoKeywords: [
      "Einherjar",
      "Dried Flower Knot",
      "Mist Lord",
      "Holy weapons",
    ],
    content: [
      {
        heading: "Three things named Einherjar",
        body: "Einherjar Mode is the Knot-gated Mist Lord challenge that opened on August 6, 2026. Einherjar Ship Grave is a key-locked Hallowgrove room north-west of the Watchtower — a location, not a difficulty. Playtest footage from 2025 used Einherjar as an enrage the boss entered if you were too slow; that auto-enrage is not the launch system. Check upload dates before copying a hard-mode video.",
      },
      {
        heading: "What you need",
        body: "A Dried Flower Knot of legendary rarity now drops in ordinary runs. Named Mist Lords include Sálmar the Cursed Moonwane, Otto the Flesheater, and General Harald. Official notes say defeating them in Einherjar Mode carries a higher chance of Holy Weapons or Holy Forging Materials — they never published a rate. Budget as if a wipe consumes the Knot until your own runs prove otherwise.",
      },
      {
        heading: "How to spend a Knot",
        body: "Holy items sit beside the colour ramp with exclusive affixes, and each boss holds its own weapon rather than a shared lottery — so pick the Lord whose drop you actually want. They are still extraction loot: a Holy hammer you do not bank belongs to whoever kills you on the way out. Do not spend a Knot on a loud Cataclysm contest unless the squad can extract. Auction value can justify farming a weapon you will not wear, but only after you can leave on command.",
      },
      {
        heading: "Do not confuse the door key",
        body: "A key whose name includes Einherjar Ship Grave opens that room. It is not a Dried Flower Knot and it does not start Einherjar Mode. If a Knot in your bag will not activate anything, you are probably looking at the wrong prompt — or watching a pre-launch clip of the old enrage.",
      },
    ],
  },
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
    readTime: "7 min",
    excerpt:
      "Post-August 12 rankings: solo PvP cuts on Blackarrow and Sorcerer, Range Seer rising in 1v1, Stardust still the 3v3 problem.",
    heroImage: {
      src: "/images/mistfall/ss-4.jpg",
      alt: "Mistfall Hunter class tier list after August 12 balance",
    },
    seoKeywords: ["tier list", "best class", "class ranking", "August 12"],
    content: [
      {
        heading: "How to read this list",
        body: "Tiers are for the live August 12 client, not Open Beta. The pass cut solo-mode PvP damage on Blackarrow and Sorcerer only — trio PvP and PvE were left alone — so a class can be A in solo and S in a stacked 3v3. Beginner rank still matters more than S-tier labels for your first week.",
      },
      {
        heading: "Beginner priority",
        body: "1) Mercenary 2) Seer 3) Blackarrow 4) Sorcerer 5) Withered Knight 6) Shadowstrix. Mercenary was the only class the August 12 pass did not touch. Learn extract timing on forgiving kits before investing rare gems into assassins.",
      },
      {
        heading: "Solo and 1v1 after the nerfs",
        body: "Blackarrow is no longer the default solo delete: Mysticfly and Steel Arrow cooldowns went up, Dodge Power Shot is slower, and the solo PvP multiplier dropped. Play it as spacing and reserved burst, not a cooldown blender. Sorcerer lost solo PvP damage plus Crystal Icebolt uptime and Deep Freeze impact — still dangerous, worse at winning the first duel. Community 1v1 threads now name Range Seer and melee parry kits as the matchups to learn. Shadowstrix Super Armor and piercing were cut, but Wound Accumulation detonates at 8 stacks; it is a timing class again rather than a deleted one.",
      },
      {
        heading: "3v3 snapshot",
        body: "Stardust Sorcerer remains the stacked-team problem even after fire tools were redistributed toward direct damage. Seer still wins organized extracts. Withered Knight holds Soul Trees once parry windows click — August 6–12 were mostly energy and cancel bugs, not a gut. Mercenary stays the teacher. Do not rebuild an entire stash around a YouTube clip filmed before August 12.",
      },
      {
        heading: "Switching classes",
        body: "You can change class direction, but expect to rebuild progression for the new kit. Master one stance pair before spreading talent points across every fantasy build. Eloquence high-tier anti-interrupt went from a 10-second cooldown to 15 — if a copied loadout treated Eloquence 5 as mandatory, retest it on this patch.",
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
