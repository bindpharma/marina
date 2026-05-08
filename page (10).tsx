import type { Metadata } from 'next';
import Link from 'next/link';

import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import ProcessSteps from '@/components/ProcessSteps';
import GuaranteeBadges from '@/components/GuaranteeBadges';
import SmartImage from '@/components/SmartImage';
import Reveal from '@/components/Reveal';
import JsonLd from '@/components/JsonLd';

import { CONTACT } from '@/lib/constants';
import { breadcrumbSchema, pageMeta } from '@/lib/seo';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = pageMeta({
  title: 'Hakkımızda — Aslan Marin Yat Döşeme Atölyesi',
  description:
    'Aslan Marin, 2007\'den beri İstanbul Sütlüce\'de yat döşeme ve dekorasyon hizmeti veren bir atölyedir. Tek elden ölçüm, tasarım ve uygulama disiplini, marin sınıfı malzeme.',
  path: '/hakkimizda',
  keywords: 'aslan marin, yat döşeme atölyesi, sütlüce yat döşeme, istanbul yat dekorasyon firması',
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title={
          <>
            <em className="italic font-normal text-gold-light">2007&apos;den beri</em>,
            <br />
            tek bir atölye disiplini.
          </>
        }
        description="İstanbul Sütlüce'de kurduğumuz atölyemiz, bugün İstanbul'un her marinasına ulaşan bir uygulama ekibinin merkezidir. Her proje aynı titizlikle yürür."
        image={IMAGES.about}
        imageVariant="craft"
        breadcrumbs={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'Hakkımızda' },
        ]}
      />

      {/* Story */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-x">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-7">
              <span className="eyebrow">Hikayemiz</span>
              <h2 className="mt-5 text-[clamp(32px,4.5vw,52px)] font-light leading-[1.1] tracking-[-0.025em]">
                Bir tutku, bir atölye, <em className="italic font-normal text-gold-dark">bir disiplin.</em>
              </h2>
              <div className="mt-7 space-y-5 text-[16px] leading-relaxed text-muted sm:text-[17px]">
                <p>
                  Aslan Marin, deniz tutkusunu zanaatla buluşturan bir aile atölyesi olarak doğdu.
                  İstanbul&apos;un Haliç&apos;e bakan Sütlüce semtinde, tekne sahibi
                  müşterilerimizin uzun yıllar memnun kalacağı bir iş yapma anlayışıyla yola çıktık.
                </p>
                <p>
                  İlk gün koyduğumuz ilkeler hâlâ değişmedi:{' '}
                  <strong className="font-semibold text-navy">söz verdiğimiz tarihte teslim</strong>,{' '}
                  <strong className="font-semibold text-navy">kullandığımız malzemenin orijinalliği</strong>{' '}
                  ve <strong className="font-semibold text-navy">tek atölye disiplini</strong>.
                  Taşeron kullanmıyoruz; ölçümden dikime, montajdan teslime kadar her adım kendi
                  ekibimizden geçiyor.
                </p>
                <p>
                  Bugün İstanbul&apos;un Tuzla, Pendik, Ataköy, Fenerbahçe, Setur Kalamış başta olmak
                  üzere on iki ana marinasına aktif hizmet veriyoruz. Bunun yanında hangarlar,
                  tersaneler ve özel iskelelerdeki teknelere de mobil servis sağlıyoruz.
                </p>
              </div>

              <div className="mt-10 grid gap-7 sm:grid-cols-3">
                <Stat number="15+" label="Yıllık deneyim" />
                <Stat number="500+" label="Tamamlanan proje" />
                <Stat number="12" label="Hizmet verdiğimiz marina" />
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="sticky top-28 space-y-5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <SmartImage
                    image={IMAGES.workshop}
                    fallbackVariant="craft"
                    className="absolute inset-0 h-full w-full"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                </div>
                <div className="rounded-2xl bg-sand-100 p-7">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-dark">
                    Atölye
                  </div>
                  <p className="mt-2 font-serif text-xl leading-snug tracking-tight text-navy">
                    {CONTACT.address.street}
                    <br />
                    {CONTACT.address.district}, {CONTACT.address.city}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address.full)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold-dark"
                  >
                    Haritada gör →
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sand-100 py-24 sm:py-32">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="Değerlerimiz"
              title={
                <>
                  Çalışma şeklimizi <em className="italic font-normal text-gold-dark">tarifleyen</em> ilkeler.
                </>
              }
              description="Yıllar içinde kazandığımız tecrübe, her projede tutarlı bir kalite çizgisini korumak için bize bir yöntem geliştirmemizi sağladı."
            />
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <article className="card h-full p-8">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-gold/15 text-gold-dark">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      {v.icon}
                    </svg>
                  </span>
                  <h3 className="mt-6 font-serif text-2xl tracking-tight">{v.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{v.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <GuaranteeBadges />

      {/* Process */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="Sürecimiz"
              title={
                <>
                  Disiplinli bir <em className="italic font-normal text-gold-dark">çalışma akışı.</em>
                </>
              }
              description="Her projede dört aşamalı sabit bir süreç izliyoruz. Bu, hem teslim tarihimizi tutmamızı hem de kalitemizi her seferinde tekrarlayabilmemizi sağlıyor."
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
            Atölyemizi <em className="italic font-normal text-gold-light">tanıyın.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/75">
            Sütlüce&apos;deki üretim merkezimizi gezmek ya da projenizi konuşmak için bize ulaşın.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/iletisim" className="btn btn-primary">İletişime Geçin</Link>
            <Link href="/hizmetler" className="btn btn-ghost-dark">Hizmetlerimiz</Link>
          </div>
        </div>
      </section>

      <JsonLd
        data={breadcrumbSchema([
          { name: 'Ana Sayfa', url: '/' },
          { name: 'Hakkımızda', url: '/hakkimizda' },
        ])}
      />
    </>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-4xl font-light leading-none tracking-tight text-navy">
        {number}
      </div>
      <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
        {label}
      </div>
    </div>
  );
}

const VALUES = [
  {
    title: 'Tek atölye disiplini',
    text: 'Ölçümden montaja kadar tüm süreç kendi ekibimizden geçer. Taşeron kullanmıyoruz, sorumluluk tek elde.',
    icon: (
      <>
        <path d="M3 7l9-4 9 4-9 4-9-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M3 12l9 4 9-4M3 17l9 4 9-4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: 'Sözden caymayız',
    text: 'Verdiğimiz teklif, teslim faturasıyla aynıdır. Söz verdiğimiz tarihte montaj — bahar açılışına yetişir.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: 'Orijinal malzeme',
    text: 'Sunbrella, Stamoid, Silvertex, YKK Marine ve diğer marin sınıfı markalar; yetkili tedarikçi kanalı, sertifikalı.',
    icon: (
      <>
        <path d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
];
