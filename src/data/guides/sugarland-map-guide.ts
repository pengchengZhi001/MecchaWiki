import type { Guide } from "./types";

export const sugarlandMapGuide: Guide = {
  slug: "sugarland-map-guide",
  title: "Sugarland Map Guide — Candy World Hiding Spots",
  category: "Maps",
  readTime: "9 min",
  excerpt:
    "Sugarland arrived in v1.4.0 (June 17, 2026). GameRant and community map databases describe saturated candy colors, chocolate fountains, gingerbread clusters, and cake-tier vertical hides.",
  sources: [
    {
      name: "GameRant — Best Hiding Places in Meccha Chameleon",
      url: "https://gamerant.com/meccha-chameleon-best-hiding-spots/",
    },
    {
      name: "mecha-chameleon.net — Sugarland map entry",
      url: "https://mecha-chameleon.net/maps",
    },
    {
      name: "Wikipedia — Meccha Chameleon (v1.4.0 patch)",
      url: "https://en.wikipedia.org/wiki/Meccha_Chameleon",
    },
  ],
  content: [
    {
      id: "release",
      heading: "When Sugarland Released",
      body: "Update v1.4.0 added official map Sugarland on June 17, 2026 per Wikipedia and community patch trackers. mecha-chameleon.net lists it as Intermediate difficulty — a candy-themed stage with saturated pinks, mint greens, and chocolate browns. Unlike Mansion's warm wood blocks, Sugarland punishes sloppy paint on bright surfaces: white elbow gaps and mid-blend color zones read as errors faster than on muted maps.",
    },
    {
      id: "palette",
      heading: "Color Palette — Commit to One Surface",
      body: "Sugarland's palette mixes hot pink (#FF69B4), mint (#98FB98), chocolate brown (#D2691E), and pastel pinks (#FFB6C1). Community map pages warn against sampling mid-blend zones between candy panels — pick one surface (wall panel, floor stripe, chocolate trim) and match it exactly. Saturated hues expose unpainted white at joints more aggressively than Mansion beige or Sewer rust green. Large flat candy panels offer fast eyedropper reads but less clutter to break your outline — pose discipline matters more here than on prop-dense maps.",
    },
    {
      id: "chocolate-fountain",
      heading: "Chocolate Fountain Zone (GameRant)",
      body: "GameRant's Sugarland section highlights chocolate fountains as a strong hide when you nail texture: use multiple shades of brown, not one flat sample, and tuck beside the fountain mass so side sightlines do not expose your silhouette. Chocolate surfaces need roughness tuning — glossy fountain flow catches seeker angles if metallic is left too high. Hide next to something that blocks lateral view; open fountain fronts alone fail when seekers sweep the candy aisle.",
    },
    {
      id: "gingerbread-circle",
      heading: "Gingerbread Men Circle (GameRant)",
      body: "GameRant notes the ground-level gingerbread men ring: paint the floor color first, then position inside the circle so prop silhouettes break your outline. The circle provides shelter from direct line-of-sight without blocking scoring zones — seekers walking the perimeter may scan props and skip the ground plane. Sample floor tone adjacent to gingerbread feet, not the cookie brown itself, unless your pose mimics a cookie shape.",
    },
    {
      id: "cake-tiers",
      heading: "High Cake Tiers — Vertical Candy Hides",
      body: "GameRant lists stacked cake props tall enough to stay out of default seeker sightlines while remaining in scoring range. Vertical candy hides follow the same ceiling-meta logic as Mansion pillars and Penguin rafters — prep during countdown, sample frosting white or pastel pink on the tier your body touches, lock before hunt. Seekers who learn Sugarland meta look up on round two; rotate to chocolate fountain or gingerbread ground after a successful tier hide.",
    },
    {
      id: "danger-zones",
      heading: "Danger Zones — Open Candy Aisles",
      body: "Central bright zones and long open candy aisles are Sugarland's rotation paths, not homes. High saturation exposes value mismatch instantly — a slightly pink body on mint floor reads before hue errors would on Sewer. Cross open aisles wall-hugging during prep; do not camp center floor even with confident paint. mecha-chameleon.net rates Sugarland Intermediate because readable color blocks help beginners sample fast, but less clutter than Mansion means outline mistakes have nowhere to hide.",
    },
    {
      id: "verification",
      heading: "Spots Still Being Verified",
      body: "Sugarland launched after Mansion and Sewer — specific pin positions are still being verified in community databases post v1.4.0. Treat GameRant and meccha-chameleon.net entries as starting points; screenshot spots that work for you after the current patch and watch for too-buried warnings on tight fountain geometry.",
    },
    {
      id: "related",
      heading: "Related Pages",
      body: "Browse /maps/sugarland for palette and hotspot overview. See /hidden-spots filtered to Sugarland for GameRant-sourced positions with source links. Read How to Paint Better for Spacebar eyedropper workflow on saturated surfaces, and Advanced Color Matching for roughness on glossy candy props.",
    },
  ],
};
