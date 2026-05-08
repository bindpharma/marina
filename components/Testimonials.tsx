import Reveal from './Reveal';
import JsonLd from './JsonLd';
import { SITE } from '@/lib/constants';

const TESTIMONIALS = [
  {
    name: 'Mehmet Y.',
    role: 'Tekne Sahibi · Tuzla Marina',
    rating: 5,
    text: 'Bimini ve oturma grubu döşemesini bahar açılışına yetiştirdiler. Söz verdikleri tarihte, tam beklediğim kalitede. Sunbrella kumaş hâlâ ilk günkü gibi.',
  },
  {
    name: 'Ayşe K.',
    role: 'Kalamış Marina',
    rating: 5,
    text: 'Salon ve kabin döşemesi yenileme için iki firma daha aradım, Aslan Marin&apos;in keşfi en detaylıydı. Renk-doku önerileri çok yerindeydi, sonuç fotoğraftan iyi.',
  },
  {
    name: 'Cem T.',
    role: 'Pendik Marina',
    rating: 5,
    text: 'Marina&apos;ya gelip ölçü aldılar, atölyede dikip yine marinada monte ettiler. İşçilik temiz, fiyat şeffaf, garantili. Yıllık bakım sözleşmesine geçtik.',
  },
  {
    name: 'Burak S.',
    role: 'Fenerbahçe Marina',
    rating: 5,
    text: 'Kapela ve cam-zip pencere yenileme. Krom-nikel iskelet, YKK fermuarlar — her detay düşünülmüş. Kötü hava koşullarında bile güvende hissediyorum.',
  },
  {
    name: 'Selin Ö.',
    role: 'Ataköy Marina',
    rating: 5,
    text: 'Fly bridge ve sundeck minderleri için çalıştık. Fast-dry sünger gerçekten farkını gösteriyor — yağmur sonrası akşam oturmaya hazır oluyor.',
  },
  {
    name: 'Can A.',
    role: 'İstinye Marina',
    rating: 5,
    text: 'Komple iç dekorasyon: tavan, duvar, perde, yatak. Renk paleti danışmanlığı bile dahildi. Eski teknemi yıllardır birikmiş bir hayalim gibi yenilediler.',
  },
];

export default function Testimonials() {
  // Schema.org Review yapısı — yıldızlı arama sonuçları için
  const reviewSchema = TESTIMONIALS.map((t) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: { '@id': `${SITE.url}/#business` },
    author: { '@type': 'Person', name: t.name },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: t.rating,
      bestRating: 5,
    },
    reviewBody: t.text,
  }));

  // Aggregate rating
  const aggregateRating = {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    itemReviewed: { '@id': `${SITE.url}/#business` },
    ratingValue: '5.0',
    reviewCount: TESTIMONIALS.length,
    bestRating: '5',
    worstRating: '1',
  };

  return (
    <section className="bg-sand-100 py-24 sm:py-32" aria-labelledby="testimonials-title">
      <div className="container-x">
        <Reveal>
          <div className="mb-14 grid gap-7 lg:mb-20 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <span className="eyebrow">Müşteri Yorumları</span>
              <h2
                id="testimonials-title"
                className="mt-5 text-[clamp(34px,5vw,60px)] font-light leading-[1.05] tracking-[-0.025em]"
              >
                Söylediklerimizi <em className="italic font-normal text-gold-dark">onlar</em> doğruluyor.
              </h2>
            </div>
            <div className="self-end">
              <div className="flex items-center gap-3 text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <p className="mt-3 text-[15px] text-muted">
                <strong className="font-semibold text-navy">5.0 / 5.0</strong> · {TESTIMONIALS.length}+ değerlendirme
                · İstanbul tüm marinalardan
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 60}>
              <article className="card card-hover h-full p-7 sm:p-8">
                <div className="flex items-center gap-1 text-gold">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} small />
                  ))}
                </div>
                <p className="mt-5 text-[15px] leading-relaxed text-slate2">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-7 flex items-center gap-3 border-t border-navy/10 pt-5">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-navy text-[13px] font-semibold text-gold-light">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <div className="text-[14px] font-semibold text-navy">{t.name}</div>
                    <div className="text-[11px] uppercase tracking-[0.1em] text-muted">{t.role}</div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      <JsonLd data={[aggregateRating, ...reviewSchema]} />
    </section>
  );
}

function Star({ small = false }: { small?: boolean }) {
  return (
    <svg
      width={small ? 14 : 18}
      height={small ? 14 : 18}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2l2.6 6.5 7 .5-5.4 4.6 1.7 6.8L12 17l-5.9 3.4 1.7-6.8L2.5 9l7-.5L12 2z" />
    </svg>
  );
}
