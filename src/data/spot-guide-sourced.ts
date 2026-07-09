import type { HiddenSpot } from "@/data/hidden-spots";

/** One paint layer — surfaces and body parts from published guides (no invented hex). */
export type SpotPaintLayer = {
  bodyPart: string;
  sampleFrom: string;
  technique?: string;
};

export type GuideSource = {
  name: string;
  url: string;
};

export type SpotGuideSourced = {
  sources: GuideSource[];
  howToWin: string[];
  paintLayers: SpotPaintLayer[];
  poseAdvice: string;
  finishSettings: string[];
  seekerWindow: string;
};

/** Per-spot content transcribed from external guides — see sources[] on each entry. */
const SPOT_GUIDES: Partial<Record<string, Omit<SpotGuideSourced, "sources"> & { sources: GuideSource[] }>> = {
  "mansion-library-shelf": {
    sources: [
      { name: "mecchachameleongame.wiki Mansion Guide", url: "https://mecchachameleongame.wiki/maps/mansion/" },
      { name: "TheGamer", url: "https://www.thegamer.com/mecca-chameleon-best-hiding-spots-guide/" },
    ],
    howToWin: [
      "Walk to the rear library shelf rows during prep before painting — every guide says spot first, paint second; colors break if you relocate.",
      "Seekers usually sweep the open Main Room, then Kitchen and Library; from the doorway, rear book spines read as continuous spines, not a human gap.",
      "After v1.1.0 (Hunter FOV 100°, brighter shadows), dark corners alone fail — spine color plus shelf shadow must match local surfaces.",
      "Freeze completely once the hunt starts; SlashSkill and others note micro-movement exposes you faster than slight color error.",
    ],
    paintLayers: [
      { bodyPart: "Torso / visible front", sampleFrom: "Book spine color on the row your body touches (eyedropper the spine, not the opposite shelf)", technique: "Block main tone first, then short vertical strokes along spines — never horizontal smears" },
      { bodyPart: "Shadow side / under-shelf", sampleFrom: "Dark area under the shelf lip or between spines", technique: "Lower HSV Value one step below the main tone" },
      { bodyPart: "Head", sampleFrom: "Mid-tone spine at shoulder height", technique: "Keep head level with spines — round head above the shelf lip is a tell" },
      { bodyPart: "Limb edges", sampleFrom: "Shelf opening shadow", technique: "360° white-gap check before prep ends (SlashSkill #1 day-one mistake)" },
    ],
    poseAdvice: "Crouched / compact — mecchachameleongame.wiki recommends this; book rows are low and a standing silhouette fails instantly.",
    finishSettings: ["Bookshelf surfaces are matte — keep metallic low", "Roughness near matte wood/paper"],
    seekerWindow: "Before Seekers finish Main Room floor and Kitchen shelves, rear Library buys ~30–45 seconds; hold still if they crouch-check shelf gaps.",
  },

  "mansion-bathroom-tiles": {
    sources: [
      { name: "mecchachameleongame.wiki Mansion Guide", url: "https://mecchachameleongame.wiki/maps/mansion/" },
      { name: "TheGamer", url: "https://www.thegamer.com/mecca-chameleon-best-hiding-spots-guide/" },
    ],
    howToWin: [
      "Bathroom is one of Mansion's highest pattern-discipline zones — a single flat fill reads as a patch, not tile.",
      "Sample tile face and grout/shadow lines separately; use short repeated strokes so your edge follows the grid rhythm.",
      "v1.1.0+ bathroom reflectivity is higher; TheGamer community warns about the metallic slider — match matte to semi-gloss tile.",
    ],
    paintLayers: [
      { bodyPart: "Torso main area", sampleFrom: "Tile face your body touches", technique: "Short strokes along grid direction — no solid blob" },
      { bodyPart: "Grout / edges", sampleFrom: "Grout line or tile junction shadow", technique: "Separate sample; paint along horizontal/vertical grout" },
      { bodyPart: "Lit side", sampleFrom: "Brighter tile on the same wall", technique: "HSV Value slightly up" },
      { bodyPart: "Shadow side", sampleFrom: "Dark tile at corner or under vanity", technique: "Value down — two-tone split from lit side" },
    ],
    poseAdvice: "Flat or crouched so your outline extends the wall/floor pattern, not a standing figure.",
    finishSettings: ["Reflective tile: lower metallic to match wall sheen", "Roughness aligned to tile (matte to semi-gloss)"],
    seekerWindow: "Bathroom is a mid-sweep checkpoint; correct pattern alignment survives glance passes.",
  },

  "mansion-ceiling-pillar": {
    sources: [
      { name: "mecchachameleongame.wiki Mansion Guide", url: "https://mecchachameleongame.wiki/maps/mansion/" },
      { name: "TheGamer", url: "https://www.thegamer.com/mecca-chameleon-best-hiding-spots-guide/" },
    ],
    howToWin: [
      "Main Room pillar top / ceiling attach — Seekers default to floor sweeps; verticality buys time.",
      "Finish climb and paint in prep; movement during hunt creates obvious audio/visual tells.",
      "Paint lit face + shadow face along the light direction so you read attached to the column, not pasted on.",
    ],
    paintLayers: [
      { bodyPart: "Lit side (column)", sampleFrom: "Pillar face toward the light", technique: "HSV Value slightly up" },
      { bodyPart: "Shadow side", sampleFrom: "Pillar shadow face or ceiling dark patch", technique: "Separate sample, darker than lit side" },
      { bodyPart: "Top / ceiling junction", sampleFrom: "Cap-to-ceiling transition tone", technique: "Soft blend — avoid hard edges" },
    ],
    poseAdvice: "Lie down / flattened — ground-level view struggles to read a horizontal form.",
    finishSettings: ["Column is usually matte painted wood/plaster — metallic low", "Roughness matched to column surface"],
    seekerWindow: "Round-one Seekers rarely look up; later rounds check pillars — finish all paint in prep.",
  },

  "mansion-hallway-painting": {
    sources: [
      { name: "mecchachameleongame.wiki Mansion Guide", url: "https://mecchachameleongame.wiki/maps/mansion/" },
      { name: "meccha-chameleon.net", url: "https://meccha-chameleon.net/maps/best-hiding-spots/" },
    ],
    howToWin: [
      "Mimic the painting, not a person against the wall — mecchachameleongame.wiki: sample the artwork; wall color behind it often fails.",
      "meccha-chameleon.net 'Painting frame body match': stay vertical so silhouette reads as frame + canvas.",
      "Rectangular pose; frame color on outline, canvas mid-tone on torso.",
    ],
    paintLayers: [
      { bodyPart: "Outline / frame", sampleFrom: "Frame wood or metal trim", technique: "Lines parallel to the real frame" },
      { bodyPart: "Torso (canvas)", sampleFrom: "Painting mid-tone", technique: "Do not substitute wall color behind you" },
      { bodyPart: "Art highlights/shadows", sampleFrom: "Matching light/dark zones on the art", technique: "Simple two-tone — no fine detail needed" },
    ],
    poseAdvice: "Wall-flat — target a 2D frame silhouette, not a standing character.",
    finishSettings: ["Frame: matte wood", "Canvas roughness matched to the painting surface"],
    seekerWindow: "Hallway is a late sweep zone; precise setup is low risk.",
  },

  "mansion-kitchen-shelving": {
    sources: [
      { name: "mecchachameleongame.wiki Mansion Guide", url: "https://mecchachameleongame.wiki/maps/mansion/" },
      { name: "TheGamer", url: "https://www.thegamer.com/mecca-chameleon-best-hiding-spots-guide/" },
    ],
    howToWin: [
      "Open kitchen shelf: crouch inside; keep limbs inside the cubby silhouette.",
      "Seekers crouch-check shelf gaps — depth matters more than color, but wood/cabinet tones still need local samples.",
      "Sample shelf wood, poster, or cabinet tone (mecchachameleongame.wiki — whichever surface you touch).",
    ],
    paintLayers: [
      { bodyPart: "Visible front", sampleFrom: "Interior back panel or adjacent wood shelf", technique: "Horizontal strokes along shelf lines" },
      { bodyPart: "Interior shadow", sampleFrom: "Deep shelf dark patch", technique: "Shadow side of torso" },
      { bodyPart: "Edges", sampleFrom: "Shelf frame wood", technique: "Align to frame lines" },
    ],
    poseAdvice: "Tight crouch — shrink body inside the shelf frame.",
    finishSettings: ["Kitchen wood: metallic low", "Roughness matte wood"],
    seekerWindow: "Kitchen shelves are an early Seeker check — finish paint before hunt phase.",
  },

  "mansion-wooden-arch": {
    sources: [{ name: "mecchachameleongame.wiki Mansion Guide", url: "https://mecchachameleongame.wiki/maps/mansion/" }],
    howToWin: [
      "Warm wood arch: block warm brown base, then darker streaks along grain/panel direction.",
      "Random scribbles read as paint, not wood — stroke direction must follow the surface.",
    ],
    paintLayers: [
      { bodyPart: "Main body", sampleFrom: "Arch wall warm wood base", technique: "Along vertical/curved panel lines" },
      { bodyPart: "Grain dark lines", sampleFrom: "Darker wood streak on same wall", technique: "Short strokes matching grain direction" },
      { bodyPart: "Shadow side", sampleFrom: "Arch interior dark patch", technique: "Value one step down" },
    ],
    poseAdvice: "Stand or crouch along the vertical arch — shoulder width hidden by the curve.",
    finishSettings: ["Metallic low", "Roughness matched to matte wood"],
    seekerWindow: "Arch zone is not a first-sweep hotspot — still finish pose + paint in prep.",
  },

  "mansion-black-tile-wall": {
    sources: [{ name: "mecchachameleongame.wiki Mansion Guide", url: "https://mecchachameleongame.wiki/maps/mansion/" }],
    howToWin: [
      "Side-room black tile: dark value forgives minor errors, not outline glow.",
      "Tile grid + grout rhythm same as bathroom — no single-color blob.",
      "Lower metallic/roughness to avoid shine bands at Seeker angles.",
    ],
    paintLayers: [
      { bodyPart: "Tile face", sampleFrom: "Black tile you touch", technique: "Short strokes following grid" },
      { bodyPart: "Grout", sampleFrom: "Grout shadow line", technique: "Separate sample" },
      { bodyPart: "Edge outline", sampleFrom: "Adjacent tile shadow", technique: "Clean head/shoulder white gaps first" },
    ],
    poseAdvice: "Flat against wall or crouch.",
    finishSettings: ["Metallic as low as possible", "Roughness high-matte"],
    seekerWindow: "Side room is not first-sweep; correct pattern = low–medium risk.",
  },

  "mansion-armchair-tuck": {
    sources: [
      { name: "mecchachameleongame.wiki Mansion Guide", url: "https://mecchachameleongame.wiki/maps/mansion/" },
      { name: "TheGamer", url: "https://www.thegamer.com/mecca-chameleon-best-hiding-spots-guide/" },
    ],
    howToWin: [
      "Tuck on the chair's shadow side; sample carpet/under-chair shadow, not upholstery highlight.",
      "Fabric mid-tone + nearby shadow two-tone; limbs must not break the chair footprint.",
    ],
    paintLayers: [
      { bodyPart: "Chair-facing side", sampleFrom: "Chair back fabric mid-tone", technique: "Soft edges — no hard lines" },
      { bodyPart: "Floor / under chair", sampleFrom: "Carpet shadow under chair", technique: "Legs and base use this tone" },
      { bodyPart: "Shadow side", sampleFrom: "Dark wedge between chair and wall", technique: "Lower value" },
    ],
    poseAdvice: "Crouch — shadow side of the chair is stronger.",
    finishSettings: ["Fabric matte", "Carpet zone slightly higher roughness"],
    seekerWindow: "Furniture zones are not first-sweep; late crouch pass checks under chairs.",
  },

  "mansion-vase-corner": {
    sources: [{ name: "IGN Editor Jen", url: "https://www.ign.com/wikis/meccha-chameleon/All_Maps_in_Meccha_Chameleon:_Best_Hiding_Spots" }],
    howToWin: [
      "IGN Editor Jen verified: hide between vases and the dark left wall — survived a full round.",
      "Small room is risky, but vase cluster adds visual noise; sample the dark wall you touch.",
      "Read as a normal room object, not a person on blank wall (SlashSkill object-mimic rule).",
    ],
    paintLayers: [
      { bodyPart: "Wall side", sampleFrom: "Dark left wall", technique: "Shadow-first" },
      { bodyPart: "Vase side", sampleFrom: "Vase glaze or shadow", technique: "Simple block color" },
      { bodyPart: "Floor", sampleFrom: "Corner floor dark patch", technique: "Align legs/base" },
    ],
    poseAdvice: "Compact wedge between vases and wall.",
    finishSettings: ["Vase may have specular — bump metallic only on highlight pixels", "Wall matte"],
    seekerWindow: "Study side room; Seekers may enter after ballroom sweep — stillness required.",
  },

  "sewer-ceiling-pipe": {
    sources: [
      { name: "mecchachameleongame.wiki Sewer Guide", url: "https://mecchachameleongame.wiki/maps/sewer/" },
      { name: "TheGamer", url: "https://www.thegamer.com/mecca-chameleon-best-hiding-spots-guide/" },
    ],
    howToWin: [
      "Strongest documented Sewer spot: behind an overhead pipe in the darkest section.",
      "Seekers habitually scan at eye level — pipe position buys 30–45+ seconds.",
      "After v1.1.0 do not use pure black — sample actual charcoal/rust/grey; brighter shadows make pure black pop.",
      "Climb in prep; post-hunt movement creates audio/visual tells.",
    ],
    paintLayers: [
      { bodyPart: "Pipe-facing side", sampleFrom: "Pipe metal mid-tone directly above you", technique: "Cylindrical read: mid-tone base" },
      { bodyPart: "Shadow side", sampleFrom: "Pipe back-face dark patch", technique: "Darker than mid" },
      { bodyPart: "Highlight strip", sampleFrom: "Narrow highlight on pipe", technique: "Thin strip only — not whole body bright" },
    ],
    poseAdvice: "Horizontal / ceiling-aligned — body runs with the pipe direction.",
    finishSettings: ["Pipe metal: medium metallic", "Roughness slightly below matte wall"],
    seekerWindow: "First pass rarely looks up; second pass checks pipes — stillness is critical.",
  },

  "sewer-oil-barrel-top": {
    sources: [{ name: "mecchachameleongame.wiki Sewer Guide", url: "https://mecchachameleongame.wiki/maps/sewer/" }],
    howToWin: [
      "Lie flat on barrel top; walking Seekers at default height miss without looking down.",
      "Lid and body reflect differently — sample separately; do not use side color on the lid.",
      "Barrel color varies by instance (sources conflict) — eyedropper the barrel you use.",
    ],
    paintLayers: [
      { bodyPart: "Top / back", sampleFrom: "Barrel lid color", technique: "Largest visible area when flat prone" },
      { bodyPart: "Visible side strip", sampleFrom: "Barrel body side", technique: "If rim visible, sample rim shadow separately" },
      { bodyPart: "Rim shadow", sampleFrom: "Lid edge dark line", technique: "Thin line only" },
    ],
    poseAdvice: "Flat / prone on lid.",
    finishSettings: ["Metal barrel: medium–high metallic", "Roughness below matte wall"],
    seekerWindow: "Safe during eye-level sweep; late crouch-check may expose.",
  },

  "sewer-graffiti-wall-a": {
    sources: [{ name: "mecchachameleongame.wiki Sewer Guide", url: "https://mecchachameleongame.wiki/maps/sewer/" }],
    howToWin: [
      "Graffiti chaos breaks outline — 2–3 locally sampled colors + irregular strokes.",
      "A clean single fill is easier to read than a rough three-color patch.",
      "Place colors where similar shapes already exist on the wall.",
    ],
    paintLayers: [
      { bodyPart: "Zone 1", sampleFrom: "Primary graffiti color A on your body zone", technique: "Irregular patch" },
      { bodyPart: "Zone 2", sampleFrom: "Adjacent tag color B", technique: "Avoid perfect blocks" },
      { bodyPart: "Dark base", sampleFrom: "Concrete grey under graffiti", technique: "Limb edges" },
    ],
    poseAdvice: "Wall-hugging / flat — 2D patch.",
    finishSettings: ["Concrete matte", "Tag zones: low metallic"],
    seekerWindow: "Second-pass slow graffiti scan; high pattern noise = medium risk.",
  },

  "sewer-graffiti-wall-b": {
    sources: [{ name: "mecchachameleongame.wiki Sewer Guide", url: "https://mecchachameleongame.wiki/maps/sewer/" }],
    howToWin: [
      "Section B palette differs from A — do not reuse Section A paint.",
      "Re-eyedropper 2–3 local colors on arrival.",
    ],
    paintLayers: [
      { bodyPart: "Main", sampleFrom: "Section B local graffiti primary", technique: "Rough patches" },
      { bodyPart: "Secondary", sampleFrom: "Second tag color in Section B", technique: "Irregular" },
      { bodyPart: "Base", sampleFrom: "Section B concrete", technique: "Edge cleanup" },
    ],
    poseAdvice: "Wall-flat — same pose type as A but entirely new palette.",
    finishSettings: ["Low metallic", "Roughness matched to concrete"],
    seekerWindow: "Same Seeker behavior as A; rotate A/B to avoid lobby meta.",
  },

  "backrooms-chair-stack": {
    sources: [
      { name: "mecchachameleongame.wiki Backrooms Guide", url: "https://mecchachameleongame.wiki/maps/backrooms/" },
      { name: "meccha-chameleon.wiki", url: "https://meccha-chameleon.wiki/maps/backrooms/" },
    ],
    howToWin: [
      "Under chair stack; compact pose with limbs inside furniture footprint.",
      "meccha-chameleon.wiki: sample chair leg brown + floor shadow; curl pose.",
      "Seeker crouch pass checks under-chair gaps — paint the underside outline.",
      "v1.2.0 wall-clip patched — legitimate geometry only.",
    ],
    paintLayers: [
      { bodyPart: "Chair-facing", sampleFrom: "Chair leg/back brown", technique: "Compact block" },
      { bodyPart: "Under stack / floor", sampleFrom: "Floor shadow under stack", technique: "Legs and base" },
      { bodyPart: "Edges", sampleFrom: "Stack shadow dark patch", technique: "Muted edges" },
    ],
    poseAdvice: "Crouched / compact under stack.",
    finishSettings: ["Chair plastic/wood matte", "Floor matte"],
    seekerWindow: "Seeker sweep: wall objects, then chair stacks; first sweep may skip.",
  },

  "backrooms-bikes-wall": {
    sources: [
      { name: "mecchachameleongame.wiki Backrooms Guide", url: "https://mecchachameleongame.wiki/maps/backrooms/" },
      { name: "meccha-chameleon.wiki", url: "https://meccha-chameleon.wiki/maps/backrooms/" },
    ],
    howToWin: [
      "Blend into a wall-mounted bike cluster.",
      "Sample bike frame + tire shadow + wall behind separately; thin pose aligned to bike angle.",
      "Seekers early-scan bike rows — finish paint in the first half of prep.",
      "Re-verify after v1.2.0; wall-clip no longer works.",
    ],
    paintLayers: [
      { bodyPart: "Frame zone", sampleFrom: "Bike frame color", technique: "Thin lines along frame angle" },
      { bodyPart: "Tire/shadow", sampleFrom: "Tire shadow", technique: "Darker than frame" },
      { bodyPart: "Wall behind", sampleFrom: "Wallpaper behind bike", technique: "Fill visible gaps with wall tone" },
    ],
    poseAdvice: "Flat, aligned with bike angle.",
    finishSettings: ["Frame: low–medium metallic", "Wall matte"],
    seekerWindow: "Bike row is an early Seeker check; aligned pattern survives first glance.",
  },

  "backrooms-yellow-nook": {
    sources: [
      { name: "meccha-chameleon.wiki", url: "https://meccha-chameleon.wiki/maps/backrooms/" },
      { name: "Community (meccha-chameleon.wiki maps)", url: "https://meccha-chameleon.wiki/maps/backrooms/" },
    ],
    howToWin: [
      "Level 0 corner nook: flat yellow wallpaper — value must stay consistent.",
      "meccha-chameleon.wiki: eyedropper mid-wall, not near lights (reads too bright).",
      "Absolute stillness — any movement smears on flat yellow.",
      "Re-sample every doorway (Backrooms wallpaper value shifts room to room).",
    ],
    paintLayers: [
      { bodyPart: "Full body base", sampleFrom: "Corner mid-wall yellow (away from fixtures)", technique: "Single consistent value" },
      { bodyPart: "Lit side", sampleFrom: "Slightly brighter zone on same wall", technique: "HSV Value +1 step" },
      { bodyPart: "Floor junction", sampleFrom: "Baseboard shadow", technique: "Legs when crouched" },
    ],
    poseAdvice: "Corner wedge, minimal silhouette.",
    finishSettings: ["Wallpaper matte", "Metallic 0"],
    seekerWindow: "Flat corridor with no clutter — stillness is the only defense.",
  },

  "backrooms-exit-sign": {
    sources: [{ name: "mecchachameleongame.wiki Backrooms Guide", url: "https://mecchachameleongame.wiki/maps/backrooms/" }],
    howToWin: [
      "Rectangular pose mimicking EXIT sign; sign color blocks + sharp borders.",
      "Sample sign and surrounding wallpaper separately.",
      "Funny spot — hesitant Seekers may walk past.",
    ],
    paintLayers: [
      { bodyPart: "Sign body", sampleFrom: "Sign green/red main blocks", technique: "Sharp rectangular blocks" },
      { bodyPart: "Surrounding wall", sampleFrom: "Wallpaper beside sign", technique: "Outer edge alignment" },
      { bodyPart: "Border", sampleFrom: "Sign border", technique: "Straight lines" },
    ],
    poseAdvice: "Rectangular pose essential.",
    finishSettings: ["Sign face semi-gloss", "Wall matte"],
    seekerWindow: "Works on side walls with high sign density; center corridor contrasts easily.",
  },

  "penguin-ballroom-rafters": {
    sources: [{ name: "IGN Editor Jen", url: "https://www.ign.com/wikis/meccha-chameleon/All_Maps_in_Meccha_Chameleon:_Best_Hiding_Spots" }],
    howToWin: [
      "IGN Jen: luck hiding in rafters next to balloons in live matches.",
      "Camouflage head with balloon colors — head samples balloon, body samples rafter/wall.",
      "Ballroom is high traffic; finish climb + paint in prep.",
    ],
    paintLayers: [
      { bodyPart: "Head", sampleFrom: "Nearest balloon color", technique: "Object-mimic head" },
      { bodyPart: "Torso", sampleFrom: "Rafter or wall lip tone", technique: "Shadow split" },
      { bodyPart: "Beam/wall side", sampleFrom: "Beam shadow face", technique: "Lower value" },
    ],
    poseAdvice: "Ceiling-adjacent compact; head near balloon cluster.",
    finishSettings: ["Balloon semi-gloss", "Rafter wood/metal metallic matched to surface"],
    seekerWindow: "Seekers sweep ballroom center first; rafters buy verticality time.",
  },

  "penguin-ice-sculpture": {
    sources: [
      { name: "IGN Maps Wiki", url: "https://www.ign.com/wikis/meccha-chameleon/All_Maps_in_Meccha_Chameleon:_Best_Hiding_Spots" },
      { name: "Community guides", url: "https://meccha-chameleon.wiki/maps/" },
    ],
    howToWin: [
      "Behind lobby ice sculpture; sample the facet your body touches, not the brightest exhibition face.",
      "Ice blue vs white depends on angle — re-sample when you rotate.",
      "v1.1.0+ ice specular increased; lower metallic after sampling to avoid sparkle tells.",
    ],
    paintLayers: [
      { bodyPart: "Sculpture-facing", sampleFrom: "Body-touching ice facet", technique: "Angle-dependent" },
      { bodyPart: "Shadow facet", sampleFrom: "Sculpture shadow facet", technique: "Away-from-light side" },
      { bodyPart: "Ground/lobby", sampleFrom: "Floor beside sculpture base", technique: "If visible from Seeker path" },
    ],
    poseAdvice: "Flat against sculpture back, statue-like stillness.",
    finishSettings: ["Ice: low metallic (anti-sparkle)", "Roughness medium–high matte ice"],
    seekerWindow: "From foyer, sculpture reads as map art; floor-level Hunters miss the back.",
  },

  "cold-storage-shelf-back-row": {
    sources: [{ name: "meccha-chameleon.net", url: "https://meccha-chameleon.net/maps/cold-storage/" }],
    howToWin: [
      "Deepest rear shelf row: crouch bottom rear — top community consensus on Cold Storage.",
      "Seeker needs crouch + lateral shift to see you; most partial checks abort.",
      "Sample back panel shadow, not aisle-facing edge.",
      "Warm tones pop on this cold map — steel/cold gray family mandatory.",
    ],
    paintLayers: [
      { bodyPart: "Torso", sampleFrom: "Rear shelf back panel shadow", technique: "Cold steel family" },
      { bodyPart: "Lower limbs", sampleFrom: "Shelf lip shadow", technique: "Darker than torso" },
      { bodyPart: "Visible top edge", sampleFrom: "Shelf underside metal", technique: "Align to shelf line" },
    ],
    poseAdvice: "Crouch at bottom rear of deepest row.",
    finishSettings: ["Refrigerated metal: medium metallic", "Roughness matte–semi"],
    seekerWindow: "Very safe when aisle sweeps skip depth; smart Seekers slow-check rear gaps.",
  },

  "cold-storage-meat-shelf": {
    sources: [{ name: "meccha-chameleon.net", url: "https://meccha-chameleon.net/maps/cold-storage/" }],
    howToWin: [
      "Object stack: prop repetition + shelf shadow — shape like another meat block beats hue accuracy.",
      "Never stand in aisle as a full body rectangle; depth is required.",
      "Round 2 Seekers slow-walk aisles — plan rotation to under-shelf or utility corners.",
    ],
    paintLayers: [
      { bodyPart: "Visible front", sampleFrom: "Meat prop packaging or shelf steel", technique: "Blocky shape" },
      { bodyPart: "Shadow", sampleFrom: "Shelf lip shadow", technique: "Lower limbs" },
      { bodyPart: "Side", sampleFrom: "Adjacent prop color", technique: "Repeat packaged silhouette" },
    ],
    poseAdvice: "Among meat row — silhouette repeats props.",
    finishSettings: ["Packaging matte", "Shelf metal medium metallic"],
    seekerWindow: "First pass tunnels down aisle center; peripheral shelf depth skipped.",
  },

  "brick-loft-red-brick-alcove": {
    sources: [
      { name: "TheGamer", url: "https://www.thegamer.com/mecca-chameleon-best-hiding-spots-guide/" },
      { name: "meccha-chameleon.net", url: "https://meccha-chameleon.net/maps/best-hiding-spots/" },
      { name: "mecchachameleongame.wiki Hider Guide", url: "https://mecchachameleongame.wiki/hider-guide/" },
    ],
    howToWin: [
      "TheGamer / meccha-chameleon.net: stand deepest in alcove; brick layers create value gradient that hides slight hue error.",
      "Sample darkest brick face at torso height, not lighter mortar — warm brick #A0522D range is the easiest official-map palette to approximate.",
      "Horizontal course lines on torso break the body read; wall-flat pose with shoulders in the deepest wedge of the alcove.",
      "Second-floor stair sightline may expose alcoves — pick positions away from iron stair cone and open loft overlooks (meccha-chameleon.net explicit warning).",
      "Rotate to Pipe Crawl (77%) when seekers push upstairs — ground-floor industrial wall line without crossing loft center.",
    ],
    paintLayers: [
      { bodyPart: "Torso", sampleFrom: "Darkest brick face at torso height in alcove recess", technique: "Horizontal course lines matching brick striping" },
      { bodyPart: "Mortar lines", sampleFrom: "Brick course mortar shadow between faces", technique: "Thin horizontal strokes — never one flat fill" },
      { bodyPart: "Alcove depth / shoulders", sampleFrom: "Recessed shadow in deepest wedge of wall alcove", technique: "Shoulders pressed into deepest part — TheGamer positioning" },
      { bodyPart: "Lit brick edge", sampleFrom: "Slightly brighter brick on same course if visible", technique: "HSV Value one step up on lit side only" },
    ],
    poseAdvice: "Wall-flat in deepest alcove — pressing into corner removes edges seekers scan for (9Puz / Steam screenshot guidance).",
    finishSettings: ["Brick matte — metallic 0", "Roughness matched to exposed brick texture"],
    seekerWindow: "Warm brick forgives minor hue error on round one; open loft second-floor sightlines are the main counter — smart seekers overlook down before clearing ground floor.",
  },

  "mansion-kitchen-poster": {
    sources: [{ name: "TheGamer", url: "https://www.thegamer.com/mecca-chameleon-best-hiding-spots-guide/" }],
    howToWin: [
      "TheGamer: kitchen wall poster — paint to match the poster on the wall.",
      "Poster reads as flat block from distance; border and mid-tone need separate samples.",
      "Object-mimic beats blank wall (SlashSkill).",
    ],
    paintLayers: [
      { bodyPart: "Main body", sampleFrom: "Poster mid-tone", technique: "Flat block" },
      { bodyPart: "Border", sampleFrom: "Poster border", technique: "Separate sample" },
      { bodyPart: "Adjacent wall", sampleFrom: "Kitchen wall beside poster", technique: "Outer edge blend" },
    ],
    poseAdvice: "Wall-flat against poster.",
    finishSettings: ["Poster usually matte print", "Metallic low"],
    seekerWindow: "Kitchen is an early Seeker zone; flat poster works from doorway view.",
  },

  "sewer-locker-room": {
    sources: [{ name: "IGN Sewer section", url: "https://www.ign.com/wikis/meccha-chameleon/All_Maps_in_Meccha_Chameleon:_Best_Hiding_Spots" }],
    howToWin: [
      "IGN: locker room side area — overhead lighting shadows + open drawers.",
      "Use overhead shadow for camouflage; compact shape fits drawer/locker gap.",
      "Dim lighting helps Hiders, but still split lit/shadow after v1.1.0 shadow brightening.",
    ],
    paintLayers: [
      { bodyPart: "Lit side", sampleFrom: "Locker/drawer lit face", technique: "Slightly brighter" },
      { bodyPart: "Overhead shadow", sampleFrom: "Drawer interior dark under overhead light", technique: "Torso away-from-light" },
      { bodyPart: "Metal locker", sampleFrom: "Locker door metal mid-tone", technique: "Match metallic" },
    ],
    poseAdvice: "Compact in open drawer or locker gap.",
    finishSettings: ["Locker metal: medium metallic", "Drawer interior matte"],
    seekerWindow: "Side room not center of first sweep; slow sweep when checking lockers.",
  },

  "backrooms-vending-machine": {
    sources: [{ name: "meccha-chameleon.wiki Backrooms", url: "https://meccha-chameleon.wiki/maps/backrooms/" }],
    howToWin: [
      "meccha-chameleon.wiki: top vending row — lie along slot line; minimal paint can read as extra product row.",
      "Paint slot dividers, not just product color, to sell the grid illusion.",
      "Low-skill, high-reward when fast; Seekers crouch-inspect vending fronts.",
    ],
    paintLayers: [
      { bodyPart: "Visible front", sampleFrom: "Product slot main color", technique: "Basic color blocking" },
      { bodyPart: "Dividers", sampleFrom: "Slot divider color", technique: "Grid lines essential" },
      { bodyPart: "Machine frame", sampleFrom: "Vending frame shadow", technique: "Edge cleanup" },
    ],
    poseAdvice: "Ultra-low silhouette along top row.",
    finishSettings: ["Plastic front semi-gloss", "Slot dividers matte"],
    seekerWindow: "IGN Jen: watch angles; crouch pass checks human-width spacing.",
  },

  "backrooms-office-corner": {
    sources: [{ name: "IGN Backrooms", url: "https://www.ign.com/wikis/meccha-chameleon/All_Maps_in_Meccha_Chameleon:_Best_Hiding_Spots" }],
    howToWin: [
      "IGN: office corners are tricky to fit but Chameleons can wedge in.",
      "Trash against wall corners — blend with trash cluster (same IGN section).",
      "Cramped wedge + shadow underside; no wall-clip after v1.2.0.",
    ],
    paintLayers: [
      { bodyPart: "Wall", sampleFrom: "Corner wallpaper mid-tone", technique: "Re-sample at each threshold" },
      { bodyPart: "Trash/object", sampleFrom: "Corner trash color block", technique: "If mimicking clutter" },
      { bodyPart: "Floor shadow", sampleFrom: "Corner floor dark patch", technique: "Low wedge" },
    ],
    poseAdvice: "Compact wedge into office corner.",
    finishSettings: ["Wallpaper matte", "Metallic 0"],
    seekerWindow: "Hunters spend time fit-checking; small room = higher traffic risk.",
  },

  "penguin-plush-room": {
    sources: [{ name: "IGN Penguin Hotel", url: "https://www.ign.com/wikis/meccha-chameleon/All_Maps_in_Meccha_Chameleon:_Best_Hiding_Spots" }],
    howToWin: [
      "IGN: plush side room — blend with plushes or against bookcases where they're kept.",
      "Object clusters forgive slight hue error (dq7reimagined pattern guide).",
      "Several options in one room — pick pose that breaks silhouette first.",
    ],
    paintLayers: [
      { bodyPart: "Visible zone", sampleFrom: "Target plush main color", technique: "Block color" },
      { bodyPart: "Bookcase back", sampleFrom: "Bookcase back if against shelves", technique: "Secondary sample" },
      { bodyPart: "Shadow", sampleFrom: "Plush pile dark patch", technique: "Limb edges" },
    ],
    poseAdvice: "Mimic plush or tuck against bookcase backs.",
    finishSettings: ["Plush fabric matte", "Metallic 0"],
    seekerWindow: "Peripheral room; Seekers clear ballroom first.",
  },

  "cold-storage-tile-grid": {
    sources: [{ name: "meccha-chameleon.net Cold Storage", url: "https://meccha-chameleon.net/maps/cold-storage/" }],
    howToWin: [
      "meccha-chameleon.net: tile wall grid — works only if pose respects tile lines.",
      "Wrong silhouette exposes fast; pattern direction beats hue.",
      "Dual-sample tile + grout; short strokes follow grid.",
    ],
    paintLayers: [
      { bodyPart: "Tile face", sampleFrom: "Body-touching tile", technique: "Grid-aligned strokes" },
      { bodyPart: "Grout", sampleFrom: "Tile grout line", technique: "Separate sample" },
      { bodyPart: "Shadow", sampleFrom: "Tile grid corner shadow", technique: "Value down" },
    ],
    poseAdvice: "Pose lock aligned to horizontal/vertical tile lines.",
    finishSettings: ["Tile semi-gloss — lower metallic after patch", "Grout matte"],
    seekerWindow: "Pattern spots need a slow Seeker to catch line breaks.",
  },

  "white-elbow-trap": {
    sources: [{ name: "SlashSkill", url: "https://www.slashskill.com/meccha-chameleon-tips-how-to-win-as-hider-and-seeker-and-master-the-paint-tool/" }],
    howToWin: [
      "Not a spot — SlashSkill #1 day-one mistake: white gaps between limbs.",
      "Middle-mouse 360° rotation check all angles before prep ends.",
      "White elbows end more rounds than bad spots (Mobalytics agrees).",
    ],
    paintLayers: [
      { bodyPart: "Elbows/knees/armpits", sampleFrom: "Extend adjacent painted zone", technique: "Edge cleanup last" },
      { bodyPart: "Finger gaps/joints", sampleFrom: "Same as torso base", technique: "Zoom check" },
      { bodyPart: "Full body", sampleFrom: "Any missed white patch", technique: "See-through view (key 3 per SlashSkill color guide)" },
    ],
    poseAdvice: "Touch up newly exposed areas after posing (mecchachameleongame.wiki paint workflow step 5).",
    finishSettings: ["N/A — technique lesson, not a camp spot"],
    seekerWindow: "Seekers hunt shapes, not colors — white gap = instant shape tell.",
  },
};

/** Map-level fallback tables from mecchachameleongame.wiki when spot has no dedicated entry. */
const MAP_FALLBACK: Record<
  string,
  { sources: GuideSource[]; paintNote: string; poseNote: string; winTips: string[] }
> = {
  mansion: {
    sources: [{ name: "mecchachameleongame.wiki Mansion Guide", url: "https://mecchachameleongame.wiki/maps/mansion/" }],
    paintNote: "Sample exact surface behind body; tile/grout or wood grain need directional strokes, not flat fill.",
    poseNote: "Match surface: crouch for shelves/furniture, flat for walls, lie down for ceiling.",
    winTips: [
      "Spend the first third of prep on spot choice, then sample immediately (SlashSkill).",
      "Seeker sweep order: Main Room → Kitchen shelves → Library → Bathroom → ceiling pillars → Hallway.",
    ],
  },
  sewer: {
    sources: [{ name: "mecchachameleongame.wiki Sewer Guide", url: "https://mecchachameleongame.wiki/maps/sewer/" }],
    paintNote: "Pipe, barrel, and graffiti each need separate samples — never one dark palette for all.",
    poseNote: "Horizontal for pipes, prone for barrel tops, flat for graffiti.",
    winTips: ["Look-up check is part of Seeker first pass.", "After v1.1.0 do not rely on pure black shadow."],
  },
  backrooms: {
    sources: [{ name: "mecchachameleongame.wiki Backrooms Guide", url: "https://mecchachameleongame.wiki/maps/backrooms/" }],
    paintNote: "Object + wall dual sample; lit/shadow sides separate after v1.1.0.",
    poseNote: "Flat for wall objects, compact for furniture stacks.",
    winTips: ["v1.2.0 wall-clip patched — legitimate spots only.", "Re-sample wallpaper at every doorway."],
  },
  "penguin-hotel": {
    sources: [{ name: "IGN Maps Wiki", url: "https://www.ign.com/wikis/meccha-chameleon/All_Maps_in_Meccha_Chameleon:_Best_Hiding_Spots" }],
    paintNote: "Sample exact surface; ice zones need lower metallic after v1.1.0 reflectivity bump.",
    poseNote: "Prop mimic or edge positions; avoid ballroom center camping.",
    winTips: ["IGN covers ballroom, plush, bedroom, and hallway zones separately.", "Pool/reflection zones: transit only — re-sample at deck edge."],
  },
  "cold-storage": {
    sources: [{ name: "meccha-chameleon.net", url: "https://meccha-chameleon.net/maps/cold-storage/" }],
    paintNote: "Cold steel gray mandatory — warm undertone pops. Sample shelf shadow, not aisle edge.",
    poseNote: "Depth in shelf gaps; pose must respect tile lines on grid spots.",
    winTips: ["Rotate meat shelf / rear row / under-shelf between rounds.", "Seekers tunnel aisles — utility corners get skipped."],
  },
  "brick-loft": {
    sources: [{ name: "meccha-chameleon.net", url: "https://meccha-chameleon.net/maps/best-hiding-spots/" }],
    paintNote: "Brick course horizontal lines; sample mortar + face separately.",
    poseNote: "Horizontal for beam gap, wall-flat for alcove; window zones punish movement.",
    winTips: ["Second floor gives Seekers height advantage.", "Window sill: sample shadow underside, not sunlit top brick."],
  },
  "indoor-country": {
    sources: [
      { name: "TheGamer — Indoor Country (Jun 27, 2026)", url: "https://www.thegamer.com/mecca-chameleon-best-hiding-spots-guide/" },
      { name: "IGN Indoor Country section", url: "https://www.ign.com/wikis/meccha-chameleon/All_Maps_in_Meccha_Chameleon:_Best_Hiding_Spots" },
      { name: "GameRant Indoor Country spots", url: "https://gamerant.com/meccha-chameleon-best-hiding-spots/" },
    ],
    paintNote: "Hay gold, teal accent, and standee surfaces each need separate samples — one barn brown fill fails on prop mimics.",
    poseNote: "Prop mimic on cow standees; crouch on fallen standees; ceiling balloons need prep finished before hunt.",
    winTips: [
      "TheGamer 6/27: cow standee and hay-barn dual-tone are top new-map picks.",
      "IGN: pumpkin patch and hay pile draw seeker checks — rotate after one successful round.",
    ],
  },
  sugarland: {
    sources: [
      { name: "IGN Sugarland section", url: "https://www.ign.com/wikis/meccha-chameleon/All_Maps_in_Meccha_Chameleon:_Best_Hiding_Spots" },
      { name: "GameRant Sugarland spots", url: "https://gamerant.com/meccha-chameleon-best-hiding-spots/" },
    ],
    paintNote: "Saturated candy surfaces — sample one panel exactly; white joint gaps read instantly on bright hues.",
    poseNote: "Vertical cake tiers and locker climbs need prep finished before hunt; ground gingerbread ring favors crouch.",
    winTips: ["IGN: gumdrop center and cake tree are high-traffic community picks.", "Lower metallic on glossy candy props (GameRant chocolate fountain note)."],
  },
  osaka: {
    sources: [
      { name: "IGN Osaka section", url: "https://www.ign.com/wikis/meccha-chameleon/All_Maps_in_Meccha_Chameleon:_Best_Hiding_Spots" },
      { name: "ASCII.jp — Osaka map launch", url: "https://ascii.jp/elem/000/004/412/4412748/" },
    ],
    paintNote: "Mixed lantern reds and signage blues — commit to one surface, never mid-blend urban pixels.",
    poseNote: "Truck bed needs shadow values; signage/octopus zone rewards vertical prep before hunt phase.",
    winTips: [
      "Smallest official map — seekers re-check areas fast (IGN).",
      "JP community highlights Uni Douraku storefront disguises near shop clutter.",
      "v2.5.0 (July 2026) reworked Osaka geometry — re-verify truck bed, signage, and alley spots in a private lobby before ranked play.",
    ],
  },
};

const PAINT_SYSTEM_SOURCE: GuideSource = {
  name: "mecchachameleongame.wiki Paint System",
  url: "https://mecchachameleongame.wiki/paint-system/",
};

const SLASHSKILL_SOURCE: GuideSource = {
  name: "SlashSkill Paint Tips",
  url: "https://www.slashskill.com/meccha-chameleon-tips-how-to-win-as-hider-and-seeker-and-master-the-paint-tool/",
};

function buildFallbackGuide(spot: HiddenSpot): SpotGuideSourced {
  const fb = MAP_FALLBACK[spot.mapSlug];
  const sources = fb ? [...fb.sources, PAINT_SYSTEM_SOURCE] : [PAINT_SYSTEM_SOURCE, SLASHSKILL_SOURCE];

  return {
    sources,
    howToWin: [
      ...(fb?.winTips ?? ["Spot first, paint second (mecchachameleongame.wiki paint workflow)."]),
      `Pro tip from our database: ${spot.tips}`,
      `Source: ${spot.source} — re-verify in a private lobby after major patches.`,
    ],
    paintLayers: [
      {
        bodyPart: "Torso base",
        sampleFrom: `Primary surface at ${spot.name} (F → paint menu, Space eyedropper)`,
        technique: fb?.paintNote ?? "Block main tone, add one shadow tone on away-from-light side",
      },
      {
        bodyPart: "Shadow side",
        sampleFrom: "Nearby shadow or darker patch at lock position",
        technique: "HSV Value one step down — never sample a similar surface across the room",
      },
      {
        bodyPart: "Limb / head edges",
        sampleFrom: "Surface adjacent to limbs at lock height",
        technique: "360° white-gap check before prep ends (SlashSkill #1 day-one mistake)",
      },
    ],
    poseAdvice: fb?.poseNote ?? spot.tips.split(".")[0] ?? "Choose pose before final touch-up.",
    finishSettings: [
      "Match metallic / roughness to surface (SlashSkill: sheen mismatch exposes faster than hue error)",
      "Matte wall → low metallic; metal pipe/barrel → medium–high metallic",
    ],
    seekerWindow: `Guide rating ${spot.survivalRate}/100 — difficulty tier from ${spot.source}, not live match statistics.`,
  };
}

export function getSpotGuideSourced(spot: HiddenSpot): SpotGuideSourced {
  const dedicated = SPOT_GUIDES[spot.slug];
  if (dedicated) return dedicated;
  return buildFallbackGuide(spot);
}

/** Universal note from official/community guides — colors are dynamic, no static hex. */
export const PAINT_HEX_DISCLAIMER =
  "TheGamer, IGN, and mecchachameleongame.wiki all recommend the in-game Eyedropper (Space) on the exact surface you touch — not fixed hex/RGB codes. Lighting and patches change effective values; the table below lists which surface to sample per body part and how to apply it.";
