import type { Metadata } from 'next';
import Link from 'next/link';

import PageHero from '@/components/PageHero';
import ServicesGrid from '@/components/ServicesGrid';
import Materials from '@/components/Materials';
import GuaranteeBadges from '@/components/GuaranteeBadges';
import ProcessSteps from '@/components/ProcessSteps';
import SectionHead from '@/components/SectionHead';
import Reveal from '@/components/Reveal';
import JsonLd from '@/components/JsonLd';

import { breadcrumbSchema, pageMeta } from '@/lib/seo';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = pageMeta({
  title: 'Hizmetlerimiz — Yat Döşeme, Tente, Halı, Minder ve Dekorasyon',
  description:
    'Aslan Marin\'in yat döşeme, tente, halı, minder ve dekorasyon hizmetleri. İstanbul\'un tüm marinalarında atölye standartlarında uygulama, marin sınıfı malzeme.',
  path: '/hizmetler',
  keywords:
    'yat döşeme hizmetleri, yat tentesi, yat halısı, yat minderi, yat dekorasyonu, marin uygulamalar istanbul',
});

export default function HizmetlerPage() {
  return (
    <>
      <PageHero
        eyebrow="Hizmetlerimiz"
        title={
          <>
            Tek atölye, <em className="italic font-normal text-gold-light">tüm hizmetler.</em>
          </>
        }
        description="Yat döşeme, tente, halı, minder ve dekorasyon — yatınızın iç ve dış mekânındaki tüm yüzeyler için tek elden bir hizmet yelpazesi."
        image={IMAGES.serviceUpholstery}
        imageVariant="craft"
        breadcrumbs={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'Hizmetler' },
        ]}
      />

      <section className="bg-white py-24 sm:py-32">
        <div className="container-x">
          <Reveal>
            <ServicesGrid />
          </Reveal>
        </div>
      </section>

      {/* Materials */}
      <Materials />

      {/* Guarantee */}
      <GuaranteeBadges />

      {/* Process */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="Sürecimiz"
              title={
                <>
                  Tüm hizmetler için, <em className="italic font-normal text-gold-dark">aynı disiplin.</em>
                </>
              }
              description="Hangi hizmeti tercih ederseniz edin, çalışma sürecimiz aynı şekilde işler: keşif, tasarım, üretim ve teslim."
            />
          </Reveal>
          <Reveal>
            <ProcessSteps />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 text-center text-white sm:py-24">
        <div className="container-x">
          <h2 className="mx-auto max-w-3xl text-[clamp(30px,4vw,52px)] font-light leading-[1.1] tracking-[-0.025em]">
            Hangi hizmet sizin için <em className="italic font-normal text-gold-light">uygun?</em>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/75">
            Bütçeniz ve ihtiyacınız için en doğru paketi birlikte belirleyelim. Ücretsiz keşif ve teklif.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/iletisim" className="btn btn-primary">Teklif Talep Et</Link>
            <Link href="/projeler" className="btn btn-ghost-dark">Proje Galerisi</Link>
          </div>
        </div>
      </section>

      <JsonLd
        data={breadcrumbSchema([
          { name: 'Ana Sayfa', url: '/' },
          { name: 'Hizmetler', url: '/hizmetler' },
        ])}
      />
    </>
  );
}
