import type { Metadata } from 'next';

import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import SmartImage from '@/components/SmartImage';
import Reveal from '@/components/Reveal';
import JsonLd from '@/components/JsonLd';

import { CONTACT } from '@/lib/constants';
import { breadcrumbSchema, pageMeta } from '@/lib/seo';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = pageMeta({
  title: 'İletişim — Ücretsiz Keşif ve Teklif Talebi',
  description:
    'Aslan Marin ile iletişime geçin. İstanbul tüm marinalarında ücretsiz yerinde keşif. Telefon, WhatsApp ve form ile hızlı dönüş.',
  path: '/iletisim',
  keywords: 'iletişim, yat döşeme teklif, ücretsiz keşif, istanbul yat döşeme firması iletişim',
});

export default function IletisimPage() {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title={
          <>
            Bir <em className="italic font-normal text-gold-light">mesaj</em> uzaklıktayız.
          </>
        }
        description="Telefon, WhatsApp ya da formdan ulaşın. Genellikle aynı iş günü içinde sizi arıyoruz. İstanbul içi tüm marinalarda yerinde keşif tamamen ücretsizdir."
        image={IMAGES.marina1}
        imageVariant="marina"
        breadcrumbs={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'İletişim' },
        ]}
      />

      <section className="bg-white py-24 sm:py-32">
        <div className="container-x">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            {/* Info column */}
            <div className="lg:col-span-5">
              <span className="eyebrow">Bize Ulaşın</span>
              <h2 className="mt-5 text-[clamp(28px,4vw,44px)] font-light leading-[1.1] tracking-[-0.025em]">
                Üç farklı yoldan
                <br />
                <em className="italic font-normal text-gold-dark">aynı hızla.</em>
              </h2>

              <div className="mt-10 space-y-6">
                <ContactRow
                  label="Telefon"
                  value={CONTACT.phone}
                  href={`tel:${CONTACT.phoneRaw}`}
                  icon={
                    <path
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  }
                />
                <ContactRow
                  label="WhatsApp"
                  value="Mesaj gönder"
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  external
                  icon={
                    <>
                      <path d="M17 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5-.2 0-.4 0-.6 0-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3.1 4.9 4.3 2.9 1.2 2.9.8 3.4.7.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3z" fill="currentColor" />
                      <path d="M20.5 3.5C18.2 1.2 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.7.9 3.7 1.4 5.7 1.4h.1c6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.5-8.4zM12 21.8c-1.8 0-3.6-.5-5.2-1.4l-.4-.2-3.7 1 1-3.6-.2-.4c-1-1.6-1.5-3.4-1.5-5.3C2 6.5 6.5 2 12 2c2.7 0 5.2 1 7 2.9 1.9 1.9 2.9 4.4 2.9 7.1 0 5.5-4.4 9.8-9.9 9.8z" fill="currentColor" />
                    </>
                  }
                />
                <ContactRow
                  label="E-posta"
                  value={CONTACT.email}
                  href={`mailto:${CONTACT.email}`}
                  icon={
                    <>
                      <rect x="3" y="6" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
                      <path d="M3 8l9 6 9-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </>
                  }
                />
                <ContactRow
                  label="Atölye"
                  value={CONTACT.address.full}
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    CONTACT.address.full
                  )}`}
                  external
                  icon={
                    <>
                      <path
                        d="M12 22s7-7 7-13a7 7 0 10-14 0c0 6 7 13 7 13z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.6" />
                    </>
                  }
                />
                <ContactRow
                  label="Çalışma Saatleri"
                  value={CONTACT.hours}
                  icon={
                    <>
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </>
                  }
                />
              </div>

              <div className="mt-10 aspect-video overflow-hidden rounded-2xl">
                <SmartImage
                  image={IMAGES.workshop}
                  fallbackVariant="craft"
                  className="absolute inset-0 h-full w-full"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
            </div>

            {/* Form column */}
            <div className="lg:col-span-7">
              <Reveal>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <JsonLd
        data={breadcrumbSchema([
          { name: 'Ana Sayfa', url: '/' },
          { name: 'İletişim', url: '/iletisim' },
        ])}
      />
    </>
  );
}

function ContactRow({
  label,
  value,
  href,
  external,
  icon,
}: {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  icon: React.ReactNode;
}) {
  const content = (
    <div className="group flex items-start gap-4">
      <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full bg-navy text-gold-light transition-colors group-hover:bg-gold group-hover:text-navy">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          {icon}
        </svg>
      </span>
      <div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
          {label}
        </div>
        <div className="mt-1 text-[16px] font-medium text-navy transition-colors group-hover:text-gold-dark">
          {value}
        </div>
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <a
      href={href}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      className="block"
    >
      {content}
    </a>
  );
}
