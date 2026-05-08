import SmartImage from './SmartImage';
import Reveal from './Reveal';
import { IMAGES } from '@/lib/images';

const MATERIALS = [
  {
    name: 'Sunbrella',
    desc: 'Akrilik dış mekân kumaşı — UV korumalı, küflenmez, 5+ yıl renk haslığı.',
    use: 'Tente, minder, kapela, oturma grubu',
  },
  {
    name: 'Stamoid Top',
    desc: 'PVC bazlı su geçirmez tente kumaşı — ağır kullanıma uygun, kolay temizlik.',
    use: 'Bimini, kapela, kışlık branda',
  },
  {
    name: 'Silvertex',
    desc: 'Marine grade suni deri — güçlü, lekelenmeye dayanıklı, geniş renk yelpazesi.',
    use: 'İç döşeme, oturma grubu, döşeme paneli',
  },
  {
    name: 'Serge Ferrari',
    desc: 'Premium kompozit dış mekân kumaşı — Avrupa marin standardı.',
    use: 'Üst seviye tente, kapela, branda',
  },
  {
    name: 'YKK Marine',
    desc: 'Tuza dirençli marin fermuar — korozyon ve UV dayanımı.',
    use: 'Minder, kılıf, cam-zip uygulamalar',
  },
  {
    name: 'Strataglass',
    desc: 'Optik kaliteli yumuşak vinil cam — şeffaflık 7+ yıl korunur.',
    use: 'Kapela cam pencere, full enclosure',
  },
];

export default function Materials() {
  return (
    <section className="bg-white py-24 sm:py-32" aria-labelledby="materials-title">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <span className="eyebrow">Marin Sınıfı Malzeme</span>
            <h2
              id="materials-title"
              className="mb-6 mt-5 text-[clamp(32px,5vw,56px)] font-light leading-[1.05] tracking-[-0.025em]"
            >
              Sahte yok, taklit yok — <em className="italic font-normal text-gold-dark">orijinal kanal.</em>
            </h2>
            <p className="text-[16px] leading-relaxed text-muted sm:text-[17px]">
              Tüm dış mekân uygulamalarımızda dünya standartlarındaki marin kumaşları
              kullanıyoruz. Her bir malzeme yetkili tedarikçi kanalından geliyor, sertifikalı
              ve garantili. Ucuz alternatif kullanmıyoruz — çünkü iki sezon sonra yenilemek
              uzun vadede daha pahalıdır.
            </p>

            <div className="mt-8 aspect-[4/3] overflow-hidden rounded-xl">
              <SmartImage
                image={IMAGES.materials}
                fallbackVariant="fabric"
                className="absolute inset-0 h-full w-full"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </Reveal>

          <Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {MATERIALS.map((m) => (
                <article
                  key={m.name}
                  className="card card-hover p-6"
                >
                  <h3 className="font-serif text-xl tracking-tight text-navy">{m.name}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">{m.desc}</p>
                  <div className="mt-4 border-t border-navy/10 pt-4">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-dark">
                      Kullanım
                    </div>
                    <p className="mt-1 text-[13px] text-slate2">{m.use}</p>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
