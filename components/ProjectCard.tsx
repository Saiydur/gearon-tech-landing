import Link from "next/link";
import Tag from "@/components/ui/Tag";
import ProjectImage from "@/components/ProjectImage";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-divider bg-bg no-underline transition-colors duration-300 hover:border-accent-blue/55"
    >
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 z-10 w-0 bg-accent-blue transition-[width] duration-300 group-hover:w-1"
      />
      <ProjectImage src={project.image} alt={`${project.name} screenshot`} className="aspect-[16/10] w-full" />
      <div className="flex flex-1 flex-col gap-4 px-7 py-7.5">
        <div className="flex items-baseline justify-between gap-3 font-mono text-[13px]">
          <span className="text-accent-300">{project.sector}</span>
          <span className="text-text/55">{project.status}</span>
        </div>
        <h2 className="font-heading text-[21px] leading-[1.15] font-bold tracking-[-0.015em] sm:text-2xl">
          {project.name}
        </h2>
        <div className="text-[13px] leading-[1.4] text-text/62">{project.client}</div>
        <div className="flex items-baseline gap-3 border-t-2 border-b border-divider py-4">
          <span className="origin-left font-heading text-[30px] leading-none font-bold text-accent transition-transform duration-300 group-hover:scale-110">
            {project.metric}
          </span>
          <span className="text-[13px] leading-[1.4] text-text/70">{project.metricLabel}</span>
        </div>
        <p className="text-[14.5px] leading-[1.65] text-text/80">{project.summary}</p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-1.5">
          {project.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
        <div className="text-xs leading-[1.5] text-text/55">{project.arch}</div>
      </div>
    </Link>
  );
}
