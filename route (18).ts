import type { Metadata } from 'next';
import Link from 'next/link';

import PageHero from '@/components/PageHero';
import FAQAccordion from '@/components/FAQAccordion';
import Testimonials from '@/components/Testimonials';
import Reveal from '@/components/Reveal';
import JsonLd from '@/components/JsonLd';

import { breadcrumbSchema, faqPageSchema, pageMeta } from '@/lib/seo';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = pageMeta({
  title: 'Sık Sorulan Sorular — Yat Döşeme ve Dekorasyon',
  description:
    'Yat döşeme süreçleri, malzeme tercihleri, teslim süreleri, garanti ve fiyatlandırma hakkında en sık aldığımız sorulara cevaplarımız.',
  path: '/sss',
  keywords: 'yat döşeme sıkça sorulan sorular, yat tente fiyat, yat döşeme süresi, sunbrella fiyat',
});

export default function SssPage() {
  return (
    <>
      <PageHero
        eyebrow="Sıkça Sorulan Sorular"
        title={
          <>
            Aklınızdaki ilk sorular, <em className="italic font-normal text-gold-light">net cevaplar.</em>
          </>
        }
        description="Yat döşeme süreçleri, malzeme tercihleri, teslim süreleri ve garantiyle ilgili en sık karşılaştığımız sorulara cevaplarımız."
        image={IMAGES.about}
        imageVariant="craft"
        breadcrumbs={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'SSS' },
        ]}
      />

      <section className="bg-white py-24 sm:py-32">
        <div className="container-x">
          <Reveal>
            <FAQAccordion />
          </Reveal>

          <div className="mt-14 rounded-2xl bg-sand-100 p-10 text-center sm:p-12">
            <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
              Cevabını bulamadığınız bir soru mu var?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted">
              Telefonla arayın ya da WhatsApp&apos;tan yazın. Genellikle aynı gün içinde dönüş
              yapıyoruz. İstanbul içi tüm marinalarda yerinde keşif ücretsizdir.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link href="/iletisim" className="btn btn-dark">Bize Sorun</Link>
              <Link href="/hizmetler" className="btn btn-ghost-light">Hizmetlerimiz</Link>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <JsonLd
        data={[
          faqPageSchema,
          breadcrumbSchema([
            { name: 'Ana Sayfa', url: '/' },
            { name: 'SSS', url: '/sss' },
          ]),
        ]}
      />
    </>
  );
}
