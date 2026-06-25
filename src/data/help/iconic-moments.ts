import type { HelpTopic } from "./types";

export type IconicMoment = {
  id: string;
  title: string;
  description: string;
  map?: string;
  whyItWentViral: string;
  image?: { src: string; alt: string };
  watchUrl?: string;
  relatedHref?: string;
  relatedLabel?: string;
  tags?: string[];
};

export const iconicMoments: IconicMoment[] = [
  {
    id: "hidden-in-plain-sight-jet",
    title: "\"Would you have spotted me?\" — Hidden in Plain Sight",
    description:
      "A hider blends so cleanly into furniture that seekers stare directly at them and walk past. The reveal — \"I didn't even see her skin until now\" — captures the core fantasy of MECCHA CHAMELEON.",
    map: "Mansion",
    whyItWentViral:
      "TrueBeast's Short crossed 8M+ views in launch week because the payoff is instant: you think you'd spot them, then you wouldn't. Perfect clip format for TikTok and YouTube Shorts.",
    image: {
      src: "/images/spots/mansion-armchair-tuck.png",
      alt: "Armchair tuck hide — similar plain-sight blend concept",
    },
    watchUrl: "https://www.youtube.com/shorts/Mbtr2BUwuFw",
    tags: ["viral", "shorts", "plain sight"],
  },
  {
    id: "ceiling-every-round",
    title: "Ceiling Hide Every Single Round",
    description:
      "Streamer lobbies where one player repeatedly hides on ceiling pipes or pillars — and the seeker team falls for it every time. \"He just goes in the ceiling every round and we fall for it every single time.\"",
    map: "Mansion / Sewer",
    whyItWentViral:
      "Drift's group session with Grian, Gem, Scar, and others turned ceiling meta into a running joke. Viewers love repeatable strats that embarrass friends.",
    image: {
      src: "/images/spots/mansion-ceiling-pillar.jpg",
      alt: "Mansion ceiling pillar — the recurring ceiling meta spot",
    },
    watchUrl: "https://www.youtube.com/watch?v=08WJFEq_epw",
    tags: ["ceiling", "streamers", "funny"],
  },
  {
    id: "worst-paint-job-wins",
    title: "Worst Paint Job Still Wins",
    description:
      "A hider admits to \"the worst paint job of all time\" while standing next to a seeker — and still survives because positioning and stillness beat perfect brushes.",
    map: "Mansion",
    whyItWentViral:
      "Proves you do not need art-school camouflage to win. Teaches beginners that spot choice and freeze discipline matter more than flawless strokes.",
    image: {
      src: "/images/spots/mansion-kitchen-poster.jpg",
      alt: "Kitchen poster spot — messy paint can still work with good placement",
    },
    watchUrl: "https://www.youtube.com/watch?v=08WJFEq_epw",
    tags: ["funny", "beginner friendly"],
  },
  {
    id: "backrooms-become-the-wall",
    title: "Becoming the Backrooms Wall",
    description:
      "Reels and TikToks feature hiders who sample yellow wallpaper so precisely that seekers walk through identical halls without registering a player-shaped bump.",
    map: "Backrooms",
    whyItWentViral:
      "The Backrooms aesthetic was already internet-native; painting yourself into it feels like horror meme come true. Comments flood with \"dude actually went to the backrooms.\"",
    image: {
      src: "/images/spots/backrooms-bikes-wall.jpg",
      alt: "Backrooms bikes wall hide",
    },
    relatedHref: "/maps/backrooms",
    relatedLabel: "Backrooms map guide",
    tags: ["backrooms", "tiktok", "horror"],
  },
  {
    id: "sewer-pipe-maze",
    title: "Sewer Pipe Maze Overhead",
    description:
      "Overhead pipe networks where rust-green sampling disappears against metal — seekers look forward while hiders hug ceiling infrastructure.",
    map: "Sewer",
    whyItWentViral:
      "Verticality clips well on camera: FPP seeker POV vs TPP hider stuck to pipes creates tension standard floor hides lack.",
    image: {
      src: "/images/spots/sewer-ceiling-pipe-maze.png",
      alt: "Sewer ceiling pipe maze",
    },
    relatedHref: "/maps/sewer",
    relatedLabel: "Sewer map guide",
    tags: ["sewer", "ceiling", "competitive"],
  },
  {
    id: "horse-statue-mimic",
    title: "Horse Statue Prop Mimic",
    description:
      "Mansion's horse statue invites prop mimic poses — seekers tag the statue twice because the silhouette almost looks right, then laugh when the wrong stone shade gives it away.",
    map: "Mansion",
    whyItWentViral:
      "Classic prop hunt energy: funny first, competitive second. Great entry clip for viewers who know prop hunt from Garry's Mod or Fortnite.",
    image: {
      src: "/images/spots/mansion-horse-statue.jpg",
      alt: "Mansion horse statue hiding spot",
    },
    relatedHref: "/hidden-spots/mansion-horse-statue",
    relatedLabel: "Horse statue spot page",
    tags: ["funny", "prop mimic", "mansion"],
  },
  {
    id: "library-shelf-reveal",
    title: "Library Shelf Gap Reveal",
    description:
      "Seeker pulls books or scans rear rows — hider pressed between shelves with spine-colored paint becomes visible only when camera height drops to crouch.",
    map: "Mansion",
    whyItWentViral:
      "Satisfying \"how did I miss that\" moment. Teaches seekers to check rear gaps, teaches hiders that Library Shelf is database-grade meta.",
    image: {
      src: "/images/spots/mansion-library-shelf.jpg",
      alt: "Library shelf gap hide",
    },
    relatedHref: "/hidden-spots/mansion-library-shelf",
    relatedLabel: "Library Shelf spot page",
    tags: ["library", "reveal", "tutorial clip"],
  },
  {
    id: "penguin-hotel-ice",
    title: "Penguin Hotel Ice Sculpture Blend",
    description:
      "Ice-blue sampling on Penguin Hotel props — hiders mimic sculptures while seekers struggle with specular ice highlights.",
    map: "Penguin Hotel",
    whyItWentViral:
      "Map launch content wave: new palette + streamer first impressions. Ice zones produce pretty clips even when hides fail.",
    image: {
      src: "/images/maps/steam-7.jpg",
      alt: "Penguin Hotel map screenshot",
    },
    relatedHref: "/maps/penguin-hotel",
    relatedLabel: "Penguin Hotel map guide",
    tags: ["penguin hotel", "ice", "new map"],
  },
];

function mapLink(map?: string): { href: string; label: string } | undefined {
  if (!map || map.includes("/")) return undefined;
  const slug = map.toLowerCase().replace(/\s+/g, "-");
  return { href: `/maps/${slug}`, label: `${map} map guide` };
}

export const iconicMomentsTopic: HelpTopic = {
  slug: "iconic-moments",
  title: "Iconic Moments & Viral Clips Worth Watching",
  category: "Community",
  excerpt:
    "The funniest and most shared MECCHA CHAMELEON moments from launch week — ceiling meta, plain-sight blends, Backrooms walls, and streamer lobbies. Watch, then try the spots yourself.",
  heroImage: {
    src: "/images/spots/mansion-ceiling-pillar.jpg",
    alt: "Ceiling pillar hide — one of the most clipped moments in launch week",
    caption: "Ceiling hides dominated early viral clips — learn the counter on our seeker FAQ.",
  },
  items: iconicMoments.map((moment) => ({
    id: moment.id,
    question: moment.title,
    tags: moment.tags,
    image: moment.image,
    answer: [
      moment.description,
      moment.whyItWentViral,
      moment.map
        ? `Map: ${moment.map}. Try related spots in our hidden spot database or map guides.`
        : "",
      moment.watchUrl
        ? `Watch: ${moment.watchUrl}`
        : "Search the title on YouTube or TikTok for the latest reposts.",
    ].filter(Boolean),
    relatedLink:
      moment.relatedHref && moment.relatedLabel
        ? { href: moment.relatedHref, label: moment.relatedLabel }
        : mapLink(moment.map),
  })),
};
