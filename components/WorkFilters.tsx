"use client";

import { useMemo, useState } from "react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS, STACK_OPTIONS, uniqueValues } from "@/lib/data";

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
