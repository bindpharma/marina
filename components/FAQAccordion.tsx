import { FAQS } from '@/lib/constants';

export default function FAQAccordion() {
  return (
    <div className="divide-y divide-navy/10 border-y border-navy/10">
      {FAQS.map((faq, i) => (
        <details key={i} className="group" name="faq">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-7 transition-colors hover:text-gold-dark">
            <h3 className="font-serif text-[20px] font-normal leading-snug tracking-tight sm:text-[24px]">
              {faq.q}
            </h3>
            <span className="mt-1 grid h-9 w-9 flex-shrink-0 place-items-center rounded-full border border-navy/20 transition-all duration-300 group-open:rotate-45 group-open:border-gold group-open:bg-gold group-open:text-navy">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 5v14M5 12h14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </summary>
          <p className="max-w-3xl pb-7 pr-12 text-[15px] leading-relaxed text-muted sm:text-base">
            {faq.a}
          </p>
        </details>
      ))}
    </div>
  );
}
