import type { Metadata } from 'next';
import Link from 'next/link';

import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import MarinasList from '@/components/MarinasList';
import SmartImage from '@/components/SmartImage';
import Reveal from '@/components/Reveal';
import JsonLd from '@/components/JsonLd';

import { MARINAS } from '@/lib/constants';
import { breadcrumbSchema, pageMeta } from '@/lib/seo';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = pageMeta({
  title: 'Hizmet Verdiğimiz Marinalar — İstanbul',
  description:
    'Tuzla Viaport, Pendik, Ataköy, Güzelce, West İstanbul, Fenerbahçe, Setur Kalamış, İstanbul City Port, İstinye, Tarabya — Aslan Marin tüm İstanbul marinalarında yat döşeme ve dekorasyon hizmeti veriyor.',
  path: '/marinalar',
  keywords:
    'tuzla yat döşeme, pendik yat döşeme, ataköy yat tentesi, fenerbahçe yat dekorasyon, kalamış yat döşeme, istanbul marinaları yat döşeme',
});

const REGIONS = [
  {
    title: 'Avrupa Yakası',
    marinas: ['Ataköy Marina', 'Güzelce Marina', 'West İstanbul Marina', 'İstinye Marina', 'Tarabya Tekne Park'],
  },
  {
    title: 'Anadolu Yakası',
    marinas: ['Viaport Tuzla Marina', 'Pendik Marina', 'Fenerbahçe Marina', 'Setur Kalamış Marina', 'Marin Türk İstanbul City Port'],
  },
  {
    title: 'Mobil Hizmet',
    marinas: ['Hangarlar / Tersaneler', 'Açık Deniz / Mobil Servis', 'Özel İskele Hizmeti'],
  },
];

export default function MarinalarPage() {
  return (
    <>
      <PageHero
        eyebrow="Hizmet Bölgesi"
        title={
          <>
            İstanbul&apos;un her marinasında, <em className="italic font-normal text-gold-light">aynı kalite.</em>
          </>
        }
        description="Sütlüce'deki atölyemizden yola çıkıp İstanbul'un her marinasına ulaşıyoruz. Yerinde ölçü, marinada montaj — ölçüm-üretim-montaj zinciri tek elden."
        image={IMAGES.marina1}
        imageVariant="marina"
        breadcrumbs={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'Marinalar' },
        ]}
      />

      {/* All Marinas */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="Tüm Bölgeler"
              title={
                <>
                  Toplam <em className="italic font-normal text-gold-dark">{MARINAS.length}</em> aktif servis noktası
                </>
              }
              description="İstanbul'un Avrupa ve Anadolu yakasındaki tüm büyük marinalarda hizmet veriyoruz. Bunların dışındaki tekneler için mobil servis sağlıyoruz."
            />
          </Reveal>
          <Reveal>
            <MarinasList />
          </Reveal>
        </div>
      </section>

      {/* By Region */}
      <section className="bg-sand-100 py-24">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="Bölgeye Göre"
              title={
                <>
                  Avrupa, Anadolu <em className="italic font-normal text-gold-dark">ve mobil.</em>
                </>
              }
              description="Hizmet bölgemizi üç ana grup altında inceleyebilirsiniz. Hangi marinada olursanız olun, atölye standartlarımız değişmiyor."
            />
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-3">
            {REGIONS.map((region, i) => (
              <Reveal key={region.title} delay={i * 70}>
                <article className="card h-full p-7">
                  <h3 className="font-serif text-2xl tracking-tight">{region.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {region.marinas.map((m) => (
                      <li key={m} className="flex items-center gap-3 text-[15px] text-slate2">
                        <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-gold/10 text-gold-dark">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path
                              d="M12 22s7-7 7-13a7 7 0 10-14 0c0 6 7 13 7 13z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            />
                            <circle cx="12" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" />
                          </svg>
                        </span>
                        {m}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="bg-white py-24">
        <div className="container-x">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <SmartImage
                  image={IMAGES.marina1}
                  fallbackVariant="marina"
                  className="absolute inset-0 h-full w-full"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </Reveal>
            <Reveal>
              <span className="eyebrow">Mobil Servis</span>
              <h3 className="mt-5 text-[clamp(28px,3.5vw,42px)] font-light leading-[1.1] tracking-[-0.025em]">
                Marinada değil mi?{' '}
                <em className="italic font-normal text-gold-dark">Ekibimiz size geliyor.</em>
              </h3>
              <p className="mt-6 text-[16px] leading-relaxed text-muted sm:text-[17px]">
                Hangar, tersane, özel iskele veya çekekte bulunan teknelere de mobil servis
                sağlıyoruz. Açık denizdeki tekneler için randevulu yerinde keşif yapıyoruz.
                Atölye standartlarımız hareket halinde de değişmiyor.
              </p>
              <Link href="/iletisim" className="btn btn-primary mt-8">
                Mobil Servis Talep Et
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 text-center text-white sm:py-24">
        <div className="container-x">
          <h2 className="mx-auto max-w-3xl text-[clamp(30px,4vw,52px)] font-light leading-[1.1] tracking-[-0.025em]">
            Hangi marinadasınız? <em className="italic font-normal text-gold-light">Yola çıkalım.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/75">
            Marinanızı belirtin, ekibimiz aynı iş günü içinde sizi arasın. Yerinde keşif ücretsizdir.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/iletisim" className="btn btn-primary">İletişime Geçin</Link>
          </div>
        </div>
      </section>

      <JsonLd
        data={breadcrumbSchema([
          { name: 'Ana Sayfa', url: '/' },
          { name: 'Marinalar', url: '/marinalar' },
        ])}
      />
    </>
  );
}
