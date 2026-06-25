import type { Guide } from "./types";

export const prepPhaseGuide: Guide = {
  slug: "prep-phase-guide",
  title: "Prep Phase Mastery: Paint, Pose & Lock",
  category: "Beginner",
  readTime: "13 min",
  excerpt:
    "Prep timeline, fast spot selection, eyedropper sampling workflow, pose lock choice, edge refinement, relocation triggers, and solo practice.",
  content: [
    {
      id: "prep-timeline",
      heading: "Prep Timeline — The First Third Rule",
      body: "Every round opens with a prep phase before seekers hunt. Most losses happen because hiders treat prep as idle time. The first third rule: spend the opening third of prep on movement and spot selection only — no premature locking in a spot you will abandon. Middle third: sample, pose lock, refine edges. Final third: freeze, listen for lobby audio, micro-adjust only if safe. Rushing lock in the first five seconds feels productive but traps you in ballroom center or open Sewer junction when a better shelf back was one room away. Seekers watch ceilings during hunt phase, not prep — use prep to reach overhead or deep shelf positions that are unsafe to enter once hunt starts. If your lobby skips prep in custom rules, practice the same timeline in solo mode with a timer. Map familiarity shortens selection phase — beginners on Mansion should still obey first third rule until three verified spots from meccha.wiki are muscle memory. Prep won is round half won. Watch seeker count in lobby — larger seeker teams mean safer deep prep routes because chases spread thinner early.",
    },
    {
      id: "choosing-spot",
      heading: "Choosing a Spot Fast — Decision Tree Under Timer",
      body: "Fast spot choice is a decision tree, not random running. Step one: reject danger zones immediately — ballroom center, Backrooms long corridor, Cold Storage loading bay, Brick Loft window wall. Step two: prefer spots with single approach vector so you hear seekers coming. Step three: prefer texture noise — shelves, pipes, chair stacks — over flat walls. Step four: if two spots tie, pick darker value zone for shadow forgiveness. Step five: if still tied, pick spot closest to rotation loop exit. Do not chase viral clip spots if path crosses open kill box during prep — arrive locked and ready, not sampling in doorframe when hunt starts. Community database survival rates help when you know the map; on unknown workshop maps, pick clutter over beauty. Changing spot mid-prep is cheaper than relocating during hunt — abort bad choice before lock if timer allows. Speed comes from pre-reading map pages on meccha.wiki before queue, not inventing routes after spawn. If two spots tie on paper, walk the closer one — extra prep seconds for edge refinement beat extra seconds running across map.",
    },
    {
      id: "sampling-workflow",
      heading: "Sampling Workflow — Eyedropper Discipline",
      body: "Eyedropper sampling is the core mechanic: point at environmental pixel, confirm color adoption on your model, adjust before lock. Workflow: approach surface, eyedropper chest-height pixel on the plane your body will touch, not floor or ceiling unless hiding there. Check shoulders and feet for value mismatch in preview if game shows it. Dual-texture zones get two samples compared — pick winner by outline break. Gradient zones sample darker wedge when crouching. Re-sample after any movement longer than two steps — carried color lies. On Backrooms, sample every doorway. On Cold Storage, reject warm samples instantly. Emergency speed sampling is subset of full workflow — still chest-height, still local pixel. Practice on Mansion side bathroom tile-grout until sample feels automatic under ten seconds from spot arrival. Bad sampling cannot be fixed by pose lock — lock preserves error perfectly. Pair sampling with map palette section of the Advanced Color Matching Guide on meccha.wiki for hex starting points, always confirm in-game. Say the three steps aloud in prep — spot pixel, adopt color, confirm edges — until the habit is silent and fast.",
    },
    {
      id: "pose-selection",
      heading: "Pose Selection — Flat, Crouch, and Prop Mimic",
      body: "Pose lock commits your silhouette for the round segment — breaking pose costs seconds and movement tells. Flat wall pose: default for flat color blocks and tight corners. Crouch: lowers profile for grout lines, chair stacks, shelf gaps, under desks. Prop mimic: statue, barrel, object poses on Penguin Hotel ice, Mansion statuary, Sewer barrels — requires prop-surface sample not wall behind. Choose pose before lock that matches texture direction — horizontal brick mortar, vertical book spines. Wrong pose on right color still boxes your outline. Ceiling hides need poses that minimize vertical rectangle — pipe hug, beam align. Do not pick flashy mimic in open zone where seekers scan props first round. Test poses in solo prep to see seeker camera read — what looks clever to you may glow from default seeker height. Lock only when pose and color agree; unlocking to fix pose without re-sample is common beginner failure. Name your three poses out loud once — flat, crouch, mimic — so prep decisions happen in one second not five.",
    },
    {
      id: "too-buried",
      heading: "Too-Buried Warning — Clipping, Depth, and Seeker Patience",
      body: "Too-buried means hiding so deep in geometry that clip camera, stuck exit, or seeker slow-check catches you anyway. Shelf gaps in Cold Storage, wall clips on Backrooms, tight pipe clusters on Sewer — all tempt over-burying for safety. Signs you are too buried: cannot see door audio source, exit requires unlock plus multi-step move, clip puts part of body outside texture. Seekers with patience clear deep spots on round two while you cannot reposition. Better: moderately deep with clean exit and single re-sample on leave. Wall-clip spots from old patches may be too-buried or patched out in v1.2.0 — verify on meccha.wiki before prep locking. Too-buried also triggers in prop mimic inside crowded prop pile — outline intersects second prop color. Rule: if exit takes more than one second from lock, spot is for endgame clock only not full round camp. Depth is tool, not goal.",
    },
    {
      id: "refining-edges",
      heading: "Refining Edges — Shoulders, Feet, and Halos",
      body: "After sample and pose lock, use remaining prep seconds on edge refinement. Shoulders and feet cause most halos — slightly wrong value at extremities reads human before center mass. Shift lock position inches along same wall to tuck shoulders into shadow wedge. Crouch to hide feet on gradient floors. On tile-grout, align feet with dark line. On bookshelves, hide hands between spines not beside bright book edge. Micro-strafe before final freeze — some lobbies allow minor position adjust without breaking lock rules; know your patch behavior. Do not refine into open sightline while fixing halo — edge fix that exposes you to door is net loss. Seekers train on shoulder blobs — eliminating halo matters more than perfect hue on torso. If prep timer ends mid-refine, freeze — stillness beats shuffle during hunt start audio. Record which maps need most edge work: Backrooms yellow minimal halo tolerance, Mansion bathroom high reflectivity after tile patches.",
    },
    {
      id: "when-relocate",
      heading: "When To Relocate — Prep Abort and Mid-Round Moves",
      body: "Relocate during prep when spot fails checklist: open sightline from spawn seeker paths, wrong color block, danger zone home, or teammate already locking same cluster. Abort before final third freeze when possible. Mid-round relocation is last resort — seeker audio near, color tell spotted, teammate chase drawing seekers to your zone. Relocation sequence: wait back-turn or chase audio cover, eyedropper at wall along exit path, move along walls not centers, re-lock in pre-scouted secondary spot from same map loop. Never panic-run open floor — sample-lock-freeze two seconds if spotted mid-move. Maps with strong rotation loops favor relocate; dead-end maps favor duel in depth. If two seekers collapse your zone, relocate once — second relocate in same round usually dies to clock. Prep-phase mastery reduces mid-round relocates to rare events. Mark secondary spots when learning a map — primary from database, backup one room away with sample already mentally noted.",
    },
    {
      id: "solo-practice",
      heading: "Solo Practice Mode — Drills That Transfer",
      body: "Solo practice builds prep speed without lobby chaos. Drill one: spawn to three verified spots on Mansion under prep timer — no lock until third spot evaluated, then full workflow on best. Drill two: sample-lock-freeze on random wall when friend counts down or timer beeps — trains emergency muscle. Drill three: pose catalog — flat, crouch, one prop mimic per map official, screenshot seeker view if spectate available. Drill four: edge refinement only round — intentionally offset sample, fix in prep final third. Drill five: workshop unknown map five-minute scout from workshop meta guide. Log failures: bad spot, bad sample, bad pose, bad bury — categorize death cause honestly. Pair solo prep with meccha.wiki spot pages — practice spots with high survival rates first, then experiment. Solo does not train seeker psychology — add one public lobby daily after drills. Prep mastery is repetitive; repetition is why first-third rule separates players who lock ready from players who lock scared. Time your drills: record prep-to-lock seconds and chase sub-twenty on Mansion before adding Sewer vertical routes.",
    },
    {
      id: "prep-checklist",
      heading: "Pre-Hunt Checklist — Ten Seconds Before Seekers Move",
      body: "In the final ten seconds of prep, run a fixed checklist: color match at chest and feet, pose aligned to texture, no shoulder halo, exit path confirmed, audio direction noted. If any item fails and timer allows, fix the cheapest failure — usually edge halo or wrong sample height. Do not start new relocation unless failure is spot-level, not refinement-level. Breathe and freeze — movement during hunt start audio is a tell seekers listen for. Memorize this checklist until it takes three seconds; the remaining seven seconds are margin for map-specific fixes like Backrooms doorway re-sample. Print mentally: spot, sample, pose, edges, exit, freeze. Players who treat these ten seconds as sacred win rounds without ever being the flashiest clip on the feed. Pair this checklist with the Prep Phase Mastery timeline from section one — first third movement, middle third lock, final third this checklist — and prep becomes a repeatable system instead of round-to-round improvisation.",
    },
  ],
};
