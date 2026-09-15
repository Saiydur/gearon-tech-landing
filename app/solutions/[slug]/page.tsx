import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Reveal from "@/components/Reveal";
import { APPLICATIONS, PROJECTS } from "@/lib/data";
import { pageMetadata, serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return APPLICATIONS.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const app = APPLICATIONS.find((a) => a.slug === slug);
  if (!app) return {};

  return pageMetadata({
    title: `${app.title} - GearON Tech`,
    description: app.copy,
    path: `/solutions/${app.slug}`,
  });
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const app = APPLICATIONS.find((a) => a.slug === slug);
  if (!app) notFound();

  const proof = (app.relatedSlugs ?? [])
    .map((s) => PROJECTS.find((p) => p.slug === s))
    .filter((p): p is (typeof PROJECTS)[number] => Boolean(p));

  const jsonLd = [
    serviceJsonLd({ name: app.title, description: app.copy, path: `/solutions/${app.slug}` }),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Solutions", path: "/solutions" },
      { name: app.title, path: `/solutions/${app.slug}` },
    ]),
  ];

  return (
    <div>
      {jsonLd.map((entry, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}

      <section className="border-b-2 border-divider">
        <Reveal className="mx-auto max-w-[1560px] px-5 pt-11 pb-8 sm:px-8 sm:pt-16 sm:pb-10 lg:px-16 lg:pt-19 lg:pb-12">
          <Link href="/solutions" className="mb-6 inline-block font-mono text-[13px] text-accent-300 no-underline">
            ← all solutions
          </Link>
          <h1 className="mb-6 -ml-[0.055em] max-w-[20ch] font-heading text-[36px] leading-[1.05] font-bold tracking-[-0.025em] sm:text-[52px] lg:text-[62px]">
            {app.title}
          </h1>
          <p className="max-w-[62ch] text-[17px] leading-[1.65] text-text/82">{app.intro}</p>
        </Reveal>
      </section>

      {proof.length > 0 && (
        <section className="border-b-2 border-divider bg-surface">
          <div className="mx-auto max-w-[1560px] px-5 py-9 sm:px-8 sm:py-12 lg:px-16 lg:py-14">
            <div className="mb-5 font-mono text-[13px] text-text/60">in production</div>
            <div className="flex flex-wrap gap-4">
              {proof.map((p) => (
                <Link
                  key={p.slug}
                  href={`/work/${p.slug}`}
                  className="min-w-0 flex-[1_1_280px] rounded-lg border border-divider bg-bg px-6 py-5.5 no-underline transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="mb-1.5 font-heading text-lg font-bold">{p.name}</div>
                  <div className="mb-3 text-[13px] text-text/62">{p.client}</div>
                  <div className="flex items-baseline gap-2.5">
                    <span className="font-heading text-2xl leading-none font-bold text-accent">{p.metric}</span>
                    <span className="text-[13px] text-text/70">{p.metricLabel}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-accent text-bg">
        <Reveal className="mx-auto flex max-w-[1560px] flex-wrap items-end justify-between gap-7 px-5 py-11 sm:px-8 sm:py-16 lg:px-16 lg:py-19">
          <h2 className="-ml-[0.055em] max-w-[20ch] font-heading text-[30px] leading-[1.06] font-bold tracking-[-0.02em] sm:text-4xl lg:text-5xl">
            Tell us what you need built. We&apos;ll tell you what it takes.
          </h2>
          <Button href="/#book" variant="invert">
            Book a discovery call
          </Button>
        </Reveal>
      </section>
    </div>
  );
}
