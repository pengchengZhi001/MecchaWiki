import type { HelpTopic } from "./types";

export const gettingStartedTopic: HelpTopic = {
  slug: "getting-started",
  title: "Download, Install & System Requirements",
  category: "Setup",
  excerpt:
    "How to buy and install MECCHA CHAMELEON on Steam, minimum PC specs, launch fixes, and what you need before your first match.",
  heroImage: {
    src: "/images/maps/steam-0.jpg",
    alt: "MECCHA CHAMELEON Mansion map screenshot from Steam",
    caption: "Official Steam screenshot — Mansion is the recommended first map.",
  },
  items: [
    {
      id: "how-to-download",
      question: "How do I download MECCHA CHAMELEON?",
      tags: ["download", "steam", "install", "buy"],
      image: {
        src: "/images/maps/steam-0.jpg",
        alt: "MECCHA CHAMELEON on Steam — Mansion gameplay screenshot",
        caption: "Purchase once on Steam (App ID 4704690) — no separate launcher.",
      },
      answer: [
        "MECCHA CHAMELEON is PC-only and sold exclusively on Steam. Search for \"MECCHA CHAMELEON\" in the Steam store or open App ID 4704690 directly. Click Add to Cart, complete checkout, and the game appears in your Steam Library.",
        "There is no official console or mobile version at launch. Avoid third-party \"free download\" or crack sites — they are not legitimate distribution and will not receive updates required for multiplayer.",
        "After purchase, click Install in your library. Steam downloads the game to your chosen drive. Launch from the library or pin it to your taskbar for quick access before friend sessions.",
      ],
      relatedLink: {
        href: "https://store.steampowered.com/app/4704690/MECCHA_CHAMELEON/",
        label: "Official Steam store page",
      },
    },
    {
      id: "system-requirements",
      question: "What are the minimum system requirements?",
      tags: ["specs", "requirements", "pc", "windows"],
      answer: [
        "Steam lists Windows 10 64-bit as the minimum operating system, an Intel Core i5–class processor, and a DirectX 11 or DirectX 12 compatible graphics card. The game is not cross-platform — everyone in your lobby needs the Steam PC build.",
        "For comfortable multiplayer hosting, close heavy background apps (OBS, Chrome with dozens of tabs, other capture tools) if you are both hosting and streaming. The developer recommends 2–10 players per room for stable sessions; larger lobbies depend on the host's network.",
        "If paint edges or seeker silhouettes feel hard to read, lower graphics settings before assuming your GPU is too weak — readability matters more than max texture quality for competitive rounds.",
      ],
    },
    {
      id: "game-wont-launch",
      question: "The game won't launch or crashes on startup — what should I try?",
      tags: ["crash", "launch", "directx", "fix"],
      answer: [
        "Start with Steam's Verify Integrity of Game Files (right-click the game → Properties → Installed Files). Corrupted downloads are a common cause of instant crashes.",
        "Many Windows players fix launch failures by forcing DirectX 11: right-click the game in Steam → Properties → Launch Options → enter -dx11. Restart Steam after changing launch options.",
        "If Smart App Control or aggressive antivirus blocks the executable, allow the game folder or run Steam as administrator once to test. Repair Microsoft Visual C++ Redistributables if the crash mentions missing runtime DLLs.",
        "Sync Windows date and time if Steam authentication fails at startup — incorrect system clock can block online features even when offline play seems fine.",
      ],
      relatedLink: {
        href: "/help/troubleshooting",
        label: "Connection & room issue checklist",
      },
    },
    {
      id: "first-launch-checklist",
      question: "What should I do before my first online match?",
      tags: ["beginner", "first time", "checklist"],
      image: {
        src: "/images/spots/mansion-bathroom-tiles.jpg",
        alt: "Mansion bathroom tile hiding spot — good first map for learning color sampling",
        caption: "Mansion bathroom tiles are a classic first practice zone for eyedropper sampling.",
      },
      answer: [
        "Let Steam finish any day-one patch before inviting friends — multiplayer requires every player on the same build.",
        "Open Settings → Controls and confirm paint (F), pose (R), and movement keys. Rebind anything awkward in a private lobby before public chaos.",
        "Queue Mansion for your first rounds. Large color blocks and readable rooms teach sampling faster than Sewer or Backrooms.",
        "Skim the controls and painting help pages on this site, then browse one or two high-rated Mansion spots so you have a destination during prep phase instead of panicking in the open.",
      ],
      relatedLink: {
        href: "/guides/beginner-basics",
        label: "Full beginner hiding guide",
      },
    },
  ],
};
