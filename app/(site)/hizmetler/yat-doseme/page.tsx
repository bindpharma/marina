import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Yat Döşeme — İstanbul Yat İç ve Dış Döşeme Uygulamaları',
  description:
    'Yat döşeme hizmeti: salon, kabin, oturma grubu ve dış güverte için marin sınıfı kumaş ve dolgularla özel imalat. İstanbul tüm marinalarda ücretsiz ölçü ve montaj.',
  path: '/hizmetler/yat-doseme',
  keywords:
    'yat döşeme, yat döşeme istanbul, yat iç döşeme, tekne döşeme, yat oturma grubu döşeme, marin döşeme, sunbrella yat döşeme, silvertex yat döşeme',
});

export default function YatDosemePage() {
  return (
    <ServicePageTemplate
      slug="yat-doseme"
      longIntro={
        <>
          <p>
            Yat döşeme, ahşaptaki rutubete, dikiş üzerindeki tuza ve süngerin denizdeki yorgunluğuna
            saygı duyan bir uygulamadır. Aslan Marin atölyesinde her yat döşeme projesi, teknenin
            yerinde ölçülmesi ve mevcut iskeletin/dolgunun durumunun değerlendirilmesiyle başlar.
            Doğru karar, doğru bir teşhis sonrasında verilir.
          </p>
          <p>
            Salon ve dinette gruplarınız, U yastıkları, kaptan koltuğu kılıfları, başlık panelleri,
            yatak şilteleri ve dış güverte oturma elemanlarına kadar yatınızın iç ve dış yüzeyindeki
            her döşeme detayını biz üretir, biz monte ederiz. Tek atölye disipliniyle, taşeronsuz.
          </p>
          <p>
            Dış mekânlarda Sunbrella, Stamoid Top ve Silvertex gibi UV ve tuz dayanımı yüksek
            kumaşları; iç mekânlarda mikrofiber suni deri, Alcantara ve premium döşemelik kumaşları
            tercih ediyoruz. Dolgu kararı bizim için ayrı bir mühendislik konusudur: oturma
            yoğunluğu yüksek alanlar için yüksek yoğunluklu sünger, dış mekânlar için açık hücre
            fast-dry sünger uyguluyoruz.
          </p>
        </>
      }
      sections={[
        {
          heading: 'Hangi yat döşeme uygulamalarını yapıyoruz?',
          body: (
            <>
              <p>
                Salon ve dinette döşemeleri, U-yastığı ve banket grupları, başlık panelleri,
                ahşap üstü tampon yastıkları, yemek alanı oturma takımları, kaptan koltuğu ve
                yardımcı koltuk kılıfları, yatak şilteleri ve nevresim takımları, dış güvertedeki
                bench ve sundeck minderleri.
              </p>
              <p>
                Tüm parçalar tekne formuna birebir kalıp çıkarılarak üretilir. Taşıma sırasında
                bozulmayacak, montajda boşluk bırakmayacak hassasiyette dikim uygularız.
              </p>
            </>
          ),
        },
        {
          heading: 'Eski döşeme yenilensin mi yoksa komple sökülsün mü?',
          body: (
            <>
              <p>
                Bu kararı keşif sırasında birlikte veririz. Sünger çökmemiş, ahşap iskelet
                sağlamsa yalnızca kumaş yenileme uygulayabiliriz — bu en ekonomik çözümdür ve
                tekneyi sezona çabuk hazırlar. Süngerde yorulma, ahşapta çürüme ya da iskelette
                zayıflama varsa komple yenileme öneriyoruz.
              </p>
              <p>
                İki seçeneğin maliyet ve dayanım farkını şeffaf olarak anlatır, kararı sahibinin
                vermesini sağlarız. Sürpriz fark çıkarmıyoruz.
              </p>
            </>
          ),
        },
        {
          heading: 'Hangi kumaş seçimi tekneme uygun?',
          body: (
            <>
              <p>
                Dış mekân için tartışmasız önerimiz Sunbrella veya dengi marin kumaşlardır:
                UV korumalı, küflenmez, hızlı kuruyan ve renk haslığı yüksek. Akrilik dokulu
                kumaşlar 5-7 yıl boyunca renk solması olmadan dayanır.
              </p>
              <p>
                İç mekân için kullanım yoğunluğuna göre seçim yapıyoruz: yoğun kullanılan
                ana salon için silinebilir mikrofiber suni deri; misafir kabinleri için ise
                Alcantara ya da yumuşak dokulu döşemelik kumaşlar. Tüm seçenekler için kumaş
                örneklerini teknenize getirip ışık altında birlikte değerlendiriyoruz.
              </p>
            </>
          ),
        },
        {
          heading: 'Süreç ve teslim süresi',
          body: (
            <p>
              Standart bir oturma grubu döşemesi, ölçü alındıktan sonra 7–14 iş günü içinde
              tamamlanır. Komple iç döşeme projeleri 3–4 haftaya kadar uzayabilir. Sezon başında
              (mart-nisan) yoğunluk artar — bu sebeple en geç şubat ayında randevu almanızı
              öneririz. Söz verilen tarihte teslim, en katı çalışma prensibimizdir.
            </p>
          ),
        },
      ]}
      whyUs={[
        'Tek atölye, taşeronsuz üretim — projenizi kim teslim ettiyse, sorumlusu da odur.',
        'Yerinde ücretsiz keşif ve aynı/ertesi gün teklif. Şeffaf fiyatlandırma.',
        'Tüm dikişler için yazılı işçilik garantisi, hızlı ve ücretsiz revizyon.',
        'Marin sınıfı sertifikalı kumaşlar; sahte ya da taklit malzeme yok.',
        '15+ yılın getirdiği marka, model ve tekne formu deneyimi.',
        'Sezona hazır teslim — söz verilen tarihte denize indirme garantisi.',
      ]}
    />
  );
}
