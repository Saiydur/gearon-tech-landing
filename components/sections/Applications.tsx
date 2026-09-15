import Link from "next/link";
import Reveal from "@/components/Reveal";
import { APPLICATIONS, PROJECTS } from "@/lib/data";

export default function Applications() {
  return (
    <section id="applications" className="border-b-2 border-divider bg-surface">
      <div className="mx-auto max-w-[1560px] px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-21">
        <h2 className="mb-3 font-heading text-[28px] leading-[1.08] font-bold tracking-[-0.02em] sm:text-[34px] lg:text-[40px]">
          Applications we build
        </h2>
        <p className="mb-8.5 max-w-[64ch] text-[15.5px] leading-[1.65] text-text/78">
          Categories our teams ship into production, from a single storefront to the platform an enterprise runs
          on.
        </p>
        <Reveal
          stagger={0.06}
          className="grid grid-cols-1 border-t-2 border-l-2 border-divider sm:grid-cols-2 lg:grid-cols-3"
        >
          {APPLICATIONS.map((app, i) => (
            <div
              key={app.title}
              className="border-r-2 border-b-2 border-divider p-6.5"
            >
              <div className="mb-3 font-mono text-[13px] leading-[1.5] text-accent">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mb-2.5 font-heading text-lg leading-[1.2] font-bold tracking-[-0.015em]">
                <Link href={`/solutions/${app.slug}`} className="no-underline hover:underline">
                  {app.title}
                </Link>
              </h3>
              <p className="text-[14.5px] leading-[1.6] text-text/76">{app.copy}</p>
              {app.relatedSlugs && app.relatedSlugs.length > 0 && (
                <div className="mt-3.5 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-divider pt-3.5">
                  {app.relatedSlugs.map((slug) => {
                    const project = PROJECTS.find((p) => p.slug === slug);
                    if (!project) return null;
                    return (
                      <Link
                        key={slug}
                        href={`/work/${slug}`}
                        className="font-mono text-[12.5px] text-accent no-underline hover:underline"
                      >
                        Proof: {project.name} ↗
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
