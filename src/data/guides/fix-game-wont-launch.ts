import type { Guide } from "./types";

export const fixGameWontLaunchGuide: Guide = {
  slug: "fix-game-wont-launch",
  title: "Meccha Chameleon Won't Launch or Crashes on Startup — Fix Guide",
  category: "Fix",
  readTime: "10 min",
  excerpt:
    "Game crashes before the menu, won't start from Steam, or closes instantly on launch — verify files, -dx11, Visual C++ runtimes, antivirus blocks, and auth token vs hard crash.",
  seoKeywords: [
    "won't launch",
    "crash on startup",
    "not starting",
    "game won't open",
    "instant crash",
    "PenguinHotel.exe",
    "directx 11",
    "verify integrity",
  ],
  heroImage: {
    src: "/images/maps/steam-4.jpg",
    alt: "MECCHA CHAMELEON Sewer map — launch crashes often trace to GPU driver or corrupted files",
    caption: "Try Verify Integrity and -dx11 before reinstalling — most launch crashes are fixable.",
  },
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
      name: "MECCHA CHAMELEON on Steam (App 4704690)",
      url: "https://store.steampowered.com/app/4704690/MECCHA_CHAMELEON/",
    },
  ],
  content: [
    {
      id: "crash-vs-auth",
      heading: "Hard Crash vs Authentication Token Error",
      body: "Launch failures split into two buckets. Hard crash: the game process starts then closes with no menu, Windows error dialog, or black screen that never reaches lobby. Authentication token: a login dialog appears, then \"Failed due to invalid or missing authentication token\" blocks entry — that is Epic Online Services (EOS), not a corrupted install. If you see token wording, follow the Authentication Token fix guide first; reinstalling rarely helps EOS handshake failures. This guide covers hard crashes, silent exits, and crashes that happen before you can join a room.",
    },
    {
      id: "verify-first",
      heading: "Step 1 — Verify Game Files (Always First)",
      image: {
        src: "/images/maps/steam-0.jpg",
        alt: "MECCHA CHAMELEON Mansion — corrupted downloads cause instant crashes before any map loads",
        caption: "Steam → Library → right-click MECCHA CHAMELEON → Properties → Installed Files → Verify integrity.",
      },
      body: "Steam library → right-click MECCHA CHAMELEON → Properties → Installed Files → Verify integrity of game files. Partial or interrupted downloads are the most common cause of instant crashes on first launch and after patch day. Wait for verification to finish completely before relaunching. Launch from the Steam library — not a desktop shortcut to an old PenguinHotel.exe path from a previous install location.",
    },
    {
      id: "dx11-launch",
      heading: "Step 2 — Force DirectX 11 Launch Option",
      body: "Steam Discussions tie -dx11 to both auth stability and shader compilation crashes on DirectX 12 defaults. Right-click MECCHA CHAMELEON in Steam → Properties → General → Launch Options → type -dx11 exactly (no quotes). Fully exit Steam after saving, reopen, and launch. Many Windows players report the game only reaches menu after this change. If -dx11 alone fixes launch, keep it through multiplayer sessions — removing it can reintroduce crashes after patches.",
    },
    {
      id: "exe-compatibility",
      heading: "Step 3 — PenguinHotel.exe Compatibility",
      body: "Navigate to your Steam install folder → steamapps → common → MECCHA CHAMELEON → right-click PenguinHotel.exe → Properties → Compatibility. Uncheck Run this program as administrator. Check Disable fullscreen optimizations. Apply and launch from Steam again. Running the .exe as administrator breaks EOS identity on some PCs — community auth threads report the opposite of what players expect. Do not pin a standalone .exe shortcut that bypasses Steam DRM sync.",
    },
    {
      id: "vc-runtime",
      heading: "Step 4 — Visual C++ Redistributables & GPU Drivers",
      body: "Crash dialogs mentioning VCRUNTIME140.dll, MSVCP140.dll, or missing runtime libraries need Microsoft Visual C++ 2015–2022 Redistributable (x64) repaired or reinstalled from Microsoft's official download page. Update GPU drivers through NVIDIA GeForce Experience, AMD Adrenalin, or Intel Arc — UE5 launch crashes on outdated drivers are common on day-one purchases. After driver updates, reboot before testing launch again.",
    },
    {
      id: "antivirus-smart-app",
      heading: "Step 5 — Antivirus & Smart App Control",
      body: "Windows Smart App Control and aggressive third-party antivirus sometimes block new Steam executables during viral launch weeks. Add your Steam library folder and the MECCHA CHAMELEON install directory to exclusions, or temporarily disable real-time scanning to test one launch. If the game starts with antivirus off, create a permanent exclusion rather than leaving protection disabled. Steam itself should stay allowed through firewall — block only after simpler fixes fail.",
    },
    {
      id: "system-clock",
      heading: "Step 6 — Sync Windows Date & Time",
      body: "Incorrect system clock breaks Steam certificate validation and EOS token exchange — symptoms look like crash-at-login rather than obvious clock errors. Settings → Time & Language → Date & time → enable Set time automatically and Set time zone automatically. Click Sync now under additional settings. Restart PC after sync. This step costs thirty seconds and fixes auth-adjacent launch failures players mislabel as crashes.",
    },
    {
      id: "after-patch",
      heading: "Crashes After a Steam Update",
      body: "Patch day pattern: game worked yesterday, crashes today. Everyone on the new build should verify files, add -dx11 if not already set, and wait for Steam Downloads to show zero pending bytes. Do not join friends until launch succeeds solo — version mismatch mid-debugging wastes time. See Problems After Update checklist for the full patch-week order: close game → restart Steam → verify → fresh test on Mansion offline menu load.",
    },
    {
      id: "reinstall-last",
      heading: "When to Reinstall (Last Resort)",
      body: "Reinstall only after: verify files completed, -dx11 tested, compatibility flags set, VC++ repaired, drivers updated, and auth token guide ruled out if login errors appeared. Uninstall through Steam (keeps saves if cloud-enabled), restart PC, reinstall, let download finish without pausing, launch once before inviting friends. If reinstall fails identically, the issue is likely account-level EOS linking — return to auth token relink workflow on epicgames.com, not another reinstall loop.",
    },
    {
      id: "launch-success-next",
      heading: "Launch Works — What to Do Next",
      body: "Accept any EULA prompt on first successful boot — both friends must accept current terms before shared lobbies work. Skim the First Match Checklist before inviting anyone: controls, Mansion map choice, workshop subscription rules. If multiplayer fails but solo menu loads, you have a lobby issue not a launch issue — jump to Can't Join Lobby guide. New players: Getting Started help → Controls guide → How to Play beginner guide forms the full onboarding path.",
    },
  ],
};
