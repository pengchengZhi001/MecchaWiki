import type { HelpTopic } from "./types";

export const paintingTopic: HelpTopic = {
  slug: "painting",
  title: "How to Paint, Sample Colors & Blend In",
  category: "Hider",
  excerpt:
    "Eyedropper workflow, brush vs fill, metallic and roughness sliders, dual-color zones, and the prep-phase paint routine that survives seeker sweeps.",
  heroImage: {
    src: "/images/spots/sewer-graffiti-wall-a.jpg",
    alt: "Sewer graffiti wall — dual-texture sampling example",
    caption: "Dual-texture walls reward sampling the zone your body actually covers.",
  },
  items: [
    {
      id: "how-to-paint-body",
      question: "How do I paint my body to hide?",
      tags: ["paint", "eyedropper", "blend", "camouflage"],
      image: {
        src: "/images/spots/mansion-bathroom-tiles.jpg",
        alt: "Mansion bathroom tiles — classic eyedropper practice spot",
        caption: "Sample the pixel your body touches — not the wall three feet away.",
      },
      answer: [
        "During prep phase, reach your hide spot first, then press F to open the paint menu. Use the eyedropper to sample a surface color from the environment. Your white body adopts that color when you apply paint with left mouse button.",
        "Workflow most hiders use: eyedropper sample → brush over exposed limbs → check from seeker camera height with middle-mouse orbit → open pose menu (R) → lock before hunt timer hits zero.",
        "Perfect hue matters less than matching value (light vs dark). A slightly wrong undertone in shadow survives; a bright sticker on a dark wall dies instantly.",
      ],
      relatedLink: {
        href: "/guides/color-matching",
        label: "Advanced color matching guide",
      },
    },
    {
      id: "eyedropper-tips",
      question: "Eyedropper keeps picking the wrong color — what am I doing wrong?",
      tags: ["eyedropper", "sample", "color pick"],
      answer: [
        "You are probably sampling from across the room or from a lit patch while hiding in shadow. Eyedropper the exact pixel adjacent to where your pose lock places your torso.",
        "Use middle mouse to orbit the camera while staying in paint mode — sample high pipes or ceiling plaster without walking there during prep.",
        "On gradient walls, corners and baseboards run darker. If you crouch low, sample low. On Backrooms, re-sample every doorway — wallpaper yellow shifts subtly room to room.",
      ],
    },
    {
      id: "metallic-roughness",
      question: "What do metallic and roughness sliders do?",
      tags: ["metallic", "roughness", "texture", "sliders"],
      image: {
        src: "/images/spots/sewer-oil-barrel-top.jpg",
        alt: "Oil barrel top on Sewer — metal surfaces need roughness tuning",
        caption: "Metal props like barrels need roughness adjusted or they shimmer under seeker FOV.",
      },
      answer: [
        "Metallic and roughness sliders change how your painted surface reacts to map lighting — not just the base color. A correct hue with wrong roughness can still shimmer like a player model on metal or tile.",
        "Matte walls (plaster, wallpaper, wood): keep roughness relatively high / metallic low so you read flat like the environment.",
        "Metal pipes and barrels (Sewer, Cold Storage): match nearby props by sampling color first, then nudge roughness until your body stops catching specular highlights seekers notice.",
        "When unsure, prioritize value match first, roughness second, perfect metallic last — a dull correct gray beats a shiny perfect gray.",
      ],
    },
    {
      id: "paint-fast-enough",
      question: "I never finish painting before hunt phase — help?",
      tags: ["prep", "timer", "slow", "rush"],
      answer: [
        "Pathing beats brushing. Decide your spot during map load, move along walls, and open paint menu only when stationary at the hide.",
        "Do not full-body brushstroke every round. Sample once, quick-pass exposed areas, lock pose early, then touch up only if time remains.",
        "Practice on Mansion bathroom tiles until sample → paint → pose lock takes under 15 seconds. That muscle memory transfers to every map.",
        "Avoid meme spots you saw on TikTok until fundamentals are solid — viral ceiling clips skip the boring prep timer discipline.",
      ],
      relatedLink: {
        href: "/guides/prep-phase-guide",
        label: "Prep phase strategy guide",
      },
    },
    {
      id: "dual-color-zones",
      question: "How do I handle tile, grout, or multi-color walls?",
      tags: ["tile", "grout", "dual color", "pattern"],
      image: {
        src: "/images/spots/mansion-black-tile-wall.png",
        alt: "Black tile wall on Mansion — dual texture hide",
        caption: "Align your pose with the busier texture so edges disappear into pattern noise.",
      },
      answer: [
        "Sample both dominant textures (tile and grout, graffiti and concrete, wood field and trim). Compare value difference.",
        "Choose the pose that hides your outline in the busier texture — crouch along grout lines, align shoulders with horizontal brick courses, tuck into graffiti mid-tones rather than brightest tags.",
        "If one limb sticks into a second color, either re-sample that limb or reposition so the entire silhouette sits in one value band.",
      ],
    },
    {
      id: "fix-bad-paint-mid-round",
      question: "Can I repaint after hunt phase starts?",
      tags: ["recolor", "emergency", "mid round"],
      answer: [
        "Movement and repainting during hunt phase create motion and audio tells — but emergency recolor still beats panic-running in open space when a seeker rounds a corner.",
        "Sequence: nearest surface eyedropper → quick brush → pose lock → freeze two seconds. Most public-lobby seekers overshoot when line-of-sight breaks.",
        "Do not run across the room to fix paint unless you know the next sample target. Running tells everyone where you went.",
      ],
      relatedLink: {
        href: "/help/hider-tips",
        label: "Evasion and dodge techniques",
      },
    },
  ],
};
