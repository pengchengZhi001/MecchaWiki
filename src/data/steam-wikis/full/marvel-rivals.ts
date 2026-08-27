import type { FullWiki, WikiImage } from "../types";
import { steamHeader, steamHero } from "@/lib/steam-wiki";

const APP = 2767030;

function header(alt: string): WikiImage {
  return { src: steamHeader(APP), alt };
}

function hero(alt: string): WikiImage {
  return { src: steamHero(APP), alt };
}

export const marvelRivalsWiki: FullWiki = {
  slug: "marvel-rivals",
  hubs: { maps: "Maps", roles: "Roles", strats: "Setups" },
  copy: {
    home: {
      strats: "Comps, payload fights, and Team-Ups — not a six-duelist montage.",
      roles: "Strategist and a real Vanguard first. Flanks last.",
      maps: "One convoy, one domination, then the rest of the pool.",
      guides: "Beginner path, roles, objectives, ultimates, ranked, and settings.",
    },
    pages: {
      maps: "Convoy, Convergence, and Domination. Learn what the cart is doing before you learn every sightline.",
      roles: "Fill the missing role. Six Duelists is a highlight reel that loses the point.",
      strats: "Compositions, first fights, dives, poke holds, and Team-Ups that are actually in the lobby.",
    },
  },
  maps: [
    {
      slug: "yggdrasill-path",
      name: "Yggdrasill Path",
      difficulty: "Easy",
      tagline: "The onboarding convoy: first corner, first high ground, and a cart that does not care about your K/D.",
      overview:
        "Yggdrasill Path (Yggsgard) is a Convoy map — attack loads the cart and walks it, defense stalls checkpoints. Learn the first choke, the first high ground, and where a dead Vanguard means the cart freezes. Destruction opens sightlines; a broken wall is a new Hela angle for both teams. Call cart, high ground, and the off-angle behind the payload before you invent callouts from a streamer VOD.",
      stats: [
        { label: "Mode", value: "Convoy (payload)" },
        { label: "Learn first", value: "Yes — simplest cart pattern" },
        { label: "Win condition", value: "Cart progress with two people on it, not a spawn-room chase" },
      ],
      poi: [
        { name: "First choke", note: "Attack needs a Vanguard to take the door. Six Duelists peeking it is a freeze." },
        { name: "Cart body", note: "Cover and a contest. Standing on it while the team is 40m left is still the objective." },
        { name: "High ground", note: "Hela / Punisher / Luna lines. Lose it and the cart becomes a shooting gallery." },
        { name: "Destroyed walls", note: "New sightlines. Do not stand in the hole you just made." },
        { name: "Checkpoint", note: "Defense stacked ults. Attack should not trickle in one at a time after a wipe." },
      ],
      notes: [
        "If nobody is on the cart, you are not attacking. Kills in the spawn door do not count as meters.",
        "Defense: a stall with two Strategists alive is better than a heroic 1v6 on the cart.",
        "Team-Ups that need a specific pair only work if that pair locked. Check the lobby.",
      ],
      image: header("Marvel Rivals Yggdrasill Path convoy"),
      seoKeywords: ["Yggdrasill Path", "Rivals convoy", "Yggsgard map"],
    },
    {
      slug: "midtown",
      name: "Midtown",
      difficulty: "Medium",
      tagline: "New York streets, long sightlines, and a cart that punishes teams who never look up.",
      overview:
        "Midtown is a Convoy through Manhattan-style blocks. Corners, fire escapes, and broken facades create the same lesson as Yggdrasill with more verticality. Attack wants a tank on the cart and a Duelist on the off-angle after the first cooldown is spent. Defense wants to hold the next corner, not chase a kill into the previous checkpoint. If you only play street level, Hela and Hawkeye own you.",
      stats: [
        { label: "Mode", value: "Convoy" },
        { label: "Key space", value: "High ground + next corner" },
        { label: "Fail state", value: "Whole team off cart chasing a spawn-room Magik" },
      ],
      poi: [
        { name: "Street / cart path", note: "The objective. Two bodies on it while the rest peels is a push." },
        { name: "Rooftops", note: "Poke Duelists and some Strategist lines. Contest or smoke/cover — do not ignore." },
        { name: "Side alleys", note: "Dive Vanguards and flanks. A Venom from the alley is the fight, not a surprise for the fifth time." },
        { name: "Broken storefronts", note: "Destruction. New crossfires. Reset behind a wall that still exists." },
        { name: "Last stretch", note: "Stacked ults. Count Luna / Invisible Woman / Mag / Strange before you dump yours." },
      ],
      notes: [
        "A sniper off the cart is only useful if the cart is still moving. If it is frozen, you are griefing meters.",
        "Supports: heal the Vanguard taking the corner, not the Duelist already in their spawn.",
        "After a wall falls, assume the enemy sniper has the same hole.",
      ],
      image: header("Marvel Rivals Midtown payload"),
      seoKeywords: ["Marvel Rivals Midtown", "Midtown Rivals map", "Rivals New York"],
    },
    {
      slug: "shin-shibuya",
      name: "Shin-Shibuya",
      difficulty: "Medium",
      tagline: "Tokyo 2099 convoy: neon chokes, vertical ads, and a cart that disappears if you tunnel the first duel.",
      overview:
        "Shin-Shibuya is a Tokyo 2099 Convoy. Tight streets, ads you can stand on, and destruction that turns a safe corner into a hallway. Attack should take the next piece of cover as a group; defense should not all-in the first fight if the cart is still a full checkpoint away. Flank Duelists love the vertical. Strategists who stand in the neon street get deleted by the same Hela every round.",
      stats: [
        { label: "Mode", value: "Convoy" },
        { label: "Feel", value: "Tighter than Midtown — less forgiven peeks" },
        { label: "Key", value: "Next cover as a team, not six staggered 1v1s" },
      ],
      poi: [
        { name: "Neon street", note: "Cart path. Open = death for backline. Use the cart and remaining walls." },
        { name: "Signage / ledges", note: "Vertical off-angles. If nobody looks up, you lose to the same hero twice." },
        { name: "Side shops", note: "Dive paths. Call the flank; mute ping is not a call." },
        { name: "Checkpoint plaza", note: "Ult economy. Trickle is how you donate a full six ults into two." },
        { name: "Destroyed facade", note: "New sightline. Reposition or you are a free elim for poke." },
      ],
      notes: [
        "Close-range brawlers can win streets if the Vanguard actually walks forward.",
        "Do not ult into a support cooldown you did not track. That is the whole ranked ladder.",
        "If your Team-Up partner insta-locked a different role, your kit is missing a button. Swap.",
      ],
      image: header("Marvel Rivals Shin-Shibuya Tokyo 2099"),
      seoKeywords: ["Shin-Shibuya", "Tokyo 2099 Rivals", "Marvel Rivals Tokyo"],
    },
    {
      slug: "spider-islands",
      name: "Spider-Islands",
      difficulty: "Medium",
      tagline: "Webbed vertical convoy — flyers and swing heroes get a map that looks unfair until you look up.",
      overview:
        "Spider-Islands is Tokyo 2099 with more air. Spider-Man, Iron Man, Storm, and other vertical kits get real value. Ground-only teams still win if they play the cart and peel the backline. The mistake is treating every fight like a street brawl while three people are above you. Defense holds the next island/choke; attack groups after a wipe instead of trickling across the gap.",
      stats: [
        { label: "Mode", value: "Convoy" },
        { label: "Vertical", value: "High — look up or lose" },
        { label: "Peel", value: "Strategists need a Vanguard who turns around" },
      ],
      poi: [
        { name: "Cart / bridges", note: "Objective. Air heroes still have to contest it to win." },
        { name: "Overhead webs / ledges", note: "Dive and flyer perch. One person should be assigned to look up." },
        { name: "Underpass", note: "Ground dive. Cap and Venom still exist on this map." },
        { name: "Open gaps", note: "Trickle graveyard. Group, then walk. Solo Magik across the gap is a free ult farm for them." },
        { name: "Last checkpoint", note: "Stacked defensive ults. Bait one, then go." },
      ],
      notes: [
        "If you cannot hit flyers, pick a hitscan or a projectile that actually reaches. Swinging into them as a third melee is not a plan.",
        "Supports: do not stand on the most open web. Cover still exists.",
        "Team-Ups with aerial partners are stronger here — only if both locked.",
      ],
      image: header("Marvel Rivals Spider-Islands"),
      seoKeywords: ["Spider-Islands", "Rivals Tokyo map", "Marvel Rivals Spider-Man map"],
    },
    {
      slug: "hydra-charteris",
      name: "Hydra Charteris Base",
      difficulty: "Medium",
      tagline: "Convergence: cap the point, then push the cart. Two games in one, and pubs forget the second.",
      overview:
        "Hydra Charteris Base is Convergence — capture a point, then escort. Teams that win the cap and then wander lose the cart. Teams that never group for the cap stall forever. Destruction in the interior creates brutal close angles; Peni and Groot walls change the point more than a fourth Duelist. Play the mode you are in: point first, meters second.",
      stats: [
        { label: "Mode", value: "Convergence (hybrid)" },
        { label: "Phase 1", value: "Capture" },
        { label: "Phase 2", value: "Convoy — do not celebrate the cap and AFK" },
      ],
      poi: [
        { name: "Capture point", note: "Bodies on it. Off-angle duels that never touch the point do not cap." },
        { name: "Interior halls", note: "Close Vanguards and area denial. Walls and nests matter." },
        { name: "Cart after cap", note: "The actual second half. Group up. The other team is also grouping." },
        { name: "High catwalks", note: "Poke. Clear them or the point is a farm." },
        { name: "Spawn doors", note: "Overextending after a won fight is how you get staggered into overtime." },
      ],
      notes: [
        "Overtime on the point is a full commit. Trickling in overtime is a throw.",
        "After you cap, you are now on Convoy rules. Someone get on the cart.",
        "Peni mines and Groot walls are map control. Break them or play another street.",
      ],
      image: header("Marvel Rivals Hydra Charteris Base"),
      seoKeywords: ["Hydra Charteris", "Rivals Convergence", "Marvel Rivals hybrid"],
    },
    {
      slug: "hall-of-djalia",
      name: "Hall of Djalia",
      difficulty: "Easy",
      tagline: "Wakanda domination: three points, stagger math, and the team that stops running it down mid.",
      overview:
        "Hall of Djalia is Domination — rotating control points. You win by holding two, not by chasing a 1v1 on the empty third while they cap yours. Stagger is the silent killer: if you trickle back in, you donate a full fight. Call which point you are playing, group after a wipe, and do not all six sit on one pad while the other two flip. High ground in the hall still exists; poke heroes will remind you.",
      stats: [
        { label: "Mode", value: "Domination" },
        { label: "Win", value: "Two points and a grouped fight" },
        { label: "Lose", value: "Six staggered deaths across three pads" },
      ],
      poi: [
        { name: "Point A / B / C", note: "Know which is active. Playing the last round's point is a classic throw." },
        { name: "Rotations", note: "The real map. Tanks who never rotate are why you hold one and lose two." },
        { name: "High ledges", note: "Hela / Hawkeye / Luna. Contest or you never step on the pad." },
        { name: "Chokes between points", note: "Where dives happen. Peel here, not 30m off the objective." },
        { name: "Spawn path", note: "Do not 1v6 the moment you leave spawn. Group. Stagger is the mode." },
      ],
      notes: [
        "A 4–5 point lead is not a reason to split. One grouped fight still flips two pads.",
        "Supports rotate with the Vanguard. A Strategist solo on a flipped point is a gift.",
        "Ultimates win the grouped fight on the point you actually need. Ult on the empty third is content.",
      ],
      image: header("Marvel Rivals Hall of Djalia Wakanda"),
      seoKeywords: ["Hall of Djalia", "Rivals Domination", "Wakanda Rivals map"],
    },
    {
      slug: "hells-heaven",
      name: "Hell's Heaven",
      difficulty: "Medium",
      tagline: "Domination with brutal mid fights — the map that looks like a brawl and still rewards the grouped reset.",
      overview:
        "Hell's Heaven is Domination in a Hydra / infernal aesthetic: tight mid, hard chokes, and fights that feel like they should be won with a fourth Duelist. They are not. Two points, grouped ults, and a Vanguard who creates space on the pad you need. Destruction makes already-short ranges shorter. If you are staggered, you are losing even when the scoreboard looks even.",
      stats: [
        { label: "Mode", value: "Domination" },
        { label: "Range", value: "Close-to-mid — brawl comps shine if they group" },
        { label: "Key", value: "Reset together after a wipe" },
      ],
      poi: [
        { name: "Mid choke", note: "Where the first cooldown is spent. Do not dump every defensive CD on chip." },
        { name: "Points", note: "Stand on them. Damage from the hallway is not contest." },
        { name: "Flank rooms", note: "Magik / BP / Spidey. One peel, not five people turning while the point flips." },
        { name: "Broken mid", note: "New sightlines. The sniper got the hole too." },
        { name: "Spawn stagger", note: "Wait two seconds. A 1v6 out of spawn is how domination actually works." },
      ],
      notes: [
        "Brawl Vanguards (Thing, Thor, Cap) are comfortable here if supports can see them.",
        "Poke still wins if your team never looks at high ground or long halls.",
        "Team-Up dive pairs need a Strategist who is not already dead. Peel is the combo.",
      ],
      image: header("Marvel Rivals Hell's Heaven domination"),
      seoKeywords: ["Hell's Heaven Rivals", "Marvel Rivals domination", "Hydra map Rivals"],
    },
    {
      slug: "klyntar",
      name: "Klyntar",
      difficulty: "Hard",
      tagline: "Symbiote Convergence: alien geometry, dives, and a map that punishes a backline with no peel.",
      overview:
        "Klyntar (Symbiotic Surface) is Convergence on a living alien space. Paths are weirder, vertical is meaner, and Venom / Magik / Spider-Man style takes feel native. Attack still has to cap then push. Defense still has to group. If your Strategists die first every fight, you do not have a Klyntar problem — you have a peel problem. Learn the cap, then the cart, then the off-angles.",
      stats: [
        { label: "Mode", value: "Convergence" },
        { label: "Difficulty", value: "Learn after Yggdrasill and a domination map" },
        { label: "Peel", value: "Non-negotiable — dive is the culture" },
      ],
      poi: [
        { name: "Capture", note: "Same hybrid rule. Bodies on point." },
        { name: "Organic paths", note: "Flanks you will miss the first ten games. Die once, then call it." },
        { name: "Cart phase", note: "Do not spawn-camp. Meters win." },
        { name: "High biomass / ledges", note: "Look up. Symbiote maps are not flat." },
        { name: "Chokes after destruction", note: "Shorter than they look on the loading screen." },
      ],
      notes: [
        "Anchor Vanguards (Strange, Magneto, Groot) still work. They just have to turn around.",
        "If you only play this map as a flank Duelist, learn a Strategist here too — you will need the swap.",
        "Ult tracking matters more when fights are messy. Count the defensive ult before you go in.",
      ],
      image: header("Marvel Rivals Klyntar symbiotic surface"),
      seoKeywords: ["Klyntar Rivals", "Symbiotic Surface", "Marvel Rivals Venom map"],
    },
  ],
  roles: [
    {
      slug: "strategist",
      name: "Strategist",
      role: "Support / peel",
      difficulty: "Easy",
      beginnerRank: 1,
      tiers: [
        { label: "Job", value: "Keep the tank alive, then the person making space" },
        { label: "Ult", value: "The fight-win button — do not panic-dump it on chip" },
      ],
      kit: ["Luna Snow, Cloak & Dagger, Mantis, Rocket, Loki, Jeff, Invisible Woman, Adam Warlock"],
      excerpt:
        "The best first role. You heal the Vanguard taking space, you save a cooldown for the dive, and you stand behind cover that still exists.",
      strengths: [
        "Teaches the objective because you lose instantly if you chase",
        "Defensive ults win more games than a 40-elim Duelist",
        "Almost every lobby is starving for a second Strategist",
      ],
      weaknesses: [
        "Standing in the open after a wall breaks",
        "Healing the Duelist in their spawn while the tank dies on cart",
      ],
      starterTips: [
        "Start Luna, Cloak & Dagger, or Rocket. Save Jeff / Loki until you can survive a dive.",
        "Ally health bars on. If you cannot see the tank, you cannot do the job.",
        "Save one peel for the dive that happens after the first poke — not every CD on the first chip.",
        "Play the cart / point. Heals that happen 40 meters off the objective do not cap.",
      ],
      image: hero("Marvel Rivals Strategist healing a fight"),
      seoKeywords: ["Marvel Rivals Strategist", "Rivals support", "Luna Snow guide"],
    },
    {
      slug: "vanguard-anchor",
      name: "Anchor Vanguard",
      role: "Space and cover",
      difficulty: "Easy",
      beginnerRank: 2,
      tiers: [
        { label: "Job", value: "Create the space Strategists stand in" },
        { label: "Fail", value: "Farming elims off-angle while the backline dies" },
      ],
      kit: ["Doctor Strange, Groot, Magneto, Peni Parker, Emma Frost"],
      excerpt:
        "You walk first, you eat the first cooldown, and you hold a shield, wall, or nest on the objective. If you are hunting spawn, the supports are getting dived.",
      strengths: [
        "Wins Convoy by existing on the cart",
        "Groot walls and Peni nests are map control, not cosmetics",
        "Easier to learn than dive tanks — the job is in front of you",
      ],
      weaknesses: [
        "No peel for the backline if you never turn around",
        "Shield dumped on nothing, then the real dive comes",
      ],
      starterTips: [
        "Strange, Groot, or Magneto first. Walk the cart. Turn when the Strategist pings.",
        "Your cooldown is for the fight on the point, not a hallway 30 meters back.",
        "If the team locked six Duelists, you stay on Vanguard. Filling is the role.",
        "Destruction: a wall you broke can be a Hela hole. Reposition the backline.",
      ],
      image: hero("Marvel Rivals Vanguard holding a point"),
      seoKeywords: ["Marvel Rivals Vanguard", "Doctor Strange Rivals", "Groot Rivals"],
    },
    {
      slug: "duelist-poke",
      name: "Poke Duelist",
      role: "Pressure from range",
      difficulty: "Medium",
      beginnerRank: 3,
      tiers: [
        { label: "Job", value: "Take the off-angle after the tank commits" },
        { label: "Not the job", value: "Starting the fight six seconds early" },
      ],
      kit: ["Hela, The Punisher, Hawkeye, Namor, Squirrel Girl, Winter Soldier, Storm"],
      excerpt:
        "You convert space into deaths on the cart. High ground and broken walls are your kit. A 6–0 start that never touches the objective still loses.",
      strengths: [
        "Punishes teams that never look up",
        "Easier first Duelist than Spider-Man or Black Panther",
        "Holds chokes on defense without overcommitting",
      ],
      weaknesses: [
        "Feeding the first fight off-angle while the cart is frozen",
        "No close-range plan when a Magik walks into your pocket",
      ],
      starterTips: [
        "Hela or Punisher until your primary fire is reliable at the range the hero actually fights.",
        "Shoot after the Vanguard walks. Early peeks are how you donate ult charge.",
        "If they have a flyer stack, you are the answer — or you swap to one.",
        "Damage is not contest. Get on the point when the fight is won.",
      ],
      image: hero("Marvel Rivals Hela holding high ground"),
      seoKeywords: ["Marvel Rivals Hela", "Punisher Rivals", "Rivals Duelist"],
    },
    {
      slug: "vanguard-dive",
      name: "Dive Vanguard",
      role: "Engage and disrupt",
      difficulty: "Hard",
      beginnerRank: 4,
      tiers: [
        { label: "Job", value: "Go in with cooldowns and a plan to leave" },
        { label: "Need", value: "Supports who can see you, or you are just dying" },
      ],
      kit: ["Venom, Thor, Hulk, Captain America, The Thing"],
      excerpt:
        "You start the fight on their backline — with your team, not as a 1v6. A dive with no peel and no follow-up is a stagger.",
      strengths: [
        "Breaks poke holds that an anchor cannot walk through",
        "Forces defensive ults if you actually threaten the Strategist",
        "Cap and Venom teach timing better than another Hela game",
      ],
      weaknesses: [
        "Diving the moment you see a support, every fight, on cooldown",
        "No exit. Dead dive tanks are how the cart goes backwards",
      ],
      starterTips: [
        "Go in when a Duelist or a second Vanguard can hit the same target. Solo hero dives are content.",
        "Save a movement cooldown to leave. Living is the second half of the dive.",
        "If your Strategists are already dead, you are not diving — you are feeding.",
        "Learn this after you can play an anchor. Space first, then chaos.",
      ],
      image: hero("Marvel Rivals Venom diving the backline"),
      seoKeywords: ["Marvel Rivals Venom", "Thor Rivals", "dive tank"],
    },
    {
      slug: "duelist-flank",
      name: "Flank Duelist",
      role: "Pick potential",
      difficulty: "Hard",
      beginnerRank: 5,
      tiers: [
        { label: "Job", value: "Delete a support or a sniper, then reset" },
        { label: "Not", value: "A third melee in the main choke" },
      ],
      kit: ["Spider-Man, Magik, Black Panther, Psylocke, Iron Fist, Star-Lord, Human Torch"],
      excerpt:
        "You take the path nobody is watching. Dying in their backline with no trade is a stagger. Kills that happen after the point is already lost do not cap.",
      strengths: [
        "Punishes isolated Strategists and tunnel-vision Hela",
        "Team-Up dives (when the pair is real) win fights the poke comp cannot",
        "Vertical maps (Spider-Islands, Klyntar) are your classroom",
      ],
      weaknesses: [
        "One-tricking a flank in a lobby with no Vanguard and one support",
        "Never grouping after a pick — the cart still needs bodies",
      ],
      starterTips: [
        "Magik or a simpler brawler before Spider-Man. Swing tech is a second game.",
        "Ping the target. A silent dive is how your tank walks the other direction.",
        "If they peel you twice, change the path or swap. Ego flanks are a highlight for them.",
        "After a pick, get on the objective. The spawn-room chase is how you throw overtime.",
      ],
      image: hero("Marvel Rivals Spider-Man flanking"),
      seoKeywords: ["Marvel Rivals Spider-Man", "Magik Rivals", "Black Panther Rivals"],
    },
  ],
  strats: [
    {
      slug: "fill-comp",
      name: "Fill Comp (2-2-2)",
      mapName: "Any map",
      difficulty: "Easy",
      risk: "Low",
      bestFor: "Lobbies that locked four Duelists in ten seconds",
      duration: "Hero select",
      excerpt:
        "Two Vanguards, two Duelists, two Strategists — or as close as you can get. The missing role is the throw, not your comfort pick.",
      steps: [
        "Look at the lobby. If there is no Vanguard, you are the Vanguard. If there is one Strategist, you are the second.",
        "Lock a hero you can play at the role, not a throw pick to 'prove a point'.",
        "Check Team-Ups. If your pair is not in the match, do not play as if the bonus button exists.",
        "In spawn, say who you peel and who walks first. Silence is how six people take six off-angles.",
        "If someone instalocks a sixth Duelist, you still fill. Winning the match is the ranked skill.",
      ],
      tips: [
        "One-tricking a sniper in a tank-less lobby is how you pad damage and lose.",
        "2-1-3 and 1-3-2 can work. 0-5-1 cannot.",
        "Swap at first pause if the comp is unplayable. Ego is not MMR.",
      ],
      image: header("Marvel Rivals hero select roles"),
      seoKeywords: ["Marvel Rivals comp", "2-2-2 Rivals", "Rivals roles"],
    },
    {
      slug: "convoy-first-fight",
      name: "Convoy First Fight",
      mapSlug: "yggdrasill-path",
      mapName: "Yggdrasill Path",
      difficulty: "Easy",
      risk: "Medium",
      bestFor: "Attack teams that scatter and freeze the cart for a minute",
      duration: "First 30–45 seconds",
      excerpt:
        "Vanguard walks the choke, Strategists hold cover, Duelists take the off-angle after the first cooldown. Then two people get on the cart.",
      steps: [
        "Group in spawn. Do not trickle into the first door as six solos.",
        "Anchor Vanguard takes the choke. Dive Vanguard waits for that space or a called go.",
        "Poke Duelist takes high ground after the tank is in. Not six seconds before.",
        "When the fight is won, two bodies on the cart immediately. Chasing spawn is optional; meters are not.",
        "If you wipe, reset together. Staggered 1v6s on first choke lose the checkpoint.",
      ],
      tips: [
        "Defense should spend the first fight on the choke they can fall from, not a spawn-room overpeek.",
        "A destroyed wall is a new sightline. Reposition the backline.",
        "Ultimates: first fight often should be cooldown-only. Saving a Luna ult for checkpoint two is legal.",
      ],
      image: header("Marvel Rivals convoy first choke"),
      seoKeywords: ["Rivals payload", "convoy guide", "Yggdrasill Path attack"],
    },
    {
      slug: "domination-group",
      name: "Domination Group Fight",
      mapSlug: "hall-of-djalia",
      mapName: "Hall of Djalia",
      difficulty: "Easy",
      risk: "Low",
      bestFor: "Teams that split three ways and lose all three points",
      duration: "Each point rotation",
      excerpt:
        "Play two points, group after a wipe, and stop trickling out of spawn. Stagger is the mode.",
      steps: [
        "Call which two points you want. Six people on one pad while the others flip is a loss.",
        "After a wipe, wait at spawn for two more teammates. A 1v6 out of spawn is how they snowball.",
        "Fight on the point you need. Damage in the hallway is not contest.",
        "If you win, leave one or two to hold and rotate the rest before the next point fully flips.",
        "Ult on the grouped fight. Ult on an empty third pad is a highlight for the other scoreboard.",
      ],
      tips: [
        "A 4–5 lead is not a license to farm. One grouped fight still flips the map.",
        "Supports rotate with tanks. Solo capping as Jeff is a gift if they look at you.",
        "This setup is the same on Hell's Heaven. The pads move; the stagger rule does not.",
      ],
      image: header("Marvel Rivals domination point hold"),
      seoKeywords: ["Rivals domination", "Hall of Djalia guide", "Marvel Rivals control"],
    },
    {
      slug: "dive-with-peel",
      name: "Dive With Peel",
      mapSlug: "klyntar",
      mapName: "Klyntar",
      difficulty: "Hard",
      risk: "High",
      bestFor: "Venom / Magik / Spidey stacks that die first every fight",
      duration: "One engage",
      excerpt:
        "Dive the isolated Strategist with two people, while someone turns to peel yours. A 1v6 dive is a stagger.",
      steps: [
        "Ping the target. If the tank walks the other way, you do not go.",
        "Two people hit the same support or sniper. One dive is peel practice for them.",
        "Your Strategist saves a cooldown for the counter-dive. If they already dumped everything, delay.",
        "After the pick, get on the objective. Chasing into spawn donates your ults.",
        "If they peel you twice on the same path, change the angle or swap off the dive.",
      ],
      tips: [
        "Team-Up dives only exist if both heroes locked. Read the panel.",
        "Living through the dive (exit cooldown) is the skill. Dead tanks do not create space.",
        "Works on Spider-Islands and Midtown alleys the same way. Klyntar just makes it obvious.",
      ],
      image: header("Marvel Rivals dive on the backline"),
      seoKeywords: ["Rivals dive", "Venom Magik combo", "how to dive Rivals"],
    },
    {
      slug: "poke-hold",
      name: "Poke Hold",
      mapSlug: "midtown",
      mapName: "Midtown",
      difficulty: "Medium",
      risk: "Medium",
      bestFor: "Defense on long sightlines that keeps walking into melee range for no reason",
      duration: "Until they commit a dive or an ult",
      excerpt:
        "Hold the next corner and high ground. Make them walk into Hela. Do not overpeek the cart when you already have the choke.",
      steps: [
        "Poke Duelists take high ground / broken windows. Vanguard holds the corner the cart must pass.",
        "Strategists stand in cover that still exists. A broken wall is not cover.",
        "Spend chip to force cooldowns. Do not dump defensive ults on poke.",
        "When they dive, peel the backline first, then return to the cart. The cart can wait two seconds; a dead Luna cannot.",
        "If they smash the hold with a full dive + ult, fall to the next corner as a group. Hero peeks after a lost hold are stagger.",
      ],
      tips: [
        "Namor, Hela, Punisher, Hawkeye are the classroom. Melee Duelists are the wrong tool for this hold.",
        "Destruction cuts both ways. The hole you made is their Hela hole too.",
        "On attack, this is the 'take high ground after the tank walks' pattern in reverse.",
      ],
      image: header("Marvel Rivals poke hold on Midtown"),
      seoKeywords: ["Rivals poke", "Hela high ground", "Midtown defense"],
    },
    {
      slug: "team-up-lock",
      name: "Team-Up Lock",
      mapName: "Any map",
      difficulty: "Medium",
      risk: "Low",
      bestFor: "Players who lock a hero for a Team-Up that is not in the match",
      duration: "Hero select + first fight",
      excerpt:
        "Read the Team-Up. If the partner is not queued, your kit is missing a button. Swap or play the base kit honestly.",
      steps: [
        "Open Team-Up text before you lock. Know what the extra ability actually is.",
        "If the partner is free, ping it. A lonely Team-Up is flavor text.",
        "If they lock something else, switch to a hero whose full kit is in your hands.",
        "In fight, do not delay a go for a Team-Up that is on cooldown or out of range.",
        "Season lists change. The habit (read, confirm, swap) does not.",
      ],
      tips: [
        "Classic pairs rotate with patches — Groot/Rocket, Hela/Loki, Namor/Luna-style links. Confirm in the client.",
        "A Team-Up is not a reason to ignore 2-2-2. Two supports still beat a flavor combo with no tank.",
        "If you cannot play the partner, do not instalock the star of the combo.",
      ],
      image: header("Marvel Rivals Team-Up bonus"),
      seoKeywords: ["Marvel Rivals Team-Up", "Team-Ups list", "Rivals synergy"],
    },
  ],
  guides: [
    {
      slug: "beginner-guide",
      title: "Marvel Rivals Beginner Guide",
      category: "Getting Started",
      readTime: "9 min",
      excerpt:
        "Roles to learn first, why the objective is the game, and when ranked can wait.",
      seoKeywords: ["Marvel Rivals beginner", "how to play Marvel Rivals", "Rivals first hours"],
      heroImage: hero("Marvel Rivals beginner guide"),
      content: [
        {
          heading: "What you are actually playing",
          body: "Marvel Rivals is a 6v6 hero shooter. You win by moving a cart, capturing a point, or holding two domination pads — not by topping elims off the objective. Destructible space creates new sightlines for both snipers. Team-Ups are extra buttons when specific heroes are on the same team. A stacked composition that peels for supports beats a lobby of six Duelists more often than highlight reels suggest.",
        },
        {
          heading: "The first week",
          body: "Learn one Strategist (Luna, Cloak & Dagger, or Rocket) and one anchor Vanguard (Strange, Groot, or Magneto). Practice range or Doom Match until your primary fire is reliable at the range that hero actually fights. Then play the cart. Kills 40 meters off the payload do not cap.",
        },
        {
          heading: "Fill the hole",
          body: "If the lobby has no tank, you are the tank. One-tricking a sniper in a tank-less lobby is how you pad damage and lose. Ranked can wait until you can fill a missing role and you know two ultimates besides your own.",
        },
        {
          heading: "Team-Ups",
          body: "Read the text before you lock. If your pair is not in the match, your kit is missing a button you might be counting on. A lonely Team-Up partner is just flavor text.",
        },
        {
          heading: "What good looks like after a week",
          body: "You can play the objective without looking at the scoreboard, you save a peel for the dive, you do not dump a defensive ult on chip, and you group after a wipe. Then add a poke Duelist. Flanks last.",
        },
      ],
    },
    {
      slug: "roles-and-team-ups",
      title: "Marvel Rivals Roles and Team-Ups",
      category: "Team Play",
      readTime: "8 min",
      excerpt:
        "How Vanguards, Duelists, and Strategists share a fight — and which Team-Ups are worth swapping for.",
      seoKeywords: ["Marvel Rivals roles", "Team-Ups", "Vanguard Duelist Strategist"],
      heroImage: header("Marvel Rivals role select"),
      content: [
        {
          heading: "Vanguard",
          body: "You create space and eat the first cooldown. Anchor tanks walk the cart and hold shields or walls. Dive tanks go in with a follow-up and an exit. If you are farming elims off-angle, the supports are getting dived.",
        },
        {
          heading: "Duelist",
          body: "Take off-angles after the tank commits; do not start the fight six seconds early. Poke heroes hold high ground. Flank heroes delete an isolated support and then get on the point. Your job is to convert space into deaths on the cart.",
        },
        {
          heading: "Strategist",
          body: "Heal the person taking space, not the Duelist chasing a spawn room. Position behind cover the tank already paid for. Save a cooldown for the dive that happens after the first poke. Your ult is often the fight.",
        },
        {
          heading: "Team-Ups",
          body: "Pick a pair that is actually queued. Season lists change; the client is the source of truth. Do not lock a hero whose identity is the bonus button if the partner instalocked someone else.",
        },
        {
          heading: "Comp math",
          body: "2-2-2 is the default ask. 2-1-3 and 1-2-3 can work. Zero Vanguards is how backlines die. Five Duelists is a clip, not a strategy.",
        },
      ],
    },
    {
      slug: "maps-and-objectives",
      title: "Marvel Rivals Maps and Objectives",
      category: "Objectives",
      readTime: "8 min",
      excerpt:
        "Convoy, Convergence, and Domination — what the cart is doing, and why stagger loses domination.",
      seoKeywords: ["Marvel Rivals maps", "convoy", "domination Rivals"],
      heroImage: header("Marvel Rivals payload cart"),
      content: [
        {
          heading: "Convoy",
          body: "Attack rides the cart through checkpoints. Defense stalls. Two people on the cart while the rest peels is a push. A 20-elim spawn camp with a frozen payload is a loss. Learn Yggdrasill Path, then Midtown, then Tokyo maps.",
        },
        {
          heading: "Convergence",
          body: "Cap a point, then escort. Winning the cap and wandering is how you lose the second half. Hydra Charteris and Klyntar are this mode. Overtime on the point is a full commit — trickle is a throw.",
        },
        {
          heading: "Domination",
          body: "Rotating pads. Hold two, group after a wipe, do not 1v6 out of spawn. Hall of Djalia and Hell's Heaven teach stagger better than any aim trainer. Damage in the hallway is not contest.",
        },
        {
          heading: "Destruction",
          body: "Broken walls are new sightlines for both snipers. Do not stand in the hole you just made. Reset behind a wall that still exists.",
        },
        {
          heading: "Callouts",
          body: "Cart, point letter, high ground, flank. Streamer nicknames can wait until the team knows which pad is active.",
        },
      ],
    },
    {
      slug: "ultimates-and-cooldowns",
      title: "Marvel Rivals Ultimates and Cooldowns",
      category: "Fight Timing",
      readTime: "8 min",
      excerpt:
        "Count the defensive ult before you dump yours. Chip damage is not the go signal.",
      seoKeywords: ["Marvel Rivals ultimates", "Luna ult", "cooldown tracking"],
      heroImage: header("Marvel Rivals ultimate fight"),
      content: [
        {
          heading: "Defensive ults",
          body: "Luna, Invisible Woman, Adam, and other save ults win the fight you thought you had. Track them. Ultimating into a support cooldown you did not count is the ranked ladder in one sentence.",
        },
        {
          heading: "Do not dump on chip",
          body: "Spending every defensive cooldown the moment you take poke means the dive arrives for free. Save a peel. The first Magik walk-in is the real fight.",
        },
        {
          heading: "Offensive ults",
          body: "Use them on the objective with the team, not on a 1v1 in the alley after the cart already passed. A won fight that does not convert to meters is a wasted bar.",
        },
        {
          heading: "Stagger",
          body: "If two teammates are dead, waiting five seconds is often correct. Feeding the last two ults into a lost fight donates the next point.",
        },
        {
          heading: "First fight vs checkpoint",
          body: "Not every first choke needs six ults. Saving a support ult for the checkpoint they will stack is legal, and it wins more maps than a panic pop at 0:20.",
        },
      ],
    },
    {
      slug: "ranked",
      title: "Marvel Rivals Ranked",
      category: "Ranked",
      readTime: "7 min",
      excerpt:
        "Fill, swap, mute the noise, and stop treating QP habits as a rank strategy.",
      seoKeywords: ["Marvel Rivals ranked", "Rivals competitive", "how to rank up Rivals"],
      heroImage: header("Marvel Rivals ranked match"),
      content: [
        {
          heading: "When to queue",
          body: "Not until you can fill a missing role and you know two ults besides your own. Ranked is not the tutorial for Spider-Man swing tech.",
        },
        {
          heading: "Swaps",
          body: "If the comp is 0-5-1 after the first fight, swap. Ego one-tricks are how you stay in the same rank with a proud K/D.",
        },
        {
          heading: "Comms",
          body: "Ping the dive, ping missing, ping the cart. Reviewing your own death in voice is not a call. Mute griefers; do not mute info.",
        },
        {
          heading: "Tilt fights",
          body: "Chasing a Magik into spawn after they killed you is how you stagger. Touch the objective. The revenge clip does not cap.",
        },
        {
          heading: "Review",
          body: "Watch one lost point: were you off the cart, staggered, or ultimating into Luna? One habit a night is enough.",
        },
      ],
    },
    {
      slug: "positioning",
      title: "Marvel Rivals Positioning and Destruction",
      category: "Fundamentals",
      readTime: "7 min",
      excerpt:
        "Cover that still exists, high ground, and why the hole in the wall belongs to both snipers.",
      seoKeywords: ["Rivals positioning", "destructible maps", "Marvel Rivals cover"],
      heroImage: header("Marvel Rivals destructible wall fight"),
      content: [
        {
          heading: "Cover",
          body: "Stand behind a wall that is still there. After a collapse, you are in the open. The other Hela knows.",
        },
        {
          heading: "High ground",
          body: "Look up. Midtown, Shin-Shibuya, and Spider-Islands punish street-only teams. Contest or you never walk the cart.",
        },
        {
          heading: "Off-angles",
          body: "Take them after the tank commits. An off-angle six seconds early is just dying first.",
        },
        {
          heading: "Backline",
          body: "Strategists play behind the space the Vanguard paid for. If the tank is dead, the backline is next — swap off a third Duelist.",
        },
        {
          heading: "Objective is position",
          body: "The best cover on a frozen cart is still a loss. Two people on payload while the rest peels is the setup.",
        },
      ],
    },
    {
      slug: "settings-and-aim",
      title: "Marvel Rivals Settings and Aim",
      category: "PC Setup",
      readTime: "6 min",
      excerpt:
        "Sensitivity for hip-fire vs scoped, ally UI, and hitching when buildings collapse.",
      seoKeywords: ["Marvel Rivals settings", "Rivals sensitivity", "Rivals FPS"],
      heroImage: header("Marvel Rivals settings menu"),
      content: [
        {
          heading: "Sensitivity",
          body: "Separate look sensitivity for hip-fire and scoped heroes if you swap a lot. Vertical can sit slightly lower for aerial duels. Copying a pro's eDPI without copying their mousepad is how you miss everything.",
        },
        {
          heading: "UI",
          body: "Turn on ally health bars and ability callout audio. Rivals fights are noisy; visual cooldown UI matters. You cannot peel what you cannot see.",
        },
        {
          heading: "Performance",
          body: "Cap FPS and disable extra ray-traced options if team fights hitch when buildings collapse. A freeze in a Luna ult window is a lost point.",
        },
        {
          heading: "Practice",
          body: "Range or Doom Match for the hero's real range. Spider-Man in deathmatch is not the same as peeling a cart. Practice the shot you take on Midtown rooftops.",
        },
        {
          heading: "Crosshair",
          body: "Pick one you can see on neon Tokyo and on dark Klyntar. Fancy animated sights that disappear in destruction are a self-report.",
        },
      ],
    },
    {
      slug: "faq",
      title: "Marvel Rivals FAQ",
      category: "FAQ",
      readTime: "5 min",
      excerpt: "Free to play, 6v6, Team-Ups, and when to play ranked.",
      seoKeywords: ["Marvel Rivals FAQ", "is Marvel Rivals free", "Team-Up explained"],
      content: [
        {
          heading: "Is Marvel Rivals free?",
          body: "Yes. Heroes unlock on a generous cadence; cosmetics are the shop. The gunplay and roles are not paywalled.",
        },
        {
          heading: "How many players per team?",
          body: "Standard is 6v6. Role cover matters more than the number. Six Duelists still lose the point.",
        },
        {
          heading: "What is a Team-Up?",
          body: "A bonus ability or passive when specific Marvel characters are on the same team. Read it before you lock. If the partner is not queued, it does not exist.",
        },
        {
          heading: "Should I play ranked immediately?",
          body: "Not until you can fill a missing role and you know two ults besides your own. QP is for learning Spider-Man. Ranked is for filling.",
        },
        {
          heading: "What role should I learn first?",
          body: "Strategist, then an anchor Vanguard. Poke Duelist third. Dive and flanks after you can play the objective without dying first every fight.",
        },
      ],
    },
  ],
};
