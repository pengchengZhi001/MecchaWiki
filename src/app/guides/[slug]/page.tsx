import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import { guides, getGuideBySlug } from "@/data/guides";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};

  return createMetadata({
    title: guide.title,
    description: guide.excerpt,
    path: `/guides/${slug}`,
    keywords: [guide.category, "guide", "Meccha Chameleon"],
  });
}

function slugify(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default async function GuideDetailPage({ params }: Props) {
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
            { name: "Guides", path: "/guides" },
            { name: guide.title, path: `/guides/${slug}` },
          ]),
          articleJsonLd({
            title: guide.title,
            description: guide.excerpt,
            path: `/guides/${slug}`,
          }),
        ]}
      />
      <div className="lg:grid lg:grid-cols-4 lg:gap-12">
        <aside className="mb-8 lg:col-span-1">
          <Link
            href="/guides"
            className="text-sm text-muted transition hover:text-accent"
          >
            ← Back to Guides
          </Link>
          <nav className="sticky top-24 mt-6 hidden lg:block">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Table of Contents
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

        <div className="lg:col-span-3">
          <header className="border-b border-card-border pb-8">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-purple/10 px-2.5 py-0.5 text-xs font-medium text-purple ring-1 ring-purple/30">
                {guide.category}
              </span>
              <span className="text-xs text-muted">{guide.readTime} read</span>
            </div>
            <h1 className="mt-4 text-3xl font-bold sm:text-4xl">{guide.title}</h1>
            <p className="mt-3 text-lg text-muted">{guide.excerpt}</p>
          </header>

          <nav className="mt-8 rounded-xl border border-card-border bg-card p-5 lg:hidden">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Table of Contents
            </p>
            <ul className="mt-3 space-y-2">
              {toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-accent hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="prose-custom mt-8 space-y-10">
            {guide.content.map((section) => {
              const id = section.id ?? slugify(section.heading);
              return (
                <section key={id} id={id} className="scroll-mt-24">
                  <h2 className="text-xl font-bold">{section.heading}</h2>
                  <p className="mt-4 leading-relaxed text-foreground/80">{section.body}</p>
                </section>
              );
            })}
          </div>

          {guide.sources && guide.sources.length > 0 && (
            <footer className="mt-12 rounded-xl border border-card-border bg-surface p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
                Sources
              </h2>
              <p className="mt-2 text-sm text-muted">
                Answers on this page trace back to community reports and official
                references — not invented fixes.
              </p>
              <ul className="mt-4 space-y-2">
                {guide.sources.map((source) => (
                  <li key={source.url}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent hover:underline"
                    >
                      {source.name}
                    </a>
                  </li>
                ))}
              </ul>
            </footer>
          )}
        </div>
      </div>
    </article>
  );
}
