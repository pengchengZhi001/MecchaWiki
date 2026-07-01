import type { HelpTopic } from "./types";

export const seekerFaqTopic: HelpTopic = {
  slug: "seeker-tips",
  title: "Seeker FAQ — Finding Hiders, Feints & Scan Patterns",
  category: "Seeker",
  excerpt:
    "Real seeker questions: sweep order, ceiling checks, telling decoys from props, audio tells, and when a \"obvious\" spot is actually bait.",
  heroImage: {
    src: "/images/spots/mansion-library-shelf.jpg",
    alt: "Library shelf spot — seekers must check rear rows, not just spine-facing angles",
  },
  items: [
    {
      id: "how-to-find-hiders",
      question: "How do I actually find hiders? I keep missing obvious ones.",
      tags: ["seeker", "find", "scan", "hunt"],
      image: {
        src: "/images/spots/mansion-library-shelf.jpg",
        alt: "Mansion library shelf hiding spot",
        caption: "Check rear shelf gaps at chest height AND crouch height — hiders tuck between rows.",
      },
      answer: [
        "Scan for value mismatch before shape. Seekers notice brightness differences faster than hue — a slightly green-gray hider on gray pipe still pops if they are too light.",
        "Use a three-pass sweep: chest-height horizontal pan, crouch low for baseboards and under furniture, then ceiling and overhang check on Sewer/Mansion vertical maps.",
        "Move slow enough to parse edges. Sprinting room-to-room skips the two-second freeze hiders use after emergency recolor — they survive because you overshoot.",
      ],
      relatedLink: {
        href: "/guides/hunter-guide",
        label: "Full hunter strategy guide",
      },
    },
    {
      id: "feints-decoys",
      question: "How do I tell a real hider from a decoy or prop?",
      tags: ["feint", "decoy", "fake", "prop"],
      answer: [
        "Props and furniture have consistent lighting and edges that meet the floor cleanly. Player mimics often show micro-gaps at the floor line, shoulder corners too rectangular for the prop, or specular highlights that do not match neighboring surfaces.",
        "Watch for props that \"almost\" match but sit at the wrong value — slightly brighter statue stone, slightly darker chair cushion. Compare adjacent props: real duplicates share wear; hiders rarely match two props identically.",
        "Feint baits: hiders let you glimpse movement leaving a room, then lock in the next room. Do not chase audio alone — confirm color edge on the wall they touched.",
      ],
    },
    {
      id: "ceiling-meta",
      question: "Should I always check ceilings?",
      tags: ["ceiling", "pipe", "vertical", "meta"],
      image: {
        src: "/images/spots/mansion-ceiling-pillar.jpg",
        alt: "Mansion ceiling pillar hide",
        caption: "Ceiling pillar spots punish seekers who never look up — but over-checking wastes time on floor-heavy lobbies.",
      },
      answer: [
        "On Sewer and Mansion, yes — ceiling pipes and pillar tops are community meta because default camera height skips them. Budget five seconds of upward pan per room.",
        "On Backrooms fluorescent halls, ceiling time is lower yield — prioritize chair stacks and office corners unless your lobby is ceiling-obsessed from viral clips.",
        "Adapt to lobby: if hiders die floor-first three rounds, they will climb. If you tag ceiling every round, they stop climbing — reset your pattern.",
      ],
      relatedLink: {
        href: "/hidden-spots/sewer-ceiling-pipe",
        label: "Sewer ceiling pipe spot breakdown",
      },
    },
    {
      id: "audio-tells",
      question: "What sounds give hiders away?",
      tags: ["audio", "footsteps", "sound", "listen"],
      answer: [
        "Tile and metal floors amplify footsteps — Mansion bathroom and Cold Storage aisles are audio minefields. Slow your own steps to listen.",
        "Ladder climbs, pose break releases, and last-second paint brush strokes have distinct cues. Headset users win ties when visual scan is ambiguous.",
        "Proximity voice from hiders laughing — mute-aware groups stay silent during hunt; public lobbies leak audio constantly.",
      ],
    },
    {
      id: "bait-spots",
      question: "Is that spot too obvious — am I walking into bait?",
      tags: ["bait", "obvious", "trap", "psychology"],
      answer: [
        "Obvious spots work in casual lobbies because seekers assume \"too easy.\" Horse statue, center prop, doorway flat — check them once, not three times while ignoring rear shelves.",
        "If a hider wanted you to look at the statue, the real hide is the shadow gap behind you. Sweep the room perimeter before re-inspecting meme props.",
        "Time pressure helps hiders: when 30 seconds remain, seekers rush and skip rear rows. Patient sweeps beat panic tags.",
      ],
    },
    {
      id: "black-paint-shadows",
      question: "How do I find hiders who paint pure black in deep shadows?",
      tags: ["black paint", "shadow", "illegal", "dark", "spray"],
      answer: [
        "Steam top reviews describe hiders wedging behind items with pure black paint as extremely hard to see — community calls these spots frustrating though not always geometry exploits.",
        "Counter: crouch-sweep shadow gaps and shelf backs after chest-height passes; compare floor-line edges where black blobs meet props; listen for pose-break audio when you pressure the zone.",
        "Hosts who want fewer shadow-camp rounds can enable hunter ammo limits (v2.3.0 optional setting) so seekers must confirm tells before tagging — see Hunter Ammo Limit guide.",
      ],
      relatedLink: {
        href: "/guides/hunter-ammo-limit-guide",
        label: "Hunter shot limit settings",
      },
    },
    {
      id: "ammo-limit-lobbies",
      question: "Our lobby enabled hunter ammo limits — how should I seek?",
      tags: ["ammo", "shot limit", "conservation", "tags"],
      answer: [
        "Treat every tag as a resource: value mismatch confirmation before click, not spray-and-pray on shadows.",
        "Prioritize single-approach choke points (Sewer junction, Cold Storage aisle mouths) where one confirmed tag clears rotation paths.",
        "Missed Spot data from the results screen shows which zones you skipped — pre-aim those next round instead of wasting shots on already-cleared rooms.",
      ],
      relatedLink: {
        href: "/guides/results-screen-guide",
        label: "Results screen & missed spots",
      },
    },
    {
      id: "team-coordination",
      question: "How should our seeker team split rooms?",
      tags: ["team", "coordination", "sweep", "voice"],
      answer: [
        "Assign zones, not identical paths — two seekers scanning the same bookshelf from the same angle miss the rear gap between rows.",
        "Call only confirmed tags or cleared rooms. Over-calling wastes teammate time rotating to already-empty space.",
        "One high scanner, one low scanner per room on vertical maps. Sewer junctions need one player watching cross-hall while the other clears pipe overhang.",
      ],
    },
  ],
};
