import Reveal from "@/components/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms of Service - GearON Tech",
  description: "The terms that govern use of the tech.gearon.ai website.",
  path: "/terms",
});

const EFFECTIVE_DATE = "16 September 2026";

const SECTIONS: { title: string; body: React.ReactNode }[] = [
  {
    title: "Acceptance of these terms",
    body: (
      <>
        By using <strong>tech.gearon.ai</strong>, you agree to these terms. If you don&apos;t agree, please
        don&apos;t use the site.
      </>
    ),
  },
  {
    title: "What this site is",
    body: (
      <>
        This website is informational - it describes GearON Tech, part of GearON Group, and the work we do.
        Nothing on it is a contractual offer. An actual engagement with us is governed by a separate, signed
        services agreement or statement of work, not by this page.
      </>
    ),
  },
  {
    title: "Intellectual property",
    body: (
      <>
        The content on this site - text, design, the GearON name and mark, and the case study write-ups - is our
        property or used with permission. Client names, logos and figures shown in case studies are used with
        that client&apos;s knowledge; some details are withheld or described generally where clients are under
        NDA. Please don&apos;t reproduce this content without asking first.
      </>
    ),
  },
  {
    title: "No warranty",
    body: (
      <>
        This site is provided as-is. We try to keep it accurate and up to date, but we don&apos;t guarantee
        that everything on it is complete or error-free at every moment.
      </>
    ),
  },
  {
    title: "External links",
    body: (
      <>
        This site links to third-party services - GearON.ai, scheduling tools, WhatsApp, and others. We
        aren&apos;t responsible for the content, availability or practices of sites we don&apos;t control.
      </>
    ),
  },
  {
    title: "Engagement terms",
    body: (
      <>
        These terms cover use of the <em>website</em> only. If you engage us for a project, the scope, price,
        timeline, IP ownership and liability for that engagement are set out in a separate agreement we sign
        with you - that agreement governs, not this page.
      </>
    ),
  },
  {
    title: "Limitation of liability",
    body: (
      <>
        To the extent permitted by law, GearON Tech isn&apos;t liable for indirect or consequential loss arising
        from your use of this website. This doesn&apos;t limit liability we take on under a signed services
        agreement for actual project work.
      </>
    ),
  },
  {
    title: "Governing law",
    body: <>These terms are governed by the laws of Bangladesh, where GearON Tech is based.</>,
  },
  {
    title: "Changes to these terms",
    body: <>We may update these terms from time to time. We&apos;ll update the date at the top of this page when we do.</>,
  },
  {
    title: "Contact",
    body: (
      <>
        Questions about these terms: <a href="mailto:hello@gearon.ai" className="text-accent">hello@gearon.ai</a>.
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <div>
      <section className="border-b-2 border-divider">
        <Reveal className="mx-auto max-w-[1560px] px-5 pt-11 pb-8 sm:px-8 sm:pt-16 sm:pb-10 lg:px-16 lg:pt-19 lg:pb-12">
          <div className="mb-6 font-mono text-[13px] text-accent-300">legal</div>
          <h1 className="mb-4 -ml-[0.055em] max-w-[20ch] font-heading text-[36px] leading-[1.05] font-bold tracking-[-0.025em] sm:text-[52px] lg:text-[60px]">
            Terms of Service
          </h1>
          <p className="font-mono text-[13px] text-text/60">Effective {EFFECTIVE_DATE}</p>
        </Reveal>
      </section>

      <section>
        <div className="mx-auto max-w-[1560px] px-5 py-9 sm:px-8 sm:py-12 lg:px-16 lg:py-16">
          <Reveal stagger={0.04} className="max-w-[72ch] border-t-2 border-divider">
            {SECTIONS.map((section) => (
              <div key={section.title} className="border-b border-divider py-6.5">
                <h2 className="mb-2.5 font-heading text-lg leading-[1.25] font-bold tracking-[-0.015em]">
                  {section.title}
                </h2>
                <p className="text-[15px] leading-[1.7] text-text/78">{section.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </div>
  );
}
