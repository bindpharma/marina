import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Yat Minderleri — Güneşlenme, Fly Bridge ve Oturma Grubu Minderleri',
  description:
    'Güverte, fly bridge ve oturma grubu için suya ve UV\'ye dayanıklı, hızlı kuruyan dolgulu yat minderi imalatı. Sunbrella kumaş, fast-dry sünger, YKK marin fermuar.',
  path: '/hizmetler/yat-minderleri',
  keywords:
    'yat minderi, fly bridge minderi, güverte minderi, marin minder, sunbrella minder, sundeck minderi, yat şilte, fast-dry minder',
});

export default function YatMinderleriPage() {
  return (
    <ServicePageTemplate
      slug="yat-minderleri"
      longIntro={
        <>
          <p>
            Yat minderleri günün en az dört farklı zorluğuyla karşılaşır: güneş, tuz, ıslaklık ve
            ağır kullanım. Aslan Marin atölyesinde minder imalatımız bu dört faktörün her birine
            ayrı bir mühendislik cevabı vermek üzerine kuruludur — kumaştan dolguya, fermuardan
            drenaj deliklerine kadar.
          </p>
          <p>
            Güverte ve sundeck minderlerinden, fly bridge oturma grubu yastıklarına, U-yastığı
            takımlarından kabin şiltelerine kadar her tür minder uygulamasını üretiyoruz. Tek
            ölçü standardı yok; her tekneye birebir kalıp.
          </p>
          <p>
            Açık hücreli fast-dry süngerlerimiz, bir yağmur ya da dalga sonrasında saatler içinde
            (geleneksel süngerin günlerce kaldığı sürede) tamamen kurur. Su geçirmez fermuarlar
            ve gizli drenaj kanallarıyla minderiniz aldıkları suyu bir gece içinde dışarı atar.
          </p>
        </>
      }
      sections={[
        {
          heading: 'Hangi minder, hangi alana?',
          body: (
            <p>
              Güverte ve sundeck için: yüksek yoğunluklu, fast-dry, kapalı hücre sünger ve
              Sunbrella kumaş. Fly bridge oturma grubu için: orta yoğunluklu sünger, ergonomik
              dikim. U-yastığı ve dinette için: yüksek yoğunluklu sünger ve dayanıklı yan
              paneller. Kabin şilteleri için: medikal yoğunlukta sünger ve nefes alabilen kumaş
              kombinasyonları.
            </p>
          ),
        },
        {
          heading: 'Fast-dry sünger ne demek?',
          body: (
            <>
              <p>
                Açık hücre yapısına sahip, suyun içeride hapsolmadan akıp gittiği özel bir sünger
                tipidir. Yağmur ya da dalga sonrası kuruma süresi geleneksel süngerden 4-5 kat
                daha hızlıdır.
              </p>
              <p>
                Üstelik küflenmez, kötü koku yapmaz ve esnekliğini yıllarca korur. Dış mekândaki
                tüm minderlerde varsayılan olarak fast-dry sünger kullanıyoruz.
              </p>
            </>
          ),
        },
        {
          heading: 'Su geçirmez fermuar ve drenaj',
          body: (
            <p>
              Minderlerin kumaş kılıfını kapatan fermuarlar tuza dirençli YKK marin
              kalitesidir. Tabana yerleştirilen drenaj göz delikleri (grommet), olası bir su
              girişinde minderin içerideki suyu hızla dışarı atmasını sağlar — sünger uzun süre
              ıslak kalmaz.
            </p>
          ),
        },
        {
          heading: 'Yastık ve şilte takımları',
          body: (
            <p>
              Sırt yastıkları, sunbed ekstra yastıkları, kollu sırt destekleri ve yatak
              takımları için hem dolgu hem de yüzey kumaşı, takıma uyumlu seçilir. Aksesuar
              yastıkları için hem dış kullanım hem iç mekân kumaş çiftleri sunarak, yastığı
              sezona göre döndürmenizi sağlıyoruz.
            </p>
          ),
        },
      ]}
      whyUs={[
        'Açık hücre fast-dry sünger — saatler içinde kurur, küflenmez.',
        'Sunbrella ve marin sınıfı kumaşlar; UV haslığı 5-7 yıl.',
        'YKK marin fermuar ve gizli drenaj göz delikleri.',
        'Tekne formuna birebir kalıp; standart ölçü yok.',
        'İç ve dış kullanım için ikili kılıf seçeneği.',
        'Sezona uygun takım önerisi: salon, sundeck, fly bridge.',
      ]}
    />
  );
}
