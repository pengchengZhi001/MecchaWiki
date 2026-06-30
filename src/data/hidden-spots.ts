import type { SpotCategoryId } from "@/lib/site";
import type { SpotSortId } from "@/lib/site";
import { spotDescriptions } from "@/data/spot-descriptions";
import { getSpotImageUrl } from "@/data/spot-images";

export type HiddenSpot = {
  slug: string;
  name: string;
  map: string;
  mapSlug: string;
  category: SpotCategoryId;
  survivalRate: number;
  votes: number;
  upvotes: number;
  views: number;
  author: string;
  submittedAt: string;
  description: string;
  tips: string;
  imageUrl: string;
  source: string;
  sourceUrl: string;
  featured?: boolean;
  trending?: boolean;
};

type SpotInput = Omit<HiddenSpot, "imageUrl" | "description" | "views">;

function spot(data: SpotInput): HiddenSpot {
  const { ...rest } = data;
  return {
    ...rest,
    description: spotDescriptions[rest.slug] ?? "",
    views: rest.votes * 2 + rest.upvotes,
    imageUrl: getSpotImageUrl(rest.slug),
  };
}

export const hiddenSpots: HiddenSpot[] = [
  // ── Mansion (TheGamer verified) ──
  spot({
    slug: "mansion-library-shelf",
    name: "Library Shelf",
    map: "Mansion",
    mapSlug: "mansion",
    category: "best",
    survivalRate: 87,
    votes: 412,
    upvotes: 358,
    author: "TheGamer Community",
    submittedAt: "2026-06-09",
    tips: "Crouch between rear bookshelf rows. Sample spine color + shadow, flat pose, don't stick past shelf lip.",
    source: "TheGamer",
    sourceUrl: "https://www.thegamer.com/mecca-chameleon-best-hiding-spots-guide/",
    featured: true,
    trending: true,
  }),
  spot({
    slug: "mansion-ceiling-pillar",
    name: "Ceiling Pillar",
    map: "Mansion",
    mapSlug: "mansion",
    category: "best",
    survivalRate: 84,
    votes: 356,
    upvotes: 301,
    author: "TheGamer Community",
    submittedAt: "2026-06-09",
    tips: "Attach to ceiling pillar during prep. Sample highlight + shadow on column, lock pose before hunt.",
    source: "TheGamer",
    sourceUrl: "https://www.thegamer.com/mecca-chameleon-best-hiding-spots-guide/",
    featured: true,
    trending: true,
  }),
  spot({
    slug: "mansion-horse-statue",
    name: "Horse Statue",
    map: "Mansion",
    mapSlug: "mansion",
    category: "impossible",
    survivalRate: 38,
    votes: 289,
    upvotes: 110,
    author: "TheGamer Community",
    submittedAt: "2026-06-09",
    tips: "Enter during prep, sample statue tone, curled pose. Famous from community YouTube clips.",
    source: "TheGamer",
    sourceUrl: "https://www.thegamer.com/mecca-chameleon-best-hiding-spots-guide/",
    trending: true,
  }),
  spot({
    slug: "mansion-kitchen-poster",
    name: "Kitchen Poster",
    map: "Mansion",
    mapSlug: "mansion",
    category: "best",
    survivalRate: 79,
    votes: 267,
    upvotes: 218,
    author: "TheGamer Community",
    submittedAt: "2026-06-09",
    tips: "Eyedropper poster border and mid-tone separately. Posters read flat from distance.",
    source: "TheGamer",
    sourceUrl: "https://www.thegamer.com/mecca-chameleon-best-hiding-spots-guide/",
  }),
  spot({
    slug: "mansion-bathroom-tiles",
    name: "Bathroom Tiles",
    map: "Mansion",
    mapSlug: "mansion",
    category: "best",
    survivalRate: 76,
    votes: 245,
    upvotes: 192,
    author: "TheGamer Community",
    submittedAt: "2026-06-09",
    tips: "Sample tile AND grout twice. v1.1.0+ bathroom reflectivity is high — watch metallic slider.",
    source: "TheGamer",
    sourceUrl: "https://www.thegamer.com/mecca-chameleon-best-hiding-spots-guide/",
  }),
  spot({
    slug: "mansion-wooden-arch",
    name: "Wooden Arch Wall",
    map: "Mansion",
    mapSlug: "mansion",
    category: "community",
    survivalRate: 74,
    votes: 198,
    upvotes: 154,
    author: "TheGamer Community",
    submittedAt: "2026-06-09",
    tips: "Wall-flat pose. Arch curves hide shoulder width when paint matches paneling.",
    source: "TheGamer",
    sourceUrl: "https://www.thegamer.com/mecca-chameleon-best-hiding-spots-guide/",
  }),
  spot({
    slug: "mansion-hallway-painting",
    name: "Hallway Painting",
    map: "Mansion",
    mapSlug: "mansion",
    category: "community",
    survivalRate: 72,
    votes: 187,
    upvotes: 141,
    author: "TheGamer Community",
    submittedAt: "2026-06-09",
    tips: "Rectangular poses sell the illusion. Frame color on outline, canvas mid-tone on torso.",
    source: "TheGamer",
    sourceUrl: "https://www.thegamer.com/mecca-chameleon-best-hiding-spots-guide/",
  }),
  spot({
    slug: "mansion-pillar-top",
    name: "Pillar Top",
    map: "Mansion",
    mapSlug: "mansion",
    category: "impossible",
    survivalRate: 31,
    votes: 234,
    upvotes: 72,
    author: "TheGamer Community",
    submittedAt: "2026-06-09",
    tips: "Climb during prep (Space on walls). Low pose on pillar cap. High risk high reward.",
    source: "TheGamer",
    sourceUrl: "https://www.thegamer.com/mecca-chameleon-best-hiding-spots-guide/",
  }),
  spot({
    slug: "mansion-armchair-tuck",
    name: "Armchair Tuck",
    map: "Mansion",
    mapSlug: "mansion",
    category: "community",
    survivalRate: 71,
    votes: 176,
    upvotes: 128,
    author: "TheGamer Community",
    submittedAt: "2026-06-09",
    tips: "Sample carpet shadow under chair, not upholstery highlight. Crouch pose.",
    source: "TheGamer",
    sourceUrl: "https://www.thegamer.com/mecca-chameleon-best-hiding-spots-guide/",
  }),
  spot({
    slug: "mansion-kitchen-shelving",
    name: "Kitchen Shelving",
    map: "Mansion",
    mapSlug: "mansion",
    category: "best",
    survivalRate: 78,
    votes: 203,
    upvotes: 167,
    author: "TheGamer Community",
    submittedAt: "2026-06-09",
    tips: "Paint interior shelf color. Seekers who crouch get clear view — prioritize depth.",
    source: "TheGamer",
    sourceUrl: "https://www.thegamer.com/mecca-chameleon-best-hiding-spots-guide/",
  }),
  spot({
    slug: "mansion-black-tile-wall",
    name: "Black Tiled Wall",
    map: "Mansion",
    mapSlug: "mansion",
    category: "community",
    survivalRate: 73,
    votes: 165,
    upvotes: 120,
    author: "TheGamer Community",
    submittedAt: "2026-06-09",
    tips: "Turn down metallic/roughness so you don't catch seeker angles on dark wall.",
    source: "TheGamer",
    sourceUrl: "https://www.thegamer.com/mecca-chameleon-best-hiding-spots-guide/",
  }),
  spot({
    slug: "mansion-balloon-banner",
    name: "Balloon Banner Back Wall",
    map: "Mansion",
    mapSlug: "mansion",
    category: "funny",
    survivalRate: 65,
    votes: 198,
    upvotes: 129,
    author: "GameRant Community",
    submittedAt: "2026-06-12",
    tips: "Hide at tallest part of balloons or game warns you're too covered.",
    source: "GameRant",
    sourceUrl: "https://gamerant.com/meccha-chameleon-best-hiding-spots/",
    trending: true,
  }),
  spot({
    slug: "mansion-vase-corner",
    name: "Vase & Dark Wall Corner",
    map: "Mansion",
    mapSlug: "mansion",
    category: "community",
    survivalRate: 80,
    votes: 142,
    upvotes: 114,
    author: "IGN Editor Jen",
    submittedAt: "2026-06-15",
    tips: "Hide between vases and dark wall on the left. Editor verified in live match.",
    source: "IGN",
    sourceUrl: "https://www.ign.com/wikis/meccha-chameleon/All_Maps_in_Meccha_Chameleon:_Best_Hiding_Spots",
    trending: true,
  }),
  spot({
    slug: "mansion-behind-plank",
    name: "Behind the Plank",
    map: "Mansion",
    mapSlug: "mansion",
    category: "funny",
    survivalRate: 58,
    votes: 312,
    upvotes: 181,
    author: "YouTube / Community",
    submittedAt: "2026-06-18",
    tips: "「Spot's so bad it's good」— hunter walks past if paint matches plank edge.",
    source: "YouTube",
    sourceUrl: "https://www.youtube.com/watch?v=mQgR-ejLKI4",
    trending: true,
  }),

  // ── Sewer ──
  spot({
    slug: "sewer-ceiling-pipe",
    name: "Dark Ceiling Pipe",
    map: "Sewer",
    mapSlug: "sewer",
    category: "best",
    survivalRate: 91,
    votes: 389,
    upvotes: 354,
    author: "TheGamer Community",
    submittedAt: "2026-06-09",
    tips: "Climb behind overhead pipe in darkest section. Paint dark gray/black, stay completely still.",
    source: "TheGamer",
    sourceUrl: "https://www.thegamer.com/mecca-chameleon-best-hiding-spots-guide/",
    featured: true,
    trending: true,
  }),
  spot({
    slug: "sewer-oil-barrel-top",
    name: "Oil Barrel Top",
    map: "Sewer",
    mapSlug: "sewer",
    category: "best",
    survivalRate: 85,
    votes: 298,
    upvotes: 253,
    author: "TheGamer Community",
    submittedAt: "2026-06-09",
    tips: "Lie flat on barrel top. Match metallic dark red/brown. Seekers check at eye level only.",
    source: "TheGamer",
    sourceUrl: "https://www.thegamer.com/mecca-chameleon-best-hiding-spots-guide/",
    featured: true,
  }),
  spot({
    slug: "sewer-graffiti-wall-a",
    name: "Graffiti Wall (Section A)",
    map: "Sewer",
    mapSlug: "sewer",
    category: "community",
    survivalRate: 77,
    votes: 234,
    upvotes: 180,
    author: "TheGamer Community",
    submittedAt: "2026-06-09",
    tips: "Sample multiple graffiti colors. Wild shapes make camouflaged player hard to distinguish.",
    source: "TheGamer",
    sourceUrl: "https://www.thegamer.com/mecca-chameleon-best-hiding-spots-guide/",
  }),
  spot({
    slug: "sewer-graffiti-wall-b",
    name: "Graffiti Wall (Section B)",
    map: "Sewer",
    mapSlug: "sewer",
    category: "community",
    survivalRate: 75,
    votes: 198,
    upvotes: 149,
    author: "TheGamer Community",
    submittedAt: "2026-06-09",
    tips: "Don't reuse Section A paint — local palette differs. Rotate between graffiti sections.",
    source: "TheGamer",
    sourceUrl: "https://www.thegamer.com/mecca-chameleon-best-hiding-spots-guide/",
  }),
  spot({
    slug: "sewer-pipe-overhang",
    name: "Pipe Overhang Junction",
    map: "Sewer",
    mapSlug: "sewer",
    category: "best",
    survivalRate: 83,
    votes: 176,
    upvotes: 146,
    author: "mechachameleon.org",
    submittedAt: "2026-06-14",
    tips: "Climb vertical pipe, crouch on overhang. Paint pipe texture + shadow gradient.",
    source: "mechachameleon.org",
    sourceUrl: "https://mechachameleon.org/maps/sewer",
    trending: true,
  }),
  spot({
    slug: "sewer-locker-room",
    name: "Locker Room",
    map: "Sewer",
    mapSlug: "sewer",
    category: "community",
    survivalRate: 70,
    votes: 154,
    upvotes: 108,
    author: "IGN",
    submittedAt: "2026-06-16",
    tips: "Use overhead lighting shadows. Open drawers provide compact hide shapes.",
    source: "IGN",
    sourceUrl: "https://www.ign.com/wikis/meccha-chameleon/All_Maps_in_Meccha_Chameleon:_Best_Hiding_Spots",
  }),
  spot({
    slug: "sewer-ceiling-pipe-maze",
    name: "Ceiling Pipe Maze",
    map: "Sewer",
    mapSlug: "sewer",
    category: "impossible",
    survivalRate: 42,
    votes: 167,
    upvotes: 70,
    author: "IGN",
    submittedAt: "2026-06-16",
    tips: "Press against pipe on ceiling. Manage angle correctly or you're a floating blob.",
    source: "IGN",
    sourceUrl: "https://www.ign.com/wikis/meccha-chameleon/All_Maps_in_Meccha_Chameleon:_Best_Hiding_Spots",
  }),

  // ── Backrooms ──
  spot({
    slug: "backrooms-bikes-wall",
    name: "Bikes on Wall",
    map: "Backrooms",
    mapSlug: "backrooms",
    category: "community",
    survivalRate: 74,
    votes: 223,
    upvotes: 165,
    author: "TheGamer Community",
    submittedAt: "2026-06-09",
    tips: "Blend into mounted bike cluster. Thin lines, frame color. Verify post-patch in current build.",
    source: "TheGamer",
    sourceUrl: "https://www.thegamer.com/mecca-chameleon-best-hiding-spots-guide/",
  }),
  spot({
    slug: "backrooms-chair-stack",
    name: "Chair Stack",
    map: "Backrooms",
    mapSlug: "backrooms",
    category: "best",
    survivalRate: 81,
    votes: 267,
    upvotes: 216,
    author: "TheGamer Community",
    submittedAt: "2026-06-09",
    tips: "Tuck underneath chair stacks. Chair color, underside shadow, compact pose.",
    source: "TheGamer",
    sourceUrl: "https://www.thegamer.com/mecca-chameleon-best-hiding-spots-guide/",
    featured: true,
  }),
  spot({
    slug: "backrooms-ceiling-light",
    name: "Ceiling Light",
    map: "Backrooms",
    mapSlug: "backrooms",
    category: "impossible",
    survivalRate: 22,
    votes: 198,
    upvotes: 44,
    author: "TheGamer Community",
    submittedAt: "2026-06-09",
    tips: "Bright surface, clean edge, match light direction. High uncertainty after ceiling fixes.",
    source: "TheGamer",
    sourceUrl: "https://www.thegamer.com/mecca-chameleon-best-hiding-spots-guide/",
    trending: true,
  }),
  spot({
    slug: "backrooms-exit-sign",
    name: "Exit Sign",
    map: "Backrooms",
    mapSlug: "backrooms",
    category: "funny",
    survivalRate: 55,
    votes: 245,
    upvotes: 135,
    author: "TheGamer Community",
    submittedAt: "2026-06-09",
    tips: "Sign color blocks and sharp borders. Rectangular pose essential.",
    source: "TheGamer",
    sourceUrl: "https://www.thegamer.com/mecca-chameleon-best-hiding-spots-guide/",
    trending: true,
  }),
  spot({
    slug: "backrooms-yellow-nook",
    name: "Yellow Wall Nook",
    map: "Backrooms",
    mapSlug: "backrooms",
    category: "best",
    survivalRate: 82,
    votes: 289,
    upvotes: 237,
    author: "Community",
    submittedAt: "2026-06-20",
    tips: "Wallpaper yellow #C4B896. Absolute stillness — any movement exposes on flat yellow.",
    source: "meccha-chameleon.wiki",
    sourceUrl: "https://meccha-chameleon.wiki/maps/backrooms/",
    featured: true,
    trending: true,
  }),
  spot({
    slug: "backrooms-office-corner",
    name: "Office Space Corner",
    map: "Backrooms",
    mapSlug: "backrooms",
    category: "community",
    survivalRate: 68,
    votes: 143,
    upvotes: 97,
    author: "IGN",
    submittedAt: "2026-06-16",
    tips: "Office space corners are tricky to fit but Chameleons can wedge in.",
    source: "IGN",
    sourceUrl: "https://www.ign.com/wikis/meccha-chameleon/All_Maps_in_Meccha_Chameleon:_Best_Hiding_Spots",
  }),
  spot({
    slug: "backrooms-birthday-hallway",
    name: "Birthday Party Hallway",
    map: "Backrooms",
    mapSlug: "backrooms",
    category: "funny",
    survivalRate: 62,
    votes: 178,
    upvotes: 110,
    author: "IGN",
    submittedAt: "2026-06-16",
    tips: "Hide as balloon or use chairs. Cakes and balloons create visual noise.",
    source: "IGN",
    sourceUrl: "https://www.ign.com/wikis/meccha-chameleon/All_Maps_in_Meccha_Chameleon:_Best_Hiding_Spots",
  }),
  spot({
    slug: "backrooms-vending-machine",
    name: "Vending Machine",
    map: "Backrooms",
    mapSlug: "backrooms",
    category: "funny",
    survivalRate: 48,
    votes: 156,
    upvotes: 75,
    author: "IGN Editor Jen",
    submittedAt: "2026-06-16",
    tips: "Disguise as vending machine but watch your angles carefully!",
    source: "IGN",
    sourceUrl: "https://www.ign.com/wikis/meccha-chameleon/All_Maps_in_Meccha_Chameleon:_Best_Hiding_Spots",
  }),

  // ── Penguin Hotel ──
  spot({
    slug: "penguin-ballroom-rafters",
    name: "Ballroom Rafters & Balloons",
    map: "Penguin Hotel",
    mapSlug: "penguin-hotel",
    category: "best",
    survivalRate: 79,
    votes: 198,
    upvotes: 156,
    author: "IGN Editor Jen",
    submittedAt: "2026-06-16",
    tips: "Hide in rafters next to balloons. Use balloon colors to camouflage your head.",
    source: "IGN",
    sourceUrl: "https://www.ign.com/wikis/meccha-chameleon/All_Maps_in_Meccha_Chameleon:_Best_Hiding_Spots",
    featured: true,
    trending: true,
  }),
  spot({
    slug: "penguin-plush-room",
    name: "Penguin Plush Room",
    map: "Penguin Hotel",
    mapSlug: "penguin-hotel",
    category: "community",
    survivalRate: 73,
    votes: 167,
    upvotes: 122,
    author: "IGN",
    submittedAt: "2026-06-16",
    tips: "Blend with plushes or against bookcases where they're kept.",
    source: "IGN",
    sourceUrl: "https://www.ign.com/wikis/meccha-chameleon/All_Maps_in_Meccha_Chameleon:_Best_Hiding_Spots",
  }),
  spot({
    slug: "penguin-bedroom-under-bed",
    name: "Under the Bed",
    map: "Penguin Hotel",
    mapSlug: "penguin-hotel",
    category: "community",
    survivalRate: 70,
    votes: 145,
    upvotes: 101,
    author: "IGN",
    submittedAt: "2026-06-16",
    tips: "Hide under bed, in bathroom, or use plushes and desk to advantage.",
    source: "IGN",
    sourceUrl: "https://www.ign.com/wikis/meccha-chameleon/All_Maps_in_Meccha_Chameleon:_Best_Hiding_Spots",
  }),
  spot({
    slug: "penguin-second-floor-dice",
    name: "Second Floor Dice Blocks",
    map: "Penguin Hotel",
    mapSlug: "penguin-hotel",
    category: "best",
    survivalRate: 76,
    votes: 134,
    upvotes: 102,
    author: "IGN",
    submittedAt: "2026-06-16",
    tips: "Upper floor tables, statues, large dice blocks for cover.",
    source: "IGN",
    sourceUrl: "https://www.ign.com/wikis/meccha-chameleon/All_Maps_in_Meccha_Chameleon:_Best_Hiding_Spots",
  }),
  spot({
    slug: "penguin-hallway-risk",
    name: "Hallway Object Cluster",
    map: "Penguin Hotel",
    mapSlug: "penguin-hotel",
    category: "impossible",
    survivalRate: 45,
    votes: 123,
    upvotes: 55,
    author: "IGN",
    submittedAt: "2026-06-16",
    tips: "Hallway objects and colors — worthwhile if willing to take the risk.",
    source: "IGN",
    sourceUrl: "https://www.ign.com/wikis/meccha-chameleon/All_Maps_in_Meccha_Chameleon:_Best_Hiding_Spots",
  }),
  spot({
    slug: "penguin-ice-sculpture",
    name: "Ice Sculpture Back",
    map: "Penguin Hotel",
    mapSlug: "penguin-hotel",
    category: "best",
    survivalRate: 84,
    votes: 187,
    upvotes: 157,
    author: "Community",
    submittedAt: "2026-06-19",
    tips: "Ice blue #4A90D9 or white #FFFFFF depending on viewing angle.",
    source: "Community",
    sourceUrl: "https://meccha-chameleon.wiki/maps/",
    trending: true,
  }),

  // ── Cold Storage ──
  spot({
    slug: "cold-storage-meat-shelf",
    name: "Meat Shelf Disguise",
    map: "Cold Storage",
    mapSlug: "cold-storage",
    category: "best",
    survivalRate: 86,
    votes: 276,
    upvotes: 237,
    author: "meccha-chameleon.net",
    submittedAt: "2026-06-22",
    tips: "Shelf shadow and prop repetition both help. Object stack type spot.",
    source: "meccha-chameleon.net",
    sourceUrl: "https://meccha-chameleon.net/maps/cold-storage/",
    featured: true,
    trending: true,
  }),
  spot({
    slug: "cold-storage-gas-cylinder",
    name: "Gas Cylinder Corner",
    map: "Cold Storage",
    mapSlug: "cold-storage",
    category: "community",
    survivalRate: 78,
    votes: 198,
    upvotes: 154,
    author: "meccha-chameleon.net",
    submittedAt: "2026-06-22",
    tips: "Seekers tunnel on obvious shelf and miss left-side utility object.",
    source: "meccha-chameleon.net",
    sourceUrl: "https://meccha-chameleon.net/maps/cold-storage/",
  }),
  spot({
    slug: "cold-storage-tile-grid",
    name: "Tile Wall Grid",
    map: "Cold Storage",
    mapSlug: "cold-storage",
    category: "best",
    survivalRate: 82,
    votes: 167,
    upvotes: 137,
    author: "meccha-chameleon.net",
    submittedAt: "2026-06-22",
    tips: "Works only if pose respects tile lines. Wrong silhouette exposes you fast.",
    source: "meccha-chameleon.net",
    sourceUrl: "https://meccha-chameleon.net/maps/cold-storage/",
  }),
  spot({
    slug: "cold-storage-shelf-back-row",
    name: "Shelf Back Row",
    map: "Cold Storage",
    mapSlug: "cold-storage",
    category: "best",
    survivalRate: 91,
    votes: 234,
    upvotes: 213,
    author: "meccha-chameleon.net",
    submittedAt: "2026-06-22",
    tips: "Steel blue #6B8FA3. Crouch at bottom rear of deepest shelf row.",
    source: "meccha-chameleon.net",
    sourceUrl: "https://meccha-chameleon.net/maps/best-hiding-spots/",
    featured: true,
    trending: true,
  }),

  // ── Brick Loft ──
  spot({
    slug: "brick-loft-red-brick-alcove",
    name: "Red Brick Alcove",
    map: "Brick Loft",
    mapSlug: "brick-loft",
    category: "best",
    survivalRate: 83,
    votes: 176,
    upvotes: 146,
    author: "TheGamer Community",
    submittedAt: "2026-06-09",
    tips: "Red brick #A0522D. Stand in deepest part of wall alcove.",
    source: "TheGamer",
    sourceUrl: "https://www.thegamer.com/mecca-chameleon-best-hiding-spots-guide/",
    trending: true,
  }),
  spot({
    slug: "brick-loft-pipe-crawl",
    name: "Industrial Pipe Crawl",
    map: "Brick Loft",
    mapSlug: "brick-loft",
    category: "funny",
    survivalRate: 77,
    votes: 189,
    upvotes: 145,
    author: "Community",
    submittedAt: "2026-06-14",
    tips: "Iron gray + brick red. Crouch directly under pipe cluster.",
    source: "Community",
    sourceUrl: "https://meccha-chameleon.wiki/maps/",
    trending: true,
  }),
  spot({
    slug: "brick-loft-window-sill",
    name: "Window Sill Blend",
    map: "Brick Loft",
    mapSlug: "brick-loft",
    category: "community",
    survivalRate: 58,
    votes: 134,
    upvotes: 78,
    author: "Community",
    submittedAt: "2026-06-11",
    tips: "Orange-brown #CD853F. Avoid moving in strong light.",
    source: "Community",
    sourceUrl: "https://meccha-chameleon.wiki/maps/",
  }),
  spot({
    slug: "brick-loft-iron-stair",
    name: "Iron Stair Vertical",
    map: "Brick Loft",
    mapSlug: "brick-loft",
    category: "impossible",
    survivalRate: 35,
    votes: 156,
    upvotes: 55,
    author: "Community",
    submittedAt: "2026-06-10",
    tips: "Vertical chase zone. Only viable with perfect iron + brick dual-tone paint.",
    source: "Community",
    sourceUrl: "https://meccha-chameleon.wiki/maps/",
  }),

  // ── Indoor Country (GameRant) ──
  spot({
    slug: "indoor-country-barn-hay-edge",
    name: "Barn Side Hay Edge",
    map: "Indoor Country",
    mapSlug: "indoor-country",
    category: "best",
    survivalRate: 79,
    votes: 142,
    upvotes: 118,
    author: "GameRant Community",
    submittedAt: "2026-06-27",
    tips: "Along barn wall blocked by hay, cow signs, or pumpkins — open-looking but foot-traffic shielded.",
    source: "GameRant",
    sourceUrl: "https://gamerant.com/meccha-chameleon-best-hiding-spots/",
    featured: true,
  }),
  spot({
    slug: "indoor-country-balloon-cluster",
    name: "Ground Balloon Cluster",
    map: "Indoor Country",
    mapSlug: "indoor-country",
    category: "community",
    survivalRate: 74,
    votes: 128,
    upvotes: 101,
    author: "GameRant Community",
    submittedAt: "2026-06-27",
    tips: "Hide in the middle of the balloon pile — outer edges protrude and get scanned first.",
    source: "GameRant",
    sourceUrl: "https://gamerant.com/meccha-chameleon-best-hiding-spots/",
  }),
  spot({
    slug: "indoor-country-mud-patch",
    name: "Patterned Mud Patch",
    map: "Indoor Country",
    mapSlug: "indoor-country",
    category: "best",
    survivalRate: 76,
    votes: 119,
    upvotes: 94,
    author: "GameRant Community",
    submittedAt: "2026-06-27",
    tips: "Paint mud pattern, not flat brown. Surrounding walk-around clutter distracts seekers.",
    source: "GameRant",
    sourceUrl: "https://gamerant.com/meccha-chameleon-best-hiding-spots/",
    trending: true,
  }),

  // ── Sugarland (GameRant + IGN) ──
  spot({
    slug: "sugarland-gingerbread-circle",
    name: "Gingerbread Men Circle",
    map: "Sugarland",
    mapSlug: "sugarland",
    category: "community",
    survivalRate: 77,
    votes: 134,
    upvotes: 108,
    author: "GameRant Community",
    submittedAt: "2026-06-27",
    tips: "Sample floor inside the gingerbread ring. Props break outline on ground plane.",
    source: "GameRant",
    sourceUrl: "https://gamerant.com/meccha-chameleon-best-hiding-spots/",
  }),
  spot({
    slug: "sugarland-cake-tree",
    name: "White Cake & Tree",
    map: "Sugarland",
    mapSlug: "sugarland",
    category: "best",
    survivalRate: 81,
    votes: 156,
    upvotes: 128,
    author: "IGN Editor Jen",
    submittedAt: "2026-06-28",
    tips: "Hide against the tree trunk or lie under branches; strawberry-on-cake mimic works if paint matches frosting.",
    source: "IGN",
    sourceUrl: "https://www.ign.com/wikis/meccha-chameleon/All_Maps_in_Meccha_Chameleon:_Best_Hiding_Spots",
    featured: true,
    trending: true,
  }),
  spot({
    slug: "sugarland-gumdrop-pile",
    name: "Central Gumdrop Pile",
    map: "Sugarland",
    mapSlug: "sugarland",
    category: "best",
    survivalRate: 79,
    votes: 142,
    upvotes: 115,
    author: "IGN Editor Jen",
    submittedAt: "2026-06-28",
    tips: "Align against candy mountain shadows in the center pile — sample shadow side separately from highlight gumdrops.",
    source: "IGN",
    sourceUrl: "https://www.ign.com/wikis/meccha-chameleon/All_Maps_in_Meccha_Chameleon:_Best_Hiding_Spots",
    trending: true,
  }),
  spot({
    slug: "sugarland-candy-houses",
    name: "Candy Houses & Chocolate Hill",
    map: "Sugarland",
    mapSlug: "sugarland",
    category: "community",
    survivalRate: 76,
    votes: 118,
    upvotes: 94,
    author: "IGN Editor Jen",
    submittedAt: "2026-06-28",
    tips: "Corner candy houses beside chocolate hill — use vertical height or wedge between house roofs.",
    source: "IGN",
    sourceUrl: "https://www.ign.com/wikis/meccha-chameleon/All_Maps_in_Meccha_Chameleon:_Best_Hiding_Spots",
  }),
  spot({
    slug: "sugarland-candy-locker",
    name: "Corner Candy Locker",
    map: "Sugarland",
    mapSlug: "sugarland",
    category: "community",
    survivalRate: 74,
    votes: 109,
    upvotes: 86,
    author: "IGN Editor Jen",
    submittedAt: "2026-06-28",
    tips: "Tall locker beside the candy mountain — climb angle or ground tuck next to locker base.",
    source: "IGN",
    sourceUrl: "https://www.ign.com/wikis/meccha-chameleon/All_Maps_in_Meccha_Chameleon:_Best_Hiding_Spots",
  }),

  // ── Osaka (IGN v1.7.0 — newest map) ──
  spot({
    slug: "osaka-truck-bed",
    name: "Truck Bed Shadow",
    map: "Osaka",
    mapSlug: "osaka",
    category: "best",
    survivalRate: 83,
    votes: 187,
    upvotes: 154,
    author: "IGN Editor Jen",
    submittedAt: "2026-06-22",
    tips: "Hide inside truck bed or undercarriage — sample shaded metal, not lit asphalt. Shadow paint is critical.",
    source: "IGN",
    sourceUrl: "https://www.ign.com/wikis/meccha-chameleon/All_Maps_in_Meccha_Chameleon:_Best_Hiding_Spots",
    featured: true,
    trending: true,
  }),
  spot({
    slug: "osaka-signage-above",
    name: "Signage & Octopus Statue",
    map: "Osaka",
    mapSlug: "osaka",
    category: "best",
    survivalRate: 80,
    votes: 234,
    upvotes: 198,
    author: "IGN Editor Jen",
    submittedAt: "2026-06-22",
    tips: "Blend into overhead signs or the large octopus wall statue. Finish prep before hunt — seekers look up on round two.",
    source: "IGN",
    sourceUrl: "https://www.ign.com/wikis/meccha-chameleon/All_Maps_in_Meccha_Chameleon:_Best_Hiding_Spots",
    featured: true,
    trending: true,
  }),
  spot({
    slug: "osaka-shop-clutter",
    name: "Open Shop Clutter",
    map: "Osaka",
    mapSlug: "osaka",
    category: "community",
    survivalRate: 78,
    votes: 167,
    upvotes: 131,
    author: "IGN Editor Jen",
    submittedAt: "2026-06-23",
    tips: "Open storefronts with metal fans and crates — sample exact prop surface, not mixed neon mid-tones.",
    source: "IGN",
    sourceUrl: "https://www.ign.com/wikis/meccha-chameleon/All_Maps_in_Meccha_Chameleon:_Best_Hiding_Spots",
    trending: true,
  }),
  spot({
    slug: "osaka-trash-corner",
    name: "Trash & Plywood Corner",
    map: "Osaka",
    mapSlug: "osaka",
    category: "funny",
    survivalRate: 71,
    votes: 198,
    upvotes: 142,
    author: "IGN Editor Jen",
    submittedAt: "2026-06-23",
    tips: "Walled corner with plywood stacks, crates, and trash bags — trash-can mimic or flat bag pose both work.",
    source: "IGN",
    sourceUrl: "https://www.ign.com/wikis/meccha-chameleon/All_Maps_in_Meccha_Chameleon:_Best_Hiding_Spots",
    trending: true,
  }),
  spot({
    slug: "osaka-alleyway-nook",
    name: "Alleyway Nook",
    map: "Osaka",
    mapSlug: "osaka",
    category: "community",
    survivalRate: 75,
    votes: 143,
    upvotes: 112,
    author: "IGN Editor Jen",
    submittedAt: "2026-06-24",
    tips: "Tight alley geometry breaks silhouette — commit to one wall color and avoid straddling lantern light zones.",
    source: "IGN",
    sourceUrl: "https://www.ign.com/wikis/meccha-chameleon/All_Maps_in_Meccha_Chameleon:_Best_Hiding_Spots",
  }),

  // ── Cross-map funny / impossible ──
  spot({
    slug: "party-room-neon-absence",
    name: "Neon Absence Trick",
    map: "Mansion",
    mapSlug: "mansion",
    category: "funny",
    survivalRate: 52,
    votes: 223,
    upvotes: 116,
    author: "Katkat Guide",
    submittedAt: "2026-06-17",
    tips: "Don't look for bright colors — look for absence of them. White slivers on back expose you.",
    source: "Katkat",
    sourceUrl: "https://katkat.com/blog/seeker-tips-meccha-chameleon-guide",
  }),
  spot({
    slug: "white-elbow-trap",
    name: "White Elbow Syndrome",
    map: "Mansion",
    mapSlug: "mansion",
    category: "impossible",
    survivalRate: 15,
    votes: 312,
    upvotes: 47,
    author: "Mobalytics",
    submittedAt: "2026-06-18",
    tips: "Rotate camera 360° before prep ends. White gaps between limbs end more rounds than bad spots.",
    source: "Mobalytics",
    sourceUrl: "https://mobalytics.gg/news/guides/meccha-chameleon-tips-and-tricks",
    trending: true,
  }),
  spot({
    slug: "sewer-grate-shadow",
    name: "Drain Grate Shadow",
    map: "Sewer",
    mapSlug: "sewer",
    category: "funny",
    survivalRate: 64,
    votes: 178,
    upvotes: 114,
    author: "Community",
    submittedAt: "2026-06-13",
    tips: "Gray-green #5C7A6B. Stay low. Hunters crouch-checking still miss sometimes.",
    source: "Community",
    sourceUrl: "https://mechachameleon.org/maps/sewer",
  }),
  spot({
    slug: "backrooms-fluorescent-blind",
    name: "Fluorescent Light Blind",
    map: "Backrooms",
    mapSlug: "backrooms",
    category: "funny",
    survivalRate: 44,
    votes: 198,
    upvotes: 87,
    author: "Community",
    submittedAt: "2026-06-16",
    tips: "Bright yellow #E8DCC8. Stand still play dead under buzzing light.",
    source: "Community",
    sourceUrl: "https://meccha-chameleon.wiki/maps/backrooms/",
  }),
  spot({
    slug: "penguin-pool-drain",
    name: "Pool Drain Corner",
    map: "Penguin Hotel",
    mapSlug: "penguin-hotel",
    category: "funny",
    survivalRate: 61,
    votes: 167,
    upvotes: 102,
    author: "Community",
    submittedAt: "2026-06-13",
    tips: "Tile blue #2E6BA8. Strong reflection — move fast through zone.",
    source: "Community",
    sourceUrl: "https://www.ign.com/wikis/meccha-chameleon/All_Maps_in_Meccha_Chameleon:_Best_Hiding_Spots",
  }),
];

export function getSpotBySlug(slug: string): HiddenSpot | undefined {
  return hiddenSpots.find((s) => s.slug === slug);
}

export function getTopSpots(limit = 12): HiddenSpot[] {
  return [...hiddenSpots]
    .sort((a, b) => b.survivalRate - a.survivalRate)
    .slice(0, limit);
}

export function getLatestSpots(limit = 6): HiddenSpot[] {
  return [...hiddenSpots]
    .sort((a, b) => b.submittedAt.localeCompare(a.submittedAt))
    .slice(0, limit);
}

export function getSpotsByCategory(category: SpotCategoryId): HiddenSpot[] {
  return hiddenSpots.filter((s) => s.category === category);
}

export function getSpotsByMap(mapSlug: string): HiddenSpot[] {
  return hiddenSpots
    .filter((s) => s.mapSlug === mapSlug)
    .sort((a, b) => b.survivalRate - a.survivalRate);
}

export function getSpotCountByMap(mapSlug: string): number {
  return hiddenSpots.filter((s) => s.mapSlug === mapSlug).length;
}

export function getRelatedSpots(spot: HiddenSpot, limit = 4): HiddenSpot[] {
  const sameMap = getSpotsByMap(spot.mapSlug).filter((s) => s.slug !== spot.slug);
  if (sameMap.length >= limit) return sameMap.slice(0, limit);

  const sameCategory = hiddenSpots
    .filter(
      (s) =>
        s.slug !== spot.slug &&
        s.mapSlug !== spot.mapSlug &&
        s.category === spot.category
    )
    .sort((a, b) => b.survivalRate - a.survivalRate);

  return [...sameMap, ...sameCategory].slice(0, limit);
}

export type SpotRecommendations = {
  sameMap: HiddenSpot[];
  sameCategory: HiddenSpot[];
  easySpots: HiddenSpot[];
  hardSpots: HiddenSpot[];
  similarRating: HiddenSpot[];
};

export function getSpotRecommendations(spot: HiddenSpot, limit = 4): SpotRecommendations {
  const others = hiddenSpots.filter((s) => s.slug !== spot.slug);

  const sameMap = others
    .filter((s) => s.mapSlug === spot.mapSlug)
    .sort((a, b) => b.survivalRate - a.survivalRate)
    .slice(0, limit);

  const sameCategory = others
    .filter((s) => s.category === spot.category && s.mapSlug !== spot.mapSlug)
    .sort((a, b) => b.survivalRate - a.survivalRate)
    .slice(0, limit);

  const easySpots = others
    .filter((s) => s.survivalRate >= 80)
    .sort((a, b) => b.survivalRate - a.survivalRate)
    .slice(0, limit);

  const hardSpots = others
    .filter((s) => s.survivalRate < 60 || s.category === "impossible")
    .sort((a, b) => a.survivalRate - b.survivalRate)
    .slice(0, limit);

  const ratingMin = spot.survivalRate - 12;
  const ratingMax = spot.survivalRate + 12;
  const similarRating = others
    .filter((s) => s.survivalRate >= ratingMin && s.survivalRate <= ratingMax)
    .sort((a, b) => b.survivalRate - a.survivalRate)
    .slice(0, limit);

  return { sameMap, sameCategory, easySpots, hardSpots, similarRating };
}

export function sortSpots(sort: SpotSortId): HiddenSpot[] {
  const list = [...hiddenSpots];
  switch (sort) {
    case "newest":
      return list.sort((a, b) => b.submittedAt.localeCompare(a.submittedAt));
    case "featured":
      return list.sort(
        (a, b) =>
          Number(b.featured) - Number(a.featured) ||
          Number(b.trending) - Number(a.trending) ||
          b.survivalRate - a.survivalRate
      );
    case "funny":
      return list
        .filter((s) => s.category === "funny")
        .sort((a, b) => b.upvotes - a.upvotes);
    case "top-rated":
    default:
      return list.sort((a, b) => b.survivalRate - a.survivalRate);
  }
}
