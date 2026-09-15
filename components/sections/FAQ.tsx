import Reveal from "@/components/Reveal";
import { FAQS } from "@/lib/data";
import { faqJsonLd } from "@/lib/seo";

export default function FAQ() {
  return (
    <section id="faq" className="border-b-2 border-divider">
      <div className="mx-auto max-w-[1560px] px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-21">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }}
        />
        <h2 className="mb-8.5 font-heading text-[28px] leading-[1.08] font-bold tracking-[-0.02em] sm:text-[34px] lg:text-[40px]">
          Questions worth answering upfront
        </h2>
        <Reveal stagger={0.06} className="border-t-2 border-divider">
          {FAQS.map((faq) => (
            <details key={faq.question} className="group border-b border-divider py-6.5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-5 [&::-webkit-details-marker]:hidden">
                <h3 className="max-w-[52ch] font-heading text-lg leading-[1.25] font-bold tracking-[-0.015em]">
                  {faq.question}
                </h3>
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full border border-divider font-mono text-base leading-none text-accent transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3.5 max-w-[64ch] text-[15px] leading-[1.65] text-text/78">{faq.answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
