import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Yat Halısı — Marin Halı ve PVC Tekne Kaplama Uygulamaları',
  description:
    'Yat halısı uygulamaları: leke tutmaz, alev geciktirici, anti-bakteriyel marin halılar ve PVC kaplamalar. İstanbul tüm marinalarda tekne formuna özel kesim ve montaj.',
  path: '/hizmetler/yat-halisi',
  keywords:
    'yat halısı, marin halı, tekne halısı, pvc tekne kaplama, antibakteriyel yat halısı, leke tutmaz tekne halısı, salon halısı, fly bridge halısı',
});

export default function YatHalisiPage() {
  return (
    <ServicePageTemplate
      slug="yat-halisi"
      longIntro={
        <>
          <p>
            Yat halısı, denizden gelen tuzu, ıslak ayakkabıyı, güneş kremini ve içeceği aynı anda
            kaldırmak zorundadır. Standart bir ev halısı bunu birkaç hafta içinde kaybeder.
            Aslan Marin&apos;in tedarik ettiği marin halılar; cam elyaflı PVC tabanlı, leke
            tutmaz, alev geciktirici, anti-bakteriyel ve hızlı kuruyan ürünlerdir.
          </p>
          <p>
            Salon, kabin koridoru, dış güverte ve fly bridge için farklı doku ve renk seçenekleri
            sunuyoruz. Halı, teknenizin formuna birebir kesim yapılarak uygulanıyor — kenar
            payları, eşik geçişleri ve drenaj boşlukları profesyonel olarak işleniyor.
          </p>
          <p>
            İki kurulum seçeneği var: yapışkan ya da geçmeli. Yapışkan uygulama uzun ömür ve
            sabitlik sağlar; geçmeli sistem kolay sökülüp temizlenebilir. Hangisinin sizin
            kullanımınıza uygun olduğuna keşifte beraber karar veriyoruz.
          </p>
        </>
      }
      sections={[
        {
          heading: 'Marin halı neden farklı?',
          body: (
            <>
              <p>
                Standart halıların aksine marin halılar; PVC veya cam elyaflı taban üzerine
                kaplanmış aşınma dirençli yüzeylerdir. Su emmez — bu yüzden ıslandığında
                küflenmez, koku yapmaz. Renk haslığı yüksektir; deniz suyu ve UV ile renk solmaz.
                Dokusu kaymaz — ıslak ayakta bile güvenlidir.
              </p>
              <p>
                Çoğu marin halı aynı zamanda alev geciktirici ve anti-bakteriyeldir. IMO
                standartları kapsamında üretilen ürünler özellikle daha büyük yatlar için bir
                gerekliliktir.
              </p>
            </>
          ),
        },
        {
          heading: 'Hangi alanlarda hangi halı?',
          body: (
            <p>
              İç salon ve dinette için yumuşak dokulu, ses yutan halılar tercih ediyoruz. Dış
              güverte ve fly bridge için ise tamamen su geçirmez, dokulu ve kaymaz yüzeyli marin
              kaplamalar öneriyoruz. Mutfak (galley) bölgesinde yağ ve sıvı temasına dayanan,
              kolay silinen PVC kaplamalar daha pratik. Bu kararı keşif sırasında alanın
              yoğunluğuna göre veriyoruz.
            </p>
          ),
        },
        {
          heading: 'Renk ve doku seçenekleri',
          body: (
            <p>
              Bej, gri, antrasit ve antik kahve tonlarından lacivert, yosun yeşili ve teak ahşap
              imitasyonuna kadar geniş bir renk skalası mevcut. Doku olarak düz, çizgili, tahta
              imitasyonu, halat dokulu ve geometrik desenler arasından seçim yapabilirsiniz. Tüm
              numuneleri teknenizin ışığında değerlendirmeniz için keşif sırasında getiriyoruz.
            </p>
          ),
        },
        {
          heading: 'Bakım ve uzun ömür',
          body: (
            <p>
              Marin halılar minimum bakımla 8-10 yıl rahatlıkla kullanılabilir. Haftalık ıslak
              bez silmesi ve sezon başında nötr deterjanlı genel temizlik yeterlidir. Yapışkan
              sistemde halı tabanına yerleşen tortulara karşı yılda bir derinlemesine temizlik
              öneriyoruz — bu hizmeti de biz sağlıyoruz.
            </p>
          ),
        },
      ]}
      whyUs={[
        'Cam elyaflı PVC tabanlı, esnemeyen ve daralmayan halılar.',
        'Anti-bakteriyel ve alev geciktirici (IMO standardı seçenekler dahil).',
        'Tekne formuna birebir kalıp çıkarma ve hassas kesim.',
        'Yapışkan veya geçmeli kurulum — kullanımınıza özel öneri.',
        'Kapsamlı renk-doku skalası: ahşap imitasyondan halat dokuya.',
        'Sezon başı ve sonu derinlemesine temizlik servisi.',
      ]}
    />
  );
}
