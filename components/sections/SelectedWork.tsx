import Link from "next/link";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import Reveal from "@/components/Reveal";
import { PROJECTS } from "@/lib/data";

export default function SelectedWork() {
  const homeProjects = PROJECTS.filter((p) => p.home);

  return (
    <section id="work" className="border-b-2 border-divider">
      <div className="mx-auto max-w-[1560px] px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-21">
        <div className="mb-8.5 flex flex-wrap items-baseline justify-between gap-5">
          <div>
            <h2 className="mb-2.5 font-heading text-[28px] leading-[1.08] font-bold tracking-[-0.02em] sm:text-[34px] lg:text-[40px]">
              Selected work
            </h2>
            <p className="max-w-[52ch] text-base leading-[1.6] text-text/78">
              Every line below is a system in production, not a pitch deck slide.
            </p>
          </div>
          <Button href="/work" variant="secondary" className="px-4.5! py-2.5!">
            All case studies
          </Button>
        </div>

        <Reveal stagger={0.08} className="border-t-2 border-divider">
          {homeProjects.map((project) => (
            <Link
              key={project.name}
              href={`/work/${project.slug}`}
              className="group -mx-3 flex flex-wrap items-baseline gap-x-7 gap-y-4 border-b border-divider px-3 py-5.5 no-underline transition-colors hover:bg-surface/70"
            >
              <div className="min-w-0 flex-[2_1_260px]">
                <div className="mb-1.5 font-heading text-[19px] leading-[1.2] font-bold tracking-[-0.01em] text-text group-hover:underline">
                  {project.name}
                </div>
                <div className="text-[13px] leading-[1.4] text-text/62">{project.client}</div>
              </div>
              <div className="min-w-0 flex-[1_1_150px]">
                <div className="font-heading text-[22px] leading-[1.1] font-bold text-accent">
                  {project.metric}
                </div>
                <div className="mt-1 text-xs leading-[1.4] text-text/62">{project.metricLabel}</div>
              </div>
              <div className="flex min-w-0 flex-[2_1_240px] flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
