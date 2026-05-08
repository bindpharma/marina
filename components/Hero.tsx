import Link from 'next/link';
import SmartImage from './SmartImage';
import { IMAGES } from '@/lib/images';

export default function Hero() {
  return (
    <section
      className="relative isolate flex min-h-[100vh] items-center overflow-hidden bg-navy text-white"
      aria-label="Aslan Marin tanıtım"
    >
      {/* Arka plan görseli */}
      <div className="absolute inset-0 -z-10">
        <SmartImage
          image={IMAGES.hero}
          fallbackVariant="yacht"
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
      </div>

      {/* Decorative accent */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at right top, rgba(212, 169, 90, 0.25), transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="container-x relative z-10 pb-24 pt-36 lg:pb-32 lg:pt-44">
        <div className="max-w-3xl">
          <span className="eyebrow-light">İstanbul · 2007&apos;den beri</span>
          <h1 className="mt-6 text-[clamp(42px,7vw,96px)] font-light leading-[1.02] tracking-[-0.035em] text-white">
            Denize çıkan her detay,
            <br />
            <em className="italic font-normal text-gold-light">elimizden geçer.</em>
          </h1>
          <p className="mt-7 max-w-2xl text-base font-light leading-relaxed text-white/85 sm:text-lg">
            Yat döşeme, dekorasyon, tente ve halı uygulamalarında İstanbul&apos;un tüm marinalarına
            atölye standartlarında hizmet veriyoruz. Sunbrella ve Stamoid gibi marin sınıfı
            malzemeyle, söz verilen tarihte, garantili işçilikle.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/iletisim" className="btn btn-primary">
              Ücretsiz Keşif Talep Et
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link href="/hizmetler" className="btn btn-ghost-dark">
              Hizmetlerimizi Keşfedin
            </Link>
          </div>

          {/* İstatistikler */}
          <dl className="mt-16 grid max-w-xl grid-cols-3 gap-7 border-t border-white/15 pt-10">
            <Stat number="15+" label="Yıllık Tecrübe" />
            <Stat number="10+" label="İstanbul Marinası" />
            <Stat number="500+" label="Tamamlanan Proje" />
          </dl>
        </div>

        {/* Trust badges */}
        <div className="mt-14 flex flex-wrap items-center gap-x-9 gap-y-4 border-t border-white/10 pt-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
            Yetkili Tedarikçi
          </span>
          <BrandLabel>Sunbrella</BrandLabel>
          <BrandLabel>Stamoid Top</BrandLabel>
          <BrandLabel>Silvertex</BrandLabel>
          <BrandLabel>Serge Ferrari</BrandLabel>
          <BrandLabel>YKK Marine</BrandLabel>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 lg:flex"
        aria-hidden="true"
      >
        <span>Aşağı kaydırın</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 5v14M5 12l7 7 7-7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <dt className="font-serif text-3xl font-light leading-none tracking-tight text-gold-light sm:text-4xl">
        {number}
      </dt>
      <dd className="mt-2 text-[11px] font-medium uppercase tracking-[0.1em] text-white/60">
        {label}
      </dd>
    </div>
  );
}

function BrandLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-serif text-base italic text-white/65 sm:text-lg">
      {children}
    </span>
  );
}
