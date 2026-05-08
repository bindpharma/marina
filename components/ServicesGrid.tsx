import Link from 'next/link';
import SmartImage from './SmartImage';
import { SERVICES } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

const SERVICE_IMAGES = {
  'yat-doseme': { image: IMAGES.serviceUpholstery, fallback: 'craft' as const },
  'yat-tentesi': { image: IMAGES.serviceBimini, fallback: 'yacht' as const },
  'yat-halisi': { image: IMAGES.serviceCarpet, fallback: 'fabric' as const },
  'yat-minderleri': { image: IMAGES.serviceCushions, fallback: 'fabric' as const },
  'yat-dekorasyonu': { image: IMAGES.serviceDecoration, fallback: 'craft' as const },
};

export default function ServicesGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map((service) => {
        const visual = SERVICE_IMAGES[service.slug as keyof typeof SERVICE_IMAGES];
        return (
          <article
            key={service.slug}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
          >
            <Link
              href={`/hizmetler/${service.slug}`}
              className="block"
              aria-label={`${service.title} hizmet detayları`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <SmartImage
                  image={visual.image}
                  fallbackVariant={visual.fallback}
                  className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="img-overlay" aria-hidden="true" />
                <div className="absolute left-5 top-5 z-10">
                  <span className="rounded-full bg-white/95 px-3 py-1 font-serif text-xs italic text-gold-dark backdrop-blur-sm">
                    {service.number}
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 z-10">
                  <h3 className="font-serif text-2xl text-white tracking-tight">{service.title}</h3>
                  <p className="mt-1 text-[12px] uppercase tracking-[0.14em] text-white/80">
                    {service.short}
                  </p>
                </div>
              </div>

              <div className="p-7">
                <p className="text-[14.5px] leading-relaxed text-muted">{service.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors group-hover:text-gold-dark">
                  Detayları gör
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12h14M13 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
