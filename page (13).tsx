import Link from 'next/link';
import type { Metadata } from 'next';

import Hero from '@/components/Hero';
import SectionHead from '@/components/SectionHead';
import ServicesGrid from '@/components/ServicesGrid';
import ProcessSteps from '@/components/ProcessSteps';
import MarinasList from '@/components/MarinasList';
import FAQAccordion from '@/components/FAQAccordion';
import Testimonials from '@/components/Testimonials';
import Materials from '@/components/Materials';
import GuaranteeBadges from '@/components/GuaranteeBadges';
import SmartImage from '@/components/SmartImage';
import Reveal from '@/components/Reveal';
import JsonLd from '@/components/JsonLd';

import { SITE } from '@/lib/constants';
import { faqPageSchema } from '@/lib/seo';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Aslan Marin | İstanbul Yat Döşeme ve Dekorasyon — Profesyonel Marin Atölyesi',
  description:
    'Tuzla, Pendik, Ataköy, Fenerbahçe ve Kalamış başta olmak üzere İstanbul\'un tüm marinalarında yat döşeme, tente, halı, minder ve dekorasyon uygulamaları. Sunbrella ve Stamoid marin sınıfı kumaş, ücretsiz keşif, atölye garantisi.',
  alternates: { canonical: SITE.url },
};

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Trust badges */}
      <GuaranteeBadges />

      {/* Services */}
      <section id="hizmetler" className="bg-white py-24 sm:py-32" aria-labelledby="services-title">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="Hizmetlerimiz"
              title={
                <>
                  Teknenizin <em className="italic font-normal text-gold-dark">her köşesi</em>
                  <br />
                  için tek atölye.
                </>
              }
              description="Yatınızın yaşam alanları, güvertesi ve dış mekânı için tasarımdan uygulamaya eksiksiz bir hizmet yelpazesi sunuyoruz. Her uygulamada Sunbrella, Stamoid ve Silvertex gibi marin sınıfı, UV ve tuza dayanıklı malzemeler kullanıyoruz."
            />
          </Reveal>
          <h2 id="services-title" className="sr-only">Hizmetlerimiz</h2>
          <Reveal>
            <ServicesGrid />
          </Reveal>
        </div>
      </section>

      {/* About / Manifesto with image */}
      <section id="hakkimizda" className="relative overflow-hidden bg-navy py-24 text-white sm:py-32">
        <div className="container-x">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="relative aspect-[5/6] overflow-hidden rounded-2xl">
                <SmartImage
                  image={IMAGES.about}
                  fallbackVariant="craft"
                  className="absolute inset-0 h-full w-full"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="img-overlay-light" aria-hidden="true" />
                <div className="absolute bottom-6 left-6 max-w-xs rounded-lg bg-white/95 p-5 backdrop-blur-md">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-dark">
                    Sütlüce Atölyesi
                  </div>
                  <p className="mt-1 font-serif text-base text-navy">
                    Üretim, ölçü ve dikim — hepsi tek çatı altında.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <span className="eyebrow-light">Hakkımızda</span>
              <h2 className="mt-5 max-w-xl text-[clamp(34px,5vw,56px)] font-light leading-[1.05] tracking-[-0.025em]">
                Bir teknenin <em className="italic font-normal text-gold-light">karakteri</em>, dokunduğun her yüzeyde gizlidir.
              </h2>
              <div className="mt-7 max-w-xl space-y-5 text-base font-light leading-relaxed text-white/80 sm:text-[17px]">
                <p>
                  Aslan Marin; ölçüm, tasarım ve uygulamayı tek atölye disipliniyle birleştiren bir
                  yat döşeme firmasıdır. Sütlüce&apos;deki üretim merkezimizden, İstanbul&apos;un her
                  marinasına aynı titizlikle ulaşıyoruz.
                </p>
                <p>
                  Her proje yeni bir keşifle başlar: bütçenize ve teknenize en uygun malzemeyi sizinle
                  birlikte seçer, dikiş kalitemizden ödün vermeden, söz verdiğimiz tarihte teslim ederiz.
                </p>
              </div>

              <div className="mt-10">
                <Link href="/hakkimizda" className="btn btn-ghost-dark">
                  Daha fazla bilgi
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M5 12h14M13 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="surec" className="bg-white py-24 sm:py-32">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="Sürecimiz"
              title={
                <>
                  Tekneye gelmemizden teslime, <em className="italic font-normal text-gold-dark">dört adım.</em>
                </>
              }
              description="Her proje aynı disiplinle yürür: şeffaf süreç, net teslim tarihleri ve sürpriz olmayan fiyatlandırma. Yatınız, sezonu kaçırmadan denize döner."
            />
          </Reveal>
          <Reveal>
            <ProcessSteps />
          </Reveal>
        </div>
      </section>

      {/* Materials section - new */}
      <Materials />

      {/* Testimonials - new */}
      <Testimonials />

      {/* Marinas (local SEO) */}
      <section id="marinalar" className="border-t border-navy/10 bg-sand-100 py-24 sm:py-32">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="Hizmet Bölgesi"
              title={
                <>
                  İstanbul&apos;un her marinasında <em className="italic font-normal text-gold-dark">yanınızdayız.</em>
                </>
              }
              description="Aşağıdaki marinaların yanı sıra İstanbul Boğazı, Marmara kıyıları, hangarlar ve özel iskelelere mobil hizmet veriyoruz. Açık denizdeki tekneler için randevulu servis sağlıyoruz."
            />
          </Reveal>
          <Reveal>
            <MarinasList />
          </Reveal>
        </div>
      </section>

      {/* CTA Band */}
      <section className="relative overflow-hidden bg-navy py-24 text-center text-white sm:py-28">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2"
          style={{
            background: 'radial-gradient(circle, rgba(212,169,90,0.10), transparent 60%)',
          }}
          aria-hidden="true"
        />
        <div className="container-x relative">
          <span className="eyebrow-light">Yeni Sezon</span>
          <h2 className="mx-auto mt-5 max-w-4xl text-[clamp(38px,5.5vw,72px)] font-light leading-[1.05] tracking-[-0.025em]">
            Sezon başlamadan, <em className="italic font-normal text-gold-light">tekneniz hazır olsun.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[17px] font-light text-white/75 sm:text-lg">
            Bahar yoğunluğu başlamadan ölçü randevusu alın. Yerinde keşif ve teklif tamamen ücretsizdir.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link href="/iletisim" className="btn btn-primary">Ücretsiz Keşif Talep Et</Link>
            <Link href="/projeler" className="btn btn-ghost-dark">Projelerimizi Gör</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="Sıkça Sorulan Sorular"
              title={
                <>
                  Aklınızdaki ilk soruları, <em className="italic font-normal text-gold-dark">net cevaplarla.</em>
                </>
              }
              description="Yat döşeme süreçleri, malzeme tercihleri, teslim süreleri ve garanti hakkında en sık aldığımız sorulara cevaplarımız."
            />
          </Reveal>
          <Reveal>
            <FAQAccordion />
          </Reveal>
          <div className="mt-10 text-center">
            <Link href="/sss" className="btn btn-ghost-light">
              Tüm Soruları Gör
            </Link>
          </div>
        </div>
        <JsonLd data={faqPageSchema} />
      </section>
    </>
  );
}
