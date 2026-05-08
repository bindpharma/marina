import { PROCESS_STEPS } from '@/lib/constants';

export default function ProcessSteps() {
  return (
    <div className="relative grid gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
      <div
        className="absolute left-0 right-0 top-[38px] hidden h-px bg-navy/15 lg:block"
        aria-hidden="true"
      />

      {PROCESS_STEPS.map((step) => (
        <div key={step.num} className="group relative z-10 px-4 text-center">
          <div className="mx-auto mb-7 grid h-[76px] w-[76px] place-items-center rounded-full border border-navy/15 bg-white font-serif text-[28px] text-navy shadow-soft transition-all duration-500 group-hover:border-navy group-hover:bg-navy group-hover:text-gold-light">
            {step.num}
          </div>
          <h3 className="mb-3 text-[22px]">{step.title}</h3>
          <p className="text-[14px] leading-relaxed text-muted">{step.text}</p>
        </div>
      ))}
    </div>
  );
}
