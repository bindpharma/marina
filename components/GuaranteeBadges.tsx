import Reveal from './Reveal';

const BADGES = [
  {
    title: 'Yazılı İşçilik Garantisi',
    desc: 'Dikiş, montaj ve malzeme kaynaklı sorunlarda ücretsiz revizyon. Sözleşmeli garanti.',
    icon: (
      <>
        <path d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: 'Ücretsiz Yerinde Keşif',
    desc: 'İstanbul içi tüm marinalarda ölçü ve teklif tamamen ücretsiz. Hızlı dönüş.',
    icon: (
      <>
        <path d="M12 22s7-7 7-13a7 7 0 10-14 0c0 6 7 13 7 13z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </>
    ),
  },
  {
    title: 'Şeffaf Sabit Fiyat',
    desc: 'Keşif sonrası verilen teklif, teslim faturasıyla aynıdır. Sürpriz farklar yok.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7v10M9 10c0-1 1-2 3-2s3 1 3 2-1 1.5-3 2-3 1-3 2 1 2 3 2 3-1 3-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: 'Sezonu Kaçırmayan Teslimat',
    desc: 'Söz verilen tarihte montaj — bahar açılışına yetişir, planlı çalışırız.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
];

export default function GuaranteeBadges() {
  return (
    <section className="bg-sand-100 py-20 sm:py-24" aria-labelledby="guarantee-title">
      <div className="container-x">
        <Reveal>
          <div className="mb-12 text-center">
            <span className="eyebrow">Çalışma Sözümüz</span>
            <h2
              id="guarantee-title"
              className="mt-4 text-[clamp(28px,4vw,44px)] font-light leading-[1.1] tracking-[-0.025em]"
            >
              Söz verdiğimiz, <em className="italic font-normal text-gold-dark">değişmez.</em>
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BADGES.map((badge, i) => (
            <Reveal key={badge.title} delay={i * 50}>
              <div className="card card-hover h-full p-7 text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold/10 text-gold-dark">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    {badge.icon}
                  </svg>
                </span>
                <h3 className="mt-5 font-serif text-lg tracking-tight">{badge.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">{badge.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
