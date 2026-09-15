import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import Reveal from "@/components/Reveal";
import { PROJECTS } from "@/lib/data";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};

  return pageMetadata({
    title: `${project.name} - GearON Tech`,
    description: project.summary,
    path: `/work/${project.slug}`,
  });
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const more = PROJECTS.filter((p) => p.slug !== project.slug && p.sector === project.sector).slice(0, 2);

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: project.name, path: `/work/${project.slug}` },
  ]);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <section className="border-b-2 border-divider">
        <Reveal className="mx-auto max-w-[1560px] px-5 pt-11 pb-8 sm:px-8 sm:pt-16 sm:pb-10 lg:px-16 lg:pt-19 lg:pb-12">
          <Link href="/work" className="mb-6 inline-block font-mono text-[13px] text-accent-300 no-underline">
            ← all case studies
          </Link>
          <div className="mb-4 flex flex-wrap items-center gap-3 font-mono text-[13px]">
            <span className="text-accent-300">{project.sector}</span>
            <span className="text-text/40">/</span>
            <span className="text-text/60">{project.service}</span>
            <span className="text-text/40">/</span>
            <span className="text-text/60">{project.status}</span>
          </div>
          <h1 className="mb-6 -ml-[0.055em] max-w-[20ch] font-heading text-[36px] leading-[1.05] font-bold tracking-[-0.025em] sm:text-[52px] lg:text-[64px]">
            {project.name}
          </h1>
          <p className="max-w-[58ch] text-[17px] leading-[1.65] text-text/82">{project.summary}</p>
        </Reveal>
      </section>

      <section className="border-b-2 border-divider">
        <div className="mx-auto flex max-w-[1560px] flex-wrap">
          <Reveal className="min-w-0 flex-[1_1_360px] border-r-2 border-divider px-5 py-9 sm:px-8 sm:py-12 lg:px-16 lg:py-14">
            <div className="mb-1.5 font-mono text-[13px] text-text/60">client</div>
            <div className="mb-6 font-heading text-lg font-bold">{project.client}</div>
            <div className="mb-1.5 font-mono text-[13px] text-text/60">architecture</div>
            <div className="mb-6 font-heading text-lg font-bold">{project.arch}</div>
            <div className="mb-1.5 font-mono text-[13px] text-text/60">stack</div>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </Reveal>
          <Reveal className="flex min-w-0 flex-[1_1_260px] flex-col items-start justify-center gap-2 bg-surface px-5 py-9 sm:px-8 sm:py-12 lg:px-16 lg:py-14">
            <div className="font-heading text-[48px] leading-none font-bold text-accent sm:text-[58px]">
              {project.metric}
            </div>
            <div className="text-[15px] leading-[1.5] text-text/70">{project.metricLabel}</div>
          </Reveal>
        </div>
      </section>

      {more.length > 0 && (
        <section className="border-b-2 border-divider">
          <div className="mx-auto max-w-[1560px] px-5 py-9 sm:px-8 sm:py-12 lg:px-16 lg:py-14">
            <div className="mb-5 font-mono text-[13px] text-text/60">also in {project.sector}</div>
            <div className="flex flex-wrap gap-4">
              {more.map((p) => (
                <Link
                  key={p.slug}
                  href={`/work/${p.slug}`}
                  className="min-w-0 flex-[1_1_260px] rounded-lg border border-divider px-5.5 py-5 no-underline transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="mb-1 font-heading text-base font-bold">{p.name}</div>
                  <div className="text-[13px] text-text/62">{p.metricLabel}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-accent text-bg">
        <Reveal className="mx-auto flex max-w-[1560px] flex-wrap items-end justify-between gap-7 px-5 py-11 sm:px-8 sm:py-16 lg:px-16 lg:py-19">
          <h2 className="-ml-[0.055em] max-w-[20ch] font-heading text-[30px] leading-[1.06] font-bold tracking-[-0.02em] sm:text-4xl lg:text-5xl">
            Your system could be the next line on this page.
          </h2>
          <Button href="/#book" variant="invert">
            Book a discovery call
          </Button>
        </Reveal>
      </section>
    </div>
  );
}
