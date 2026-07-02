export type GuideSection = {
  id?: string;
  heading: string;
  body: string;
};

export type GuideSource = {
  name: string;
  url: string;
};

export type Guide = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: GuideSection[];
  /** Extra search terms for page metadata — beyond default site keywords. */
  seoKeywords?: string[];
  /** External references used to write this guide — no unsourced claims. */
  sources?: GuideSource[];
};

export function wordCount(guide: Guide): number {
  return guide.content.reduce(
    (sum, s) => sum + s.body.split(/\s+/).filter(Boolean).length,
    0
  );
}
