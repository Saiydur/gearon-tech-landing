import Link from "next/link";
import Reveal from "@/components/Reveal";
import Button from "@/components/ui/Button";
import { APPLICATIONS } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Solutions - GearON Tech",
  description:
    "Ecommerce, POS and inventory, HRM, LMS, examination systems, AI assessment, chatbots, automation and ERP - the application categories we build and run in production.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <div>
      <section className="border-b-2 border-divider">
        <Reveal className="mx-auto max-w-[1560px] px-5 pt-11 pb-8 sm:px-8 sm:pt-16 sm:pb-10 lg:px-16 lg:pt-19 lg:pb-12">
          <div className="mb-6 font-mono text-[13px] text-accent-300">solutions</div>
          <h1 className="mb-6 -ml-[0.055em] max-w-[20ch] font-heading text-[36px] leading-[1.05] font-bold tracking-[-0.025em] sm:text-[52px] lg:text-[68px]">
            What we build.
          </h1>
          <p className="max-w-[58ch] text-[17px] leading-[1.65] text-text/82">
            Thirteen categories our teams ship into production, from a single storefront to the platform an
            enterprise runs on. Each one links to the case study that proves it.
          </p>
        </Reveal>
      </section>

      <section className="border-b-2 border-divider">
        <div className="mx-auto max-w-[1560px]">
          <Reveal
            stagger={0.05}
            className="grid grid-cols-1 border-t-2 border-l-2 border-divider sm:grid-cols-2 lg:grid-cols-3"
          >
            {APPLICATIONS.map((app, i) => (
              <Link
                key={app.slug}
                href={`/solutions/${app.slug}`}
                className="group border-r-2 border-b-2 border-divider p-6.5 no-underline transition-colors duration-300 hover:bg-surface/70"
              >
                <div className="mb-3 font-mono text-[13px] leading-[1.5] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="mb-2.5 font-heading text-lg leading-[1.2] font-bold tracking-[-0.015em] group-hover:underline">
                  {app.title}
                </h2>
                <p className="text-[14.5px] leading-[1.6] text-text/76">{app.copy}</p>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-accent text-bg">
        <Reveal className="mx-auto flex max-w-[1560px] flex-wrap items-end justify-between gap-7 px-5 py-11 sm:px-8 sm:py-16 lg:px-16 lg:py-19">
          <h2 className="-ml-[0.055em] max-w-[20ch] font-heading text-[30px] leading-[1.06] font-bold tracking-[-0.02em] sm:text-4xl lg:text-5xl">
            Don&apos;t see your exact system? We probably still build it.
          </h2>
          <Button href="/#book" variant="invert">
            Book a discovery call
          </Button>
        </Reveal>
      </section>
    </div>
  );
}
