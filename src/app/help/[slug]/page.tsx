import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import QaImageBlock from "@/components/QaImageBlock";
import { getHelpTopicBySlug, helpTopics } from "@/data/help";
import { faqPageJsonLd, breadcrumbJsonLd, articleJsonLd } from "@/lib/json-ld";
import { NativeBanner } from "@/components/ads";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return helpTopics.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = getHelpTopicBySlug(slug);
  if (!topic) return {};

  const keywords = [
    topic.category,
    "faq",
    "help",
    "Meccha Chameleon",
    ...topic.items.flatMap((i) => i.tags ?? []),
  ];

  return createMetadata({
    title: topic.title,
    description: topic.excerpt,
    path: `/help/${slug}`,
    keywords,
  });
}

function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

export default async function HelpTopicPage({ params }: Props) {
  const { slug } = await params;
  const topic = getHelpTopicBySlug(slug);
  if (!topic) notFound();

  const faqItems = topic.items.map((item) => ({
    question: item.question,
    answer: item.answer.join(" "),
  }));

  const toc = topic.items.map((item) => ({
    id: item.id,
    label: item.question,
  }));

  return (
    <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Help & FAQ", path: "/help" },
            { name: topic.title, path: `/help/${slug}` },
          ]),
          faqPageJsonLd(faqItems),
          articleJsonLd({
            title: topic.title,
            description: topic.excerpt,
            path: `/help/${slug}`,
          }),
        ]}
      />

      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <aside className="mb-8 lg:col-span-2">
          <Link
            href="/help"
            className="text-sm text-muted transition hover:text-accent"
          >
            ← Back to Help & FAQ
          </Link>
          <nav className="sticky top-24 mt-6 hidden lg:block">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Questions
            </p>
            <ul className="mt-3 max-h-[70vh] space-y-2 overflow-y-auto border-l border-card-border pl-4">
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
              <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent ring-1 ring-accent/30">
                {topic.category}
              </span>
              <span className="text-xs text-muted">
                {topic.items.length} questions
              </span>
            </div>
            <h1 className="mt-4 text-3xl font-bold sm:text-4xl">{topic.title}</h1>
            <p className="mt-3 text-lg text-muted">{topic.excerpt}</p>
            {topic.heroImage && (
              <div className="mt-6">
                <QaImageBlock image={topic.heroImage} priority />
              </div>
            )}
          </header>

          <NativeBanner />

          <nav className="mt-8 rounded-xl border border-card-border bg-card p-5 lg:hidden">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Questions
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

          <div className="mt-8 space-y-12">
            {topic.items.map((item, index) => (
              <section
                key={item.id}
                id={item.id}
                className="scroll-mt-24 border-b border-card-border pb-12 last:border-0"
              >
                <h2 className="text-xl font-bold leading-snug">{item.question}</h2>
                {item.tags && item.tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-surface px-2 py-0.5 text-xs text-muted ring-1 ring-card-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {item.image && (
                  <QaImageBlock image={item.image} priority={index === 0} />
                )}
                <div className="mt-4 space-y-3">
                  {item.answer.map((paragraph, i) => {
                    const watchMatch = paragraph.match(/^Watch: (https:\/\/.+)$/);
                    if (watchMatch) {
                      return (
                        <p key={i} className="leading-relaxed text-foreground/80">
                          <a
                            href={watchMatch[1]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-accent hover:underline"
                          >
                            Watch on YouTube →
                          </a>
                        </p>
                      );
                    }
                    return (
                      <p key={i} className="leading-relaxed text-foreground/80">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
                {item.relatedLink && (
                  <p className="mt-4">
                    {isExternalHref(item.relatedLink.href) ? (
                      <a
                        href={item.relatedLink.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-accent hover:underline"
                      >
                        {item.relatedLink.label} →
                      </a>
                    ) : (
                      <Link
                        href={item.relatedLink.href}
                        className="text-sm font-medium text-accent hover:underline"
                      >
                        {item.relatedLink.label} →
                      </Link>
                    )}
                  </p>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
