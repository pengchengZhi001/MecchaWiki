import type { Guide } from "./types";

export const cheatersFairPlayGuide: Guide = {
  slug: "cheaters-fair-play-guide",
  title: "Cheaters, ESP & Fair Play — Community Response Guide",
  category: "Fair Play",
  readTime: "8 min",
  excerpt:
    "Steam Discussions report ESP overlays, wall tags, and external trainers. What players describe, risks cheaters face, and how hosts keep lobbies playable without unsourced anti-cheat claims.",
  sources: [
    {
      name: "Steam Discussions — This game is being destroyed by ESP cheaters",
      url: "https://steamcommunity.com/app/4704690/discussions/0/571541539431627945/",
    },
    {
      name: "Steam Discussions — BUG! ESP / shoot through walls",
      url: "https://steamcommunity.com/app/4704690/discussions/0/571541224065866728/",
    },
    {
      name: "allthings.how — External hacks risks (2026)",
      url: "https://allthings.how/meccha-chameleon-hacks-explained-cheat-features-and-real-risks-2026/",
    },
    {
      name: "consolepcgaming.com — v1.7.0 report feature",
      url: "https://consolepcgaming.com/osaka-arrives-in-meccha-chameleons-1-7-0-update/",
    },
  ],
  content: [
    {
      id: "scale-of-problem",
      heading: "What Steam Players Are Reporting",
      body: "Launch-week Steam Discussions threads complain about ESP-style advantages — seekers tagging hiders instantly through walls or tracking positions without line-of-sight scans. Thread titles include \"This game is being destroyed by ESP cheaters\" and bug reports where players see all positions after a broken map transfer, describing the experience as indistinguishable from cheats. Community volume spiked alongside the game's SteamDB peak of 244k concurrent players (Kotaku, June 2026). Volume does not prove every suspicious tag is third-party software — geometry bugs and noclip vantage points produce similar frustration — but the topic is among the most debated fairness issues in public lobbies.",
    },
    {
      id: "external-tools",
      heading: "External Trainers & Overlays — Documented Risks",
      body: "Third-party sites and public GitHub repos advertise external ESP boxes, memory trainers, and no-clip toggles for the Steam PC build. allthings.how's 2026 explainer states these tools are unofficial, not endorsed by the developer, and carry ban risk, antivirus flags, desync, and profile corruption. Listings contradict each other on detection — some claim no kernel anti-cheat means zero risk; others warn public use triggers reports. Treat any download promising seeker vision hacks or instant wins as high-risk to your Steam account regardless of seller claims.",
    },
    {
      id: "tell-legitimate-bug",
      heading: "Cheats vs Broken Session State",
      body: "Before accusing a player, distinguish patterns. Broken geometry sessions (see Noclip & Exploits Guide) can expose every position without installed cheats — usually one player stuck in a void map while others see normal walls. External ESP often shows as consistent wall tags round after round on official maps with no loading glitch. Accidental noclip bird's-eye is a single seeker abusing angles; ESP suspicions involve tags through multiple solid rooms from floor level. When unsure, leave the lobby — public arguments rarely resolve technical ambiguity.",
    },
    {
      id: "community-debate",
      heading: "Anti-Cheat Debate in Steam Threads",
      body: "The ESP cheaters thread includes a long debate: some players demand stronger anti-cheat; others argue kernel-level solutions are disproportionate for a casual hide-and-seek title and could harm Linux or Steam Deck compatibility. Repeated community compromise: kick or leave servers with obvious cheaters; use private password rooms; report via in-game tools when available. This guide reflects that player consensus — not a developer roadmap.",
    },
    {
      id: "report-v170",
      heading: "v1.7.0 Reporting — Use When Available",
      body: "Patch coverage for v1.7.0 (June 22, 2026) documents an in-game report feature alongside the Osaka map (consolepcgaming.com). Update all clients before expecting the menu entry. Reporting documents repeat offenders for developer review — it does not instant-ban in your lobby. Combine reports with host actions: change password, recreate room, move friend group to a fresh private session. See Public Lobby Guide for moderation gaps that still exist at community report time.",
    },
    {
      id: "host-playbook",
      heading: "Host Playbook for Cleaner Sessions",
      body: "Password private lobbies with friends on the same patch version. Ban repeat griefers by recreating rooms — persistent ban systems were not widely reported at launch. Watch for seekers who never crouch-sweep yet tag deep hides instantly three rounds running. For streamers: delay sharing server names until house rules are stated; public viewers occasionally join with external tools when audience size spikes. Peak-hour public Basic mode also suffers seeker shortages — unrelated to cheats but compounds frustration when one bad actor remains.",
    },
    {
      id: "what-not-to-do",
      heading: "What Fair Players Avoid",
      body: "Do not install external trainers \"just to test\" in public matches — threads and explainer articles document account and malware risk. Do not stay in broken geometry lobbies while tagging through walls — you may be reported even if the bug triggered accidentally. Do not accuse without pattern evidence; false callouts poison voice chat in a game built on social deception. Teach new players silhouette and sampling fundamentals instead of chasing cheat counters.",
    },
    {
      id: "related-guides",
      heading: "Related Reading",
      body: "Geometry abuse overlaps with this topic — read Noclip & Exploits Guide for bird's-eye and prop immortality reports. Public Lobby Guide covers griefing, spectator leaks, and toxicity. Private Lobby Guide plus Can't Join Lobby fix guide keep friend groups off random matchmaking where cheat and exploit rates concentrate. Fair hide-and-seek still works when groups control who enters the room.",
    },
  ],
};
