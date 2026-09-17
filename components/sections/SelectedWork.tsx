import Button from "@/components/ui/Button";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
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

        <Reveal stagger={0.08} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {homeProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
