import type { Guide } from "./types";

export const fixAuthenticationTokenGuide: Guide = {
  slug: "fix-authentication-token",
  title: "How to Fix Authentication Token Error in Meccha Chameleon",
  category: "Fix",
  readTime: "7 min",
  excerpt:
    "\"Failed due to invalid or missing authentication token\" — fixes reported on Steam General Discussions: DirectX 11 launch option, Epic account relink, PenguinHotel.exe compatibility, and network blockers.",
  sources: [
    {
      name: "Steam Discussions — invalid authentication token thread",
      url: "https://steamcommunity.com/app/4704690/discussions/0/572666820170126195/",
    },
    {
      name: "Steam Discussions — Error Failed Due To Invalid Or Missing Authentication Token",
      url: "https://steamcommunity.com/app/4704690/discussions/0/572666820169827651/",
    },
    {
      name: "Steam Discussions — relink Epic account fix",
      url: "https://steamcommunity.com/app/4704690/discussions/0/571541539431582929/",
    },
  ],
  content: [
    {
      id: "what-error-means",
      heading: "What the Error Means",
      body: "The message \"Failed due to invalid or missing authentication token for user (e.g. not logged in)\" appears at launch or login. Steam players report the game crashing on startup, asking to log in, then failing — sometimes after a fresh purchase. The game uses Epic Online Services (EOS) for identity even on Steam; when the Steam ↔ EOS handshake fails, the client cannot obtain a valid token and blocks access.",
    },
    {
      id: "dx11-fix",
      heading: "Fix 1 — Force DirectX 11 (Most Reported Success)",
      body: "Multiple Steam users report DX12 instability and auth/login failures fixed by forcing DX11. Steps confirmed in thread replies: open Steam → Library → right-click MECCHA CHAMELEON → Properties → General tab → Launch Options → type exactly: -dx11 → close Properties and relaunch from Steam. Thread author AlphaSohier notes DX12 is \"very unstable on this game\" and this fixed it for them and others. Some players needed additional steps alongside -dx11.",
    },
    {
      id: "epic-relink",
      heading: "Fix 2 — Relink Steam on Epic Games Website",
      body: "A Steam discussion reply with detailed steps: open epicgames.com in a browser → Account Settings → Apps and Accounts → Accounts section. If Steam is already linked, disconnect/remove it, then connect Steam again and confirm on the Steam login page. Restart the computer, launch Steam, then launch MECCHA CHAMELEON from the library. This addresses broken EOS account links that block token generation.",
    },
    {
      id: "compatibility",
      heading: "Fix 3 — PenguinHotel.exe Compatibility Settings",
      body: "Steam users report fixing auth errors via local files: Steam → MECCHA CHAMELEON → Manage → Browse local files → right-click PenguinHotel.exe → Properties → Compatibility tab → uncheck \"Run this program as an administrator\" → check \"Disable fullscreen optimizations\" → Apply. Multiple thread replies confirm this combination worked when login kept failing. One user also noted unchecking \"Run in compatibility mode\" if it was enabled.",
    },
    {
      id: "network-blockers",
      heading: "Fix 4 — Network and DNS Blockers",
      body: "Steam user elburD reported: \"It looks like there's a network problem, because it works when I connect via mobile internet.\" Another user (cozje) fixed login by disabling Pi-hole until logged in — DNS/ad blockers can interrupt EOS auth. If home network fails but mobile hotspot works, check router DNS filters, Pi-hole, corporate VPN, or proxy settings before blaming the game.",
    },
    {
      id: "proxy-reset",
      heading: "Fix 5 — Reset Windows Proxy (Community Guide Step)",
      body: "Community fix articles recommend running in an Administrator Command Prompt: netsh winhttp reset proxy — then restart the PC. Pair with ipconfig /flushdns if connectivity was recently changed. These are lower-confidence than -dx11 and Epic relink but appear in aggregated fix guides alongside the Steam thread fixes.",
    },
    {
      id: "when-to-stop",
      heading: "When Fixes Stop Helping",
      body: "If -dx11, Epic relink, compatibility settings, and network checks all fail on multiple networks, check Steam Community announcements for server outages during launch windows. Verify game files on Steam and confirm Windows date/time is synced — some auth systems reject tokens when the system clock is wrong. Document which step changed behavior before trying deeper network changes.",
    },
  ],
};
