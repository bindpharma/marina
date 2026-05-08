import type { ReactNode } from 'react';

interface SectionHeadProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  className?: string;
  variant?: 'light' | 'dark';
}

export default function SectionHead({
  eyebrow,
  title,
  description,
  className = '',
  variant = 'light',
}: SectionHeadProps) {
  const eyebrowClass = variant === 'light' ? 'eyebrow' : 'eyebrow-light';
  const descClass = variant === 'light' ? 'text-muted' : 'text-white/70';

  return (
    <div className={`mb-14 grid gap-7 lg:mb-20 lg:grid-cols-[1fr_1.4fr] lg:gap-16 ${className}`}>
      <div>
        <span className={eyebrowClass}>{eyebrow}</span>
        <h2 className="mt-5 text-[clamp(34px,5vw,64px)] font-light leading-[1.05] tracking-[-0.03em]">
          {title}
        </h2>
      </div>
      <p className={`max-w-xl self-end text-base lg:text-[17px] ${descClass}`}>{description}</p>
    </div>
  );
}
