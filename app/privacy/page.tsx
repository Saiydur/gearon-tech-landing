import Reveal from "@/components/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy - GearON Tech",
  description: "How GearON Tech collects, uses and protects information from visitors to this website.",
  path: "/privacy",
});

const EFFECTIVE_DATE = "16 September 2026";

const SECTIONS: { title: string; body: React.ReactNode }[] = [
  {
    title: "What this covers",
    body: (
      <>
        This policy covers <strong>tech.gearon.ai</strong>, the marketing website for GearON Tech, an independent
        software practice. It does not cover GearON.ai, a separate product with its own privacy policy - or any
        client system we build and operate, which is governed by that client&apos;s own policies.
      </>
    ),
  },
  {
    title: "Information we collect",
    body: (
      <>
        We collect two kinds of information. First, usage data through Google Analytics - pages viewed, device
        and browser type, approximate location (region-level, not precise), and how you arrived at the site.
        Second, information you give us directly - your name, email address, and anything you tell us when you
        email us, message us on WhatsApp, or book a call through a scheduling tool.
      </>
    ),
  },
  {
    title: "How we use it",
    body: (
      <>
        To understand how people use the site and improve it, to respond to the inquiries you send us, and to
        prepare for and follow up on discovery calls you book. We don&apos;t use anything you send us for
        marketing you didn&apos;t ask for.
      </>
    ),
  },
  {
    title: "Cookies",
    body: (
      <>
        Google Analytics sets cookies to distinguish visitors and measure site usage. You can block or delete
        these through your browser settings, or opt out of Google Analytics entirely using Google&apos;s
        browser add-on. Blocking cookies won&apos;t affect your ability to read the site or contact us.
      </>
    ),
  },
  {
    title: "Third-party services",
    body: (
      <>
        We use Google Analytics to measure site traffic, and may use a third-party scheduling tool (such as
        Calendly) to book calls, and WhatsApp Business to handle chat inquiries. Each of these providers
        processes data under their own privacy policy - we don&apos;t control, and aren&apos;t responsible for,
        how they handle it beyond what we send them.
      </>
    ),
  },
  {
    title: "Data sharing",
    body: (
      <>
        We don&apos;t sell personal data, and we don&apos;t share it with third parties except the service
        providers listed above, to the extent needed to run this site and respond to you.
      </>
    ),
  },
  {
    title: "Data retention",
    body: (
      <>
        We keep information for as long as it&apos;s useful for the purposes above, or as required by law -
        whichever is longer. You can ask us to delete what we hold on you at any time; see &ldquo;Your
        rights&rdquo; below.
      </>
    ),
  },
  {
    title: "Your rights",
    body: (
      <>
        Email <a href="mailto:hello@gearon.ai" className="text-accent">hello@gearon.ai</a> to ask what personal
        data we hold about you, correct it, or have it deleted. We&apos;ll respond within a reasonable time.
      </>
    ),
  },
  {
    title: "Children's privacy",
    body: <>This site isn&apos;t directed at children, and we don&apos;t knowingly collect data from anyone under 16.</>,
  },
  {
    title: "International visitors",
    body: (
      <>
        We&apos;re based in Dhaka, Bangladesh, and data collected through this site may be processed there and in
        the jurisdictions of the service providers listed above (including the United States, where Google
        operates).
      </>
    ),
  },
  {
    title: "Changes to this policy",
    body: <>If we change this policy, we&apos;ll update the date at the top of this page.</>,
  },
  {
    title: "Contact",
    body: (
      <>
        Questions about this policy: <a href="mailto:hello@gearon.ai" className="text-accent">hello@gearon.ai</a>.
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div>
      <section className="border-b-2 border-divider">
        <Reveal className="mx-auto max-w-[1560px] px-5 pt-11 pb-8 sm:px-8 sm:pt-16 sm:pb-10 lg:px-16 lg:pt-19 lg:pb-12">
          <div className="mb-6 font-mono text-[13px] text-accent-300">legal</div>
          <h1 className="mb-4 -ml-[0.055em] max-w-[20ch] font-heading text-[36px] leading-[1.05] font-bold tracking-[-0.025em] sm:text-[52px] lg:text-[60px]">
            Privacy Policy
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
