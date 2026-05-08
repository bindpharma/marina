import Link from 'next/link';
import { SITE } from '@/lib/constants';

interface LogoProps {
  variant?: 'dark' | 'light';
  withTagline?: boolean;
}

/**
 * Aslan Marin logosu — aslan + denizci direksiyonu birleşimi.
 * Production'da gerçek logo dosyanızı /public/logo.svg veya /public/logo.png
 * olarak ekleyip burada referansı değiştirin.
 */
export default function Logo({ variant = 'dark', withTagline = true }: LogoProps) {
  const textColor = variant === 'dark' ? 'text-navy' : 'text-white';
  const subColor = variant === 'dark' ? 'text-muted' : 'text-white/60';

  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label={`${SITE.name} ana sayfa`}>
      <span className="relative grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-navy shadow-soft transition-all group-hover:shadow-card">
        <svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          {/* Direksiyon dış halka */}
          <circle cx="16" cy="16" r="11" stroke="#D4A95A" strokeWidth="1.5" />
          {/* Direksiyon iç halka */}
          <circle cx="16" cy="16" r="5" stroke="#D4A95A" strokeWidth="1.2" />
          {/* Dümen kollarıdır */}
          <path
            d="M16 5 L16 11 M16 21 L16 27 M5 16 L11 16 M21 16 L27 16"
            stroke="#D4A95A"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Aslan A */}
          <path
            d="M13 19 L16 11 L19 19 M14.5 16 L17.5 16"
            stroke="#D4A95A"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </span>
      <span className="leading-none">
        <span className={`block font-serif text-[22px] font-medium tracking-tight ${textColor}`}>
          Aslan Marin
        </span>
        {withTagline && (
          <span className={`mt-1 block text-[10px] font-semibold uppercase tracking-[0.22em] ${subColor}`}>
            Yat Döşeme · İstanbul
          </span>
        )}
      </span>
    </Link>
  );
}
