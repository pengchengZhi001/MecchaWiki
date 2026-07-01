import type { Guide } from "./types";

export const propMimicClusterGuide: Guide = {
  slug: "prop-mimic-cluster-guide",
  title: "Prop Mimic & Cluster Hiding — Hide as Objects, Not Walls",
  category: "Strategy",
  readTime: "8 min",
  excerpt:
    "Community consensus from Games Fuze, 9Puz, and mecchachameleongame.org: the strongest hides mimic props inside clutter clusters — cow standees, hay piles, gumdrop mountains — not flat wall camping.",
  sources: [
    {
      name: "Games Fuze — Best Hiding Spots (cow cutout mimic)",
      url: "https://gamesfuze.com/guides/meccha-chameleon-best-hiding-spots/",
    },
    {
      name: "9Puz — Paint, Pose, Freeze walkthrough",
      url: "https://9puz.com/2384-meccha-chameleon-walkthrough/",
    },
    {
      name: "mecchachameleongame.org — Cluster hide & disguise tips",
      url: "https://mecchachameleongame.org/",
    },
    {
      name: "meccha-chameleon.io — Cow Standee Shoulder spot card",
      url: "https://meccha-chameleon.io/spots/best-hiding-spots",
    },
    {
      name: "Mobalytics — Hide as object, not flat wall",
      url: "https://mobalytics.gg/news/guides/meccha-chameleon-tips-and-tricks",
    },
  ],
  content: [
    {
      id: "why-clusters-win",
      heading: "Why Clusters Beat Flat Walls",
      body: "9Puz and Mobalytics agree: seekers hunt shapes before colours. A hue-perfect flat wall hide still reads as a human rectangle unless pose and placement break the silhouette. Cluster hiding — wedging among hay bales, balloon piles, gumdrop mounds, or chair stacks — adds visual noise that forgives minor sampling errors. mecchachameleongame.org calls this the cluster hide strategy: hiding among groups of identical objects in open space beats solo prop camping because duplicate shapes confuse edge detection. The trade-off is setup time: you must sample local clutter colours, not the wall behind you, and finish paint before hunt phase ends.",
    },
    {
      id: "prop-mimic-basics",
      heading: "Prop Mimic Basics — Become the Object",
      body: "Games Fuze ranks Indoor Country cow cutouts as one of the map's strongest hides when executed correctly: climb onto a standee side, lie-down pose, paint black-and-white blocks matching the cutout, and replicate texture detail from the prop surface — not barn wall behind you. Done right, even experienced seekers double-take before tagging. meccha-chameleon.io's Cow Standee Shoulder card adds practical limits: use two large colour patches, not tiny hand-painted spots; hide head and hand edges against the cow curve; compare shoulder line against real standees when seeking. Mobalytics frames the same idea globally: hide as an object, not flat against a wall — the pose kills silhouette and local colour does the rest.",
    },
    {
      id: "indoor-country-examples",
      heading: "Indoor Country — Standees, Hay, Pumpkins",
      body: "Community map guides converge on Indoor Country as the prop-mimic tutorial map. Cow standee perches reward standee-surface sampling plus compact poses. Fallen standee crouches read as debris when painted to match toppled cardboard. Hay bale piles need dual-tone barn panel plus straw gold — one flat brown fill fails when your torso crosses two textures. Pumpkin patch corners work when you sample orange face and shadow soil separately, wedging into the cluster instead of standing beside it. Browse our Cow Standee Prop and Hay Bale Pile spot pages for screenshots and seeker counter-tips sourced from TheGamer and IGN.",
    },
    {
      id: "other-maps",
      heading: "Cluster Spots on Other Official Maps",
      body: "Mansion: rear library rows and kitchen shelving are furniture clusters, not wall hides — crouch between rows so spines break your outline. Sewer: graffiti-dense corners are colour clusters; sample the busy texture, not clean pipe metal beside it. Backrooms: chair stacks and bike-wall artwork clusters punish seekers who only scan flat wallpaper. Penguin Hotel: plush piles and ice sculpture zones reward object mimic when you lower metallic after v1.1.0 ice reflectivity bumps. Sugarland: gumdrop pile and gingerbread circles are saturated clusters — shadow-side sampling beats flat pink fills. Osaka: shop clutter and trash corners mirror city-map cluster logic from IGN's latest-map coverage.",
    },
    {
      id: "setup-checklist",
      heading: "Prep Checklist for Cluster & Mimic Hides",
      body: "Path to cluster first — relocating after base coat breaks value match (SlashSkill prep advice). Sample the prop or clutter pixel your body touches; Spacebar eyedropper when click sampling drifts. Choose pose before final paint pass: lie-down for cow cutouts, crouch for hay, compact tuck for gumdrop piles. Middle-mouse 360° check for white elbow gaps — Mobalytics lists exposed joints as a top detection failure. Tune metallic and roughness so glossy props do not shimmer. Lock pose before hunt timer; cluster spots fail when you are still brushing outer limbs as seekers spawn.",
    },
    {
      id: "seeker-counters",
      heading: "Seeker Counters — What Community Threads Warn About",
      body: "Seekers adapted to prop mimic meta on Reddit and Steam reviews: compare curves against real props (cow shoulder line vs cardboard cutout), slow-check identical object groups for duplicate outlines, and do not assume cluster fields are map dressing only. Games Fuze notes the cow hide fails when paint is too detailed — hand-made micro spots read as player art, not factory print. Steam top reviews also flag pure-black paint in deep shadows behind items as hard-to-fair spots; seekers should crouch-sweep shadow gaps after chest-height passes. See our Seeker FAQ black-paint entry and Hunter Guide sweep order for systematic counters.",
    },
    {
      id: "next-steps",
      heading: "Next Steps",
      body: "Start on Indoor Country with Cow Standee Prop and Hay Bale Pile from our hidden spots database — both include images and source links. Pair this guide with Best Pose Guide for silhouette tables, How to Paint Better for brush sizing on prop edges, and Indoor Country Map Guide for barn-zone danger paths to avoid.",
    },
  ],
};
