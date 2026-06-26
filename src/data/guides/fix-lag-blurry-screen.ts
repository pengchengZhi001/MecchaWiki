import type { Guide } from "./types";

export const fixLagBlurryScreenGuide: Guide = {
  slug: "fix-lag-blurry-screen",
  title: "Meccha Chameleon Lag & Blurry Screen Fix Guide",
  category: "Fix",
  readTime: "9 min",
  excerpt:
    "Stuttering, FPS drops, and blurry paint textures — community-tested fixes: display mode reset, DirectX 11, graphics presets, and Windows scaling.",
  sources: [
    {
      name: "PixelNitro — Stuttering, frame drops, and blurry paint textures",
      url: "https://pixelnitro.com/how-to-fix-meccha-chameleon-stuttering-frame-drops-and-blurry-paint-textures/",
    },
    {
      name: "PixelNitro — Low FPS, lagging, and connection errors",
      url: "https://pixelnitro.com/how-to-fix-meccha-chameleon-low-fps-lagging-and-connection-errors-on-pc/",
    },
    {
      name: "Steam Discussions — -dx11 stability fix",
      url: "https://steamcommunity.com/app/4704690/discussions/0/572666820170126195/",
    },
  ],
  content: [
    {
      id: "reported-issues",
      heading: "What Players Report",
      body: "Launch-week community threads describe stuttering, sudden FPS drops (e.g. 120 → 60 during active rounds), blurry paint textures that look like compressed video rather than native rendering, and general hitching on Unreal Engine 5. These issues directly hurt gameplay because paint accuracy and seeker visibility depend on sharp textures and stable frame times.",
    },
    {
      id: "blurry-display-reset",
      heading: "Blurry Textures — Display Mode Reset",
      body: "PixelNitro testing reports blurry paint often relates to resolution scaling or incorrect display initialization at launch. Recommended sequence: launch game → open Graphics Settings → change Screen Mode to Windowed → Apply → wait several seconds → switch back to Fullscreen → confirm native monitor resolution is selected. This reset restored proper texture rendering for multiple testers. Also confirm in-game resolution matches your monitor's native resolution — mismatched resolution scaling produces soft, blurry surfaces that break eyedropper accuracy.",
    },
    {
      id: "dx11",
      heading: "Stuttering — Switch to DirectX 11",
      body: "Community reports and PixelNitro agree: MECCHA CHAMELEON defaults to DirectX 12 but many PCs get shader compilation stutters and high GPU load on DX12. Steam Launch Options fix: Properties → Launch Options → enter -dx11. Steam auth threads also tie -dx11 to broader stability improvements. This is consistently cited as the fastest noticeable fix for frame inconsistency.",
    },
    {
      id: "recommended-settings",
      heading: "Recommended Graphics Settings (Community Testing)",
      body: "PixelNitro compiled settings that improved stability while keeping visuals readable: Screen Mode Fullscreen, Resolution at native, Global Illumination Medium (not max), Texture Quality High, Shadow Quality Medium, Anti-Aliasing High, Motion Blur Off, Effects Quality Medium. Worldeka and PixelNitro both recommend turning Motion Blur off — it helps seekers spot disguised players and reduces visual smear. Lower Global Illumination from highest presets to High or Medium if stutters persist.",
    },
    {
      id: "windows-scaling",
      heading: "Windows Display Scaling (100%)",
      body: "Fix guides report eyedropper and paint bugs tied to Windows display scaling above 100%. Right-click desktop → Display settings → Scale and layout → set to 100% if you use 125% or 150% scaling. Some players also switch from Exclusive Fullscreen to Borderless Windowed when the color picker misaligns — test both if paint tools feel offset.",
    },
    {
      id: "drivers-cache",
      heading: "Drivers, Shader Cache, and Verification",
      body: "Community optimization guides recommend: verify game files on Steam, clear shader cache if stuttering persists after driver updates, perform a clean GPU driver install, disable Discord/Steam overlay temporarily to test, set Windows power plan to High Performance. Order used by multiple guides: update game → verify files → clear shader cache → disable overlays → lower shadows/post-processing → fullscreen → update drivers → test -dx11 → restart before launch.",
    },
    {
      id: "network-lag",
      heading: "Connection Lag (Separate from FPS)",
      body: "If the issue is desync, delayed tags, or rubber-banding rather than blurry visuals, treat it as network lag: host on wired Ethernet, reduce lobby size, pause downloads during matches, disable VPN. PixelNitro also lists DNS flush (ipconfig /flushdns) and winsock reset (netsh winsock reset) as steps that helped combined with DX11 and fullscreen for overall stability.",
    },
    {
      id: "priority-order",
      heading: "Try Fixes in This Order",
      body: "1) Display mode reset + native resolution. 2) Launch option -dx11. 3) Motion Blur off, Global Illumination Medium, VSync off. 4) Windows scaling 100%. 5) Verify game files + shader cache clear. 6) Clean GPU driver install. 7) Network reset if desync persists. Most players see improvement from steps 1–3 without touching registry or deep router settings.",
    },
  ],
};
