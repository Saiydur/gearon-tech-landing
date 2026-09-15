"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import Reveal from "@/components/Reveal";
import { PROJECTS, STACK_OPTIONS, uniqueValues, type Project } from "@/lib/data";

function FilterRow({
  label,
  options,
  active,
  onPick,
}: {
  label: string;
  options: string[];
  active: string;
  onPick: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <span className="flex-[0_0_72px] font-mono text-[13px] text-text/68">{label}</span>
      {["All", ...options].map((option) => {
        const on = active === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onPick(option)}
            className="cursor-pointer rounded-md border px-3 py-1.5 font-mono text-[13px] leading-none transition-transform duration-150 active:scale-[0.96]"
            style={{
              borderColor: on ? "var(--color-accent)" : "var(--color-divider)",
              background: on ? "var(--color-accent)" : "transparent",
              color: on ? "var(--color-bg)" : "var(--color-text)",
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default function WorkFilters() {
  const [sector, setSector] = useState("All");
  const [service, setService] = useState("All");
  const [stack, setStack] = useState("All");

  const sectors = useMemo(() => uniqueValues(PROJECTS, "sector"), []);
  const services = useMemo(() => uniqueValues(PROJECTS, "service"), []);

  const shown = useMemo(
    () =>
      PROJECTS.filter(
        (p) =>
          (sector === "All" || p.sector === sector) &&
          (service === "All" || p.service === service) &&
          (stack === "All" || p.stack.includes(stack)),
      ),
    [sector, service, stack],
  );

  const clearFilters = () => {
    setSector("All");
    setService("All");
    setStack("All");
  };

  return (
    <>
      <section className="sticky top-[65px] z-20 border-b-2 border-divider bg-surface">
        <div className="mx-auto max-w-[1560px] px-5 py-6.5 sm:px-8 lg:px-16">
          <div className="flex flex-col gap-3.5">
            <FilterRow label="sector" options={sectors} active={sector} onPick={setSector} />
            <FilterRow label="service" options={services} active={service} onPick={setService} />
            <FilterRow label="stack" options={STACK_OPTIONS} active={stack} onPick={setStack} />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1560px] px-5 py-6.5 pb-12 sm:px-8 sm:pb-16 lg:px-16 lg:pb-20">
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-4">
            <div className="font-mono text-[13px] text-text/65">
              showing {shown.length} of {PROJECTS.length} projects
            </div>
            <Button variant="ghost" onClick={clearFilters} className="text-[13px]!">
              Clear filters
            </Button>
          </div>

          {shown.length > 0 ? (
            <Reveal stagger={0.06} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {shown.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </Reveal>
          ) : (
            <div className="py-15 text-left text-base leading-[1.6] text-text/65">
              Nothing matches that combination.{" "}
              <Button variant="ghost" onClick={clearFilters} className="text-base!">
                Clear the filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative flex flex-col gap-4 overflow-hidden rounded-lg border border-divider bg-bg px-7 py-7.5 no-underline transition-colors duration-300 hover:border-accent-blue/55"
    >
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-0 bg-accent-blue transition-[width] duration-300 group-hover:w-1"
      />
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
    </Link>
  );
}
