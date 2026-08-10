export type MistfallDifficulty = "Easy" | "Medium" | "Hard" | "Expert";

export type MistfallImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type MistfallSection = {
  id?: string;
  heading: string;
  body: string;
  image?: MistfallImage;
};

export type ExtractionRoute = {
  slug: string;
  name: string;
  mapSlug: string;
  mapName: string;
  difficulty: MistfallDifficulty;
  risk: "Low" | "Medium" | "High";
  bestFor: string;
  duration: string;
  excerpt: string;
  steps: string[];
  tips: string[];
  image: MistfallImage;
  seoKeywords?: string[];
};

export type HunterClass = {
  slug: string;
  name: string;
  role: string;
  difficulty: MistfallDifficulty;
  beginnerRank: number;
  pveTier: "S" | "A" | "B" | "C";
  pvpTier: "S" | "A" | "B" | "C";
  stances: string[];
  excerpt: string;
  strengths: string[];
  weaknesses: string[];
  starterTips: string[];
  image: MistfallImage;
  seoKeywords?: string[];
};

export type MistfallMap = {
  slug: string;
  name: string;
  difficulty: MistfallDifficulty;
  gearCap: string;
  escapeXp: string;
  clearance: string;
  tagline: string;
  overview: string;
  poi: { name: string; note: string }[];
  extractNotes: string[];
  image: MistfallImage;
  seoKeywords?: string[];
};

export type MistfallGuide = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: MistfallSection[];
  heroImage?: MistfallImage;
  seoKeywords?: string[];
};
