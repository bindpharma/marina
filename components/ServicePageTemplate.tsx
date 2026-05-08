import Link from 'next/link';
import type { ReactNode } from 'react';

import PageHero from './PageHero';
import SectionHead from './SectionHead';
import ProcessSteps from './ProcessSteps';
import MarinasList from './MarinasList';
import SmartImage from './SmartImage';
import Reveal from './Reveal';
import JsonLd from './JsonLd';
import Materials from './Materials';
import Testimonials from './Testimonials';

import { SERVICES } from '@/lib/constants';
import { breadcrumbSchema, serviceSchema } from '@/lib/seo';
import { IMAGES } from '@/lib/images';
import type { SiteImage } from '@/lib/images';

export interface ServiceSection {
  heading: string;
  body: ReactNode;
}

interface ServicePageTemplateProps {
  slug: string;
  longIntro?: ReactNode;
  sections?: ServiceSection[];
  whyUs?: string[];
}

const SLUG_VISUALS: Record<
  string,
  { hero: SiteImage; gallery: SiteImage[]; fallback: 'yacht' | 'craft' | 'fabric' | 'marina' | 'compass' }
> = {
  'yat-doseme': {
    hero: IMAGES.serviceUpholstery,
    gallery: [IMAGES.project1, IMAGES.project3, IMAGES.workshop],
    fallback: 'craft',
  },
  'yat-tentesi': {
    hero: IMAGES.serviceBimini,
    gallery: [IMAGES.project2, IMAGES.project6, IMAGES.marina1],
    fallback: 'yacht',
  },
  'yat-halisi': {
    hero: IMAGES.serviceCarpet,
    gallery: [IMAGES.project4, IMAGES.materials, IMAGES.project5],
    fallback: 'fabric',
  },
  'yat-minderleri': {
    hero: IMAGES.serviceCushions,
    gallery: [IMAGES.project3, IMAGES.project1, IMAGES.materials],
    fallback: 'fabric',
  },
  'yat-dekorasyonu': {
    hero: IMAGES.serviceDecoration,
    gallery: [IMAGES.project5, IMAGES.about, IMAGES.workshop],
    fallback: 'craft',
  },
};

export default function ServicePageTemplate({
  slug,
  longIntro,
  sections = [],
  whyUs = [],
}: ServicePageTemplateProps) {
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return null;

  const visuals = SLUG_VISUALS[slug];
  const others = SERVICES.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow={`Hizmet · ${service.number}`}
        title={
          <>
            {service.title}
            <br />
            <em className="italic font-normal text-gold-light">{service.short}</em>
          </>
        }
        description={service.excerpt}
        image={visuals?.hero || IMAGES.about}
        imageVariant={visuals?.fallback || 'craft'}
        breadcrumbs={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'Hizmetler', href: '/hizmetler' },
          { label: service.title },
        ]}
      />

      <section className="bg-white py-24 sm:py-32">
        <div className="container-x">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <span className="eyebrow">Hizmet Detayı</span>
              <h2 className="mt-5 text-[clamp(28px,4vw,44px)] font-light leading-[1.15] tracking-[-0.025em]">
                {service.title} — uygulama yaklaşımımız
              </h2>
              <div className="mt-7 space-y-5 text-[16px] leading-relaxed text-muted sm:text-[17px]">
                {longIntro || (
                  <p>
                    {service.title} hizmetimiz, atölye standartlarında ölçüm, dikim ve montaj
                    süreciyle yürütülür. İhtiyacınız olan tüm detayları ücretsiz keşif sırasında
                    netleştiriyoruz.
                  </p>
                )}
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="sticky top-28 space-y-5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-card">
                  <SmartImage
                    image={visuals?.hero || IMAGES.about}
                    fallbackVariant={visuals?.fallback || 'craft'}
                    className="absolute inset-0 h-full w-full"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                </div>

                <div className="rounded-2xl bg-navy p-7 text-white shadow-card">
                  <h3 className="font-serif text-xl tracking-tight">Bu hizmet için teklif alın</h3>
                  <p className="mt-2 text-sm text-white/65">
                    İstanbul tüm marinalarda ücretsiz ölçü ve teklif. Aynı iş günü dönüş.
                  </p>
                  <Link href="/iletisim" className="btn btn-primary mt-5 w-full justify-center">
                    Ücretsiz Keşif Talep Et
                  </Link>
                  <a
                    href="https://wa.me/905319006053"
                    className="mt-3 flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
                    </svg>
                    WhatsApp
                  </a>
                </div>

                <div className="rounded-2xl border border-navy/10 bg-sand-100 p-6">
                  <h3 className="font-serif text-base tracking-tight">Ödeme şartları</h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-slate2">
                    <li>· Keşif ve teklif: ücretsiz</li>
                    <li>· %50 sipariş onayında</li>
                    <li>· %50 teslimat sonrası</li>
                    <li>· 2 yıl yazılı işçilik garantisi</li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {sections.length > 0 && (
        <section className="bg-sand-100 py-24">
          <div className="container-x">
            <Reveal>
              <SectionHead
                eyebrow="Detaylar"
                title={
                  <>
                    Sık sorulanlar ve <em className="italic font-normal text-gold-dark">teknik notlar.</em>
                  </>
                }
                description="Bu hizmette en çok aldığımız sorular ve uygulama detayları. Daha fazlası için keşif randevusu alabilirsiniz."
              />
            </Reveal>
            <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
              {sections.map((section, i) => (
                <Reveal key={i}>
                  <article className="card h-full p-8 sm:p-10">
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-gold text-navy font-serif text-sm font-semibold">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-serif text-xl tracking-tight sm:text-2xl">
                        {section.heading}
                      </h3>
                    </div>
                    <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-slate2 sm:text-[16px]">
                      {section.body}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {visuals?.gallery && (
        <section className="bg-white py-24">
          <div className="container-x">
            <Reveal>
              <SectionHead
                eyebrow="Örnek Uygulamalar"
                title={
                  <>
                    Sahadan <em className="italic font-normal text-gold-dark">kareler.</em>
                  </>
                }
                description={`${service.title} alanında tamamladığımız bazı projelerden örnekler. Her uygulama, teknenize özel ölçülmüş ve dikilmiştir.`}
              />
            </Reveal>
            <Reveal>
              <div className="grid gap-5 sm:grid-cols-3">
                {visuals.gallery.map((img, i) => (
                  <div
                    key={i}
                    className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand-100 shadow-soft"
                  >
                    <SmartImage
                      image={img}
                      fallbackVariant={visuals.fallback}
                      className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105"
                      sizes="(min-width: 640px) 33vw, 100vw"
                    />
                    <div className="img-overlay-light" aria-hidden="true" />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {whyUs.length > 0 && (
        <section className="bg-navy py-24 text-white sm:py-28">
          <div className="container-x">
            <Reveal>
              <span className="eyebrow-light">Neden Aslan Marin</span>
              <h2 className="mt-5 max-w-3xl text-[clamp(28px,4vw,46px)] font-light leading-[1.15] tracking-[-0.025em]">
                {service.title} alanında <em className="italic font-normal text-gold-light">farkımız.</em>
              </h2>
            </Reveal>
            <Reveal>
              <ul className="mt-12 grid gap-x-10 gap-y-5 sm:grid-cols-2">
                {whyUs.map((f, i) => (
                  <li key={i} className="flex items-start gap-4 text-[15px] leading-relaxed text-white/85 sm:text-[16px]">
                    <span className="mt-1 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-gold text-navy">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      )}

      <section className="bg-white py-24 sm:py-32">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="Sürecimiz"
              title={
                <>
                  Keşiften teslime, <em className="italic font-normal text-gold-dark">dört adım.</em>
                </>
              }
              description="Her projede aynı disiplinle çalışıyoruz: Şeffaf süreç, net teslim tarihleri ve sürpriz olmayan fiyatlandırma."
            />
          </Reveal>
          <Reveal>
            <ProcessSteps />
          </Reveal>
        </div>
      </section>

      <Materials />

      <Testimonials />

      <section className="bg-sand-100 py-24">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="Hizmet Bölgeleri"
              title={
                <>
                  Tüm İstanbul marinalarında, <em className="italic font-normal text-gold-dark">aynı kalite.</em>
                </>
              }
              description="Atölyemiz Sütlüce'de, hizmet alanımız tüm İstanbul. Marinalardaki teknelere yerinde ölçü, dikim ve montaj sağlıyoruz."
            />
          </Reveal>
          <Reveal>
            <MarinasList />
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="Diğer Hizmetler"
              title={
                <>
                  Tek atölye, <em className="italic font-normal text-gold-dark">tüm hizmetler.</em>
                </>
              }
              description="Yatınızın bakım ve yenilenme sürecinde tüm ihtiyaçlarınızı tek bir atölyeden karşılayabilirsiniz."
            />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/hizmetler/${s.slug}`}
                className="card card-hover group block p-7"
              >
                <span className="font-serif text-sm italic text-gold-dark">{s.number}</span>
                <h3 className="mt-3 font-serif text-xl tracking-tight">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">{s.short}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-navy transition-colors group-hover:text-gold-dark">
                  Detaylar
                  <svg
                    width="12"
                    height="12"
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy py-20 text-center text-white sm:py-24">
        <div className="container-x">
          <h2 className="mx-auto max-w-3xl text-[clamp(30px,4vw,52px)] font-light leading-[1.1] tracking-[-0.025em]">
            <em className="italic font-normal text-gold-light">{service.title}</em> için ücretsiz keşif.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base font-light text-white/75">
            İstanbul içi tüm marinalarda yerinde ölçü ve teklif tamamen ücretsizdir.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/iletisim" className="btn btn-primary">
              Teklif Talep Et
            </Link>
            <Link href="/projeler" className="btn btn-ghost-dark">
              Projelerimizi Gör
            </Link>
          </div>
        </div>
      </section>

      <JsonLd
        data={[
          serviceSchema(service),
          breadcrumbSchema([
            { name: 'Ana Sayfa', url: '/' },
            { name: 'Hizmetler', url: '/hizmetler' },
            { name: service.title, url: `/hizmetler/${slug}` },
          ]),
        ]}
      />
    </>
  );
}
