import Link from 'next/link';
import type { ReactNode } from 'react';
import SmartImage from './SmartImage';
import { IMAGES } from '@/lib/images';
import type { SiteImage } from '@/lib/images';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  image?: SiteImage;
  imageVariant?: 'yacht' | 'marina' | 'craft' | 'fabric' | 'compass';
}

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  image = IMAGES.about,
  imageVariant = 'yacht',
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy pb-20 pt-36 text-white sm:pb-24 sm:pt-44">
      <div className="absolute inset-0 -z-10">
        <SmartImage
          image={image}
          fallbackVariant={imageVariant}
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
      </div>

      <div className="container-x relative">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-white/60">
              {breadcrumbs.map((b, i) => (
                <li key={i} className="flex items-center gap-2">
                  {b.href ? (
                    <Link href={b.href} className="transition-colors hover:text-gold-light">
                      {b.label}
                    </Link>
                  ) : (
                    <span className="text-white/85">{b.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <span className="eyebrow-light">{eyebrow}</span>
        <h1 className="mt-5 max-w-4xl text-[clamp(38px,6vw,76px)] font-light leading-[1.05] tracking-[-0.03em] text-white">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-white/80 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
