export type GuideSection = {
  id?: string;
  heading: string;
  body: string;
};

export type Guide = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: GuideSection[];
};

export function wordCount(guide: Guide): number {
  return guide.content.reduce(
    (sum, s) => sum + s.body.split(/\s+/).filter(Boolean).length,
    0
  );
}
