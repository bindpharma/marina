import type { Metadata } from 'next';
import Link from 'next/link';

import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import Testimonials from '@/components/Testimonials';
import SmartImage from '@/components/SmartImage';
import Reveal from '@/components/Reveal';
import JsonLd from '@/components/JsonLd';

import { breadcrumbSchema, pageMeta } from '@/lib/seo';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = pageMeta({
  title: 'Projelerimiz — Tamamlanan Yat Döşeme ve Dekorasyon Uygulamaları',
  description:
    'İstanbul\'un farklı marinalarında tamamladığımız yat döşeme, tente, halı, minder ve dekorasyon projelerinden seçili örnekler. Tuzla, Pendik, Ataköy, Fenerbahçe ve daha fazlası.',
  path: '/projeler',
  keywords:
    'yat döşeme projeleri, yat tentesi örnekleri, yat dekorasyon referansları, istanbul yat döşeme galeri',
});

const PROJECTS = [
  {
    title: 'Salon ve dinette döşeme',
    location: 'Tuzla Viaport Marina',
    type: 'Yat Döşeme',
    image: IMAGES.project1,
    fallback: 'craft' as const,
    span: 'col-span-2 row-span-2',
  },
  {
    title: 'Bimini ve kapela uygulaması',
    location: 'Fenerbahçe Marina',
    type: 'Yat Tentesi',
    image: IMAGES.project2,
    fallback: 'yacht' as const,
    span: '',
  },
  {
    title: 'Fly bridge minder seti',
    location: 'Setur Kalamış Marina',
    type: 'Yat Minderleri',
    image: IMAGES.project3,
    fallback: 'fabric' as const,
    span: '',
  },
  {
    title: 'Marin halı yenileme',
    location: 'Pendik Marina',
    type: 'Yat Halısı',
    image: IMAGES.project4,
    fallback: 'fabric' as const,
    span: 'col-span-2',
  },
  {
    title: 'Tavan kumaş kaplama',
    location: 'Ataköy Marina',
    type: 'Yat Dekorasyonu',
    image: IMAGES.project5,
    fallback: 'craft' as const,
    span: 'row-span-2',
  },
  {
    title: 'Sundeck ve kokpit tente',
    location: 'West İstanbul Marina',
    type: 'Yat Tentesi',
    image: IMAGES.project6,
    fallback: 'yacht' as const,
    span: '',
  },
  {
    title: 'Komple iç dekorasyon',
    location: 'İstinye Marina',
    type: 'Yat Dekorasyonu',
    image: IMAGES.about,
    fallback: 'craft' as const,
    span: 'col-span-2',
  },
];

export default function ProjelerPage() {
  return (
    <>
      <PageHero
        eyebrow="Projelerimiz"
        title={
          <>
            Sahadan, <em className="italic font-normal text-gold-light">gerçek uygulamalar.</em>
          </>
        }
        description="Tamamladığımız her proje, bize bir sonrakinde daha iyiyi yapma motivasyonu verir. Aşağıda son projelerimizden seçili kareler."
        image={IMAGES.marina1}
        imageVariant="marina"
        breadcrumbs={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'Projeler' },
        ]}
      />

      {/* Asymmetric grid */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="Galeri"
              title={
                <>
                  Bazı tamamlanan <em className="italic font-normal text-gold-dark">örneklerimiz.</em>
                </>
              }
              description="Marina, hizmet türü ve tekne stilinden bağımsız olarak, her bir projede aynı atölye disiplini ve marin sınıfı malzeme kullanılmıştır."
            />
          </Reveal>

          <div className="grid auto-rows-[260px] grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
            {PROJECTS.map((p, i) => (
              <Reveal key={i} delay={(i % 4) * 60}>
                <article
                  className={`group relative h-full w-full overflow-hidden rounded-2xl bg-navy shadow-soft transition-all duration-500 hover:shadow-lift ${p.span}`}
                >
                  <SmartImage
                    image={p.image}
                    fallbackVariant={p.fallback}
                    className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-110"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  />
                  <div className="img-overlay" aria-hidden="true" />
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <span className="font-serif text-xs italic text-gold-light">{p.type}</span>
                    <h3 className="mt-1 font-serif text-lg leading-tight text-white sm:text-xl">
                      {p.title}
                    </h3>
                    <span className="mt-1 text-[11px] uppercase tracking-[0.12em] text-white/65">
                      {p.location}
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <section className="bg-navy py-20 text-center text-white sm:py-24">
        <div className="container-x">
          <h2 className="mx-auto max-w-3xl text-[clamp(30px,4vw,52px)] font-light leading-[1.1] tracking-[-0.025em]">
            Sıradaki proje, <em className="italic font-normal text-gold-light">sizin tekneniz.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/75">
            Aklınızdaki uygulamayı paylaşın, ücretsiz keşifle birlikte teklifimizi sunalım.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/iletisim" className="btn btn-primary">Ücretsiz Keşif</Link>
            <Link href="/hizmetler" className="btn btn-ghost-dark">Hizmetlerimiz</Link>
          </div>
        </div>
      </section>

      <JsonLd
        data={breadcrumbSchema([
          { name: 'Ana Sayfa', url: '/' },
          { name: 'Projeler', url: '/projeler' },
        ])}
      />
    </>
  );
}
