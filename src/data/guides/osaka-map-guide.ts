import type { Guide } from "./types";

export const osakaMapGuide: Guide = {
  slug: "osaka-map-guide",
  title: "Osaka Map Guide — Japan Map Hiding Spots",
  category: "Maps",
  readTime: "8 min",
  excerpt:
    "Osaka arrived in v1.7.0 (June 22, 2026). IGN and community sources describe the smallest official map — truck bed, octopus statue, shop walls, and corner clutter.",
  sources: [
    {
      name: "IGN — Best Osaka Hiding Places",
      url: "https://www.ign.com/wikis/meccha-chameleon/All_Maps_in_Meccha_Chameleon:_Best_Hiding_Spots",
    },
    {
      name: "consolepcgaming.com — v1.7.0 patch notes",
      url: "https://consolepcgaming.com/osaka-arrives-in-meccha-chameleons-1-7-0-update/",
    },
    {
      name: "mecha-chameleon.net — Osaka map entry",
      url: "https://mecha-chameleon.net/maps",
    },
  ],
  content: [
    {
      id: "release",
      heading: "When Osaka Released",
      body: "Update 1.7.0 added official map \"Osaka\" on June 22, 2026, alongside a report feature and a title-screen Discord link fix per Steam announcement coverage. mecha-chameleon.net lists Osaka as Advanced difficulty, Japan-themed streets with signage, storefronts, and lanterns — the newest official map at time of writing.",
    },
    {
      id: "map-size",
      heading: "Smallest Official Map — Plan Accordingly",
      body: "IGN describes Osaka as by far the smallest map in the official playlist. Less space means seekers recycle through areas faster and hiders must pick spots carefully — open ground is riskier than on Mansion or Backrooms. Warm lantern reds and cool signage blues mix on the same sightlines; mecha-chameleon.net advises committing to one surface and matching it exactly rather than sampling mid-blend zones.",
    },
    {
      id: "truck-area",
      heading: "Truck and Open Walled Area",
      body: "IGN: one end of Osaka has a large open area with a partially walled section and a large truck. Hiding inside the truck bed or underneath can work if you paint to match shadows carefully — shadow-matched paint is critical because lit metal and asphalt read different values than shaded undercarriage.",
    },
    {
      id: "vertical-signage",
      heading: "Signage and Octopus Statue (Vertical Hides)",
      body: "Unlike most maps, Osaka features substantial vertical space above ground level. IGN lists multiple signs where hiders can blend, plus a large octopus statue against a wall. High signage rewards prep completed before hunt phase — seekers who learn the map meta will look up on later rounds.",
    },
    {
      id: "shop-ground",
      heading: "Shop Walls, Fans, and Crates",
      body: "For ground-level play, IGN points to open shops with wall blends, metal fans, and crates surrounding the area. Sample the exact surface your pose touches — urban props mix paint chips, rust, and neon-adjacent blues on adjacent pixels.",
    },
    {
      id: "trash-clutter",
      heading: "Trash Bags, Statues, and Corner Stacks",
      body: "IGN: city maps include trash piles and discarded statues — try trash bags, downed octopus statue pairs on the ground, or walled corners with plywood stacks, crates, and additional trash bags. Trash-can prop mimic and \"specific bag of trash\" disguises are community-suggested — require matching local color and compact pose silhouette.",
    },
    {
      id: "verification",
      heading: "Spots Still Being Verified",
      body: "mecha-chameleon.net notes specific Osaka spots are still being verified in-game post-launch. Treat IGN positions as starting points — screenshot spots that work for you after the current patch and cross-check too-buried warnings on tight urban geometry.",
    },
    {
      id: "related",
      heading: "Related Pages",
      body: "See the Osaka map overview at /maps/osaka for palette and danger zones. Browse /hidden-spots filtered to Osaka as community entries are added. Read How to Paint Better for Spacebar eyedropper workflow on multi-color urban surfaces.",
    },
  ],
};
