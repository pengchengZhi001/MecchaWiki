export type WikiGenre =
  | "tactical-fps"
  | "moba"
  | "survival"
  | "hero-shooter"
  | "battle-royale"
  | "extraction"
  | "sports"
  | "manager"
  | "rpg"
  | "roguelike"
  | "horror"
  | "sandbox"
  | "mmo"
  | "strategy"
  | "co-op"
  | "sim"
  | "platformer"
  | "social";

export type SteamWikiGame = {
  rank: number;
  slug: string;
  name: string;
  shortName: string;
  steamAppId: number;
  developer: string;
  publisher: string;
  genre: WikiGenre;
  genreLabel: string;
  freeToPlay: boolean;
  tagline: string;
  pitch: string;
  loop: string;
  firstMoves: string[];
  mistakes: string[];
  settingsNotes: string[];
  extra: {
    slug: string;
    title: string;
    category: string;
    excerpt: string;
    sections: { heading: string; body: string }[];
  };
  faq: { q: string; a: string }[];
};

export type WikiDifficulty = "Easy" | "Medium" | "Hard" | "Expert";

export type WikiImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type WikiGuide = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  seoKeywords: string[];
  content: { heading: string; body: string }[];
  heroImage?: WikiImage;
};

export type WikiMap = {
  slug: string;
  name: string;
  difficulty: WikiDifficulty;
  tagline: string;
  overview: string;
  stats: { label: string; value: string }[];
  poi: { name: string; note: string }[];
  notes: string[];
  image: WikiImage;
  seoKeywords?: string[];
};

export type WikiRole = {
  slug: string;
  name: string;
  role: string;
  difficulty: WikiDifficulty;
  beginnerRank: number;
  tiers: { label: string; value: string }[];
  kit: string[];
  excerpt: string;
  strengths: string[];
  weaknesses: string[];
  starterTips: string[];
  image: WikiImage;
  seoKeywords?: string[];
};

export type WikiStrat = {
  slug: string;
  name: string;
  mapSlug?: string;
  mapName: string;
  difficulty: WikiDifficulty;
  risk: "Low" | "Medium" | "High";
  bestFor: string;
  duration: string;
  excerpt: string;
  steps: string[];
  tips: string[];
  image: WikiImage;
  seoKeywords?: string[];
};

export type FullWikiHubLabels = {
  maps: string;
  roles: string;
  strats: string;
};

export type FullWikiCopy = {
  home: {
    strats: string;
    roles: string;
    maps: string;
    guides: string;
  };
  pages: {
    maps: string;
    roles: string;
    strats: string;
  };
};

export type FullWiki = {
  slug: string;
  hubs: FullWikiHubLabels;
  copy: FullWikiCopy;
  maps: WikiMap[];
  roles: WikiRole[];
  strats: WikiStrat[];
  guides: WikiGuide[];
};
