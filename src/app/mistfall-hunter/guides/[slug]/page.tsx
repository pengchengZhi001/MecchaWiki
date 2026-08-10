import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import { NativeBanner } from "@/components/ads";
import { mistfallGuides, getGuideBySlug } from "@/data/mistfall";
import { createMistfallMetadata } from "@/lib/mistfall";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return mistfallGuides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return createMistfallMetadata({
    title: guide.title,
    description: guide.excerpt,
    path: `/mistfall-hunter/guides/${slug}`,
    keywords: guide.seoKeywords,
    image: guide.heroImage?.src,
    imageAlt: guide.heroImage?.alt,
  });
}

function slugify(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default async function MistfallGuideDetailPage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const toc = guide.content.map((section) => ({
    id: section.id ?? slugify(section.heading),
    label: section.heading,
  }));

  return (
    <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Mistfall Hunter", path: "/mistfall-hunter" },
            { name: "Guides", path: "/mistfall-hunter/guides" },
            { name: guide.title, path: `/mistfall-hunter/guides/${slug}` },
          ]),
          articleJsonLd({
            title: guide.title,
            description: guide.excerpt,
            path: `/mistfall-hunter/guides/${slug}`,
            datePublished: "2026-08-10",
            image: guide.heroImage?.src,
          }),
        ]}
      />

      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <aside className="mb-8 lg:col-span-2">
          <Link
            href="/mistfall-hunter/guides"
            className="text-sm text-muted transition hover:text-accent"
          >
            ← Guides
          </Link>
          <nav className="sticky top-24 mt-6 hidden lg:block">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              On this page
            </p>
            <ul className="mt-3 space-y-2 border-l border-card-border pl-4">
              {toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-foreground/70 transition hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="lg:col-span-10">
          <header className="border-b border-card-border pb-8">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-purple/10 px-2.5 py-0.5 text-xs font-medium text-purple ring-1 ring-purple/30">
                {guide.category}
              </span>
              <span className="text-xs text-muted">{guide.readTime} read</span>
            </div>
            <h1 className="mt-4 text-3xl font-bold sm:text-4xl">{guide.title}</h1>
            <p className="mt-3 text-lg text-muted">{guide.excerpt}</p>
            {guide.heroImage && (
              <div className="relative mt-6 aspect-[21/9] overflow-hidden rounded-xl border border-card-border">
                <Image
                  src={guide.heroImage.src}
                  alt={guide.heroImage.alt}
                  fill
                  priority
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            )}
          </header>

          <NativeBanner />

          <div className="prose-custom mt-8 space-y-10">
            {guide.content.map((section) => {
              const id = section.id ?? slugify(section.heading);
              return (
                <section key={id} id={id} className="scroll-mt-24">
                  <h2 className="text-xl font-bold">{section.heading}</h2>
                  {section.image && (
                    <div className="relative mt-4 aspect-[16/9] overflow-hidden rounded-xl border border-card-border">
                      <Image
                        src={section.image.src}
                        alt={section.image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 70vw"
                      />
                    </div>
                  )}
                  <p className="mt-4 leading-relaxed text-foreground/80">
                    {section.body}
                  </p>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
}
